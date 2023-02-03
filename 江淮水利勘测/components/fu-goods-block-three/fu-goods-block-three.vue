<template>
  <view class="wrapper" @tap.stop="navToDetail(info)">
    <view class="wrap-box">
      <view class="square-wrap">
        <view class="square-box">
          <view class="image">
          <fu-image :src="info.thumb" mode="aspectFill" lazy-load></fu-image>
          </view>
        </view>
      </view>
      <view class="content">
        <view class="text-df text-333 text-cut-2" >
          <block v-if='info.goods_label'>
            <text  class="item-goods-label" v-for='(item,index) in info.goods_label' :key="index">
              {{ item }}
            </text>
          </block>
          <text style="vertical-align:middle;">{{ info.name }}</text>
        </view>
        <view class="margin-top-xs">
          <text class="text-theme">
            <text class="text-price text-sm"></text>
            <text class="text-lg">{{ info.shop_price }}</text>
          </text>
          <text class="text-sm text-bf text-through margin-left-xs">
            <text class="text-price"></text>
            <text>{{info.market_price}}</text>
          </text>
        </view>
        <view class="text-sm text-999 margin-top-xs">
          <text>{{i18n['月销']}}{{ info.sales_sum }}</text>
        </view>
        <view class="margin-top-xs" @click.stop="toStore(info.shop_info)">
          <text class="text-sm text-999">{{info.shop_info.store_name}}</text>
          <text class="margin-left-sm text-333">
            <text class="text-sm">{{i18n['进店']}}</text>
            <text class="cuIcon-right text-xs"></text>
          </text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
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
      toStore(item) {
        this.$urouter.navigateTo({
          url: '/pages/goods/shop/shop/index',
          params: {
            partner_id: item.u_id
          }
        });
      },
    },
  }
</script>

<style lang="scss" scoped>
  .wrapper {
    overflow: hidden;
    margin-bottom: 20rpx;
    padding: 0 10rpx;
    .wrap-box {
      background-color: #FFFFFF;
      border-radius: 24rpx;
      overflow: hidden;
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
          .image {
            width: 100%;
            height: 100%;
            border-radius: 16rpx 16rpx 0 0;
            overflow: hidden;
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
    background: rgba(255,100,100,0.2);
    padding: 2rpx 10rpx;
    color: #FF6464;
    font-size: 24rpx;
    border-radius: 6rpx;
    margin-right: 9rpx;
    display: inline-block;
    vertical-align: middle;
  }
  .item-activity-label {
    padding: 2rpx 5rpx;
    /* margin: 5rpx; */
    font-size: 24rpx;
    border-radius: 6rpx;
    border: 1px solid;
    margin: 0rpx 1px 0px;
    display: inline-block;
    transform:scale(.8);
    vertical-align: middle;
  }
</style>
