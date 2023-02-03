<template>
  <view>
    <view class="flex flex-direction align-stretch benben-flex-layout footprint_flex_1">
      <view class="flex flex-direction align-stretch" v-for="(item, i) in goodsList" :key="i">
        <view class="footprint_fd1_0_c0" @click="handleItemAllSelect(item)">
          <template v-if="isEditor">
            <image v-if="isItemAllSelect(item)" mode="aspectFit" src="@/static/global/111.png"></image>
            <image v-else mode="aspectFit" src="@/static/global/110.png"></image>
          </template>
          <text>{{ item.time }}</text>
        </view>
        <view class="flex flex-wrap align-center">
          <view @click="handleItem(val)" class="flex flex-direction align-stretch footprint_fd1_0_c1_c0" v-for="(val, j) in item.list" :key="j">
            <template v-if="isEditor">
              <image v-if="val.isSelected" class="myCollection_fd2_0_c0_c0" mode="aspectFit" src="@/static/global/111.png"></image>
              <image v-else class="myCollection_fd2_0_c0_c0" mode="aspectFit" src="@/static/global/110.png"></image>
            </template>
            <image class="footprint_fd1_0_c1_c0_c0" mode="aspectFit" :src="val.collect_img"></image>
            <view style="padding-left: 12rpx" class="footprint_fd1_0_c1_c0_c1_c0">{{ val.collect_title }}</view>
            <view style="padding-left: 12rpx" class="footprint_fd1_0_c1_c0_c1_c1_c1">
              <text class="footprint_price1_fd1_0_c1_c0_c1_c1_c1">{{ val.shop_price | frontPrice }}</text>
              <text class="footprint_price2_fd1_0_c1_c0_c1_c1_c1">{{ val.shop_price | laterPrice }}</text>
            </view>
          </view>
        </view>
      </view>
      <fu-empty-ui v-if="!goodsList.length"></fu-empty-ui>
    </view>
    <!---flex布局flex布局结束-->
    <view class="flex flex-direction align-stretch benben-position-layout flex myCollection_flex_3" v-if="isEditor">
      <view class="flex align-center justify-between flex-sub myCollection_fd3_0">
        <view class="flex flex-wrap align-center">
          <view class="flex flex position-relative align-center" @click="isAllSelect = !isAllSelect">
            <image class="myCollection_checkfd3_0_c0_c0_c0_c0" v-if="isAllSelect" mode="aspectFit" src="@/static/global/111.png"></image>
            <image class="myCollection_noCheckfd3_0_c0_c0_c1_c0" v-else mode="aspectFit" src="@/static/global/110.png"></image>
            <text class="myCollection_fd3_0_c0_c1">全选</text>
          </view>
        </view>
        <button class="myCollection_fd3_0_c1" @tap.stop="getdeleteCollect()">删除</button>
      </view>
    </view>
    <view :style="{ height: '100rpx' }" v-if="isEditor"></view>
  </view>
</template>

<script>
export default {
  name: 'benben-goods-footprint',
  props: {
    // 商品列表
    goodsList: {
      type: Array,
      default: () => [],
    },
    goodsId: {
      type: [String, Number],
      default: '',
    },
    value: {
      type: [String],
      default: '',
    },
    isEditor: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {}
  },
  computed: {
    isAllSelect: {
      get() {
        let flag = true
        this.goodsList.map((item) => {
          let _val = item.list.find((val) => !val.isSelected)
          if (_val) {
            flag = false
          }
        })
        return flag
      },
      set(value) {
        this.goodsList.forEach((item) => {
          item.list.forEach((val) => {
            this.$set(val, 'isSelected', value)
          })
        })
      },
    },
  },
  watch: {},
  methods: {
    isItemAllSelect(item) {
      let val = item.list.find((val) => !val.isSelected)
      return val ? false : true
    },
    handleItemAllSelect(item) {
      if (!this.isEditor) return
      let flag = !this.isItemAllSelect(item)
      item.list.forEach((val) => {
        this.$set(val, 'isSelected', flag)
      })
    },

    handleItem(item) {
      if (this.isEditor) {
        this.$set(item, 'isSelected', !item.isSelected)
      } else {
        this.$emit('update:goods-id', item.goods_id)
        this.$emit('handleGoods')
      }
    },
    //删除收藏
    getdeleteCollect() {
      let aids = []
      this.goodsList.map((item) => {
        item.list.map((val) => {
          if (val.isSelected) {
            aids.push(val.aid)
          }
        })
      })
      if (!aids.length) return this.$message.info('请选择')
      this.$emit('input', aids.join(','))
      this.$emit('handleDel')
    },
  },
}
</script>

<style lang="scss" scoped>
.myCollection_fd3_0 {
  padding: 0rpx 24rpx 0rpx 32rpx;
}
.myCollection_checkfd3_0_c0_c0_c0_c0 {
  width: 36rpx;
  height: 36rpx;
  border-radius: 24rpx 24rpx 24rpx 24rpx;
}
.myCollection_noCheckfd3_0_c0_c0_c1_c0 {
  border-radius: 24rpx 24rpx 24rpx 24rpx;
  width: 36rpx;
  height: 36rpx;
}
.myCollection_fd3_0_c0_c1 {
  font-size: 28rpx;
  font-weight: 400;
  color: #333333;
  margin: 0rpx 0rpx 0rpx 14rpx;
}
.myCollection_fd3_0_c1 {
  background: #f6f6f6;
  background-size: 100% !important;
  border-radius: 50rpx 50rpx 50rpx 50rpx;
  font-size: 24rpx;
  color: #333;
  width: 170rpx;
  height: 60rpx;
  line-height: 60rpx;
  font-weight: 500;
}
.myCollection_flex_3 {
  background: #fff;
  background-size: 100% !important;
  width: 750rpx;
  height: 100rpx;
  overflow: hidden;
  z-index: 10;
  bottom: calc(0rpx + var(--window-bottom));
  background-size: 100% auto !important;
}
.footprint_fd1_0_c0 {
  display: flex;
  align-items: center;
  padding-left: 16rpx;
  height: 50rpx;
  font-size: 24rpx;
  font-weight: 700;
  color: #666666;
  image {
    width: 32rpx;
    height: 32rpx;
    margin-right: 16rpx;
  }
}
.footprint_fd1_0_c1_c0 {
  position: relative;
  width: 246rpx;
  margin: 0rpx 6rpx 28rpx 0rpx;
  &:nth-child(3n) {
    margin-right: 0;
  }
}
.myCollection_fd2_0_c0_c0 {
  width: 32rpx;
  height: 32rpx;
  z-index: 10;
  position: absolute;
  left: 15rpx;
  top: 15rpx;
}
.footprint_fd1_0_c1_c0_c0 {
  width: 246rpx;
  height: 246rpx;
  border-radius: 0rpx 0rpx 0rpx 0rpx;
}
.footprint_fd1_0_c1_c0_c1 {
  padding: 0rpx 12rpx 0rpx 12rpx;
}
.footprint_fd1_0_c1_c0_c1_c0 {
  width: 100%;
  font-size: 24rpx;
  font-weight: 400;
  color: #333333;
  -webkit-line-clamp: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  margin: 20rpx 0rpx 14rpx 0rpx;
}
.footprint_fd1_0_c1_c0_c1_c1 {
  font-size: 32rpx;
  font-weight: 700;
  color: #fa2033;
}
.footprint_fd1_0_c1_c0_c1_c1_c0 {
  font-size: 20rpx;
}
.footprint_fd1_0_c1_c0_c1_c1_c1 {
  color: #ff5536;
  font-weight: 600;
}
.footprint_price1_fd1_0_c1_c0_c1_c1_c1 {
  font-size: 32rpx;
}
.footprint_price2_fd1_0_c1_c0_c1_c1_c1 {
  font-size: 22rpx;
}
.footprint_fd1_0_c1_c1 {
  margin: 0rpx 0rpx 28rpx 0rpx;
}
.footprint_fd1_0_c1_c1_c0 {
  width: 246rpx;
  height: 246rpx;
  border-radius: 0rpx 0rpx 0rpx 0rpx;
}
.footprint_fd1_0_c1_c1_c1 {
  padding: 0rpx 12rpx 0rpx 12rpx;
}
.footprint_fd1_0_c1_c1_c1_c0 {
  font-size: 24rpx;
  font-weight: 400;
  color: #333333;
  -webkit-line-clamp: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  margin: 20rpx 0rpx 14rpx 0rpx;
}
.footprint_fd1_0_c1_c1_c1_c1 {
  font-size: 32rpx;
  font-weight: 700;
  color: #fa2033;
}
.footprint_fd1_0_c1_c1_c1_c1_c0 {
  font-size: 20rpx;
}
.footprint_fd1_0_c1_c1_c1_c1_c1 {
  color: #ff5536;
  font-weight: 600;
}
.footprint_price1_fd1_0_c1_c1_c1_c1_c1 {
  font-size: 32rpx;
}
.footprint_price2_fd1_0_c1_c1_c1_c1_c1 {
  font-size: 22rpx;
}
.footprint_fd1_0_c1_c2 {
  margin: 0rpx 0rpx 28rpx 0rpx;
}
.footprint_fd1_0_c1_c2_c0 {
  width: 246rpx;
  height: 246rpx;
  border-radius: 0rpx 0rpx 0rpx 0rpx;
}
.footprint_fd1_0_c1_c2_c1 {
  padding: 0rpx 12rpx 0rpx 12rpx;
}
.footprint_fd1_0_c1_c2_c1_c0 {
  font-size: 24rpx;
  font-weight: 400;
  color: #333333;
  -webkit-line-clamp: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  margin: 20rpx 0rpx 14rpx 0rpx;
}
.footprint_fd1_0_c1_c2_c1_c1 {
  font-size: 32rpx;
  font-weight: 700;
  color: #fa2033;
}
.footprint_fd1_0_c1_c2_c1_c1_c0 {
  font-size: 20rpx;
}
.footprint_fd1_0_c1_c2_c1_c1_c1 {
  color: #ff5536;
  font-weight: 600;
}
.footprint_price1_fd1_0_c1_c2_c1_c1_c1 {
  font-size: 32rpx;
}
.footprint_price2_fd1_0_c1_c2_c1_c1_c1 {
  font-size: 22rpx;
}
.footprint_fd1_0_c1_c3 {
  margin: 0rpx 0rpx 28rpx 0rpx;
}
.footprint_fd1_0_c1_c3_c0 {
  width: 246rpx;
  height: 246rpx;
  border-radius: 0rpx 0rpx 0rpx 0rpx;
}
.footprint_fd1_0_c1_c3_c1 {
  padding: 0rpx 12rpx 0rpx 12rpx;
}
.footprint_fd1_0_c1_c3_c1_c0 {
  font-size: 24rpx;
  font-weight: 400;
  color: #333333;
  -webkit-line-clamp: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  margin: 20rpx 0rpx 14rpx 0rpx;
}
.footprint_fd1_0_c1_c3_c1_c1 {
  font-size: 32rpx;
  font-weight: 700;
  color: #fa2033;
}
.footprint_fd1_0_c1_c3_c1_c1_c0 {
  font-size: 20rpx;
}
.footprint_fd1_0_c1_c3_c1_c1_c1 {
  color: #ff5536;
  font-weight: 600;
}
.footprint_price1_fd1_0_c1_c3_c1_c1_c1 {
  font-size: 32rpx;
}
.footprint_price2_fd1_0_c1_c3_c1_c1_c1 {
  font-size: 22rpx;
}
.footprint_flex_1 {
  padding: 24rpx 0rpx 0rpx 0rpx;
}
.footprint_fd0_0 {
  padding: 0rpx 32rpx 0rpx 32rpx;
  line-height: 88rpx;
}
.footprint_fd0_0_c0 {
  width: 180rpx;
}
.footprint_fd0_0_c0_c0 {
  font-size: 32rpx;
  font-weight: 500;
  color: #333;
}
.footprint_fd0_0_c1_c0 {
  font-size: 36rpx;
  font-weight: 500;
  color: #333;
}
.footprint_fd0_0_c2 {
  width: 180rpx;
}
.footprint_fd0_0_c2_c0 {
  font-size: 32rpx;
  font-weight: 400;
  color: #333333;
}
.footprint_flex_0 {
  background: #fff;
  background-size: 100% !important;
  width: 750rpx;
  height: 88rpx;
  overflow: hidden;
  z-index: 10;
  top: 0rpx;
  background-size: 100% auto !important;
}
.page {
  min-height: calc(100vh - var(--window-bottom));
  background: #fff;
  background-size: 100% auto !important;
}
</style>
