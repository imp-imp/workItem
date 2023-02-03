<template>
  <view>
    <slot v-bind:fileList="fileList"></slot>
  </view>
</template>
<script>
import { UploadImage } from '@/common/utils/index'
import { ACCEPT_PLATFORM, BenBenChooseFileKey } from '@/common/config.js'
// #ifdef APP-PLUS
const fileModule = uni.requireNativePlugin('BenBenChooseFile')
// #endif
export default {
  name: 'benben-files-upload',
  props: {
    maxlength: {
      type: [String, Number],
      default: '1',
    },
    fileList: {
      type: Array,
      default: () => [],
    },
    fileType: {
      type: String,
      default: '',
    },
    isShowTips: {
      type: Boolean,
      default: false,
    },
    fileIds: {
      type: String,
      default: '',
    },
  },
  data: () => ({
    uploading: false,
    fileIdArr: [],
  }),
  computed: {},
  //监听imgIds
  watch: {
    imgIds: {
      handler(val) {
        this.fileIdArr = val ? (val + '').split(',') : []
      },
      immediate: true,
    },
  },
  methods: {
    //点击删除
    delFile(index) {
      let fileIdArr = JSON.parse(JSON.stringify(this.fileIdArr))
      let fileList = JSON.parse(JSON.stringify(this.fileList))
      fileIdArr.splice(index, 1)
      fileList.splice(index, 1)
      this.$emit('update:file-ids', fileIdArr.join(','))
      this.$emit('update:file-list', fileList)
    },
    //点击预览
    previewfile(index) {
      console.log('点击文件')
    },
    manyChooseFiles() {
      if (this.uploading) return
      if (this.maxlength - this.fileList.length < 1) return
      let flieTypes = {}
      let type = []
      let fileType = ['.pdf', '.doc', '.docx', '.xls', '.xlsx', '.ppt', '.pptx', '.txt', '.mp3']
      if (this.fileType) {
        fileType = this.fileType.split(',')
      }
      if (ACCEPT_PLATFORM == 'IOS') {
        flieTypes = {
          '.pdf': 'com.adobe.pdf',
          '.doc': 'com.microsoft.word.doc',
          '.docx': 'com.microsoft.word.doc',
          '.xls': 'com.microsoft.excel.xls',
          '.xlsx': 'com.microsoft.excel.xls',
          '.ppt': 'com.microsoft.powerpoint.ppt',
          '.pptx': 'com.microsoft.powerpoint.ppt',
          '.txt': 'public.text',
          '.mp3': 'public.audio',
        }
      }
      if (ACCEPT_PLATFORM == 'Android') {
        flieTypes = {
          '.pdf': 'application/pdf',
          '.doc': 'application/msword',
          '.docx': 'application/msword',
          '.xls': 'application/vnd.ms-excel',
          '.xlsx': 'application/vnd.ms-excel',
          '.ppt': 'application/vnd.ms-powerpoint',
          '.pptx': 'application/vnd.ms-powerpoint',
          '.txt': 'text/plain',
          '.mp3': 'audio/*',
        }
      }
      if (ACCEPT_PLATFORM == 'Android' || ACCEPT_PLATFORM == 'IOS') {
        fileType.map((key) => {
          if (flieTypes.hasOwnProperty(key)) {
            type.push(flieTypes[key])
          }
        })
        type = [...new Set(type)].join(',')
        fileModule.chooseFile(
          {
            license: BenBenChooseFileKey,
            type: type,
          },
          (ret) => {
            if (ret.code == 1) this.uploadFile([ret.data])
          }
        )
      } else {
        // #ifdef MP-WEIXIN
        wx.chooseMessageFile({
          count: this.maxlength - this.fileList.length, // 默认1
          type: file,
          extension: fileType,
          success: (res) => {
            const tempFilePaths = res.tempFilePaths
            this.uploadFile(tempFilePaths)
          },
        })
        // #endif
        // #ifdef H5
        uni.chooseFile({
          count: this.maxlength - this.fileList.length, // 默认1
          extension: fileType,
          success: (res) => {
            const tempFilePaths = res.tempFilePaths
            this.uploadFile(tempFilePaths)
          },
        })
        // #endif
      }
    },
    // 上传文件
    uploadFile(tempFilePaths) {
      this.uploading = true
      console.log(tempFilePaths)
      // 开始上传
      new UploadImage(tempFilePaths, {
        complete: (res) => {
          this.uploading = false
          let fileIdArr = JSON.parse(JSON.stringify(this.fileIdArr))
          let fileList = JSON.parse(JSON.stringify(this.fileList))
          res.map((item) => {
            fileIdArr.push(item.id)
            fileList.push(item)
          })
          this.$emit('update:img-ids', fileIdArr.join(','))
          this.$emit('update:file-list', fileList)
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
