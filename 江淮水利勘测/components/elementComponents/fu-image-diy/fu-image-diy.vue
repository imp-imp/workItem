<template>
  <image
    v-if="
      query.handleSalta &&
      query.handleSalta[0] &&
      query.handleSalta[0] != 'niente'
    "
    @tap.stop="handleEven"
    class="component-element flex align-center justify-center"
    :typeKey="index"
    :src="query.info.url.value ? query.info.url.value : data"
    mode=""
    :style="{
      width: query.info.width.value + 'rpx',
      height: query.info.height.value + 'rpx',
      borderRadius: query.info.radius.value + 'rpx',
      margin: `${query.info.marginTop ? query.info.marginTop.value : 0}rpx ${
        query.info.marginRight ? query.info.marginRight.value : 0
      }rpx ${query.info.marginBottom ? query.info.marginBottom.value : 0}rpx ${
        query.info.marginLeft ? query.info.marginLeft.value : 0
      }rpx `,
    }"
  ></image>
  <image
    v-else
    class="component-element flex align-center justify-center"
    :typeKey="index"
    :src="query.info.url.value ? query.info.url.value : data"
    mode=""
    :style="{
      width: query.info.width.value + 'rpx',
      height: query.info.height.value + 'rpx',
      borderRadius: query.info.radius.value + 'rpx',
      margin: `${query.info.marginTop ? query.info.marginTop.value : 0}rpx ${
        query.info.marginRight ? query.info.marginRight.value : 0
      }rpx ${query.info.marginBottom ? query.info.marginBottom.value : 0}rpx ${
        query.info.marginLeft ? query.info.marginLeft.value : 0
      }rpx `,
    }"
  ></image>
</template>

<script>
export default {
  name: "fu-image-diy",
  props: {
    query: {
      type: Object,
      default() {
        return {
          type: "fu-image-diy",
          info: {
            marginTop: { type: "number", label: "图片上外边距", value: "0" },
            marginRight: { type: "number", label: "图片右外边距", value: "0" },
            marginBottom: { type: "number", label: "图片下外边距", value: "0" },
            marginLeft: { type: "number", label: "图片左外边距", value: "0" },
            width: { type: "number", label: "图片宽度", value: "32" },
            height: { type: "number", label: "图片高度", value: "32" },
            radius: { type: "number", label: "图片圆角", value: "0" },
            url: {
              type: "text",
              label: "图片地址",
              value: "https://picsum.photos/200/200?image=42",
            },
          },
        };
      },
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
    handleEven() {
      this.$util.handleAllFn(...this.query.handleSalta);
    },
  },
};
</script>

<style lang="scss" scoped></style>
