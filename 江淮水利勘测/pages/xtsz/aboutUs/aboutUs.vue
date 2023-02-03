<template>
    <view class="page" :style="themeColor">
    <view class="flex flex-direction flex-wrap align-stretch justify-center benben-position-layout flex aboutUs_flex_0"    :style="{height:(88+StatusBarRpx)+'rpx',paddingTop:StatusBarRpx+'rpx'}">
            <view   class='flex flex-wrap align-stretch justify-between aboutUs_fd0_0'     >
            <view   class='flex flex-wrap align-center aboutUs_fd0_0_c0'  @tap.stop="handleJumpDiy" data-type="back" data-url="1"   >
        <text class='fu-iconfont2  aboutUs_fd0_0_c0_c0' >&#xe794;</text>
</view>
    <view   class='flex flex-wrap align-center'     >
        <text class='aboutUs_fd0_0_c1_c0' >关于我们</text>
</view>
    <view   class='flex align-center justify-end aboutUs_fd0_0_c2'     >
        </view>
</view>

        </view>
<view :style="{height: (88+StatusBarRpx)+'rpx'}"  ></view>
<!---版本flex布局开始-->
 <view class="flex flex-direction flex-wrap align-center"   >
        <image class='aboutUs_fd1_0' mode="aspectFit"  :src='STATIC_URL+"106.png"'></image>
<text class='aboutUs_fd1_1' >当前版本1.0</text>
</view>
<!---版本flex布局结束-->
    <view class="flex flex-direction align-center justify-between benben-position-layout flex aboutUs_flex_2"    >
        <text class='aboutUs_fd2_0' >Copyright©2019   江淮水利设计</text>
<text class='aboutUs_fd2_1' >All Ringhts Reserved</text>

        </view>
<view :style="{height: '88rpx'}"  ></view>
    
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
    .aboutUs_flex_0{
        border-bottom:1px solid #eee;background:#fff;background-size: 100% !important;width:750rpx;height:88rpx;overflow:hidden;z-index:10;top:0rpx;background-size:100% auto !important;
    }
    .aboutUs_fd0_0_c2{
        padding:0rpx 0rpx 0rpx 0rpx;width:100rpx;
    }
    .aboutUs_fd0_0_c1_c0{
        font-size:36rpx;font-weight:500;color:#333333;line-height:50rpx;
    }
    .aboutUs_fd0_0_c0_c0{
        font-size:36rpx;font-weight:400;color:#333;
    }
    .aboutUs_fd0_0_c0{
        width:100rpx;
    }
    .aboutUs_fd0_0{
        padding:0rpx 32rpx 0rpx 32rpx;line-height:88rpx;
    }
    .aboutUs_fd1_1{
        padding:32rpx 0rpx 0rpx 0rpx;font-weight:400;color:#333;font-size:28rpx;
    }
    .aboutUs_fd1_0{
        width:180rpx;height:180rpx;border-radius:36rpx 36rpx 36rpx 36rpx;margin:90rpx 0rpx 0rpx 0rpx;
    }
    .aboutUs_flex_2{
        width:750rpx;height:88rpx;overflow:hidden;z-index:10;bottom:calc(80rpx + var(--window-bottom));
    }
    .aboutUs_fd2_1{
        color:#BFBFBF;font-size:28rpx;font-weight:400;line-height:45rpx;
    }
    .aboutUs_fd2_0{
        color:#BFBFBF;font-size:28rpx;font-weight:400;line-height:45rpx;
    }
</style>