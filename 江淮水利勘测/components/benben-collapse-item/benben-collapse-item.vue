<template>
  <view class="benben-collapse-item">
    <view @click="onClick(!isOpen)" :class="{ open: isheight }">
      <slot name="title" v-bind:isOpen="isOpen" v-bind:item="item"></slot>
      <slot name="line" v-if="border"></slot>
    </view>
    <view class="benben-collapse-item__wrap" :class="{ 'is--transition': showAnimation }">
      <view :id="elId" ref="collapse--hook" class="benben-collapse-item__wrap-content">
        <slot name="content" v-bind:isOpen="isOpen" v-bind:item="item"></slot>
      </view>
    </view>
  </view>
</template>

<script>
/**
 * CollapseItem 折叠面板子组件
 * @description 折叠面板子组件
 * @property {String} title 标题文字
 * @property {String} thumb 标题左侧缩略图
 * @property {String} name 唯一标志符
 * @property {Boolean} open = [true|false] 是否展开组件
 * @property {Boolean} border = [true|false] 是否显示分隔线
 * @property {Boolean} disabled = [true|false] 是否展开面板
 * @property {Boolean} showAnimation = [true|false] 开启动画
 */
export default {
  name: 'benben-collapse-item',
  props: {
    // 列表标题
    title: {
      type: String,
      default: '',
    },
    name: {
      type: [Number, String],
      default: '',
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      default: false,
    },
    // #ifdef APP-PLUS
    // 是否显示动画,app 端默认不开启动画，卡顿严重
    showAnimation: {
      type: Boolean,
      default: false,
    },
    // #endif
    // #ifndef APP-PLUS
    // 是否显示动画
    showAnimation: {
      type: Boolean,
      default: true,
    },
    // #endif
    // 是否展开
    open: {
      type: Boolean,
      default: false,
    },
    // 缩略图
    thumb: {
      type: String,
      default: '',
    },
    // 是否显示边框
    border: {
      type: Boolean,
      default: false,
    },
    item: {
      type: [String,Object]
    },
  },
  data() {
    // TODO 随机生生元素ID，解决百度小程序获取同一个元素位置信息的bug
    const elId = `Uni_${Math.ceil(Math.random() * 10e5).toString(36)}`
    return {
      isOpen: false,
      isheight: null,
      height: 0,
      elId,
      nameSync: 0,
    }
  },
  watch: {
    open(val) {
      this.isOpen = val
      this.onClick(val, 'init')
    },
  },
  updated(e) {
    this.$nextTick(() => {
      this.init(true)
    })
  },
  created() {
    this.collapse = this.getCollapse()
    this.onClick(this.open, 'init')
  },
  mounted() {
    if (!this.collapse) return
    if (this.name !== '') {
      this.nameSync = this.name
    } else {
      this.nameSync = this.collapse.childrens.length + ''
    }
    if (this.collapse.names.indexOf(this.nameSync) === -1) {
      this.collapse.names.push(this.nameSync)
    } else {
      console.warn(`name 值 ${this.nameSync} 重复`)
    }
    if (this.collapse.childrens.indexOf(this) === -1) {
      this.collapse.childrens.push(this)
    }
    this.init()
  },
  methods: {
    init(type) {
      // #ifndef APP-NVUE
      this.getCollapseHeight(type)
      // #endif
    },
    onClick(isOpen, type) {
      if (this.disabled) return
      this.isOpen = isOpen
      if (this.isOpen && this.collapse) {
        this.collapse.setAccordion(this)
      }
      if (type !== 'init') {
        this.collapse.onChange(isOpen, this)
      }
    },
    getCollapseHeight(type, index = 0) {
      const views = uni.createSelectorQuery().in(this)
      views
        .select(`#${this.elId}`)
        .fields(
          {
            size: true,
          },
          (data) => {
            // TODO 百度中可能获取不到节点信息 ，需要循环获取
            if (index >= 10) return
            if (!data) {
              index++
              this.getCollapseHeight(false, index)
              return
            }
            // #ifndef APP-NVUE
            this.height = data.height
            // #endif
            this.isheight = true
            if (type) return
            this.onClick(this.isOpen, 'init')
          }
        )
        .exec()
    },
    /**
     * 获取父元素实例
     */
    getCollapse(name = 'benben-flex-collapse') {
      let parent = this.$parent
      let parentName = parent.$options.name
      while (parentName !== name) {
        parent = parent.$parent
        if (!parent) return false
        parentName = parent.$options.name
      }
      return parent
    },
  },
}
</script>

<style lang="scss">
.benben-collapse-item {
}
.benben-collapse-item__wrap {
  overflow: hidden;
}
.is--transition {
  // transition: all 0.3s;
  transition-property: height, border-bottom-width;
  transition-duration: 0.3s;
  /* #ifndef APP-NVUE */
  will-change: height;
  /* #endif */
}
</style>
