<template>
	<view>
    <uni-countdown
      :background-color="backgroundColor"
      :color="color"
      :splitor-color="splitorColor"
      :show-day="showDay"
      :show-colon="showColon"
      :day="dates.days"
      :hour="dates.hours"
      :minute="dates.minutes"
      :second="dates.seconds"
      @timeup="handleOver"
    ></uni-countdown>
	</view>
</template>

<script>
  import uniCountdown from '@/components/uni-countdown/uni-countdown.vue'
	export default {
    components: {
      uniCountdown
    },
    props: {
      showDay: {
      	type: Boolean,
      	default: true
      },
      showColon: {
      	type: Boolean,
      	default: true
      },
      backgroundColor: {
      	type: String,
      	default: '#FFFFFF'
      },
      borderColor: {
      	type: String,
      	default: '#000000'
      },
      color: {
      	type: String,
      	default: '#000000'
      },
      splitorColor: {
      	type: String,
      	default: '#000000'
      },
      seconds: {
        type: [Number, String],
        default: 0,
      }
    },
		data() {
			return {
        dates: {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        }
			};
		},
    methods: {
      handleOver(){
        this.$emit('timeup');
      },
    },
    created() {
      this.dates = this.$util.downTime(this.seconds);
    },
	}
</script>

<style lang="scss">

</style>
