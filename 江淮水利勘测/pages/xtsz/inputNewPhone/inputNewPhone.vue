<template>
    <view class="page" :style="themeColor">
    <view class="flex flex-direction flex-wrap align-stretch justify-center benben-position-layout flex inputNewPhone_flex_0"    :style="{height:(88+StatusBarRpx)+'rpx',paddingTop:StatusBarRpx+'rpx'}">
            <view   class='flex flex-wrap align-stretch justify-between inputNewPhone_fd0_0'     >
            <view   class='flex flex-wrap align-center inputNewPhone_fd0_0_c0'  @tap.stop="handleJumpDiy" data-type="back" data-url="1"   >
        <text class='fu-iconfont2  inputNewPhone_fd0_0_c0_c0' >&#xe794;</text>
</view>
    <view   class='flex flex-wrap align-center'     >
        <text class='inputNewPhone_fd0_0_c1_c0' >绑定新手机</text>
</view>
    <view   class='flex align-center justify-end inputNewPhone_fd0_0_c2'     >
        </view>
</view>

        </view>
<view :style="{height: (88+StatusBarRpx)+'rpx'}"  ></view>
<!---输入新的手机号-表单flex布局开始-->
 <view class="flex flex-direction flex-wrap align-stretch inputNewPhone_flex_1"   >
            <view   class='flex flex-wrap align-center inputNewPhone_fd1_0'     >
        <text class='inputNewPhone_fd1_0_c0' >新手机号码</text>
<input class='flex-sub inputNewPhone_fd1_0_c1'  type="number" :focus='true' placeholder="请输入新的手机号" confirm-type="done" :maxlength="11" placeholder-style="color:#999;font-size:32rpx"  v-model="mobile" />
</view>
    <view   class='flex flex-wrap align-center inputNewPhone_fd1_1'     >
        <text class='inputNewPhone_fd1_1_c0' >短信验证</text>
<input class='flex-sub inputNewPhone_fd1_1_c1'  type="number" placeholder="请输入验证码" confirm-type="done" :maxlength="6" placeholder-style="color:#999;font-size:32rpx"  v-model="code" />
<benben-send-verification-code class='flex  inputNewPhone_fd1_1_c2' after-text='后重新获取' before-text='获取短信验证' type='5'  :phone="mobile"></benben-send-verification-code>
</view>
</view>
<!---输入新的手机号-表单flex布局结束-->
    <view class="flex flex-wrap align-center justify-center benben-position-layout flex inputNewPhone_flex_2"    :style="{top:(428+StatusBarRpx)+'rpx'}">
        <button class='flex-sub inputNewPhone_fd2_0' @tap.stop="getcheckCode()"  >完成</button>

        </view>
<view :style="{height: '88rpx'}"  ></view>
    
    </view>
</template>
<script>
    import {validate} from '@/common/utils/validate.js'
    export default {
        components:{},
        
        data(){
			return {"mobile":"","code":""};
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
                            //校验
                 getcheckCode(){
                                if(!validate(this.mobile,'require')){
                 this.$message.info('请输入手机号');
                 return false;
            }
            if(!validate(this.mobile,'phone')){
                 this.$message.info('请输入正确的手机号');
                 return false;
            }
            if(!validate(this.code,'require')){
                 this.$message.info('请输入验证码');
                 return false;
            }
            if(!validate(this.code,'captcha')){
                 this.$message.info('请输入正确的验证码');
                 return false;
            }
            if(!validate(this.code,'length','6')){
                 this.$message.info('请输入6位验证码');
                 return false;
            }
            uni.navigateBack({
              delta:2
            });
                }
		}
    };
</script> 
<style lang="scss" scoped>
           .page{
            min-height: calc(100vh - var(--window-bottom));
            background:#fff;background-size: 100% auto !important;
        }
    .inputNewPhone_flex_0{
        border-bottom:1px solid #eee;background:#fff;background-size: 100% !important;width:750rpx;height:88rpx;overflow:hidden;z-index:10;top:0rpx;background-size:100% auto !important;
    }
    .inputNewPhone_fd0_0_c2{
        padding:0rpx 0rpx 0rpx 0rpx;width:100rpx;
    }
    .inputNewPhone_fd0_0_c1_c0{
        font-size:36rpx;font-weight:500;color:#333333;line-height:50rpx;
    }
    .inputNewPhone_fd0_0_c0_c0{
        font-size:36rpx;font-weight:400;color:#333;
    }
    .inputNewPhone_fd0_0_c0{
        width:100rpx;
    }
    .inputNewPhone_fd0_0{
        padding:0rpx 32rpx 0rpx 32rpx;line-height:88rpx;
    }
    .inputNewPhone_flex_1{
        background:#fff;background-size: 100% !important;font-size:32rpx;background-size:100% auto !important;padding:0rpx 32rpx 0rpx 32rpx;
    }
    .inputNewPhone_fd1_1_c2{
        font-size:32rpx;font-weight:400;color:rgba(59, 157, 255, 1);
    }
    .inputNewPhone_fd1_1_c1{
        line-height:45rpx;color:#333;font-size:32rpx;font-weight:400;
    }
    .inputNewPhone_fd1_1_c0{
        font-size:32rpx;font-weight:400;font-style:normal;color:#333;width:182rpx;
    }
    .inputNewPhone_fd1_1{
        padding:32rpx 0rpx 32rpx 0rpx;
    }
    .inputNewPhone_fd1_0_c1{
        line-height:45rpx;font-size:28rpx;font-weight:400;color:#333;
    }
    .inputNewPhone_fd1_0_c0{
        font-size:32rpx;font-weight:400;font-style:normal;color:#333;width:182rpx;
    }
    .inputNewPhone_fd1_0{
        border-bottom:1px solid #eee;padding:32rpx 0rpx 32rpx 0rpx;
    }
    .inputNewPhone_flex_2{
        width:750rpx;height:88rpx;overflow:hidden;z-index:10;top:428rpx;
    }
    .inputNewPhone_fd2_0{
        background:rgba(11, 24, 152, 1);background-size: 100% !important;border-radius:44rpx 44rpx 44rpx 44rpx;font-size:32rpx;color:#fff;margin:0rpx 32rpx 0rpx 32rpx;height:88rpx;line-height:88rpx;
    }
</style>