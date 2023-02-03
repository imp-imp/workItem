<template>
  <block v-if="query.isScroll">
    <view class="component-box padding-lr padding-top" :style="style">
      <swiper class="swiper" @change="swiperChange" :style="{ height: query.lines * 160 + 'rpx' }">
        <block v-for="(item, i) in navs" :key="i">
          <swiper-item>
            <view class="grid text-center" :class="['col-' + query.col]">
              <block v-for="(ele, j) in item" :key="j">
                <view class="sub-item flex flex-direction justify-center align-center margin-bottom-sm" @click="navTo(ele[href], ele[is_login])">
                  <fu-image-diy :query="query.typeList[0]" :index="0" :data="ele[thumb]"></fu-image-diy>
                  <fu-text class="margin-top-xs" :query="query.typeList[1]" :data="ele[name]" :index="1"></fu-text>
                </view>
              </block>
            </view>
          </swiper-item>
        </block>
      </swiper>
      <view class="padding-tb-xs flex justify-center">
        <view class="bar flex round overflow">
          <block v-for="(item, index) in navs" :key="index">
            <view
              @click="navTo(ele[href], ele[is_login])"
              class="bar_item bg-gray"
              :class="{ active: current == index }"
              :style="{ backgroundColor: current === index ? query.lineColor : '#f2f3f5' }"
            ></view>
          </block>
        </view>
      </view>
    </view>
  </block>
  <block v-else>
    <view class="component-box padding-lr padding-top" :style="style">
      <view class="grid text-center" :class="['col-' + query.col]">
        <block v-for="(item, index) in navs" :key="index">
          <view @click="navTo(ele[href], ele[is_login])" class="sub-item flex flex-direction justify-center align-center margin-bottom-sm">
            <fu-image-diy :query="query.typeList[0]" :index="0" :data="item[thumb]"></fu-image-diy>
            <fu-text class="margin-top-xs" :query="query.typeList[1]" :index="1" :data="item[name]"></fu-text>
          </view>
        </block>
      </view>
    </view>
  </block>
</template>

<script>
/**
 * @author
 * @description 金刚区布局
 * @property {Array.Object} navs - 导航信息
 * @property {Number} current - 当前是那个导航块
 */
export default {
  name: 'fu-grid',
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
    is_login: {
      type: String,
      default: '',
    },
    name: {
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
      current: 0,
    }
  },
  computed: {
    navs() {
      if (this.isScroll) {
        let list = this.list
        let arrs = []
        for (let i = 0, l = list.length; i < l; i += this.col * this.lines) {
          arrs.push(list.slice(i, i + this.col * this.lines))
        }
        return arrs
      } else {
        return this.list
      }
    },
    col() {
      return Number(this.query.col)
    },
    isScroll() {
      return this.query.isScroll
    },
    lines() {
      return this.query.lines
    },
    style() {
      return {
        backgroundColor: this.query.backgroundColor,
        borderRadius: this.query.borderRadius + 'rpx',
        width: this.query.width + 'rpx',
        margin: `${this.query.marginTop}rpx ${this.query.marginRight}rpx ${this.query.marginBottom}rpx ${this.query.marginLeft}rpx`,
      }
    },
  },
  methods: {
    // 跳转到导航指向的页面
    navTo(path, auth) {
      if (auth) {
        this.$util.actionAuth(() => {
          uni.navigateTo({
            url: path,
          })
        })
      } else {
        uni.navigateTo({
          url: path,
        })
      }
    },
    // swiper滚动的时候
    swiperChange(e) {
      this.current = e.detail.current
    },
  },
  created() {},
}
</script>

<style lang="scss" scoped>
.block-48 {
  width: 90rpx;
  min-width: 90rpx;
  height: 90rpx;
  min-height: 90rpx;

  image {
    width: 100%;
    height: 100%;
  }
}

.sub-item {
  position: relative;

  .jiaobiao {
    position: absolute;
    top: 10rpx;
    right: 20rpx;
    width: 35rpx;
    height: 35rpx;
    color: #fff;
    background: #f02523;
    border-radius: 50% 50% 0 50%;
    font-size: 20rpx;
    text-align: center;
    line-height: 35rpx;
    z-index: 999;
  }

  .scale-up {
    width: 54rpx;
    height: 30rpx;
    line-height: 30rpx;
    right: 0;
    border-radius: 15rpx 15rpx 15rpx 0;
  }
}

.bar {
  .bar_item {
    width: 30rpx;
    height: 6rpx;
    background: #f2f3f5;
    border-radius: 6rpx;
  }

  .bar_item + .bar_item {
    margin-left: 10rpx;
  }

  .bar_item.active {
    background: $theme;
  }
}

.text-333 {
  color: #333333;
}

.fade {
  animation: fade 1.5s infinite;
}

@keyframes fade {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.scale-up {
  animation: scale-up 1.5s infinite;
}

@keyframes scale-up {
  0% {
    transform: scale(0.2);
  }

  100% {
    transform: scale(1);
  }
}
</style>
