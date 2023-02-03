<template>
    <view class="page" :style="themeColor">
    <view class="flex flex-wrap align-center justify-between benben-position-layout flex approvals_flex_0"    :style="{height:(88+StatusBarRpx)+'rpx',paddingTop:StatusBarRpx+'rpx'}">
            <view   class='flex flex-wrap align-center approvals_fd0_0'  @tap.stop="handleJumpDiy" data-type="back" data-url="1"   >
        <text class='fu-iconfont2' >&#xe794;</text>
</view>
<text class='approvals_fd0_1' >审批进度</text>
    <view   class='flex flex-wrap align-center approvals_fd0_2'     >
        </view>

        </view>
<view :style="{height: (88+StatusBarRpx)+'rpx'}"  ></view>
<!---flex布局flex布局开始-->
 <view class="flex flex-direction flex-wrap align-stretch benben-flex-layout approvals_flex_1"   >
            <view   class='flex flex-wrap align-start approvals_fd1_0'     >
            <view   class='flex flex-direction flex-wrap align-center'     >
        <image class='approvals_fd1_0_c0_c0' mode="aspectFit"  :src='STATIC_URL+"60.png"'></image>
        
            <view class='flex  approvals_fd1_0_c0_c1'   ></view>
        
<image class='approvals_fd1_0_c0_c2' mode="aspectFit"  :src='STATIC_URL+"60.png"'></image>
        
            <view class='flex  approvals_fd1_0_c0_c3'   ></view>
        
<image class='approvals_fd1_0_c0_c4' mode="aspectFit"  :src='STATIC_URL+"60.png"'></image>
</view>
    <view   class='flex flex-direction flex-wrap align-stretch flex-sub approvals_fd1_0_c1'     >
            <view   class='flex flex-wrap align-center'     >
        <text class='approvals_fd1_0_c1_c0_c0' >员工</text>
<image class='approvals_fd1_0_c1_c0_c1' mode="aspectFit"  :src='STATIC_URL+"32.png"'></image>
<text class='approvals_fd1_0_c1_c0_c2' >陈沉沉</text>
<text class='approvals_fd1_0_c1_c0_c3' >发起审批</text>
</view>
    <view   class='flex flex-wrap align-center approvals_fd1_0_c1_c1'     >
        <text class='approvals_fd1_0_c1_c1_c0' >2022-08-08</text>
<text class='approvals_fd1_0_c1_c1_c1' >12:02</text>
</view>
    <view   class='flex flex-wrap align-center approvals_fd1_0_c1_c2'     >
        <text class='approvals_fd1_0_c1_c2_c0' >经理</text>
<image class='approvals_fd1_0_c1_c2_c1' mode="aspectFit"  :src='STATIC_URL+"32.png"'></image>
<text class='approvals_fd1_0_c1_c2_c2' >张章章</text>
<text class='approvals_fd1_0_c1_c2_c3' >审批通过</text>
</view>
    <view   class='flex flex-wrap align-center approvals_fd1_0_c1_c3'     >
        <text class='approvals_fd1_0_c1_c3_c0' >2022-08-08</text>
<text class='approvals_fd1_0_c1_c3_c1' >12:02</text>
</view>
    <view   class='flex flex-wrap align-center approvals_fd1_0_c1_c4'     >
        <text class='approvals_fd1_0_c1_c4_c0' >抄送人（已抄送4人）</text>
</view>
    <view   class='flex flex-wrap align-center approvals_fd1_0_c1_c5'     >
            <view   class='flex flex-direction flex-wrap align-center'     >
        <image class='approvals_fd1_0_c1_c5_c0_c0' mode="aspectFit"  :src='STATIC_URL+"32.png"'></image>
<text class='approvals_fd1_0_c1_c5_c0_c1' >温温问
(总经理)</text>
</view>
</view>
</view>
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
    .approvals_flex_0{
        border-bottom:1px solid rgba(238, 238, 238, 1);background:#fff;background-size: 100% !important;width:750rpx;height:88rpx;overflow:hidden;z-index:10;top:0rpx;background-size:100% auto !important;
    }
    .approvals_fd0_2{
        width:100rpx;height:88rpx;margin:0rpx 32rpx 0rpx 0rpx;
    }
    .approvals_fd0_1{
        color:#000000;font-size:36rpx;font-weight:500;line-height:50rpx;
    }
    .approvals_fd0_0{
        width:100rpx;height:88rpx;margin:0rpx 0rpx 0rpx 32rpx;
    }
    .approvals_flex_1{
        padding:0rpx 32rpx 0rpx 32rpx;
    }
    .approvals_fd1_0_c1_c5_c0_c1{
        color:#9EA7B7;font-size:20rpx;font-weight:400;line-height:24rpx;text-align:center;margin:6rpx 0rpx 0rpx 0rpx;
    }
    .approvals_fd1_0_c1_c5_c0_c0{
        width:36rpx;height:36rpx;border-radius:18rpx 18rpx 18rpx 18rpx;
    }
    .approvals_fd1_0_c1_c5{
        margin:16rpx 0rpx 0rpx 0rpx;
    }
    .approvals_fd1_0_c1_c4_c0{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .approvals_fd1_0_c1_c4{
        margin:72rpx 0rpx 0rpx 0rpx;
    }
    .approvals_fd1_0_c1_c3_c1{
        color:#333333;font-size:24rpx;font-weight:400;line-height:33rpx;margin:0rpx 0rpx 0rpx 14rpx;
    }
    .approvals_fd1_0_c1_c3_c0{
        color:#333333;font-size:24rpx;font-weight:400;line-height:33rpx;
    }
    .approvals_fd1_0_c1_c3{
        margin:16rpx 0rpx 0rpx 0rpx;
    }
    .approvals_fd1_0_c1_c2_c3{
        color:rgba(29, 185, 153, 1);font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .approvals_fd1_0_c1_c2_c2{
        color:#9EA7B7;font-size:24rpx;font-weight:400;line-height:40rpx;margin:0rpx 24rpx 0rpx 0rpx;
    }
    .approvals_fd1_0_c1_c2_c1{
        width:36rpx;height:36rpx;border-radius:18rpx 18rpx 18rpx 18rpx;margin:0rpx 10rpx 0rpx 24rpx;
    }
    .approvals_fd1_0_c1_c2_c0{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .approvals_fd1_0_c1_c2{
        margin:72rpx 0rpx 0rpx 0rpx;
    }
    .approvals_fd1_0_c1_c1_c1{
        color:#333333;font-size:24rpx;font-weight:400;line-height:33rpx;margin:0rpx 0rpx 0rpx 14rpx;
    }
    .approvals_fd1_0_c1_c1_c0{
        color:#333333;font-size:24rpx;font-weight:400;line-height:33rpx;
    }
    .approvals_fd1_0_c1_c1{
        margin:16rpx 0rpx 0rpx 0rpx;
    }
    .approvals_fd1_0_c1_c0_c3{
        color:#0B1898;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .approvals_fd1_0_c1_c0_c2{
        color:#9EA7B7;font-size:24rpx;font-weight:400;line-height:40rpx;margin:0rpx 24rpx 0rpx 0rpx;
    }
    .approvals_fd1_0_c1_c0_c1{
        width:36rpx;height:36rpx;border-radius:18rpx 18rpx 18rpx 18rpx;margin:0rpx 10rpx 0rpx 24rpx;
    }
    .approvals_fd1_0_c1_c0_c0{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .approvals_fd1_0_c1{
        margin:0rpx 0rpx 0rpx 21rpx;
    }
    .approvals_fd1_0_c0_c4{
        width:32rpx;height:32rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .approvals_fd1_0_c0_c3{
        background:rgba(39, 181, 80, 1);background-size: 100% !important;width:1rpx;height:129rpx;margin:0rpx 10rpx 0rpx 10rpx;transform:scaleX(0.5);
    }
    .approvals_fd1_0_c0_c2{
        width:32rpx;height:32rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .approvals_fd1_0_c0_c1{
        background:rgba(39, 181, 80, 1);background-size: 100% !important;width:1rpx;height:129rpx;margin:0rpx 10rpx 0rpx 10rpx;transform:scaleX(0.5);
    }
    .approvals_fd1_0_c0_c0{
        width:32rpx;height:32rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .approvals_fd1_0{
        margin:52rpx 0rpx 0rpx 0rpx;
    }
</style>