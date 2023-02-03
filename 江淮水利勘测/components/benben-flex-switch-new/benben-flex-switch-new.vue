<template>
  <!-- #ifndef MP-WEIXIN -->
  <view>
    <!-- #endif -->
    <view @tap="tapHandle" :class="[disabled&&'disabledSwtich', className]">
      <slot v-if="isChecked" name="checked"></slot>
      <slot v-else name="unchecked"></slot>
    </view>
    <!-- #ifndef MP-WEIXIN -->
  </view>
  <!-- #endif -->
</template>
<script>
export default {
  name: 'benben-flex-switch-new',
  props: {
    className: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    value: {
      type: Boolean,
      default: false
    },
  },
  data: () => ({
    isChecked: false
  }),
  computed: {},
  //监听value
  watch: {
    value: {
      handler(val) {
        console.log(val)
        this.isChecked = val
      },
      immediate: true,
    },
  },
  methods: {
    tapHandle() {
      if (this.disabled) { return }
      let Checked = !this.isChecked
      this.$emit('input',Checked)
      this.$emit('change',Checked)
    }
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

<style>
.disabledSwtich{
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
