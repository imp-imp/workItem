<template>
    <view class="page" :style="themeColor">
    <view class="flex flex-direction flex-wrap align-stretch justify-center benben-position-layout flex CancelAccount_flex_0"    :style="{height:(88+StatusBarRpx)+'rpx',paddingTop:StatusBarRpx+'rpx'}">
            <view   class='flex flex-wrap align-stretch justify-between CancelAccount_fd0_0'     >
            <view   class='flex flex-wrap align-center CancelAccount_fd0_0_c0'  @tap.stop="handleJumpDiy" data-type="back" data-url="1"   >
        <text class='fu-iconfont2  CancelAccount_fd0_0_c0_c0' >&#xe794;</text>
</view>
    <view   class='flex flex-wrap align-center'     >
        <text class='CancelAccount_fd0_0_c1_c0' >注销账号</text>
</view>
    <view   class='flex align-center justify-end CancelAccount_fd0_0_c2'     >
        </view>
</view>

        </view>
<view :style="{height: (88+StatusBarRpx)+'rpx'}"  ></view>
<!---注销账号协议flex布局开始-->
 <view class="flex flex-direction flex-wrap align-stretch CancelAccount_flex_1"   >
        <text class='CancelAccount_fd1_0' >{{unsetInfo.rule}}</text>
</view>
<!---注销账号协议flex布局结束-->
    <view class="flex flex-wrap align-stretch justify-center benben-position-layout flex CancelAccount_flex_2"    >
        <button class='flex-sub CancelAccount_fd2_0' @tap.stop="getjump()"  >填写注销申请</button>

        </view>
<view :style="{height: '110rpx'}"  ></view>
    
    </view>
</template>
<script>
    
    export default {
        components:{},
        
        data(){
			return {"unsetInfo":{"status":"","rule":"","reason":""}};
		},
		computed:{
            themeColor() {
              return this.$store.getters.themeColor
            },
            
		},
		watch:{},
		onLoad(options){
            this.getUnset()
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
                            //判断跳转
                 getjump(){
                        if(this.unsetInfo.status=='-1'){
            this.$urouter.navigateTo(`/pages/xtsz/logOutReason/logOutReason`);
    }
    if(this.unsetInfo.status!='-1'){
            this.$urouter.navigateTo(`/pages/xtsz/logOutReason/logOutReason`);
    }
                return
                },
                //获取账户注销状态和协议
                async getUnset(){
                    let resData = await this.$api.post(global.apiUrls.post60fa2181a3e84)
if (resData.data.code != 1) {
  this.$message.info(resData.data.msg)
  return
}
this.unsetInfo= resData.data.data
                }
		}
    };
</script> 
<style lang="scss" scoped>
           .page{
            min-height: calc(100vh - var(--window-bottom));
            background:rgba(243, 246, 251, 1);background-size: 100% auto !important;
        }
    .CancelAccount_flex_0{
        border-bottom:1px solid #eee;background:#fff;background-size: 100% !important;width:750rpx;height:88rpx;overflow:hidden;z-index:10;top:0rpx;background-size:100% auto !important;
    }
    .CancelAccount_fd0_0_c2{
        padding:0rpx 0rpx 0rpx 0rpx;width:100rpx;
    }
    .CancelAccount_fd0_0_c1_c0{
        font-size:36rpx;font-weight:500;color:#333333;line-height:50rpx;
    }
    .CancelAccount_fd0_0_c0_c0{
        font-size:36rpx;font-weight:400;color:#333;
    }
    .CancelAccount_fd0_0_c0{
        width:100rpx;
    }
    .CancelAccount_fd0_0{
        padding:0rpx 32rpx 0rpx 32rpx;line-height:88rpx;
    }
    .CancelAccount_flex_1{
        background:rgba(243, 246, 251, 1);background-size: 100% !important;font-size:32rpx;background-size:100% auto !important;padding:32rpx 32rpx 32rpx 32rpx;
    }
    .CancelAccount_fd1_0{
        line-height:40rpx;font-size:28rpx;font-weight:500;color:#333333;
    }
    .CancelAccount_flex_2{
        width:750rpx;height:110rpx;overflow:hidden;z-index:10;bottom:calc(0rpx + var(--window-bottom));
    }
    .CancelAccount_fd2_0{
        background:#fff;background-size: 100% !important;font-size:32rpx;color:rgba(11, 24, 152, 1);height:110rpx;line-height:110rpx;font-weight:500;border-radius:0rpx 0rpx 0rpx 0rpx;width:750rpx;
    }
</style>