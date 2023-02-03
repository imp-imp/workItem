<template>
    <view class="page" :style="themeColor">
    <view class="flex flex-wrap align-center justify-between benben-position-layout flex my_flex_0"    :style="{height:(88+StatusBarRpx)+'rpx',paddingTop:StatusBarRpx+'rpx'}">
            <view   class='flex flex-wrap align-center my_fd0_0'     >
        </view>
<text class='my_fd0_1' >我的</text>
    <view   class='flex flex-wrap align-center my_fd0_2'     >
        </view>

        </view>
<view :style="{height: (88+StatusBarRpx)+'rpx'}"  ></view>
<!---flex布局flex布局开始-->
 <view class="flex flex-direction flex-wrap align-stretch benben-flex-layout"   >
            <view   class='flex flex-wrap align-center my_fd1_0'  @tap.stop="handleJumpDiy" data-type="navigateTo" :data-url="`/pages/mine/personal/personal`"   >
        <image class='my_fd1_0_c0' mode="aspectFit"  :src='STATIC_URL+"31.png"'></image>
    <view   class='flex flex-direction flex-wrap align-stretch flex-sub my_fd1_0_c1'     >
            <view   class='flex flex-wrap align-center justify-between'     >
        <text class='my_fd1_0_c1_c0_c0' >陈沉沉</text>
<image class='my_fd1_0_c1_c0_c1' mode="aspectFit"  :src='STATIC_URL+"27.png"'></image>
</view>
<text class='my_fd1_0_c1_c1' >江淮水利设计有限公司</text>
</view>
</view>
</view>
<!---flex布局flex布局结束-->
<!---flex布局flex布局开始-->
 <view class="flex flex-direction flex-wrap align-stretch benben-flex-layout my_flex_2"   >
            <view   class='flex flex-direction flex-wrap align-stretch my_fd2_0'     >
            <view   class='flex flex-wrap align-center justify-between my_fd2_0_c0'  @tap.stop="handleJumpDiy" data-type="navigateTo" :data-url="`/pages/mine/employees/employees`"   >
            <view   class='flex flex-wrap align-center'     >
        <image class='my_fd2_0_c0_c0_c0' mode="aspectFit"  :src='STATIC_URL+"28.png"'></image>
<text class='my_fd2_0_c0_c0_c1' >我的员工</text>
</view>
<image class='my_fd2_0_c0_c1' mode="aspectFit"  :src='STATIC_URL+"27.png"'></image>
</view>
    <view   class='flex flex-wrap align-center justify-between my_fd2_0_c1'  @tap.stop="handleJumpDiy" data-type="navigateTo" :data-url="`/pages/mine/structure/structure`"   >
            <view   class='flex flex-wrap align-center'     >
        <image class='my_fd2_0_c1_c0_c0' mode="aspectFit"  :src='STATIC_URL+"29.png"'></image>
<text class='my_fd2_0_c1_c0_c1' >组织架构</text>
</view>
<image class='my_fd2_0_c1_c1' mode="aspectFit"  :src='STATIC_URL+"27.png"'></image>
</view>
    <view   class='flex flex-wrap align-center justify-between my_fd2_0_c2'  @tap.stop="handleJumpDiy" data-type="navigateTo" :data-url="`/pages/xtsz/system/system`"   >
            <view   class='flex flex-wrap align-center'     >
        <image class='my_fd2_0_c2_c0_c0' mode="aspectFit"  :src='STATIC_URL+"30.png"'></image>
<text class='my_fd2_0_c2_c0_c1' >系统设置</text>
</view>
<image class='my_fd2_0_c2_c1' mode="aspectFit"  :src='STATIC_URL+"27.png"'></image>
</view>
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
            background:url(/static/images/26.png) no-repeat ,rgba(243, 246, 251, 1);background-size: 100% auto !important;
        }
    .my_flex_0{
        background:url(/static/images/26.png) no-repeat;background-size: 100% !important;width:750rpx;height:88rpx;overflow:hidden;z-index:10;top:0rpx;background-size:100% auto !important;
    }
    .my_fd0_2{
        width:100rpx;height:88rpx;margin:0rpx 32rpx 0rpx 0rpx;
    }
    .my_fd0_1{
        color:#fff;font-size:36rpx;font-weight:500;line-height:50rpx;
    }
    .my_fd0_0{
        width:100rpx;height:88rpx;margin:0rpx 0rpx 0rpx 32rpx;
    }
    .my_fd1_0_c1_c1{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;margin:5rpx 0rpx 0rpx 0rpx;
    }
    .my_fd1_0_c1_c0_c1{
        width:12rpx;height:22rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .my_fd1_0_c1_c0_c0{
        color:#333333;font-size:36rpx;font-weight:500;line-height:50rpx;
    }
    .my_fd1_0_c1{
        margin:0rpx 0rpx 0rpx 34rpx;
    }
    .my_fd1_0_c0{
        border:1px solid rgba(255, 255, 255, 1);width:156rpx;height:156rpx;border-radius:78rpx 78rpx 78rpx 78rpx;margin:-24rpx 0rpx 0rpx 0rpx;
    }
    .my_fd1_0{
        background:linear-gradient(180deg, #FFFFFF 0%, #F8F8F8 100%);background-size: 100% !important;border-radius:16rpx 16rpx 0rpx 0rpx;margin:101rpx 0rpx 0rpx 0rpx;padding:0rpx 32rpx 0rpx 32rpx;
    }
    .my_flex_2{
        padding:0rpx 32rpx 0rpx 32rpx;
    }
    .my_fd2_0_c2_c1{
        width:12rpx;height:22rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .my_fd2_0_c2_c0_c1{
        color:#333333;font-size:30rpx;font-weight:400;line-height:42rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .my_fd2_0_c2_c0_c0{
        width:40rpx;height:40rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .my_fd2_0_c2{
        padding:32rpx 0rpx 32rpx 0rpx;
    }
    .my_fd2_0_c1_c1{
        width:12rpx;height:22rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .my_fd2_0_c1_c0_c1{
        color:#333333;font-size:30rpx;font-weight:400;line-height:42rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .my_fd2_0_c1_c0_c0{
        width:40rpx;height:40rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .my_fd2_0_c1{
        padding:32rpx 0rpx 32rpx 0rpx;
    }
    .my_fd2_0_c0_c1{
        width:12rpx;height:22rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .my_fd2_0_c0_c0_c1{
        color:#333333;font-size:30rpx;font-weight:400;line-height:42rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .my_fd2_0_c0_c0_c0{
        width:40rpx;height:40rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .my_fd2_0_c0{
        padding:32rpx 0rpx 32rpx 0rpx;
    }
    .my_fd2_0{
        background:#fff;background-size: 100% !important;border-radius:16rpx 16rpx 16rpx 16rpx;padding:0rpx 24rpx 0rpx 24rpx;margin:32rpx 0rpx 0rpx 0rpx;
    }
</style>