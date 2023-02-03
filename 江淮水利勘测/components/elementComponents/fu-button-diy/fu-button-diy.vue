<template>
  <button
    v-if="
      query.handleSalta &&
      query.handleSalta[0] &&
      query.handleSalta[0] != 'niente'
    "
    @tap.stop="handleEven"
    :typeKey="index"
    class="cu-btn"
    :class="[
      query.info.border.value ? 'line-' + color : 'bg-' + color,
      query.info.round.value ? 'round' : '',
      query.info.size.value,
      query.info.shadow.value ? 'shadow' : '',
    ]"
    :style="{
      color: query.info.color.value,
      backgroundColor: query.info.border.value
        ? 'transparent'
        : query.info.backgroundColor.value,
      width: query.info.width.value + 'rpx',
      height: query.info.height.value + 'rpx',
      margin: `${query.info.marginTop ? query.info.marginTop.value : 0}rpx ${
        query.info.marginRight ? query.info.marginRight.value : 0
      }rpx ${query.info.marginBottom ? query.info.marginBottom.value : 0}rpx ${
        query.info.marginLeft ? query.info.marginLeft.value : 0
      }rpx `,
    }"
  >
    {{ query.info.textVal.value }}
  </button>
  <button
    v-else
    class="cu-btn"
    :class="[
      query.info.border.value ? 'line-' + color : 'bg-' + color,
      query.info.round.value ? 'round' : '',
      query.info.size.value,
      query.info.shadow.value ? 'shadow' : '',
    ]"
    :style="{
      color: query.info.color.value,
      backgroundColor: query.info.border.value
        ? 'transparent'
        : query.info.backgroundColor.value,
      width: query.info.width.value + 'rpx',
      height: query.info.height.value + 'rpx',
      margin: `${query.info.marginTop ? query.info.marginTop.value : 0}rpx ${
        query.info.marginRight ? query.info.marginRight.value : 0
      }rpx ${query.info.marginBottom ? query.info.marginBottom.value : 0}rpx ${
        query.info.marginLeft ? query.info.marginLeft.value : 0
      }rpx `,
    }"
  >
    {{ query.info.textVal.value }}
  </button>
</template>

<script>
export default {
  name: "fu-button-diy",
  props: {
    query: {
      type: Object,
      default() {
        return {
          type: "fu-button-diy",
          info: {
            textVal: {
              type: "text",
              label: "内容",
              value: "按钮",
            },
            color: {
              type: "color",
              label: "文字颜色",
              value: "#ffffff",
            },
            backgroundColor: {
              type: "color",
              label: "背景颜色",
              value: "#e54d42",
            },
            round: {
              type: "switch",
              label: "是否圆角",
              value: false,
            },
            size: {
              type: "select",
              label: "选择尺寸",
              value: "",
              options: [
                {
                  label: "小",
                  value: "sm",
                },
                {
                  label: "中",
                  value: "",
                },
                {
                  label: "大",
                  value: "lg",
                },
              ],
            },
            shadow: {
              type: "switch",
              label: "是否添加阴影",
              value: true,
            },
            border: {
              type: "switch",
              label: "是否镂空",
              value: false,
            },
            marginTop: { type: "number", label: "按钮上外边距", value: "" },
            marginRight: { type: "number", label: "按钮右外边距", value: "" },
            marginBottom: { type: "number", label: "按钮下外边距", value: "" },
            marginLeft: { type: "number", label: "按钮左外边距", value: "" },
            width: { type: "number", label: "按钮宽度", value: "" },
            height: { type: "number", label: "按钮高度", value: "" },
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
    return {
      color: "red",
    };
  },
  created() {
    console.log(JSON.stringify(this.query));
  },
  methods: {
    handleEven() {
      this.$util.handleAllFn(...this.query.handleSalta);
    },
  },
};
</script>

<style lang="scss"></style>
