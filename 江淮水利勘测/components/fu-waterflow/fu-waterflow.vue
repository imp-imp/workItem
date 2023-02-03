<template>
  <view class="wrap" v-if="lists.length > 0">
    <view v-if="showTitle" class="title text-lg text-bold text-center flex justify-center align-center">
      <image :src="require('./static/l.png')" mode="aspectFit"></image>
      {{ i18n['猜你喜欢'] }}
      <image :src="require('./static/r.png')" mode="aspectFit"></image>
    </view>
    <fu-waterfall v-model="lists">
      <template v-slot:left="{ leftList }">
        <block v-for="(item, index) in leftList" :key="item.id">
          <!-- <fu-goods-simple v-if="mode == 'simple'" :info="item"></fu-goods-simple> -->
          <fu-goods-block :info="item"></fu-goods-block>
        </block>
      </template>
      <template v-slot:right="{ rightList }">
        <block v-for="(item, index) in rightList" :key="item.id">
          <!-- <fu-goods-simple v-if="mode == 'simple'" :info="item"></fu-goods-simple> -->
          <fu-goods-block :info="item"></fu-goods-block>
        </block>
      </template>
    </fu-waterfall>
    <uni-load-more :status="status" v-if="lists.length > 5" :isCart="isCart"></uni-load-more>
  </view>
</template>

<script>
/**
 * @description
 * @param {String} type = index: 首页推荐 userCenter: 个人中心 cart: 购物车 goodsDetail: 商品详情 orderDetail: 订单详情
 * @property {Boolean} showTitle - 是否显示title
 * */
import FuGoodsBlock from '../fu-goods-block/fu-goods-block.vue';
import FuGoodsSimple from '../fu-goods-simple/fu-goods-simple.vue';
import FuWaterfall from '../fu-waterfall/fu-waterfall.vue';
export default {
  components: {
    FuWaterfall,
    FuGoodsBlock,
    FuGoodsSimple,
  },
  props: {
    num: {
      type: Number,
      default: 10
    },
    type: {
      type: String,
      default: 'index'
    },
    showTitle: {
      type: Boolean,
      default: true
    },
    custom: {
      type: Boolean,
      default: false,
    },
    mode: {
      type: String,
      default: 'primary', // simple: 简洁 // primary: 普通 //
    },
    // 是否来自购物车，购物车底部没有更多样式不同
    isCart:{
      type:Boolean,
      default:false
    }
  },
  data() {
    return {
      lists: [],
      status: 'more',
      page: 1,
      size: 10
    };
  },
  methods: {
    loadData() {
      if (this.status != 'more') return;
      this.status = 'loading';
      this.$api
        .post(global.apiUrls.postRecommentGoods, {
          businessSign: this.type,
          page: this.page,
          list_rows: this.num || this.size
        })
        .then(res => {
          console.log('推荐商品', res);
          if (res.data.code == 1) {
            let total = res.data.data.total;
            let list = res.data.data.goods_list;
            if (this.page == 1) this.lists = [];
            this.lists.push(...list);
            if (this.lists.length >= total) {
              this.status = 'noMore';
            } else {
              this.status = 'more';
              this.page++;
            }
            uni.stopPullDownRefresh();
          } else {
            this.status = 'more';
            uni.stopPullDownRefresh();
          }
        })
        .catch(err => {
          console.log('获取推荐列表 ERROR => ', err);
          this.status = 'more';
          uni.stopPullDownRefresh();
        });
    },
    refresh() {
      this.page = 1;
      this.status = 'more';
      this.loadData();
    }
  },
  mounted() {
    setTimeout(() => {
      this.$nextTick(() => {
        this.loadData();
      });
    }, 300);
  }
};
</script>

<style lang="scss" scoped>
.wrap {
  width: 100%;
  .title {
    height: 100rpx;
    line-height: 100rpx;
    image {
      width: 138rpx;
      height: 28rpx;
      margin: 0 24rpx;
    }
  }
  .content {
    padding: 0 20rpx;
  }
}
</style>
