<template>
    <view class="page" :style="themeColor">
    <view class="flex flex-direction flex-wrap align-stretch justify-center benben-position-layout flex feedBackDetail_flex_0"    :style="{height:(88+StatusBarRpx)+'rpx',paddingTop:StatusBarRpx+'rpx'}">
            <view   class='flex flex-wrap align-stretch justify-between feedBackDetail_fd0_0'     >
            <view   class='flex flex-wrap align-center feedBackDetail_fd0_0_c0'  @tap.stop="handleJumpDiy" data-type="back" data-url="2"   >
        <text class='fu-iconfont2  feedBackDetail_fd0_0_c0_c0' >&#xe794;</text>
</view>
    <view   class='flex flex-wrap align-center'     >
        <text class='feedBackDetail_fd0_0_c1_c0' >历史反馈</text>
</view>
    <view   class='flex align-center justify-end feedBackDetail_fd0_0_c2'     >
        </view>
</view>

        </view>
<view :style="{height: (88+StatusBarRpx)+'rpx'}"  ></view>
<!---反馈记录带联系人flex布局开始-->
 <view class="flex flex-direction flex-wrap align-stretch benben-flex-layout feedBackDetail_flex_1"   >
            <view   class='flex flex-wrap align-start feedBackDetail_fd1_0'     >
        <image class='feedBackDetail_fd1_0_c0' mode="aspectFit"  :src='STATIC_URL+"107.png"'></image>
    <view   class='flex flex-direction flex-wrap align-stretch flex-sub feedBackDetail_fd1_0_c1'     >
            <view   class='flex flex-direction flex-wrap align-stretch feedBackDetail_fd1_0_c1_c0'     >
        <image class='feedBackDetail_fd1_0_c1_c0_c0' mode="aspectFit"  :src='STATIC_URL+"108.png"'></image>
    <view   class='flex-sub'     >
        <text class='feedBackDetail_fd1_0_c1_c0_c1_c0' >感觉个人信息保护的不到位。商家利益重要顾客也需要安全感。感觉个人信家家家家家家家家</text>
</view>
</view>
    <view   class='flex flex-wrap align-center'     >
            <view   class='flex flex-wrap align-center feedBackDetail_fd1_0_c1_c1_c0'     >
        <image class='feedBackDetail_fd1_0_c1_c1_c0_c0' mode="aspectFill"  :src='STATIC_URL+"109.png"'></image>
</view>
    <view   class='flex flex-wrap align-center feedBackDetail_fd1_0_c1_c1_c1'     >
        <image class='feedBackDetail_fd1_0_c1_c1_c1_c0' mode="aspectFill"  :src='STATIC_URL+"109.png"'></image>
</view>
    <view   class='flex flex-wrap align-center feedBackDetail_fd1_0_c1_c1_c2'     >
        <image class='feedBackDetail_fd1_0_c1_c1_c2_c0' mode="aspectFill"  :src='STATIC_URL+"109.png"'></image>
</view>
</view>
    <view   class='flex flex-wrap align-center feedBackDetail_fd1_0_c1_c2'     >
        <text class='feedBackDetail_fd1_0_c1_c2_c0' >联系人：</text>
<text class='feedBackDetail_fd1_0_c1_c2_c1' >15635265523</text>
</view>
    <view   class='flex flex-wrap align-center feedBackDetail_fd1_0_c1_c3'     >
        <text class='feedBackDetail_fd1_0_c1_c3_c0' >反馈类型：</text>
<text class='feedBackDetail_fd1_0_c1_c3_c1' >测试类型</text>
</view>
    <view   class='flex flex-wrap align-center feedBackDetail_fd1_0_c1_c4'     >
        <text class='feedBackDetail_fd1_0_c1_c4_c0' >反馈时间：</text>
<text class='feedBackDetail_fd1_0_c1_c4_c1' >2020-11-23</text>
</view>
    <view   class='flex flex-wrap align-center feedBackDetail_fd1_0_c1_c5'     >
        <text class='feedBackDetail_fd1_0_c1_c5_c0' >平台回复：</text>
<text class='feedBackDetail_fd1_0_c1_c5_c1' >您的反馈已收到，我们会尽快处理</text>
</view>
</view>
</view>
    <view   class='flex flex-wrap align-start feedBackDetail_fd1_1'     >
        <image class='feedBackDetail_fd1_1_c0' mode="aspectFit"  :src='STATIC_URL+"107.png"'></image>
    <view   class='flex flex-direction flex-wrap align-stretch flex-sub feedBackDetail_fd1_1_c1'     >
            <view   class='flex flex-direction flex-wrap align-stretch feedBackDetail_fd1_1_c1_c0'     >
        <image class='feedBackDetail_fd1_1_c1_c0_c0' mode="aspectFit"  :src='STATIC_URL+"108.png"'></image>
    <view   class='flex-sub'     >
        <text class='feedBackDetail_fd1_1_c1_c0_c1_c0' >感觉个人信息保护的不到位。商家利益重要顾客也需要安全感。感觉个人信家家家家家家家家</text>
</view>
</view>
    <view   class='flex flex-wrap align-center feedBackDetail_fd1_1_c1_c1'     >
        <text class='feedBackDetail_fd1_1_c1_c1_c0' >反馈类型：</text>
<text class='feedBackDetail_fd1_1_c1_c1_c1' >测试类型</text>
</view>
    <view   class='flex flex-wrap align-center feedBackDetail_fd1_1_c1_c2'     >
        <text class='feedBackDetail_fd1_1_c1_c2_c0' >反馈时间：</text>
<text class='feedBackDetail_fd1_1_c1_c2_c1' >2020-11-23</text>
</view>
</view>
</view>
</view>
<!---反馈记录带联系人flex布局结束-->
    
    </view>
</template>
<script>
    
    export default {
        components:{},
        
        data(){
			return {};
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
    .feedBackDetail_flex_0{
        border-bottom:1px solid #eee;background:#fff;background-size: 100% !important;width:750rpx;height:88rpx;overflow:hidden;z-index:10;top:0rpx;background-size:100% auto !important;
    }
    .feedBackDetail_fd0_0_c2{
        padding:0rpx 0rpx 0rpx 0rpx;width:100rpx;
    }
    .feedBackDetail_fd0_0_c1_c0{
        font-size:36rpx;font-weight:500;color:#333333;line-height:50rpx;
    }
    .feedBackDetail_fd0_0_c0_c0{
        font-size:36rpx;font-weight:400;color:#333;
    }
    .feedBackDetail_fd0_0_c0{
        width:100rpx;
    }
    .feedBackDetail_fd0_0{
        padding:0rpx 32rpx 0rpx 32rpx;line-height:88rpx;
    }
    .feedBackDetail_flex_1{
        padding:0rpx 0rpx 0rpx 24rpx;
    }
    .feedBackDetail_fd1_1_c1_c2_c1{
        line-height:46rpx;font-size:24rpx;font-weight:400;color:#999999;
    }
    .feedBackDetail_fd1_1_c1_c2_c0{
        line-height:46rpx;font-size:24rpx;font-weight:400;color:#999999;
    }
    .feedBackDetail_fd1_1_c1_c2{
        margin:0rpx 0rpx 16rpx 16rpx;
    }
    .feedBackDetail_fd1_1_c1_c1_c1{
        line-height:46rpx;font-size:24rpx;font-weight:400;color:#999999;
    }
    .feedBackDetail_fd1_1_c1_c1_c0{
        line-height:46rpx;font-size:24rpx;font-weight:400;color:#999999;
    }
    .feedBackDetail_fd1_1_c1_c1{
        margin:32rpx 0rpx 16rpx 16rpx;
    }
    .feedBackDetail_fd1_1_c1_c0_c1_c0{
        line-height:46rpx;font-size:28rpx;font-weight:400;color:#333333;padding:0rpx 32rpx 0rpx 0rpx;
    }
    .feedBackDetail_fd1_1_c1_c0_c0{
        width:32rpx;height:32rpx;border-radius:0rpx 0rpx 0rpx 0rpx;position:absolute;right:0rpx;bottom:6rpx;
    }
    .feedBackDetail_fd1_1_c1_c0{
        position:relative;padding:0rpx 0rpx 0rpx 16rpx;
    }
    .feedBackDetail_fd1_1_c1{
        padding:0rpx 24rpx 0rpx 0rpx;
    }
    .feedBackDetail_fd1_1_c0{
        width:72rpx;height:72rpx;border-radius:50rpx 50rpx 50rpx 50rpx;
    }
    .feedBackDetail_fd1_1{
        border-bottom:1px solid #eee;padding:24rpx 0rpx 32rpx 0rpx;
    }
    .feedBackDetail_fd1_0_c1_c5_c1{
        line-height:46rpx;font-size:28rpx;font-weight:400;color:#333333;
    }
    .feedBackDetail_fd1_0_c1_c5_c0{
        line-height:46rpx;font-size:28rpx;font-weight:400;color:rgba(73, 106, 157, 1);
    }
    .feedBackDetail_fd1_0_c1_c5{
        background:rgba(248, 248, 248, 1);background-size: 100% !important;padding:24rpx 16rpx 24rpx 16rpx;margin:16rpx 0rpx 0rpx 16rpx;border-radius:16rpx 16rpx 16rpx 16rpx;background-size:100% auto !important;
    }
    .feedBackDetail_fd1_0_c1_c4_c1{
        line-height:46rpx;font-size:24rpx;font-weight:400;color:#999999;
    }
    .feedBackDetail_fd1_0_c1_c4_c0{
        line-height:46rpx;font-size:24rpx;font-weight:400;color:#999999;
    }
    .feedBackDetail_fd1_0_c1_c4{
        margin:0rpx 0rpx 16rpx 16rpx;
    }
    .feedBackDetail_fd1_0_c1_c3_c1{
        line-height:46rpx;font-size:24rpx;font-weight:400;color:#999999;
    }
    .feedBackDetail_fd1_0_c1_c3_c0{
        line-height:46rpx;font-size:24rpx;font-weight:400;color:#999999;
    }
    .feedBackDetail_fd1_0_c1_c3{
        margin:0rpx 0rpx 16rpx 16rpx;
    }
    .feedBackDetail_fd1_0_c1_c2_c1{
        line-height:46rpx;font-size:24rpx;font-weight:400;color:#333;
    }
    .feedBackDetail_fd1_0_c1_c2_c0{
        line-height:46rpx;font-size:24rpx;font-weight:400;color:#333;
    }
    .feedBackDetail_fd1_0_c1_c2{
        margin:24rpx 0rpx 16rpx 16rpx;
    }
    .feedBackDetail_fd1_0_c1_c1_c2_c0{
        width:180rpx;height:180rpx;border-radius:16rpx 16rpx 16rpx 16rpx;
    }
    .feedBackDetail_fd1_0_c1_c1_c2{
        margin:12rpx 15rpx 12rpx 15rpx;
    }
    .feedBackDetail_fd1_0_c1_c1_c1_c0{
        width:180rpx;height:180rpx;border-radius:16rpx 16rpx 16rpx 16rpx;
    }
    .feedBackDetail_fd1_0_c1_c1_c1{
        margin:12rpx 15rpx 12rpx 15rpx;
    }
    .feedBackDetail_fd1_0_c1_c1_c0_c0{
        width:180rpx;height:180rpx;border-radius:16rpx 16rpx 16rpx 16rpx;
    }
    .feedBackDetail_fd1_0_c1_c1_c0{
        margin:12rpx 15rpx 12rpx 15rpx;
    }
    .feedBackDetail_fd1_0_c1_c0_c1_c0{
        line-height:46rpx;font-size:28rpx;font-weight:400;color:#333333;padding:0rpx 32rpx 0rpx 0rpx;
    }
    .feedBackDetail_fd1_0_c1_c0_c0{
        width:32rpx;height:32rpx;border-radius:0rpx 0rpx 0rpx 0rpx;position:absolute;right:0rpx;bottom:6rpx;
    }
    .feedBackDetail_fd1_0_c1_c0{
        position:relative;padding:0rpx 0rpx 0rpx 16rpx;
    }
    .feedBackDetail_fd1_0_c1{
        padding:0rpx 24rpx 0rpx 0rpx;
    }
    .feedBackDetail_fd1_0_c0{
        width:72rpx;height:72rpx;border-radius:50rpx 50rpx 50rpx 50rpx;
    }
    .feedBackDetail_fd1_0{
        border-bottom:1px solid #eee;padding:24rpx 0rpx 32rpx 0rpx;
    }
</style>