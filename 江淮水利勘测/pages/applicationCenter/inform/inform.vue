<template>
    <view class="page" :style="themeColor">
    <view class="flex flex-wrap align-center justify-between benben-position-layout flex inform_flex_0"    :style="{height:(88+StatusBarRpx)+'rpx',paddingTop:StatusBarRpx+'rpx'}">
            <view   class='flex flex-wrap align-center inform_fd0_0'  @tap.stop="handleJumpDiy" data-type="back" data-url="1"   >
        <text class='fu-iconfont2' >&#xe794;</text>
</view>
<text class='inform_fd0_1' >公告通知</text>
    <view   class='flex flex-wrap align-center inform_fd0_2'     >
        </view>

        </view>
<view :style="{height: (88+StatusBarRpx)+'rpx'}"  ></view>
<!---flex布局flex布局开始-->
 <view class="flex flex-direction flex-wrap align-stretch benben-flex-layout inform_flex_1"   >
            <view   class='flex flex-wrap align-center inform_fd1_0'     >
        <image class='inform_fd1_0_c0' mode="aspectFit"  :src='STATIC_URL+"37.png"'></image>
<input class='flex-sub inform_fd1_0_c1'  type="text" placeholder="搜索" confirm-type="done" :maxlength="-1" placeholder-style="color:#999;font-size:28rpx"  v-model="fd1_0_c1" />
</view>
</view>
<!---flex布局flex布局结束-->
<!---flex布局flex布局开始-->
 <view class="flex flex-direction flex-wrap align-stretch benben-flex-layout inform_flex_2"   >
            <view   class='flex flex-direction flex-wrap align-stretch inform_fd2_0'  @tap.stop="handleJumpDiy" data-type="navigateTo" :data-url="`/pages/applicationCenter/notice/notice`"   >
        <text class='inform_fd2_0_c0' >公告标题节假日公告</text>
<text class='inform_fd2_0_c1' >2022年中秋节假期安排为：9月10日至12日放假，假期共3天，不调休。</text>
    <view   class='flex flex-wrap align-center justify-end'     >
        <text class='inform_fd2_0_c2_c0' >2020-11-01</text>
<text class='inform_fd2_0_c2_c1' >12:33</text>
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
			return {"fd1_0_c1":""};
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
    .inform_flex_0{
        background:#fff;background-size: 100% !important;width:750rpx;height:88rpx;overflow:hidden;z-index:10;top:0rpx;background-size:100% auto !important;
    }
    .inform_fd0_2{
        width:100rpx;height:88rpx;margin:0rpx 32rpx 0rpx 0rpx;
    }
    .inform_fd0_1{
        color:#000000;font-size:36rpx;font-weight:500;line-height:50rpx;
    }
    .inform_fd0_0{
        width:100rpx;height:88rpx;margin:0rpx 0rpx 0rpx 32rpx;
    }
    .inform_flex_1{
        padding:0rpx 32rpx 0rpx 32rpx;margin:24rpx 0rpx 12rpx 0rpx;
    }
    .inform_fd1_0_c1{
        margin:0rpx 0rpx 0rpx 14rpx;color:#333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .inform_fd1_0_c0{
        width:40rpx;height:40rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .inform_fd1_0{
        background:#fff;background-size: 100% !important;border-radius:34rpx 34rpx 34rpx 34rpx;padding:16rpx 24rpx 16rpx 24rpx;
    }
    .inform_flex_2{
        padding:0rpx 24rpx 0rpx 24rpx;
    }
    .inform_fd2_0_c2_c1{
        color:#999999;font-size:24rpx;font-weight:400;line-height:33rpx;margin:0rpx 0rpx 0rpx 10rpx;
    }
    .inform_fd2_0_c2_c0{
        color:#999999;font-size:24rpx;font-weight:400;line-height:33rpx;
    }
    .inform_fd2_0_c1{
        color:#666666;font-size:28rpx;font-weight:400;line-height:46rpx;margin:24rpx 0rpx 24rpx 0rpx;
    }
    .inform_fd2_0_c0{
        color:#333333;font-size:32rpx;font-weight:500;line-height:45rpx;
    }
    .inform_fd2_0{
        background:#fff;background-size: 100% !important;border-radius:16rpx 16rpx 16rpx 16rpx;padding:32rpx 24rpx 32rpx 24rpx;margin:20rpx 0rpx 0rpx 0rpx;
    }
</style>