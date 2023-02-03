<template>
  <view
    class="component-box"
    :style="{
      position: query.sticky ? 'sticky' : 'initial',
      top: query.stickyTop + 'rpx',
      'z-index': zIndex,
    }"
  >
    <scroll-view
      class="fu-tab"
      scroll-x
      :scroll-left="moveX"
      :scroll-with-animation="animation"
      :style="{
        height: query.height + 'rpx',
        'line-height': query.height + 'rpx',
        backgroundColor: query.backgroundColor,
        padding: query.boxPaddingTB + 'rpx' + ' ' + query.boxPaddingLR + 'rpx',
      }"
    >
      <view class="fu-industry">
        <view :class="{ 'fu-flex': query.scrollspy }">
          <view
            typeKey="0"
            class="fu-tab-item"
            :class="[active == index ? 'active' : '', 'item-active-' + index]"
            :style="{
              color: active == index ? query.activeColor : query.inactiveColor,
              'font-size': query.fontSize + 'rpx',
              backgroundColor:
                active == index
                  ? query.actItemBackgroundColor && query.actItemBackgroundColor
                  : query.itemBackgroundColor && query.itemBackgroundColor,
              minWidth: query.itemWidth + 'rpx',
              height: query.itemHeight + 'rpx',
              borderRadius: query.itemRadius + 'rpx',
            }"
            v-for="(item, index) in tabs"
            :key="index"
            @click="tabChange($event, item[nodeKey], index)"
          >
            {{ item[nodeTitle] }}
          </view>
          <view
            class="fu-tab-line"
            :style="{
              width: getWidth + 'rpx',
              left: left,
              height: query.lineHeight + 'rpx',
              background: query.lineColor,
              transition: animation,
              bottom: query.lineBottom + 'rpx',
              'border-radius': query.lineRadius + 'rpx',
            }"
          ></view>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script>
let unitRatio = 750 / uni.getSystemInfoSync().windowWidth
export default {
  name: 'benben-tabs',
  props: {
    query: {
      type: Object,
      default: () => ({}),
    },
    list: {
      type: Array,
      default: () => [],
    },
    //动画
    animation: {
      type: String,
      default: 'all 0.2s ease',
    },
    // 标签名称
    nodeTitle: {
      type: String,
      default: 'name',
    },
    // 需要返回的唯一标识
    nodeKey: {
      type: String,
      default: 'value',
    },
    zIndex: {
      type: [String, Number],
      default: 90,
    },
    // 组件外层距离页面间距
    wp: {
      type: Number,
      default: 0,
    },
    // 以唯一标识计算哪个tab为激活状
    activeType: {
      type: [String, Number],
      default: '',
    },
  },
  data() {
    return {
      left: '0rpx',
      lineWidthArray: [],
      parentWidth: 0,
      moveX: 0,
      active: 0,
      //数据
      tabs: [],
    }
  },
  computed: {
    options() {
      if (this.list.length) {
        return this.list
      } else {
        return this.query.options
      }
    },
    getWidth() {
      if (this.query.lineWidth > Math.min(...this.lineWidthArray)) {
        return Math.min(...this.lineWidthArray)
      } else {
        return this.query.lineWidth
      }
    },
  },
  watch: {
    tabs(newVal) {
      if (newVal.length > 0) {
        let currentStatus = newVal.findIndex((item) => item[this.nodeKey] == this.activeType)
        if (currentStatus == -1) {
          this.active = 0
          this.$emit('update:active-type', newVal[0][this.nodeKey])
          this.$emit('change')
        } else {
          this.active = currentStatus
        }
      }
      this.$nextTick(() => {
        this.getSpacing()
      })
    },
    options: {
      handler(newVal, oldVal) {
        let optionData = JSON.parse(JSON.stringify(newVal || []))
        optionData.map((item) => {
          item.checked = false
        })
        this.tabs = optionData
      },
      deep: true,
      immediate: true,
    },
  },
  mounted() {},
  methods: {
    /* 从接口获取选项值  */
    tabChange(e, id, index) {
      let _this = this
      this.active = index
      //事件源离左边距离
      // let offsetLeft = e.target.offsetLeft * unitRatio
      //事件源离左边距离
      let offsetLeft = e.target.offsetLeft * unitRatio
      console.log(e.target.offsetLeft, 'offsetLeft')
      //事件源宽度
      let targetWidth = this.lineWidthArray[index]
      // 底部显示条需要位移到的位置
      this.$nextTick(function () {
        let lineOffsetLeft = Math.ceil(offsetLeft + (targetWidth - this.getWidth) / 2)
        this.left = lineOffsetLeft + 'rpx'
      })
      // 获取父级宽度
      let objParent = uni.createSelectorQuery().in(this).select('.fu-tab')
      let parentWidth
      objParent
        .boundingClientRect(function (data) {
          parentWidth = data.width
          let moveX = Math.ceil((offsetLeft + targetWidth / 2) / unitRatio - parentWidth / 2)
          _this.moveX = moveX
        })
        .exec()
      if (this.activeType != id) {
        this.$emit('update:active-type', id)
        this.$emit('change')
      }
    },
    isArray(obj) {
      return Object.prototype.toString.call(obj) === '[object Array]'
    },
    getSpacing() {
      let _this = this
      console.log(uni.getSystemInfoSync())
      // 底部条宽度是否超过了标签最小宽度
      let lineWidthArray = []
      let lwa = []
      if (this.isArray(this.tabs) && this.tabs.length > 0) {
        this.$nextTick(function () {
          // 主要计算底部线条宽度是否超出了最小的标签宽度 若超过线条宽度就显示为最小的标签宽度 start
          this.tabs.forEach((val, i) => {
            let activeItem = `item-active-${i}`
            let obj = uni.createSelectorQuery().in(this).select(`.${activeItem}`)
            obj
              .boundingClientRect(function (data) {
                console.log('benben', data)
                lineWidthArray.push(Math.floor(data.width * unitRatio))
                lwa.push(data.width)
              })
              .exec()
          })
          this.lineWidthArray = lineWidthArray
          this.parentWidth = lineWidthArray.reduce(function (total, curr) {
            return total + curr
          }, 0)
          //计算底部显示条初始位置
          let activeItem = `item-active-${this.active}`
          let dataLeft = 0
          let targetWidth = 0
          let obj = uni.createSelectorQuery().in(this).select(`.${activeItem}`)
          obj
            .boundingClientRect(function (data) {
              targetWidth = Math.floor(data.width * unitRatio)
              dataLeft = Math.floor(data.left)
              setTimeout(() => {
                _this.left = Math.floor(data.left * unitRatio + targetWidth / 2 - _this.getWidth / 2 - _this.wp) + 'rpx'
              }, 200)
            })
            .exec()
          // 获取父级宽度
          let objParent = uni.createSelectorQuery().in(this).select('.fu-tab')
          let parentWidth
          objParent
            .boundingClientRect(function (data) {
              parentWidth = data.width * unitRatio
              console.log(parentWidth)
              let moveX = Math.ceil(dataLeft - (parentWidth - targetWidth) / 2)
              // 转为px  scoll-view接受的值为px
              _this.moveX = moveX * unitRatio
            })
            .exec()
        })
      }
    },
  },
}
</script>

<style scoped lang="scss">
.fu-page {
  background: #ffffff;
  border-bottom: 1rpx solid #f1f1f1;
}
.fu-tab {
  height: 96rpx;
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
    background-size: 100% 100% !important;
    position: absolute;
    left: 0;
  }
  .fu-flex {
    position: relative;
    display: flex;
    justify-content: space-around;
  }
}
.fu-industry {
  min-width: 100%;
  display: inline-block;
}
</style>
