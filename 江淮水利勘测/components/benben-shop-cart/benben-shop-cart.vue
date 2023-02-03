<template>
  <view class="cart-page">
    <!--  数据加载loadding  -->
    <template v-if="!isLogin || cartListArr.length == 0">
      <view class="nologin flex flex-direction justify-center align-center padding-tb text-999 fs28 bg-white" style="padding-bottom: 64rpx">
        <view>
          <image class="width-440 height-220" src="./static/cart.png" mode="widthFix"></image>
        </view>
        <view class="margin-top-xs text-sm text-999">您的购物车还没有商品，快去挑选吧</view>
        <view class="nologin-btn text-df margin-top text-center" @tap.stop="handleSubmit('navToLogin')" v-if="!isLogin">去登录</view>
        <view class="nologin-btn text-df margin-top text-center" @tap.stop="handleSubmit('navToHome')" v-if="isLogin && cartListArr.length == 0">
          去挑选好货
        </view>
      </view>
    </template>
    <template v-if="isLogin && cartListArr.length != 0">
      <view class="page-list">
        <block v-for="(item, index) in cartListArr" :key="index">
          <view class="bg-white flex align-center padding">
            <view class="margin-right-sm" @tap="check(item, index)">
              <template v-if="isEditor">
                <image class="fu-block-36" src="./static/checked.png" mode="" v-if="item.delChecked"></image>
                <image class="fu-block-36" src="./static/unchecked.png" mode="" v-else></image>
              </template>
              <template v-if="!isEditor">
                <image class="fu-block-36" src="./static/checked.png" mode="" v-if="item.checked"></image>
                <image class="fu-block-36" src="./static/unchecked.png" mode="" v-else></image>
              </template>
            </view>
            <view class="goods-info flex align-center flex-sub" style="min-width: 1px">
              <view class="wrap-image fu-block-180 radius margin-right-sm" @tap="toDetail(item, index)">
                <view class="box-kong text-df text-white" v-if="item.is_valid == 1">
                  <view class="box-kong-item">
                    <image src="./static/sellOut.png" mode="widthFix" />
                  </view>
                </view>
                <view class="box-kong text-df text-white" v-if="item.is_valid == 2">
                  <view class="box-kong-item">
                    <image src="./static/shelf.png" mode="widthFix" />
                  </view>
                </view>
                <image class="goods_thumb" :src="item.goods_thumb" mode="aspectFill"></image>
              </view>
              <view class="goods-desc flex-sub" style="min-width: 1px">
                <view>
                  <view class="text-333 text-cut fu-fs28">{{ item.goods_name }}</view>
                  <view class="text-sm text-999 sku_name" v-if="item.sku_name" @tap.stop="openPopup(item)">
                    <view class="text-cut width-250">
                      <text>{{ item.sku_name }}</text>
                    </view>
                    <view style="flex-shrink: 0">
                      <text style="margin-right: 16rpx">选规格</text>
                      <text class="cuIcon-unfold lg text-gray"></text>
                    </view>
                  </view>
                </view>
                <view class="desc-number flex justify-between align-center">
                  <view class="text-lg text-prices">
                    <text class="text-price"></text>
                    <text>{{ item.shop_price }}</text>
                  </view>
                  <view class="number">
                    <uni-number-box
                      :min="1"
                      :disabled="item.is_valid == 2"
                      :max="Number(item.stock)"
                      :value="item.num"
                      @change="numberChange($event, index)"
                    ></uni-number-box>
                  </view>
                </view>
              </view>
            </view>
          </view>
        </block>
      </view>
      <view class="action-bar cu-bar bg-white flex justify-between">
        <view class="flex flex-sub align-center padding-lr justify-between" style="max-width: calc(100% - 230rpx)">
          <view class="flex justify-between align-center" @tap="checkAll">
            <template v-if="isEditor">
              <image class="fu-block-36" src="./static/checked.png" mode="" v-if="delAllChecked"></image>
              <image class="fu-block-36" src="./static/unchecked.png" mode="" v-else></image>
            </template>
            <template v-if="!isEditor">
              <image class="fu-block-36" src="./static/checked.png" mode="" v-if="allChecked"></image>
              <image class="fu-block-36" src="./static/unchecked.png" mode="" v-else></image>
            </template>
            <text class="margin-left-sm text-df text-333">全选</text>
          </view>
          <view class="margin-left-sm text-df text-666" v-if="!isEditor">
            <view>
              合计:
              <text class="text-price text-prices text-lg">{{ totalPrice }}</text>
            </view>
          </view>
        </view>
        <button v-if="!isEditor" class="cu-btn btn-settlement bg-theme text-white lg" @click="createOrder">去结算({{ totalNumber }})</button>
        <button v-if="isEditor" class="cu-btn bg-theme text-white margin-right-sm" @click="delCart(2)">移入收藏</button>
        <button v-if="isEditor" class="cu-btn btn-gray margin-right-sm" @click="delCart(1)">删除</button>
      </view>
    </template>
  </view>
</template>

<script>
import { LOGIN_PAGE_URL } from '@/common/config.js'
export default {
  name: 'benben-shop-cart',
  props: {
    // 购物车列表
    cartList: {
      type: [Array, Object],
      default: () => [],
    },
    //是否编辑状态 // 管理 or 完成
    isEditor: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      setTimeoutFn: null,
      cartListArr: [], // 购物车列表
    }
  },
  computed: {
    isLogin() {
      return this.$store.state.token == '' ? false : true
    },
    // 选择的商品总价
    totalPrice() {
      let list = this.cartListArr
      let total = 0
      list.forEach((item) => {
        if (item.checked == true) {
          let _price
          _price = item.shop_price
          total += Number(_price) * Number(item.num)
        }
      })
      return Number(total.toFixed(2))
    },
    // 选择的商品数量
    totalNumber() {
      let list = this.cartListArr
      let total = 0
      list.forEach((item) => {
        if (item.checked == true) {
          total += Number(item.num)
        }
      })
      return total
    },
    // 购物车内的商品数量
    allNumber() {
      let list = this.cartListArr
      let total = 0
      list.forEach((item) => {
        total += Number(item.num)
      })
      return total
    },
    // 管理模式全选状态
    delAllChecked() {
      let list = this.cartListArr
      let bool = true
      list.forEach((item) => {
        // if(item.stock == 0) return ;
        if (item.delChecked == false) {
          bool = false
        }
      })
      return bool
    },
    // 正常模式全选状态
    allChecked() {
      let list = this.cartListArr
      let bool = true
      list.forEach((item) => {
        if (item.stock == 0) return
        if (item.is_valid != 0) return
        if (item.checked == false) {
          bool = false
        }
      })
      return bool
    },
  },
  watch: {
    cartList: {
      handler(value) {
        let list = []
        let checkedArr = this.cartListArr.filter((item) => item.checked)
        let delCheckedArr = this.cartListArr.filter((item) => item.delChecked)
        list = value.map((item) => {
          let obj = {
            ...item,
            checked: false,
            delChecked: false,
          }
          let delChecked = delCheckedArr.find((val) => val.aid == item.aid)
          let checked = checkedArr.find((val) => val.aid == item.aid)
          if (delChecked) {
            obj.delChecked = true
          }
          if (checked && obj) {
            obj.checked = true
          }
          return obj
        })
        this.cartListArr = list
      },
      deep: true,
      immediate: true,
    },
    isEditor: {
      handler(value) {
        if (value) {
          this.cartListArr.forEach((item) => {
            item.delChecked = true
          })
        }
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    // 打开选择规格弹窗
    openPopup(item) {
      this.$emit('update:cart-id', item.aid)
      this.$emit('update:sku-id', item.sku_id)
      this.$emit('update:cart-num', item.num)
      this.$emit('update:goods-id', item.goods_id)
      this.$emit('changeSku')
    },
    toDetail(item) {
      if (item.is_valid == 2) return
      this.$emit('update:goods-id', item.goods_id)
      this.$emit('toGoods')
    },
    // 点击去登录按钮或去首页按钮
    handleSubmit(type) {
      this.$emit(type)
    },
    // 商品选中状态处理
    check(item, i) {
      if (this.isEditor) {
        this.$set(item, 'delChecked', !item.delChecked)
      } else {
        if (item.is_valid == 2) return this.$message.info('该商品已下架')
        if (item.is_valid == 1) return this.$message.info('该商品已售完,正在采购中')
        if (item.stock == 0) return this.$message.info('该商品已售完,正在采购中')
        this.$set(item, 'checked', !item.checked)
      }
    },
    //全选|取消全选
    checkAll() {
      if (this.isEditor) {
        const bool = !this.delAllChecked
        this.cartListArr.forEach((item) => {
          item.delChecked = bool
        })
      } else {
        const bool = !this.allChecked
        this.cartListArr.forEach((item) => {
          if (item.is_valid == 0 && item.stock != 0) {
            item.checked = bool
          }
        })
      }
    },
    //数量改变
    numberChange(e, index) {
      // 父级组件此处会走两遍,原因是e第一遍是String类型, 第二遍是Number类型, uni-number-box组件内部watch判定两遍的值不相同,因此进行了两次更新
      this.setTimeoutFn && clearTimeout(this.setTimeoutFn)
      this.setTimeoutFn = setTimeout(() => {
        let list = this.cartListArr
        if (e != list[index].num) {
          if (list[index].stock < e && list[index].is_valid == 1) {
            e = list[index].stock
            this.$set(list[index], 'is_valid', 0)
          }
          this.$set(list[index], 'num', e)
          this.$emit('update:cart-id', list[index].aid)
          this.$emit('update:sku-id', list[index].sku_id)
          this.$emit('update:cart-num', e)
          this.$emit('numberChange')
        }
      }, 500)
    },

    /**
     * @method 移入收藏卡
     * @param {Number} type 1: 删除, 2: 移入收藏
     */
    delCart(type) {
      const list = this.cartListArr
      let ids = []
      list.forEach((item) => {
        if (item.delChecked) {
          ids.push(item.aid)
        }
      })
      if (ids.length == 0) return this.$message.info(type == 1 ? '请选择要删除的商品' : '请选择要移动的商品')
      this.$util.showModal({
        title: '提示',
        content: type == 1 ? '确认删除吗?' : '确认移入收藏夹吗?',
        success: (res) => {
          if (res.confirm) {
            if (type == 1) {
              this.$emit('update:cart-ids', ids.join(','))
              this.$emit('delCart')
            } else {
              this.$emit('update:cart-ids', ids.join(','))
              this.$emit('transCartGoods')
            }
          }
        },
      })
    },
    // 去结算
    createOrder() {
      const list = this.cartListArr
      let ids = []
      list.forEach((item) => {
        if (item.checked) {
          ids.push(item.aid)
        }
      })
      const cart_ids = ids.join(',')
      if (cart_ids == '') return this.$message.info('请选择商品')
      this.$emit('update:cart-ids', ids.join(','))
      this.$emit('createOrder')
    },
  },
}
</script>

<style lang="scss" scoped>
.goods_thumb {
  width: 180rpx;
  height: 180rpx;
  border-radius: 16rpx;
}

.cart-page {
  .nologin {
    .nologin-btn {
      width: 280rpx;
      height: 64rpx;
      line-height: 64rpx;
      background: $bgtheme;
      border-radius: 36rpx;
      font-size: 28rpx;
      font-family: PingFang SC;
      font-weight: 500;
      color: #ffffff;
    }
  }

  .tool-box {
    position: sticky;
    z-index: 999;
    background: #f8f8f8;

    .edit-btn {
      width: 144rpx;
      height: 56rpx;
      line-height: 56rpx;
      border-radius: 56rpx;
      border: 2rpx solid rgba(191, 191, 191, 1);
      background: #fff;

      &.btn-gray {
        width: 200rpx;
        height: 72rpx;
        line-height: 72rpx;
        font-size: 28px;
        font-family: PingFang SC;
        font-weight: 500;
        color: #333333;
        background: #f6f6f6;
        border-radius: 44rpx;
      }
    }
  }
  .action-bar {
    position: fixed;
    bottom: var(--window-bottom);
    width: 100%;
    z-index: 99;
  }
}
.fu-block-36 {
  width: 36rpx;
  height: 36rpx;
}

.fu-block-180 {
  width: 180rpx;
  height: 180rpx;
}

.fu-fs28 {
  font-size: 28rpx;
}

.fu-fs32 {
  font-size: 32rpx;
}

.page-list {
  .goods-info {
    .goods-desc {
      width: 406rpx;
      // flex: 1;
      min-width: 1px;
      min-height: 180rpx;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .sku_name {
        display: flex;
        justify-content: space-between;
        background-color: #f8f8f8;
        height: 48rpx;
        line-height: 48rpx;
        padding: 0 16rpx;
        box-sizing: border-box;
        margin: 8rpx 0;
        border-radius: 8rpx;
      }
    }

    .wrap-image {
      position: relative;

      .box-kong {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: rgba(0, 0, 0, 0.4);
        z-index: 98;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        width: 148rpx;
        height: 148rpx;

        .box-kong-item {
          width: 96rpx;
          height: 96rpx;
        }
      }
    }
  }
}
</style>
