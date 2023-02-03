<template>
  <view class="benben-countdown"><slot v-bind:d="d" v-bind:h="h" v-bind:i="i" v-bind:s="s"></slot></view>
</template>
<script>
export default {
  name: 'benben-countdown',
  props: {
    showDay: { type: Boolean, default: false },
    countTime: { type: [String, Number], default: 0 },
  },
  options: {
    virtualHost: true,
  },
  components: {},
  computed: {},
  data() {
    return { timer: null, syncFlag: false, d: '00', h: '00', i: '00', s: '00', seconds: 0 }
  },
  watch: {
    countTime(val) {
      this.startData()
    },
  },
  methods: {
    startData() {
      this.seconds = this.countTime
      if (this.seconds <= 0) {
        return
      }
      this.countDown()
      this.timer && clearInterval(this.timer)
      this.timer = setInterval(() => {
        this.seconds--
        if (this.seconds <= 0) {
          clearInterval(this.timer)
          this.$emit('timeEnd')
          return
        }
        this.countDown()
      }, 1000)
    },
    countDown() {
      let seconds = this.seconds
      let [day, hour, minute, second] = [0, 0, 0, 0]
      if (seconds > 0) {
        day = Math.floor(seconds / (60 * 60 * 24))
        if (this.showDay) {
          hour = Math.floor(seconds / (60 * 60)) - day * 24
          minute = Math.floor(seconds / 60) - day * 24 * 60 - hour * 60
          second = Math.floor(seconds) - day * 24 * 60 * 60 - hour * 60 * 60 - minute * 60
        } else {
          hour = Math.floor(seconds / (60 * 60))
          minute = Math.floor(seconds / 60) - hour * 60
          second = Math.floor(seconds) - hour * 60 * 60 - minute * 60
        }
      }
      if (day < 10) {
        day = '0' + day
      }
      if (hour < 10) {
        hour = '0' + hour
      }
      if (minute < 10) {
        minute = '0' + minute
      }
      if (second < 10) {
        second = '0' + second
      }
      this.d = day
      this.h = hour
      this.i = minute
      this.s = second
    },
  },
  created() {
    this.startData()
  },
  beforeDestroy() {
    clearInterval(this.timer)
  },
}
</script>
<style lang="scss" scoped>
.benben-countdown {
  display: inline;
}
</style>
