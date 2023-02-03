<template>
    <view class="page" :style="themeColor">
    <view class="flex flex-direction flex-wrap align-stretch justify-center benben-position-layout flex changePwdPhoneCode_flex_0"    :style="{height:(88+StatusBarRpx)+'rpx',paddingTop:StatusBarRpx+'rpx'}">
            <view   class='flex flex-wrap align-stretch justify-between changePwdPhoneCode_fd0_0'     >
            <view   class='flex flex-wrap align-center changePwdPhoneCode_fd0_0_c0'  @tap.stop="handleJumpDiy" data-type="back" data-url="1"   >
        <text class='fu-iconfont2  changePwdPhoneCode_fd0_0_c0_c0' >&#xe794;</text>
</view>
    <view   class='flex flex-wrap align-center'     >
        <text class='changePwdPhoneCode_fd0_0_c1_c0' >修改密码</text>
</view>
    <view   class='flex align-center justify-end changePwdPhoneCode_fd0_0_c2'     >
        </view>
</view>

        </view>
<view :style="{height: (88+StatusBarRpx)+'rpx'}"  ></view>

 <view class="flex flex-direction align-center benben-flex-layout changePwdPhoneCode_flex_1"   >
        <text class='changePwdPhoneCode_fd1_0' >我们要对您绑定的手机号进行验证：</text>
<text class='changePwdPhoneCode_fd1_1' >151****2554</text>
</view>

        <benben-digital-password v-model='code'  :box-num='6' mode='number'  class-name='flex flex align-center justify-center changePwdPhoneCode_flex_password_2'>
        <template #default="{ content, active, index }">
        <view :key="index" v-if="active" class="flex align-center justify-center active-digital-password changePwdPhoneCode_flex_password_active_2">
          {{ content }}
        </view>
        <view :key="index" v-else class="flex align-center justify-center changePwdPhoneCode_flex_password_noActive_2">
          {{ content }}
        </view>
        </template>
        </benben-digital-password>
<!---flex布局flex布局开始-->
 <view class="flex flex-direction flex-wrap align-stretch justify-center benben-flex-layout"   >
            <view   class='flex flex-wrap align-center justify-center'     >
        <benben-send-verification-code class='flex  changePwdPhoneCode_fd3_0_c0' after-text='后重新获取' before-text='获取验证码' type='1'  :phone="mobile"></benben-send-verification-code>
</view>
<button class='changePwdPhoneCode_fd3_1' @tap.stop="getcheckCode()"  >下一步</button>
</view>
<!---flex布局flex布局结束-->
    
    </view>
</template>
<script>
    import {validate} from '@/common/utils/validate.js'
    export default {
        components:{},
        
        data(){
			return {"mobile":"15635696653","code":""};
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
                            //校验验证码
                 getcheckCode(){
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
    this.$urouter.navigateTo(`/pages/xtsz/changePwdPhone/changePwdPhone`);
                }
		}
    };
</script> 
<style lang="scss" scoped>
           .page{
            min-height: calc(100vh - var(--window-bottom));
            background:#fff;background-size: 100% auto !important;
        }
    .changePwdPhoneCode_flex_0{
        border-bottom:1px solid #eee;background:#fff;background-size: 100% !important;width:750rpx;height:88rpx;overflow:hidden;z-index:10;top:0rpx;background-size:100% auto !important;
    }
    .changePwdPhoneCode_fd0_0_c2{
        padding:0rpx 0rpx 0rpx 0rpx;width:100rpx;
    }
    .changePwdPhoneCode_fd0_0_c1_c0{
        font-size:36rpx;font-weight:500;color:#333333;line-height:50rpx;
    }
    .changePwdPhoneCode_fd0_0_c0_c0{
        font-size:36rpx;font-weight:400;color:#333;
    }
    .changePwdPhoneCode_fd0_0_c0{
        width:100rpx;
    }
    .changePwdPhoneCode_fd0_0{
        padding:0rpx 32rpx 0rpx 32rpx;line-height:88rpx;
    }
    .changePwdPhoneCode_flex_1{
        padding:103rpx 0rpx 0rpx 0rpx;
    }
    .changePwdPhoneCode_fd1_1{
        margin:51rpx 0rpx 40rpx 0rpx;line-height:37rpx;font-size:32rpx;font-weight:500;color:#333333;
    }
    .changePwdPhoneCode_fd1_0{
        font-size:28rpx;font-weight:400;color:#333333;
    }
    .changePwdPhoneCode_flex_password_noActive_2{
        border:1px solid #eee;width:100rpx;height:100rpx;
    }
    .changePwdPhoneCode_flex_password_active_2{
        border:1px solid #eee;width:100rpx;height:100rpx;
    }
    ::v-deep .changePwdPhoneCode_flex_password_2{
        margin:24rpx 0rpx 24rpx 0rpx;
    }
    .changePwdPhoneCode_fd3_1{
        background:rgba(11, 24, 152, 1);background-size: 100% !important;border-radius:44rpx 44rpx 44rpx 44rpx;font-size:32rpx;color:#fff;margin:80rpx 32rpx 0rpx 32rpx;height:88rpx;line-height:88rpx;background-size:100% auto !important;
    }
    .changePwdPhoneCode_fd3_0_c0{
        font-size:28rpx;font-weight:500;color:rgba(59, 157, 255, 1);text-align:center;
    }
</style>