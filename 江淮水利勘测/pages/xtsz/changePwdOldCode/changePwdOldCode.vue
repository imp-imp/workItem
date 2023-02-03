<template>
    <view class="page" :style="themeColor">
    <view class="flex flex-direction flex-wrap align-stretch justify-center benben-position-layout flex changePwdOldCode_flex_0"    :style="{height:(88+StatusBarRpx)+'rpx',paddingTop:StatusBarRpx+'rpx'}">
            <view   class='flex flex-wrap align-stretch justify-between changePwdOldCode_fd0_0'     >
            <view   class='flex flex-wrap align-center changePwdOldCode_fd0_0_c0'  @tap.stop="handleJumpDiy" data-type="back" data-url="1"   >
        <text class='fu-iconfont2  changePwdOldCode_fd0_0_c0_c0' >&#xe794;</text>
</view>
    <view   class='flex flex-wrap align-center'     >
        <text class='changePwdOldCode_fd0_0_c1_c0' >修改密码</text>
</view>
    <view   class='flex align-center justify-end changePwdOldCode_fd0_0_c2'     >
        </view>
</view>

        </view>
<view :style="{height: (88+StatusBarRpx)+'rpx'}"  ></view>
<!---改密-旧密码验证表单flex布局开始-->
 <view class="flex flex-direction flex-wrap align-stretch changePwdOldCode_flex_1"   >
            <view   class='flex flex-wrap align-center changePwdOldCode_fd1_0'     >
        <text class='changePwdOldCode_fd1_0_c0' >旧密码</text>
<input class='flex-sub changePwdOldCode_fd1_0_c1'  type="text" :focus='true' placeholder="请输入旧密码" confirm-type="done" :maxlength="12" :password='true' placeholder-style="color:rgba(156, 156, 156, 1);font-size:32rpx"  v-model="oldPwd" />
</view>
    <view   class='flex flex-wrap align-center changePwdOldCode_fd1_1'     >
        <text class='changePwdOldCode_fd1_1_c0' >新密码</text>
<input class='flex-sub changePwdOldCode_fd1_1_c1'  type="text" placeholder="请输入新密码" confirm-type="done" :maxlength="12" :password='true' placeholder-style="color:rgba(156, 156, 156, 1);font-size:32rpx"  v-model="newPwd" />
</view>
    <view   class='flex flex-wrap align-center changePwdOldCode_fd1_2'     >
        <text class='changePwdOldCode_fd1_2_c0' >确认新密码</text>
<input class='flex-sub changePwdOldCode_fd1_2_c1'  type="text" placeholder="请再次输入新密码" confirm-type="done" :maxlength="12" :password='true' placeholder-style="color:rgba(156, 156, 156, 1);font-size:32rpx"  v-model="qrPwd" />
</view>
</view>
<!---改密-旧密码验证表单flex布局结束-->
    <view class="flex flex-wrap align-stretch justify-center benben-position-layout flex changePwdOldCode_flex_2"    >
        <button class='changePwdOldCode_fd2_0' @tap.stop="getcheckPwd()"  >完成</button>
</view>
    
    </view>
</template>
<script>
    import {validate} from '@/common/utils/validate.js'
    export default {
        components:{},
        
        data(){
			return {"oldPwd":"","newPwd":"","qrPwd":""};
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
                            //校验密码
                 getcheckPwd(){
                                if(!validate(this.oldPwd,'require')){
                 this.$message.info('请输入旧密码');
                 return false;
            }
            if(!validate(this.oldPwd,'password')){
                 this.$message.info('请输入密码（6~12位字母+数字）');
                 return false;
            }
            if(!validate(this.newPwd,'require')){
                 this.$message.info('请输入新密码');
                 return false;
            }
            if(!validate(this.newPwd,'password')){
                 this.$message.info('请输入新密码（6~12位字母+数字）');
                 return false;
            }
            if(!validate(this.qrPwd,'require')){
                 this.$message.info('请输入确认密码');
                 return false;
            }
            if(!validate(this.qrPwd,'password')){
                 this.$message.info('请输入确认密码（6~12位字母+数字）');
                 return false;
            }
            if(!(this.newPwd == this.qrPwd)){
                 this.$message.info('两次输入密码不一致');
                 return false;
            }
            uni.navigateBack({
              delta:1
            });
                }
		}
    };
</script> 
<style lang="scss" scoped>
           .page{
            min-height: calc(100vh - var(--window-bottom));
            background:rgba(243, 246, 251, 1);background-size: 100% auto !important;
        }
    .changePwdOldCode_flex_0{
        border-bottom:1px solid #eee;background:#fff;background-size: 100% !important;width:750rpx;height:88rpx;overflow:hidden;z-index:10;top:0rpx;background-size:100% auto !important;
    }
    .changePwdOldCode_fd0_0_c2{
        padding:0rpx 0rpx 0rpx 0rpx;width:100rpx;
    }
    .changePwdOldCode_fd0_0_c1_c0{
        font-size:36rpx;font-weight:500;color:#333333;line-height:50rpx;
    }
    .changePwdOldCode_fd0_0_c0_c0{
        font-size:36rpx;font-weight:400;color:#333;
    }
    .changePwdOldCode_fd0_0_c0{
        width:100rpx;
    }
    .changePwdOldCode_fd0_0{
        padding:0rpx 32rpx 0rpx 32rpx;line-height:88rpx;
    }
    .changePwdOldCode_flex_1{
        background:#fff;background-size: 100% !important;font-size:32rpx;background-size:100% auto !important;padding:0rpx 32rpx 0rpx 32rpx;
    }
    .changePwdOldCode_fd1_2_c1{
        line-height:45rpx;font-size:32rpx;font-weight:400;color:#333;
    }
    .changePwdOldCode_fd1_2_c0{
        font-size:32rpx;font-weight:400;color:#333333;width:182rpx;
    }
    .changePwdOldCode_fd1_2{
        border-bottom:1px solid #eee;padding:32rpx 0rpx 32rpx 0rpx;
    }
    .changePwdOldCode_fd1_1_c1{
        line-height:45rpx;font-size:32rpx;font-weight:400;color:#333;
    }
    .changePwdOldCode_fd1_1_c0{
        font-size:32rpx;font-weight:400;color:#333333;width:182rpx;
    }
    .changePwdOldCode_fd1_1{
        border-bottom:1px solid #eee;padding:32rpx 0rpx 32rpx 0rpx;
    }
    .changePwdOldCode_fd1_0_c1{
        line-height:45rpx;font-size:32rpx;font-weight:400;color:#333;
    }
    .changePwdOldCode_fd1_0_c0{
        font-size:32rpx;font-weight:400;color:#333333;width:182rpx;
    }
    .changePwdOldCode_fd1_0{
        border-bottom:1px solid #eee;padding:32rpx 0rpx 32rpx 0rpx;
    }
    .changePwdOldCode_flex_2{
        width:750rpx;height:144rpx;overflow:hidden;z-index:10;bottom:calc(0rpx + var(--window-bottom));
    }
    .changePwdOldCode_fd2_0{
        background:rgba(11, 24, 152, 1);background-size: 100% !important;border-radius:44rpx 44rpx 44rpx 44rpx;font-size:32rpx;color:#fff;width:686rpx;height:88rpx;line-height:88rpx;font-weight:500;margin:0rpx 32rpx 0rpx 32rpx;
    }
</style>