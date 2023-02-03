<template>
    <view class="page" :style="themeColor">
    <view class="flex flex-wrap align-center justify-between benben-position-layout flex design_flex_0"    :style="{height:(88+StatusBarRpx)+'rpx',paddingTop:StatusBarRpx+'rpx'}">
            <view   class='flex flex-wrap align-center design_fd0_0'  @tap.stop="handleJumpDiy" data-type="back" data-url="1"   >
        <text class='fu-iconfont2' >&#xe794;</text>
</view>
<text class='design_fd0_1' >设计一室</text>
    <view   class='flex flex-wrap align-center design_fd0_2'     >
        </view>

        </view>
<view :style="{height: (88+StatusBarRpx)+'rpx'}"  ></view>
<!---flex布局flex布局开始-->
 <view class="flex flex-direction flex-wrap align-stretch benben-flex-layout design_flex_1"   >
            <view   class='flex flex-wrap align-center justify-between design_fd1_0'     >
            <view   class='flex flex-wrap align-center'     >
        <image class='design_fd1_0_c0_c0' mode="aspectFit"  :src='STATIC_URL+"32.png"'></image>
<text class='design_fd1_0_c0_c1' >米微微</text>
</view>
<image class='design_fd1_0_c1' mode="aspectFit"  :src='STATIC_URL+"33.png"'></image>
</view>
    <view   class='flex flex-wrap align-center justify-between design_fd1_1'     >
            <view   class='flex flex-wrap align-center'     >
        <image class='design_fd1_1_c0_c0' mode="aspectFit"  :src='STATIC_URL+"32.png"'></image>
<text class='design_fd1_1_c0_c1' >陆晓川</text>
</view>
<image class='design_fd1_1_c1' mode="aspectFit"  :src='STATIC_URL+"34.png"'></image>
</view>
    <view   class='flex flex-wrap align-center justify-between design_fd1_2'     >
            <view   class='flex flex-wrap align-center'     >
        <image class='design_fd1_2_c0_c0' mode="aspectFit"  :src='STATIC_URL+"32.png"'></image>
<text class='design_fd1_2_c0_c1' >张成玲</text>
</view>
<image class='design_fd1_2_c1' mode="aspectFit"  :src='STATIC_URL+"35.png"'></image>
</view>
    <view   class='flex flex-wrap align-center justify-between design_fd1_3'     >
            <view   class='flex flex-wrap align-center'     >
        <image class='design_fd1_3_c0_c0' mode="aspectFit"  :src='STATIC_URL+"32.png"'></image>
<text class='design_fd1_3_c0_c1' >高晓灵</text>
</view>
<image class='design_fd1_3_c1' mode="aspectFit"  :src='STATIC_URL+"36.png"'></image>
</view>
    <view   class='flex flex-wrap align-center justify-between design_fd1_4'     >
            <view   class='flex flex-wrap align-center'     >
        <image class='design_fd1_4_c0_c0' mode="aspectFit"  :src='STATIC_URL+"32.png"'></image>
<text class='design_fd1_4_c0_c1' >高晓灵</text>
</view>
<image class='design_fd1_4_c1' mode="aspectFit"  :src='STATIC_URL+"36.png"'></image>
</view>
    <view   class='flex flex-wrap align-center justify-between design_fd1_5'     >
            <view   class='flex flex-wrap align-center'     >
        <image class='design_fd1_5_c0_c0' mode="aspectFit"  :src='STATIC_URL+"32.png"'></image>
<text class='design_fd1_5_c0_c1' >高晓灵</text>
</view>
<image class='design_fd1_5_c1' mode="aspectFit"  :src='STATIC_URL+"36.png"'></image>
</view>
</view>
<!---flex布局flex布局结束-->
    
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
            background:rgba(243, 246, 251, 1);background-size: 100% auto !important;
        }
    .design_flex_0{
        border-bottom:1px solid rgba(238, 238, 238, 1);background:#fff;background-size: 100% !important;width:750rpx;height:88rpx;overflow:hidden;z-index:10;top:0rpx;background-size:100% auto !important;
    }
    .design_fd0_2{
        width:100rpx;height:88rpx;margin:0rpx 32rpx 0rpx 0rpx;
    }
    .design_fd0_1{
        color:#000000;font-size:36rpx;font-weight:500;line-height:50rpx;
    }
    .design_fd0_0{
        width:100rpx;height:88rpx;margin:0rpx 0rpx 0rpx 32rpx;
    }
    .design_flex_1{
        background:#fff;background-size: 100% !important;background-size:100% auto !important;padding:0rpx 32rpx 0rpx 32rpx;
    }
    .design_fd1_5_c1{
        width:48rpx;height:28rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .design_fd1_5_c0_c1{
        color:#333333;font-size:32rpx;font-weight:500;line-height:45rpx;margin:0rpx 0rpx 0rpx 24rpx;
    }
    .design_fd1_5_c0_c0{
        width:100rpx;height:100rpx;border-radius:50rpx 50rpx 50rpx 50rpx;
    }
    .design_fd1_5{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:32rpx 0rpx 32rpx 0rpx;
    }
    .design_fd1_4_c1{
        width:48rpx;height:28rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .design_fd1_4_c0_c1{
        color:#333333;font-size:32rpx;font-weight:500;line-height:45rpx;margin:0rpx 0rpx 0rpx 24rpx;
    }
    .design_fd1_4_c0_c0{
        width:100rpx;height:100rpx;border-radius:50rpx 50rpx 50rpx 50rpx;
    }
    .design_fd1_4{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:32rpx 0rpx 32rpx 0rpx;
    }
    .design_fd1_3_c1{
        width:48rpx;height:28rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .design_fd1_3_c0_c1{
        color:#333333;font-size:32rpx;font-weight:500;line-height:45rpx;margin:0rpx 0rpx 0rpx 24rpx;
    }
    .design_fd1_3_c0_c0{
        width:100rpx;height:100rpx;border-radius:50rpx 50rpx 50rpx 50rpx;
    }
    .design_fd1_3{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:32rpx 0rpx 32rpx 0rpx;
    }
    .design_fd1_2_c1{
        width:100rpx;height:28rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .design_fd1_2_c0_c1{
        color:#333333;font-size:32rpx;font-weight:500;line-height:45rpx;margin:0rpx 0rpx 0rpx 24rpx;
    }
    .design_fd1_2_c0_c0{
        width:100rpx;height:100rpx;border-radius:50rpx 50rpx 50rpx 50rpx;
    }
    .design_fd1_2{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:32rpx 0rpx 32rpx 0rpx;
    }
    .design_fd1_1_c1{
        width:100rpx;height:28rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .design_fd1_1_c0_c1{
        color:#333333;font-size:32rpx;font-weight:500;line-height:45rpx;margin:0rpx 0rpx 0rpx 24rpx;
    }
    .design_fd1_1_c0_c0{
        width:100rpx;height:100rpx;border-radius:50rpx 50rpx 50rpx 50rpx;
    }
    .design_fd1_1{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:32rpx 0rpx 32rpx 0rpx;
    }
    .design_fd1_0_c1{
        width:110rpx;height:28rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .design_fd1_0_c0_c1{
        color:#333333;font-size:32rpx;font-weight:500;line-height:45rpx;margin:0rpx 0rpx 0rpx 24rpx;
    }
    .design_fd1_0_c0_c0{
        width:100rpx;height:100rpx;border-radius:50rpx 50rpx 50rpx 50rpx;
    }
    .design_fd1_0{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:32rpx 0rpx 32rpx 0rpx;
    }
</style>