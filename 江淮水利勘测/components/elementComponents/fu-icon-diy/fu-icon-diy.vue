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
      'fu-iconfont': iconType == 0,
      'fu-iconfont2': iconType == 1,
    }"
    :style="{
      color: query.info.color.value,
      fontSize: query.info.size.value + 'rpx',
      fontWeight: query.info.bold.value,
    }"
    >{{ query.info.iconVal.value ? query.info.iconVal.value : data }}
  </view>
  <view
    v-else
    :typeKey="index"
    :class="{
      'component-element': true,
      'fu-iconfont': iconType == 0,
      'fu-iconfont2': iconType == 1,
    }"
    :style="{
      color: query.info.color.value,
      fontSize: query.info.size.value + 'rpx',
      fontWeight: query.info.bold.value,
    }"
    >{{ query.info.iconVal.value ? query.info.iconVal.value : data }}
  </view>
</template>
<script>
export default {
  name: "fu-icon-diy",
  props: {
    data: {
      type: [String, Number],
      default: "",
    },
    query: {
      type: Object,
    },
    index: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {};
  },
  computed: {
    iconType() {
      return this.query.info.iconVal.iconType || "0";
    },
  },
  created() {
    console.log(this.query);
  },
  methods: {
    handleEven() {
      this.$util.handleAllFn(...this.query.handleSalta);
    },
  },
};
</script>

<style lang="scss" scoped>
.fu-iconfont {
  display: inline;
  line-height: 1.5;
}
</style>
