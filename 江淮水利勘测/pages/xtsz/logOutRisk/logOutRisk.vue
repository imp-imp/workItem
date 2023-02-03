<template>
    <view class="page" :style="themeColor">
    <view class="flex flex-direction flex-wrap align-stretch justify-center benben-position-layout flex logOutRisk_flex_0"    :style="{height:(88+StatusBarRpx)+'rpx',paddingTop:StatusBarRpx+'rpx'}">
            <view   class='flex flex-wrap align-stretch justify-between logOutRisk_fd0_0'     >
            <view   class='flex flex-wrap align-center logOutRisk_fd0_0_c0'  @tap.stop="handleJumpDiy" data-type="back" data-url="1"   >
        <text class='fu-iconfont2  logOutRisk_fd0_0_c0_c0' >&#xe794;</text>
</view>
    <view   class='flex flex-wrap align-center'     >
        <text class='logOutRisk_fd0_0_c1_c0' >注销账号</text>
</view>
    <view   class='flex align-center justify-end logOutRisk_fd0_0_c2'     >
        </view>
</view>

        </view>
<view :style="{height: (88+StatusBarRpx)+'rpx'}"  ></view>
<!---注销账号风险-提示flex布局开始-->
 <view class="flex flex-direction flex-wrap align-stretch logOutRisk_flex_1"   >
        <text class='logOutRisk_fd1_0' >账号注销</text>
<text class='logOutRisk_fd1_1' >永久注销且无法恢复，请谨慎操作</text>
<text class='logOutRisk_fd1_2' >账号注销后将放弃以下权益：</text>
<text class='logOutRisk_fd1_3' >1、账号信息、第三方授权信息将被清空且无法恢复。 
2、账号相关信息将会一并被删除且无法恢复。 
3、注销后手机号码可重新注册，所生成账号为全新的账号，不包含注销账号的任何信息。</text>
</view>
<!---注销账号风险-提示flex布局结束-->
    <view class="flex flex-direction flex-wrap align-center justify-center benben-position-layout flex logOutRisk_flex_2"    >
        <text class='logOutRisk_fd2_0' >点击下方按钮，即表示你已阅读并了解以上风险</text>
<button class='logOutRisk_fd2_1' @tap.stop="popupShow1657003349241=true"  >我已清楚风险，确定继续</button>
<button class='logOutRisk_fd2_2' @tap.stop="handleJumpDiy" data-type="back" data-url="1"  >返回</button>

        </view>
<view :style="{height: '340rpx'}"  ></view>
<benben-popup v-model="popupShow1657003349241" :mask="true"  mode='center'>
    <!---注销弹窗确认flex布局开始-->
 <view class="flex flex-direction flex-wrap align-center logOutRisk_flex_3"   >
        <text class='logOutRisk_fd3_0' >请再次确认，你已了解注销风险， 并要继续执行该操作</text>
    <view   class='flex flex-wrap align-center logOutRisk_fd3_1'     >
        <button class='logOutRisk_fd3_1_c0' @tap.stop="popupShow1657003349241=false"  >取消</button>
<button class='logOutRisk_fd3_1_c1' @tap.stop="handleJumpDiy" data-type="navigateTo" :data-url="`/pages/xtsz/logOutSubmit/logOutSubmit`"  >确定</button>
</view>
</view>
<!---注销弹窗确认flex布局结束-->
</benben-popup>
    
    </view>
</template>
<script>
    
    export default {
        components:{},
        
        data(){
			return {"popupShow1657003349241":false};
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
    .logOutRisk_flex_0{
        border-bottom:1px solid #eee;background:#fff;background-size: 100% !important;width:750rpx;height:88rpx;overflow:hidden;z-index:10;top:0rpx;background-size:100% auto !important;
    }
    .logOutRisk_fd0_0_c2{
        padding:0rpx 0rpx 0rpx 0rpx;width:100rpx;
    }
    .logOutRisk_fd0_0_c1_c0{
        font-size:36rpx;font-weight:500;color:#333333;line-height:50rpx;
    }
    .logOutRisk_fd0_0_c0_c0{
        font-size:36rpx;font-weight:400;color:#333;
    }
    .logOutRisk_fd0_0_c0{
        width:100rpx;
    }
    .logOutRisk_fd0_0{
        padding:0rpx 32rpx 0rpx 32rpx;line-height:88rpx;
    }
    .logOutRisk_flex_1{
        background:#fff;background-size: 100% !important;font-size:32rpx;background-size:100% auto !important;padding:32rpx 32rpx 32rpx 32rpx;
    }
    .logOutRisk_fd1_3{
        line-height:48rpx;font-size:28rpx;font-weight:400;color:#666666;
    }
    .logOutRisk_fd1_2{
        line-height:45rpx;font-size:32rpx;font-weight:500;color:#333333;padding:56rpx 0rpx 24rpx 0rpx;
    }
    .logOutRisk_fd1_1{
        line-height:40rpx;font-size:28rpx;font-weight:400;color:#666666;
    }
    .logOutRisk_fd1_0{
        line-height:45rpx;font-size:32rpx;font-weight:700;color:#333333;padding:0rpx 0rpx 24rpx 0rpx;
    }
    .logOutRisk_flex_2{
        width:750rpx;height:340rpx;overflow:hidden;z-index:10;bottom:calc(0rpx + var(--window-bottom));
    }
    .logOutRisk_fd2_2{
        background:rgba(243, 246, 251, 1);background-size: 100% !important;border-radius:50rpx 50rpx 50rpx 50rpx;font-size:32rpx;color:rgba(11, 24, 152, 1);width:686rpx;height:88rpx;line-height:88rpx;font-weight:400;margin:32rpx 0rpx 0rpx 0rpx;
    }
    .logOutRisk_fd2_1{
        background:rgba(11, 24, 152, 1);background-size: 100% !important;border-radius:44rpx 44rpx 44rpx 44rpx;font-size:32rpx;color:#fff;width:686rpx;height:88rpx;line-height:88rpx;font-weight:400;padding:0rpx 0rpx 0rpx 0rpx;
    }
    .logOutRisk_fd2_0{
        border-top:1px solid #eee;background:#FFFFFF;background-size: 100% !important;font-size:24rpx;font-weight:400;color:#FD6A29;margin:0rpx 0rpx 32rpx 0rpx;
    }
    .logOutRisk_flex_3{
        background:#fff;background-size: 100% !important;width:540rpx;border-radius:16rpx 16rpx 16rpx 16rpx;
    }
    .logOutRisk_fd3_1_c1{
        border-top:1px solid #eee;border-left:1px solid #eee;background:#fff;background-size: 100% !important;line-height:94rpx;border-radius:0rpx 0rpx 16rpx 0rpx;font-size:32rpx;color:rgba(11, 24, 152, 1);width:270rpx;
    }
    .logOutRisk_fd3_1_c0{
        border-top:1px solid #eee;background:#fff;background-size: 100% !important;line-height:94rpx;border-radius:0rpx 0rpx 0rpx 16rpx;font-size:32rpx;color:rgba(153, 153, 153, 1);padding:0rpx 103rpx 0rpx 103rpx;
    }
    .logOutRisk_fd3_1{
        margin:33rpx 0rpx 0rpx 0rpx;
    }
    .logOutRisk_fd3_0{
        line-height:52rpx;font-size:28rpx;font-weight:400;color:#333333;text-align:center;margin:52rpx 60rpx 0rpx 60rpx;
    }
</style>