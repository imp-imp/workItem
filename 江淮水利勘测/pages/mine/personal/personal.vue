<template>
    <view class="page" :style="themeColor">
    <view class="flex flex-wrap align-center justify-between benben-position-layout flex personal_flex_0"    :style="{height:(88+StatusBarRpx)+'rpx',paddingTop:StatusBarRpx+'rpx'}">
            <view   class='flex flex-wrap align-center personal_fd0_0'  @tap.stop="handleJumpDiy" data-type="back" data-url="1"   >
        <text class='fu-iconfont2' >&#xe794;</text>
</view>
<text class='personal_fd0_1' >我的资料</text>
    <view   class='flex flex-wrap align-center personal_fd0_2'     >
        </view>

        </view>
<view :style="{height: (88+StatusBarRpx)+'rpx'}"  ></view>
<!---flex布局flex布局开始-->
 <view class="flex benben-flex-layout flex-wrap align-center personal_flex_1"   >
        <image class='personal_fd1_0' mode="aspectFit"  :src='STATIC_URL+"31.png"'></image>
    <view   class='flex flex-direction flex-wrap align-stretch flex-sub personal_fd1_1'     >
        <text class='personal_fd1_1_c0' >陈沉沉</text>
<text class='personal_fd1_1_c1' >江淮水利设计有限公司</text>
</view>
</view>
<!---flex布局flex布局结束-->
<!---flex布局flex布局开始-->
 <view class="flex flex-direction flex-wrap align-stretch benben-flex-layout personal_flex_2"   >
        <text class='personal_fd2_0' >个人信息</text>
    <view   class='flex flex-wrap align-center justify-between personal_fd2_1'     >
        <text class='personal_fd2_1_c0' >企业</text>
<text class='personal_fd2_1_c1' >江淮水利勘测有限公司</text>
</view>
    <view   class='flex flex-wrap align-center justify-between personal_fd2_2'     >
        <text class='personal_fd2_2_c0' >姓名</text>
<text class='personal_fd2_2_c1' >陈沉沉</text>
</view>
    <view   class='flex flex-wrap align-center justify-between personal_fd2_3'     >
        <text class='personal_fd2_3_c0' >职位</text>
<text class='personal_fd2_3_c1' >区域总经理</text>
</view>
    <view   class='flex flex-wrap align-center justify-between personal_fd2_4'     >
        <text class='personal_fd2_4_c0' >部门</text>
<text class='personal_fd2_4_c1' >南阳区域-经营部</text>
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
    .personal_flex_0{
        border-bottom:1px solid rgba(238, 238, 238, 1);background:#fff;background-size: 100% !important;width:750rpx;height:88rpx;overflow:hidden;z-index:10;top:0rpx;background-size:100% auto !important;
    }
    .personal_fd0_2{
        width:100rpx;height:88rpx;margin:0rpx 32rpx 0rpx 0rpx;
    }
    .personal_fd0_1{
        color:#000000;font-size:36rpx;font-weight:500;line-height:50rpx;
    }
    .personal_fd0_0{
        width:100rpx;height:88rpx;margin:0rpx 0rpx 0rpx 32rpx;
    }
    .personal_flex_1{
        background:#fff;background-size: 100% !important;background-size:100% auto !important;padding:32rpx 32rpx 32rpx 32rpx;
    }
    .personal_fd1_1_c1{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;margin:5rpx 0rpx 0rpx 0rpx;
    }
    .personal_fd1_1_c0{
        color:#333333;font-size:36rpx;font-weight:500;line-height:50rpx;
    }
    .personal_fd1_1{
        margin:0rpx 0rpx 0rpx 19rpx;
    }
    .personal_fd1_0{
        width:146rpx;height:139rpx;border-radius:68rpx 68rpx 68rpx 68rpx;
    }
    .personal_flex_2{
        background:#fff;background-size: 100% !important;background-size:100% auto !important;padding:0rpx 32rpx 0rpx 32rpx;margin:20rpx 0rpx 0rpx 0rpx;
    }
    .personal_fd2_4_c1{
        color:#666666;font-size:32rpx;font-weight:400;line-height:45rpx;
    }
    .personal_fd2_4_c0{
        color:#333333;font-size:32rpx;font-weight:400;line-height:45rpx;
    }
    .personal_fd2_4{
        padding:32rpx 0rpx 32rpx 0rpx;
    }
    .personal_fd2_3_c1{
        color:#666666;font-size:32rpx;font-weight:400;line-height:45rpx;
    }
    .personal_fd2_3_c0{
        color:#333333;font-size:32rpx;font-weight:400;line-height:45rpx;
    }
    .personal_fd2_3{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:32rpx 0rpx 32rpx 0rpx;
    }
    .personal_fd2_2_c1{
        color:#666666;font-size:32rpx;font-weight:400;line-height:45rpx;
    }
    .personal_fd2_2_c0{
        color:#333333;font-size:32rpx;font-weight:400;line-height:45rpx;
    }
    .personal_fd2_2{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:32rpx 0rpx 32rpx 0rpx;
    }
    .personal_fd2_1_c1{
        color:#666666;font-size:32rpx;font-weight:400;line-height:45rpx;
    }
    .personal_fd2_1_c0{
        color:#333333;font-size:32rpx;font-weight:400;line-height:45rpx;
    }
    .personal_fd2_1{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:32rpx 0rpx 32rpx 0rpx;
    }
    .personal_fd2_0{
        color:#333333;font-size:32rpx;font-weight:500;line-height:45rpx;margin:32rpx 0rpx 0rpx 0rpx;
    }
</style>