<template>
  <view class="component-box swiper-box padding-top-xs" :style="{ height: query.height + 'rpx' }">
    <view
      :class="{ 'swiper-bg': true, 'swiper-bg-50': query.changeColorSwitch }"
      :style="{
        backgroundColor: query.backgroundColor,
        backgroundImage: query.isBg ? `url(${query.backgroundImage})` : '',
      }"
      :animation="animationData"
    ></view>
    <swiper
      class="swiper-screen square-dot"
      :indicator-dots="true"
      :circular="true"
      :autoplay="true"
      interval="5000"
      duration="500"
      @change="swiperChange"
    >
      <swiper-item v-for="(item, index) in list" :key="index" class="text-center flex align-center justify-center">
        <view @click="navTo(item)">
          <fu-image-diy :query="query.typeList[0]" :data="item[thumb]"></fu-image-diy>
        </view>
      </swiper-item>
    </swiper>
  </view>
</template>
<script>
export default {
  props: {
    query: {
      type: Object,
    },
    thumb: {
      type: String,
      default: '',
    },
    href: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: '',
    },
    rgba: {
      type: String,
      default: '',
    },
    list: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      animationData: {}, // 颜色渐变动画
    }
  },
  computed: {},
  methods: {
    navTo(item) {
      if (!this.href || !this.type) {
        return
      }
      if (item[this.type] == 1) {
        this.$urouter.navigateTo(item[this.href])
      }
      if (item[this.type] == 2) {
        // #ifdef APP-PLUS
        plus.runtime.openURL(item[this.href])
        // #endif
        // #ifdef H5
        location.href = item[this.href]
        // #endif
      }
    },
    swiperChange(e) {
      if (this.query && this.query.changeColorSwitch && this.rgba) {
        let rgb = this.lists[e.detail.current][this.rgba]
        if (rgb) {
          this.changeColor(rgb)
        }
      }
    },
    // 改变颜色
    changeColor(e) {
      const color = `rgb(${e[0]},${e[1]},${e[2]})`
      this.query.backgroundColor = color
      var animation = uni.createAnimation({
        duration: 700,
        timingFunction: 'linear',
      })
      this.animation = animation
      animation.backgroundColor(this.query.backgroundColor).step()
      this.animationData = animation.export()
    },
  },
  created() {},
}
</script>

<style lang="scss" scoped>
.swiper-box {
  overflow: hidden;
  position: relative;
  .swiper-bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background-size: 100% auto;
    background-repeat: no-repeat;
    background-position: center;
  }
  .swiper-bg-50 {
    height: 50%;
  }

  .swiper-screen {
    width: 100%;
    height: 100%;
    min-height: initial;
    border-radius: 8rpx;
    overflow: hidden;
    /* 兼容IOS，否则在swiper组件内的布局都不受border-radius和overflow的约束 */
    transform: translateY(0);
  }
}
image {
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 8rpx;
  /* 兼容IOS，否则在swiper组件内的布局都不受border-radius和overflow的约束 */
  transform: translateY(0);
}
</style>
