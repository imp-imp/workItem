<template>
    <view class="page" :style="themeColor">
    <view class="flex flex-wrap align-center justify-between benben-position-layout flex business_flex_0"    :style="{height:(88+StatusBarRpx)+'rpx',paddingTop:StatusBarRpx+'rpx'}">
            <view   class='flex flex-wrap align-center business_fd0_0'  @tap.stop="handleJumpDiy" data-type="back" data-url="1"   >
        <text class='fu-iconfont2' >&#xe794;</text>
</view>
<text class='business_fd0_1' >济源经营部</text>
    <view   class='flex flex-wrap align-center business_fd0_2'     >
        </view>

        </view>
<view :style="{height: (88+StatusBarRpx)+'rpx'}"  ></view>
<!---flex布局flex布局开始-->
 <view class="flex flex-direction flex-wrap align-stretch benben-flex-layout business_flex_1"   >
            <view   class='flex flex-wrap align-center business_fd1_0'     >
        <image class='business_fd1_0_c0' mode="aspectFit"  :src='STATIC_URL+"37.png"'></image>
<text class='business_fd1_0_c1' >搜索</text>
</view>
</view>
<!---flex布局flex布局结束-->
<!---flex布局flex布局开始-->
 <view class="flex flex-direction flex-wrap align-stretch benben-flex-layout business_flex_2"   >
            <view   class='flex flex-wrap align-center justify-between business_fd2_0'  @tap.stop="handleJumpDiy" data-type="navigateTo" :data-url="`/pages/mine/design/design`"   >
            <view   class='flex flex-wrap align-center'     >
        <text class='business_fd2_0_c0_c0' >设计一室(</text>
<text class='business_fd2_0_c0_c1' >6</text>
<text class='business_fd2_0_c0_c2' >）</text>
</view>
<image class='business_fd2_0_c1' mode="aspectFit"  :src='STATIC_URL+"27.png"'></image>
</view>
    <view   class='flex flex-wrap align-center justify-between business_fd2_1'  @tap.stop="handleJumpDiy" data-type="navigateTo" :data-url="`/pages/mine/design/design`"   >
            <view   class='flex flex-wrap align-center'     >
        <text class='business_fd2_1_c0_c0' >设计二室(</text>
<text class='business_fd2_1_c0_c1' >8</text>
<text class='business_fd2_1_c0_c2' >）</text>
</view>
<image class='business_fd2_1_c1' mode="aspectFit"  :src='STATIC_URL+"27.png"'></image>
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
            background:#fff;background-size: 100% auto !important;
        }
    .business_flex_0{
        border-bottom:1px solid rgba(238, 238, 238, 1);background:#fff;background-size: 100% !important;width:750rpx;height:88rpx;overflow:hidden;z-index:10;top:0rpx;background-size:100% auto !important;
    }
    .business_fd0_2{
        width:100rpx;height:88rpx;margin:0rpx 32rpx 0rpx 0rpx;
    }
    .business_fd0_1{
        color:#000000;font-size:36rpx;font-weight:500;line-height:50rpx;
    }
    .business_fd0_0{
        width:100rpx;height:88rpx;margin:0rpx 0rpx 0rpx 32rpx;
    }
    .business_flex_1{
        background:#fff;background-size: 100% !important;background-size:100% auto !important;padding:20rpx 32rpx 8rpx 32rpx;
    }
    .business_fd1_0_c1{
        color:#999999;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .business_fd1_0_c0{
        width:40rpx;height:40rpx;border-radius:0rpx 0rpx 0rpx 0rpx;margin:0rpx 14rpx 0rpx 0rpx;
    }
    .business_fd1_0{
        background:rgba(243, 246, 251, 0.95);background-size: 100% !important;border-radius:30rpx 30rpx 30rpx 30rpx;padding:16rpx 24rpx 16rpx 24rpx;
    }
    .business_flex_2{
        background:#fff;background-size: 100% !important;background-size:100% auto !important;padding:0rpx 32rpx 0rpx 32rpx;
    }
    .business_fd2_1_c1{
        width:14rpx;height:26rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .business_fd2_1_c0_c2{
        color:#333333;font-size:32rpx;font-weight:400;line-height:45rpx;
    }
    .business_fd2_1_c0_c1{
        color:#333333;font-size:32rpx;font-weight:400;line-height:45rpx;
    }
    .business_fd2_1_c0_c0{
        color:#333333;font-size:32rpx;font-weight:400;line-height:45rpx;
    }
    .business_fd2_1{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:32rpx 0rpx 32rpx 0rpx;
    }
    .business_fd2_0_c1{
        width:14rpx;height:26rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .business_fd2_0_c0_c2{
        color:#333333;font-size:32rpx;font-weight:400;line-height:45rpx;
    }
    .business_fd2_0_c0_c1{
        color:#333333;font-size:32rpx;font-weight:400;line-height:45rpx;
    }
    .business_fd2_0_c0_c0{
        color:#333333;font-size:32rpx;font-weight:400;line-height:45rpx;
    }
    .business_fd2_0{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:32rpx 0rpx 32rpx 0rpx;
    }
</style>