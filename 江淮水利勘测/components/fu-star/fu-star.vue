<template>
  <view class="uni-star">
    <block v-for="(item, index) in count" :key="index">
      <text
        class="fu-iconfont"
        :style="{ 'margin-right': gutter + 'rpx', 'font-size': size + 'rpx', color: num >= index + 1 ? color : voidColor }"
        @click="chooseStar(index+1)"
      >
      &#xe8bd;
      </text>
    </block>
  </view>
</template>

<script>
export default {
  props: {
    // 默认图标
    icon:{
      type:String,
      default:'&#xe8bd;'
    },
    // 是否可以点击
    readonly: {
      type: Boolean,
      default: true
    },
    //星星间距
    gutter: {
      type: Number,
      default: 8
    },
    //字体大小
    size: {
      type: Number,
      default: 40
    },
    //点亮星星颜色
    color: {
      type: String,
      default: '#FD8A07'
    },
    //未点亮星星颜色
    voidColor: {
      type: String,
      default: '#DCDCDC'
    },
    //总星数
    count: {
      type: Number,
      default: 5
    },
    // 默认点亮星星数
    value:{
      type: Number,
      default: 5
    }
  },
  data() {
    return {

    };
  },
  computed:{
    num(){
     return this.value;
    }
  },
  watch:{
    //监听总星数改变  默认满星
    count(newVal,oldVal){
      this.value = newVal;
    },
  },
  methods:{
    chooseStar(val){
      console.log(val)
      if(!this.readonly) return;
      // this.num = val;
      this.$emit('change',val);
    }
  }
};
</script>

<style scoped>
/* @import 'css/iconfont.css'; */
.uni-star {
  display: inline-block;
}
.fu-iconfont:last-child{
  margin-right: 0!important;
}
</style>
