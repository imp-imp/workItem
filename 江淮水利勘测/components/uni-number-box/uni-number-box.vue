<template>
  <view class="uni-numbox">
    <view :class="{ 'uni-numbox--disabled': inputValue <= min || disabled }" class="uni-numbox__minus" @click.stop="_calcValue('minus')">－</view>
    <input :disabled="disabled || inputValue <= min" class="uni-numbox__value" type="number" :value="inputValue" @input="changeValue" />
    <view :class="{ 'uni-numbox--disabled': inputValue >= max || disabled }" class="uni-numbox__plus" @click.stop="_calcValue('plus')">＋</view>
  </view>
</template>
<script>
export default {
  name: 'UniNumberBox',
  props: {
    value: {
      type: [Number, String],
      default: 1,
    },
    min: {
      type: [Number, String],
      default: 1,
    },
    max: {
      type: [Number, String],
      default: 100,
    },
    step: {
      type: [Number, String],
      default: 1,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      inputValue: 0,
      timer: null,
    }
  },
  watch: {
    value: {
      handler(value) {
        if (this.inputValue != +value) {
          this.inputValue = +value
        }
      },
      deep: true,
      immediate: true,
    },
    inputValue(newVal, oldVal) {
      this.timer && clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        if (oldVal === 0) return
        if (!newVal) return
        this.$emit('input', newVal)
        this.$emit('change', newVal)
      }, 300)
      // }
    },
  },
  created() {
    this.inputValue = +this.value
  },
  methods: {
    _calcValue(type) {
      if (this.disabled) return
      if (this.max == 0) return this.$message.info(this.i18n['该商品已售馨'])
      if (type === 'minus' && this.inputValue == 1) return this.$message.info(this.i18n['不能再少了呦~'])
      if (type === 'plus' && +this.max <= +this.inputValue) return this.$message.info(this.i18n['该商品最多能购买'] + this.max + this.i18n['件'])
      const scale = this._getDecimalScale()
      let value = this.inputValue * scale
      let step = this.step * scale
      if (type === 'minus') {
        value -= step
        if (value < this.min * scale) return
        if (value > this.max * scale) {
          value = this.max * scale
        }
      } else if (type === 'plus') {
        value += step
        if (value > this.max * scale) return
        if (value < this.min * scale) {
          value = this.min * scale
        }
      }
      this.inputValue = String(value / scale)
    },
    _getDecimalScale() {
      let scale = 1
      // 浮点型
      if (~~this.step !== this.step) {
        scale = Math.pow(10, (this.step + '').split('.')[1].length)
      }
      return scale
    },
    changeValue(e) {
      let value = +e.detail.value ? +e.detail.value : this.min
      if (value > +this.max) {
        value = this.max
        this.$message.info(this.i18n['该商品最多能购买'] + this.max + this.i18n['件'])
      } else if (value < +this.min) {
        value = this.min
        this.$message.info('不能再少了呦~')
      }
      setTimeout(() => {
        this.inputValue = parseInt(Number(value))
      }, 400)
      return value
    },
  },
}
</script>
<style>
.uni-numbox {
  display: inline-flex;
  flex-direction: row;
  justify-content: flex-start;
  height: 46upx;
  position: relative;
}

.uni-numbox__minus,
.uni-numbox__plus {
  margin: 0;
  width: 46upx;
  font-size: 32upx;
  height: 100%;
  line-height: 46upx;
  text-align: center;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #333;
  position: relative;
  font-weight: bold;
  background: #eeeeee;
}

.uni-numbox__value {
  position: relative;
  /* background-color: #f9f9f9; */
  width: 100upx;
  height: 100%;
  text-align: center;
  padding: 0;
  border-radius: 8rpx;
  /* background: #F7F7F7; */
}

.uni-numbox--disabled {
  color: silver;
  /* background: #f9f9f9; */
}
</style>
