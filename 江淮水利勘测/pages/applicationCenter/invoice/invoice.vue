<template>
    <view class="page" :style="themeColor">
    <view class="flex flex-wrap align-center justify-between benben-position-layout flex invoice_flex_0"    :style="{height:(88+StatusBarRpx)+'rpx',paddingTop:StatusBarRpx+'rpx'}">
            <view   class='flex flex-wrap align-center invoice_fd0_0'  @tap.stop="handleJumpDiy" data-type="back" data-url="1"   >
        <text class='fu-iconfont2' >&#xe794;</text>
</view>
<text class='invoice_fd0_1' >新增开票</text>
    <view   class='flex flex-wrap align-center invoice_fd0_2'     >
        </view>

        </view>
<view :style="{height: (88+StatusBarRpx)+'rpx'}"  ></view>
<!---flex布局flex布局开始-->
 <view class="flex flex-direction flex-wrap align-stretch benben-flex-layout invoice_flex_1"   >
            <view   class='flex flex-direction flex-wrap align-stretch invoice_fd1_0'     >
        <text class='invoice_fd1_0_c0' >开票金额(元)</text>
    <view   class='flex flex-wrap align-center invoice_fd1_0_c1'  @tap.stop="popupShow1665817508884=true"   >
        <input class='flex-sub invoice_fd1_0_c1_c0'  type="text" placeholder="请输入开票金额" confirm-type="done" :maxlength="-1" placeholder-style="color:#999;font-size:28rpx"  v-model="fd1_0_c1_c0" />
</view>
<text class='invoice_fd1_0_c2' >开票金额(元)</text>
    <view   class='flex flex-wrap align-center invoice_fd1_0_c3'     >
        <input class='flex-sub invoice_fd1_0_c3_c0'  type="text" placeholder=" 2022-N4-001-J" confirm-type="done" :maxlength="-1" :disabled='true' placeholder-style="color:#999;font-size:28rpx"  v-model="fd1_0_c3_c0" />
</view>
<text class='invoice_fd1_0_c4' >开票金额(元)</text>
    <view   class='flex flex-wrap align-center invoice_fd1_0_c5'     >
        <input class='flex-sub invoice_fd1_0_c5_c0'  type="text" placeholder="云祥美丽乡村建设施工工程项目" confirm-type="done" :maxlength="-1" :disabled='true' placeholder-style="color:#999;font-size:28rpx"  v-model="fd1_0_c5_c0" />
</view>
</view>
</view>
<!---flex布局flex布局结束-->
    <view class="flex flex-direction flex-wrap align-center benben-position-layout flex invoice_flex_2"    >
        <button class='invoice_fd2_0' @tap.stop="handleJumpDiy" data-type="back" data-url="1"  >确定</button>

        </view>
<view :style="{height: '136rpx'}"  ></view>
    
    </view>
</template>
<script>
    
    export default {
        components:{},
        
        data(){
			return {"fd1_0_c1_c0":"","fd1_0_c3_c0":"","fd1_0_c5_c0":""};
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
    .invoice_flex_0{
        background:#fff;background-size: 100% !important;width:750rpx;height:88rpx;overflow:hidden;z-index:10;top:0rpx;background-size:100% auto !important;
    }
    .invoice_fd0_2{
        width:100rpx;height:88rpx;margin:0rpx 32rpx 0rpx 0rpx;
    }
    .invoice_fd0_1{
        color:#000000;font-size:36rpx;font-weight:500;line-height:50rpx;
    }
    .invoice_fd0_0{
        width:100rpx;height:88rpx;margin:0rpx 0rpx 0rpx 32rpx;
    }
    .invoice_flex_1{
        padding:0rpx 24rpx 0rpx 24rpx;
    }
    .invoice_fd1_0_c5_c0{
        color:#333;font-size:32rpx;font-weight:400;line-height:45rpx;
    }
    .invoice_fd1_0_c5{
        background:rgba(243, 246, 251, 1);background-size: 100% !important;border-radius:16rpx 16rpx 16rpx 16rpx;padding:22rpx 26rpx 21rpx 26rpx;
    }
    .invoice_fd1_0_c4{
        color:#333333;font-size:32rpx;font-weight:400;line-height:45rpx;margin:64rpx 0rpx 24rpx 0rpx;
    }
    .invoice_fd1_0_c3_c0{
        color:#333;font-size:32rpx;font-weight:400;line-height:45rpx;
    }
    .invoice_fd1_0_c3{
        background:rgba(243, 246, 251, 1);background-size: 100% !important;border-radius:16rpx 16rpx 16rpx 16rpx;padding:22rpx 26rpx 21rpx 26rpx;
    }
    .invoice_fd1_0_c2{
        color:#333333;font-size:32rpx;font-weight:400;line-height:45rpx;margin:64rpx 0rpx 24rpx 0rpx;
    }
    .invoice_fd1_0_c1_c0{
        color:#333;font-size:32rpx;font-weight:400;line-height:45rpx;
    }
    .invoice_fd1_0_c1{
        background:rgba(243, 246, 251, 1);background-size: 100% !important;border-radius:16rpx 16rpx 16rpx 16rpx;padding:22rpx 26rpx 21rpx 26rpx;margin:24rpx 0rpx 0rpx 0rpx;
    }
    .invoice_fd1_0_c0{
        color:#333333;font-size:32rpx;font-weight:400;line-height:45rpx;
    }
    .invoice_fd1_0{
        background:rgba(255, 255, 255, 1);background-size: 100% !important;border-radius:24rpx 24rpx 24rpx 24rpx;padding:32rpx 24rpx 34rpx 24rpx;margin:32rpx 0rpx 0rpx 0rpx;
    }
    .invoice_flex_2{
        width:750rpx;height:136rpx;overflow:hidden;z-index:10;bottom:calc(0rpx + var(--window-bottom));
    }
    .invoice_fd2_0{
        background:rgba(11, 24, 152, 1);background-size: 100% !important;border-radius:100rpx 100rpx 100rpx 100rpx;font-size:32rpx;color:#fff;width:686rpx;height:88rpx;line-height:88rpx;margin:0rpx 32rpx 0rpx 32rpx;
    }
</style>