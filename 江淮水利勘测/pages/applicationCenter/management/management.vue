<template>
    <view class="page" :style="themeColor">
    <view class="flex flex-wrap align-center justify-between benben-position-layout flex management_flex_0"   @tap.stop="handleJumpDiy" data-type="back" data-url="1" :style="{height:(88+StatusBarRpx)+'rpx',paddingTop:StatusBarRpx+'rpx'}">
            <view   class='flex flex-wrap align-center management_fd0_0'  @tap.stop="handleJumpDiy" data-type="back" data-url="1"   >
        <text class='fu-iconfont2' >&#xe794;</text>
</view>
<text class='management_fd0_1' >详情</text>
    <view   class='flex flex-wrap align-center management_fd0_2'     >
        </view>

        </view>
<view :style="{height: (88+StatusBarRpx)+'rpx'}"  ></view>
<benben-popup v-model="popupShow1666161013185" :mask="true"  mode='center'>
    <!---flex布局flex布局开始-->
 <view class="flex flex-direction flex-wrap align-stretch benben-flex-layout management_flex_1"   >
            <view   class='flex flex-direction flex-wrap align-stretch management_fd1_0'     >
            <view   class='flex flex-direction flex-wrap align-center management_fd1_0_c0'     >
        <text class='management_fd1_0_c0_c0' >提示</text>
<text class='management_fd1_0_c0_c1' >确定要提交该回款吗？</text>
</view>
    <view   class='flex flex-wrap align-center'     >
        <button class='flex-sub management_fd1_0_c1_c0' @tap.stop="popupShow1666161013185=false"  >取消</button>
<button class='flex-sub management_fd1_0_c1_c1' >确定</button>
</view>
</view>
</view>
<!---flex布局flex布局结束-->
</benben-popup>
<!---flex布局flex布局开始-->
 <view class="flex flex-direction flex-wrap align-stretch benben-flex-layout management_flex_2"   >
            <view   class='flex flex-wrap align-center management_fd2_0'     >
        <image class='management_fd2_0_c0' :src='STATIC_URL+"79.png"'  v-if= "type=='1'"></image><image class='management_fd2_0_c0_1' :src='STATIC_URL+"94.png"'  v-if= "type=='2'"></image><image class='management_fd2_0_c0_2' :src='STATIC_URL+"43.png"'  v-if= "type=='3'"></image><image class='management_fd2_0_c0_3' :src='STATIC_URL+"85.png"'  v-if= "type=='4'"></image>
<image class='management_fd2_0_c1' :src='STATIC_URL+"42.png"'  v-if= "type=='1'"></image><image class='management_fd2_0_c1_1' :src='STATIC_URL+"95.png"'  v-if= "type=='2'"></image><image class='management_fd2_0_c1_2' :src='STATIC_URL+"96.png"'  v-if= "type=='3'"></image><image class='management_fd2_0_c1_3' :src='STATIC_URL+"97.png"'  v-if= "type=='4'"></image>
    <view   class='flex flex-wrap align-center management_fd2_0_c2'     >
        <text class='management_fd2_0_c2_c0'   v-if= "type=='2'"  >请耐心等待…</text><text class='management_fd2_0_c2_c0_1'   v-if= "type=='3'"  >请耐心等待…</text>
</view>
</view>
    <view   class='flex flex-direction flex-wrap align-stretch management_fd2_1'     >
            <view   class='flex flex-wrap align-center justify-between management_fd2_1_c0'     >
        <text class='management_fd2_1_c0_c0' >回款内容</text>
</view>
    <view   class='flex flex-wrap align-center management_fd2_1_c1'     >
        <text class='management_fd2_1_c1_c0' >申请人</text>
<text class='flex-sub management_fd2_1_c1_c1' >陈沉沉</text>
</view>
    <view   class='flex flex-wrap align-center management_fd2_1_c2'     >
        <text class='management_fd2_1_c2_c0' >回款名称</text>
<text class='flex-sub management_fd2_1_c2_c1' >一期款</text>
</view>
    <view   class='flex flex-wrap align-center management_fd2_1_c3'     >
        <text class='management_fd2_1_c3_c0' >回款金额</text>
<text class='management_fd2_1_c3_c1' >￥</text>
<text class='management_fd2_1_c3_c2' >3500</text>
</view>
    <view   class='flex flex-wrap align-center management_fd2_1_c4'     >
        <text class='management_fd2_1_c4_c0' >创建时间</text>
<text class='management_fd2_1_c4_c1' >2022-08-08</text>
<text class='management_fd2_1_c4_c2' >10:10</text>
</view>
    <view   class='flex flex-wrap align-center management_fd2_1_c5'     >
        <text class='management_fd2_1_c5_c0' >申请时间</text>
<text class='management_fd2_1_c5_c1' >2022-08-08</text>
<text class='management_fd2_1_c5_c2' >10:10</text>
</view>
</view>
    <view   class='flex flex-direction flex-wrap align-stretch management_fd2_2'     >
            <view   class='flex flex-wrap align-center justify-between management_fd2_2_c0'     >
        <text class='management_fd2_2_c0_c0' >详细信息</text>
</view>
    <view   class='flex flex-wrap align-center management_fd2_2_c1'     >
        <text class='management_fd2_2_c1_c0' >回款时间</text>
<text class='management_fd2_2_c1_c1' >2022-07-20</text>
<text class='management_fd2_2_c1_c2' >15:20</text>
</view>
    <view   class='flex flex-wrap align-center management_fd2_2_c2'     >
        <text class='management_fd2_2_c2_c0' >回款说明</text>
<text class='flex-sub management_fd2_2_c2_c1' >项目首付款</text>
</view>
    <view   class='flex flex-wrap align-center management_fd2_2_c3'     >
        <text class='management_fd2_2_c3_c0' >回款账号</text>
<text class='management_fd2_2_c3_c1' >工商银行</text>
<text class='management_fd2_2_c3_c2' >15231254870213456</text>
</view>
    <view   class='flex flex-wrap align-center management_fd2_2_c4'     >
        <text class='management_fd2_2_c4_c0' >回款状态</text>
<text class='management_fd2_2_c4_c1' >未回款</text>
</view>
    <view   class='flex flex-wrap align-center management_fd2_2_c5'     >
        <text class='management_fd2_2_c5_c0' >项目编号</text>
<text class='flex-sub management_fd2_2_c5_c1' >2022-N4-001-J</text>
</view>
    <view   class='flex flex-wrap align-center management_fd2_2_c6'     >
        <text class='management_fd2_2_c6_c0' >项目名称</text>
<text class='flex-sub management_fd2_2_c6_c1'     >二阳县光电产业园基础设施建设项目</text>
</view>
<text class='management_fd2_2_c7' >回款凭证</text>
    <view   class='flex flex-wrap align-center management_fd2_2_c8'     >
        <image class='management_fd2_2_c8_c0' mode="aspectFit"  :src='STATIC_URL+"31.png"'></image>
</view>
</view>
    <view   class='flex flex-direction flex-wrap align-stretch management_fd2_3'   v-if= "type>='2'"  >
            <view   class='flex flex-wrap align-center justify-between management_fd2_3_c0'     >
        <text class='management_fd2_3_c0_c0' >审批进度</text>
</view>
    <view   class='flex flex-wrap align-start management_fd2_3_c1'   v-if= "type=='2'"  >
            <view   class='flex flex-direction flex-wrap align-center'     >
        <image class='management_fd2_3_c1_c0_c0' mode="aspectFit"  :src='STATIC_URL+"60.png"'></image>
    <view   class='flex flex-wrap align-center management_fd2_3_c1_c0_c1'     >
        </view>
<image class='management_fd2_3_c1_c0_c2' mode="aspectFit"  :src='STATIC_URL+"80.png"'></image>
</view>
    <view   class='flex flex-direction flex-wrap align-stretch flex-sub management_fd2_3_c1_c1'     >
            <view   class='flex flex-wrap align-center'     >
        <text class='management_fd2_3_c1_c1_c0_c0' >员工</text>
<image class='management_fd2_3_c1_c1_c0_c1' mode="aspectFit"  :src='STATIC_URL+"32.png"'></image>
<text class='management_fd2_3_c1_c1_c0_c2' >陈沉沉</text>
<text class='management_fd2_3_c1_c1_c0_c3' >发起审批</text>
</view>
    <view   class='flex flex-wrap align-center management_fd2_3_c1_c1_c1'     >
        <text class='management_fd2_3_c1_c1_c1_c0' >2022-08-08</text>
<text class='management_fd2_3_c1_c1_c1_c1' >12:02</text>
</view>
    <view   class='flex flex-wrap align-center management_fd2_3_c1_c1_c2'     >
        <text class='management_fd2_3_c1_c1_c2_c0' >财务</text>
<image class='management_fd2_3_c1_c1_c2_c1' mode="aspectFit"  :src='STATIC_URL+"32.png"'></image>
<text class='management_fd2_3_c1_c1_c2_c2' >张章章</text>
<text class='management_fd2_3_c1_c1_c2_c3' >待审批</text>
</view>
</view>
</view>
    <view   class='flex flex-wrap align-start management_fd2_3_c2'   v-if= "type=='3'"  >
            <view   class='flex flex-direction flex-wrap align-center'     >
        <image class='management_fd2_3_c2_c0_c0' mode="aspectFit"  :src='STATIC_URL+"60.png"'></image>
    <view   class='flex flex-wrap align-center management_fd2_3_c2_c0_c1'     >
        </view>
<image class='management_fd2_3_c2_c0_c2' mode="aspectFit"  :src='STATIC_URL+"60.png"'></image>
    <view   class='flex flex-wrap align-center management_fd2_3_c2_c0_c3'     >
        </view>
<image class='management_fd2_3_c2_c0_c4' mode="aspectFit"  :src='STATIC_URL+"60.png"'></image>
</view>
    <view   class='flex flex-direction flex-wrap align-stretch flex-sub management_fd2_3_c2_c1'     >
            <view   class='flex flex-wrap align-center'     >
        <text class='management_fd2_3_c2_c1_c0_c0' >员工</text>
<image class='management_fd2_3_c2_c1_c0_c1' mode="aspectFit"  :src='STATIC_URL+"32.png"'></image>
<text class='management_fd2_3_c2_c1_c0_c2' >陈沉沉</text>
<text class='management_fd2_3_c2_c1_c0_c3' >发起审批</text>
</view>
    <view   class='flex flex-wrap align-center management_fd2_3_c2_c1_c1'     >
        <text class='management_fd2_3_c2_c1_c1_c0' >2022-08-08</text>
<text class='management_fd2_3_c2_c1_c1_c1' >12:02</text>
</view>
    <view   class='flex flex-wrap align-center management_fd2_3_c2_c1_c2'     >
        <text class='management_fd2_3_c2_c1_c2_c0' >财务</text>
<image class='management_fd2_3_c2_c1_c2_c1' mode="aspectFit"  :src='STATIC_URL+"32.png"'></image>
<text class='management_fd2_3_c2_c1_c2_c2' >张章章</text>
<text class='management_fd2_3_c2_c1_c2_c3' >审批通过</text>
</view>
    <view   class='flex flex-wrap align-center management_fd2_3_c2_c1_c3'     >
        <text class='management_fd2_3_c2_c1_c3_c0' >2022-08-08</text>
<text class='management_fd2_3_c2_c1_c3_c1' >12:02</text>
</view>
    <view   class='flex flex-wrap align-center management_fd2_3_c2_c1_c4'     >
        <text class='management_fd2_3_c2_c1_c4_c0' >抄送人（已抄送4人）</text>
</view>
    <view   class='flex flex-wrap align-center management_fd2_3_c2_c1_c5'     >
            <view   class='flex flex-direction flex-wrap align-center management_fd2_3_c2_c1_c5_c0'     >
        <image class='management_fd2_3_c2_c1_c5_c0_c0' mode="aspectFit"  :src='STATIC_URL+"32.png"'></image>
<text class='management_fd2_3_c2_c1_c5_c0_c1' >温温问
(总经理)</text>
</view>
</view>
</view>
</view>
    <view   class='flex flex-wrap align-start management_fd2_3_c3'   v-if= "type=='4'"  >
            <view   class='flex flex-direction flex-wrap align-center'     >
        <image class='management_fd2_3_c3_c0_c0' mode="aspectFit"  :src='STATIC_URL+"60.png"'></image>
    <view   class='flex flex-wrap align-center management_fd2_3_c3_c0_c1'     >
        </view>
<image class='management_fd2_3_c3_c0_c2' mode="aspectFit"  :src='STATIC_URL+"60.png"'></image>
    <view   class='flex flex-wrap align-center management_fd2_3_c3_c0_c3'     >
        </view>
<image class='management_fd2_3_c3_c0_c4' mode="aspectFit"  :src='STATIC_URL+"60.png"'></image>
</view>
    <view   class='flex flex-direction flex-wrap align-stretch flex-sub management_fd2_3_c3_c1'     >
            <view   class='flex flex-wrap align-center'     >
        <text class='management_fd2_3_c3_c1_c0_c0' >员工</text>
<image class='management_fd2_3_c3_c1_c0_c1' mode="aspectFit"  :src='STATIC_URL+"32.png"'></image>
<text class='management_fd2_3_c3_c1_c0_c2' >陈沉沉</text>
<text class='management_fd2_3_c3_c1_c0_c3' >发起审批</text>
</view>
    <view   class='flex flex-wrap align-center management_fd2_3_c3_c1_c1'     >
        <text class='management_fd2_3_c3_c1_c1_c0' >2022-08-08</text>
<text class='management_fd2_3_c3_c1_c1_c1' >12:02</text>
</view>
    <view   class='flex flex-wrap align-center management_fd2_3_c3_c1_c2'     >
        <text class='management_fd2_3_c3_c1_c2_c0' >财务</text>
<image class='management_fd2_3_c3_c1_c2_c1' mode="aspectFit"  :src='STATIC_URL+"32.png"'></image>
<text class='management_fd2_3_c3_c1_c2_c2' >张章章</text>
<text class='management_fd2_3_c3_c1_c2_c3' >审批驳回</text>
</view>
    <view   class='flex flex-wrap align-center management_fd2_3_c3_c1_c3'     >
        <text class='management_fd2_3_c3_c1_c3_c0' >2022-08-08</text>
<text class='management_fd2_3_c3_c1_c3_c1' >12:02</text>
</view>
    <view   class='flex flex-wrap align-center management_fd2_3_c3_c1_c4'     >
        <text class='management_fd2_3_c3_c1_c4_c0' >驳回原因：</text>
<text class='management_fd2_3_c3_c1_c4_c1' >项目信息有误</text>
</view>
    <view   class='flex flex-wrap align-center management_fd2_3_c3_c1_c5'     >
        <text class='management_fd2_3_c3_c1_c5_c0' >抄送人（已抄送4人）</text>
</view>
    <view   class='flex flex-wrap align-center management_fd2_3_c3_c1_c6'     >
            <view   class='flex flex-direction flex-wrap align-center management_fd2_3_c3_c1_c6_c0'     >
        <image class='management_fd2_3_c3_c1_c6_c0_c0' mode="aspectFit"  :src='STATIC_URL+"32.png"'></image>
<text class='management_fd2_3_c3_c1_c6_c0_c1' >温温问
(总经理)</text>
</view>
</view>
</view>
</view>
</view>
</view>
<!---flex布局flex布局结束-->
    <view class="flex flex-wrap align-center justify-end benben-position-layout flex management_flex_3"  v-if= "type=='1' || type=='4'"  >
        <button class='management_fd3_0' >编辑</button>
<button class='management_fd3_1' @tap.stop="popupShow1666161013185=true"  >提交</button>

        </view>
<view :style="{height: '97rpx'}" v-if= "type=='1' || type=='4'" ></view>
    
    </view>
</template>
<script>
    
    export default {
        components:{},
        
        data(){
			return {"popupShow1666161013185":false,"cut":"1","type":""};
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
    .management_flex_0{
        background:#fff;background-size: 100% !important;width:750rpx;height:88rpx;overflow:hidden;z-index:10;top:0rpx;background-size:100% auto !important;
    }
    .management_fd0_2{
        width:100rpx;height:88rpx;margin:0rpx 32rpx 0rpx 0rpx;
    }
    .management_fd0_1{
        color:#000000;font-size:36rpx;font-weight:500;line-height:50rpx;
    }
    .management_fd0_0{
        width:100rpx;height:88rpx;margin:0rpx 0rpx 0rpx 32rpx;
    }
    .management_flex_1{
        padding:0rpx 105rpx 0rpx 105rpx;
    }
    .management_fd1_0_c1_c1{
        background:#fff;background-size: 100% !important;border-radius:0rpx 0rpx 16rpx 0rpx;font-size:32rpx;color:rgba(11, 24, 152, 1);height:110rpx;line-height:110rpx;
    }
    .management_fd1_0_c1_c0{
        border-right:1px solid rgba(238, 238, 238, 1);background:#fff;background-size: 100% !important;border-radius:0rpx 0rpx 0rpx 16rpx;font-size:32rpx;color:rgba(153, 153, 153, 1);height:110rpx;line-height:110rpx;
    }
    .management_fd1_0_c0_c1{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .management_fd1_0_c0_c0{
        color:#333333;font-size:32rpx;font-weight:500;line-height:45rpx;margin:0rpx 0rpx 40rpx 0rpx;
    }
    .management_fd1_0_c0{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:40rpx 130rpx 40rpx 130rpx;
    }
    .management_fd1_0{
        background:#fff;background-size: 100% !important;border-radius:16rpx 16rpx 16rpx 16rpx;
    }
    .management_flex_2{
        background:url(/static/images/41.png) no-repeat;background-size: 100% !important;background-size:100% auto !important;padding:0rpx 32rpx 0rpx 32rpx;
    }
    .management_fd2_3_c3_c1_c6_c0_c1{
        color:#9EA7B7;font-size:20rpx;font-weight:400;line-height:24rpx;text-align:center;margin:6rpx 0rpx 0rpx 0rpx;
    }
    .management_fd2_3_c3_c1_c6_c0_c0{
        width:36rpx;height:36rpx;border-radius:18rpx 18rpx 18rpx 18rpx;
    }
    .management_fd2_3_c3_c1_c6_c0{
        margin:0rpx 32rpx 0rpx 0rpx;
    }
    .management_fd2_3_c3_c1_c6{
        margin:16rpx 0rpx 0rpx 0rpx;
    }
    .management_fd2_3_c3_c1_c5_c0{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .management_fd2_3_c3_c1_c5{
        margin:70rpx 0rpx 0rpx 0rpx;
    }
    .management_fd2_3_c3_c1_c4_c1{
        color:#333;font-size:24rpx;font-weight:400;line-height:33rpx;margin:0rpx 0rpx 0rpx 14rpx;
    }
    .management_fd2_3_c3_c1_c4_c0{
        color:rgba(102, 102, 102, 1);font-size:24rpx;font-weight:400;line-height:33rpx;
    }
    .management_fd2_3_c3_c1_c4{
        margin:16rpx 0rpx 0rpx 0rpx;
    }
    .management_fd2_3_c3_c1_c3_c1{
        color:#333333;font-size:24rpx;font-weight:400;line-height:33rpx;margin:0rpx 0rpx 0rpx 14rpx;
    }
    .management_fd2_3_c3_c1_c3_c0{
        color:#333333;font-size:24rpx;font-weight:400;line-height:33rpx;
    }
    .management_fd2_3_c3_c1_c3{
        margin:16rpx 0rpx 0rpx 0rpx;
    }
    .management_fd2_3_c3_c1_c2_c3{
        color:rgba(230, 53, 65, 1);font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .management_fd2_3_c3_c1_c2_c2{
        color:#9EA7B7;font-size:24rpx;font-weight:400;line-height:40rpx;margin:0rpx 24rpx 0rpx 0rpx;
    }
    .management_fd2_3_c3_c1_c2_c1{
        width:36rpx;height:36rpx;border-radius:18rpx 18rpx 18rpx 18rpx;margin:0rpx 10rpx 0rpx 24rpx;
    }
    .management_fd2_3_c3_c1_c2_c0{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .management_fd2_3_c3_c1_c2{
        margin:70rpx 0rpx 0rpx 0rpx;
    }
    .management_fd2_3_c3_c1_c1_c1{
        color:#333333;font-size:24rpx;font-weight:400;line-height:33rpx;margin:0rpx 0rpx 0rpx 14rpx;
    }
    .management_fd2_3_c3_c1_c1_c0{
        color:#333333;font-size:24rpx;font-weight:400;line-height:33rpx;
    }
    .management_fd2_3_c3_c1_c1{
        margin:16rpx 0rpx 0rpx 0rpx;
    }
    .management_fd2_3_c3_c1_c0_c3{
        color:#0B1898;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .management_fd2_3_c3_c1_c0_c2{
        color:#9EA7B7;font-size:24rpx;font-weight:400;line-height:40rpx;margin:0rpx 24rpx 0rpx 0rpx;
    }
    .management_fd2_3_c3_c1_c0_c1{
        width:36rpx;height:36rpx;border-radius:18rpx 18rpx 18rpx 18rpx;margin:0rpx 10rpx 0rpx 24rpx;
    }
    .management_fd2_3_c3_c1_c0_c0{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .management_fd2_3_c3_c1{
        margin:0rpx 0rpx 0rpx 21rpx;
    }
    .management_fd2_3_c3_c0_c4{
        width:32rpx;height:32rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .management_fd2_3_c3_c0_c3{
        border:1px dashed rgba(221, 221, 221, 1);width:1rpx;height:156rpx;
    }
    .management_fd2_3_c3_c0_c2{
        width:32rpx;height:32rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .management_fd2_3_c3_c0_c1{
        border:1px dashed rgba(221, 221, 221, 1);width:1rpx;height:131rpx;
    }
    .management_fd2_3_c3_c0_c0{
        width:32rpx;height:32rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .management_fd2_3_c3{
        margin:33rpx 0rpx 0rpx 0rpx;
    }
    .management_fd2_3_c2_c1_c5_c0_c1{
        color:#9EA7B7;font-size:20rpx;font-weight:400;line-height:24rpx;text-align:center;margin:6rpx 0rpx 0rpx 0rpx;
    }
    .management_fd2_3_c2_c1_c5_c0_c0{
        width:36rpx;height:36rpx;border-radius:18rpx 18rpx 18rpx 18rpx;
    }
    .management_fd2_3_c2_c1_c5_c0{
        margin:0rpx 32rpx 0rpx 0rpx;
    }
    .management_fd2_3_c2_c1_c5{
        margin:16rpx 0rpx 0rpx 0rpx;
    }
    .management_fd2_3_c2_c1_c4_c0{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .management_fd2_3_c2_c1_c4{
        margin:70rpx 0rpx 0rpx 0rpx;
    }
    .management_fd2_3_c2_c1_c3_c1{
        color:#333333;font-size:24rpx;font-weight:400;line-height:33rpx;margin:0rpx 0rpx 0rpx 14rpx;
    }
    .management_fd2_3_c2_c1_c3_c0{
        color:#333333;font-size:24rpx;font-weight:400;line-height:33rpx;
    }
    .management_fd2_3_c2_c1_c3{
        margin:16rpx 0rpx 0rpx 0rpx;
    }
    .management_fd2_3_c2_c1_c2_c3{
        color:rgba(29, 185, 153, 1);font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .management_fd2_3_c2_c1_c2_c2{
        color:#9EA7B7;font-size:24rpx;font-weight:400;line-height:40rpx;margin:0rpx 24rpx 0rpx 0rpx;
    }
    .management_fd2_3_c2_c1_c2_c1{
        width:36rpx;height:36rpx;border-radius:18rpx 18rpx 18rpx 18rpx;margin:0rpx 10rpx 0rpx 24rpx;
    }
    .management_fd2_3_c2_c1_c2_c0{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .management_fd2_3_c2_c1_c2{
        margin:70rpx 0rpx 0rpx 0rpx;
    }
    .management_fd2_3_c2_c1_c1_c1{
        color:#333333;font-size:24rpx;font-weight:400;line-height:33rpx;margin:0rpx 0rpx 0rpx 14rpx;
    }
    .management_fd2_3_c2_c1_c1_c0{
        color:#333333;font-size:24rpx;font-weight:400;line-height:33rpx;
    }
    .management_fd2_3_c2_c1_c1{
        margin:16rpx 0rpx 0rpx 0rpx;
    }
    .management_fd2_3_c2_c1_c0_c3{
        color:#0B1898;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .management_fd2_3_c2_c1_c0_c2{
        color:#9EA7B7;font-size:24rpx;font-weight:400;line-height:40rpx;margin:0rpx 24rpx 0rpx 0rpx;
    }
    .management_fd2_3_c2_c1_c0_c1{
        width:36rpx;height:36rpx;border-radius:18rpx 18rpx 18rpx 18rpx;margin:0rpx 10rpx 0rpx 24rpx;
    }
    .management_fd2_3_c2_c1_c0_c0{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .management_fd2_3_c2_c1{
        margin:0rpx 0rpx 0rpx 21rpx;
    }
    .management_fd2_3_c2_c0_c4{
        width:32rpx;height:32rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .management_fd2_3_c2_c0_c3{
        border:1px dashed rgba(221, 221, 221, 1);width:1rpx;height:129rpx;
    }
    .management_fd2_3_c2_c0_c2{
        width:32rpx;height:32rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .management_fd2_3_c2_c0_c1{
        border:1px dashed rgba(221, 221, 221, 1);width:1rpx;height:129rpx;
    }
    .management_fd2_3_c2_c0_c0{
        width:32rpx;height:32rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .management_fd2_3_c2{
        margin:33rpx 0rpx 0rpx 0rpx;
    }
    .management_fd2_3_c1_c1_c2_c3{
        color:rgba(255, 127, 32, 1);font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .management_fd2_3_c1_c1_c2_c2{
        color:#9EA7B7;font-size:24rpx;font-weight:400;line-height:40rpx;margin:0rpx 24rpx 0rpx 0rpx;
    }
    .management_fd2_3_c1_c1_c2_c1{
        width:36rpx;height:36rpx;border-radius:18rpx 18rpx 18rpx 18rpx;margin:0rpx 10rpx 0rpx 24rpx;
    }
    .management_fd2_3_c1_c1_c2_c0{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .management_fd2_3_c1_c1_c2{
        margin:70rpx 0rpx 0rpx 0rpx;
    }
    .management_fd2_3_c1_c1_c1_c1{
        color:#333333;font-size:24rpx;font-weight:400;line-height:33rpx;margin:0rpx 0rpx 0rpx 14rpx;
    }
    .management_fd2_3_c1_c1_c1_c0{
        color:#333333;font-size:24rpx;font-weight:400;line-height:33rpx;
    }
    .management_fd2_3_c1_c1_c1{
        margin:16rpx 0rpx 0rpx 0rpx;
    }
    .management_fd2_3_c1_c1_c0_c3{
        color:#0B1898;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .management_fd2_3_c1_c1_c0_c2{
        color:#9EA7B7;font-size:24rpx;font-weight:400;line-height:40rpx;margin:0rpx 24rpx 0rpx 0rpx;
    }
    .management_fd2_3_c1_c1_c0_c1{
        width:36rpx;height:36rpx;border-radius:18rpx 18rpx 18rpx 18rpx;margin:0rpx 10rpx 0rpx 24rpx;
    }
    .management_fd2_3_c1_c1_c0_c0{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .management_fd2_3_c1_c1{
        margin:0rpx 0rpx 0rpx 21rpx;
    }
    .management_fd2_3_c1_c0_c2{
        width:32rpx;height:32rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .management_fd2_3_c1_c0_c1{
        border:1px dashed rgba(221, 221, 221, 1);width:1rpx;height:129rpx;
    }
    .management_fd2_3_c1_c0_c0{
        width:32rpx;height:32rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .management_fd2_3_c1{
        margin:33rpx 0rpx 0rpx 0rpx;
    }
    .management_fd2_3_c0_c0{
        color:#333333;font-size:32rpx;font-weight:500;line-height:45rpx;
    }
    .management_fd2_3_c0{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:0rpx 0rpx 16rpx 0rpx;
    }
    .management_fd2_3{
        background:#fff;background-size: 100% !important;border-radius:16rpx 16rpx 16rpx 16rpx;margin:20rpx 0rpx 0rpx 0rpx;padding:32rpx 24rpx 32rpx 24rpx;
    }
    .management_fd2_2_c8_c0{
        width:152rpx;height:152rpx;margin:0rpx 0rpx 8rpx 15rpx;border-radius:16rpx 16rpx 16rpx 16rpx;
    }
    .management_fd2_2_c8{
        margin:24rpx 24rpx 0rpx 9rpx;
    }
    .management_fd2_2_c7{
        color:#333333;font-size:32rpx;font-weight:500;line-height:45rpx;margin:24rpx 24rpx 0rpx 24rpx;
    }
    .management_fd2_2_c6_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 64rpx;
    }
    .management_fd2_2_c6_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .management_fd2_2_c6{
        margin:24rpx 0rpx 0rpx 0rpx;padding:0rpx 24rpx 0rpx 24rpx;
    }
    .management_fd2_2_c5_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 64rpx;
    }
    .management_fd2_2_c5_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .management_fd2_2_c5{
        margin:24rpx 0rpx 0rpx 0rpx;padding:0rpx 24rpx 0rpx 24rpx;
    }
    .management_fd2_2_c4_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 64rpx;
    }
    .management_fd2_2_c4_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .management_fd2_2_c4{
        margin:24rpx 0rpx 0rpx 0rpx;padding:0rpx 24rpx 0rpx 24rpx;
    }
    .management_fd2_2_c3_c2{
        color:rgba(72, 151, 235, 1);font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 10rpx;
    }
    .management_fd2_2_c3_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 64rpx;
    }
    .management_fd2_2_c3_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .management_fd2_2_c3{
        margin:24rpx 0rpx 0rpx 0rpx;padding:0rpx 24rpx 0rpx 24rpx;
    }
    .management_fd2_2_c2_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 64rpx;
    }
    .management_fd2_2_c2_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .management_fd2_2_c2{
        margin:24rpx 0rpx 0rpx 0rpx;padding:0rpx 24rpx 0rpx 24rpx;
    }
    .management_fd2_2_c1_c2{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 10rpx;
    }
    .management_fd2_2_c1_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 64rpx;
    }
    .management_fd2_2_c1_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .management_fd2_2_c1{
        margin:24rpx 0rpx 0rpx 0rpx;padding:0rpx 24rpx 0rpx 24rpx;
    }
    .management_fd2_2_c0_c0{
        color:#333333;font-size:32rpx;font-weight:500;line-height:45rpx;
    }
    .management_fd2_2_c0{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:0rpx 24rpx 16rpx 24rpx;
    }
    .management_fd2_2{
        background:#fff;background-size: 100% !important;border-radius:16rpx 16rpx 16rpx 16rpx;padding:32rpx 0rpx 32rpx 0rpx;margin:20rpx 0rpx 0rpx 0rpx;
    }
    .management_fd2_1_c5_c2{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 10rpx;
    }
    .management_fd2_1_c5_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 64rpx;
    }
    .management_fd2_1_c5_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .management_fd2_1_c5{
        margin:24rpx 0rpx 0rpx 0rpx;
    }
    .management_fd2_1_c4_c2{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 10rpx;
    }
    .management_fd2_1_c4_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 64rpx;
    }
    .management_fd2_1_c4_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .management_fd2_1_c4{
        margin:24rpx 0rpx 0rpx 0rpx;
    }
    .management_fd2_1_c3_c2{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .management_fd2_1_c3_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 64rpx;
    }
    .management_fd2_1_c3_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .management_fd2_1_c3{
        margin:24rpx 0rpx 0rpx 0rpx;
    }
    .management_fd2_1_c2_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 64rpx;
    }
    .management_fd2_1_c2_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .management_fd2_1_c2{
        margin:24rpx 0rpx 0rpx 0rpx;
    }
    .management_fd2_1_c1_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 92rpx;
    }
    .management_fd2_1_c1_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .management_fd2_1_c1{
        margin:24rpx 0rpx 0rpx 0rpx;
    }
    .management_fd2_1_c0_c0{
        color:#333333;font-size:32rpx;font-weight:500;line-height:45rpx;
    }
    .management_fd2_1_c0{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:0rpx 0rpx 16rpx 0rpx;
    }
    .management_fd2_1{
        background:#fff;background-size: 100% !important;border-radius:16rpx 16rpx 16rpx 16rpx;padding:32rpx 24rpx 32rpx 24rpx;margin:20rpx 0rpx 0rpx 0rpx;
    }
    .management_fd2_0_c2_c0_1{
        color:#FFFFFF;font-size:28rpx;font-weight:500;line-height:40rpx;
    }
    .management_fd2_0_c2_c0{
        color:#FFFFFF;font-size:28rpx;font-weight:500;line-height:40rpx;
    }
    .management_fd2_0_c2{
        margin:0rpx 0rpx 0rpx auto;
    }
    .management_fd2_0_c1_3{
        width:160rpx;height:56rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .management_fd2_0_c1_2{
        width:120rpx;height:56rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .management_fd2_0_c1_1{
        width:160rpx;height:56rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .management_fd2_0_c1{
        width:120rpx;height:56rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .management_fd2_0_c0_3{
        width:88rpx;height:88rpx;border-radius:0rpx 0rpx 0rpx 0rpx;margin:0rpx 24rpx 0rpx 0rpx;
    }
    .management_fd2_0_c0_2{
        width:88rpx;height:88rpx;border-radius:0rpx 0rpx 0rpx 0rpx;margin:0rpx 24rpx 0rpx 0rpx;
    }
    .management_fd2_0_c0_1{
        width:88rpx;height:88rpx;border-radius:0rpx 0rpx 0rpx 0rpx;margin:0rpx 24rpx 0rpx 0rpx;
    }
    .management_fd2_0_c0{
        width:88rpx;height:88rpx;border-radius:0rpx 0rpx 0rpx 0rpx;margin:0rpx 24rpx 0rpx 0rpx;
    }
    .management_fd2_0{
        margin:40rpx 0rpx 20rpx 0rpx;
    }
    .management_flex_3{
        background:#fff;background-size: 100% !important;width:750rpx;height:97rpx;overflow:hidden;z-index:10;bottom:calc(0rpx + var(--window-bottom));background-size:100% auto !important;
    }
    .management_fd3_1{
        background:rgba(11, 24, 152, 1);background-size: 100% !important;border-radius:50rpx 50rpx 50rpx 50rpx;font-size:24rpx;color:#fff;width:170rpx;height:60rpx;line-height:60rpx;margin:0rpx 24rpx 0rpx 0rpx;
    }
    .management_fd3_0{
        border:1px solid #666666;background:#fff;background-size: 100% !important;border-radius:28rpx 28rpx 28rpx 28rpx;font-size:24rpx;color:#333;width:170rpx;height:60rpx;line-height:60rpx;margin:0rpx 24rpx 0rpx 0rpx;
    }
</style>