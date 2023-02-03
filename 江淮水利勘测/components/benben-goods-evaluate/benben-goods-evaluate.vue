<template>
  <view>
    <template v-for="(item, i) in goodsList">
      <view v-if="item.refund_id <= 0" class="flex flex-direction flex-wrap align-stretch benben-flex-layout evaluate_flex_1" :key="i">
        <view class="flex flex-direction flex-wrap align-stretch evaluate_fd1_0">
          <view class="flex flex-wrap align-stretch evaluate_fd1_0_c0">
            <image class="evaluate_fd1_0_c0_c0" mode="aspectFit" :src="item.goods_thumb"></image>
            <view class="flex flex-direction flex-wrap align-stretch flex-sub evaluate_fd1_0_c0_c1">
              <text class="evaluate_fd1_0_c0_c1_c0">{{ item.goods_name }}</text>
              <text class="evaluate_fd1_0_c0_c1_c1">{{ item.sku_name }}</text>
              <view class="flex flex-wrap align-center justify-between">
                <view class="flex flex-wrap align-center">
                  <text class="evaluate_fd1_0_c0_c1_c2_c0_c0">￥</text>
                  <view class="evaluate_fd1_0_c0_c1_c2_c0_c1">
                    <text class="evaluate_price1_fd1_0_c0_c1_c2_c0_c1">{{ item.goods_money | frontPrice }}</text>
                    <text class="evaluate_price2_fd1_0_c0_c1_c2_c0_c1">{{ item.goods_money | laterPrice }}</text>
                  </view>
                </view>
                <view class="flex flex-wrap align-center evaluate_fd1_0_c0_c1_c2_c1">
                  <text>x</text>
                  <text>{{ item.num }}</text>
                </view>
              </view>
            </view>
          </view>
          <view class="flex flex-wrap align-center justify-between evaluate_fd1_0_c1">
            <text class="evaluate_fd1_0_c1_c0">商品评价</text>
            <view class="flex flex-wrap align-center">
              <template v-for="starNum in 5">
                <image
                  @click="submitData[i].star = starNum"
                  v-if="submitData[i].star >= starNum"
                  :key="starNum"
                  class="evaluate_star1fd1_0_c1_c1"
                  mode="aspectFit"
                  src="@/static/global/95.png"
                ></image>
                <image
                  @click="submitData[i].star = starNum"
                  v-else
                  :key="starNum"
                  class="evaluate_star1fd1_0_c1_c1"
                  mode="aspectFit"
                  src="@/static/global/96.png"
                ></image>
              </template>
            </view>
          </view>
          <view class="flex flex-wrap align-center">
            <view class="flex flex-wrap evaluate_fd1_0_c2_c0">
              <textarea
                class="flex evaluate_input_fd1_0_c2_c0"
                confirm-type="done"
                :placeholder="'请输入您的评价'"
                :maxlength="240"
                placeholder-style="color:#999;font-size:28rpx"
                v-model="submitData[i].content"
              />
            </view>
          </view>
          <view class="flex flex-direction flex-wrap align-stretch">
            <view class="evaluate_fd1_0_c3_c0">
              <text class="evaluate_fd1_0_c3_c0_c0">添加照片</text>
              <text class="evaluate_fd1_0_c3_c0_c1">最多可上传9张</text>
            </view>
            <benben-images-upload
              ref="benbenImagesUploadfd1_0_c3_c1"
              :img-list.sync="submitData[i].images"
              :img-ids.sync="submitData[i].thumb"
              :maxlength="9"
            >
              <template v-slot="{ num, maxlength, isShow, imgList }">
                <view class="flex flex-wrap align-start flex evaluate_fd1_0_c3_c1">
                  <view v-for="(image, index) in imgList" :key="index" class="flex position-relative evaluate_fd1_0_c3_c10">
                    <text
                      class="fu-iconfont2 position-absolute evaluate_fd1_0_c3_c100"
                      @tap.stop="$refs.benbenImagesUploadfd1_0_c3_c1[i].delImage(index)"
                    >
                      &#xE8E7;
                    </text>
                    <image
                      mode="aspectFill"
                      class="evaluate_fd1_0_c3_c101"
                      @tap.stop="$refs.benbenImagesUploadfd1_0_c3_c1[i].previewImage(index)"
                      :src="image"
                    ></image>
                  </view>
                  <image
                    class="evaluate_fd1_0_c3_c11"
                    @tap.stop="$refs.benbenImagesUploadfd1_0_c3_c1[i].manyChooseImage()"
                    v-if="isShow"
                    mode="aspectFit"
                    src="@/static/global/119.jpg"
                  ></image>
                </view>
              </template>
            </benben-images-upload>
          </view>
          <view class="flex flex-wrap align-center" @tap.stop="submitData[i].is_anonymous = !submitData[i].is_anonymous">
            <image class="evaluate_fd1_0_c4_c0" src="@/static/global/111.png" v-if="submitData[i].is_anonymous"></image>
            <image class="evaluate_fd1_0_c4_c0 evaluate_fd1_0_c4_c0_1" src="@/static/global/110.png" v-else></image>
            <text class="evaluate_fd1_0_c4_c1">匿名评价</text>
          </view>
        </view>
      </view>
    </template>
  </view>
</template>

<script>
export default {
  name: 'benben-goods-evaluate',
  props: {
    // 商品列表
    goodsList: {
      type: Array,
      default: () => [],
    },
    // 提交数据
    value: {
      type: [String],
      default: '',
    },
  },
  data() {
    return { submitData: [] }
  },
  computed: {
    selectSpecStr() {
      return ''
    },
  },
  watch: {
    goodsList: {
      handler(value) {
        let submitData = []
        value.map((item) => {
          let info = this.submitData.find((val) => val.goods_id == item.goods_id && val.sku_id == item.sku_id)
          if (info) {
            submitData.push(info)
          } else {
            submitData.push({
              star: 5,
              content: '',
              thumb: '',
              images: [],
              is_anonymous: false,
            })
          }
        })
        this.submitData = submitData
      },
      deep: true,
      immediate: true,
    },
    submitData: {
      handler(value) {
        let goods_comment = []
        for (let index = 0; index < value.length; index++) {
          const element = value[index]
          if (element.refund_id <= 0) {
            goods_comment.push({
              goods_id: element.goods_id,
              sku_id: element.sku_id,
              star: element.star,
              content: element.content ? element.content : '这家伙太懒什么都没有留下',
              thumb: element.thumb,
              star: element.star,
              type: element.is_anonymous ? 0 : 1,
            })
          }
        }
        this.$emit('input', JSON.stringify(goods_comment))
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
.evaluate_fd2_0 {
  background: rgba(64, 131, 62, 1);
  background-size: 100% !important;
  border-radius: 44rpx 44rpx 44rpx 44rpx;
  font-size: 32rpx;
  color: #fff;
  width: 686rpx;
  height: 88rpx;
  line-height: 88rpx;
  font-weight: 500;
}

.evaluate_flex_2 {
  width: 750rpx;
  height: 88rpx;
  overflow: hidden;
  z-index: 10;
  bottom: calc(40rpx + var(--window-bottom));
}

.evaluate_fd1_0 {
  background: #fff;
  background-size: 100% !important;
  border-radius: 16rpx 16rpx 16rpx 16rpx;
  padding: 32rpx 24rpx 32rpx 24rpx;
  background-size: 100% auto !important;
  margin: 12rpx 0rpx 12rpx 0rpx;
}

.evaluate_fd1_0_c0 {
  border-bottom: 1px solid #eee;
  padding: 0rpx 0rpx 32rpx 0rpx;
}

.evaluate_fd1_0_c0_c0 {
  width: 200rpx;
  height: 200rpx;
}

.evaluate_fd1_0_c0_c1 {
  margin: 0rpx 0rpx 0rpx 34rpx;
}

.evaluate_fd1_0_c0_c1_c0 {
  font-size: 28rpx;
  font-weight: 500;
  color: #333333;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}

.evaluate_fd1_0_c0_c1_c1 {
  font-size: 24rpx;
  font-weight: 400;
  color: #999999;
  margin: 10rpx 0rpx 36rpx 0rpx;
  -webkit-line-clamp: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}

.evaluate_fd1_0_c0_c1_c2_c0_c0 {
  font-size: 20rpx;
  font-weight: 700;
  color: #ff4133;
}

.evaluate_fd1_0_c0_c1_c2_c0_c1 {
  color: #ff5536;
  font-weight: 600;
}

.evaluate_price1_fd1_0_c0_c1_c2_c0_c1 {
  font-size: 32rpx;
}

.evaluate_price2_fd1_0_c0_c1_c2_c0_c1 {
  font-size: 22rpx;
}

.evaluate_fd1_0_c0_c1_c2_c1 {
  font-size: 24rpx;
  font-weight: 400;
  color: #999999;
}

.evaluate_fd1_0_c1 {
  border-bottom: 1px solid #eee;
  padding: 32rpx 0rpx 32rpx 0rpx;
}

.evaluate_fd1_0_c1_c0 {
  font-size: 32rpx;
  font-weight: 400;
  color: #333333;
}

.evaluate_star1fd1_0_c1_c1 {
  width: 33rpx;
  height: 34rpx;
  margin: 0rpx 10rpx 0rpx 10rpx;
}

.evaluate_star1fd1_0_c1_c1 {
  height: 33rpx;
  margin: 0rpx 10rpx 0rpx 10rpx;
  width: 34rpx;
}

.evaluate_fd1_0_c2_c0 {
  background: rgba(248, 248, 248, 1);
  background-size: 100% !important;
  width: 654rpx;
  border-radius: 16rpx 16rpx 16rpx 16rpx;
  height: 272rpx;
  margin: 32rpx 0rpx 0rpx 0rpx;
  padding: 20rpx 20rpx 20rpx 20rpx;
}

.evaluate_input_fd1_0_c2_c0 {
  width: 100%;
  height: 100%;
  font-size: 28rpx;
  font-weight: 400;
  color: #333;
}

.evaluate_fd1_0_c3_c0 {
  margin: 32rpx 0rpx 0rpx 0rpx;
}

.evaluate_fd1_0_c3_c0_c0 {
  font-size: 32rpx;
  font-weight: 400;
  color: #333333;
}

.evaluate_fd1_0_c3_c0_c1 {
  font-size: 24rpx;
  font-weight: 400;
  color: #bfbfbf;
  margin: 0rpx 0rpx 0rpx 16rpx;
}

.evaluate_fd1_0_c3_c1 {
  width: 100%;
  padding: 32rpx 24rpx 0;
}

.evaluate_fd1_0_c3_c10 {
  margin: 0rpx 24rpx 24rpx 0rpx;
  &:nth-child(3n) {
    margin-right: 0;
  }
}

.evaluate_fd1_0_c3_c100 {
  top: 0rpx;
  right: 0rpx;
  z-index: 10;
  color: #ff5536;
}

.evaluate_fd1_0_c3_c101 {
  width: 186rpx;
  height: 186rpx;
}

.evaluate_fd1_0_c3_c11 {
  width: 186rpx;
  height: 186rpx;
  margin-bottom: 24rpx;
}

.evaluate_fd1_0_c4_c0 {
  width: 34rpx;
  height: 34rpx;
  margin: 0rpx 16rpx 0rpx 0rpx;
}

.evaluate_fd1_0_c4_c0_1 {
  width: 34rpx;
  height: 34rpx;
  margin: 0rpx 16rpx 0rpx 0rpx;
}

.evaluate_fd1_0_c4_c1 {
  font-size: 24rpx;
  font-weight: 400;
  color: #666666;
}

.evaluate_flex_1 {
  padding: 5rpx 24rpx 0rpx 24rpx;
}

.evaluate_fd0_0 {
  padding: 0rpx 32rpx 0rpx 32rpx;
  line-height: 88rpx;
}

.evaluate_fd0_0_c0 {
  width: 200rpx;
}

.evaluate_fd0_0_c0_c0 {
  font-size: 36rpx;
  color: #333;
  font-weight: 500;
}

.evaluate_fd0_0_c1_c0 {
  font-size: 36rpx;
  font-weight: 500;
  color: #333333;
}

.evaluate_fd0_0_c2 {
  padding: 0rpx 0rpx 0rpx 0rpx;
  width: 200rpx;
}

.evaluate_flex_0 {
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
  background: #f8f8f8;
  background-size: 100% auto !important;
}
</style>
