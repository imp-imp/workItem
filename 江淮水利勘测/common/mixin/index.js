import Vue from 'vue';
import { Router } from '@/common/utils/index.js';
import { needLoginPages, STATIC_URL, HOME_PAGE_URL, LOGIN_PAGE_URL } from '@/common/config.js';
const router = new Router({ needLoginPages });
Vue.mixin({
  data() { return { STATIC_URL: STATIC_URL } },
  computed: {
    colorTheme() {
      return this.$store.state.themeColor + '!important';
    },
    colorBgTheme() {
      return this.$store.state.themeBgColor + '!important';
    },
    radioColor() {
      return this.$store.state.themeColor;
    },
    i18n() {
      return this.$t('defVal');
    },
    _top() {
      let h = uni.upx2px(110);
      let _h = h + this.StatusBar + 'px';
      console.log(_h)
      return _h;
    }
  },
  methods: {
    // #ifdef APP-PLUS
    toJSON() { },
    // #endif
    // 页面抛出事件
    benbenThrowPageEvent(event, data) {
      uni.$emit(event, data)
    },
    //修改uniapi为promise类型
    syncUniApi(apiName, params) {
      return new Promise((resolve, reject) => {
        uni[apiName]({
          ...params,
          success: (res) => {
            resolve(res)
          },
          fail: (err) => {
            reject(err)
          },
        });
      })
    },
    // 跳转首页
    toHomeDiy() {
      router.switchTab(HOME_PAGE_URL[global.appTabBarType]);
    },
    // 跳转登录页
    toLoginDiy() {
      router.navigateTo(LOGIN_PAGE_URL);
    },
    //微信支付
    requestPaymentWx(data) {
      return new Promise((resolve, reject) => {
        uni.requestPayment({
          provider: 'wxpay',
          // #ifdef MP-WEIXIN
          timeStamp: data.timeStamp,
          nonceStr: data.nonceStr,
          package: data.package,
          signType: data.signType,
          paySign: data.paySign,
          // #endif
          // #ifdef APP-PLUS
          orderInfo: data,
          // #endif
          success: (e) => {
            console.log('success', e)
            if (e.errMsg == 'requestPayment:ok') {
              resolve()
            }
          },
          fail: (e) => {
            // #ifdef APP-PLUS
            let failMsg = 'requestPayment:fail canceled';
            // #endif
            // #ifndef APP-PLUS
            let failMsg = 'requestPayment:fail cancel';
            // #endif
            if (e.errMsg == failMsg) {
              this.$message.info(this.i18n['取消支付']);
            } else {
              this.$message.info(this.i18n["支付失败,请稍后重试"]);
            }
            reject(e)
          },
          complete: () => {
          }
        });
      })
    },
    // 支付宝支付
    requestPaymentAli(data) {
      return new Promise((resolve, reject) => {
        uni.requestPayment({
          provider: 'alipay',
          orderInfo: data,
          success: (e) => {
            if (e.errMsg == 'requestPayment:ok') {
              resolve()
            }
          },
          fail: (e) => {
            if (e.errMsg == 'requestPayment:fail canceled') {
              this.$message.info(this.i18n['取消支付']);
            } else {
              this.$message.info(this.i18n["支付失败,请稍后重试"]);
            }
            reject(e)
          },
          complete: () => {

          }
        })
      })
    },
    // diy点击事件处理函数
    handleEven(e, params) {
      let dataset = e.currentTarget && e.currentTarget.dataset;
      let type, data;
      if (dataset) {
        type = dataset.event_type
        data = dataset.event_params
      } else {
        type = e
        data = params
      }
      console.log('点击事件触发', dataset, type, data);
      this.$util.handleAllFn(type, data);
    },
    // 设置自定义头部
    setNavigationBarTitle(title) {
      uni.setNavigationBarTitle({
        title: title
      })
    },
    // 点击复制
    copyText(data) {
      uni.setClipboardData({
        data: data,
        success: () => {
          this.$message.success('复制成功')
        }
      });
    },
    // 点击打电话
    callMobile(phoneNumber) {
      this.$util.showModal({
        title: '拨打电话给', content: phoneNumber + '', confirmText: '拨打', success: res => {
          if (res.confirm) {
            uni.makePhoneCall({
              phoneNumber: phoneNumber,

            });
          }
        },
      })
    },
    // 判断是否多值是否成立
    in_array(type, str) {
      let arr = []
      // str 是否为字符串
      if (typeof str === 'string') arr = str.split(',')
      // str 是否为数组
      if (typeof str === 'object') arr = str
      let index = -1
      index = arr.findIndex(item => type == item)
      console.log('index-------------', index);
      if (index == -1) {
        return false
      }
      return true
    },

    // 设置自定义底部
    setTabBarItem() {
      uni.setTabBarItem({
        index: 0,
        text: global.i18n['首页'],
      })
      uni.setTabBarItem({
        index: 1,
        text: global.i18n['分类'],
      })
      uni.setTabBarItem({
        index: 2,
        text: global.i18n['购物车'],
      })
      uni.setTabBarItem({
        index: 3,
        text: global.i18n['我的'],
      })
    },
    // 页面跳转
    handleJump(e) {
      let target = e.currentTarget || e.target,
        url = target.dataset.url || 'back',
        type = target.dataset.type;
      if (url == '' || url == '#') return;
      switch (type) {
        case 'SWITCH':
          router.switchTab(url);
          break;
        case 'REDIRECT':
          router.redirectTo(url);
          break;
        case 'RELAUNCH':
          router.reLaunch(url);
          break;
        case 'BACK':
          router.navigateBack();
          break;
        default:
          router.navigateTo(url);
          break;
      }
    },
    // Diy页面跳转
    handleJumpDiy(e) {
      let target = e.currentTarget || e.target,
        url = target.dataset.url || 'back',
        type = target.dataset.type;
      if (url == '' || url == '#') return;
      switch (type) {
        case 'switchTab':
          router.switchTab(url);
          break;
        case 'redirectTo':
          router.redirectTo(url);
          break;
        case 'reLaunch':
          router.reLaunch(url);
          break;
        case 'navigateTo':
          router.navigateTo(url);
          break;
        case 'back':
          router.navigateBack(+url);
          break;
        default:
          router.navigateTo(url);
          break;
      }
    },
    mixinToPlayVideo(src) {
      let parm = encodeURIComponent(src)
      router.redirectTo(`/pages/benben-built-in/playVideo/playVideo?src=${parm}`)
    },
    singleImagePreview(url) {
      uni.previewImage({
        current: url,
        urls: [url]
      });
    },
    multiImagePreview(url, images, field) {
      let arr = []
      if (field) {
        images.map((item) => {
          arr.push(item[field])
        })
      } else {
        arr = images
      }
      uni.previewImage({
        current: url,
        urls: arr
      });
    }
  }
})
