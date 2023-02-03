<template>
  <view class="fu-page" :style="{ position: sticky ? 'sticky' : 'initial', top: top + 'px', 'z-index': zIndex }">
    <scroll-view class="fu-tab" scroll-x :scroll-left="moveX" :scroll-with-animation="animation" :style="{ height: height + 'rpx', 'line-height': height + 'rpx' }">
      <view :class="{'fu-flex':scrollspy}" style="position: relative;">
        <view
          class="fu-tab-item"
          :class="[active == index ? 'active' : '', 'item-active-' + index]"
          :style="{ color: active == index ? activeColor : inactiveColor, 'font-size': size + 'rpx' }"
          v-for="(item, index) in tabs"
          :key="index"
          @click="tabChange($event, item[nodeKey], index)"
        >
          {{ item[nodeTitle] }}
        </view>
        <view
          class="fu-tab-line"
          :style="{ width: getWidth + 'rpx', left: left, height: lineHeight + 'rpx', background: lineColor, transition: animation, bottom: bottom + 'rpx','border-radius':radius+'rpx' }"
        ></view>
      </view>
    </scroll-view>
  </view>
</template>

<script>
export default {
  props: {
    //底部条线宽
    'line-width': {
      type: [Number, String],
      default: 40
    },
    //底部条高度
    'line-height': {
      type: [Number, String],
      default: 4
    },
    //底部调颜色
    'line-color': {
      type: String,
      default: '#f02523'
    },
    //底部条位置
    bottom: {
      type: [Number, String],
      default: 8
    },
    // 底部条圆角
    radius:{
      type: [Number, String],
      default: 0
    },
    // tab高度
    height: {
      type: [Number, String],
      default: 96
    },
    //字体大小
    size: {
      type: [Number, String],
      default: 32
    },
    //选中状态
    'active-color': {
      type: String,
      default: '#f02523'
    },
    // 默认状态
    'inactive-color': {
      type: String,
      default: '#5f5f5f'
    },
    //数据
    tabs: {
      type: [Object, Array]
    },
    //动画
    animation: {
      type: String,
      default: 'all .3s ease'
    },
    // 标签名称
    'node-title': {
      type: String,
      default: 'name'
    },
    // 需要返回的唯一标识
    'node-key': {
      type: String,
      default: 'id'
    },
    // 是否使用粘性布局
    sticky: {
      type: Boolean,
      default: false
    },
    // 粘性布局离顶部高度
    top: {
      type: [String, Number],
      default: 0
    },
    'z-index': {
      type: [String, Number],
      default: 99
    },
    // 是否开启flex
    scrollspy:{
      type: Boolean,
      default: false
    },
    // 组件外层距离页面间距
    wp: {
      type: Number,
      default: 0,
    },
    // 以唯一标识计算哪个tab为激活状态
    current:{
      type: [String, Number],
      default: 0
    },
    'current-key':{
      type: [String, Number],
      default: ''
    }
  },
  data() {
    return {
      left: '0rpx',
      getWidth: 40,
      lineWidthArray: [],
      parentWidth: 0,
      moveX: 0,
      active:0
    };
  },
  computed: {
  },
  watch: {
    // 数据加载之后计算
    tabs(newVal, oldVal) {
      this.$nextTick(() => {
        console.log('watch',newVal);
        this.getSpacing();
      })
    }
  },
  mounted() {
    // 隐藏显示之后触发
    if(this.tabs.length>0){
        this.$nextTick(() => {
          console.log('mounted');
          let status = 0;
          let currentKey = this.currentKey?this.currentKey:this.nodeKey;
          let currentStatus = this.tabs.findIndex(item => item[currentKey] == this.current);
          console.log('this.current',this.current);
          console.log('this.currentKey',this.currentKey);
          console.log('currentStatus',currentStatus);
          this.active = currentStatus > -1 ? currentStatus : 0;
          // console.log('RRRRRRRRRRR',currentStatus,currentKey,this.current)
          this.getSpacing();
        })
    }
  },
  methods: {
    tabChange(e, id, index) {
      let _this = this;
      let windowWidth = uni.getSystemInfoSync().windowWidth;
      let activeItem = `item-active-${index}`;
      this.active = index;
      //事件源离左边距离
      let offsetLeft = (e.target.offsetLeft * 750) / windowWidth;
      console.log(e.target.offsetLeft,'offsetLeft')
      //事件源宽度
      let targetWidth = this.lineWidthArray[index];
      // 底部显示条需要位移到的位置
      this.$nextTick(function() {
        let lineOffsetLeft = Math.ceil(offsetLeft + (targetWidth / 2 - this.getWidth / 2));
        this.left = lineOffsetLeft + 'rpx';
      });
      // 获取父级宽度
      let objParent = uni
        .createSelectorQuery()
        .in(this)
        .select('.fu-tab');
      let parentWidth;

      objParent
        .boundingClientRect(function(data) {
          parentWidth = (data.width * 750) / windowWidth;
          let moveX = Math.ceil(offsetLeft - (parentWidth - targetWidth) / 2);
          // 转为px  scoll-view接受的值为px
          // console.log('11111111',offsetLeft,parentWidth,targetWidth)
          _this.moveX = (moveX * windowWidth) / 750;
        })
        .exec();
      let data = {};
      data.index = index;
      data[this.nodeKey] = id;
      this.$emit('change', data);
    },
    isArray(obj) {
      return Object.prototype.toString.call(obj) === '[object Array]';
    },
    getSpacing(){
      let _this = this;
      let {windowWidth,pixelRatio} = uni.getSystemInfoSync();
      // console.log(uni.getSystemInfoSync())
      // console.log(pixelRatio)
      // 底部条宽度是否超过了标签最小宽度
      let lineWidthArray = [];
      let lwa = [];
      if (this.isArray(this.tabs) && this.tabs.length > 0) {
        this.$nextTick(() => {
          // 主要计算底部线条宽度是否超出了最小的标签宽度 若超过线条宽度就显示为最小的标签宽度 start
          this.tabs.forEach((val, i) => {
            let activeItem = `item-active-${i}`;
            let obj = uni
              .createSelectorQuery()
              .in(this)
              .select(`.${activeItem}`);
            obj
              .boundingClientRect(function(data) {
                lineWidthArray.push(Math.floor((data.width * 750) / windowWidth));
                lwa.push(data.width)
              })
              .exec();
          });
          this.lineWidthArray = lineWidthArray;
          this.parentWidth = lineWidthArray.reduce(function(total, curr) {
            return total + curr;
          }, 0);
          if (_this.lineWidth > Math.min(...lineWidthArray)) {
            _this.getWidth = Math.min(...lineWidthArray);
          } else {
            _this.getWidth = _this.lineWidth;
          }
          // end
          //计算底部显示条初始位置
          let activeItem = `item-active-${this.active}`;
          console.log('this.active',this.active);
          let dataLeft = 0;
          let targetWidth = 0;
          let obj = uni
            .createSelectorQuery()
            .in(this)
            .select(`.${activeItem}`);
          obj
            .boundingClientRect(function(data) {
              targetWidth = Math.floor((data.width * 750) / windowWidth);
              console.log('targetWidth',targetWidth);
              dataLeft = Math.floor((data.left * 750) / windowWidth);
              console.log('dataLeft',dataLeft);
              setTimeout(()=>{
                _this.left = Math.floor((data.left)*750/windowWidth + targetWidth / 2 - _this.getWidth / 2 - _this.wp) + 'rpx';
                console.log('_this.left',_this.left);
              },200)
            })
            .exec();

            // 获取父级宽度
            let objParent = uni
              .createSelectorQuery()
              .in(this)
              .select('.fu-tab');
            let parentWidth;

            objParent
              .boundingClientRect(function(data) {
                parentWidth = (data.width * 750) / windowWidth;
                let moveX = Math.ceil(dataLeft - (parentWidth - targetWidth) / 2);
                // 转为px  scoll-view接受的值为px
                _this.moveX = (moveX * windowWidth) / 750;
              })
              .exec();
        });
      }
    }
  }
};
</script>

<style scoped lang="scss">
.fu-page {
  background: #ffffff;
  border-bottom: 1rpx solid #f1f1f1;
}
.fu-tab {
  height: 96rpx;
  line-height: 96rpx;
  font-size: 32rpx;
  color: #5f5f5f;
  white-space: nowrap;
  background: #ffffff;
  transition: all 0.3s ease;
  .fu-tab-item {
    padding: 0 30rpx;
    display: inline-block;

    &.active {
      color: #f02523;
    }
  }
  .fu-tab-line {
    position: absolute;
    bottom: 4rpx;
    left: 0;
    width: 40rpx;
    background: #f02523;
    height: 4rpx;
    border-radius: 2rpx;
    // transition: all 0.3s ease;
  }
  .fu-flex{
    display: flex;
    justify-content: space-around;
  }
}
</style>
