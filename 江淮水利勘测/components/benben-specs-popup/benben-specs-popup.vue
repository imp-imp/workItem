<template>
  <uni-popup ref="spec" type="bottom" :maskClick="true" class="popup">
    <view class="wrap" @tap.stop.prevent @touchmove.stop.prevent>
      <view class="flex justify-between">
        <view class="margin-right">
          <image class="block-150 radius bg-gray" mode="aspectFill" :src="thumb" @click="preview(thumb)"></image>
        </view>
        <view class="flex-sub flex flex-direction justify-end">
          <view class="text-theme text-bold">
            <text class="text-price">{{ price }}</text>
          </view>
          <view class="text-sm text-999 margin-top-xs">库存 {{ stock }}</view>
          <view style="height: 80rpx" class="text-df text-666 margin-top-xs text-cut-2">
            <text v-if="skuName">已选择: {{ skuName }}</text>
          </view>
        </view>
        <view class="close-box">
          <text class="cuIcon-close" @tap="close"></text>
        </view>
      </view>
      <scroll-view class="speclist-max-height" scroll-y="true" @touchmove.stop>
        <view class="margin-top" v-if="speclist.length > 0">
          <block v-for="(item, index) in speclist" :key="index">
            <view>
              <view class="text-sm text-333 text-bold padding-bottom-sm">{{ item.name }}</view>
              <view class="item">
                <template v-for="(item2, index2) in item.spec_value">
                  <template v-if="isDisable(index, item2.id)">
                    <view :key="index2" class="item-tag" :class="{ active: selectSkuId[index] == item2.id }" @tap="selectSpec(index, item2)">
                      {{ item2.item }}
                    </view>
                  </template>
                  <template v-else>
                    <view :key="index2" class="item-tag disable">
                      {{ item2.item }}
                    </view>
                  </template>
                </template>
              </view>
            </view>
          </block>
        </view>
      </scroll-view>
      <view class="margin-top">
        <view class="flex justify-between align-center padding-tb-sm">
          <view class="text-333 text-sm text-bold">数量</view>
          <uni-number-box v-if="limit" :value="number" :min="1" :max="Number(limit)" @change="setnumber" :step="1"></uni-number-box>
          <uni-number-box v-else :value="number" :min="1" :max="Number(stock)" @change="setnumber" :step="1"></uni-number-box>
        </view>
        <view class="text-right text-theme text-sm" v-if="limit > 0">此商品限购{{ limit }}件</view>
      </view>
      <view class="margin-top flex round overHidden">
        <view v-if="type == 'all' || type == 'cart'" class="flex-sub btn color1" @tap.stop="handleSubmit('addCart')">加入购物车</view>
        <view v-if="type == 'all' || type == 'buy'" class="flex-sub btn color2" @tap.stop="handleSubmit('buyNow')"><text>立即抢购</text></view>
        <view v-if="type == 'confirm'" class="flex-sub btn color2" @tap.stop="handleSubmit('confirm')">
          <text>确认</text>
        </view>
      </view>
    </view>
  </uni-popup>
</template>

<script>
export default {
  name: 'benben-specs-popup',
  props: {
    // spu规格列表
    speclist: {
      type: Array,
      default: () => [],
    },
    // sku列表
    skulist: {
      type: [Array, Object],
      default: () => [],
    },
    limit: {
      type: Number,
      default: 0,
    },
    //选中的规格
    skuId: {
      type: [String, Number],
      default: 0,
    },
    skuName: {
      type: [String, Number],
      default: 0,
    },
    price: {
      type: [String, Number],
      default: 0,
    },
    marketPrice: {
      type: [String, Number],
      default: 0,
    },
    memberPrice: {
      type: [String, Number],
      default: 0,
    },
    stock: {
      type: [String, Number],
      default: 0,
    },
    number: {
      type: [String, Number],
      default: 1,
    },
    thumb: {
      type: [String],
      default: '',
    },
  },
  data() {
    return {
      selectSkuId: [],
      selectSkuName: [],
      type: '',
      flag: false,
    }
  },
  computed: {
    skulistArr() {
      let skulistArr = []
      Object.values(this.skulist).map((item) => {
        skulistArr.push(item.key.split('_'))
      })
      return skulistArr
    },
  },
  watch: {
    skulist: {
      //监听规格改变
      handler(value) {
        this.init()
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    // 初始化
    init() {
      let skuGoods = Object.values(this.skulist).find((item) => item.sku_id == this.skuId)
      if (skuGoods) {
        this.selectSkuId = skuGoods.key.split('_')
      } else {
        this.selectSkuId = new Array(this.speclist.length)
      }
      this.selectSkuId.map((item, index) => {
        if (!item) return
        let is_upload_image = this.speclist[index].is_upload_image || '0'
        if (is_upload_image == '0') return
        let selectItem = this.speclist[index].spec_value.find((val) => val.id == item)
        this.$emit('update:thumb', selectItem.thumb)
      })
      this.getSelectSkuName()
      this.selectGoods()
    },
    getSelectSkuName() {
      let selectSkuName = new Array(this.speclist.length)
      this.selectSkuId.map((item, i) => {
        if (!item) return
        let specitem = this.speclist[i].spec_value.find((val) => val.id == item)
        selectSkuName[i] = (specitem && specitem.item) || ''
      })
      selectSkuName = selectSkuName.filter((item) => item)
      this.$emit('update:sku-name', selectSkuName.join(','))
    },
    // 判断是否禁用
    isDisable(index, id) {
      let isSelecArr = []
      this.selectSkuId.map((item, i) => {
        if (i !== index && item) {
          isSelecArr.push({
            index: i,
            id: item,
          })
        }
      })
      if (!isSelecArr.length) return true
      let skulistArr = this.skulistArr.filter((item) => {
        let isSelec = isSelecArr.every((selecitem) => {
          return item[selecitem.index] == selecitem.id
        })
        return isSelec && item[index] == id
      })
      return skulistArr.length
    },
    // 点击添加购物车
    handleSubmit(type) {
      let emptyIndex = this.selectSkuId.findIndex((item) => !item)
      //判断多规格商品是否选择了规格
      if (this.selectSkuId.length && emptyIndex != -1) return this.$message.info(`请选择${this.speclist[emptyIndex].name}`)
      if (this.stock <= 0) return this.$message.info(`暂无库存`)
      this.$emit(type)
    },
    // 数量改变
    setnumber(e) {
      this.$emit('update:number', e)
    },
    // 点击规格
    selectSpec(index, item) {
      let is_upload_image = this.speclist[index].is_upload_image || '0'
      if (this.selectSkuId[index] == item.id) {
        this.$set(this.selectSkuId, index, '')
      } else {
        this.$set(this.selectSkuId, index, item.id)
      }
      if (is_upload_image == '1') {
        this.$emit('update:thumb', item.thumb)
      }
      this.getSelectSkuName()
      this.selectGoods()
    },
    // 获取选中商品的信息
    selectGoods() {
      let selectSkuId = this.selectSkuId.filter((item) => item)
      if (selectSkuId.length !== Object.keys(this.speclist).length) return
      selectSkuId = selectSkuId.join('_')
      let skuGoods = Object.values(this.skulist).find((item) => item.key == selectSkuId)
      if (skuGoods) {
        this.$emit('update:market-price', skuGoods.market_price)
        this.$emit('update:member-price', skuGoods.member_price)
        this.$emit('update:price', skuGoods.shop_price)
        this.$emit('update:stock', skuGoods.stock)
        if (skuGoods.stock < this.number) {
          this.$emit('update:number', skuGoods.stock)
        }
        this.$emit('update:sku-id', skuGoods.sku_id)
        if (skuGoods.thumb) {
          this.$emit('update:thumb', skuGoods.thumb)
        }
      }
    },
    // 打开弹窗
    open(type) {
      this.type = type || 'all'
      this.init()
      this.$refs.spec.open()
    },
    // 关闭弹窗
    close() {
      this.$refs.spec.close()
    },
    // 规格预览图片
    preview(urls) {
      uni.previewImage({
        current: urls,
        urls: [urls],
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.wrap {
  padding-bottom: 0;
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);

  .close-box {
    width: 40rpx;
    height: 40rpx;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #999999;
    font-size: 28rpx;
    font-weight: bold;
  }

  .item {
    display: flex;
    flex-wrap: wrap;

    .item-tag {
      display: inline-block;
      font-size: 24rpx;
      color: #333;
      background-color: #f5f5f5;
      padding: 12rpx 24rpx;
      border-radius: 100rpx;
      margin-right: 20rpx;
      margin-bottom: 20rpx;
      border: 2rpx solid #f5f5f5;
    }

    .item-tag.active {
      background-color: #fff2ef;
      color: $theme;
      border-color: $theme;
    }

    .item-tag.disable {
      color: #cccccc !important;
    }
  }

  .btn {
    height: 80rpx;
    line-height: 80rpx;
    text-align: center;
    color: #ffffff;
  }
}

.block-150 {
  width: 150rpx;
  height: 150rpx;
  min-width: 150rpx;
  min-height: 150rpx;
}
.color1 {
  background-color: #feb14d;
}
.color2 {
  background: $bgtheme;
}

.overHidden {
  overflow: hidden;
}

.popup /deep/.uni-popup__wrapper-box {
  max-height: 100% !important;
}

.speclist-max-height {
  // #ifndef MP-WEIXIN
  max-height: 800rpx;
  // #endif
  // #ifdef MP-WEIXIN
  max-height: 650rpx;
  // #endif
}
</style>
