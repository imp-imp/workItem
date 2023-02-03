<template>
   <video
     id="videoId"
     v-if="videoplay"
     object-fit="contain"
     :src="videoUrl"
     autoplay
   ></video>
</template>
<script>
  export default {
    components: {},
    data() {
      return {
        videoplay: false,
        videoUrl: "",
      };
    },
    computed: {

    },
    watch: {},
    onLoad(options) {
      this.videoContext = uni.createVideoContext('videoId', this);
      this.videoUrl = options&&decodeURIComponent(options.src)
      this.videoContext.requestFullScreen({ direction: 90});  //direction: 90  这个是控制全屏的时候视屏旋转多少度
      this.videoContext.play();
      this.videoplay = true;  // 显示播放盒子
    },
    onUnload() {
    },
    onReady() {
    },
    onShow(options) {
    },
    onPullDownRefresh() {
    },
    onReachBottom(e) {},
    onPageScroll(e) {},
    methods: {
      back () {
        uni.navigateBack()
      }
    }
  };
</script>
<style lang="scss" scoped>
video {
  height: 100vh;
  width: 100vw;
}
page {
  background: rgba(0,0,0,0.3);
}
</style>

