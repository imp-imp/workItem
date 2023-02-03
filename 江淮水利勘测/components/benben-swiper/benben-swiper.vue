<template>
  <view class="uni-swiper__warp">
    <slot name="swiper"></slot>
    <view :class="classDot" v-if="mode == 'number'">
      <slot name="number" v-bind:current="current + 1" v-bind:swiper-length="swiperLength"></slot>
    </view>
    <view :class="classDot" v-else-if="mode != 'none'">
      <slot v-for="(item, index) in swiperLength" v-bind:isSelected="current == index" v-bind:index="index" v-bind:show="mode == 'indexes'"></slot>
    </view>
  </view>
</template>

<script>
/**
 * SwiperDod 轮播图指示点
 * @description 自定义轮播图指示点
 * @property {Number} current 当前指示点索引，必须是通过 `swiper` 的 `change` 事件获取到的 `e.detail.current`
 * @property {String} mode = [round|indexes] 指示点的类型
 * 	@value round 圆形指示点
 * 	@value indexes 索引指示点
 * @property {Number} swiperLength 轮播图的数组长度决定指示点个数
 * @event {Function} clickItem 组件触发点击事件时触发，e={currentIndex}
 */

export default {
  name: 'benben-swiper',
  emits: ['clickItem'],
  props: {
    swiperLength: {
      type: Number,
      default() {
        return 1
      },
    },
    current: {
      type: Number,
      default: 0,
    },
    // 类型 ：indexes round
    mode: {
      type: String,
      default: 'round',
    },
    classDot: {
      type: String,
      default: 'dot-box',
    },
  },
  data() {
    return {}
  },
  watch: {},
  created() {},
  methods: {
    clickItem(e) {
      this.$emit('update:current', e)
    }
  },
}
</script>

<style lang="scss" scoped>
.uni-swiper__warp {
  position: relative;
}
.dot-box {
  position: absolute;
  bottom: 10px;
  left: 0px;
  right: 0px;
}
</style>
