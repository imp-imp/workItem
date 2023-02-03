<template>
  <!-- <view></view> -->
  <text :style="styleInfo" v-if="messageNum > 0" class="benben_message_num">
    {{ messageNum > 99 ? '···' : messageNum }}
  </text>
</template>
<script>
export default {
  name: 'benben-message-num',
  props: {
    messageNum: { type: [String, Number], default: 0 },
    size: { type: [String, Number], default: '24' }, //消息字体大小
    color: { type: [String, Number], default: '#eee' },
    backgroundColor: { type: [String, Number], default: 'red' },
  },
  options: {
    virtualHost: true,
  },
  components: {},
  computed: {
    styleInfo() {
      let _size = this.size / 0.8 + 'rpx'
      return {
        backgroundColor: this.backgroundColor,
        fontSize: this.size + 'rpx',
        color: this.color,
        width: _size,
        height: _size,
        'line-height': _size,
      }
    },
  },
  data() {
    return {}
  },
  watch: {},
  methods: {},
  created() {},
  beforeDestroy() {},
}
</script>
<style lang="scss" scoped>
.benben_message_num {
  display: inline-block;
  text-align: center;
  border-radius: 50%;
  overflow: hidden;
  font-weight: 500;
}
</style>
