<template>
  <!-- #ifndef MP-WEIXIN -->
  <view>
    <!-- #endif -->
    <view :class="className">
      <input
        class="flex-sub"
        type="text"
        v-model="password"
        :maxlength="maxlength"
        :placeholder-style="placeholderStyle"
        :placeholder="placeholder"
        :password="is_show"
      />
      <view style="padding-left: 20rpx" @tap="toggle">
        <slot v-if="is_show" name="show"></slot>
        <slot v-else name="hide"></slot>
      </view>
    </view>
    <!-- #ifndef MP-WEIXIN -->
  </view>
  <!-- #endif -->
</template>
<script>
export default {
  name: 'benben-flex-password-diy',
  props: {
    className: {
      type: String,
      default: '',
    },
    defaultType: {
      type: Boolean,
      default: false,
    },
    value: {
      type: [String, Number],
      default: '',
    },
    placeholder: {
      type: String,
      default: '请输入密码',
    },
    maxlength: {
      type: [String, Number],
      default: -1,
    },
    placeholderStyle: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      is_show: true,
    }
  },
  computed: {
    password: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      },
    },
  },
  methods: {
    toggle(e) {
      this.is_show = !this.is_show
    },
  },
  created() {
    this.is_show = this.defaultType
  },
}
</script>
<style lang="scss">
input {
  font-size: inherit;
  color: inherit;
}
</style>
