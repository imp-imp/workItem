<template>
    <view class="page" :style="themeColor">
    <view class="flex flex-direction flex-wrap align-stretch justify-center benben-position-layout flex cardAndSafe_flex_0"    :style="{height:(88+StatusBarRpx)+'rpx',paddingTop:StatusBarRpx+'rpx'}">
            <view   class='flex flex-wrap align-stretch justify-between cardAndSafe_fd0_0'     >
            <view   class='flex flex-wrap align-center cardAndSafe_fd0_0_c0'  @tap.stop="handleJumpDiy" data-type="back" data-url="1"   >
        <text class='fu-iconfont2  cardAndSafe_fd0_0_c0_c0' >&#xe794;</text>
</view>
    <view   class='flex flex-wrap align-center'     >
        <text class='cardAndSafe_fd0_0_c1_c0' >账号与安全</text>
</view>
    <view   class='flex align-center justify-end cardAndSafe_fd0_0_c2'     >
        </view>
</view>

        </view>
<view :style="{height: (88+StatusBarRpx)+'rpx'}"  ></view>

 <view class="flex flex-direction flex-wrap align-stretch cardAndSafe_flex_1"   >
            <view   class='flex flex-wrap align-center justify-between cardAndSafe_fd1_0'  @tap.stop="handleJumpDiy" data-type="navigateTo" :data-url="`/pages/xtsz/changePwd/changePwd`"   >
        <text class='cardAndSafe_fd1_0_c0' >修改密码</text>
<text class='fu-iconfont2  cardAndSafe_fd1_0_c1' >&#xE7F2;</text>
</view>
    <view   class='flex flex-wrap align-center justify-between cardAndSafe_fd1_1'  @tap.stop="handleJumpDiy" data-type="navigateTo" :data-url="`/pages/xtsz/changeBingDingPhone/changeBingDingPhone`"   >
        <text class='cardAndSafe_fd1_1_c0' >修改绑定手机号</text>
<text class='fu-iconfont2  cardAndSafe_fd1_1_c1' >&#xE7F2;</text>
</view>
</view>

<!---账号与安全注销按钮flex布局开始-->
 <view class="flex benben-flex-layout flex-wrap align-center cardAndSafe_flex_2"   >
        <button class='cardAndSafe_fd2_0' @tap.stop="handleJumpDiy" data-type="navigateTo" :data-url="`/pages/xtsz/CancelAccount/CancelAccount`"  >注销账号</button>
</view>
<!---账号与安全注销按钮flex布局结束-->
    
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
    .cardAndSafe_flex_0{
        border-bottom:1px solid #eee;background:#fff;background-size: 100% !important;width:750rpx;height:88rpx;overflow:hidden;z-index:10;top:0rpx;background-size:100% auto !important;
    }
    .cardAndSafe_fd0_0_c2{
        padding:0rpx 0rpx 0rpx 0rpx;width:100rpx;
    }
    .cardAndSafe_fd0_0_c1_c0{
        font-size:36rpx;font-weight:500;color:#333333;line-height:50rpx;
    }
    .cardAndSafe_fd0_0_c0_c0{
        font-size:36rpx;font-weight:400;color:#333;
    }
    .cardAndSafe_fd0_0_c0{
        width:100rpx;
    }
    .cardAndSafe_fd0_0{
        padding:0rpx 32rpx 0rpx 32rpx;line-height:88rpx;
    }
    .cardAndSafe_flex_1{
        background:#fff;background-size: 100% !important;font-size:32rpx;background-size:100% auto !important;padding:0rpx 32rpx 0rpx 32rpx;
    }
    .cardAndSafe_fd1_1_c1{
        font-size:26rpx;color:rgba(191, 191, 191, 1);font-weight:400;
    }
    .cardAndSafe_fd1_1_c0{
        font-size:32rpx;font-weight:400;color:#333333;
    }
    .cardAndSafe_fd1_1{
        padding:32rpx 0rpx 32rpx 0rpx;
    }
    .cardAndSafe_fd1_0_c1{
        font-size:26rpx;color:rgba(191, 191, 191, 1);font-weight:400;
    }
    .cardAndSafe_fd1_0_c0{
        font-size:32rpx;font-weight:400;color:#333333;
    }
    .cardAndSafe_fd1_0{
        border-bottom:1px solid #eee;padding:32rpx 0rpx 32rpx 0rpx;
    }
    .cardAndSafe_flex_2{
        background:#FFFFFF;background-size: 100% !important;margin:40rpx 0rpx 0rpx 0rpx;
    }
    .cardAndSafe_fd2_0{
        background:#FFFFFF;background-size: 100% !important;font-size:32rpx;color:rgba(11, 24, 152, 1);width:750rpx;height:110rpx;line-height:110rpx;font-weight:500;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
</style>