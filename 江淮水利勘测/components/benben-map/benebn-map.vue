<template>
  <view :class="className">
    <map :scale="scale" :class="className"
    :show-location="showLocation"
    @markertap="markerTap" @tap="mapTap"
    :latitude="latitude" :longitude="longitude" :markers="isMark?markers:[]">
    </map>
  </view>
</template>
<script>
export default {
  name: 'benben-map',
  props: {
    scale: {
      type: Number,
      default: 18,
    },
    showLocation: {
      type: Boolean,
      default: true,
    },
    isMark: {
      type: Boolean,
      default: true,
    },
    chooseLocation: {
      type: Boolean,
      default: true,
    },
    longitude: {//经度，浮点数，范围为-180~180，负数表示西经，使用 gcj02 国测局坐标系。
      type: Number,
      default: 116.39742,
    },
    latitude: {//纬度，浮点数，范围为-90~90，负数表示南纬，使用 gcj02 国测局坐标系。
      type: Number,
      default: 39.899,
    },
    markers: {
      type: Array,
      default: () => [],
    },
    className: {
      type: String,
      default: ''
    }
  },
  components: {},
  computed: {
  },

  data() {
    return {
      // markers: [{
      //     id: 1, // Number
      //     title: '1', // String-标注点名
      //     rotate: 180, // Number - 顺时针旋转的角度，范围 0 ~ 360，默认为 0
      //     alpha: 0.5, // 默认1，无透明，范围 0 ~ 1
      //     latitude: 39.899,
      //     longitude: 116.39742,
      //     width: 30,
      //     height: 30,
      //     // callout: {
      //     //  display: "BYCLICK",
      //     //  padding: 10,
      //     //  borderRadius: 5,
      //     //  content: '',
      //     // },
      //     // anchor: {},
      //     iconPath: '/static/logo.png', // 显示的图标
      // }, {
      //     id: 2,
      //     title: '2', // String
      //     latitude: 39.90,
      //     longitude: 116.39,
      //     callout: {
      //         color: '#007AFF', // 文本颜色
      //         display: "BYCLICK", // 'BYCLICK':点击显示; 'ALWAYS':常显
      //         fontSize: 15,
      //         textAlign: 'left', // 文本对齐方式。有效值: left, right, center
      //         padding: 10, // 文本边缘留白
      //         borderRadius: 5,
      //         content: '22',
      //     },
      //     width: 30,
      //     height: 30,
      //     iconPath: 'https://zhongben-crm.oss-cn-zhangjiakou.aliyuncs.com/uploads/images/20211105/74f7d52ddf810ff071ba48e7ec2bbd7c.png'
      // }]
    }
  },
  methods: {
    initLocation() {
      let that = this;
      wx.getSetting({
        success: (res) => {
          if (res.authSetting['scope.userLocation'] != undefined && res.authSetting['scope.userLocation'] !=
            true) {
            uni.showModal({
              title: '是否授权当前位置',
              content: '需要获取您的地理位置，请确认授权，否则无法查看搜索列表',
              success: function(res) {
                if (res.cancel) {
                  uni.showToast({
                    title: '授权失败',
                    icon: 'none',
                    success() {
                      uni.navigateBack()
                    }
                  })
                } else if (res.confirm) {
                  wx.openSetting({
                    success: function(dataAu) {
                      if (dataAu.authSetting["scope.userLocation"] == true) {
                        that.getLocation();
                      } else {
                        uni.showToast({
                          title: '授权失败',
                          icon: 'none',
                          success() {
                            uni.navigateBack()
                          }
                        })
                      }
                    }
                  })
                }
              }
            })
          } else {
            that.getLocation();
          }
        },
        fail() {
          uni.navigateBack()
        }
      })
    },
    getLocation() { //打开地图选择位置
    let that = this;
      if(that.chooseLocation) {
        uni.chooseLocation({
        	success: res => {
            console.log(res)
            that.$emit('update:longitude', res.longitude)
            that.$emit('update:latitude', res.latitude)
        	}
        });
      } else {
        uni.getLocation({
          type: 'wgs84',
          // altitude:true,
          // geocode:true,
          success: function(res) {
            console.log(res)
            that.$emit('update:longitude', res.longitude)
            that.$emit('update:latitude', res.latitude)
          }
        });
      }
    },
    markerTap(e){
      console.log(e.detail.markerId)
      this.$emit('markerTap',e.detail.markerId)
    },
    mapTap(e){
      console.log('纬度：' + e.detail.latitude);
      console.log('经度：' + e.detail.longitude);
      this.$emit('mapTap',e)
    }
  },
  created() {
    //#ifdef MP-WEIXIN
    this.initLocation()
    //#endif
    //#ifdef H5
    this.getLocation()
    //#endif
  },
}
</script>
<style lang="scss" scoped>
</style>
