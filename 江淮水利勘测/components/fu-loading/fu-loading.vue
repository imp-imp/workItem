<template>
  <!-- 遮罩层 start -->
  <view class="fu-mask" hover-stop-propagation   @touchmove.stop.prevent >
    <view class="content">
      <view class="loading-icon"></view>
      <text class="desc">{{i18n['加载中...']}}</text>
    </view>
  </view>
    <!-- 遮罩层 start -->
</template>

<script>

export default {
  name: "fu-loading",
  props: {
    // 是否显示遮罩
    show: {
      type: Boolean,
      default: true
    },

    // 层级z-index
    zIndex: {
      type: [Number, String],
      default: '999'
    },

    // 用户自定义样式
    customStyle: {
      type: Object,
      default () {
        return {}
      }
    },

    // 遮罩的动画样式， 是否使用使用zoom进行scale进行缩放
    zoom: {
      type: Boolean,
      default: true
    },

    // 遮罩的过渡时间，单位为ms
    duration: {
      type: [Number, String],
      default: 300
    },

    // 是否可以通过点击遮罩进行关闭
    maskClickAble: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      zoomStyle: {
        transform: ''
      },
      scale: 'scale(1.2, 1.2)'
    }
  },
  watch: {
    show(n) {

    }
  },
  computed: {

  },
  methods: {
    click() {
    }
    
  }
}

</script>

<style lang="scss" scoped>
  // 遮罩层 start
  .fu-mask{
    // position: fixed;
    // background-color: #FBFBFB;
    // top: 0;
    // left: 0;
    // right: 0;
    // bottom: 0;
    // transition: transform 0.3s;
    .content{
        margin:0 auto;
        width:100%;
        position:relative;
        // border: 1rpx solid #FBFBFB;
        height: 300rpx;
        // margin-top: 35%;
        padding-top: 60rpx;
        display: flex;
        flex-direction: column;
        align-items:center;
       .desc{
         height:70rpx;
         line-height: 70rpx;
         width:100%;
         padding-left:13rpx;
         // margin-top:146rpx;
         text-align: center;
       }
    }

  }
  .loading-wapper {
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 40upx;
    // padding-bottom: 40rpx;
  }

  .loading {
    position: relative;
    top: 0px;
    height: 100rpx;
  }
  .loading .item {
    width: 18rpx;
    height: 18rpx;
    border-radius: 50%;
    background-color: #333;
    position: absolute;
  }

  .loading-1 {
    top: 50rpx;
    left: 0;
    -webkit-animation: loading-3 1s ease 0s infinite;
  }

  .loading-2 {
    top: 34rpx;
    left: 34rpx;
    -webkit-animation: loading-3 1s ease -0.12s infinite;
  }

  .loading-3 {
    top: 0px;
    left: 50rpx;
    -webkit-animation: loading-3 1s ease -0.24s infinite;
  }

  .loading-4 {
    top: -34rpx;
    left: 34rpx;
    -webkit-animation: loading-3 1s ease -0.36s infinite;
  }

  .loading-5 {
    top: -50rpx;
    left: 0;
    -webkit-animation: loading-3 1s ease -0.48s infinite;
  }

  .loading-6 {
    top: -34rpx;
    left: -34rpx;
    -webkit-animation: loading-3 1s ease -0.6s infinite;
  }

  .loading-7 {
    top: 0px;
    left: -50rpx;
    -webkit-animation: loading-3 1s ease -0.72s infinite;
  }

  .loading-8 {
    top: 34rpx;
    left: -34rpx;
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
  .loading-icon {
    margin: 0 10upx;
    width: 80upx;
    height: 80upx;
    display: inline-block;
    vertical-align: middle;
    -webkit-animation: a 1s steps(12) infinite;
    animation: a 1s steps(12) infinite;
    background: transparent url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgxMDB2MTAwSDB6Ii8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTlFOUU5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTMwKSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iIzk4OTY5NyIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgzMCAxMDUuOTggNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjOUI5OTlBIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDYwIDc1Ljk4IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0EzQTFBMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSg5MCA2NSA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNBQkE5QUEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoMTIwIDU4LjY2IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0IyQjJCMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgxNTAgNTQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjQkFCOEI5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDE4MCA1MCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDMkMwQzEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTE1MCA0NS45OCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDQkNCQ0IiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTEyMCA0MS4zNCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNEMkQyRDIiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDM1IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0RBREFEQSIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgtNjAgMjQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTJFMkUyIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKC0zMCAtNS45OCA2NSkiLz48L3N2Zz4=) no-repeat;
    background-size: 100%;
  }


@-webkit-keyframes a {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg)
  }

  to {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn)
  }
}

@keyframes a {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg)
  }

  to {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn)
  }
}
</style>
