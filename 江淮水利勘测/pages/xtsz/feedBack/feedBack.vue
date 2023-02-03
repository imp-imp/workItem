<template>
    <view class="page" :style="themeColor">
    <view class="flex flex-direction flex-wrap align-stretch justify-center benben-position-layout flex feedBack_flex_0"    :style="{height:(88+StatusBarRpx)+'rpx',paddingTop:StatusBarRpx+'rpx'}">
            <view   class='flex flex-wrap align-stretch justify-between feedBack_fd0_0'     >
            <view   class='flex flex-wrap align-center feedBack_fd0_0_c0'  @tap.stop="handleJumpDiy" data-type="back" data-url="1"   >
        <text class='fu-iconfont2  feedBack_fd0_0_c0_c0' >&#xe794;</text>
</view>
    <view   class='flex flex-wrap align-center'     >
        <text class='feedBack_fd0_0_c1_c0' >我要反馈</text>
</view>
    <view   class='flex align-center justify-end feedBack_fd0_0_c2'  @tap.stop="handleJumpDiy" data-type="navigateTo" :data-url="`/pages/xtsz/feedBackDetail/feedBackDetail`"   >
        <text class='feedBack_fd0_0_c2_c0' >反馈记录</text>
</view>
</view>

        </view>
<view :style="{height: (88+StatusBarRpx)+'rpx'}"  ></view>
<!---意见反馈表单flex布局开始-->
 <view class="flex flex-direction flex-wrap align-stretch benben-flex-layout feedBack_flex_1"   >
            <view   class='flex flex-wrap align-center feedBack_fd1_0'     >
        <text class='feedBack_fd1_0_c0' >反馈类型</text>
</view>
    <view   class='flex flex-direction flex-wrap align-stretch feedBack_fd1_1'     >
            <benben-select-diy ref="showSelectPopup1661392431678" class-name='flex flex-wrap align-center flex' :items.sync="changeType" v-model="changeId"  default-type="value" default-label="name" :allow-cancel='false' type="radio" :disabled='false'  >
    <template v-for = '(item,key0) in changeType'>
            <view v-if="item.isSelected"  class='flex align-center justify-center flex feedBack_fd1_1_c0_c0' :key="key0" @tap="$refs.showSelectPopup1661392431678.tapHandle(key0)"     >
        <text class='flex-sub feedBack_fd1_1_c0_c0_c0' >{{item.name}}</text>
</view>    <view  v-else  class='flex align-center justify-center flex feedBack_fd1_1_c0_c1' :key="key0" @tap="$refs.showSelectPopup1661392431678.tapHandle(key0)"     >
        <text class='flex-sub feedBack_fd1_1_c0_c1_c0' >{{item.name}}</text>
</view></template></benben-select-diy>
</view>
<text class='feedBack_fd1_2' >反馈内容</text>
    <view   class='flex flex-direction flex-wrap align-stretch feedBack_fd1_3'     >
        <view class='flex flex-wrap feedBack_fd1_3_c0'>
<textarea class='flex feedBack_input_fd1_3_c0' confirm-type="done" :placeholder="'问题描述的越详细，有助于我们更快的解决问题'" :maxlength="240" placeholder-style="color:rgba(191, 191, 191, 1);font-size:28rpx"   v-model="fd1_3_c0" />

</view>
    <view   class='flex flex-direction flex-wrap align-stretch'     >
            <benben-images-upload  ref="benbenImagesUploadfd1_3_c1_c0"   :is-show-tips='true' :maxlength="9" >
    <template v-slot="{ num, maxlength, isShow, imgList }">
     <view class="flex flex-wrap align-start flex feedBack_fd1_3_c1_c0">
            
    <view v-for="(image, index) in imgList" :key="index"  class='flex position-relative feedBack_fd1_3_c1_c00'     >
        <text class='fu-iconfont2 position-absolute feedBack_fd1_3_c1_c000'  @tap.stop="$refs.benbenImagesUploadfd1_3_c1_c0.delImage(index)">&#xE8E7;</text><image class='feedBack_fd1_3_c1_c001' @tap.stop="$refs.benbenImagesUploadfd1_3_c1_c0.previewImage(index)" mode="aspectFit"  :src='image'></image>
    </view>
    
            <image class='feedBack_fd1_3_c1_c01' @tap.stop="$refs.benbenImagesUploadfd1_3_c1_c0.manyChooseImage()"  v-if="isShow" mode="aspectFit"  :src='STATIC_URL+"113.png"'></image>
            <text class='image_upload_tips feedBack_fd1_3_c1_c02' >最多上传{{num}}/{{maxlength}}张图片</text>
          </view>
        </template>
    </benben-images-upload>
</view>
</view>
</view>
<!---意见反馈表单flex布局结束-->
    <view class="flex flex-wrap align-center justify-center benben-position-layout flex feedBack_flex_2"    >
        <button class='flex-sub feedBack_fd2_0' @tap.stop="handleJumpDiy" data-type="back" data-url="1"  >提交</button>

        </view>
<view :style="{height: '88rpx'}"  ></view>
    
    </view>
</template>
<script>
    
    export default {
        components:{},
        
        data(){
			return {"fd1_3_c0":"","changeId":"1","changeType":[{"name":"下载/加载问题","value":"1","image":""},{"name":"会员付费问题","value":"2","image":""},{"name":"章节/图片问题","value":"3","image":""},{"name":"APP体验问题","value":"4","image":""},{"name":"卡顿/不流畅","value":"5","image":""},{"name":"其他","value":"6","image":""}]};
		},
		computed:{
            themeColor() {
              return this.$store.getters.themeColor
            },
            
		},
		watch:{},
		onLoad(options){
            
		},
        onUnload() {
                
        },
		onReady(){
            
		},
		onShow(){
            
		},
		onHide(){
            
		},
		onResize(){
            
		},
		onPullDownRefresh(){
            
		},
		onReachBottom(e){
            
		},
		onPageScroll(e){
            
		},
		methods:{
            
		}
    };
</script> 
<style lang="scss" scoped>
           .page{
            min-height: calc(100vh - var(--window-bottom));
            background:#fff;background-size: 100% auto !important;
        }
    .feedBack_flex_0{
        border-bottom:1px solid #eee;background:#fff;background-size: 100% !important;width:750rpx;height:88rpx;overflow:hidden;z-index:10;top:0rpx;background-size:100% auto !important;
    }
    .feedBack_fd0_0_c2_c0{
        font-size:32rpx;font-weight:500;color:rgba(11, 24, 152, 1);
    }
    .feedBack_fd0_0_c2{
        padding:0rpx 0rpx 0rpx 0rpx;width:200rpx;
    }
    .feedBack_fd0_0_c1_c0{
        font-size:36rpx;font-weight:500;color:#333333;line-height:50rpx;
    }
    .feedBack_fd0_0_c0_c0{
        font-size:36rpx;font-weight:400;color:#333;
    }
    .feedBack_fd0_0_c0{
        width:200rpx;
    }
    .feedBack_fd0_0{
        padding:0rpx 32rpx 0rpx 32rpx;line-height:88rpx;
    }
    .feedBack_flex_1{
        background:#fff;background-size: 100% !important;background-size:100% auto !important;
    }
    .feedBack_fd1_3_c1_c02{
        font-size:24rpx;color:rgba(191, 191, 191, 1);font-weight:400;width:702rpx;
    }
    .feedBack_fd1_3_c1_c01{
        width:160rpx;height:160rpx;margin:0rpx 24rpx 24rpx 0rpx;border-radius:16rpx 16rpx 16rpx 16rpx;
    }
    .feedBack_fd1_3_c1_c001{
        width:160rpx;height:160rpx;border-radius:16rpx 16rpx 16rpx 16rpx;
    }
    .feedBack_fd1_3_c1_c000{
        top:0rpx;right:0rpx;z-index:10;color:#ff5536;
    }
    .feedBack_fd1_3_c1_c00{
        margin:0rpx 24rpx 24rpx 0rpx;
    }
    .feedBack_fd1_3_c1_c0{
        padding:24rpx 0rpx 0rpx 24rpx;
    }
    .feedBack_input_fd1_3_c0{
        width:100%;height:166rpx;font-size:28rpx;font-weight:400;color:#333;
    }
    .feedBack_fd1_3_c0{
        width:686rpx;border-radius:10rpx 10rpx 10rpx 10rpx;margin:0rpx 0rpx 0rpx 32rpx;padding:0rpx 0rpx 24rpx 0rpx;
    }
    .feedBack_fd1_3{
        margin:0rpx 0rpx 32rpx 0rpx;
    }
    .feedBack_fd1_2{
        font-size:32rpx;font-weight:500;color:#1A1A1A;line-height:109rpx;margin:0rpx 32rpx 0rpx 32rpx;
    }
    .feedBack_fd1_1_c0_c1_c0{
        font-size:28rpx;font-weight:400;color:rgba(191, 191, 191, 1);line-height:62rpx;-webkit-line-clamp:1;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;text-align:center;
    }
    .feedBack_fd1_1_c0_c1{
        border:1px solid rgba(191, 191, 191, 1);background:#fff;background-size: 100% !important;margin:16rpx 16rpx 16rpx 16rpx;height:64rpx;border-radius:8rpx 8rpx 8rpx 8rpx;width:206rpx;padding:0rpx 10rpx 0rpx 10rpx;
    }
    .feedBack_fd1_1_c0_c0_c0{
        font-size:28rpx;font-weight:400;color:#fff;line-height:62rpx;-webkit-line-clamp:1;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;text-align:center;
    }
    .feedBack_fd1_1_c0_c0{
        background:rgba(11, 24, 152, 1);background-size: 100% !important;margin:16rpx 16rpx 16rpx 16rpx;height:64rpx;border-radius:8rpx 8rpx 8rpx 8rpx;width:206rpx;padding:0rpx 10rpx 0rpx 10rpx;
    }
    .feedBack_fd1_1{
        border-bottom:10px solid rgba(246, 247, 248, 1);padding:0rpx 16rpx 16rpx 16rpx;
    }
    .feedBack_fd1_0_c0{
        font-size:32rpx;font-weight:500;color:#1A1A1A;margin:0rpx 32rpx 0rpx 32rpx;
    }
    .feedBack_fd1_0{
        padding:32rpx 0rpx 32rpx 0rpx;
    }
    .feedBack_flex_2{
        width:750rpx;height:88rpx;overflow:hidden;z-index:10;bottom:calc(48rpx + var(--window-bottom));
    }
    .feedBack_fd2_0{
        background:rgba(11, 24, 152, 1);background-size: 100% !important;border-radius:44rpx 44rpx 44rpx 44rpx;font-size:32rpx;color:#fff;margin:0rpx 32rpx 0rpx 32rpx;height:88rpx;line-height:88rpx;
    }
</style>