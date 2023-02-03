<template>
  <view :class="className">
     <view @tap.stop="_calcValue('minus')" :class="minDisabled?'disabledBtn':''">
       <slot name="minus"></slot>
     </view>
      <input 
         :class="inputClass"
         :disabled="disabled" 
         type="number" 
         v-model="inputValue" 
         @input="changeValue" />
     <view @tap.stop="_calcValue('plus')" :class="maxDisabled?'disabledBtn':''">
       <slot name="plus"></slot>
     </view>
  </view>
</template>

<script>
export default {
  name: 'benben-flex-number-box',
  props: {
    value: {
      type: [Number, String],
      default: 1,
    },
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: Infinity,
    },
    step: {
      type: Number,
      default: 1,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    inputClass:{
      type: String,
      default: '',
    },
    className:{
      type: String,
      default: '',
    },
  },
  data: () => ({
    inputValue: 0,
    timer: null,
  }),
  computed: {
    minDisabled () {
      return this.inputValue <= this.min || this.disabled
    },
    maxDisabled () {
      return this.inputValue >= this.max || this.disabled
    }
  },
  //监听value
  watch: {
    value: {
      handler(val) {
        this.inputValue = +val
      },
      immediate: true,
    },
  },
  methods: {
    _calcValue(type) {
      if (type === 'minus' && !this.disabled && this.inputValue == this.min) return
      if (this.disabled) return
      if (this.max < this.inputValue) {
        this.inputValue = this.max
      }
      let value = this.inputValue
      let step = this.step
      if (type === 'minus') {
        value -= step
        if (value < this.min) return
        if (value > this.max) {
          value = this.max
        }
      } else if (type === 'plus') {
        value += step
        if (value > this.max) return
        if (value < this.min) {
          value = this.min
        }
      }
      this.inputValue = parseInt(Number(value))
      this.$emit('input', this.inputValue)
    },
    changeValue(e) {
      let value = e.detail.value
      if (!value) {
        this.inputValue = this.min
        return
      }
      if (value > this.max) {
        value = this.max
      } else if (value < this.min) {
        value = this.min
      }
      setTimeout(() => {
        this.inputValue = parseInt(Number(value))
        this.$emit('input', this.inputValue)
      }, 400)
    },
  },
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

<style>
.disabledBtn{
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
