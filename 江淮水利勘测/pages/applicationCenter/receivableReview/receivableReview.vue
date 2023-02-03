<template>
    <view class="page" :style="themeColor">
    <view class="flex flex-wrap align-center justify-between benben-position-layout flex receivableReview_flex_0"   @tap.stop="handleJumpDiy" data-type="back" data-url="1" :style="{height:(88+StatusBarRpx)+'rpx',paddingTop:StatusBarRpx+'rpx'}">
            <view   class='flex flex-wrap align-center receivableReview_fd0_0'  @tap.stop="handleJumpDiy" data-type="back" data-url="1"   >
        <text class='fu-iconfont2' >&#xe794;</text>
</view>
<text class='receivableReview_fd0_1' >详情</text>
    <view   class='flex flex-wrap align-center receivableReview_fd0_2'     >
        </view>

        </view>
<view :style="{height: (88+StatusBarRpx)+'rpx'}"  ></view>
<benben-popup v-model="popupShow1666161013185" :mask="true"  mode='center'>
    <!---flex布局flex布局开始-->
 <view class="flex flex-direction flex-wrap align-stretch benben-flex-layout receivableReview_flex_1"   >
            <view   class='flex flex-direction flex-wrap align-stretch receivableReview_fd1_0'     >
            <view   class='flex flex-direction flex-wrap align-center receivableReview_fd1_0_c0'     >
        <text class='receivableReview_fd1_0_c0_c0' >提示</text>
<text class='receivableReview_fd1_0_c0_c1' >确认通过该条回款信息吗？</text>
</view>
    <view   class='flex flex-wrap align-center'     >
        <button class='flex-sub receivableReview_fd1_0_c1_c0' @tap.stop="popupShow1666161013185=false"  >取消</button>
<button class='flex-sub receivableReview_fd1_0_c1_c1' >确定</button>
</view>
</view>
</view>
<!---flex布局flex布局结束-->
</benben-popup>
<!---flex布局flex布局开始-->
 <view class="flex flex-direction flex-wrap align-stretch benben-flex-layout receivableReview_flex_2"   >
            <view   class='flex flex-wrap align-center receivableReview_fd2_0'     >
        <image class='receivableReview_fd2_0_c0' :src='STATIC_URL+"43.png"'  v-if= "type=='1'"></image><image class='receivableReview_fd2_0_c0_1' :src='STATIC_URL+"82.png"'  v-if= "type=='2'"></image><image class='receivableReview_fd2_0_c0_2' :src='STATIC_URL+"85.png"'  v-if= "type=='3'"></image>
<image class='receivableReview_fd2_0_c1' :src='STATIC_URL+"96.png"'  v-if= "type=='1'"></image><image class='receivableReview_fd2_0_c1_1' :src='STATIC_URL+"95.png"'  v-if= "type=='2'"></image><image class='receivableReview_fd2_0_c1_2' :src='STATIC_URL+"97.png"'  v-if= "type=='3'"></image>
    <view   class='flex flex-wrap align-center receivableReview_fd2_0_c2'     >
        <text class='receivableReview_fd2_0_c2_c0'   v-if= "type=='1'"  >请耐心等待…</text>
</view>
</view>
    <view   class='flex flex-direction flex-wrap align-stretch receivableReview_fd2_1'     >
            <view   class='flex flex-wrap align-center justify-between receivableReview_fd2_1_c0'     >
        <text class='receivableReview_fd2_1_c0_c0' >回款内容</text>
</view>
    <view   class='flex flex-wrap align-center receivableReview_fd2_1_c1'     >
        <text class='receivableReview_fd2_1_c1_c0' >申请人</text>
<text class='flex-sub receivableReview_fd2_1_c1_c1' >陈沉沉</text>
</view>
    <view   class='flex flex-wrap align-center receivableReview_fd2_1_c2'     >
        <text class='receivableReview_fd2_1_c2_c0' >回款名称</text>
<text class='flex-sub receivableReview_fd2_1_c2_c1' >一期款</text>
</view>
    <view   class='flex flex-wrap align-center receivableReview_fd2_1_c3'     >
        <text class='receivableReview_fd2_1_c3_c0' >回款金额</text>
<text class='receivableReview_fd2_1_c3_c1' >￥</text>
<text class='receivableReview_fd2_1_c3_c2' >3500</text>
</view>
    <view   class='flex flex-wrap align-center receivableReview_fd2_1_c4'     >
        <text class='receivableReview_fd2_1_c4_c0' >创建时间</text>
<text class='receivableReview_fd2_1_c4_c1' >2022-08-08</text>
<text class='receivableReview_fd2_1_c4_c2' >10:10</text>
</view>
    <view   class='flex flex-wrap align-center receivableReview_fd2_1_c5'     >
        <text class='receivableReview_fd2_1_c5_c0' >申请时间</text>
<text class='receivableReview_fd2_1_c5_c1' >2022-08-08</text>
<text class='receivableReview_fd2_1_c5_c2' >10:10</text>
</view>
</view>
    <view   class='flex flex-direction flex-wrap align-stretch receivableReview_fd2_2'     >
            <view   class='flex flex-wrap align-center justify-between receivableReview_fd2_2_c0'     >
        <text class='receivableReview_fd2_2_c0_c0' >详细信息</text>
</view>
    <view   class='flex flex-wrap align-center receivableReview_fd2_2_c1'     >
        <text class='receivableReview_fd2_2_c1_c0' >回款时间</text>
<text class='receivableReview_fd2_2_c1_c1' >2022-07-20</text>
<text class='receivableReview_fd2_2_c1_c2' >15:20</text>
</view>
    <view   class='flex flex-wrap align-center receivableReview_fd2_2_c2'     >
        <text class='receivableReview_fd2_2_c2_c0' >回款说明</text>
<text class='flex-sub receivableReview_fd2_2_c2_c1' >项目首付款</text>
</view>
    <view   class='flex flex-wrap align-center receivableReview_fd2_2_c3'     >
        <text class='receivableReview_fd2_2_c3_c0' >回款账号</text>
<text class='receivableReview_fd2_2_c3_c1' >工商银行</text>
<text class='receivableReview_fd2_2_c3_c2' >15231254870213456</text>
</view>
    <view   class='flex flex-wrap align-center receivableReview_fd2_2_c4'     >
        <text class='receivableReview_fd2_2_c4_c0' >回款状态</text>
<text class='receivableReview_fd2_2_c4_c1' >未回款</text>
</view>
    <view   class='flex flex-wrap align-center receivableReview_fd2_2_c5'     >
        <text class='receivableReview_fd2_2_c5_c0' >项目编号</text>
<text class='flex-sub receivableReview_fd2_2_c5_c1' >2022-N4-001-J</text>
</view>
    <view   class='flex flex-wrap align-center receivableReview_fd2_2_c6'     >
        <text class='receivableReview_fd2_2_c6_c0' >项目名称</text>
<text class='flex-sub receivableReview_fd2_2_c6_c1' >二阳县光电产业园基础设施建设项目</text>
</view>
<text class='receivableReview_fd2_2_c7' >回款凭证</text>
    <view   class='flex flex-wrap align-center receivableReview_fd2_2_c8'     >
        <image class='receivableReview_fd2_2_c8_c0' mode="aspectFit"  :src='STATIC_URL+"31.png"'></image>
</view>
</view>
    <view   class='flex flex-direction flex-wrap align-stretch receivableReview_fd2_3'     >
            <view   class='flex flex-wrap align-center justify-between receivableReview_fd2_3_c0'     >
        <text class='receivableReview_fd2_3_c0_c0' >审批进度</text>
</view>
    <view   class='flex flex-wrap align-start receivableReview_fd2_3_c1'   v-if= "type=='1'"  >
            <view   class='flex flex-direction flex-wrap align-center'     >
        <image class='receivableReview_fd2_3_c1_c0_c0' mode="aspectFit"  :src='STATIC_URL+"60.png"'></image>
</view>
    <view   class='flex flex-direction flex-wrap align-stretch flex-sub receivableReview_fd2_3_c1_c1'     >
            <view   class='flex flex-wrap align-center'     >
        <text class='receivableReview_fd2_3_c1_c1_c0_c0' >员工</text>
<image class='receivableReview_fd2_3_c1_c1_c0_c1' mode="aspectFit"  :src='STATIC_URL+"32.png"'></image>
<text class='receivableReview_fd2_3_c1_c1_c0_c2' >陈沉沉</text>
<text class='receivableReview_fd2_3_c1_c1_c0_c3' >发起审批</text>
</view>
    <view   class='flex flex-wrap align-center receivableReview_fd2_3_c1_c1_c1'     >
        <text class='receivableReview_fd2_3_c1_c1_c1_c0' >2022-08-08</text>
<text class='receivableReview_fd2_3_c1_c1_c1_c1' >12:02</text>
</view>
</view>
</view>
    <view   class='flex flex-wrap align-start receivableReview_fd2_3_c2'   v-if= "type=='2'"  >
            <view   class='flex flex-direction flex-wrap align-center'     >
        <image class='receivableReview_fd2_3_c2_c0_c0' mode="aspectFit"  :src='STATIC_URL+"60.png"'></image>
    <view   class='flex flex-wrap align-center receivableReview_fd2_3_c2_c0_c1'     >
        </view>
<image class='receivableReview_fd2_3_c2_c0_c2' mode="aspectFit"  :src='STATIC_URL+"60.png"'></image>
    <view   class='flex flex-wrap align-center receivableReview_fd2_3_c2_c0_c3'     >
        </view>
<image class='receivableReview_fd2_3_c2_c0_c4' mode="aspectFit"  :src='STATIC_URL+"60.png"'></image>
</view>
    <view   class='flex flex-direction flex-wrap align-stretch flex-sub receivableReview_fd2_3_c2_c1'     >
            <view   class='flex flex-wrap align-center'     >
        <text class='receivableReview_fd2_3_c2_c1_c0_c0' >员工</text>
<image class='receivableReview_fd2_3_c2_c1_c0_c1' mode="aspectFit"  :src='STATIC_URL+"32.png"'></image>
<text class='receivableReview_fd2_3_c2_c1_c0_c2' >陈沉沉</text>
<text class='receivableReview_fd2_3_c2_c1_c0_c3' >发起审批</text>
</view>
    <view   class='flex flex-wrap align-center receivableReview_fd2_3_c2_c1_c1'     >
        <text class='receivableReview_fd2_3_c2_c1_c1_c0' >2022-08-08</text>
<text class='receivableReview_fd2_3_c2_c1_c1_c1' >12:02</text>
</view>
    <view   class='flex flex-wrap align-center receivableReview_fd2_3_c2_c1_c2'     >
        <text class='receivableReview_fd2_3_c2_c1_c2_c0' >财务</text>
<image class='receivableReview_fd2_3_c2_c1_c2_c1' mode="aspectFit"  :src='STATIC_URL+"32.png"'></image>
<text class='receivableReview_fd2_3_c2_c1_c2_c2' >张章章</text>
<text class='receivableReview_fd2_3_c2_c1_c2_c3' >审批通过</text>
</view>
    <view   class='flex flex-wrap align-center receivableReview_fd2_3_c2_c1_c3'     >
        <text class='receivableReview_fd2_3_c2_c1_c3_c0' >2022-08-08</text>
<text class='receivableReview_fd2_3_c2_c1_c3_c1' >12:02</text>
</view>
    <view   class='flex flex-wrap align-center receivableReview_fd2_3_c2_c1_c4'     >
        <text class='receivableReview_fd2_3_c2_c1_c4_c0' >抄送人（已抄送4人）</text>
</view>
    <view   class='flex flex-wrap align-center receivableReview_fd2_3_c2_c1_c5'     >
            <view   class='flex flex-direction flex-wrap align-center receivableReview_fd2_3_c2_c1_c5_c0'     >
        <image class='receivableReview_fd2_3_c2_c1_c5_c0_c0' mode="aspectFit"  :src='STATIC_URL+"32.png"'></image>
<text class='receivableReview_fd2_3_c2_c1_c5_c0_c1' >温温问
(总经理)</text>
</view>
</view>
</view>
</view>
    <view   class='flex flex-wrap align-start receivableReview_fd2_3_c3'   v-if= "type=='3'"  >
            <view   class='flex flex-direction flex-wrap align-center'     >
        <image class='receivableReview_fd2_3_c3_c0_c0' mode="aspectFit"  :src='STATIC_URL+"60.png"'></image>
    <view   class='flex flex-wrap align-center receivableReview_fd2_3_c3_c0_c1'     >
        </view>
<image class='receivableReview_fd2_3_c3_c0_c2' mode="aspectFit"  :src='STATIC_URL+"60.png"'></image>
    <view   class='flex flex-wrap align-center receivableReview_fd2_3_c3_c0_c3'     >
        </view>
<image class='receivableReview_fd2_3_c3_c0_c4' mode="aspectFit"  :src='STATIC_URL+"84.png"'></image>
</view>
    <view   class='flex flex-direction flex-wrap align-stretch flex-sub receivableReview_fd2_3_c3_c1'     >
            <view   class='flex flex-wrap align-center'     >
        <text class='receivableReview_fd2_3_c3_c1_c0_c0' >员工</text>
<image class='receivableReview_fd2_3_c3_c1_c0_c1' mode="aspectFit"  :src='STATIC_URL+"32.png"'></image>
<text class='receivableReview_fd2_3_c3_c1_c0_c2' >陈沉沉</text>
<text class='receivableReview_fd2_3_c3_c1_c0_c3' >发起审批</text>
</view>
    <view   class='flex flex-wrap align-center receivableReview_fd2_3_c3_c1_c1'     >
        <text class='receivableReview_fd2_3_c3_c1_c1_c0' >2022-08-08</text>
<text class='receivableReview_fd2_3_c3_c1_c1_c1' >12:02</text>
</view>
    <view   class='flex flex-wrap align-center receivableReview_fd2_3_c3_c1_c2'     >
        <text class='receivableReview_fd2_3_c3_c1_c2_c0' >财务</text>
<image class='receivableReview_fd2_3_c3_c1_c2_c1' mode="aspectFit"  :src='STATIC_URL+"32.png"'></image>
<text class='receivableReview_fd2_3_c3_c1_c2_c2' >张章章</text>
<text class='receivableReview_fd2_3_c3_c1_c2_c3' >审批驳回</text>
</view>
    <view   class='flex flex-wrap align-center receivableReview_fd2_3_c3_c1_c3'     >
        <text class='receivableReview_fd2_3_c3_c1_c3_c0' >2022-08-08</text>
<text class='receivableReview_fd2_3_c3_c1_c3_c1' >12:02</text>
</view>
    <view   class='flex flex-wrap align-center receivableReview_fd2_3_c3_c1_c4'     >
        <text class='receivableReview_fd2_3_c3_c1_c4_c0' >驳回原因：</text>
<text class='receivableReview_fd2_3_c3_c1_c4_c1' >项目信息有误</text>
</view>
    <view   class='flex flex-wrap align-center receivableReview_fd2_3_c3_c1_c5'     >
        <text class='receivableReview_fd2_3_c3_c1_c5_c0' >抄送人（已抄送4人）</text>
</view>
    <view   class='flex flex-wrap align-center receivableReview_fd2_3_c3_c1_c6'     >
            <view   class='flex flex-direction flex-wrap align-center receivableReview_fd2_3_c3_c1_c6_c0'     >
        <image class='receivableReview_fd2_3_c3_c1_c6_c0_c0' mode="aspectFit"  :src='STATIC_URL+"32.png"'></image>
<text class='receivableReview_fd2_3_c3_c1_c6_c0_c1' >温温问
(总经理)</text>
</view>
</view>
</view>
</view>
</view>
</view>
<!---flex布局flex布局结束-->
<benben-popup v-model="popupShow1666258691630" :mask="true"  mode='center'>
    <!---flex布局flex布局开始-->
 <view class="flex flex-direction flex-wrap align-stretch benben-flex-layout receivableReview_flex_3"   >
            <view   class='flex flex-direction flex-wrap align-center receivableReview_fd3_0'     >
        <text class='receivableReview_fd3_0_c0' >驳回原因</text>
<view class='flex flex-wrap receivableReview_fd3_0_c1'>
<textarea class='flex receivableReview_input_fd3_0_c1' confirm-type="done" :placeholder="'请输入驳回原因'" :maxlength="240" placeholder-style="color:#999;font-size:28rpx"   v-model="fd3_0_c1" />

</view>
    <view   class='flex flex-wrap align-center receivableReview_fd3_0_c2'     >
        <button class='receivableReview_fd3_0_c2_c0' @tap.stop="handleJumpDiy" data-type="back" data-url="1"  >取消</button>
<button class='receivableReview_fd3_0_c2_c1' >确认</button>
</view>
</view>
</view>
<!---flex布局flex布局结束-->
</benben-popup>
<benben-popup v-model="popupShow1666258073822" :mask="true"  mode='center'>
    <!---flex布局flex布局开始-->
 <view class="flex flex-direction flex-wrap align-stretch benben-flex-layout receivableReview_flex_4"   >
            <view   class='flex flex-direction flex-wrap align-stretch receivableReview_fd4_0'     >
            <view   class='flex flex-direction flex-wrap align-center receivableReview_fd4_0_c0'     >
        <text class='receivableReview_fd4_0_c0_c0' >提示</text>
<text class='receivableReview_fd4_0_c0_c1' >确认驳回该条回款信息吗？</text>
</view>
    <view   class='flex flex-wrap align-center'     >
        <button class='flex-sub receivableReview_fd4_0_c1_c0' @tap.stop="popupShow1666258073822=true"  >取消</button>
<button class='flex-sub receivableReview_fd4_0_c1_c1' @tap.stop="getstate()"  >确定</button>
</view>
</view>
</view>
<!---flex布局flex布局结束-->
</benben-popup>
    <view class="flex flex-wrap align-center justify-end benben-position-layout flex receivableReview_flex_5"  v-if= "type=='1'"  >
        <button class='receivableReview_fd5_0' @tap.stop="popupShow1666258073822=true"  >驳回</button>
<button class='receivableReview_fd5_1' @tap.stop="popupShow1666161013185=true"  >通过</button>

        </view>
<view :style="{height: '97rpx'}" v-if= "type=='1'" ></view>
    
    </view>
</template>
<script>
    
    export default {
        components:{},
        
        data(){
			return {"popupShow1666258073822":false,"fd3_0_c1":"","popupShow1666258691630":false,"popupShow1666161013185":false,"cut":"1","type":""};
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
                            //显示与隐藏
                 getstate(){
                        this.popupShow1666258073822 = false;
    this.popupShow1666258691630 = true;
                return
                }
		}
    };
</script> 
<style lang="scss" scoped>
           .page{
            min-height: calc(100vh - var(--window-bottom));
            background:rgba(243, 246, 251, 1);background-size: 100% auto !important;
        }
    .receivableReview_flex_0{
        background:#fff;background-size: 100% !important;width:750rpx;height:88rpx;overflow:hidden;z-index:10;top:0rpx;background-size:100% auto !important;
    }
    .receivableReview_fd0_2{
        width:100rpx;height:88rpx;margin:0rpx 32rpx 0rpx 0rpx;
    }
    .receivableReview_fd0_1{
        color:#000000;font-size:36rpx;font-weight:500;line-height:50rpx;
    }
    .receivableReview_fd0_0{
        width:100rpx;height:88rpx;margin:0rpx 0rpx 0rpx 32rpx;
    }
    .receivableReview_flex_1{
        padding:0rpx 105rpx 0rpx 105rpx;
    }
    .receivableReview_fd1_0_c1_c1{
        background:#fff;background-size: 100% !important;border-radius:0rpx 0rpx 16rpx 0rpx;font-size:32rpx;color:rgba(11, 24, 152, 1);height:110rpx;line-height:110rpx;
    }
    .receivableReview_fd1_0_c1_c0{
        border-right:1px solid rgba(238, 238, 238, 1);background:#fff;background-size: 100% !important;border-radius:0rpx 0rpx 0rpx 16rpx;font-size:32rpx;color:rgba(153, 153, 153, 1);height:110rpx;line-height:110rpx;
    }
    .receivableReview_fd1_0_c0_c1{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .receivableReview_fd1_0_c0_c0{
        color:#333333;font-size:32rpx;font-weight:500;line-height:45rpx;margin:0rpx 0rpx 40rpx 0rpx;
    }
    .receivableReview_fd1_0_c0{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:40rpx 102rpx 40rpx 102rpx;
    }
    .receivableReview_fd1_0{
        background:#fff;background-size: 100% !important;border-radius:16rpx 16rpx 16rpx 16rpx;
    }
    .receivableReview_flex_2{
        background:url(/static/images/41.png) no-repeat;background-size: 100% !important;background-size:100% auto !important;padding:0rpx 32rpx 0rpx 32rpx;
    }
    .receivableReview_fd2_3_c3_c1_c6_c0_c1{
        color:#9EA7B7;font-size:20rpx;font-weight:400;line-height:24rpx;text-align:center;margin:6rpx 0rpx 0rpx 0rpx;
    }
    .receivableReview_fd2_3_c3_c1_c6_c0_c0{
        width:36rpx;height:36rpx;border-radius:18rpx 18rpx 18rpx 18rpx;
    }
    .receivableReview_fd2_3_c3_c1_c6_c0{
        margin:0rpx 32rpx 0rpx 0rpx;
    }
    .receivableReview_fd2_3_c3_c1_c6{
        margin:16rpx 0rpx 0rpx 0rpx;
    }
    .receivableReview_fd2_3_c3_c1_c5_c0{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .receivableReview_fd2_3_c3_c1_c5{
        margin:70rpx 0rpx 0rpx 0rpx;
    }
    .receivableReview_fd2_3_c3_c1_c4_c1{
        color:#333;font-size:24rpx;font-weight:400;line-height:33rpx;margin:0rpx 0rpx 0rpx 14rpx;
    }
    .receivableReview_fd2_3_c3_c1_c4_c0{
        color:rgba(102, 102, 102, 1);font-size:24rpx;font-weight:400;line-height:33rpx;
    }
    .receivableReview_fd2_3_c3_c1_c4{
        margin:16rpx 0rpx 0rpx 0rpx;
    }
    .receivableReview_fd2_3_c3_c1_c3_c1{
        color:#333333;font-size:24rpx;font-weight:400;line-height:33rpx;margin:0rpx 0rpx 0rpx 14rpx;
    }
    .receivableReview_fd2_3_c3_c1_c3_c0{
        color:#333333;font-size:24rpx;font-weight:400;line-height:33rpx;
    }
    .receivableReview_fd2_3_c3_c1_c3{
        margin:16rpx 0rpx 0rpx 0rpx;
    }
    .receivableReview_fd2_3_c3_c1_c2_c3{
        color:rgba(230, 53, 65, 1);font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .receivableReview_fd2_3_c3_c1_c2_c2{
        color:#9EA7B7;font-size:24rpx;font-weight:400;line-height:40rpx;margin:0rpx 24rpx 0rpx 0rpx;
    }
    .receivableReview_fd2_3_c3_c1_c2_c1{
        width:36rpx;height:36rpx;border-radius:18rpx 18rpx 18rpx 18rpx;margin:0rpx 10rpx 0rpx 24rpx;
    }
    .receivableReview_fd2_3_c3_c1_c2_c0{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .receivableReview_fd2_3_c3_c1_c2{
        margin:70rpx 0rpx 0rpx 0rpx;
    }
    .receivableReview_fd2_3_c3_c1_c1_c1{
        color:#333333;font-size:24rpx;font-weight:400;line-height:33rpx;margin:0rpx 0rpx 0rpx 14rpx;
    }
    .receivableReview_fd2_3_c3_c1_c1_c0{
        color:#333333;font-size:24rpx;font-weight:400;line-height:33rpx;
    }
    .receivableReview_fd2_3_c3_c1_c1{
        margin:16rpx 0rpx 0rpx 0rpx;
    }
    .receivableReview_fd2_3_c3_c1_c0_c3{
        color:#0B1898;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .receivableReview_fd2_3_c3_c1_c0_c2{
        color:#9EA7B7;font-size:24rpx;font-weight:400;line-height:40rpx;margin:0rpx 24rpx 0rpx 0rpx;
    }
    .receivableReview_fd2_3_c3_c1_c0_c1{
        width:36rpx;height:36rpx;border-radius:18rpx 18rpx 18rpx 18rpx;margin:0rpx 10rpx 0rpx 24rpx;
    }
    .receivableReview_fd2_3_c3_c1_c0_c0{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .receivableReview_fd2_3_c3_c1{
        margin:0rpx 0rpx 0rpx 21rpx;
    }
    .receivableReview_fd2_3_c3_c0_c4{
        width:32rpx;height:32rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .receivableReview_fd2_3_c3_c0_c3{
        border:1px dashed rgba(221, 221, 221, 1);width:1rpx;height:156rpx;
    }
    .receivableReview_fd2_3_c3_c0_c2{
        width:32rpx;height:32rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .receivableReview_fd2_3_c3_c0_c1{
        border:1px dashed rgba(221, 221, 221, 1);width:1rpx;height:131rpx;
    }
    .receivableReview_fd2_3_c3_c0_c0{
        width:32rpx;height:32rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .receivableReview_fd2_3_c3{
        margin:33rpx 0rpx 0rpx 0rpx;
    }
    .receivableReview_fd2_3_c2_c1_c5_c0_c1{
        color:#9EA7B7;font-size:20rpx;font-weight:400;line-height:24rpx;text-align:center;margin:6rpx 0rpx 0rpx 0rpx;
    }
    .receivableReview_fd2_3_c2_c1_c5_c0_c0{
        width:36rpx;height:36rpx;border-radius:18rpx 18rpx 18rpx 18rpx;
    }
    .receivableReview_fd2_3_c2_c1_c5_c0{
        margin:0rpx 32rpx 0rpx 0rpx;
    }
    .receivableReview_fd2_3_c2_c1_c5{
        margin:16rpx 0rpx 0rpx 0rpx;
    }
    .receivableReview_fd2_3_c2_c1_c4_c0{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .receivableReview_fd2_3_c2_c1_c4{
        margin:70rpx 0rpx 0rpx 0rpx;
    }
    .receivableReview_fd2_3_c2_c1_c3_c1{
        color:#333333;font-size:24rpx;font-weight:400;line-height:33rpx;margin:0rpx 0rpx 0rpx 14rpx;
    }
    .receivableReview_fd2_3_c2_c1_c3_c0{
        color:#333333;font-size:24rpx;font-weight:400;line-height:33rpx;
    }
    .receivableReview_fd2_3_c2_c1_c3{
        margin:16rpx 0rpx 0rpx 0rpx;
    }
    .receivableReview_fd2_3_c2_c1_c2_c3{
        color:rgba(29, 185, 153, 1);font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .receivableReview_fd2_3_c2_c1_c2_c2{
        color:#9EA7B7;font-size:24rpx;font-weight:400;line-height:40rpx;margin:0rpx 24rpx 0rpx 0rpx;
    }
    .receivableReview_fd2_3_c2_c1_c2_c1{
        width:36rpx;height:36rpx;border-radius:18rpx 18rpx 18rpx 18rpx;margin:0rpx 10rpx 0rpx 24rpx;
    }
    .receivableReview_fd2_3_c2_c1_c2_c0{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .receivableReview_fd2_3_c2_c1_c2{
        margin:70rpx 0rpx 0rpx 0rpx;
    }
    .receivableReview_fd2_3_c2_c1_c1_c1{
        color:#333333;font-size:24rpx;font-weight:400;line-height:33rpx;margin:0rpx 0rpx 0rpx 14rpx;
    }
    .receivableReview_fd2_3_c2_c1_c1_c0{
        color:#333333;font-size:24rpx;font-weight:400;line-height:33rpx;
    }
    .receivableReview_fd2_3_c2_c1_c1{
        margin:16rpx 0rpx 0rpx 0rpx;
    }
    .receivableReview_fd2_3_c2_c1_c0_c3{
        color:#0B1898;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .receivableReview_fd2_3_c2_c1_c0_c2{
        color:#9EA7B7;font-size:24rpx;font-weight:400;line-height:40rpx;margin:0rpx 24rpx 0rpx 0rpx;
    }
    .receivableReview_fd2_3_c2_c1_c0_c1{
        width:36rpx;height:36rpx;border-radius:18rpx 18rpx 18rpx 18rpx;margin:0rpx 10rpx 0rpx 24rpx;
    }
    .receivableReview_fd2_3_c2_c1_c0_c0{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .receivableReview_fd2_3_c2_c1{
        margin:0rpx 0rpx 0rpx 21rpx;
    }
    .receivableReview_fd2_3_c2_c0_c4{
        width:32rpx;height:32rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .receivableReview_fd2_3_c2_c0_c3{
        border:1px dashed rgba(221, 221, 221, 1);width:1rpx;height:129rpx;
    }
    .receivableReview_fd2_3_c2_c0_c2{
        width:32rpx;height:32rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .receivableReview_fd2_3_c2_c0_c1{
        border:1px dashed rgba(221, 221, 221, 1);width:1rpx;height:129rpx;
    }
    .receivableReview_fd2_3_c2_c0_c0{
        width:32rpx;height:32rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .receivableReview_fd2_3_c2{
        margin:33rpx 0rpx 0rpx 0rpx;
    }
    .receivableReview_fd2_3_c1_c1_c1_c1{
        color:#333333;font-size:24rpx;font-weight:400;line-height:33rpx;margin:0rpx 0rpx 0rpx 14rpx;
    }
    .receivableReview_fd2_3_c1_c1_c1_c0{
        color:#333333;font-size:24rpx;font-weight:400;line-height:33rpx;
    }
    .receivableReview_fd2_3_c1_c1_c1{
        margin:16rpx 0rpx 0rpx 0rpx;
    }
    .receivableReview_fd2_3_c1_c1_c0_c3{
        color:#0B1898;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .receivableReview_fd2_3_c1_c1_c0_c2{
        color:#9EA7B7;font-size:24rpx;font-weight:400;line-height:40rpx;margin:0rpx 24rpx 0rpx 0rpx;
    }
    .receivableReview_fd2_3_c1_c1_c0_c1{
        width:36rpx;height:36rpx;border-radius:18rpx 18rpx 18rpx 18rpx;margin:0rpx 10rpx 0rpx 24rpx;
    }
    .receivableReview_fd2_3_c1_c1_c0_c0{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .receivableReview_fd2_3_c1_c1{
        margin:0rpx 0rpx 0rpx 21rpx;
    }
    .receivableReview_fd2_3_c1_c0_c0{
        width:32rpx;height:32rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .receivableReview_fd2_3_c1{
        margin:33rpx 0rpx 0rpx 0rpx;
    }
    .receivableReview_fd2_3_c0_c0{
        color:#333333;font-size:32rpx;font-weight:500;line-height:45rpx;
    }
    .receivableReview_fd2_3_c0{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:0rpx 0rpx 16rpx 0rpx;
    }
    .receivableReview_fd2_3{
        background:#fff;background-size: 100% !important;border-radius:16rpx 16rpx 16rpx 16rpx;margin:20rpx 0rpx 0rpx 0rpx;padding:32rpx 24rpx 32rpx 24rpx;
    }
    .receivableReview_fd2_2_c8_c0{
        width:152rpx;height:152rpx;margin:0rpx 0rpx 8rpx 15rpx;border-radius:16rpx 16rpx 16rpx 16rpx;
    }
    .receivableReview_fd2_2_c8{
        margin:24rpx 24rpx 0rpx 9rpx;
    }
    .receivableReview_fd2_2_c7{
        color:#333333;font-size:32rpx;font-weight:500;line-height:45rpx;margin:24rpx 24rpx 0rpx 24rpx;
    }
    .receivableReview_fd2_2_c6_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 64rpx;
    }
    .receivableReview_fd2_2_c6_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .receivableReview_fd2_2_c6{
        margin:24rpx 0rpx 0rpx 0rpx;padding:0rpx 24rpx 0rpx 24rpx;
    }
    .receivableReview_fd2_2_c5_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 64rpx;
    }
    .receivableReview_fd2_2_c5_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .receivableReview_fd2_2_c5{
        margin:24rpx 0rpx 0rpx 0rpx;padding:0rpx 24rpx 0rpx 24rpx;
    }
    .receivableReview_fd2_2_c4_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 64rpx;
    }
    .receivableReview_fd2_2_c4_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .receivableReview_fd2_2_c4{
        margin:24rpx 0rpx 0rpx 0rpx;padding:0rpx 24rpx 0rpx 24rpx;
    }
    .receivableReview_fd2_2_c3_c2{
        color:rgba(72, 151, 235, 1);font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 10rpx;
    }
    .receivableReview_fd2_2_c3_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 64rpx;
    }
    .receivableReview_fd2_2_c3_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .receivableReview_fd2_2_c3{
        margin:24rpx 0rpx 0rpx 0rpx;padding:0rpx 24rpx 0rpx 24rpx;
    }
    .receivableReview_fd2_2_c2_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 64rpx;
    }
    .receivableReview_fd2_2_c2_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .receivableReview_fd2_2_c2{
        margin:24rpx 0rpx 0rpx 0rpx;padding:0rpx 24rpx 0rpx 24rpx;
    }
    .receivableReview_fd2_2_c1_c2{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 10rpx;
    }
    .receivableReview_fd2_2_c1_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 64rpx;
    }
    .receivableReview_fd2_2_c1_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .receivableReview_fd2_2_c1{
        margin:24rpx 0rpx 0rpx 0rpx;padding:0rpx 24rpx 0rpx 24rpx;
    }
    .receivableReview_fd2_2_c0_c0{
        color:#333333;font-size:32rpx;font-weight:500;line-height:45rpx;
    }
    .receivableReview_fd2_2_c0{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:0rpx 24rpx 16rpx 24rpx;
    }
    .receivableReview_fd2_2{
        background:#fff;background-size: 100% !important;border-radius:16rpx 16rpx 16rpx 16rpx;padding:32rpx 0rpx 32rpx 0rpx;margin:20rpx 0rpx 0rpx 0rpx;
    }
    .receivableReview_fd2_1_c5_c2{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 10rpx;
    }
    .receivableReview_fd2_1_c5_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 64rpx;
    }
    .receivableReview_fd2_1_c5_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .receivableReview_fd2_1_c5{
        margin:24rpx 0rpx 0rpx 0rpx;
    }
    .receivableReview_fd2_1_c4_c2{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 10rpx;
    }
    .receivableReview_fd2_1_c4_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 64rpx;
    }
    .receivableReview_fd2_1_c4_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .receivableReview_fd2_1_c4{
        margin:24rpx 0rpx 0rpx 0rpx;
    }
    .receivableReview_fd2_1_c3_c2{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .receivableReview_fd2_1_c3_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 64rpx;
    }
    .receivableReview_fd2_1_c3_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .receivableReview_fd2_1_c3{
        margin:24rpx 0rpx 0rpx 0rpx;
    }
    .receivableReview_fd2_1_c2_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 64rpx;
    }
    .receivableReview_fd2_1_c2_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .receivableReview_fd2_1_c2{
        margin:24rpx 0rpx 0rpx 0rpx;
    }
    .receivableReview_fd2_1_c1_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 92rpx;
    }
    .receivableReview_fd2_1_c1_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .receivableReview_fd2_1_c1{
        margin:24rpx 0rpx 0rpx 0rpx;
    }
    .receivableReview_fd2_1_c0_c0{
        color:#333333;font-size:32rpx;font-weight:500;line-height:45rpx;
    }
    .receivableReview_fd2_1_c0{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:0rpx 0rpx 16rpx 0rpx;
    }
    .receivableReview_fd2_1{
        background:#fff;background-size: 100% !important;border-radius:16rpx 16rpx 16rpx 16rpx;padding:32rpx 24rpx 32rpx 24rpx;margin:20rpx 0rpx 0rpx 0rpx;
    }
    .receivableReview_fd2_0_c2_c0{
        color:#FFFFFF;font-size:28rpx;font-weight:500;line-height:40rpx;
    }
    .receivableReview_fd2_0_c2{
        margin:0rpx 0rpx 0rpx auto;
    }
    .receivableReview_fd2_0_c1_2{
        width:160rpx;height:56rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .receivableReview_fd2_0_c1_1{
        width:160rpx;height:56rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .receivableReview_fd2_0_c1{
        width:120rpx;height:56rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .receivableReview_fd2_0_c0_2{
        width:88rpx;height:88rpx;border-radius:0rpx 0rpx 0rpx 0rpx;margin:0rpx 24rpx 0rpx 0rpx;
    }
    .receivableReview_fd2_0_c0_1{
        width:88rpx;height:88rpx;border-radius:0rpx 0rpx 0rpx 0rpx;margin:0rpx 24rpx 0rpx 0rpx;
    }
    .receivableReview_fd2_0_c0{
        width:88rpx;height:88rpx;border-radius:0rpx 0rpx 0rpx 0rpx;margin:0rpx 24rpx 0rpx 0rpx;
    }
    .receivableReview_fd2_0{
        margin:40rpx 0rpx 20rpx 0rpx;
    }
    .receivableReview_flex_3{
        padding:0rpx 75rpx 0rpx 75rpx;
    }
    .receivableReview_fd3_0_c2_c1{
        background:rgba(11, 24, 152, 1);background-size: 100% !important;border-radius:39rpx 39rpx 39rpx 39rpx;font-size:32rpx;color:#fff;width:200rpx;height:68rpx;line-height:68rpx;margin:0rpx 0rpx 0rpx 50rpx;
    }
    .receivableReview_fd3_0_c2_c0{
        border:1px solid #707070;background:#fff;background-size: 100% !important;border-radius:39rpx 39rpx 39rpx 39rpx;font-size:32rpx;color:rgba(153, 153, 153, 1);width:200rpx;height:68rpx;line-height:68rpx;
    }
    .receivableReview_fd3_0_c2{
        margin:53rpx 0rpx 0rpx 0rpx;
    }
    .receivableReview_input_fd3_0_c1{
        width:100%;height:319rpx;font-size:28rpx;font-weight:400;color:#333;padding:24rpx 0rpx 0rpx 24rpx;
    }
    .receivableReview_fd3_0_c1{
        border:1px solid rgba(191, 191, 191, 1);background:#fff;background-size: 100% !important;width:540rpx;border-radius:10rpx 10rpx 10rpx 10rpx;
    }
    .receivableReview_fd3_0_c0{
        color:#1A1A1A;font-size:32rpx;font-weight:700;line-height:45rpx;margin:0rpx 0rpx 27rpx 0rpx;
    }
    .receivableReview_fd3_0{
        background:#fff;background-size: 100% !important;border-radius:18rpx 18rpx 18rpx 18rpx;padding:35rpx 30rpx 53rpx 30rpx;
    }
    .receivableReview_flex_4{
        padding:0rpx 105rpx 0rpx 105rpx;
    }
    .receivableReview_fd4_0_c1_c1{
        background:#fff;background-size: 100% !important;border-radius:0rpx 0rpx 16rpx 0rpx;font-size:32rpx;color:rgba(11, 24, 152, 1);height:110rpx;line-height:110rpx;
    }
    .receivableReview_fd4_0_c1_c0{
        border-right:1px solid rgba(238, 238, 238, 1);background:#fff;background-size: 100% !important;border-radius:0rpx 0rpx 0rpx 16rpx;font-size:32rpx;color:rgba(153, 153, 153, 1);height:110rpx;line-height:110rpx;
    }
    .receivableReview_fd4_0_c0_c1{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .receivableReview_fd4_0_c0_c0{
        color:#333333;font-size:32rpx;font-weight:500;line-height:45rpx;margin:0rpx 0rpx 40rpx 0rpx;
    }
    .receivableReview_fd4_0_c0{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:40rpx 102rpx 40rpx 102rpx;
    }
    .receivableReview_fd4_0{
        background:#fff;background-size: 100% !important;border-radius:16rpx 16rpx 16rpx 16rpx;
    }
    .receivableReview_flex_5{
        background:#fff;background-size: 100% !important;width:750rpx;height:97rpx;overflow:hidden;z-index:10;bottom:calc(0rpx + var(--window-bottom));background-size:100% auto !important;
    }
    .receivableReview_fd5_1{
        background:rgba(11, 24, 152, 1);background-size: 100% !important;border-radius:50rpx 50rpx 50rpx 50rpx;font-size:24rpx;color:#fff;width:170rpx;height:60rpx;line-height:60rpx;margin:0rpx 24rpx 0rpx 0rpx;
    }
    .receivableReview_fd5_0{
        border:1px solid #666666;background:#fff;background-size: 100% !important;border-radius:28rpx 28rpx 28rpx 28rpx;font-size:24rpx;color:#333;width:170rpx;height:60rpx;line-height:60rpx;margin:0rpx 24rpx 0rpx 0rpx;
    }
</style>