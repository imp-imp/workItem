<template name="w-picker">
  <view class="w-picker" :key="createKey" :data-key="createKey">
    <view class="mask" :class="{ mask_show: maskShow, visible: isShow }" @tap="cancel" @touchmove.stop.prevent catchtouchmove="true"></view>
    <view class="w-picker-cnt" :class="{ visible: isShow }">
      <view>
        <slot name="picker-header"></slot>
      </view>
      <date-picker
        v-if="mode == 'date'"
        class="w-picker-wrapper"
        :startYear="startYear"
        :endYear="endYear"
        :value="value"
        :fields="fields"
        :item-height="itemHeight"
        :current="current"
        :disabled-after="disabledAfter"
        @change="handlerChange"
        @touchstart="touchStart"
        @touchend="touchEnd"
      ></date-picker>
      <range-picker
        v-if="mode == 'range'"
        class="w-picker-wrapper"
        :startYear="startYear"
        :endYear="endYear"
        :value="defaultValue"
        :item-height="itemHeight"
        :current="current"
        @change="handlerChange"
        @touchstart="touchStart"
        @touchend="touchEnd"
      ></range-picker>
      <half-picker
        v-if="mode == 'half'"
        class="w-picker-wrapper"
        :startYear="startYear"
        :endYear="endYear"
        :value="value"
        :item-height="itemHeight"
        :current="current"
        :disabled-after="disabledAfter"
        @change="handlerChange"
        @touchstart="touchStart"
        @touchend="touchEnd"
      ></half-picker>
      <shortterm-picker
        v-if="mode == 'shortTerm'"
        class="w-picker-wrapper"
        :startYear="startYear"
        :endYear="endYear"
        :value="value"
        :item-height="itemHeight"
        :current="current"
        :expand="expand"
        :disabled-after="disabledAfter"
        @change="handlerChange"
        @touchstart="touchStart"
        @touchend="touchEnd"
      ></shortterm-picker>
      <time-picker
        v-if="mode == 'time'"
        class="w-picker-wrapper"
        :value="value"
        :item-height="itemHeight"
        :current="current"
        :disabled-after="disabledAfter"
        :second="second"
        @change="handlerChange"
        @touchstart="touchStart"
        @touchend="touchEnd"
      ></time-picker>
      <selector-picker
        v-if="mode == 'selector'"
        class="w-picker-wrapper"
        :value="value"
        :item-height="itemHeight"
        :options="options"
        :default-type="defaultType"
        :default-props="defaultProps"
        @change="handlerChange"
        @touchstart="touchStart"
        @touchend="touchEnd"
      ></selector-picker>
      <region-picker
        v-if="mode == 'region'"
        class="w-picker-wrapper"
        :value="defaultValue"
        :hide-area="hideArea"
        :item-height="itemHeight"
        @change="handlerChange"
        @touchstart="touchStart"
        @touchend="touchEnd"
      ></region-picker>
      <linkage-picker
        v-if="mode == 'linkage'"
        class="w-picker-wrapper"
        :value="defaultValue"
        :options="options"
        :level="level"
        :default-type="defaultType"
        :default-props="defaultProps"
        :item-height="itemHeight"
        @change="handlerChange"
        @touchstart="touchStart"
        @touchend="touchEnd"
      ></linkage-picker>
    </view>
  </view>
</template>
<script>
import datePicker from './date-picker.vue'
import rangePicker from './range-picker.vue'
import halfPicker from './half-picker.vue'
import shorttermPicker from './shortterm-picker.vue'
import timePicker from './time-picker.vue'
import selectorPicker from './selector-picker.vue'
import regionPicker from './region-picker.vue'
import linkagePicker from './linkage-picker.vue'
export default {
  name: 'benben-picker',
  components: {
    datePicker,
    rangePicker,
    halfPicker,
    timePicker,
    selectorPicker,
    shorttermPicker,
    regionPicker,
    linkagePicker,
  },
  props: {
    mode: {
      type: String,
      default: 'date',
    },
    pickerHeight: {
      type: [String, Number],
      default: '88',
    },
    value: {
      //默认值
      type: [String, Array, Number],
      default: '',
    },
    current: {
      //是否默认显示当前时间，如果是，传的默认值将失效
      type: Boolean,
      default: false,
    },
    fields: {
      //日期颗粒度:year、month、day、hour、minute、second
      type: String,
      default: 'day',
    },
    disabledAfter: {
      //是否禁用当前之后的日期
      type: Boolean,
      default: false,
    },
    second: {
      //time-picker是否显示秒
      type: Boolean,
      default: true,
    },
    options: {
      //selector,region数据源
      type: [Array, Object],
      default() {
        return []
      },
    },
    defaultProps: {
      //selector,linkagle字段转换配置
      type: Object,
      default: () => {
        return {
          label: 'label',
          value: 'value',
          children: 'children',
        }
      },
    },
    defaultType: {
      type: String,
      default: 'label',
    },
    hideArea: {
      //mode=region时，是否隐藏区县列
      type: Boolean,
      default: false,
    },
    level: {
      //多级联动层级，表示几级联动,区间2-4;
      type: [Number, String],
      default: 2,
    },
    timeout: {
      //是否开启点击延迟,当快速滚动 还没有滚动完毕点击关闭时得到的值是不准确的
      type: Boolean,
      default: false,
    },
    expand: {
      //mode=shortterm 默认往后拓展天数
      type: [Number, String],
      default: 30,
    },
    startYear: {
      type: [String, Number],
      default: 1970,
    },
    endYear: {
      type: [String, Number],
      default: new Date().getFullYear(),
    },
    //是否展示选择器
    visible: {
      type: Boolean,
      default: false,
    },
    maskShow: {
      type: Boolean,
      default: true,
    },
    province: {
      //省
      type: [String, Number],
      default: '',
    },
    city: {
      //市
      type: [String, Number],
      default: '',
    },
    area: {
      //区
      type: [String, Number],
      default: '',
    },
    startValue: {
      //开始时间
      type: [String, Number],
      default: '',
    },
    endValue: {
      //结束时间
      type: [String, Number],
      default: '',
    },
  },
  computed: {
    itemHeight() {
      return `height: ${uni.upx2px(this.pickerHeight)}px;`
    },
    defaultValue() {
      let defaultValue = []
      switch (this.mode) {
        case 'range':
          if (this.startValue) {
            defaultValue.push(this.startValue)
          }
          if (this.endValue) {
            defaultValue.push(this.endValue)
          }
          break
        case 'region':
          if (this.province) {
            defaultValue.push(this.province)
          }
          if (this.city) {
            defaultValue.push(this.city)
          }
          if (this.area) {
            defaultValue.push(this.area)
          }
          break
        case 'linkage':
          if (this.value) {
            //判断this.value是否是数组
            if (this.value.constructor === Array) {
              defaultValue = this.value
            } else {
              defaultValue = this.value.split(',')
            }
          }
          break
        default:
          break
      }
      console.log('defaultValue', defaultValue)
      return defaultValue
    },
  },
  watch: {
    visible(newValue, oldValue) {
      this.isShow = newValue
    },
  },
  created() {
    this.createKey = Math.random() * 1000
    this.isShow = this.visible
  },
  data() {
    return {
      LANGUAGE: '',
      isShow: false,
      result: {},
      confirmFlag: true,
    }
  },
  methods: {
    headerHandle(e) {
      let { type } = e.target.dataset
      console.log(e)
      if (type == 'cancel') {
        this.cancel()
      }
      if (type == 'confirm') {
        this.pickerConfirm()
      }
    },
    touchStart() {
      if (this.timeout) {
        this.confirmFlag = false
      }
    },
    touchEnd() {
      if (this.timeout) {
        setTimeout(() => {
          this.confirmFlag = true
        }, 500)
      }
    },
    handlerChange(res) {
      let _this = this
      this.result = { ...res }
    },
    show() {
      this.isShow = true
      this.$emit('update:visible', true)
    },
    hide() {
      this.isShow = false
      this.$emit('update:visible', false)
    },
    cancel(res) {
      this.isShow = false
      this.$emit('update:visible', false)
      this.$emit('cancel')
    },
    pickerConfirm() {
      if (!this.confirmFlag) {
        return
      }
      let { result, value, obj } = this.result
      console.log('result', this.result)
      switch (this.mode) {
        case 'date':
        case 'half':
        case 'shortTerm':
        case 'time':
          this.$emit('update:value', value)
          this.$emit('update:label', result)
          break
        case 'range':
          this.$emit('update:start-value', `${obj.fyear}-${obj.fmonth}-${obj.fday}`)
          this.$emit('update:end-value', `${obj.tyear}-${obj.tmonth}-${obj.tday}`)
          this.$emit('update:label', result)
          break
        case 'region':
          this.$emit('update:province', value[0])
          this.$emit('update:city', value[1])
          if (value[2]) {
            this.$emit('update:area', value[2])
          }
          this.$emit('update:label', result)
          break
        case 'selector':
          this.$emit('update:value', obj[this.defaultType])
          this.$emit('update:label', result)
          break
        case 'linkage':
          if (!(this.defaultProps.label && this.defaultProps.value)) return false
          let confirmValue = {
            [this.defaultProps.label]: [],
            [this.defaultProps.value]: [],
          }
          Object.keys(obj).map((key) => {
            if (obj[key] && this.defaultProps.value && obj[key][this.defaultProps.value]) {
              confirmValue[this.defaultProps.value].push(obj[key][this.defaultProps.value])
            }
            if (obj[key] && this.defaultProps.label && obj[key][this.defaultProps.value]) {
              confirmValue[this.defaultProps.label].push(obj[key][this.defaultProps.label])
            }
          })
          Object.keys(confirmValue).map((key) => {
            if (this.defaultType == key) {
              this.$emit('update:value', confirmValue[key].join(','))
            } else {
              this.$emit('update:label', confirmValue[key].join(','))
            }
          })
          break
        default:
          break
      }
      this.$emit('change', this.result)
      this.isShow = false
      this.$emit('update:visible', false)
    },
  },
}
</script>

<style lang="scss">
@import './w-picker.css';
.w-picker-item {
  text-align: center;
  width: 100%;
  height: 88upx;
  line-height: 88upx;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 30upx;
}
.w-picker {
  z-index: 888;
  .mask {
    position: fixed;
    z-index: 1000;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
    visibility: hidden;
    opacity: 0;
    transition: all 0.3s ease;
  }
  .mask_show {
    opacity: 1;
  }
  .mask.visible {
    visibility: visible;
  }
  .w-picker-cnt {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    transition: all 0.3s ease;
    transform: translateY(100%);
    z-index: 3000;
  }
  .w-picker-cnt.visible {
    transform: translateY(0);
  }
  .w-picker-header {
    display: flex;
    align-items: center;
    padding: 0 30upx;
    // height: 88upx;
    background-color: #fff;
    position: relative;
    text-align: center;
    font-size: 32upx;
    justify-content: space-between;
    border-bottom: solid 1px #eee;
    .w-picker-btn {
      font-size: 30upx;
    }
  }

  .w-picker-hd:after {
    content: ' ';
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    height: 1px;
    border-bottom: 1px solid #e5e5e5;
    color: #e5e5e5;
    transform-origin: 0 100%;
    transform: scaleY(0.5);
  }
}
</style>
