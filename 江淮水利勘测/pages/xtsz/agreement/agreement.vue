<template>
    <view class="page" :style="themeColor">
    <view class="flex flex-wrap align-center justify-between benben-position-layout flex agreement_flex_0"    :style="{height:(88+StatusBarRpx)+'rpx',paddingTop:StatusBarRpx+'rpx'}">
            <view   class='flex flex-wrap align-center agreement_fd0_0'  @tap.stop="handleJumpDiy" data-type="back" data-url="1"   >
        <text class='fu-iconfont2' >&#xe794;</text>
</view>
<text class='agreement_fd0_1'   v-if= "type=='1'"  >注册协议</text><text class='agreement_fd0_1_1'   v-if= "type=='2'"  >隐私政策</text>
    <view   class='flex flex-wrap align-center agreement_fd0_2'     >
        </view>

        </view>
<view :style="{height: (88+StatusBarRpx)+'rpx'}"  ></view>
    <view class="ben_fu-jyf-parser_1" >
        <jyf-parser :html="parser1 | richTextFormat"></jyf-parser>
    </view>
    
    </view>
</template>
<script>
    
    export default {
        components:{},
        
        data(){
			return {"parser1":"这是富文本","type":""};
		},
		computed:{
            themeColor() {
              return this.$store.getters.themeColor
            },
            
		},
		watch:{},
		onLoad(options){
            let {type}=options
this.type=type||''
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
    .agreement_flex_0{
        border-bottom:1px solid rgba(238, 238, 238, 1);background:#fff;background-size: 100% !important;width:750rpx;height:88rpx;overflow:hidden;z-index:10;top:0rpx;background-size:100% auto !important;
    }
    .agreement_fd0_2{
        width:100rpx;height:88rpx;margin:0rpx 32rpx 0rpx 0rpx;
    }
    .agreement_fd0_1_1{
        color:#000000;font-size:36rpx;font-weight:500;line-height:50rpx;
    }
    .agreement_fd0_1{
        color:#000000;font-size:36rpx;font-weight:500;line-height:50rpx;
    }
    .agreement_fd0_0{
        width:100rpx;height:88rpx;margin:0rpx 0rpx 0rpx 32rpx;
    }
    .ben_fu-jyf-parser_1{
       background-color:#fff;
padding-left:32rpx;
padding-right:32rpx;
padding-top:32rpx;
padding-bottom:0rpx;

    }
</style>