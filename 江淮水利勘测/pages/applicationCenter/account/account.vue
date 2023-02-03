<template>
    <view class="page" :style="themeColor">
    <view class="flex flex-wrap align-center justify-between benben-position-layout flex account_flex_0"   @tap.stop="handleJumpDiy" data-type="back" data-url="1" :style="{height:(88+StatusBarRpx)+'rpx',paddingTop:StatusBarRpx+'rpx'}">
            <view   class='flex flex-wrap align-center account_fd0_0'  @tap.stop="handleJumpDiy" data-type="back" data-url="1"   >
        <text class='fu-iconfont2' >&#xe794;</text>
</view>
<text class='account_fd0_1' >导出报销</text>
    <view   class='flex flex-wrap align-center account_fd0_2'     >
        </view>

        </view>
<view :style="{height: (88+StatusBarRpx)+'rpx'}"  ></view>
<!---flex布局flex布局开始-->
 <view class="flex flex-direction flex-wrap align-stretch benben-flex-layout account_flex_1"   >
        <text class='account_fd1_0' >费用报销单</text>
    <view   class='flex flex-wrap align-center account_fd1_1'     >
        <text class='account_fd1_1_c0' >填报单位:</text>
<text class='account_fd1_1_c1' >河南省江淮水利勘测设计有限公司</text>
</view>
    <view   class='flex flex-wrap align-center justify-end account_fd1_2'     >
        <text class='account_fd1_2_c0' >2022</text>
<text class='account_fd1_2_c1' >年</text>
<text class='account_fd1_2_c2' >08</text>
<text class='account_fd1_2_c3' >月</text>
<text class='account_fd1_2_c4' >08</text>
<text class='account_fd1_2_c5' >日</text>
<text class='account_fd1_2_c6' >单位:</text>
<text class='account_fd1_2_c7' >元</text>
</view>
        <jyf-parser class='account_fd1_3'   >
        </jyf-parser>
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
    .account_flex_0{
        border-bottom:1px solid rgba(238, 238, 238, 1);background:#fff;background-size: 100% !important;width:750rpx;height:88rpx;overflow:hidden;z-index:10;top:0rpx;background-size:100% auto !important;
    }
    .account_fd0_2{
        width:100rpx;height:88rpx;margin:0rpx 32rpx 0rpx 0rpx;
    }
    .account_fd0_1{
        color:#000000;font-size:36rpx;font-weight:500;line-height:50rpx;
    }
    .account_fd0_0{
        width:100rpx;height:88rpx;margin:0rpx 0rpx 0rpx 32rpx;
    }
    .account_flex_1{
        padding:0rpx 24rpx 0rpx 24rpx;
    }
    ::v-deep .account_fd1_3{
        width:100%;
    }
    .account_fd1_2_c7{
        color:#333333;font-size:24rpx;font-weight:400;line-height:33rpx;margin:0rpx 14rpx 0rpx 0rpx;
    }
    .account_fd1_2_c6{
        color:#333333;font-size:24rpx;font-weight:400;line-height:33rpx;
    }
    .account_fd1_2_c5{
        color:#333333;font-size:24rpx;font-weight:400;line-height:33rpx;margin:0rpx 6rpx 0rpx 6rpx;
    }
    .account_fd1_2_c4{
        color:#333333;font-size:24rpx;font-weight:400;line-height:33rpx;
    }
    .account_fd1_2_c3{
        color:#333333;font-size:24rpx;font-weight:400;line-height:33rpx;margin:0rpx 6rpx 0rpx 6rpx;
    }
    .account_fd1_2_c2{
        color:#333333;font-size:24rpx;font-weight:400;line-height:33rpx;
    }
    .account_fd1_2_c1{
        color:#333333;font-size:24rpx;font-weight:400;line-height:33rpx;margin:0rpx 6rpx 0rpx 6rpx;
    }
    .account_fd1_2_c0{
        color:#333333;font-size:24rpx;font-weight:400;line-height:33rpx;
    }
    .account_fd1_2{
        margin:0rpx 0rpx 25rpx 0rpx;
    }
    .account_fd1_1_c1{
        color:#333333;font-size:24rpx;font-weight:400;line-height:33rpx;
    }
    .account_fd1_1_c0{
        color:#333333;font-size:24rpx;font-weight:400;line-height:33rpx;
    }
    .account_fd1_1{
        margin:20rpx 0rpx 24rpx 0rpx;
    }
    .account_fd1_0{
        text-align:center;color:#333333;font-size:32rpx;font-weight:500;line-height:45rpx;margin:24rpx 0rpx 0rpx 0rpx;
    }
</style>