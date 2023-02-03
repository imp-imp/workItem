<template>
    <view class="page" :style="themeColor">
    <view class="flex flex-wrap align-center justify-between benben-position-layout flex degression_flex_0"    :style="{height:(88+StatusBarRpx)+'rpx',paddingTop:StatusBarRpx+'rpx'}">
            <view   class='flex flex-wrap align-center degression_fd0_0'  @tap.stop="handleJumpDiy" data-type="back" data-url="1"   >
        <text class='fu-iconfont2' >&#xe794;</text>
</view>
<text class='degression_fd0_1' >成本</text>
    <view   class='flex flex-wrap align-center degression_fd0_2'     >
        </view>

        </view>
<view :style="{height: (88+StatusBarRpx)+'rpx'}"  ></view>
<!---flex布局flex布局开始-->
 <view class="flex flex-direction flex-wrap align-stretch benben-flex-layout degression_flex_1"   >
            <view   class='flex flex-wrap align-center degression_fd1_0'     >
        <image class='degression_fd1_0_c0' mode="aspectFit"  :src='STATIC_URL+"37.png"'></image>
<input class='flex-sub degression_fd1_0_c1'  type="text" placeholder="搜索" confirm-type="done" :maxlength="-1" placeholder-style="color:#999;font-size:28rpx"  v-model="fd1_0_c1" />
</view>
</view>
<!---flex布局flex布局结束-->
<!---flex布局flex布局开始-->
 <view class="flex flex-direction flex-wrap align-stretch benben-flex-layout degression_flex_2"   >
            <view   class='flex flex-direction flex-wrap align-stretch degression_fd2_0'  @tap.stop="handleJumpDiy" data-type="navigateTo" :data-url="`/pages/applicationCenter/costDetails/costDetails`"   >
            <view   class='flex flex-wrap align-center justify-between degression_fd2_0_c0'     >
            <view   class='flex flex-wrap align-center'     >
        <text class='degression_fd2_0_c0_c0_c0' >项目编号：</text>
<text class='degression_fd2_0_c0_c0_c1' >2022-N4-005-J</text>
</view>
    <view   class='flex flex-wrap align-center'     >
        <text class='degression_fd2_0_c0_c1_c0' >详情</text>
</view>
</view>
    <view   class='flex flex-wrap align-start degression_fd2_0_c1'     >
        <text class='degression_fd2_0_c1_c0' >项目名称</text>
<text class='flex-sub degression_fd2_0_c1_c1' >关于二阳县光电产业园基础设施建设项目-园区基础设施改扩建工程</text>
</view>
    <view   class='flex flex-wrap align-center degression_fd2_0_c2'     >
        <text class='degression_fd2_0_c2_c0' >主负责人</text>
<text class='flex-sub degression_fd2_0_c2_c1' >陈沉沉</text>
</view>
    <view   class='flex flex-wrap align-center degression_fd2_0_c3'     >
        <text class='degression_fd2_0_c3_c0' >合计(元)</text>
<text class='flex-sub degression_fd2_0_c3_c1' >80000</text>
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
			return {"fd1_0_c1":"","cut":"1"};
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
    .degression_flex_0{
        background:#fff;background-size: 100% !important;width:750rpx;height:88rpx;overflow:hidden;z-index:10;top:0rpx;background-size:100% auto !important;
    }
    .degression_fd0_2{
        width:100rpx;height:88rpx;margin:0rpx 32rpx 0rpx 0rpx;
    }
    .degression_fd0_1{
        color:#000000;font-size:36rpx;font-weight:500;line-height:50rpx;
    }
    .degression_fd0_0{
        width:100rpx;height:88rpx;margin:0rpx 0rpx 0rpx 32rpx;
    }
    .degression_flex_1{
        padding:0rpx 32rpx 0rpx 32rpx;margin:24rpx 0rpx 0rpx 0rpx;
    }
    .degression_fd1_0_c1{
        margin:0rpx 0rpx 0rpx 14rpx;color:#333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .degression_fd1_0_c0{
        width:40rpx;height:40rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .degression_fd1_0{
        background:#fff;background-size: 100% !important;border-radius:34rpx 34rpx 34rpx 34rpx;padding:16rpx 24rpx 16rpx 24rpx;
    }
    .degression_flex_2{
        padding:0rpx 24rpx 0rpx 24rpx;
    }
    .degression_fd2_0_c3_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 25rpx;
    }
    .degression_fd2_0_c3_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .degression_fd2_0_c3{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .degression_fd2_0_c2_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .degression_fd2_0_c2_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .degression_fd2_0_c2{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .degression_fd2_0_c1_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .degression_fd2_0_c1_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .degression_fd2_0_c1{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .degression_fd2_0_c0_c1_c0{
        color:#0B1898;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .degression_fd2_0_c0_c0_c1{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .degression_fd2_0_c0_c0_c0{
        color:rgba(102, 102, 102, 1);font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .degression_fd2_0_c0{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:0rpx 0rpx 20rpx 0rpx;
    }
    .degression_fd2_0{
        background:#fff;background-size: 100% !important;border-radius:16rpx 16rpx 16rpx 16rpx;padding:32rpx 24rpx 32rpx 24rpx;margin:20rpx 0rpx 0rpx 0rpx;
    }
</style>