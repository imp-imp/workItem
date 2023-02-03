<template>
    <view class="page" :style="themeColor">
    <view class="flex benben-position-layout flex flex-wrap align-center login_flex_0"    :style="{height:(88+StatusBarRpx)+'rpx',paddingTop:StatusBarRpx+'rpx'}">
        
        </view>
<view :style="{height: (88+StatusBarRpx)+'rpx'}"  ></view>
<!---flex布局flex布局开始-->
 <view class="flex flex-direction flex-wrap align-center benben-flex-layout"   >
        <image class='login_fd1_0' mode="aspectFit"  :src='STATIC_URL+"3.png"'></image>
<button class='login_fd1_1' @tap.stop="handleJumpDiy" data-type="switchTab" :data-url="`/pages/tabBar/page/page`"  >企业微信登录</button>
</view>
<!---flex布局flex布局结束-->
    <view class="flex flex-wrap align-center justify-center benben-position-layout flex login_flex_2"    >
                <benben-flex-switch-new class-name='flex flex' v-model="cut" :disabled='false'  >
            <template v-slot:checked>
            
    <view   class='flex flex position-relative align-center'     >
        <image class='login_checkfd2_0_c0_c0' mode="aspectFit"  :src='STATIC_URL+"4.png"'></image>
</view>

            </template>
            <template v-slot:unchecked>
            
    <view   class='flex flex position-relative justify-end align-center'     >
        <image class='login_noCheckfd2_0_c1_c0' mode="aspectFit"  :src='STATIC_URL+"5.png"'></image>
</view>

            </template>
        </benben-flex-switch-new>
<text class='login_fd2_1' >已阅读并同意</text>
<text class='login_fd2_2'    @tap.stop="handleJumpDiy" data-type="navigateTo" :data-url="`/pages/xtsz/agreement/agreement?type=1`" >《用户注册协议》</text>
<text class='login_fd2_3' >与</text>
<text class='login_fd2_4'    @tap.stop="handleJumpDiy" data-type="navigateTo" :data-url="`/pages/xtsz/agreement/agreement?type=2`" >《隐私政策》</text>

        </view>
<view :style="{height: '88rpx'}"  ></view>
    
    </view>
</template>
<script>
    
    export default {
        components:{},
        
        data(){
			return {"cut":false};
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
            background:url(/static/images/1.png) no-repeat ,#fff;background-size: 100% auto !important;
        }
    .login_flex_0{
        width:750rpx;height:88rpx;overflow:hidden;z-index:10;top:0rpx;
    }
    .login_fd1_1{
        background:rgba(11, 24, 152, 1);background-size: 100% !important;border-radius:44rpx 44rpx 44rpx 44rpx;font-size:32rpx;color:#fff;width:638rpx;height:80rpx;line-height:80rpx;
    }
    .login_fd1_0{
        width:228rpx;height:228rpx;border-radius:0rpx 0rpx 0rpx 0rpx;margin:236rpx 0rpx 271rpx 0rpx;
    }
    .login_flex_2{
        width:750rpx;height:88rpx;overflow:hidden;z-index:10;bottom:calc(0rpx + var(--window-bottom));
    }
    .login_fd2_4{
        color:#666666;font-size:22rpx;font-weight:400;line-height:30rpx;
    }
    .login_fd2_3{
        color:#666666;font-size:22rpx;font-weight:400;line-height:30rpx;
    }
    .login_fd2_2{
        color:#666666;font-size:22rpx;font-weight:400;line-height:30rpx;
    }
    .login_fd2_1{
        color:#666666;font-size:22rpx;font-weight:400;line-height:30rpx;margin:0rpx 0rpx 0rpx 8rpx;
    }
    .login_noCheckfd2_0_c1_c0{
        border-radius:24rpx 24rpx 24rpx 24rpx;width:24rpx;height:24rpx;
    }
    .login_checkfd2_0_c0_c0{
        width:24rpx;height:24rpx;border-radius:24rpx 24rpx 24rpx 24rpx;
    }
</style>