<template>
    <view class="page" :style="themeColor">
    <view class="flex flex-direction flex-wrap align-stretch justify-center benben-position-layout flex changePwd_flex_0"    :style="{height:(88+StatusBarRpx)+'rpx',paddingTop:StatusBarRpx+'rpx'}">
            <view   class='flex flex-wrap align-stretch justify-between changePwd_fd0_0'     >
            <view   class='flex flex-wrap align-center changePwd_fd0_0_c0'  @tap.stop="handleJumpDiy" data-type="back" data-url="1"   >
        <text class='fu-iconfont2  changePwd_fd0_0_c0_c0' >&#xe794;</text>
</view>
    <view   class='flex flex-wrap align-center'     >
        <text class='changePwd_fd0_0_c1_c0' >修改密码</text>
</view>
    <view   class='flex align-center justify-end changePwd_fd0_0_c2'     >
        </view>
</view>

        </view>
<view :style="{height: (88+StatusBarRpx)+'rpx'}"  ></view>
<!---修改密码flex布局开始-->
 <view class="flex flex-direction flex-wrap align-stretch changePwd_flex_1"   >
            <view   class='flex flex-wrap align-center justify-between changePwd_fd1_0'  @tap.stop="handleJumpDiy" data-type="navigateTo" :data-url="`/pages/xtsz/changePwdOldCode/changePwdOldCode`"   >
        <text class='changePwd_fd1_0_c0' >旧密码验证修改</text>
<text class='fu-iconfont2  changePwd_fd1_0_c1' >&#xE7F2;</text>
</view>
    <view   class='flex flex-wrap align-center justify-between changePwd_fd1_1'  @tap.stop="handleJumpDiy" data-type="navigateTo" :data-url="`/pages/xtsz/changePwdPhoneCode/changePwdPhoneCode`"   >
        <text class='changePwd_fd1_1_c0' >手机号验证修改</text>
<text class='fu-iconfont2  changePwd_fd1_1_c1' >&#xE7F2;</text>
</view>
</view>
<!---修改密码flex布局结束-->
    
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
    .changePwd_flex_0{
        border-bottom:1px solid #eee;background:#fff;background-size: 100% !important;width:750rpx;height:88rpx;overflow:hidden;z-index:10;top:0rpx;background-size:100% auto !important;
    }
    .changePwd_fd0_0_c2{
        padding:0rpx 0rpx 0rpx 0rpx;width:100rpx;
    }
    .changePwd_fd0_0_c1_c0{
        font-size:36rpx;font-weight:500;color:#333333;line-height:50rpx;
    }
    .changePwd_fd0_0_c0_c0{
        font-size:36rpx;font-weight:400;color:#333;
    }
    .changePwd_fd0_0_c0{
        width:100rpx;
    }
    .changePwd_fd0_0{
        padding:0rpx 32rpx 0rpx 32rpx;line-height:88rpx;
    }
    .changePwd_flex_1{
        background:#fff;background-size: 100% !important;font-size:32rpx;background-size:100% auto !important;padding:0rpx 0rpx 0rpx 32rpx;
    }
    .changePwd_fd1_1_c1{
        font-size:26rpx;color:rgba(191, 191, 191, 1);font-weight:400;margin:0rpx 32rpx 0rpx 0rpx;
    }
    .changePwd_fd1_1_c0{
        font-size:32rpx;font-weight:400;color:#333333;
    }
    .changePwd_fd1_1{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:32rpx 0rpx 32rpx 0rpx;
    }
    .changePwd_fd1_0_c1{
        font-size:26rpx;color:rgba(191, 191, 191, 1);font-weight:400;margin:0rpx 32rpx 0rpx 0rpx;
    }
    .changePwd_fd1_0_c0{
        font-size:32rpx;font-weight:400;color:#333333;
    }
    .changePwd_fd1_0{
        border-bottom:1px solid #eee;padding:32rpx 0rpx 32rpx 0rpx;
    }
</style>