<template>
    <view class="page" :style="themeColor">
    <view class="flex flex-wrap align-center justify-between benben-position-layout flex dismissApproval_flex_0"    :style="{height:(88+StatusBarRpx)+'rpx',paddingTop:StatusBarRpx+'rpx'}">
            <view   class='flex flex-wrap align-center dismissApproval_fd0_0'  @tap.stop="handleJumpDiy" data-type="back" data-url="1"   >
        <text class='fu-iconfont2' >&#xe794;</text>
</view>
<text class='dismissApproval_fd0_1' >审批</text>
    <view   class='flex flex-wrap align-center dismissApproval_fd0_2'     >
        </view>

        </view>
<view :style="{height: (88+StatusBarRpx)+'rpx'}"  ></view>
<!---flex布局flex布局开始-->
 <view class="flex flex-direction flex-wrap align-stretch benben-flex-layout dismissApproval_flex_1"   >
            <view   class='flex flex-wrap align-center justify-center dismissApproval_fd1_0'     >
        <image class='dismissApproval_fd1_0_c0' mode="aspectFit"  :src='STATIC_URL+"90.png"'></image>
</view>
<text class='dismissApproval_fd1_1' >确定要驳回该审批吗？</text>
    <view   class='flex flex-direction flex-wrap align-stretch dismissApproval_fd1_2'     >
            <view   class='flex flex-wrap align-center'     >
        <text class='dismissApproval_fd1_2_c0_c0' >本月剩余额度</text>
<text class='dismissApproval_fd1_2_c0_c1' >￥</text>
<text class='dismissApproval_fd1_2_c0_c2' >38600</text>
<text class='dismissApproval_fd1_2_c0_c3' >本月总额度</text>
<text class='dismissApproval_fd1_2_c0_c4' >¥</text>
<text class='dismissApproval_fd1_2_c0_c5' >5000</text>
</view>
<text class='dismissApproval_fd1_2_c1' >注意:超出限额需转董事长审批</text>
</view>
<text class='dismissApproval_fd1_3' >驳回原因</text>
    <view   class='flex flex-wrap align-center dismissApproval_fd1_4'     >
        <input class='flex-sub dismissApproval_fd1_4_c0'  type="text" placeholder="请输入驳回原因" confirm-type="done" :maxlength="-1" placeholder-style="color:#999;font-size:28rpx"  v-model="fd1_4_c0" />
</view>
    <view   class='flex flex-direction flex-wrap align-stretch dismissApproval_fd1_5'     >
        <text class='dismissApproval_fd1_5_c0' >抄送给</text>
    <view   class='flex flex-wrap align-center dismissApproval_fd1_5_c1'     >
            <view   class='flex flex-direction flex-wrap align-center dismissApproval_fd1_5_c1_c0'     >
        <image class='dismissApproval_fd1_5_c1_c0_c0' mode="aspectFit"  :src='STATIC_URL+"32.png"'></image>
<text class='dismissApproval_fd1_5_c1_c0_c1' >温温问
(总经理)</text>
</view>
</view>
</view>
<text class='dismissApproval_fd1_6' >电子签名</text>
    <view   class='flex flex-wrap align-center dismissApproval_fd1_7'     >
        <image class='dismissApproval_fd1_7_c0' mode="aspectFit"  :src='STATIC_URL+"89.png"'></image>
<input class='flex-sub dismissApproval_fd1_7_c1'  type="text" placeholder="请签名" confirm-type="done" :maxlength="-1" placeholder-style="color:#999;font-size:28rpx"  v-model="fd1_7_c1" />
</view>
</view>
<!---flex布局flex布局结束-->
    <view class="flex flex-direction flex-wrap align-center benben-position-layout flex dismissApproval_flex_2"    >
        <button class='dismissApproval_fd2_0' >确定</button>

        </view>
<view :style="{height: '136rpx'}"  ></view>
    
    </view>
</template>
<script>
    
    export default {
        components:{},
        
        data(){
			return {"fd1_4_c0":"","fd1_7_c1":""};
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
    .dismissApproval_flex_0{
        border-bottom:1px solid rgba(238, 238, 238, 1);background:#fff;background-size: 100% !important;width:750rpx;height:88rpx;overflow:hidden;z-index:10;top:0rpx;background-size:100% auto !important;
    }
    .dismissApproval_fd0_2{
        width:100rpx;height:88rpx;margin:0rpx 32rpx 0rpx 0rpx;
    }
    .dismissApproval_fd0_1{
        color:#000000;font-size:36rpx;font-weight:500;line-height:50rpx;
    }
    .dismissApproval_fd0_0{
        width:100rpx;height:88rpx;margin:0rpx 0rpx 0rpx 32rpx;
    }
    .dismissApproval_flex_1{
        padding:0rpx 48rpx 0rpx 48rpx;
    }
    .dismissApproval_fd1_7_c1{
        margin:0rpx 0rpx 0rpx 16rpx;color:#333;font-size:32rpx;font-weight:400;line-height:45rpx;
    }
    .dismissApproval_fd1_7_c0{
        width:32rpx;height:32rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .dismissApproval_fd1_7{
        background:rgba(243, 246, 251, 1);background-size: 100% !important;border-radius:16rpx 16rpx 16rpx 16rpx;padding:22rpx 24rpx 22rpx 24rpx;margin:0rpx 0rpx 0rpx 0rpx;
    }
    .dismissApproval_fd1_6{
        color:#333333;font-size:32rpx;font-weight:500;line-height:45rpx;margin:24rpx 0rpx 16rpx 0rpx;
    }
    .dismissApproval_fd1_5_c1_c0_c1{
        color:#9EA7B7;font-size:20rpx;font-weight:400;line-height:24rpx;text-align:center;margin:6rpx 0rpx 0rpx 0rpx;
    }
    .dismissApproval_fd1_5_c1_c0_c0{
        width:36rpx;height:36rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .dismissApproval_fd1_5_c1_c0{
        margin:0rpx 32rpx 0rpx 0rpx;
    }
    .dismissApproval_fd1_5_c1{
        margin:15rpx 0rpx 0rpx 0rpx;
    }
    .dismissApproval_fd1_5_c0{
        color:#333333;font-size:32rpx;font-weight:500;line-height:45rpx;
    }
    .dismissApproval_fd1_5{
        margin:24rpx 0rpx 0rpx 0rpx;
    }
    .dismissApproval_fd1_4_c0{
        margin:0rpx 0rpx 0rpx 16rpx;color:#333;font-size:32rpx;font-weight:400;line-height:45rpx;
    }
    .dismissApproval_fd1_4{
        background:rgba(243, 246, 251, 1);background-size: 100% !important;border-radius:16rpx 16rpx 16rpx 16rpx;padding:22rpx 24rpx 22rpx 24rpx;margin:0rpx 0rpx 0rpx 0rpx;
    }
    .dismissApproval_fd1_3{
        color:#333333;font-size:32rpx;font-weight:500;line-height:45rpx;margin:24rpx 0rpx 16rpx 0rpx;
    }
    .dismissApproval_fd1_2_c1{
        color:#0B1898;font-size:24rpx;font-weight:400;line-height:33rpx;text-align:center;margin:23rpx 0rpx 0rpx 0rpx;
    }
    .dismissApproval_fd1_2_c0_c5{
        color:#E63541;font-size:32rpx;font-weight:500;line-height:45rpx;
    }
    .dismissApproval_fd1_2_c0_c4{
        color:#E63541;font-size:32rpx;font-weight:500;line-height:45rpx;
    }
    .dismissApproval_fd1_2_c0_c3{
        color:#333;font-size:24rpx;font-weight:500;line-height:45rpx;margin:0rpx 0rpx 0rpx 32rpx;
    }
    .dismissApproval_fd1_2_c0_c2{
        color:#E63541;font-size:32rpx;font-weight:500;line-height:45rpx;
    }
    .dismissApproval_fd1_2_c0_c1{
        color:#E63541;font-size:32rpx;font-weight:500;line-height:45rpx;
    }
    .dismissApproval_fd1_2_c0_c0{
        color:#333;font-size:24rpx;font-weight:500;line-height:45rpx;
    }
    .dismissApproval_fd1_2{
        background:url(/static/images/88.png) no-repeat;background-size: 100% !important;padding:40rpx 42rpx 40rpx 42rpx;background-size:100% auto !important;
    }
    .dismissApproval_fd1_1{
        text-align:center;color:#000000;font-size:32rpx;font-weight:700;line-height:45rpx;margin:24rpx 0rpx 24rpx 0rpx;
    }
    .dismissApproval_fd1_0_c0{
        width:172rpx;height:172rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .dismissApproval_fd1_0{
        margin:50rpx 0rpx 0rpx 0rpx;
    }
    .dismissApproval_flex_2{
        width:750rpx;height:136rpx;overflow:hidden;z-index:10;bottom:calc(0rpx + var(--window-bottom));
    }
    .dismissApproval_fd2_0{
        background:rgba(11, 24, 152, 1);background-size: 100% !important;border-radius:100rpx 100rpx 100rpx 100rpx;font-size:32rpx;color:#fff;width:420rpx;height:88rpx;line-height:88rpx;
    }
</style>