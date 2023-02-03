<template>
  <view class="component-box" :style="boxStyle">
    <view
      class="fu-top-navigation-fixed"
      :style="[
        {
          height: CustomBar + 'px',
          paddingTop: StatusBar + 'px',
          backgroundColor: query.backgroundColor,
          backgroundImage: `url(${query.backgroundImage})`,
        },
      ]"
    >
      <view class="fu-top-navigation-box" :style="style">
        <view class="fu-top-navigation-back">
          <slot name="left-icon"></slot>
        </view>
        <view class="fu-top-navigation-title">
          <slot name="title"></slot>
        </view>
        <view class="fu-top-navigation-right flex align-center">
          <slot name="right-icon"></slot>
          <slot name="right-text"></slot>
        </view>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  name: 'fu-top-navigation-bar',
  data() {
    return {}
  },
  computed: {
    boxStyle() {
      let height = this.query.notTake ? this.CustomBar + 'px' : '0px'
      var style = `height:${height}`
      return style
    },
    style() {
      var StatusBar = this.StatusBar
      var CustomBar = this.CustomBar
      var style = `height:${CustomBar - StatusBar}px;`
      return style
    },
  },
  props: {
    query: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
.fu-top-navigation-fixed {
  position: fixed;
  width: 100vw;
  top: 0;
  left: 0;
  z-index: 9999;
  background-size: 100% auto;
  background-repeat: no-repeat;

  .fu-top-navigation-box {
    position: relative;
    padding: 0 24rpx;
    display: flex;
    justify-content: center;
    align-items: center;

    .fu-top-navigation-title {
      text-align: center;
    }

    .fu-top-navigation-back {
      position: absolute;
      left: 15rpx;
      top: 50%;
      transform: translateY(-50%);
    }

    .fu-top-navigation-right {
      position: absolute;
      right: 15rpx;
      top: 50%;
      transform: translateY(-50%);
    }

    .fu-top-navigation-title2 {
      display: flex;
      position: relative;

      & > view {
        text-align: center;
      }

      .bottom-line {
        display: none;
        position: absolute;
        bottom: -5rpx;
        left: 50%;
        width: 50rpx;
        transform: translateX(-50%);
        height: 5rpx;
        border-radius: 2.5rpx;
      }

      .active {
        .bottom-line {
          display: block;
        }
      }
    }
  }
}
</style>
