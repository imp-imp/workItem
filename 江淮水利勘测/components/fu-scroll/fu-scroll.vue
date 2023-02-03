<template>
  <view>
    <scroll-view
      :style="{ height: scrollHeight + 'px' }"
      scroll-y="true"
      refresher-enabled="true"
      :refresher-triggered="triggered"
      :refresher-threshold="100"
      @refresherpulling="onPulling"
      @refresherrefresh="onRefresh"
      @refresherrestore="onRestore"
      @refresherabort="onAbort"
      @scrolltolower="onBottom"
    >
      <slot></slot>
      <!--      <view class="loading-wapper">
        <view class="loading" v-if="isLoad && !triggered">
          <view class="item loading-1"></view>
          <view class="item loading-2"></view>
          <view class="item loading-3"></view>
          <view class="item loading-4"></view>
          <view class="item loading-5"></view>
          <view class="item loading-6"></view>
          <view class="item loading-7"></view>
          <view class="item loading-8"></view>
        </view>
        <text class="cuIcon-text" v-if="isData == 'noData' && !isLoad"></text>
        <text class="loading-txt" v-if="isLoad  && !triggered">加载中</text>
        <text class="loading-txt" v-if="isData == 'more' && !isLoad && !triggered">上拉加载更多数据</text>
        <text class="loading-txt" v-if="isData == 'noMore' && !isLoad && !triggered">已加载全部数据</text>
        <text class="loading-txt" v-if="isData == 'noData' && !isLoad && !triggered">暂无数据</text>
      </view>-->
    </scroll-view>
  </view>
</template>

<script>
export default {
  name: 'fu-scroll',
  props: {
    scrollHeight: {
      type: Number,
      default: 300,
    },
    isLoad: {
      type: Boolean,
      default: false,
    },
    isData: {
      type: String,
      default: 'noData',
    },
  },
  watch: {
    isLoad(newVal, oldVal) {
      console.log(newVal)
      console.log(this.isData)
      // this.isLoad = newVal;
    },
  },
  data() {
    return {
      _freshing: false,
      triggered: false,
    }
  },
  onLoad() {
    /* this._freshing = false;
    setTimeout(() => {
      this.triggered = true; //触发onRefresh来加载自己的数据，如果不用这种方式，不要在此改变triggered的值
    }, 1000); */
  },
  methods: {
    onPulling(e) {
      // console.log('onpulling');
    },
    onRefresh() {
      if (this._freshing) return
      this._freshing = true
      if (!this.triggered) {
        //界面下拉触发，triggered可能不是true，要设为true
        this.triggered = true
      }
      this.$emit('onRefresh')
      // console.log('释放');
    },
    close() {
      this.triggered = false //触发onRestore，并关闭刷新图标
      this._freshing = false
    },
    onRestore() {
      // console.log('onRestore');
    },
    onAbort() {
      // console.log('onAbort');
    },
    onBottom() {
      // 若在刷新时触发触底则不执行触底
      if (this._freshing) return
      this.$emit('onBottom')
      // console.log('触底');
    },
  },
}
</script>
<style lang="scss" scoped>
.loading-wapper {
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40upx;
  padding-bottom: 40rpx;
  text {
    font-size: 24upx;
    color: #999999;
    &.cuIcon-text {
      font-size: 160rpx;
    }
  }
}

.loading {
  position: relative;
  top: 0px;
  height: 50rpx;
}
.loading .item {
  width: 15rpx;
  height: 15rpx;
  border-radius: 50%;
  background-color: #333;
  position: absolute;
}

.loading-1 {
  top: 25rpx;
  left: 0;
  -webkit-animation: loading-3 1s ease 0s infinite;
}

.loading-2 {
  top: 17rpx;
  left: 17rpx;
  -webkit-animation: loading-3 1s ease -0.12s infinite;
}

.loading-3 {
  top: 0px;
  left: 25rpx;
  -webkit-animation: loading-3 1s ease -0.24s infinite;
}

.loading-4 {
  top: -17rpx;
  left: 17rpx;
  -webkit-animation: loading-3 1s ease -0.36s infinite;
}

.loading-5 {
  top: -25rpx;
  left: 0;
  -webkit-animation: loading-3 1s ease -0.48s infinite;
}

.loading-6 {
  top: -17rpx;
  left: -17rpx;
  -webkit-animation: loading-3 1s ease -0.6s infinite;
}

.loading-7 {
  top: 0px;
  left: -25rpx;
  -webkit-animation: loading-3 1s ease -0.72s infinite;
}

.loading-8 {
  top: 17rpx;
  left: -17rpx;
  -webkit-animation: loading-3 1s ease -0.84s infinite;
}

@-webkit-keyframes loading-3 {
  50% {
    transform: scale(0.4);
    opacity: 0.3;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
