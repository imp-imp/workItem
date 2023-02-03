<template>
  <view class="w-picker-view">
    <picker-view class="d-picker-view" :indicator-style="itemHeight" :value="pickerVal" @change="bindChange">
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
        <view class="w-picker-item" v-for="(item, index) in sections" :key="index">{{ item }}</view>
      </picker-view-column>
    </picker-view>
  </view>
</template>
<script>
export default {
  name: 'half-picker',
  props: {
    startYear: {
      type: [String, Number],
      default: '2010-01-01',
    },
    endYear: {
      type: [String, Number],
      default: '2050-12-31',
    },
    value: {
      type: [String, Number],
      default: '',
    },
    itemHeight: {
      type: String,
      default: '44px',
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
      sections: ['上午', '下午'],
      minutes: baseArr,
      days28: [],
      pickerVal: [0, 0, 0, 0],
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
    value(val) {
      let value = val.split(' ')
      const date = val ? val : new Date()
      this.initCurr(date)
    },
  },
  created() {
    this.days28 = this.setArray(1, 28)
    this.setStartEnd()
    const date = this.value ? this.value : new Date()
    this.initCurr(date)
    // this.$nextTick(() => {
    //   this.confirm()
    // })
  },
  methods: {
    // 当滚动选择
    bindChange(e) {
      if (this.changeDisabled) return
      this.changeDisabled = true
      const prev = this.pickerVal
      const val = e.detail.value
      const y = this.years[val[0]] ? this.years[val[0]] : this.years[this.years.length - 1]
      const m = this.months[val[1]] ? this.months[val[1]] : this.months[this.months.length - 1]
      const d = this.days[val[2]] ? this.days[val[2]] : this.days[this.days.length - 1]
      const sections = this.sections[val[3]] || this.sections[this.sections.length - 1]
      const date = `${y}-${m}-${d} ${sections}`

      this.initCurr(date, m, d)
      // if (prev[1] != val[1]) {
      //   this.initCurr(date, m, d)
      // } else {
      //   this.initCurr(date)
      // }

      // this.pickerVal = val
    },
    // 点击确定
    confirm() {
      const val = this.pickerVal
      const trimN = this.trimNum
      let date = ''
      let obj = {}
      date = `${this.years[val[0]]}-${trimN(this.months[val[1]])}-${trimN(this.days[val[2]])} ${this.sections[val[3]]}`
      obj = {
        year: this.years[val[0]],
        month: this.months[val[1]],
        day: this.days[val[2]],
        sections: this.sections[val[3]],
      }
      this.date = date
      this.$emit('change', {
        result: date,
        value: date,
        obj: obj,
      })
    },
    // 根据年月,设置日期(不同月份，日期不同)
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
      this.startObj.sections = sh > 12 ? ['下午'] : ['上午', '下午']
      this.endObj.sections = eh > 12 ? ['上午', '下午'] : ['上午']
    },
    // 初始化选中项
    initCurr(val, month, day) {
      const { start, end, sy, ey, sm, em, sd, ed, sh, eh, sminu, eminu } = this.getSE()
      const { val: curr, y: cy, m: cm, d: cd, h: ch, minu: cminu, sections } = this.trimDate(val, month, day)

      let cyi = this.years.indexOf(cy)
      let cmi = 0
      let cdi = 0
      let chi = 0
      let endSIFlag = true // 是否在最后统一设置index
      if (curr.getTime() >= end.getTime()) {
        //  值大于等于结束时间
        // console.log(11)
        this.months = this.endObj.months
        this.days = this.endObj.days
        this.sections = this.endObj.sections
        cyi = this.years.length - 1
        cmi = this.months.length - 1
        cdi = this.days.length - 1
        chi = this.sections.indexOf(sections) == -1 ? 0 : this.sections.indexOf(sections)
        endSIFlag = false
      } else if (curr.getTime() <= start.getTime()) {
        // 值小于等于开始时间
        // console.log(22)
        this.months = this.startObj.months
        this.days = this.startObj.days
        this.sections = this.startObj.sections
        chi = this.sections.indexOf(sections) == -1 ? 0 : this.sections.indexOf(sections)
        cyi = cmi = cdi = 0
        endSIFlag = false
      } else if (cy === ey && cm === em && cd === ed) {
        // 值与结束时间年/月/日相同
        // console.log(111)
        this.months = this.endObj.months
        this.days = this.endObj.days
        this.sections = this.endObj.sections
        // console.log(this.sections)
      } else if (cy === ey && cm === em) {
        // 值与结束时间年、月相同
        // console.log(33)
        this.months = this.endObj.months
        this.days = this.endObj.days
        this.sections = ['上午', '下午']
      } else if (cy === ey) {
        // 值与结束时间年份相同
        // console.log(44)
        this.months = this.endObj.months
        this.days = this.setDays(cy, cm)
        this.sections = ['上午', '下午']
      } else if (cy === sy && cm === sm && cd === sd) {
        // 值与开始时间年/月/日相同
        console.log(88)
        this.months = this.startObj.months
        this.days = this.startObj.days
        this.sections = this.startObj.sections
      } else if (cy === sy && cm === sm) {
        // 值与开始时间年、月相同
        // console.log(55)
        this.months = this.startObj.months
        this.days = this.startObj.days
        this.sections = ['上午', '下午']
      } else if (cy === sy) {
        // 值与开始时间年份相同
        // console.log(66)
        this.months = this.startObj.months
        this.days = this.setDays(cy, cm)
        this.sections = ['上午', '下午']
      } else {
        // 值与开始时间、结束时间不同年月
        // console.log(77)
        this.months = this.setArray(1, 12)
        this.days = this.setDays(cy, cm)
        this.sections = ['上午', '下午']
      }
      if (endSIFlag) {
        const di = this.days.indexOf(cd)
        cmi = this.months.indexOf(cm)
        cdi = di === -1 ? this.days.length - 1 : di
        chi = this.sections.indexOf(sections) == -1 ? 0 : this.sections.indexOf(sections)
      }
      setTimeout((item) => {
        this.pickerVal = [cyi, cmi, cdi, chi, cminui]
        this.confirm()
        this.changeDisabled = false
      }, 50)
      // this.$nextTick((_) => {
      //   this.pickerVal = [cyi, cmi, cdi, chi]
      //   this.confirm()
      //   this.changeDisabled = false
      //   this.showCover = false
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
    // 返回时间信息
    trimDate(val, month, day) {
      //检测时间格式 2050-12-31 或 2022-06-09 下午 或 2022-06-09 上午 或  2050/5/8 上午  正则匹配
      const reg = /^(\d{4})-(\d{1,2})-(\d{1,2})[\s]{0,1}([上下]{1,2}午)$/
      let curr = ''
      let sections = ''
      if (val == '现在') {
        curr = this.presentTime
      } else if (typeof val === 'string') {
        if (reg.test(val)) {
          const arr = val.split(' ')
          val = arr[0]
          sections = arr[1]
        }
        val = val.replace(/-/g, '/')
      }
      if (!curr) {
        curr = new Date(val)
      }
      if (!sections) {
        sections = curr.getHours() > 12 ? '下午' : '上午'
      }
      return {
        val: curr,
        y: curr.getFullYear(),
        m: month ? month : curr.getMonth() + 1,
        d: day ? day : curr.getDate(),
        h: curr.getHours(),
        sections: sections,
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
