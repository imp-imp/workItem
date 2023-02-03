<template>
    <view class="page" :style="themeColor">
    <view class="flex flex-direction flex-wrap align-stretch justify-center benben-position-layout flex logOutReason_flex_0"    :style="{height:(88+StatusBarRpx)+'rpx',paddingTop:StatusBarRpx+'rpx'}">
            <view   class='flex flex-wrap align-stretch justify-between logOutReason_fd0_0'     >
            <view   class='flex flex-wrap align-center logOutReason_fd0_0_c0'  @tap.stop="handleJumpDiy" data-type="back" data-url="1"   >
        <text class='fu-iconfont2  logOutReason_fd0_0_c0_c0' >&#xe794;</text>
</view>
    <view   class='flex flex-wrap align-center'     >
        <text class='logOutReason_fd0_0_c1_c0' >注销账号</text>
</view>
    <view   class='flex align-center justify-end logOutReason_fd0_0_c2'     >
        </view>
</view>

        </view>
<view :style="{height: (88+StatusBarRpx)+'rpx'}"  ></view>
<!---注销账号原因-带图flex布局开始-->
 <view class="flex flex-direction flex-wrap align-stretch logOutReason_flex_1"   >
            <view   class='flex flex-wrap align-center logOutReason_fd1_0'     >
        <text class='logOutReason_fd1_0_c0' >账号注销</text>
</view>
<text class='logOutReason_fd1_1' >永久注销且无法恢复，请谨慎操作</text>
    <view   class='flex flex-wrap align-center logOutReason_fd1_2'     >
        <text class='logOutReason_fd1_2_c0' >请选择注销账号的原因</text>
</view>
    <view   class='flex flex-direction flex-wrap align-stretch'     >
            <benben-select-diy ref="showSelectPopup1661340912869" class-name='flex flex-direction align-stretch flex' :items.sync="changeType" v-model="changeId"  default-type="value" default-label="name" :allow-cancel='false' type="radio" :disabled='false'  >
    <template v-for = '(item,key0) in changeType'>
            <view v-if="item.isSelected"  class='flex align-center flex logOutReason_fd1_3_c0_c0' :key="key0" @tap="$refs.showSelectPopup1661340912869.tapHandle(key0)"     >
        <image class='logOutReason_fd1_3_c0_c0_c0' mode="aspectFit"  :src='STATIC_URL+"22.png"'></image>
<text class='logOutReason_fd1_3_c0_c0_c1' >{{item.name}}</text>
</view>    <view  v-else  class='flex align-center flex logOutReason_fd1_3_c0_c1' :key="key0" @tap="$refs.showSelectPopup1661340912869.tapHandle(key0)"     >
        <image class='logOutReason_fd1_3_c0_c1_c0' mode="aspectFit"  :src='STATIC_URL+"23.png"'></image>
<text class='logOutReason_fd1_3_c0_c1_c1' >{{item.name}}</text>
</view></template></benben-select-diy>
</view>
<text class='logOutReason_fd1_4' >请填写注销原因</text>
<view class='flex flex-wrap logOutReason_fd1_5'>
<textarea class='flex logOutReason_input_fd1_5' confirm-type="done" :placeholder="'请输入'" :maxlength="240" placeholder-style="color:#999;font-size:28rpx"   v-model="fd1_5" />

</view>
</view>
<!---注销账号原因-带图flex布局结束-->
    <view class="flex flex-wrap align-stretch justify-center benben-position-layout flex logOutReason_flex_2"    >
        <button class='flex-sub logOutReason_fd2_0' @tap.stop="handleJumpDiy" data-type="navigateTo" :data-url="`/pages/xtsz/logOutRisk/logOutRisk`"  >下一步</button>

        </view>
<view :style="{height: '136rpx'}"  ></view>
    
    </view>
</template>
<script>
    
    export default {
        components:{},
        
        data(){
			return {"fd1_5":"","changeType":[{"name":"多账号，释放手机号","value":"1","image":""},{"name":"不想使用了","value":"2","image":""},{"name":"其他","value":"3","image":""}],"changeId":"1"};
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
    .logOutReason_flex_0{
        border-bottom:1px solid #eee;background:#fff;background-size: 100% !important;width:750rpx;height:88rpx;overflow:hidden;z-index:10;top:0rpx;background-size:100% auto !important;
    }
    .logOutReason_fd0_0_c2{
        padding:0rpx 0rpx 0rpx 0rpx;width:100rpx;
    }
    .logOutReason_fd0_0_c1_c0{
        font-size:36rpx;font-weight:500;color:#333333;line-height:50rpx;
    }
    .logOutReason_fd0_0_c0_c0{
        font-size:36rpx;font-weight:400;color:#333;
    }
    .logOutReason_fd0_0_c0{
        width:100rpx;
    }
    .logOutReason_fd0_0{
        padding:0rpx 32rpx 0rpx 32rpx;line-height:88rpx;
    }
    .logOutReason_flex_1{
        background:#fff;background-size: 100% !important;font-size:32rpx;background-size:100% auto !important;padding:32rpx 32rpx 32rpx 32rpx;
    }
    .logOutReason_input_fd1_5{
        width:100%;height:80rpx;font-size:28rpx;font-weight:400;color:#333;
    }
    .logOutReason_fd1_5{
        background:rgba(246, 247, 249, 1);background-size: 100% !important;width:686rpx;border-radius:10rpx 10rpx 10rpx 10rpx;padding:24rpx 24rpx 24rpx 24rpx;margin:0rpx 0rpx 0rpx 0rpx;
    }
    .logOutReason_fd1_4{
        border-top:1px solid #eee;line-height:33rpx;font-size:24rpx;font-weight:400;color:#FE4C2E;padding:58rpx 0rpx 24rpx 0rpx;margin:32rpx 0rpx 0rpx 0rpx;
    }
    .logOutReason_fd1_3_c0_c1_c1{
        line-height:40rpx;font-size:28rpx;font-weight:500;color:#333333;
    }
    .logOutReason_fd1_3_c0_c1_c0{
        width:36rpx;height:36rpx;border-radius:0rpx 0rpx 0rpx 0rpx;margin:0rpx 20rpx 0rpx 0rpx;
    }
    .logOutReason_fd1_3_c0_c1{
        padding:20rpx 0rpx 20rpx 0rpx;
    }
    .logOutReason_fd1_3_c0_c0_c1{
        line-height:40rpx;font-size:28rpx;font-weight:500;color:#333333;
    }
    .logOutReason_fd1_3_c0_c0_c0{
        width:36rpx;height:36rpx;border-radius:0rpx 0rpx 0rpx 0rpx;margin:0rpx 20rpx 0rpx 0rpx;
    }
    .logOutReason_fd1_3_c0_c0{
        padding:20rpx 0rpx 20rpx 0rpx;
    }
    .logOutReason_fd1_2_c0{
        line-height:45rpx;font-size:32rpx;font-weight:700;color:#333333;
    }
    .logOutReason_fd1_2{
        padding:56rpx 0rpx 12rpx 0rpx;
    }
    .logOutReason_fd1_1{
        line-height:40rpx;font-size:28rpx;font-weight:400;color:#666666;
    }
    .logOutReason_fd1_0_c0{
        line-height:45rpx;font-size:32rpx;font-weight:700;color:#333333;
    }
    .logOutReason_fd1_0{
        padding:32rpx 0rpx 32rpx 0rpx;
    }
    .logOutReason_flex_2{
        width:750rpx;height:136rpx;overflow:hidden;z-index:10;bottom:calc(0rpx + var(--window-bottom));
    }
    .logOutReason_fd2_0{
        background:rgba(11, 24, 152, 1);background-size: 100% !important;border-radius:44rpx 44rpx 44rpx 44rpx;font-size:32rpx;color:#fff;margin:0rpx 32rpx 0rpx 32rpx;height:88rpx;line-height:88rpx;
    }
</style>