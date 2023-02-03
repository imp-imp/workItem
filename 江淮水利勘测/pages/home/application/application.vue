<template>
    <view class="page" :style="themeColor">
    <view class="flex flex-wrap align-center justify-between benben-position-layout flex application_flex_0"    :style="{height:(88+StatusBarRpx)+'rpx',paddingTop:StatusBarRpx+'rpx'}">
            <view   class='flex flex-wrap align-center application_fd0_0'  @tap.stop="handleJumpDiy" data-type="back" data-url="2"   >
        <text class='fu-iconfont2' >&#xe794;</text>
</view>
<text class='application_fd0_1' >申请延期</text>
    <view   class='flex flex-wrap align-center application_fd0_2'     >
        </view>

        </view>
<view :style="{height: (88+StatusBarRpx)+'rpx'}"  ></view>
<!---flex布局flex布局开始-->
 <view class="flex flex-direction flex-wrap align-center benben-flex-layout"   >
        <image class='application_fd1_0' mode="aspectFit"  :src='STATIC_URL+"58.png"'></image>
<text class='application_fd1_1' >提交成功，请耐心等待审批</text>
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
            background:#fff;background-size: 100% auto !important;
        }
    .application_flex_0{
        border-bottom:1px solid rgba(238, 238, 238, 1);background:#fff;background-size: 100% !important;width:750rpx;height:88rpx;overflow:hidden;z-index:10;top:0rpx;background-size:100% auto !important;
    }
    .application_fd0_2{
        width:100rpx;height:88rpx;margin:0rpx 32rpx 0rpx 0rpx;
    }
    .application_fd0_1{
        color:#000000;font-size:36rpx;font-weight:500;line-height:50rpx;
    }
    .application_fd0_0{
        width:100rpx;height:88rpx;margin:0rpx 0rpx 0rpx 32rpx;
    }
    .application_fd1_1{
        color:#000000;font-size:32rpx;font-weight:700;line-height:45rpx;margin:24rpx 0rpx 0rpx 0rpx;
    }
    .application_fd1_0{
        width:250rpx;height:180rpx;border-radius:0rpx 0rpx 0rpx 0rpx;margin:125rpx 0rpx 0rpx 0rpx;
    }
</style>