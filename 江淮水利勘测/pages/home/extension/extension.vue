<template>
    <view class="page" :style="themeColor">
    <view class="flex flex-wrap align-center justify-between benben-position-layout flex extension_flex_0"    :style="{height:(88+StatusBarRpx)+'rpx',paddingTop:StatusBarRpx+'rpx'}">
            <view   class='flex flex-wrap align-center extension_fd0_0'  @tap.stop="handleJumpDiy" data-type="back" data-url="1"   >
        <text class='fu-iconfont2' >&#xe794;</text>
</view>
<text class='extension_fd0_1' >申请延期</text>
    <view   class='flex flex-wrap align-center extension_fd0_2'     >
        </view>

        </view>
<view :style="{height: (88+StatusBarRpx)+'rpx'}"  ></view>
<!---flex布局flex布局开始-->
 <view class="flex flex-direction flex-wrap align-stretch benben-flex-layout extension_flex_1"   >
            <view   class='flex flex-direction flex-wrap align-stretch extension_fd1_0'     >
            <view   class='flex flex-direction flex-wrap align-stretch extension_fd1_0_c0'     >
            <view   class='flex flex-wrap align-center'     >
        <text class='extension_fd1_0_c0_c0_c0' >计划开工时间</text>
<text class='flex-sub extension_fd1_0_c0_c0_c1' >2022-08-08</text>
</view>
    <view   class='flex flex-wrap align-center extension_fd1_0_c0_c1'     >
        <text class='extension_fd1_0_c0_c1_c0' >计划竣工时间</text>
<text class='flex-sub extension_fd1_0_c0_c1_c1' >2022-09-30</text>
</view>
    <view   class='flex flex-wrap align-center'     >
        <text class='extension_fd1_0_c0_c2_c0' >当前已延期</text>
<text class='flex-sub extension_fd1_0_c0_c2_c1' >5天</text>
</view>
</view>
<text class='extension_fd1_0_c1' >申请天数</text>
    <view   class='flex flex-wrap align-center extension_fd1_0_c2'     >
        <input class='flex-sub extension_fd1_0_c2_c0'  type="text" placeholder="请输入申请天数" confirm-type="done" :maxlength="-1" placeholder-style="color:#999;font-size:28rpx"  v-model="fd1_0_c2_c0" />
</view>
<text class='extension_fd1_0_c3' >申请原因</text>
<view class='flex flex-wrap extension_fd1_0_c4'>
<textarea class='flex extension_input_fd1_0_c4' confirm-type="done" :placeholder="'请输入'" :maxlength="240" placeholder-style="color:#999;font-size:28rpx"   v-model="fd1_0_c4" />

</view>
</view>
</view>
<!---flex布局flex布局结束-->
    <view class="flex flex-direction flex-wrap align-center benben-position-layout flex extension_flex_2"    >
        <button class='extension_fd2_0' @tap.stop="handleJumpDiy" data-type="navigateTo" :data-url="`/pages/home/application/application`"  >提交申请</button>

        </view>
<view :style="{height: '136rpx'}"  ></view>
    
    </view>
</template>
<script>
    
    export default {
        components:{},
        
        data(){
			return {"fd1_0_c2_c0":"","fd1_0_c4":""};
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
    .extension_flex_0{
        background:#fff;background-size: 100% !important;width:750rpx;height:88rpx;overflow:hidden;z-index:10;top:0rpx;background-size:100% auto !important;
    }
    .extension_fd0_2{
        width:100rpx;height:88rpx;margin:0rpx 32rpx 0rpx 0rpx;
    }
    .extension_fd0_1{
        color:#000000;font-size:36rpx;font-weight:500;line-height:50rpx;
    }
    .extension_fd0_0{
        width:100rpx;height:88rpx;margin:0rpx 0rpx 0rpx 32rpx;
    }
    .extension_flex_1{
        padding:0rpx 24rpx 0rpx 24rpx;
    }
    .extension_input_fd1_0_c4{
        width:100%;height:140rpx;font-size:28rpx;font-weight:400;color:#333;padding:24rpx 0rpx 0rpx 24rpx;
    }
    .extension_fd1_0_c4{
        background:rgba(243, 246, 251, 1);background-size: 100% !important;width:654rpx;border-radius:16rpx 16rpx 16rpx 16rpx;
    }
    .extension_fd1_0_c3{
        color:#333333;font-size:32rpx;font-weight:400;line-height:45rpx;margin:24rpx 0rpx 24rpx 0rpx;
    }
    .extension_fd1_0_c2_c0{
        color:#333;font-size:32rpx;font-weight:400;line-height:45rpx;
    }
    .extension_fd1_0_c2{
        background:rgba(243, 246, 251, 1);background-size: 100% !important;border-radius:16rpx 16rpx 16rpx 16rpx;padding:22rpx 26rpx 21rpx 26rpx;
    }
    .extension_fd1_0_c1{
        color:#333333;font-size:32rpx;font-weight:400;line-height:45rpx;margin:32rpx 0rpx 24rpx 0rpx;
    }
    .extension_fd1_0_c0_c2_c1{
        color:rgba(230, 53, 65, 1);font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 24rpx;
    }
    .extension_fd1_0_c0_c2_c0{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .extension_fd1_0_c0_c1_c1{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 24rpx;
    }
    .extension_fd1_0_c0_c1_c0{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .extension_fd1_0_c0_c1{
        margin:24rpx 0rpx 24rpx 0rpx;
    }
    .extension_fd1_0_c0_c0_c1{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 24rpx;
    }
    .extension_fd1_0_c0_c0_c0{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .extension_fd1_0_c0{
        background:linear-gradient(180deg, #A7CCFE 0%, #557BEB 100%);background-size: 100% !important;border-radius:16rpx 16rpx 16rpx 16rpx;padding:32rpx 32rpx 32rpx 32rpx;
    }
    .extension_fd1_0{
        background:#fff;background-size: 100% !important;border-radius:24rpx 24rpx 24rpx 24rpx;padding:32rpx 24rpx 32rpx 24rpx;margin:32rpx 0rpx 0rpx 0rpx;
    }
    .extension_flex_2{
        width:750rpx;height:136rpx;overflow:hidden;z-index:10;bottom:calc(0rpx + var(--window-bottom));
    }
    .extension_fd2_0{
        background:rgba(11, 24, 152, 1);background-size: 100% !important;border-radius:100rpx 100rpx 100rpx 100rpx;font-size:32rpx;color:#fff;width:686rpx;height:88rpx;line-height:88rpx;margin:0rpx 32rpx 0rpx 32rpx;
    }
</style>