<template>
    <view class="page" :style="themeColor">
    <view class="flex flex-wrap align-center justify-between benben-position-layout flex applicationCenter_flex_0"    :style="{height:(88+StatusBarRpx)+'rpx',paddingTop:StatusBarRpx+'rpx'}">
            <view   class='flex flex-wrap align-center applicationCenter_fd0_0'     >
        </view>
<text class='applicationCenter_fd0_1' >应用中心</text>
    <view   class='flex flex-wrap align-center applicationCenter_fd0_2'     >
        </view>

        </view>
<view :style="{height: (88+StatusBarRpx)+'rpx'}"  ></view>
<!---flex布局flex布局开始-->
 <view class="flex flex-direction flex-wrap align-stretch benben-flex-layout applicationCenter_flex_1"   >
            <view   class='flex flex-direction flex-wrap align-stretch applicationCenter_fd1_0'     >
        <text class='applicationCenter_fd1_0_c0' >办公管理</text>
    <view   class='flex flex-wrap align-center justify-between applicationCenter_fd1_0_c1'     >
            <view   class='flex flex-direction flex-wrap align-center'  @tap.stop="handleJumpDiy" data-type="navigateTo" :data-url="`/pages/applicationCenter/Journal/Journal`"   >
        <image class='applicationCenter_fd1_0_c1_c0_c0' mode="aspectFit"  :src='STATIC_URL+"64.png"'></image>
<text class='applicationCenter_fd1_0_c1_c0_c1' >日志中心</text>
</view>
    <view   class='flex flex-direction flex-wrap align-center'  @tap.stop="handleJumpDiy" data-type="navigateTo" :data-url="`/pages/applicationCenter/examinationList/examinationList`"   >
        <image class='applicationCenter_fd1_0_c1_c1_c0' mode="aspectFit"  :src='STATIC_URL+"66.png"'></image>
<text class='applicationCenter_fd1_0_c1_c1_c1' >审批列表</text>
</view>
    <view   class='flex flex-direction flex-wrap align-center'  @tap.stop="handleJumpDiy" data-type="navigateTo" :data-url="`/pages/applicationCenter/inform/inform`"   >
        <image class='applicationCenter_fd1_0_c1_c2_c0' mode="aspectFit"  :src='STATIC_URL+"67.png"'></image>
<text class='applicationCenter_fd1_0_c1_c2_c1' >公告通知</text>
</view>
</view>
    <view   class='flex flex-wrap align-center justify-between applicationCenter_fd1_0_c2'     >
            <view   class='flex flex-direction flex-wrap align-center'  @tap.stop="handleJumpDiy" data-type="navigateTo" :data-url="`/pages/applicationCenter/todo/todo`"   >
            <view   class='flex flex-wrap align-center applicationCenter_fd1_0_c2_c0_c0'     >
        <image class='applicationCenter_fd1_0_c2_c0_c0_c0' mode="aspectFit"  :src='STATIC_URL+"68.png"'></image>
<image class='applicationCenter_fd1_0_c2_c0_c0_c1' mode="aspectFit"  :src='STATIC_URL+"65.png"'></image>
</view>
<text class='applicationCenter_fd1_0_c2_c0_c1' >待办事项</text>
</view>
</view>
</view>
    <view   class='flex flex-direction flex-wrap align-stretch applicationCenter_fd1_1'     >
        <text class='applicationCenter_fd1_1_c0' >财务管理</text>
    <view   class='flex flex-wrap align-center justify-between applicationCenter_fd1_1_c1'     >
            <view   class='flex flex-direction flex-wrap align-center'  @tap.stop="handleJumpDiy" data-type="navigateTo" :data-url="`/pages/applicationCenter/expenseAccount/expenseAccount`"   >
        <image class='applicationCenter_fd1_1_c1_c0_c0' mode="aspectFit"  :src='STATIC_URL+"69.png"'></image>
<text class='applicationCenter_fd1_1_c1_c0_c1' >报销</text>
</view>
    <view   class='flex flex-direction flex-wrap align-center'  @tap.stop="handleJumpDiy" data-type="navigateTo" :data-url="`/pages/applicationCenter/cashAdvance/cashAdvance`"   >
        <image class='applicationCenter_fd1_1_c1_c1_c0' mode="aspectFit"  :src='STATIC_URL+"70.png"'></image>
<text class='applicationCenter_fd1_1_c1_c1_c1' >借支</text>
</view>
    <view   class='flex flex-direction flex-wrap align-center'  @tap.stop="handleJumpDiy" data-type="navigateTo" :data-url="`/pages/applicationCenter/review/review`"   >
        <image class='applicationCenter_fd1_1_c1_c2_c0' mode="aspectFit"  :src='STATIC_URL+"71.png"'></image>
<text class='applicationCenter_fd1_1_c1_c2_c1' >回款</text>
</view>
</view>
    <view   class='flex flex-wrap align-center applicationCenter_fd1_1_c2'     >
            <view   class='flex flex-direction flex-wrap align-center applicationCenter_fd1_1_c2_c0'  @tap.stop="handleJumpDiy" data-type="navigateTo" :data-url="`/pages/applicationCenter/InvoicingSubmitted/InvoicingSubmitted`"   >
            <view   class='flex flex-wrap align-center applicationCenter_fd1_1_c2_c0_c0'     >
        <image class='applicationCenter_fd1_1_c2_c0_c0_c0' mode="aspectFit"  :src='STATIC_URL+"72.png"'></image>
</view>
<text class='applicationCenter_fd1_1_c2_c0_c1' >开票</text>
</view>
    <view   class='flex flex-direction flex-wrap align-center'  @tap.stop="handleJumpDiy" data-type="navigateTo" :data-url="`/pages/applicationCenter/degression/degression`"   >
            <view   class='flex flex-wrap align-center applicationCenter_fd1_1_c2_c1_c0'     >
        <image class='applicationCenter_fd1_1_c2_c1_c0_c0' mode="aspectFit"  :src='STATIC_URL+"73.png"'></image>
</view>
<text class='applicationCenter_fd1_1_c2_c1_c1' >成本</text>
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
            background:url(/static/images/41.png) no-repeat;background-size: 100% auto !important;
        }
    .applicationCenter_flex_0{
        background:url(/static/images/41.png) no-repeat;background-size: 100% !important;width:750rpx;height:88rpx;overflow:hidden;z-index:10;top:0rpx;background-size:100% auto !important;
    }
    .applicationCenter_fd0_2{
        width:100rpx;height:88rpx;margin:0rpx 32rpx 0rpx 0rpx;
    }
    .applicationCenter_fd0_1{
        color:#fff;font-size:36rpx;font-weight:500;line-height:50rpx;
    }
    .applicationCenter_fd0_0{
        width:100rpx;height:88rpx;margin:0rpx 0rpx 0rpx 32rpx;
    }
    .applicationCenter_flex_1{
        padding:0rpx 24rpx 0rpx 24rpx;
    }
    .applicationCenter_fd1_1_c2_c1_c1{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .applicationCenter_fd1_1_c2_c1_c0_c0{
        width:124rpx;height:124rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .applicationCenter_fd1_1_c2_c1_c0{
        position:relative;
    }
    .applicationCenter_fd1_1_c2_c0_c1{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .applicationCenter_fd1_1_c2_c0_c0_c0{
        width:124rpx;height:124rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .applicationCenter_fd1_1_c2_c0_c0{
        position:relative;
    }
    .applicationCenter_fd1_1_c2_c0{
        margin:0rpx 115rpx 0rpx 0rpx;
    }
    .applicationCenter_fd1_1_c2{
        padding:0rpx 18rpx 0rpx 18rpx;margin:20rpx 0rpx 0rpx 0rpx;
    }
    .applicationCenter_fd1_1_c1_c2_c1{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .applicationCenter_fd1_1_c1_c2_c0{
        width:124rpx;height:124rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .applicationCenter_fd1_1_c1_c1_c1{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .applicationCenter_fd1_1_c1_c1_c0{
        width:124rpx;height:124rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .applicationCenter_fd1_1_c1_c0_c1{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .applicationCenter_fd1_1_c1_c0_c0{
        width:124rpx;height:124rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .applicationCenter_fd1_1_c1{
        padding:0rpx 18rpx 0rpx 18rpx;margin:20rpx 0rpx 0rpx 0rpx;
    }
    .applicationCenter_fd1_1_c0{
        color:#333333;font-size:32rpx;font-weight:500;line-height:45rpx;
    }
    .applicationCenter_fd1_1{
        background:#fff;background-size: 100% !important;border-radius:16rpx 16rpx 16rpx 16rpx;padding:32rpx 32rpx 32rpx 32rpx;margin:24rpx 0rpx 0rpx 0rpx;
    }
    .applicationCenter_fd1_0_c2_c0_c1{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .applicationCenter_fd1_0_c2_c0_c0_c1{
        width:20rpx;height:20rpx;border-radius:0rpx 0rpx 0rpx 0rpx;position:absolute;top:10rpx;right:18rpx;
    }
    .applicationCenter_fd1_0_c2_c0_c0_c0{
        width:124rpx;height:124rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .applicationCenter_fd1_0_c2_c0_c0{
        position:relative;
    }
    .applicationCenter_fd1_0_c2{
        padding:0rpx 18rpx 0rpx 18rpx;margin:20rpx 0rpx 0rpx 0rpx;
    }
    .applicationCenter_fd1_0_c1_c2_c1{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .applicationCenter_fd1_0_c1_c2_c0{
        width:124rpx;height:124rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .applicationCenter_fd1_0_c1_c1_c1{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .applicationCenter_fd1_0_c1_c1_c0{
        width:124rpx;height:124rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .applicationCenter_fd1_0_c1_c0_c1{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .applicationCenter_fd1_0_c1_c0_c0{
        width:124rpx;height:124rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .applicationCenter_fd1_0_c1{
        padding:0rpx 18rpx 0rpx 18rpx;margin:20rpx 0rpx 0rpx 0rpx;
    }
    .applicationCenter_fd1_0_c0{
        color:#333333;font-size:32rpx;font-weight:500;line-height:45rpx;
    }
    .applicationCenter_fd1_0{
        background:#fff;background-size: 100% !important;border-radius:16rpx 16rpx 16rpx 16rpx;padding:32rpx 32rpx 32rpx 32rpx;margin:69rpx 0rpx 0rpx 0rpx;
    }
</style>