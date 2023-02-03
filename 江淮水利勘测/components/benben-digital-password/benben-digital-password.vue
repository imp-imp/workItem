<template>
  <view>
    <view @tap.stop="dkFlag = true" :class="className">
      <slot v-for="(item, index) in boxNum" v-bind:content="getContent(index)" v-bind:active="getActive(index)" v-bind:index="index"></slot>
    </view>
    <!-- 键盘 -->
    <view @tap="dkFlag = false" v-if="dkFlag" class="digital-mask"></view>
    <view :class="['keyboard', dkFlag ? '' : 'keyboard-hide', 'safeArea-bottom']">
      <view v-for="(item, index) in '123456789'" :key="index" class="keyboard-item" @tap="key(item)">{{ item }}</view>
      <view class="keyboard-item delte" @tap="clean()">清除</view>
      <view class="keyboard-item" @tap="key('0')"><text>0</text></view>
      <view class="keyboard-item delte" @tap="del()">
        <span class="fu-iconfont2"></span>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  name: 'benben-digital-password',
  props: {
    className: {
      type: [String, Object, Array],
      default: '',
    },
    value: {
      type: [String, Number, Array],
      default: '',
    },
    mode: {
      type: String,
      default: 'password',
    },
    boxNum: {
      type: [Number, String],
      defalut: 6,
    },
  },
  //计算属性
  computed: {
    inputText: {
      get() {
        return this.value ? this.value + '' : ''
      },
      set(val) {
        this.$emit('input', val)
        if (val.length == this.boxNum) {
          this.dkFlag = false
          this.$emit('confirm', val)
        }
      },
    },
  },
  data() {
    return {
      dkFlag: false, //支付密码键盘的显示与隐藏
    }
  },
  //初始化
  methods: {
    getContent(e) {
      if (e < this.inputText.length) {
        switch (this.mode) {
          case 'number':
            return this.inputText[e] + ''
            break
          case 'password':
            return '●'
            break
          default:
            break
        }
      }
      return ''
    },
    getActive(e) {
      if (e == this.inputText.length) {
        return true
      }
      return false
    },
    getKeyboard() {
      this.dkFlag = true
    },
    key(key) {
      if (this.inputText.length < this.boxNum) {
        this.inputText += key
      } else {
        this.dkFlag = false
        this.$emit('confirm', this.inputText)
      }
    },
    del() {
      if (this.inputText.length > 0) {
        this.inputText = this.inputText.substring(0, this.inputText.length - 1)
      }
    },
    clean() {
      this.inputText = ''
    },
  },
}
</script>

<style lang="scss">
input {
  display: none;
}

.code-box-item {
  position: relative;
}

.digital-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999998;
}

::v-deep .active-digital-password {
  position: relative;

  &:after {
    -webkit-animation: twinkle 1s infinite;
    animation: twinkle 1s infinite;
    height: 60%;
    width: 1px;
    content: '';
    position: absolute;
    top: 20%;
    left: 50%;
    margin-left: -2rpx;
    background: #999;
  }
}

@keyframes twinkle {
  from {
    background: #333;
  }

  to {
    background-color: transparent;
  }
}

.digital-keyboard {
  /* box-shadow: 0 -1rpx 0 1rpx #eee; */
  width: 100%;
  transition: all 0.2s linear;
  transform: translateY(100%);
}

.digital-keyboard-show {
  transform: translateY(0);
}

.keyboard {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #ebebeb;
  display: flex;
  justify-content: center;
  z-index: 9999999;
  flex-wrap: wrap;
  transition: all 0.2s ease-in 0.2s;
}
.keyboard-hide {
  display: none;
  bottom: -400rpx;
}
.active {
  border: 1px solid rgb(17, 179, 157);
}
.keyboard-item {
  box-sizing: border-box;
  width: 250rpx;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  font-size: 40rpx;
  color: #333;
  height: 99rpx;
  border-top: none;
  border-left: none;
  position: relative;
  &::before {
    @include around-line(#ebebeb);
    border: none;
    border-top: 1px solid #ebebeb;
    border-right: 1px solid #ebebeb;
  }
}

.hide {
  opacity: 0;
}

.delte {
  background: none;
  box-shadow: none;
}

.delte image {
  width: 60rpx;
  height: 60rpx;
}
</style>
