<template>
    <view class="page" :style="themeColor">
    <view class="flex flex-wrap align-center justify-between benben-position-layout flex costDetails_flex_0"    :style="{height:(88+StatusBarRpx)+'rpx',paddingTop:StatusBarRpx+'rpx'}">
            <view   class='flex flex-wrap align-center costDetails_fd0_0'  @tap.stop="handleJumpDiy" data-type="back" data-url="1"   >
        <text class='fu-iconfont2' >&#xe794;</text>
</view>
<text class='costDetails_fd0_1' >详情</text>
    <view   class='flex flex-wrap align-center costDetails_fd0_2'     >
        </view>

        </view>
<view :style="{height: (88+StatusBarRpx)+'rpx'}"  ></view>
<!---flex布局flex布局开始-->
 <view class="flex flex-direction flex-wrap align-stretch benben-flex-layout costDetails_flex_1"   >
            <view   class='flex flex-direction flex-wrap align-stretch costDetails_fd1_0'     >
            <view   class='flex flex-wrap align-center'     >
        <text class='costDetails_fd1_0_c0_c0' >项目编号：</text>
<text class='costDetails_fd1_0_c0_c1' >2022-N4-005-J</text>
</view>
    <view   class='flex flex-wrap align-start costDetails_fd1_0_c1'     >
        <text class='costDetails_fd1_0_c1_c0' >项目名称</text>
<text class='flex-sub costDetails_fd1_0_c1_c1' >关于二阳县光电产业园基础设施建设项目-园区基础设施改扩建工程</text>
</view>
    <view   class='flex flex-wrap align-center costDetails_fd1_0_c2'     >
        <text class='costDetails_fd1_0_c2_c0' >项目成本</text>
<text class='flex-sub costDetails_fd1_0_c2_c1' >￥82400</text>
</view>
    <view   class='flex flex-wrap align-center costDetails_fd1_0_c3'     >
        <text class='costDetails_fd1_0_c3_c0' >主负责人</text>
<text class='flex-sub costDetails_fd1_0_c3_c1' >陈沉沉</text>
</view>
</view>
    <view   class='flex flex-wrap align-center justify-between costDetails_fd1_1'     >
        <text class='costDetails_fd1_1_c0' >成本详情</text>
    <view   class='flex flex-wrap align-center'     >
        <image class='costDetails_fd1_1_c1_c0' mode="aspectFit"  :src='STATIC_URL+"47.png"'></image>
<text class='costDetails_fd1_1_c1_c1' >筛选</text>
</view>
</view>
        <jyf-parser class='costDetails_fd1_2'   >
        </jyf-parser>
</view>
<!---flex布局flex布局结束-->
    
    </view>
</template>
<script>
    
    export default {
        components:{},
        
        data(){
			return {"cut":"1"};
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
    .costDetails_flex_0{
        border-bottom:1px solid rgba(238, 238, 238, 1);background:#fff;background-size: 100% !important;width:750rpx;height:88rpx;overflow:hidden;z-index:10;top:0rpx;background-size:100% auto !important;
    }
    .costDetails_fd0_2{
        width:100rpx;height:88rpx;margin:0rpx 32rpx 0rpx 0rpx;
    }
    .costDetails_fd0_1{
        color:#000000;font-size:36rpx;font-weight:500;line-height:50rpx;
    }
    .costDetails_fd0_0{
        width:100rpx;height:88rpx;margin:0rpx 0rpx 0rpx 32rpx;
    }
    .costDetails_flex_1{
        padding:0rpx 24rpx 0rpx 24rpx;
    }
    ::v-deep .costDetails_fd1_2{
        width:100%;
    }
    .costDetails_fd1_1_c1_c1{
        color:#0B1898;font-size:24rpx;font-weight:400;line-height:33rpx;margin:0rpx 0rpx 0rpx 8rpx;
    }
    .costDetails_fd1_1_c1_c0{
        width:28rpx;height:28rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .costDetails_fd1_1_c0{
        color:#333333;font-size:32rpx;font-weight:500;line-height:45rpx;
    }
    .costDetails_fd1_1{
        margin:65rpx 0rpx 25rpx 0rpx;
    }
    .costDetails_fd1_0_c3_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 25rpx;
    }
    .costDetails_fd1_0_c3_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .costDetails_fd1_0_c3{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .costDetails_fd1_0_c2_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .costDetails_fd1_0_c2_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .costDetails_fd1_0_c2{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .costDetails_fd1_0_c1_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .costDetails_fd1_0_c1_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .costDetails_fd1_0_c1{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .costDetails_fd1_0_c0_c1{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .costDetails_fd1_0_c0_c0{
        color:rgba(102, 102, 102, 1);font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .costDetails_fd1_0{
        background:#fff;background-size: 100% !important;border-radius:16rpx 16rpx 16rpx 16rpx;padding:0rpx 0rpx 0rpx 0rpx;margin:32rpx 0rpx 0rpx 0rpx;
    }
</style>