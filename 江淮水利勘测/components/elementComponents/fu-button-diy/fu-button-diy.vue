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
              label: "??????",
              value: "??????",
            },
            color: {
              type: "color",
              label: "????????????",
              value: "#ffffff",
            },
            backgroundColor: {
              type: "color",
              label: "????????????",
              value: "#e54d42",
            },
            round: {
              type: "switch",
              label: "????????????",
              value: false,
            },
            size: {
              type: "select",
              label: "????????????",
              value: "",
              options: [
                {
                  label: "???",
                  value: "sm",
                },
                {
                  label: "???",
                  value: "",
                },
                {
                  label: "???",
                  value: "lg",
                },
              ],
            },
            shadow: {
              type: "switch",
              label: "??????????????????",
              value: true,
            },
            border: {
              type: "switch",
              label: "????????????",
              value: false,
            },
            marginTop: { type: "number", label: "??????????????????", value: "" },
            marginRight: { type: "number", label: "??????????????????", value: "" },
            marginBottom: { type: "number", label: "??????????????????", value: "" },
            marginLeft: { type: "number", label: "??????????????????", value: "" },
            width: { type: "number", label: "????????????", value: "" },
            height: { type: "number", label: "????????????", value: "" },
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
