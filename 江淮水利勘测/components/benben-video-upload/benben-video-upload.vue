<template>
  <view>
    <slot v-bind:src="src" v-bind:poster="poster" v-bind:previewVideo="previewVideo" v-bind:delVideo="delVideo"></slot>
  </view>
</template>

<script>
import { UploadImage } from '@/common/utils/index'
export default {
  name: 'benben-video-upload',
  props: {
    poster: {
      type: String,
      default: '',
    },
    src: {
      type: String,
      default: '',
    },
    videoId: {
      type: String,
      default: '',
    },
  },
  data: () => ({
    uploading: false,
  }),
  computed: {},
  watch: {},
  methods: {
    delVideo() {
      this.$emit('update:videoId', '')
      this.$emit('update:src', '')
      this.$emit('update:poster', '')
      this.videoUrl = ''
    },
    previewVideo() {
      if (!this.src) {
        return this.chooseVideo()
      }
      this.mixinToPlayVideo(this.src) //跳转内置视频播放页面
    },
    chooseVideo() {
      let self = this
      // 选择视频
      uni.chooseVideo({
        count: 1, // 默认1
        maxDuration: 60,
        compressed: true,
        sourceType: ['album', 'camera'], // album 从相册选视频，camera 使用相机拍摄，默认为：['album', 'camera']
        success: function (res) {
          const tempFilePath = res.tempFilePath
          self.uploading = true
          // 开始上传
          new UploadImage([tempFilePath], {
            complete: function (res) {
              self.uploading = false
              self.$emit('update:videoId', res[0].id)
              self.$emit('update:src', res[0].path)
              self.$emit('update:poster', res[0].thumb)
            },
          })
        },
      })
    },
  },
  created() {},
  watch: {},
  // 组件周期函数--监听组件挂载完毕
  mounted() {},
  // 组件周期函数--监听组件数据更新之前
  beforeUpdate() {},
  // 组件周期函数--监听组件数据更新之后
  updated() {},
  // 组件周期函数--监听组件激活(显示)
  activated() {},
  // 组件周期函数--监听组件停用(隐藏)
  deactivated() {},
  // 组件周期函数--监听组件销毁之前
  beforeDestroy() {},
}
</script>

<style></style>
