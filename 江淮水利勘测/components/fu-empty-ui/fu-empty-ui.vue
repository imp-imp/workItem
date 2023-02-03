<template>
  <view class="public-page-empty">
    <image class="image" :src="emptyImages[emptyImage]['image']"></image>
    <view class="txt">{{pagingListNoListDataText}}</view>
  </view>
</template>

<script>
  /**
   * @author 刘欢
   * @description 空布局组件
   * @property {String} pagingListNoListDataText 提示语 默认: 暂无数据
   * @param {String} pagingListNoListDataText 提示语 默认: 暂无数据
   * @param {String} emptyImage 空布局的类型,有两种样式: order和collection 默认: order
   * @example <fu-empty-ui pagingListNoListDataText="" emptyImage=""></fu-empty-ui>
   * */
  export default {
    name: 'fu-empty-ui',
    props: {
      pagingListNoListDataText: {
        type: String,
        default(){
          return global.i18n['暂无数据']
        }
      },
      emptyImage: {
        type: String,
        default: 'order'
      }
    },
    data() {
      return {
        emptyImages: Object.freeze({
          cart: {  // 购物车
            image: '/static/empty/cart.png',
          },
          collection: {  // 收藏
            image: '/static/empty/collect.png',
          },
          order: {  // 订单
            image: '/static/empty/order.png',
          },
          message: {  // 消息
            image: '/static/empty/message.png',
          },
          coupons: {  // 优惠券
            image: '/static/empty/coupon.png',
          },
        })
      };
    }
  }
</script>

<style lang="scss" scoped>
  .public-page-empty {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 120upx 0 0 0;
    .image{
      width: 300rpx;
      height: 300rpx;
    }

    .txt {
      font-size: 28upx;
      color: $uni-text-color;
      text-align: center;
      line-height: 100upx;
      color: #999;
    }
  }
</style>
