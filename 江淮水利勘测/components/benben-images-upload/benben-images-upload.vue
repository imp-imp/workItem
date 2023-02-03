<template>
  <view>
    <slot v-bind:maxlength="maxlength" v-bind:imgList="imgList" v-bind:num="imgList.length" v-bind:isShow="imgList.length < maxlength"></slot>
  </view>
</template>
<script>
import { UploadImage } from '@/common/utils/index'
export default {
  name: 'benben-images-upload',
  props: {
    maxlength: {
      type: [String, Number],
      default: '9',
    },
    imgList: {
      type: Array,
      default: () => [],
    },
    isShowTips: {
      type: Boolean,
      default: false,
    },
    imgIds: {
      type: String,
      default: '',
    },
  },
  data: () => ({
    uploading: false,
    imgIdArr: [],
  }),
  computed: {},
  //监听imgIds
  watch: {
    imgIds: {
      handler(val) {
        this.imgIdArr = val ? (val + '').split(',') : []
      },
      immediate: true,
    },
  },
  methods: {
    //点击删除
    delImage(index) {
      let imgIdArr = JSON.parse(JSON.stringify(this.imgIdArr))
      let imgList = JSON.parse(JSON.stringify(this.imgList))
      imgIdArr.splice(index, 1)
      imgList.splice(index, 1)
      this.$emit('update:img-ids', imgIdArr.join(','))
      this.$emit('update:img-list', imgList)
    },
    //点击预览
    previewImage(index) {
      uni.previewImage({
        current: this.imgList[index],
        urls: this.imgList,
      })
    },
    //点击上传
    manyChooseImage() {
      let self = this
      let imgIdArr = JSON.parse(JSON.stringify(this.imgIdArr))
      let imgList = JSON.parse(JSON.stringify(this.imgList))
      if (self.uploading) return
      if (self.maxlength - self.imgList.length < 1) return
      // 从相册中选择图片
      uni.chooseImage({
        count: self.maxlength - self.imgList.length, // 默认3
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        success: function (res) {
          const tempFilePaths = res.tempFilePaths
          self.uploading = true
          // 开始上传
          new UploadImage(tempFilePaths, {
            complete: function (res) {
              self.uploading = false
              res.map((item) => {
                imgIdArr.push(item.id)
                imgList.push(item.path)
              })
              self.$emit('update:img-ids', imgIdArr.join(','))
              self.$emit('update:img-list', imgList)
            },
          })
        },
      })
    },
  },
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
