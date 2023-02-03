<template>
  <view
    v-if="
      query.handleSalta &&
      query.handleSalta[0] &&
      query.handleSalta[0] != 'niente'
    "
    @tap.stop="handleEven"
    :typeKey="index"
    :class="{
      'component-element': true,
      'text-cut': query.info.isOne.value,
      'text-cut-2': !query.info.isOne.value,
      'bulletin-text': true,
    }"
    :style="{
      width: query.info.width.value ? query.info.width.value + 'rpx' : 'auto',
      color: query.info.color.value,
      fontSize: query.info.size.value + 'rpx',
      fontWeight: query.info.bold.value,
    }"
  >
    {{ query.info.textVal.value ? query.info.textVal.value : data }}
  </view>
  <view
    v-else
    :typeKey="index"
    :class="{
      'component-element': true,
      'text-cut': query.info.isOne.value,
      'text-cut-2': !query.info.isOne.value,
      'bulletin-text': true,
    }"
    :style="{
      width: query.info.width.value ? query.info.width.value + 'rpx' : 'auto',
      color: query.info.color.value,
      fontSize: query.info.size.value + 'rpx',
      fontWeight: query.info.bold.value,
    }"
  >
    <!-- <view class="typeList-edit">
      <text @tap="chooseCurComponent(i)" class="fu-iconfont">&#xe624;</text>
    </view> -->
    {{ query.info.textVal.value ? query.info.textVal.value : data }}
  </view>
</template>
<script>
export default {
  name: "fu-text",
  props: {
    query: {
      type: Object,
    },
    index: {
      type: Number,
      default: 0,
    },
    data: {
      type: [String, Number],
      default: "",
    },
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    chooseCurComponent(item, i) {},
    handleEven() {
      this.$util.handleAllFn(...this.query.handleSalta);
    },
  },
};
</script>

<style lang="scss" scoped>
.text-cut {
  word-break: break-all;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}
.text-cut-2 {
  word-break: break-all;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
</style>
