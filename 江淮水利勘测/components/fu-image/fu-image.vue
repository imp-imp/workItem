<template>
  <view class="img" :style="{ 'border-radius': borderRaduis }">
    <view class="loadding" v-if="isLoad">
      <view class="loading-icon" :style="{ width: loadWidth, height: loadWidth }"></view>
    </view>
    <image :src="imgSrc" :mode="mode" @load="loadEvent" @error="errorEvent" lazy-load v-if="isShow" class="contentImg"></image>
    <view class="errImg flex flex-direction align-center justify-center" v-if="!isLoad && !isShow" >
     <block v-if="!isGrowth">
        <!-- #ifdef APP-PLUS || MP-WEIXIN -->
        <text class="errContent" :style="{ background: 'url(' + errorImg + ') no-repeat center/cover', width: w, height: w }"></text>
        <!-- #endif -->
        <!-- #ifdef H5 -->
        <image :src="errorImg" class="errContent" :style="{ width: w, height: w }" mode="aspectFill"></image>
        <!-- #endif -->
        <text class="text margin-top-xs" v-if="num > 60">{{i18n['加载失败']}}</text>
     </block>
     <block v-if="isGrowth">
        <!-- #ifdef APP-PLUS || MP-WEIXIN -->
        <text class="errContent" :style="{ background: 'url(' + errorImg + ') no-repeat center/cover', width: '100%', height: '100%' }"></text>
        <!-- #endif -->
        <!-- #ifdef H5 -->
        <image :src="errorImg" class="errContent" :style="{ width: '100%', height: '100%' }" mode="aspectFill"></image>
        <!-- #endif -->
     </block>
    </view>
  </view>
</template>

<script>
export default {
  name: 'fu-image',
  props: {
    // 图片链接
    src: {
      type: String,
      default: ''
    },
    // 图片mode属性
    mode: {
      type: String,
      default: 'aspectFill'
    },
    radius: {
      type: [Number, String],
      default: 0
    },
    errorImg: {
      type: String,
      default:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFIGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjEtMDUtMDVUMDg6NTQ6NDArMDg6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIxLTA1LTA1VDE1OjA3OjUyKzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTA1LTA1VDE1OjA3OjUyKzA4OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjdkM2E3NjcxLTA0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'
    },
    isGrowth:{
      type:Boolean,
      default:false
    }
  },
  data() {
    return {
      isShow: true, //图片显示
      isLoad: true, //loading加载
      imgHeight: '100%', //图片高度
      num: 0,
    };
  },
  computed: {
    w() {
      let _w = Math.floor(this.num * 0.4) > 50 ? 50 : Math.floor(this.num * 0.4);
      return _w + 'px';
    },
    loadWidth() {
      let _w = Math.floor(this.num * 0.7);
      // console.log(_w)
      return _w + 'px';
    },
    borderRaduis() {
      return this.getUnitValue(this.radius);
    },
    imgSrc() {
      return this.src;
    }
  },
  watch: {
    src: {
      handler(newVal, oldVal) {
        if (!newVal) {
          this.isLoad = false;
          this.isShow = false;
        } else {
          this.isLoad = true;
          this.isShow = true;
        }
      },
      immediate: true
    }
  },
  mounted() {
    setTimeout(() => {
      this.$nextTick(function() {
        let w;
        const query = uni.createSelectorQuery().in(this);
        query
          .select('.img')
          .boundingClientRect(data => {
            let num = data.width > data.height ? data.height : data.width;
            this.num = num;
          })
          .exec();
      });
    }, 10);
  },
  methods: {
    // 判断传入的值，是否带有单位，如果没有，就默认用rpx单位
    getUnitValue(val) {
      if (/(%|px|rpx|auto)$/.test(val)) return val;
      else return val + 'rpx';
    },
    // 图片加载成功事件
    loadEvent(e) {
      // console.log('ok',e);
      this.isLoad = false;
      this.isShow = true;
    },
    // 图片加载失败事件
    errorEvent(e) {
      // console.log('error',e);
      this.isLoad = false;
      this.isShow = false;
    }
  }
};
</script>

<style scoped lang="scss">
.img {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  .contentImg {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
.errImg {
  background: #f4f4f4;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: #999999;
  width: 100%;
  height: 100%;
  font-size: 24rpx;
  .errContent {
    // width: 30%;
    // height: 30%;
    // background: url(./static/error.png) no-repeat center/cover;
  }
  .text {
    // transform: scale(0.7);
  }
}
.loadding {
  background: #f4f4f4;
  width: 100%;
  height: 100%;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  position: relative;
}
.loadImg{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.loading-icon {
  background: url(static/logo.png) no-repeat center/cover;
  border-radius: 50%;
  width: 40%;
  height: 40%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  //animation: a 1s steps(12) infinite;
}
@-webkit-keyframes a {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes a {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
