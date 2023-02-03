<template>
  <view class="w-picker-view">
    <picker-view v-if="fields == 'year'" class="d-picker-view" :indicator-style="itemHeight" :value="pickerVal" @change="bindChange">
      <picker-view-column>
        <view class="w-picker-item" v-for="(item, index) in years" :key="index">{{ item }}年</view>
      </picker-view-column>
    </picker-view>
    <picker-view v-else-if="fields == 'month'" class="d-picker-view" :indicator-style="itemHeight" :value="pickerVal" @change="bindChange">
      <picker-view-column>
        <view class="w-picker-item" v-for="(item, index) in years" :key="index">{{ item }}年</view>
      </picker-view-column>
      <picker-view-column>
        <view class="w-picker-item" v-for="(item, index) in months" :key="index">{{ item }}月</view>
      </picker-view-column>
    </picker-view>
    <picker-view v-if="fields == 'day'" class="d-picker-view" :indicator-style="itemHeight" :value="pickerVal" @change="bindChange">
      <picker-view-column>
        <view class="w-picker-item" v-for="(item, index) in years" :key="index">{{ item }}年</view>
      </picker-view-column>
      <picker-view-column>
        <view class="w-picker-item" v-for="(item, index) in months" :key="index">{{ item }}月</view>
      </picker-view-column>
      <picker-view-column>
        <view class="w-picker-item" v-for="(item, index) in days" :key="index">{{ item }}日</view>
      </picker-view-column>
    </picker-view>
    <picker-view v-else-if="fields == 'hour'" class="d-picker-view" :indicator-style="itemHeight" :value="pickerVal" @change="bindChange">
      <picker-view-column>
        <view class="w-picker-item" v-for="(item, index) in years" :key="index">{{ item }}年</view>
      </picker-view-column>
      <picker-view-column>
        <view class="w-picker-item" v-for="(item, index) in months" :key="index">{{ item }}月</view>
      </picker-view-column>
      <picker-view-column>
        <view class="w-picker-item" v-for="(item, index) in days" :key="index">{{ item }}日</view>
      </picker-view-column>
      <picker-view-column>
        <view class="w-picker-item" v-for="(item, index) in hours" :key="index">{{ item }}时</view>
      </picker-view-column>
    </picker-view>
    <picker-view v-else class="d-picker-view" :indicator-style="itemHeight" :value="pickerVal" @change="bindChange">
      <picker-view-column>
        <view class="w-picker-item" v-for="(item, index) in years" :key="index">{{ item }}年</view>
      </picker-view-column>
      <picker-view-column>
        <view class="w-picker-item" v-for="(item, index) in months" :key="index">{{ item }}月</view>
      </picker-view-column>
      <picker-view-column>
        <view class="w-picker-item" v-for="(item, index) in days" :key="index">{{ item }}日</view>
      </picker-view-column>
      <picker-view-column>
        <view class="w-picker-item" v-for="(item, index) in hours" :key="index">{{ item }}时</view>
      </picker-view-column>
      <picker-view-column>
        <view class="w-picker-item" v-for="(item, index) in minutes" :key="index">{{ item }}分</view>
      </picker-view-column>
    </picker-view>
  </view>
</template>
<script>
import dayjs from '@/libs/day.js'
export default {
  name: 'date-picker',
  props: {
    startYear: {
      type: [String, Number],
      default: '2010/01/01 00:00',
    },
    endYear: {
      type: [String, Number],
      default: '2050/12/31 23:59',
    },
    value: {
      type: [String, Number],
      default: '',
    },
    itemHeight: {
      type: String,
      default: '44px',
    },
    fields: {
      type: String,
      default: 'day',
    },
  },
  data() {
    const baseArr = ['', '']
    return {
      date: '',
      presentTime: new Date(),
      years: baseArr,
      months: baseArr,
      days: baseArr,
      hours: baseArr,
      minutes: baseArr,
      days28: [],
      pickerVal: [],
      startObj: {
        months: [],
        days: [],
      },
      endObj: {
        months: [],
        days: [],
      },
      changeDisabled: false,
      moveFlag: false,
      showCover: false,
      hasChange: false,
    }
  },
  watch: {
    startYear() {
      this.setStartEnd()
      const date = this.value ? this.value : new Date()
      this.initCurr(date)
    },
    endYear() {
      this.setStartEnd()
      const date = this.value ? this.value : new Date()
      this.initCurr(date)
    },
    value: {
      handler(val) {
        const date = val ? val : new Date()
        this.initCurr(date)
        const { y, m, d, h, minu } = this.trimDate(this.value)
        const trimN = this.trimNum
        this.date = `${y}-${trimN(m)}-${trimN(d)} ${trimN(h)}:${trimN(minu)}`
      },
      // immediate: true,
    },
  },
  created() {
    this.days28 = this.setArray(1, 28)
    this.setStartEnd()
    if (this.value) {
      const { y, m, d, h, minu } = this.trimDate(this.value)
      const trimN = this.trimNum
      this.date = `${y}-${trimN(m)}-${trimN(d)} ${trimN(h)}:${trimN(minu)}`
    }
    const date = this.value ? this.value : new Date()
    this.initCurr(date)
    this.$nextTick(() => {
      this.confirm()
    })
  },
  methods: {
    // 当滚动选择
    bindChange: function (e) {
      if (this.changeDisabled) return
      this.changeDisabled = true
      const prev = this.pickerVal
      const val = e.detail.value
      const y = this.years[val[0]] ? this.years[val[0]] : this.years[this.years.length - 1]
      const m = this.months[val[1]] ? this.months[val[1]] : this.months[this.months.length - 1]
      const d = this.days[val[2]] ? this.days[val[2]] : this.days[this.days.length - 1]
      const h = this.hours[val[3]] >= 0 ? this.hours[val[3]] : this.hours[this.hours.length - 1]
      const minu = this.minutes[val[4]] >= 0 ? this.minutes[val[4]] : this.minutes[this.minutes.length - 1]
      const date = `${y}/${m}/${d} ${h}:${minu}`

      if (prev[1] != val[1]) {
        this.initCurr(date, m, d)
      } else {
        this.initCurr(date)
      }
    },
    // 点击确定
    confirm() {
      const val = this.pickerVal
      const trimN = this.trimNum
      let date = ''
      let obj = {}
      switch (this.fields) {
        case 'year':
          date = `${this.years[val[0]]}`
          obj = {
            year: this.years[val[0]],
          }
          break
        case 'month':
          date = `${this.years[val[0]]}-${trimN(this.months[val[1]])}`
          obj = {
            year: this.years[val[0]],
            month: this.months[val[1]],
          }
          break
        case 'day':
          date = `${this.years[val[0]]}-${trimN(this.months[val[1]])}-${trimN(this.days[val[2]])}`
          obj = {
            year: this.years[val[0]],
            month: this.months[val[1]],
            day: this.days[val[2]],
          }
          break
        case 'hour':
          date = `${this.years[val[0]]}-${trimN(this.months[val[1]])}-${trimN(this.days[val[2]])} ${trimN(this.hours[val[3]])}`
          obj = {
            year: this.years[val[0]],
            month: this.months[val[1]],
            day: this.days[val[2]],
            hour: this.hours[val[3]],
          }
          break
        default:
          date = `${this.years[val[0]]}-${trimN(this.months[val[1]])}-${trimN(this.days[val[2]])} ${trimN(this.hours[val[3]])}:${trimN(
            this.minutes[val[4]]
          )}`
          obj = {
            year: this.years[val[0]],
            month: this.months[val[1]],
            day: this.days[val[2]],
            hour: this.hours[val[3]],
            minute: this.minutes[val[4]],
          }
          break
      }
      this.date = date
      this.$emit('change', {
        result: date,
        value: date,
        obj: obj,
      })
    },
    setDays(year, month, start = 1) {
      let newDays = []
      const monthReg = /^4|6|9|11$/
      let maxDay = ''
      if (monthReg.test(month)) {
        maxDay = 30
      } else if (month === 2) {
        if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
          maxDay = 29
        } else {
          maxDay = 28
        }
      } else {
        maxDay = 31
      }
      newDays = this.setArray(start, maxDay)
      return newDays
    },
    // 设置最大最小月日时分
    setStartEnd() {
      const { sy, ey, sm, em, sd, ed, sh, eh, sminu, eminu } = this.getSE()
      this.years = this.setArray(sy, ey)
      // 设置最大最小月
      if (sy === ey) {
        this.startObj.months = this.endObj.months = this.setArray(sm, em)
      } else {
        this.startObj.months = this.setArray(sm, 12)
        this.endObj.months = this.setArray(1, em)
      }

      // 设置最大最小日
      if (sy === ey && sm === em) {
        this.startObj.days = this.endObj.days = this.setArray(sd, ed)
      } else {
        this.startObj.days = this.setDays(sy, sm, sd)
        this.endObj.days = this.setArray(1, ed)
      }

      // 设置最大最小时
      if (sy === ey && sm === em && sd === ed) {
        this.startObj.hours = this.endObj.hours = this.setArray(sh, eh)
      } else {
        this.startObj.hours = this.setArray(sh, 23)
        this.endObj.hours = this.setArray(0, eh)
      }

      // 设置最大最小分钟
      if (sy === ey && sm === em && sd === ed && sh === eh) {
        this.startObj.minutes = this.endObj.minutes = this.setArray(sminu, eminu)
      } else {
        this.startObj.minutes = this.setArray(sminu, 59)
        this.endObj.minutes = this.setArray(0, eminu)
      }
    },
    // 初始化选中项
    initCurr(val, month, day) {
      const { start, end, sy, ey, sm, em, sd, ed, sh, eh, sminu, eminu } = this.getSE()
      const { val: curr, y: cy, m: cm, d: cd, h: ch, minu: cminu } = this.trimDate(val, month, day)
      let cyi = this.years.indexOf(cy)
      let cmi = 0
      let cdi = 0
      let chi = 0
      let cminui = 0
      let endSIFlag = true // 是否在最后统一设置index
      if (curr.getTime() >= end.getTime()) {
        //  值大于等于结束时间
        // console.log(11)
        this.months = this.endObj.months
        this.days = this.endObj.days
        this.hours = this.endObj.hours
        this.minutes = this.endObj.minutes
        cyi = this.years.length - 1
        cmi = this.months.length - 1
        cdi = this.days.length - 1
        chi = this.hours.length - 1
        cminui = this.minutes.length - 1
        endSIFlag = false
      } else if (curr.getTime() <= start.getTime()) {
        // 值小于等于开始时间
        // console.log(22)
        this.months = this.startObj.months
        this.days = this.startObj.days
        this.hours = this.startObj.hours
        this.minutes = this.startObj.minutes
        cyi = cmi = cdi = chi = cminui = 0
        endSIFlag = false
      } else if (cy === ey && cm === em && cd === ed && ch === eh) {
        // 值与结束时间年/月/日/时相同
        // console.log(222)
        this.months = this.endObj.months
        this.days = this.endObj.days
        this.hours = this.endObj.hours
        this.minutes = this.endObj.minutes
      } else if (cy === ey && cm === em && cd === ed) {
        // 值与结束时间年/月/日相同
        // console.log(111)
        this.months = this.endObj.months
        this.days = this.endObj.days
        this.hours = this.endObj.hours
        // console.log(this.hours)
        this.minutes = this.setArray(0, 59)
      } else if (cy === ey && cm === em) {
        // 值与结束时间年、月相同
        // console.log(33)
        this.months = this.endObj.months
        this.days = this.endObj.days
        this.hours = this.setArray(0, 23)
        this.minutes = this.setArray(0, 59)
      } else if (cy === ey) {
        // 值与结束时间年份相同
        // console.log(44)
        this.months = this.endObj.months
        this.days = this.setDays(cy, cm)
        this.hours = this.setArray(0, 23)
        this.minutes = this.setArray(0, 59)
      } else if (cy === sy && cm === sm && cd === sd && ch === sh) {
        // 值与开始时间年/月/日/时相同
        // console.log(99)
        this.months = this.startObj.months
        this.days = this.startObj.days
        this.hours = this.startObj.hours
        this.minutes = this.startObj.minutes
      } else if (cy === sy && cm === sm && cd === sd) {
        // 值与开始时间年/月/日相同
        // console.log(88)
        this.months = this.startObj.months
        this.days = this.startObj.days
        this.hours = this.startObj.hours
        this.minutes = this.setArray(0, 59)
      } else if (cy === sy && cm === sm) {
        // 值与开始时间年、月相同
        // console.log(55)
        this.months = this.startObj.months
        this.days = this.startObj.days
        this.hours = this.setArray(0, 23)
        this.minutes = this.setArray(0, 59)
      } else if (cy === sy) {
        // 值与开始时间年份相同
        // console.log(66)
        this.months = this.startObj.months
        this.days = this.setDays(cy, cm)
        this.hours = this.setArray(0, 23)
        this.minutes = this.setArray(0, 59)
      } else {
        // 值与开始时间、结束时间不同年月
        // console.log(77)
        this.months = this.setArray(1, 12)
        this.days = this.setDays(cy, cm)
        this.hours = this.setArray(0, 23)
        this.minutes = this.setArray(0, 59)
      }

      if (endSIFlag) {
        const di = this.days.indexOf(cd)
        cmi = this.months.indexOf(cm)
        cdi = di === -1 ? this.days.length - 1 : di
        chi = this.hours.indexOf(ch)
        cminui = this.minutes.indexOf(cminu)
      }
      setTimeout((item) => {
        this.pickerVal = [cyi, cmi, cdi, chi, cminui]
        this.confirm()
        this.changeDisabled = false
      }, 50)
      // this.$nextTick(() => {
      // this.pickerVal = [cyi, cmi, cdi, chi, cminui]
      // this.confirm()
      // this.changeDisabled = false
      //   // this.showCover = false
      //   // this.hasChange = false
      // })
    },
    // 设置开始/结束时间相关变量
    getSE() {
      let s = this.startYear
      let e = this.endYear
      s = s ? s : '2010-01-01 00:00'
      e = e ? e : '2050-12-31 23:59'
      const { val: start, y: sy, m: sm, d: sd, h: sh, minu: sminu } = this.trimDate(s)
      const { val: end, y: ey, m: em, d: ed, h: eh, minu: eminu } = this.trimDate(e)
      return {
        start,
        sy,
        sm,
        sd,
        sh,
        sminu,
        end,
        ey,
        em,
        ed,
        eh,
        eminu,
      }
    },
    trimDate(val, month, day) {
      // const reg = /^\d{4}-\d{1,2}-\d{1,2}( \d{1,2}:\d{1,2})?(:\d{1,2})?$/
      let curr = ''
      if (val == '现在') {
        curr = this.presentTime
      } else {
        if (typeof val === 'string') {
          curr = dayjs(val, ['YYYY', 'YYYY-MM-DD', 'YYYY-MM-DD HH', 'YYYY-MM-DD HH:m'], 'es', true).$d
        } else {
          curr = new Date(val)
        }
      }
      return {
        val: curr,
        y: curr.getFullYear(),
        m: month ? month : curr.getMonth() + 1,
        d: day ? day : curr.getDate(),
        h: curr.getHours(),
        minu: curr.getMinutes(),
      }
    },
    // 获取一个范围内的整数，返回数组
    setArray(start, end) {
      const arr = []
      for (let i = start; i <= end; i++) {
        arr.push(i)
      }
      return arr
    },
    // 将数字转换成两位
    trimNum(num) {
      num = num >= 10 ? num : `0${num}`
      return num
    },
  },
}
</script>

<style scoped>
@import './w-picker.css';
</style>
