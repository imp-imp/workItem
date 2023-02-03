<template>
  <view class="content" :style="{ top: top + StatusBarRpx + 'rpx' }">
    <!-- 左边tab栏开始 -->
    <scroll-view class="left" scroll-with-animation="all 0.2s ease" :scroll-into-view="toLeftId" scroll-y>
      <view
        :upper-threshold="500"
        :id="`l_id${index}`"
        v-for="(item, index) in lists"
        :key="index"
        class="item text-center"
        :class="{ active: index == currentId }"
        @click="handleSelect(index)"
      >
        {{ item.name }}
        <view class="cuIconlujing226"></view>
      </view>
    </scroll-view>
    <!-- 左边tab栏结束 -->
    <!-- 右边列表开始 -->
    <scroll-view
      class="right"
      scroll-with-animation="all 0.2s ease"
      refresher-background="transparent"
      scroll-y
      @scroll="scroll"
      :scroll-top="scrollTop"
      :refresher-triggered="refresherTriggered"
      :refresher-enabled="true"
      :refresher-threshold="100"
      @refresherrefresh="refresherrefresh"
    >
      <view class="cate-box-wrap" v-for="(item, index) in lists" :key="index">
        <view class="flex align-center justify-between text-333">
          <text class="cate-box-wrap-title text-bold text-df">{{ item.name }}</text>
        </view>
        <view class="cate-box">
          <view class="cate-box-item" v-for="(ele, j) in item.children" :key="j" @tap.stop="handlerClassify(ele)">
            <image style="width: 146rpx; height: 146rpx" :src="ele.thumb" mode="aspectFill" />
            <text class="text-333 text-sm goods_title">{{ ele.name }}</text>
          </view>
        </view>
      </view>
    </scroll-view>
    <!-- 右边列表结束 -->
  </view>
</template>
<script>
export default {
  name: 'benben-goods-classify',
  props: {
    // 分类列表
    lists: {
      type: Array,
      default: () => [],
    },
    top: {
      type: [Number, String],
      default: 88,
    },
    handleId: {
      type: [Number, String],
      default: '',
    },
  },
  data() {
    return {
      refresherTriggered: false,
      heightArr: [],
      flag: false,
      setTimeoutFn: null,
      setTimeoutLists: null,
      scrollTop: '',
      toLeftId: '',
      currentId: 0, //选中id
      setTimeoutHandle: null,
    }
  },
  watch: {
    lists: {
      handler() {
        this.setTimeoutLists && clearTimeout(this.setTimeoutLists)
        this.setTimeoutLists = setTimeout(this.getHeight, 300)
      },
      deep: true,
      immediate: true,
    },
  },
  components: {},
  computed: {},
  onLoad() {},
  mounted() {},
  methods: {
    refresherrefresh() {
      this.refresherTriggered = true
      setTimeout(() => {
        this.refresherTriggered = false
        this.$emit('refresh')
      }, 500)
    },
    scroll(e) {
      this.setTimeoutFn && clearTimeout(this.setTimeoutFn)
      this.setTimeoutFn = setTimeout(() => {
        let height = e.target.scrollTop
        let index = this.heightArr.findIndex((item) => height >= item.minHeight && height < item.maxHeight)
        this.currentId = index == -1 ? 0 : index
        this.toLeftId = `l_id${index >= 3 ? index - 3 : 0}`
      }, 100)
    },
    /**
     * @event
     * @description  tab切换
     * @param {Number} item -当前选中数据  //暂时没用
     * @param {Number} index - 选中下标
     * @return {Boolean}
     * */
    handleSelect(index) {
      this.scrollTop = this.heightArr[index].minHeight
    },
    handlerClassify(item) {
      this.$emit('update:handle-id', item.aid)
      this.$emit('handle-item', item)
    },
    getHeight() {
      uni
        .createSelectorQuery()
        .in(this)
        .selectAll('.cate-box-wrap')
        .boundingClientRect()
        .exec((res) => {
          console.log(res)
          let heightArr = []
          let height = 0
          res[0].map((item) => {
            let obj = { minHeight: height > 0 ? height - 10 : height }
            height += Math.floor(item.height)
            obj.maxHeight = height - 10
            heightArr.push(obj)
          })
          this.heightArr = heightArr
        })
    },
  },
}
</script>

<style lang="scss" scoped>
.title {
  background-color: #fff;
  text-align: center;
  font-size: 36rpx;
  color: #333;
  font-weight: 500;
}
.goods_title {
  width: 146rpx;
  overflow: hidden; //超出的文本隐藏
  text-overflow: ellipsis; //用省略号显示
  white-space: nowrap; //不换行
}
.content {
  border-top: 1px solid #f8f8f8;
  position: fixed;
  bottom: var(--window-bottom);
  display: flex;
  .left {
    width: 180rpx;
    height: 100%;
    background-color: #f8f8f8;
    box-sizing: border-box;
    .item {
      width: 100%;
      height: 99rpx;
      line-height: 99rpx;
      font-size: 28rpx;
      color: #333;
      -webkit-line-clamp: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
    }
    .item.active {
      background-color: #fff;
      color: #333333;
      font-weight: bold;
      position: relative;
      &::before {
        content: '';
        width: 8rpx;
        height: 34rpx;
        background: #ff6464;
        border-radius: 4rpx;
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
      }
    }
  }
  .right {
    width: 570rpx;
    height: 100%;
    background-color: #fff;
  }
}
.cate-box-wrap {
  .cate-box-wrap-title {
    line-height: 80rpx;
    padding: 0 32rpx;
  }
  &:last-child {
    // min-height: calc(100vh - var(--window-bottom) - var(--window-top));
    min-height: 100%;
  }
  .cate-box {
    display: flex;
    flex-wrap: wrap;
    .cate-box-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 33%;
      text-align: center;
      padding-bottom: 20rpx;
    }
  }
}
</style>
