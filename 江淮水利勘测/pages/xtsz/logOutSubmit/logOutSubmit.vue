<template>
    <view class="page" :style="themeColor">
    <view class="flex flex-direction flex-wrap align-stretch justify-center benben-position-layout flex logOutSubmit_flex_0"    :style="{height:(88+StatusBarRpx)+'rpx',paddingTop:StatusBarRpx+'rpx'}">
            <view   class='flex flex-wrap align-stretch justify-between logOutSubmit_fd0_0'     >
            <view   class='flex flex-wrap align-center logOutSubmit_fd0_0_c0'  @tap.stop="handleJumpDiy" data-type="back" data-url="1"   >
        <text class='fu-iconfont2  logOutSubmit_fd0_0_c0_c0' >&#xe794;</text>
</view>
    <view   class='flex flex-wrap align-center'     >
        <text class='logOutSubmit_fd0_0_c1_c0' >注销账号</text>
</view>
    <view   class='flex align-center justify-end logOutSubmit_fd0_0_c2'     >
        </view>
</view>

        </view>
<view :style="{height: (88+StatusBarRpx)+'rpx'}"  ></view>
<!---账号提交成功flex布局开始-->
 <view class="flex flex-direction flex-wrap align-center benben-flex-layout logOutSubmit_flex_1"  v-if= "unsetInfo.status=='-1'" >
        <image class='logOutSubmit_fd1_0' mode="aspectFit"  :src='STATIC_URL+"24.png"'></image>
<text class='logOutSubmit_fd1_1' >注销申请提交成功！</text>
<text class='logOutSubmit_fd1_2' >我们工作人员将会对您的账号进行审核，审核通过后， 账号将会被注销，请知悉</text>
</view>
<!---账号提交成功flex布局结束-->
<!---flex布局flex布局开始-->
 <view class="flex flex-direction flex-wrap align-center benben-flex-layout"  v-if= "unsetInfo.status!='-1'" >
        <image class='logOutSubmit_fd2_0' mode="aspectFit"  :src='STATIC_URL+"25.png"'></image>
<text class='logOutSubmit_fd2_1' >处理中</text>
    <view   class='flex flex-wrap align-center'     >
        <text class='logOutSubmit_fd2_2_c0' >注销理由：</text>
<text class='logOutSubmit_fd2_2_c1' >{{unsetInfo.reason}}</text>
</view>
</view>
<!---flex布局flex布局结束-->
    
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
            background:#fff;background-size: 100% auto !important;
        }
    .logOutSubmit_flex_0{
        background:#fff;background-size: 100% !important;width:750rpx;height:88rpx;overflow:hidden;z-index:10;top:0rpx;background-size:100% auto !important;
    }
    .logOutSubmit_fd0_0_c2{
        padding:0rpx 0rpx 0rpx 0rpx;width:100rpx;
    }
    .logOutSubmit_fd0_0_c1_c0{
        font-size:36rpx;font-weight:500;color:#333333;line-height:50rpx;
    }
    .logOutSubmit_fd0_0_c0_c0{
        font-size:36rpx;font-weight:400;color:#333;
    }
    .logOutSubmit_fd0_0_c0{
        width:100rpx;
    }
    .logOutSubmit_fd0_0{
        padding:0rpx 32rpx 0rpx 32rpx;line-height:88rpx;
    }
    .logOutSubmit_flex_1{
        padding:88rpx 39rpx 0rpx 39rpx;
    }
    .logOutSubmit_fd1_2{
        line-height:40rpx;font-size:28rpx;font-weight:400;color:#666666;text-align:center;
    }
    .logOutSubmit_fd1_1{
        font-size:34rpx;font-weight:700;color:#333333;margin:32rpx 0rpx 24rpx 0rpx;line-height:53rpx;
    }
    .logOutSubmit_fd1_0{
        width:232rpx;height:232rpx;margin:0rpx 0rpx 10rpx 0rpx;
    }
    .logOutSubmit_fd2_2_c1{
        color:#666666;font-size:28rpx;font-weight:700;line-height:40rpx;
    }
    .logOutSubmit_fd2_2_c0{
        color:#666666;font-size:28rpx;font-weight:700;line-height:40rpx;
    }
    .logOutSubmit_fd2_1{
        color:#333333;font-size:34rpx;font-weight:700;line-height:48rpx;margin:40rpx 0rpx 24rpx 0rpx;
    }
    .logOutSubmit_fd2_0{
        width:232rpx;height:232rpx;border-radius:0rpx 0rpx 0rpx 0rpx;margin:80rpx 0rpx 0rpx 0rpx;
    }
</style>