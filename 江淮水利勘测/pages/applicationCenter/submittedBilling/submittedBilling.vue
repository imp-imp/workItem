<template>
    <view class="page" :style="themeColor">
    <view class="flex flex-wrap align-center justify-between benben-position-layout flex submittedBilling_flex_0"    :style="{height:(88+StatusBarRpx)+'rpx',paddingTop:StatusBarRpx+'rpx'}">
            <view   class='flex flex-wrap align-center submittedBilling_fd0_0'  @tap.stop="handleJumpDiy" data-type="back" data-url="1"   >
        <text class='fu-iconfont2' >&#xe794;</text>
</view>
<text class='submittedBilling_fd0_1' >详情</text>
    <view   class='flex flex-wrap align-center submittedBilling_fd0_2'     >
        </view>

        </view>
<view :style="{height: (88+StatusBarRpx)+'rpx'}"  ></view>
<!---flex布局flex布局开始-->
 <view class="flex flex-direction flex-wrap align-stretch benben-flex-layout submittedBilling_flex_1"   >
            <view   class='flex flex-wrap align-center submittedBilling_fd1_0'     >
        <image class='submittedBilling_fd1_0_c0' mode="aspectFit"  :src='STATIC_URL+"43.png"'></image>
<image class='submittedBilling_fd1_0_c1' :src='STATIC_URL+"42.png"'  v-if= "type=='1'"></image><image class='submittedBilling_fd1_0_c1_1' :src='STATIC_URL+"44.png"'  v-if= "type=='2'"></image><image class='submittedBilling_fd1_0_c1_2' :src='STATIC_URL+"45.png"'  v-if= "type=='3'"></image>
    <view   class='flex flex-wrap align-center submittedBilling_fd1_0_c2'   v-if= "type=='2'"  >
        <text class='submittedBilling_fd1_0_c2_c0' >请耐心等待…</text>
</view>
</view>
    <view   class='flex flex-direction flex-wrap align-stretch submittedBilling_fd1_1'     >
            <view   class='flex flex-wrap align-center justify-between submittedBilling_fd1_1_c0'     >
        <text class='submittedBilling_fd1_1_c0_c0' >开票内容</text>
</view>
    <view   class='flex flex-wrap align-center submittedBilling_fd1_1_c1'     >
        <text class='submittedBilling_fd1_1_c1_c0' >开票金额</text>
<text class='flex-sub submittedBilling_fd1_1_c1_c1' >2000元</text>
</view>
    <view   class='flex flex-wrap align-center submittedBilling_fd1_1_c2'     >
        <text class='submittedBilling_fd1_1_c2_c0' >项目编号</text>
<text class='flex-sub submittedBilling_fd1_1_c2_c1' >2022-N4-001-J</text>
</view>
    <view   class='flex flex-wrap align-start submittedBilling_fd1_1_c3'     >
        <text class='submittedBilling_fd1_1_c3_c0' >项目名称</text>
<text class='flex-sub submittedBilling_fd1_1_c3_c1' >关于二阳县光电产业园基础设施建设项目-园区基础设施改扩建工程</text>
</view>
    <view   class='flex flex-wrap align-center submittedBilling_fd1_1_c4'     >
        <text class='submittedBilling_fd1_1_c4_c0' >创建时间</text>
<text class='flex-sub submittedBilling_fd1_1_c4_c1' >2022-08-08  10:10</text>
</view>
    <view   class='flex flex-wrap align-center submittedBilling_fd1_1_c5'   v-if= "type!='1'"  >
        <text class='submittedBilling_fd1_1_c5_c0' >申请时间</text>
<text class='flex-sub submittedBilling_fd1_1_c5_c1' >2022-08-08  10:10</text>
</view>
</view>
    <view   class='flex flex-direction flex-wrap align-stretch submittedBilling_fd1_2'   v-if= "type=='3'"  >
            <view   class='flex flex-wrap align-center justify-between submittedBilling_fd1_2_c0'     >
        <text class='submittedBilling_fd1_2_c0_c0' >开票信息</text>
</view>
    <view   class='flex flex-wrap align-center submittedBilling_fd1_2_c1'     >
        <text class='submittedBilling_fd1_2_c1_c0' >实开金额</text>
<text class='flex-sub submittedBilling_fd1_2_c1_c1' >2000元</text>
</view>
    <view   class='flex flex-wrap align-center submittedBilling_fd1_2_c2'     >
        <text class='submittedBilling_fd1_2_c2_c0' >审核人</text>
<text class='flex-sub submittedBilling_fd1_2_c2_c1' >2022-N4-001-J</text>
</view>
    <view   class='flex flex-wrap align-center submittedBilling_fd1_2_c3'     >
        <text class='submittedBilling_fd1_2_c3_c0' >审核时间</text>
<text class='flex-sub submittedBilling_fd1_2_c3_c1' >2022-08-08  10:10</text>
</view>
</view>
</view>
<!---flex布局flex布局结束-->
    <view class="flex flex-wrap align-center justify-end benben-position-layout flex submittedBilling_flex_2"  v-if= "type!='3'"  >
        <button class='submittedBilling_fd2_0'  v-if= "type=='1'" >提交</button><button class='submittedBilling_fd2_0_1' @tap.stop="popupShow1666339712698=true" v-if= "type=='2'" >开票完成</button>

        </view>
<view :style="{height: '97rpx'}" v-if= "type!='3'" ></view>
<benben-popup v-model="popupShow1666339712698" :mask="true"  mode='center'>
    <!---开票flex布局开始-->
 <view class="flex flex-direction flex-wrap align-stretch benben-flex-layout submittedBilling_flex_3"   >
            <view   class='flex flex-direction flex-wrap align-stretch submittedBilling_fd3_0'     >
            <view   class='flex flex-wrap align-center justify-center'     >
        <text class='submittedBilling_fd3_0_c0_c0' >开票完成</text>
<image class='submittedBilling_fd3_0_c0_c1' :src='STATIC_URL+"46.png"' @tap.stop="popupShow1666339712698=false" ></image>
</view>
<text class='submittedBilling_fd3_0_c1' >实际开票金额</text>
    <view   class='flex flex-wrap align-center submittedBilling_fd3_0_c2'     >
        <input class='flex-sub submittedBilling_fd3_0_c2_c0'  type="text" placeholder="请输入实际开票金额" confirm-type="done" :maxlength="-1" placeholder-style="color:#999;font-size:28rpx"  v-model="fd3_0_c2_c0" />
</view>
    <view   class='flex flex-wrap align-center justify-center'     >
        <button class='submittedBilling_fd3_0_c3_c0' >确认</button>
</view>
</view>
</view>
<!---开票flex布局结束-->
</benben-popup>
    
    </view>
</template>
<script>
    
    export default {
        components:{},
        
        data(){
			return {"fd3_0_c2_c0":"","popupShow1666339712698":false,"type":""};
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
            background:rgba(243, 246, 251, 1);background-size: 100% auto !important;
        }
    .submittedBilling_flex_0{
        background:#fff;background-size: 100% !important;width:750rpx;height:88rpx;overflow:hidden;z-index:10;top:0rpx;background-size:100% auto !important;
    }
    .submittedBilling_fd0_2{
        width:100rpx;height:88rpx;margin:0rpx 32rpx 0rpx 0rpx;
    }
    .submittedBilling_fd0_1{
        color:#000000;font-size:36rpx;font-weight:500;line-height:50rpx;
    }
    .submittedBilling_fd0_0{
        width:100rpx;height:88rpx;margin:0rpx 0rpx 0rpx 32rpx;
    }
    .submittedBilling_flex_1{
        background:url(/static/images/41.png) no-repeat;background-size: 100% !important;background-size:100% auto !important;padding:0rpx 32rpx 0rpx 32rpx;
    }
    .submittedBilling_fd1_2_c3_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 64rpx;
    }
    .submittedBilling_fd1_2_c3_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .submittedBilling_fd1_2_c3{
        margin:24rpx 0rpx 0rpx 0rpx;
    }
    .submittedBilling_fd1_2_c2_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 92rpx;
    }
    .submittedBilling_fd1_2_c2_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .submittedBilling_fd1_2_c2{
        margin:24rpx 0rpx 0rpx 0rpx;
    }
    .submittedBilling_fd1_2_c1_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 64rpx;
    }
    .submittedBilling_fd1_2_c1_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .submittedBilling_fd1_2_c1{
        margin:24rpx 0rpx 0rpx 0rpx;
    }
    .submittedBilling_fd1_2_c0_c0{
        color:#333333;font-size:32rpx;font-weight:500;line-height:45rpx;
    }
    .submittedBilling_fd1_2_c0{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:0rpx 0rpx 16rpx 0rpx;
    }
    .submittedBilling_fd1_2{
        background:#fff;background-size: 100% !important;border-radius:16rpx 16rpx 16rpx 16rpx;padding:32rpx 24rpx 32rpx 24rpx;margin:20rpx 0rpx 0rpx 0rpx;
    }
    .submittedBilling_fd1_1_c5_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 64rpx;
    }
    .submittedBilling_fd1_1_c5_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .submittedBilling_fd1_1_c5{
        margin:24rpx 0rpx 0rpx 0rpx;
    }
    .submittedBilling_fd1_1_c4_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 64rpx;
    }
    .submittedBilling_fd1_1_c4_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .submittedBilling_fd1_1_c4{
        margin:24rpx 0rpx 0rpx 0rpx;
    }
    .submittedBilling_fd1_1_c3_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 64rpx;
    }
    .submittedBilling_fd1_1_c3_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .submittedBilling_fd1_1_c3{
        margin:24rpx 0rpx 0rpx 0rpx;
    }
    .submittedBilling_fd1_1_c2_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 64rpx;
    }
    .submittedBilling_fd1_1_c2_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .submittedBilling_fd1_1_c2{
        margin:24rpx 0rpx 0rpx 0rpx;
    }
    .submittedBilling_fd1_1_c1_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 64rpx;
    }
    .submittedBilling_fd1_1_c1_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .submittedBilling_fd1_1_c1{
        margin:24rpx 0rpx 0rpx 0rpx;
    }
    .submittedBilling_fd1_1_c0_c0{
        color:#333333;font-size:32rpx;font-weight:500;line-height:45rpx;
    }
    .submittedBilling_fd1_1_c0{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:0rpx 0rpx 16rpx 0rpx;
    }
    .submittedBilling_fd1_1{
        background:#fff;background-size: 100% !important;border-radius:16rpx 16rpx 16rpx 16rpx;padding:32rpx 24rpx 32rpx 24rpx;margin:20rpx 0rpx 0rpx 0rpx;
    }
    .submittedBilling_fd1_0_c2_c0{
        color:#FFFFFF;font-size:28rpx;font-weight:500;line-height:40rpx;
    }
    .submittedBilling_fd1_0_c2{
        margin:0rpx 0rpx 0rpx auto;
    }
    .submittedBilling_fd1_0_c1_2{
        width:120rpx;height:56rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .submittedBilling_fd1_0_c1_1{
        width:120rpx;height:56rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .submittedBilling_fd1_0_c1{
        width:120rpx;height:56rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .submittedBilling_fd1_0_c0{
        width:88rpx;height:88rpx;border-radius:0rpx 0rpx 0rpx 0rpx;margin:0rpx 24rpx 0rpx 0rpx;
    }
    .submittedBilling_fd1_0{
        margin:40rpx 0rpx 20rpx 0rpx;
    }
    .submittedBilling_flex_2{
        background:#fff;background-size: 100% !important;width:750rpx;height:97rpx;overflow:hidden;z-index:10;bottom:calc(0rpx + var(--window-bottom));background-size:100% auto !important;
    }
    .submittedBilling_fd2_0_1{
        background:rgba(11, 24, 152, 1);background-size: 100% !important;border-radius:50rpx 50rpx 50rpx 50rpx;font-size:24rpx;color:#fff;width:170rpx;height:60rpx;line-height:60rpx;margin:0rpx 24rpx 0rpx 0rpx;
    }
    .submittedBilling_fd2_0{
        background:rgba(11, 24, 152, 1);background-size: 100% !important;border-radius:50rpx 50rpx 50rpx 50rpx;font-size:24rpx;color:#fff;width:170rpx;height:60rpx;line-height:60rpx;margin:0rpx 24rpx 0rpx 0rpx;
    }
    .submittedBilling_flex_3{
        padding:0rpx 75rpx 0rpx 75rpx;
    }
    .submittedBilling_fd3_0_c3_c0{
        background:rgba(11, 24, 152, 1);background-size: 100% !important;border-radius:39rpx 39rpx 39rpx 39rpx;font-size:32rpx;color:#fff;width:200rpx;height:68rpx;line-height:68rpx;
    }
    .submittedBilling_fd3_0_c2_c0{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .submittedBilling_fd3_0_c2{
        border:1px solid #BFBFBF;background:rgba(255, 255, 255, 1);background-size: 100% !important;border-radius:18rpx 18rpx 18rpx 18rpx;padding:24rpx 24rpx 24rpx 24rpx;margin:24rpx 0rpx 64rpx 0rpx;
    }
    .submittedBilling_fd3_0_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:50rpx 0rpx 0rpx 0rpx;
    }
    .submittedBilling_fd3_0_c0_c1{
        width:40rpx;height:40rpx;border-radius:0rpx 0rpx 0rpx 0rpx;margin:0rpx 0rpx 0rpx auto;
    }
    .submittedBilling_fd3_0_c0_c0{
        margin:0rpx 0rpx 0rpx auto;color:#1A1A1A;font-size:32rpx;font-weight:700;line-height:45rpx;
    }
    .submittedBilling_fd3_0{
        background:rgba(255, 255, 255, 1);background-size: 100% !important;border-radius:18rpx 18rpx 18rpx 18rpx;padding:35rpx 30rpx 44rpx 30rpx;width:600rpx;
    }
</style>