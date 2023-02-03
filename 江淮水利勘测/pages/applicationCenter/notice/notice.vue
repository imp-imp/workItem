<template>
    <view class="page" :style="themeColor">
    <view class="flex flex-wrap align-center justify-between benben-position-layout flex notice_flex_0"    :style="{height:(88+StatusBarRpx)+'rpx',paddingTop:StatusBarRpx+'rpx'}">
            <view   class='flex flex-wrap align-center notice_fd0_0'  @tap.stop="handleJumpDiy" data-type="back" data-url="1"   >
        <text class='fu-iconfont2' >&#xe794;</text>
</view>
<text class='notice_fd0_1' >详情</text>
    <view   class='flex flex-wrap align-center notice_fd0_2'     >
        </view>

        </view>
<view :style="{height: (88+StatusBarRpx)+'rpx'}"  ></view>
<!---flex布局flex布局开始-->
 <view class="flex flex-direction flex-wrap align-stretch benben-flex-layout notice_flex_1"   >
        <text class='notice_fd1_0' >公告标题节假日公告</text>
    <view   class='flex flex-wrap align-center notice_fd1_1'     >
        <text class='notice_fd1_1_c0' >2020-08-21</text>
<text class='notice_fd1_1_c1' >13:00</text>
</view>
</view>
<!---flex布局flex布局结束-->
    <view class="ben_fu-jyf-parser_2" >
        <jyf-parser :html="parser2 | richTextFormat"></jyf-parser>
    </view>
    
    </view>
</template>
<script>
    
    export default {
        components:{},
        
        data(){
			return {"parser2":"这是富文本"};
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
    .notice_flex_0{
        border-bottom:1px solid rgba(238, 238, 238, 1);background:#fff;background-size: 100% !important;width:750rpx;height:88rpx;overflow:hidden;z-index:10;top:0rpx;background-size:100% auto !important;
    }
    .notice_fd0_2{
        width:100rpx;height:88rpx;margin:0rpx 32rpx 0rpx 0rpx;
    }
    .notice_fd0_1{
        color:#000000;font-size:36rpx;font-weight:500;line-height:50rpx;-webkit-line-clamp:1;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;max-width:400rpx;
    }
    .notice_fd0_0{
        width:100rpx;height:88rpx;margin:0rpx 0rpx 0rpx 32rpx;
    }
    .notice_flex_1{
        padding:0rpx 32rpx 0rpx 32rpx;
    }
    .notice_fd1_1_c1{
        color:#999999;font-size:24rpx;font-weight:400;line-height:33rpx;margin:0rpx 0rpx 0rpx 10rpx;
    }
    .notice_fd1_1_c0{
        color:#999999;font-size:24rpx;font-weight:400;line-height:33rpx;
    }
    .notice_fd1_1{
        margin:48rpx 0rpx 0rpx 0rpx;
    }
    .notice_fd1_0{
        color:#333333;font-size:32rpx;font-weight:500;line-height:45rpx;text-align:center;margin:024rpx 0rpx 0rpx 0rpx;
    }
    .ben_fu-jyf-parser_2{
       background-color:#fff;
padding-left:32rpx;
padding-right:32rpx;
padding-top:40rpx;
padding-bottom:0rpx;

    }
</style>