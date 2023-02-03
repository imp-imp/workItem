<template>
  <view class="wrapper" @tap.stop="navToDetail(info)">
    <view class="wrap-box">
      <view class="square-wrap">
        <view class="square-box">
          <!-- <image :src="info.thumb" mode="aspectFill" lazy-load></image> -->
          <fu-image :src="info.thumb" mode="aspectFill"></fu-image>
        </view>
      </view>
      <view class="content">
        <view class="text-df text-333 text-cut-2" >
          <block v-if='info.goods_label'>
            <text  class="item-goods-label" v-for='(item,index) in info.goods_label' :key="index">
              {{ item }}
            </text>
          </block>
          {{ info.name }}
        </view>
        <!-- <view class="fu-cred margin-top-sm flex align-center marginTop-16">
          <view  class="item-activity-label" v-for='(item,index) in info.goods_label_activity' :key="index">
            {{ item }}
          </view>
        </view> -->
        <view class=" margin-top-sm flex align-center marginTop-10">
          <view class="text-sm text-999 text-cut sales-number">{{i18n['月销']}}{{ info.sales_sum | formatNumber(i18n['万']) }}{{i18n['件']}}</view>
        </view>
          
        <view class="flex  align-center text-sm marginTop-16">
          <text class="text-price text-lg text-bold text-theme">{{ info | filterGoodsPrice }}</text>
          <text class="text-price text-through margin-left-16 text-999">{{ info.market_price }}</text>
        </view>
      </view>
    </view>
  </view>
</template>
<script>
import fuImage from "../fu-image/fu-image";
/**
 * @author 刘畅
 * @description 商品双列布局
 * @param {Object} info - 商品信息
 */
  export default {
    props: {
      info: {
        type: Object
      },
    },
    components:{
      fuImage
    },
    methods: {
      /**
       * @event
       * @description 跳转到商品详情
       * @param {Object} item - 商品信息
       */
      navToDetail(item) {
        this.$urouter.navigateTo({
          url: '/pages/goods/goodsdetail/goods-detail/index',
          params: {
            sku_id: item.sku_id || 0,
            goods_id: item.id,
          }
        })
      },
    },
  }
</script>

<style lang="scss" scoped>
  .wrapper {
    overflow: hidden;
    margin-bottom: 24rpx;
    padding: 0 10rpx;
    .wrap-box {
      background-color: #FFFFFF;
      border-radius: 24rpx;

      .square-wrap {
        width: 100%;
        height: 0;
        padding-bottom: 100%;
        box-sizing: border-box;
        position: relative;

        .square-box {
          position: absolute;
          left: 0;
          top: 0;
          right: 0;
          bottom: 0;
          border-radius: 16rpx 16rpx 0 0;
          overflow: hidden;
          image {
            width: 100%;
            height: 100%;
            border-radius: 16rpx 16rpx 0 0;
          }
        }

      }
      .image{
        width: 100%;
        border-radius: 16rpx 16rpx 0 0;
      }
    }

    .content {
      padding: 20rpx;
    }
  }

  .text-cut-2 {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }

  .text-through {
    text-decoration: line-through;
  }

  .text-333 {
    color: #333333;
  }

  .text-999 {
    color: #999999;
  }

  .name-title {
    position: relative;
  }

  .name-title-label {
    float: left;
  }

  .item-goods-label {
    padding:4rpx 10rpx;
  margin-right:  10rpx;
  height: 32rpx;
  background: rgba(255, 239, 239, 1);
  border-radius: 4px;
  color: #ff6464;
  font-size: 24rpx;
  text-align: center;
  width: 84rpx;
  }
  .item-activity-label {
    padding: 0 8rpx;
    height: 32rpx;
    line-height: 30rpx;
    border: 1px solid #FA2033;
    opacity: 1;
    border-radius: 4rpx;
    font-size: 20rpx;
    font-family: PingFang SC;
    font-weight: 400;
    color: #FA2033;
    margin-right: 16rpx;
    &:nth-of-type(1){
      border: 1px solid #0A7CE6;
      color: #0A7CE6;
    }
  }
  .marginTop-16{
    margin-top: 16rpx;
  }
  .marginTop-10{
    margin-top: 10rpx;
  }
  .margin-left-16{
    margin-left: 16rpx;
  }
</style>
