<template>
    <view class="page" :style="themeColor">
    <view class="flex flex-wrap align-center justify-between benben-position-layout flex messageDetails_flex_0"    :style="{height:(88+StatusBarRpx)+'rpx',paddingTop:StatusBarRpx+'rpx'}">
            <view   class='flex flex-wrap align-center messageDetails_fd0_0'  @tap.stop="handleJumpDiy" data-type="back" data-url="1"   >
        <text class='fu-iconfont2' >&#xe794;</text>
</view>
<text class='messageDetails_fd0_1' >详情</text>
    <view   class='flex flex-wrap align-center messageDetails_fd0_2'     >
        </view>

        </view>
<view :style="{height: (88+StatusBarRpx)+'rpx'}"  ></view>
<!---flex布局flex布局开始-->
 <view class="flex flex-direction flex-wrap align-stretch benben-flex-layout messageDetails_flex_1"   >
            <view   class='flex flex-direction flex-wrap align-stretch messageDetails_fd1_0'     >
            <view   class='flex flex-wrap align-center justify-between messageDetails_fd1_0_c0'     >
        <text class='messageDetails_fd1_0_c0_c0' >超期提醒</text>
<image class='messageDetails_fd1_0_c0_c1' mode="aspectFit"  :src='STATIC_URL+"21.png"'></image>
</view>
<text class='messageDetails_fd1_0_c1' >2022-08-08 12:01</text>
<text class='messageDetails_fd1_0_c2' >您的“山乡美丽乡村建设项目”合同可以回二期款，请及时处理，合同可以回二期款，请及时处理合同可以回二期款，请及时处理合同可以回二期款，请及时处理合同可以回二期款，请及时处理</text>
</view>
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
            background:rgba(243, 246, 251, 1);background-size: 100% auto !important;
        }
    .messageDetails_flex_0{
        border-bottom:1px solid rgba(238, 238, 238, 1);background:#fff;background-size: 100% !important;width:750rpx;height:88rpx;overflow:hidden;z-index:10;top:0rpx;background-size:100% auto !important;
    }
    .messageDetails_fd0_2{
        width:100rpx;height:88rpx;margin:0rpx 32rpx 0rpx 0rpx;
    }
    .messageDetails_fd0_1{
        color:#000000;font-size:36rpx;font-weight:500;line-height:50rpx;
    }
    .messageDetails_fd0_0{
        width:100rpx;height:88rpx;margin:0rpx 0rpx 0rpx 32rpx;
    }
    .messageDetails_flex_1{
        padding:0rpx 24rpx 0rpx 24rpx;
    }
    .messageDetails_fd1_0_c2{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:48rpx;margin:32rpx 0rpx 0rpx 0rpx;
    }
    .messageDetails_fd1_0_c1{
        color:#666666;font-size:24rpx;font-weight:400;line-height:33rpx;margin:24rpx 0rpx 0rpx 0rpx;
    }
    .messageDetails_fd1_0_c0_c1{
        width:56rpx;height:40rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .messageDetails_fd1_0_c0_c0{
        color:#666666;font-size:28rpx;font-weight:500;line-height:40rpx;
    }
    .messageDetails_fd1_0_c0{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:0rpx 0rpx 20rpx 0rpx;margin:45rpx 0rpx 0rpx 0rpx;
    }
    .messageDetails_fd1_0{
        background:#fff;background-size: 100% !important;border-radius:16rpx 16rpx 16rpx 16rpx;padding:0rpx 24rpx 0rpx 24rpx;margin:24rpx 0rpx 0rpx 0rpx;
    }
</style>