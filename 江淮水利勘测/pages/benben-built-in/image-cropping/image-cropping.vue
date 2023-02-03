<template>
  <!-- 画布 start -->
  <view class="content">
    <view class="cropper-wrapper" :style="{ height: cropperOpt.height + 'px' }">
      <canvas
        class="cropper"
        :disable-scroll="true"
        @touchstart="touchStart"
        @touchmove="touchMove"
        @touchend="touchEnd"
        :style="{ width: cropperOpt.width, height: cropperOpt.height, backgroundColor: 'rgba(0, 0, 0, 0.8)' }"
        canvas-id="cropper"
      ></canvas>
      <canvas
        class="cropper"
        :disable-scroll="true"
        :style="{
          position: 'fixed',
          top: `-${cropperOpt.width * cropperOpt.pixelRatio}px`,
          left: `-${cropperOpt.height * cropperOpt.pixelRatio}px`,
          width: `${cropperOpt.width * cropperOpt.pixelRatio}px`,
          height: `${cropperOpt.height * cropperOpt.pixelRatio}`,
        }"
        canvas-id="targetId"
      ></canvas>
    </view>
    <!-- 画布 end -->
    <!-- 按钮 start -->
    <view class="cropper-buttons safe-area-padding" :style="{ height: bottomNavHeight + 'px' }">
      <!-- #ifdef H5 -->
      <view class="upload" @tap="uploadTap">选择图片</view>
      <!-- #endif -->
      <!-- #ifndef H5 -->
      <view class="upload" @tap="uploadTap">重新选择</view>
      <!-- #endif -->
      <view class="getCropperImage" @tap="getCropperImage(false)">确定</view>
    </view>
    <!-- 按钮 end -->
    <!-- 断网检测 start -->
    <fu-notwork></fu-notwork>
    <!-- 断网检测 end -->
  </view>
</template>

<script>
// 引入裁剪js
import WeCropper from './static/weCropper.js'
export default {
  props: {
    // 裁剪矩形框的样式，其中可包含的属性为lineWidth-边框宽度(单位rpx)，color: 边框颜色，
    // mask-遮罩颜色，一般设置为一个rgba的透明度，如"rgba(0, 0, 0, 0.35)"
    boundStyle: {
      type: Object,
      default() {
        return {
          lineWidth: 4,
          borderColor: 'rgb(245, 245, 245)',
          mask: 'rgba(0, 0, 0, 0.35)',
        }
      },
    },
  },
  data() {
    return {
      // 底部导航的高度
      bottomNavHeight: 50,
      // originWidth: 200,
      // originHeight: 200,
      width: 0, //屏幕宽度
      height: 0, //屏幕高度
      cropperOpt: {
        id: 'cropper', //画布id
        targetId: 'targetCropper', //画布事件源id
        pixelRatio: 1, //设备像素密度
        width: 0, //屏幕宽度
        height: 0, //屏幕高度
        scale: 2.5, //图片缩放倍数
        zoom: 8, //缩放系数
        cut: {
          x: (this.width - this.rectWidth) / 2, //裁剪框宽度x坐标
          y: (this.height - this.rectHeight) / 2, //裁剪框宽度y坐标
          width: this.rectWidth, //裁剪框宽度
          height: this.rectHeight, //裁剪框高度
        },
        // 裁剪矩形框的样式，其中可包含的属性为lineWidth-边框宽度(单位rpx)，color: 边框颜色，
        // mask-遮罩颜色，一般设置为一个rgba的透明度，如"rgba(0, 0, 0, 0.35)"
        boundStyle: {
          lineWidth: uni.upx2px(this.boundStyle.lineWidth), //宽度
          mask: this.boundStyle.mask, //遮罩层颜色
          color: this.boundStyle.borderColor, //边框颜色
        },
      },
      // 裁剪框和输出图片的尺寸，高度默认等于宽度
      // 输出图片宽度，单位px
      destWidth: this.rectWidth, //输出图片宽度
      destHeight: this.rectHeight, //输出图片高度
      // 裁剪框宽度，单位px
      rectWidth: 200, //裁剪框宽度
      rectHeight: 200, //裁剪框高度
      // 输出的图片类型，如果'png'类型发现裁剪的图片太大，改成"jpg"即可
      fileType: 'jpg',
      cropper: null, //声明裁剪对象
    }
  },
  onUnload() {
    uni.$emit('image-cropping-success', false)
  },
  /**
   * @description 图片裁剪接收参数
   * @param {Object} option
   * @param {String} option.fileType 图片格式
   * @param {String} option.myImgUrl 图片本地路径
   * @param {String} option.rectHeight 图片裁剪框高度
   * @param {String} option.rectWidth 图片裁剪框宽度
   */
  onLoad(option) {
    console.log('图片裁剪接受的参数==>', option)
    // 获取手机宽高等信息
    let rectInfo = uni.getSystemInfoSync()
    this.width = rectInfo.windowWidth //手机宽度
    this.height = rectInfo.windowHeight - this.bottomNavHeight //手机高度
    this.cropperOpt.width = this.width //手机宽度
    this.cropperOpt.height = this.height //手机高度
    this.cropperOpt.pixelRatio = rectInfo.pixelRatio //设备像素密度赋值
    // if (option.destWidth) this.destWidth = option.destWidth;
    // 接收参数赋值
    if (option.rectWidth && option.rectHeight) {
      let rectWidth = Number(option.rectWidth) //图片裁剪框宽度
      let rectHeight = Number(option.rectHeight) //图片裁剪框高度
      this.rectWidth = rectWidth
      this.rectHeight = rectHeight
      this.destWidth = rectWidth //输出图片宽度
      this.destHeight = rectHeight //输出图片高度
      console.log(`裁剪宽高==>${this.rectWidth},${this.rectHeight}，输出宽高==>${this.destWidth},${this.destHeight}`)
      this.cropperOpt.cut = {
        x: (this.width - rectWidth) / 2, //裁剪框宽度x坐标
        y: (this.height - rectHeight) / 2, //裁剪框宽度y坐标
        width: rectWidth, //图片裁剪框宽度
        height: rectHeight, //图片裁剪框高度
      }
    }
    // 图片格式赋值
    if (option.fileType) this.fileType = option.fileType
    // 初始化
    this.cropper = new WeCropper(this.cropperOpt)
      .on('ready', (ctx) => {
        // wecropper is ready for work!
      })
      .on('beforeImageLoad', (ctx) => {
        // before picture loaded, i can do something
      })
      .on('imageLoad', (ctx) => {
        // picture loaded
      })
      .on('beforeDraw', (ctx, instance) => {
        // before canvas draw,i can do something
      })
    // 设置导航栏样式，以免用户在page.json中没有设置为黑色背景
    uni.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#000000',
    })
    setTimeout(() => {
      this.cropper.pushOrign(option.myImgUrl)
    }, 200)
  },
  methods: {
    /**
     * @description 手指触摸开始事件
     * @param {Object} e 事件对象
     */
    touchStart(e) {
      this.cropper.touchStart(e)
    },
    /**
     * @description 手指触摸移动事件
     * @param {Object} e 事件对象
     */
    touchMove(e) {
      this.cropper.touchMove(e)
    },
    /**
     * @description 手指触摸开结束事件
     * @param {Object} e 事件对象
     */
    touchEnd(e) {
      this.cropper.touchEnd(e)
    },
    /**
     * @description 裁剪完成确定事件
     */
    getCropperImage() {
      let cropper_opt = {
        destHeight: Number(this.destHeight), // uni.canvasToTempFilePath要求这些参数为数值  输出图片高度
        destWidth: Number(this.destWidth), // 输出图片宽度
        fileType: this.fileType, //输出图片类型
      }
      // canvas生成图片
      this.cropper.getCropperImage(cropper_opt, (path, err) => {
        // 生成图片错误提示
        if (err) {
          uni.showModal({
            title: '温馨提示',
            content: err.message,
          })
        } else {
          // 裁剪完成推送裁剪后的path并返回上一页
          uni.$emit('image-cropping-success', path)
          uni.navigateBack({
            delta: 1,
          })
        }
      })
    },
    /**
     * @description 重新选择图片
     */
    uploadTap() {
      let self = this
      uni.chooseImage({
        count: 1, // 默认9
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success(res) {
          // 获取选择图片之后的图片本地路径
          let src = res.tempFilePaths[0]
          //  获取裁剪图片资源后，给data添加src属性及其值
          self.cropper.pushOrign(src)
        },
      })
    },
  },
}
</script>

<style scoped>
/* nvue不能用标签命名样式 */
/* #ifndef APP-NVUE */
image {
  display: inline-block;
  /* 解决图片加载时可能会瞬间变形的问题 */
  will-change: transform;
}

/* 在weex，也即nvue中，所有元素默认为border-box */
view,
text {
  box-sizing: border-box;
}
/* #endif */
/* 裁剪样式 start */
.content {
  background: rgba(255, 255, 255, 1);
}

.cropper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99999999999999;
}

.cropper-buttons {
  background-color: #000000;
  color: #eee;
}

.cropper-wrapper {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: #000;
}

.cropper-buttons {
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  font-size: 28rpx;
}

.cropper-buttons .upload,
.cropper-buttons .getCropperImage {
  width: 50%;
  text-align: center;
}

.cropper-buttons .upload {
  text-align: left;
  padding-left: 50rpx;
}

.cropper-buttons .getCropperImage {
  text-align: right;
  padding-right: 50rpx;
}
/* 裁剪样式 end */
</style>
