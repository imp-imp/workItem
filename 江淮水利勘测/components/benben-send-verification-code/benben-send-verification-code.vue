<template>
  <view @tap.stop="handleSendVerCode">
    <template v-if="beginning">
      {{ `${time}s ${afterText}` }}
    </template>
    <template v-else>
      {{ beforeText }}
    </template>
  </view>
</template>
<script>
import { validate } from '@/common/utils/index'
import { IS_DEV } from '@/common/config.js'
export default {
  name: 'benben-send-verification-code',
  props: {
    phone: {
      //发送短信的验证码
      type: [String, Number],
      default: '',
    },
    type: {
      //发送短信类型
      type: [String, Number],
      default: 1,
    },
    afterText: {
      //发送成功后展示的文本
      type: [String, Number],
      default: '后重新获取',
    },
    beforeText: {
      //未发送时展示的文本
      type: [String, Number],
      default: '请发送验证码',
    },
  },
  computed: {},
  data() {
    return {
      beginning: false, // 显示倒计时,@Boolean
      time: 60, // 倒计时60S,@Number
      timer: null, // 计时器,@Function
    }
  },
  methods: {
    handleSendVerCode() {
      let _this = this
      // 从this里结构出来phone
      let { type, phone } = this
      // 验证手机号strat
      if (!phone) {
        this.$message.info(global.i18n['请输入手机号'])
        return false
      }
      if (!validate(phone, 'phone')) {
        this.$message.info(global.i18n['请正确输入手机号'])
        return false
      }
      // 验证手机号 end
      // 如果有倒计时，return false
      if (this.beginning) return false
      /**
       * @desc 请求验证码接口
       * @param {Object} {} - 参数
       * @param {Boolean} {}.is_test - 是否是测试环境
       * @param {String} {}.mobile - 手机号
       * @param {String} {}.type - 类型
       */
      this.$api
        .post(global.apiUrls.GetVerifyCode, {
          is_test: IS_DEV != 0 ? 1 : 0,
          mobile: phone,
          type: type,
        })
        .then((res) => {
          // 改加载状态为false
          // 如果后台返回的code码为1
          if (res.data.code == 1) {
            _this.beginning = true // 显示倒计时
            // 清除倒计时,防抖作用
            clearInterval(_this.timer)
            _this.timer = setInterval(() => {
              if (_this.time == 1) {
                //倒计时结束就清楚这个倒计时
                clearInterval(_this.timer)
                _this.time = 60 // 倒计时60s
                _this.beginning = false // 是否显示倒计时改为false
                return
              }
              _this.time--
            }, 1000)
            // 向用户发送提示
            if (IS_DEV != 0) {
              console.log('res.data.data.code', res.data.data.code)
              _this.$message.info(res.data.data.code)
            } else {
              _this.$message.info(global.i18n['验证码发送成功'])
            }
          } else {
            // 如果报错，向用户提示
            _this.$message.info(res.data.msg)
          }
        })
        .catch(function (err) {
          // 接口错误打印错误
          console.log(err)
        })
    },
  },
  created() {},
}
</script>

<style lang="scss" scoped></style>
