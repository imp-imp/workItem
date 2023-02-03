<template>
  <view :class="className" :style="headStyle" :id="`${selectMark}-box`">
    <view class="benben-flex-tabs" :class="className" :style="[stickyContent]">
      <slot></slot>
    </view>
  </view>
</template>
<script>
let pageInfo = null
export default {
  components: {},
  name: 'benben-flex-tabs',
  props: {
    className: {
      type: String,
      default: '',
    },
    selectMark: {
      type: String,
      default: 'benben-tabs',
    },
    scrollspy: {
      type: Boolean,
      default: false,
    },
    value: {
      type: [String, Number],
      default: '',
    },
    openSticky: {
      type: Boolean,
      default: false,
    },
    openTitleType: {
      type: Boolean,
      default: false,
    },
    top: {
      type: [String, Number],
      default: 0,
    },
    zIndex: {
      type: [String, Number],
      default: 90,
    },
    isShowContent: {
      type: Boolean,
      default: false,
    },
    isShowLeft: {
      type: Boolean,
      default: false,
    },
    isShowRight: {
      type: Boolean,
      default: false,
    },
    tabsInfo: {
      type: Object,
      default: () => ({
        lineleft: '',
        lineWidth: '',
        moveX: 0,
        scrollX: 0,
      }),
    },
  },
  data() {
    return {
      tabs: [],
      flag: true,
      isScroll: true,
      tabsHeight: 0,
      setTimeoutFn: null,
      flagSetTimeoutFn: null,
      moveX: 0,
      lineWidth: 0,
      lineleft: 0,
      stickyWidth: 'auto',
      stickyHeight: 'auto',
      stickyLeft: 0,
      isFixed: false,
    }
  },
  //监听属性
  watch: {
    value: {
      handler(val, oldVal) {
        this.$emit('change', val)
        this.queryMultipleNodes(val)
        if (this.isScroll) {
          this.pageScrollTo(val)
        }
        this.isScroll = true
      },
    },
    'tabsInfo.PageScrollX': {
      handler(val) {
        if (!this.scrollspy) return
        this.setTimeoutFn && clearTimeout(this.setTimeoutFn)
        this.setTimeoutFn = setTimeout(() => {
          for (let index = 0; index < this.tabs.length; index++) {
            let elementBefore = 0
            let elementAfter = Infinity
            if (index != 0) {
              elementBefore = this.tabs[index].top - this.tabsHeight
            }
            if (index != this.tabs.length - 1) {
              elementAfter = this.tabs[index + 1].top - this.tabsHeight
            }
            if (val + 1 > elementBefore && val + 1 < elementAfter) {
              if (this.tabs[index].name != this.value && this.flag) {
                this.isScroll = false
                this.$emit('input', this.tabs[index].name)
              }
            }
          }
        }, 300)
      },
    },
  },
  computed: {
    headStyle() {
      return `box-sizing: content-box;padding-top:${this.openTitleType ? this.StatusBarRpx : 0}rpx`
    },
    stickyContent() {
      let style = {}
      style.position = this.isFixed ? 'fixed' : 'static'
      if (this.openTitleType) {
        style.position = 'fixed'
        style.paddingTop = this.StatusBarRpx + 'rpx'
      }
      style.top = this.stickyTop + 'px'
      style.left = this.stickyLeft + 'px'
      if (this.stickyWidth != 'auto') {
        style.width = this.stickyWidth + 'px'
      }
      if (this.stickyHeight != 'auto') {
        style.height = this.stickyHeight + 'px'
      }
      style.zIndex = this.isFixed ? this.zIndex : 0
      return style
    },
    stickyTop() {
      if (this.openTitleType) {
        return Math.floor(this.top / this.unitRatio)
      } else {
        return Math.floor((this.top + this.StatusBarRpx) / this.unitRatio)
      }
    },
  },
  methods: {
    toJSON() {},
    // 获取元素
    uGetRect(selector, all) {
      return new Promise((resolve) => {
        uni
          .createSelectorQuery()
          .in(this)
          [all ? 'selectAll' : 'select'](selector)
          .boundingClientRect((rect) => {
            if (all && Array.isArray(rect) && rect.length) {
              resolve(rect)
            }
            if (!all && rect) {
              resolve(rect)
            }
          })
          .exec()
      })
    },
    initObserveContent() {
      // 获取吸顶内容的高度，用于在js吸顶模式时，给父元素一个填充高度，防止"塌陷"
      this.uGetRect(`#${this.selectMark}-box`).then((res) => {
        console.log('initObserveContent', res)
        this.stickyHeight = res.height
        this.stickyLeft = res.left
        this.stickyWidth = res.width
        this.$nextTick(() => {
          this.observeContent()
        })
      })
    },
    observeContent() {
      // 先断掉之前的观察
      this.disconnectObserver('contentObserver')
      let contentObserver = uni.createIntersectionObserver(this)
      /* #ifndef MP-WEIXIN */
      let pages = getCurrentPages()
      let pageInfo = getCurrentPages()[pages.length - 1]
      contentObserver = uni.createIntersectionObserver(pageInfo)
      /* #endif */
      // 到屏幕顶部的高度时触发
      contentObserver.relativeToViewport({
        top: -this.stickyTop,
      })
      // 绑定观察的元素
      contentObserver.observe(`#${this.selectMark}-box`, (res) => {
        this.setFixed(res)
      })
      this.contentObserver = contentObserver
    },
    setFixed(res) {
      this.isFixed = this.stickyTop > res.boundingClientRect.bottom
    },
    disconnectObserver(observerName) {
      // 断掉观察，释放资源
      const observer = this[observerName]
      observer && observer.disconnect()
    },
    //滚动到指定位置
    queryMultipleNodes(name) {
      let that = this
      let lineWidth = 0
      let boxlet = 0
      let boxWidth = 0
      let maxLeft = 0
      let itemLeft = 0
      let moveX = 0

      this.$nextTick(() => {
        uni
          .createSelectorQuery()
          .select(`#${that.selectMark}`)
          .boundingClientRect()
          .select(`#${that.selectMark}-title-item-${name}`)
          .boundingClientRect()
          .select(`#${that.selectMark}-line`)
          .boundingClientRect()
          .select(`#${that.selectMark}-content`)
          .boundingClientRect()
          .exec(function (rects) {
            that.tabsHeight = Math.floor(rects[0].height + that.StatusBar + that.top / that.unitRatio)
            boxlet = rects[0].left
            boxWidth = rects[0].width
            lineWidth = rects[2].width

            if (rects[1] && rects[1].width && lineWidth > rects[1].width) {
              lineWidth = rects[1].width
              itemLeft = rects[1].left
            }
            maxLeft = rects[3].width - rects[0].width
            maxLeft = maxLeft < 0 ? 0 : maxLeft
            let query = uni.createSelectorQuery().select(`#${that.selectMark}`).scrollOffset()
            query.select(`#${that.selectMark}-title-item-${name}`).boundingClientRect()
            query.exec(function (res) {
              if (!res[1]) return
              itemLeft = that.tabsInfo.scrollX + res[1].left - boxlet + res[1].width / 2
              if (itemLeft >= boxWidth / 2) {
                moveX = itemLeft - boxWidth / 2
                moveX = moveX > maxLeft ? maxLeft : moveX
              } else {
                moveX = 0
              }
              that.$emit('update:tabsInfo', {
                ...that.tabsInfo,
                lineleft: itemLeft + 'px',
                lineWidth: lineWidth + 'px',
                moveX: moveX,
              })
            })
          })
      })
    },
    setflag() {
      this.flag = false
      this.flagSetTimeoutFn && clearTimeout(this.flagSetTimeoutFn)
      this.flagSetTimeoutFn = setTimeout(() => {
        this.flag = true
      }, 1000)
    },
    pageScrollTo(name) {
      if (!this.isShowContent) return
      if (!this.scrollspy) return
      var that = this
      var query = uni.createSelectorQuery()
      query.selectViewport().scrollOffset()
      query.select(`#${this.selectMark}-body-item-${name}`).boundingClientRect()
      query.exec(function (res) {
        var miss = res[0].scrollTop + res[1].top - that.tabsHeight
        that.setflag()
        uni.pageScrollTo({
          scrollTop: miss,
          duration: 300,
        })
      })
    },
    // 获取主体高度
    getBodyHeight() {
      if (!this.isShowContent) return
      if (!this.scrollspy) return
      let that = this
      uni
        .createSelectorQuery()
        .selectAll(`.${this.selectMark}-body-item`)
        .boundingClientRect()
        .exec(function (res) {
          let tabs = []
          res[0].map((item, index) => {
            let name = item.id.replace(`${that.selectMark}-body-item-`, '')
            if (index == 0) {
              tabs.push({
                name,
                top: 0,
              })
            } else {
              tabs.push({
                name,
                top: item.top,
              })
            }
          })
          that.tabs = tabs
        })
    },
  },
  created() {},
  mounted() {
    this.$emit('update:tabs-info', {
      ...this.tabsInfo,
      lineleft: '0px',
      moveX: 0,
    })
    this.$nextTick(() => {
      this.queryMultipleNodes(this.value)
      this.getBodyHeight()
      if (this.openSticky || this.openTitleType) {
        this.initObserveContent()
      }
    })
  },
  beforeDestroy() {
    this.disconnectObserver('contentObserver')
  },
}
</script>
<style lang="scss" scoped></style>
