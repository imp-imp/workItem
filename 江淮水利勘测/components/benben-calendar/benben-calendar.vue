<template>
  <view
    class="component-box fu-calendar-wrap"
    :style="{ width: query.width + 'rpx', background: query.background, borderRadius: query.borderRadius }"
  >
    <!-- 日历选择 start -->
    <view class="fu-calendar-data fu-flex fu-justify-center fu-align-center fu-margin fu-height-72" v-if="query.changeTitle">
      <block v-if="query.changeYear">
        <view class="fu-arrow fu-left fu-flex fu-justify-between fu-align-center" @click="prevYear">
          <text class="iconfont icon-changyongicon-" :style="[yaColor]"></text>
        </view>
      </block>
      <block v-if="query.changeMonth">
        <view class="fu-arrow single fu-left fu-flex fu-justify-between fu-align-center" @click="prevMonth">
          <text class="iconfont icon-jiantouyou" :style="[maColor]"></text>
        </view>
      </block>
      <view class="fu-title fu-text-32 fu-text-333">{{ currentDate[0] }}年{{ currentDate[1] }}月</view>
      <block v-if="query.changeMonth">
        <view class="fu-arrow single fu-right fu-flex fu-justify-between fu-align-center" @click="nextMonth">
          <text class="iconfont icon-jiantouyou" :style="[maColor]"></text>
        </view>
      </block>
      <block v-if="query.changeYear">
        <view class="fu-arrow fu-flex fu-right fu-justify-between fu-align-center" @click="nextYear">
          <text class="iconfont icon-changyongicon-" :style="[yaColor]"></text>
        </view>
      </block>
    </view>
    <!-- 日历选择 end -->
    <!-- 星期 start -->
    <view class="fu-week fu-flex fu-justify-between fu-align-center fu-text-333 fu-height-72">
      <view class="fu-week-item fu-text-center" v-for="item in weekData" :key="item">{{ item }}</view>
    </view>
    <!-- 星期 end -->
    <!-- 日历 start -->
    <view class="fu-calendar fu-flex fu-justify-between fu-align-center fu-flex-wrap fu-text-333">
      <!-- mode == date || mode == range -->
      <view
        class="fu-calendar-item fu-text-center"
        @click="changeCalendar(item, index)"
        :class="{ isNot: item.isNot, isFuture: item.isFuture && !item.isNot }"
        v-for="(item, index) in calendar"
        :key="index"
      >
        <view
          class="fu-calendar-num fu-flex fu-justify-center fu-align-center"
          :class="{ signin: query.mode == 'signin', range: query.mode == 'range', start: item.start, end: item.end }"
          :style="[(item.dayActive || item.start || item.end) && !item.isNot ? dayBg : {}, item.active && !item.isNot ? activeBg : {}]"
        >
          {{ item.day }}
          <view class="fu-calendar-text" v-show="item.start">{{ query.startText }}</view>
          <view class="fu-calendar-text" v-show="item.end">{{ query.endText }}</view>
        </view>
      </view>
    </view>
    <!-- 日历 end -->
  </view>
</template>

<script>
export default {
  name: 'benben-calendar',
  props: {
    query: {
      type: Object,
      default: () => {
        return {
          width: 750, // 宽度
          background: '#ffffff', // 背景
          mode: 'range', // 日期模式 range date signin
          future: false, // 未来日期是否可选择
          changeTitle: true, // 是否显示顶部年月
          changeYear: true, // 是否显示顶部的切换年份方向的按钮
          changeMonth: true, // 是否显示顶部的切换月份方向的按钮
          yearArrowColor: '#666666', // 年份箭头颜色
          monthArrowColor: '#999999', // 月份箭头颜色
          startText: '开始', // 起始日期底部文字
          endText: '结束', // 结束日期底部文字
          activeBgColor: 'rgba(41,121,255,1)', // 开始结束日期背景色
          rangeBgColor: 'rgba(41,121,255,0.13)', // 日期区间背景色
        }
      },
    },
    // 日期段回显时 若只传入一个日期则不显示
    //日期段选择时默认显示开始时间
    startTime: {
      type: String,
      default: '',
    },
    //日期段选择时默认显示结束时间
    endTime: {
      type: String,
      default: '',
    },
    // 当前日期是否高亮
    isDefaultDay: {
      type: Boolean,
      default: true,
    },
    // 单个日期选择默认选中时间 xxxx-yy-dd
    currenTime: {
      type: String,
      default: '',
    },
    // 签到模式数据 [xxxx-yy-dd]
    signinData: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      weekData: ['日', '一', '二', '三', '四', '五', '六'], //星期
      calendar: [], //日历数组
      currentDate: [], //当前日期
      currentDay: '', //当天时间
      start: '', //开始时间
      end: '', //结束时间
      isEmit: true, //mode == range是否推送
    }
  },
  computed: {
    // 背景色
    dayBg() {
      return { background: this.query.activeBgColor, color: '#ffffff' }
    },
    // 时间段背景色
    activeBg() {
      return { background: this.query.rangeBgColor, color: '#ffffff' }
    },
    // 年份箭头颜色
    yaColor() {
      return { color: this.query.yearArrowColor }
    },
    // 月份箭头颜色
    maColor() {
      return { color: this.query.monthArrowColor }
    },
  },
  watch: {
    signinData: {
      deep: true,
      handler(newVal, oldVal) {
        if (this.query.mode == 'signin') {
          this.singinFun(this.calendar, newVal)
        }
      },
    },
    query: {
      deep: true,
      handler(newVal, oldVal) {
        if (newVal.mode != oldVal.mode || newVal.future != oldVal.future) {
          this.initData()
        }
      },
    },
  },
  mounted() {
    this.initData()
  },
  methods: {
    initData() {
      let currentDate = this.currentime()
      let y = currentDate[0]
      let m = currentDate[1] > 9 ? currentDate[1] : '0' + currentDate[1]
      let d = currentDate[2] > 9 ? currentDate[2] : '0' + currentDate[2]
      this.currentDate = currentDate
      //  mode == 'date' 在传入单个时间时 currentDay不再显示默认的当前时间
      if (this.query.mode == 'date') {
        if (this.currenTime) {
          this.currentDay = this.currenTime
        } else {
          if (this.isDefaultDay) {
            this.currentDay = `${y}-${m}-${d}`
          }
        }
      }
      //  mode == 'date' isDefaultDay == true时 当前时间才显示
      if (this.query.mode == 'range') {
        if (this.isDefaultDay) {
          this.currentDay = `${y}-${m}-${d}`
        }
      }
      // 日历赋值
      this.calendar = this.getCalendar(currentDate[0], currentDate[1], currentDate[2])
    },
    /**
     * @description 获取当前时间函数
     */
    currentime() {
      var date = new Date()
      var y = Number(date.getFullYear())
      var m = Number(date.getMonth() + 1)
      var d = Number(date.getDate())
      return [y, m, d]
    },
    /**
     * @description 获取日历
     * @param {String,Number} y 年
     * @param {String,Number} m 月
     */
    getCalendar(y, m) {
      // 求解cy年cm月cd日是星期几,parseInt代表取整 d=1是去每个月第一天
      var cc = parseInt(y / 100) //c
      var cy = y - cc * 100 //y
      var cm = m //m
      var cd = 1 //d
      // 某年的1、2月要看作上一年的13、14月来计算，比如2003年1月1日要看作2002年的13月1日来计算
      if (m == 1 || m == 2) {
        cc = parseInt((y - 1) / 100)
        cy = y - 1 - cc * 100
        cm = 12 + m
      }
      //w=y+[y/4]+[c/4]-2c+[26(m+1）/10]+d-1
      // var csum = y + [y / 4] + [c / 4] - 2c+[26(m + 1）/10]+d-1;
      var csum = cy + parseInt(cy / 4) + parseInt(cc / 4) - 2 * cc + parseInt((26 * (cm + 1)) / 10) + cd - 1
      // 注意使用蔡勒公式时出现负数情况    fd 每月第一天星期几
      if (csum < 0) {
        var fd = parseInt(((csum % 7) + 7) % 7)
      } else {
        var fd = parseInt(csum % 7)
      }
      // 上个月天数
      var cond1 = y % 4 == 0 //条件1：年份必须要能被4整除
      var cond2 = y % 100 != 0 //条件2：年份不能是整百数
      var cond3 = y % 400 == 0 //条件3：年份是400的倍数
      //当条件1和条件2同时成立时，就肯定是闰年，所以条件1和条件2之间为“与”的关系。
      //如果条件1和条件2不能同时成立，但如果条件3能成立，则仍然是闰年。所以条件3与前2项为“或”的关系。
      //所以得出判断闰年的表达式：
      var cond = (cond1 && cond2) || cond3
      //判断当月有多少天
      var allDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][m - 1]
      if (cond && m == 2) {
        allDays = 29
      }
      //上个月是不是去年
      let prevYear = y
      let prevMonth = m - 1
      if (m == 1) {
        prevYear = y - 1
        prevMonth = 12
      }
      let _prevMonth = prevMonth > 9 ? prevMonth : '0' + prevMonth
      let _m = m > 9 ? m : '0' + m
      //判断上个月天数
      var prevDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][prevMonth - 1]
      var calendar = []
      //这里塞入上个月末尾日期
      //day 日  active 是否选择 isNot 是不是这个月 formData 日期格式 isBg 是否加背景色（日期段筛选时使用）
      for (let i = 1; i <= fd; i++) {
        let prevDay = prevDays - fd + i
        let _prevDay = prevDay > 9 ? prevDay : '0' + prevDay
        calendar.push({
          day: prevDay,
          active: false,
          isNot: true,
          formData: prevYear + '-' + _prevMonth + '-' + _prevDay,
        })
      }
      //这里塞入正常这个月的日期
      let week = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
      for (let i = 1; i <= allDays; i++) {
        let _i = i > 9 ? i : '0' + i
        calendar.push({
          day: i,
          active: false,
          isNot: false,
          formData: y + '-' + _m + '-' + _i,
          week: week[((i + fd - 1) % 7) % 7],
          year: y,
          month: m,
          allDays: allDays,
        })
      }
      //下个月是不是下一年
      let nextYear = y
      let nextMonth = m + 1
      if (m == 12) {
        nextYear = y + 1
        nextMonth = 1
      }
      let _nextMonth = nextMonth > 9 ? nextMonth : '0' + nextMonth
      //判断数组最后一排剩余几个位置塞入下个月日期
      let takedie = calendar.length % 7
      if (7 - takedie > 0 && 7 - takedie < 7) {
        for (let i = 1; i <= 7 - takedie; i++) {
          let _i = i > 9 ? i : '0' + i
          calendar.push({
            day: i,
            active: false,
            isNot: true,
            formData: nextYear + '-' + _nextMonth + '-' + _i,
          })
        }
      }
      // 默认当天时间加背景色
      if (this.query.mode == 'date') {
        // 在range模式时  start end不存在时走这个
        if (this.isDefaultDay || this.currentDay) {
          this.currentDayFun(calendar, this.currentDay, true)
        }
      }
      if (this.query.mode == 'range') {
        // 在range模式时  start end不存在时走这个
        if (this.isDefaultDay || this.currentDay) {
          if (!this.startTime || !this.endTime) {
            this.currentDayFun(calendar, this.currentDay, true)
          }
        }
        // 当开始时间与结束时间存在时
        if (this.startTime && this.endTime && this.startTime != this.endTime) {
          // 当没有选择过时 进行赋值操作  若是已经点击过 start end存在值 就不需要赋值了
          if (!this.start && !this.end) {
            this.start = this.startTime
            this.end = this.endTime
            // 判断开始结束值存入本地
            if (!uni.getStorageSync('startItem')) {
              let startItem = calendar.find((item) => item.formData == this.start)
              uni.setStorageSync('startItem', JSON.stringify(startItem))
            }
            if (!uni.getStorageSync('endItem')) {
              let endItem = calendar.find((item) => item.formData == this.end)
              uni.setStorageSync('endItem', JSON.stringify(endItem))
            }
          }
        }

        this.rangeDayFun(calendar, true)
      }
      if (this.query.mode == 'signin') {
        this.singinFun(calendar, this.signinData)
      }
      // 判断未来日期是否可选择
      if (!this.query.future) {
        let nowData = new Date().getTime()
        calendar.forEach((val) => {
          val.isFuture = false
          if (new Date(val.formData).getTime() > nowData) {
            val.isFuture = true
          }
        })
      }
      return calendar
    },
    /**
     * @description 高亮日期  签到模式
     */
    singinFun(calendar, data) {
      calendar.forEach((a) => {
        a.dayActive = false
        data.forEach((b) => {
          if (a.formData == b) {
            a.dayActive = true
          }
        })
      })
      this.calendar = calendar
      this.$forceUpdate()
    },
    /**
     * @description 单个日期是否高亮
     * @param {Array} calendar 日历数组
     * @param {String} day 选择的日期
     * @param {Boolen} isInit 初始化触发change时间参数
     */
    currentDayFun(calendar, day, isInit = false) {
      let that = this
      calendar.forEach((item) => {
        item.dayActive = false
        if (Math.floor(new Date(item.formData).getTime() / 1000) == Math.floor(new Date(day).getTime() / 1000)) {
          item.dayActive = true
          if (this.query.mode == 'date') {
            that.$emit('update:curren-time', item.formData)
            if (!isInit) {
              that.$emit('change', {
                day: item.day,
                time: item.formData,
                week: item.week,
                year: item.year,
                month: item.month,
                allDays: item.allDays,
                isInit: isInit,
              })
            }
          }
        }
      })
      this.calendar = calendar
      this.$forceUpdate()
    },
    /**
     * @description 日期范围选择
     */
    rangeDayFun(calendar, isInit = false) {
      // 判断 start  end  和中间的时间
      calendar.forEach((val) => {
        val.start = false
        val.end = false
        val.active = false
        val.dayActive = false
        // 开始时间
        if (new Date(val.formData).getTime() == new Date(this.start).getTime()) {
          val.start = true
        }
        // 结束时间
        if (new Date(val.formData).getTime() == new Date(this.end).getTime()) {
          val.end = true
        }
        // 当开始结束时间选择完毕   开始时间大于结束时间时进行翻转
        if (this.start && this.end && new Date(this.start).getTime() > new Date(this.end).getTime()) {
          let start = this.start
          this.start = this.end
          this.end = start
        }
        // 开始结束中间时间段
        if (new Date(val.formData).getTime() > new Date(this.start).getTime() && new Date(val.formData).getTime() < new Date(this.end).getTime()) {
          val.active = true
        }
      })
      if (this.start && this.end && this.isEmit) {
        let startItem = JSON.parse(uni.getStorageSync('startItem'))
        let endItem = JSON.parse(uni.getStorageSync('endItem'))
        this.$emit('update:start-time', this.start)
        this.$emit('update:end-time', this.end)
        if (!isInit) {
          this.$emit('change', {
            start: this.start,
            startYear: startItem.year,
            startWeek: startItem.week,
            startMonth: startItem.month,
            startDay: startItem.day,
            end: this.end,
            endYear: endItem.year,
            endWeek: endItem.week,
            endMonth: endItem.month,
            endDay: endItem.day,
            isInit: isInit,
          })
        }

        this.isEmit = false
      }
      this.calendar = calendar
      this.$forceUpdate()
    },
    /**
     * @description 点击日期
     * @param {Object} item 入参 所点击日期信息
     */
    changeCalendar(item, index) {
      // 签到模式纯展示模式
      if (this.query.mode == 'signin') return
      // 未来日期 上下月日期不可选择
      if (item.isFuture || item.isNot) return
      if (this.query.mode == 'date') {
        if (this.currentDay == item.formData) return
        // 选择日期记录
        this.currentDay = item.formData
        this.currentDayFun(this.calendar, item.formData)
      }
      if (this.query.mode == 'range') {
        // 当已经选择了开始结束时间时  再次点击时先清空之前的时间
        if (this.start && this.end) {
          this.start = ''
          this.end = ''
          this.isEmit = true
          uni.removeStorageSync('startItem')
          uni.removeStorageSync('endItem')
        }
        // 默认先赋值开始时间
        if (!this.start && !this.end) {
          this.start = item.formData
          uni.setStorageSync('startItem', JSON.stringify(item))
        } else if (this.start && !this.end) {
          // 当第二次选择时间和第一次相同时  不再触发赋值
          if (this.start == item.formData) return
          this.end = item.formData
          uni.setStorageSync('endItem', JSON.stringify(item))
        }
        this.rangeDayFun(this.calendar)
      }
    },
    /**
     * @description 上年今月
     */
    prevYear() {
      let currentDate = this.currentDate
      currentDate = [currentDate[0] - 1, currentDate[1]]
      this.currentDate = currentDate
      this.calendar = this.getCalendar(currentDate[0], currentDate[1])
    },
    /**
     * @description 下年今月
     */
    nextYear() {
      let currentDate = this.currentDate
      currentDate = [Number(currentDate[0]) + 1, Number(currentDate[1])]
      this.currentDate = currentDate
      this.calendar = this.getCalendar(currentDate[0], currentDate[1])
    },
    /**
     * @description 上月
     */
    prevMonth() {
      let currentDate = this.currentDate
      if (currentDate[1] - 1 == 0) {
        currentDate = [currentDate[0] - 1, 12]
      } else {
        currentDate = [currentDate[0], currentDate[1] - 1]
      }
      this.currentDate = currentDate
      this.calendar = this.getCalendar(currentDate[0], currentDate[1])
    },
    /**
     * @description 下月
     */
    nextMonth() {
      let currentDate = this.currentDate
      if (currentDate[1] == 12) {
        currentDate = [Number(currentDate[0]) + 1, 1]
      } else {
        currentDate = [Number(currentDate[0]), Number(currentDate[1]) + 1]
      }
      this.currentDate = currentDate
      this.calendar = this.getCalendar(currentDate[0], currentDate[1])
    },
  },
}
</script>

<style scoped lang="scss">
@import './css/iconfont.css';
.fu-calendar-wrap {
  background-size: 100% auto !important;
}
.fu-flex {
  display: flex;
}
.fu-justify-center {
  justify-content: center;
}
.fu-justify-between {
  justify-content: space-between;
}
.fu-align-center {
  align-items: center;
}
.fu-text-32 {
  font-size: 32rpx;
}
.fu-text-333 {
  color: #333333;
}
.fu-text-center {
  text-align: center;
}
.fu-margin {
  margin: 10rpx 0;
}
.fu-height-72 {
  height: 72rpx;
  line-height: 72rpx;
}
.fu-flex-wrap {
  flex-wrap: wrap;
}
// 日历选择 start
.fu-calendar-data {
  .fu-title {
    padding: 0 10rpx;
  }
  .fu-arrow {
    height: 100%;
    // padding: 0 10rpx;
    text {
      font-size: 36rpx;
    }
    &.fu-left {
      transform: rotate(180deg);
      padding-left: 10rpx;
    }
    &.fu-right {
      padding-left: 10rpx;
    }
    &.single {
      text {
        font-size: 32rpx;
      }
    }
  }
}
// 日历选择 end
// 星期 start
.fu-week {
  .fu-week-item {
    width: calc(100% / 7);
  }
}
// 星期 end
// 日历 start
.fu-calendar {
  .fu-calendar-item {
    width: calc(100% / 7);
    padding-bottom: calc(100% / 7);
    position: relative;
    overflow: hidden;

    .fu-calendar-num {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      &.start {
        border-radius: 16rpx 0 0 16rpx;
      }
      &.end {
        border-radius: 0 16rpx 16rpx 0;
      }
      .fu-calendar-text {
        position: absolute;
        bottom: 4rpx;
        left: 0;
        width: 100%;
        font-size: 20rpx;
        color: #ffffff;
        text-align: center;
      }
      &.range {
        position: absolute;
        width: 100%;
        height: 90%;
        top: 50%;
        transform: translateY(-50%);
      }
      &.signin {
        position: absolute;
        width: 60%;
        height: 60%;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        border-radius: 50%;
      }
    }
    &.isNot {
      color: #999;
    }
    &.isFuture {
      color: #666;
    }
  }
}
// 日历 end
</style>
