<template>
    <view class="page" :style="themeColor">
    <view class="flex flex-wrap align-center justify-between benben-position-layout flex detailsReimbursement_flex_0"    :style="{height:(88+StatusBarRpx)+'rpx',paddingTop:StatusBarRpx+'rpx'}">
            <view   class='flex flex-wrap align-center detailsReimbursement_fd0_0'  @tap.stop="handleJumpDiy" data-type="back" data-url="1"   >
        <text class='fu-iconfont2' >&#xe794;</text>
</view>
<text class='detailsReimbursement_fd0_1' >详情</text>
    <view   class='flex flex-wrap align-center detailsReimbursement_fd0_2'     >
        </view>

        </view>
<view :style="{height: (88+StatusBarRpx)+'rpx'}"  ></view>
<benben-popup v-model="popupShow1666161013185" :mask="true"  mode='center'>
    <!---flex布局flex布局开始-->
 <view class="flex flex-direction flex-wrap align-stretch benben-flex-layout detailsReimbursement_flex_1"   >
            <view   class='flex flex-direction flex-wrap align-stretch detailsReimbursement_fd1_0'     >
            <view   class='flex flex-direction flex-wrap align-center detailsReimbursement_fd1_0_c0'     >
        <text class='detailsReimbursement_fd1_0_c0_c0' >提示</text>
<text class='detailsReimbursement_fd1_0_c0_c1' >确定要提交该报销吗？</text>
</view>
    <view   class='flex flex-wrap align-center'     >
        <button class='flex-sub detailsReimbursement_fd1_0_c1_c0' @tap.stop="popupShow1666161013185=false"  >按钮</button>
<button class='flex-sub detailsReimbursement_fd1_0_c1_c1' >确定</button>
</view>
</view>
</view>
<!---flex布局flex布局结束-->
</benben-popup>
<!---flex布局flex布局开始-->
 <view class="flex flex-direction flex-wrap align-stretch benben-flex-layout detailsReimbursement_flex_2"   >
            <view   class='flex flex-wrap align-center detailsReimbursement_fd2_0'     >
        <image class='detailsReimbursement_fd2_0_c0' :src='STATIC_URL+"91.png"'  v-if= "type=='1'"></image><image class='detailsReimbursement_fd2_0_c0_1' :src='STATIC_URL+"79.png"'  v-if= "type=='2' || type=='3'"></image><image class='detailsReimbursement_fd2_0_c0_2' :src='STATIC_URL+"82.png"'  v-if= "type=='4'"></image><image class='detailsReimbursement_fd2_0_c0_3' :src='STATIC_URL+"85.png"'  v-if= "type=='5'"></image>
<image class='detailsReimbursement_fd2_0_c1' :src='STATIC_URL+"42.png"'  v-if= "type=='1'"></image><image class='detailsReimbursement_fd2_0_c1_1' :src='STATIC_URL+"78.png"'  v-if= "type=='2'"></image><image class='detailsReimbursement_fd2_0_c1_2' :src='STATIC_URL+"81.png"'  v-if= "type=='3'"></image><image class='detailsReimbursement_fd2_0_c1_3' :src='STATIC_URL+"83.png"'  v-if= "type=='4'"></image><image class='detailsReimbursement_fd2_0_c1_4' :src='STATIC_URL+"86.png"'  v-if= "type=='5'"></image>
    <view   class='flex flex-wrap align-center detailsReimbursement_fd2_0_c2'     >
        <text class='detailsReimbursement_fd2_0_c2_c0'   v-if= "type=='2' || type=='3'"  >请耐心等待…</text>
</view>
</view>
    <view   class='flex flex-direction flex-wrap align-stretch detailsReimbursement_fd2_1'     >
            <view   class='flex flex-wrap align-center justify-between detailsReimbursement_fd2_1_c0'     >
        <text class='detailsReimbursement_fd2_1_c0_c0' >报销内容</text>
</view>
    <view   class='flex flex-wrap align-center detailsReimbursement_fd2_1_c1'     >
        <text class='detailsReimbursement_fd2_1_c1_c0' >公司名称</text>
<text class='flex-sub detailsReimbursement_fd2_1_c1_c1' >河南省江淮水利勘测设计有限公司</text>
</view>
    <view   class='flex flex-wrap align-center detailsReimbursement_fd2_1_c2'     >
        <text class='detailsReimbursement_fd2_1_c2_c0' >报销类型</text>
<text class='flex-sub detailsReimbursement_fd2_1_c2_c1' >差旅费、车辆费、招待费</text>
</view>
    <view   class='flex flex-wrap align-center detailsReimbursement_fd2_1_c3'     >
        <text class='detailsReimbursement_fd2_1_c3_c0' >申请人</text>
<text class='flex-sub detailsReimbursement_fd2_1_c3_c1' >陈沉沉</text>
</view>
    <view   class='flex flex-wrap align-start detailsReimbursement_fd2_1_c4'     >
        <text class='detailsReimbursement_fd2_1_c4_c0' >报销内容</text>
<text class='flex-sub detailsReimbursement_fd2_1_c4_c1' >出差住宿/车辆加油/招待客户过程中的各项花销</text>
</view>
    <view   class='flex flex-wrap align-center detailsReimbursement_fd2_1_c5'   v-if= "type=='1'"  >
        <text class='detailsReimbursement_fd2_1_c5_c0' >报销总金额</text>
<text class='detailsReimbursement_fd2_1_c5_c1' >￥</text>
<text class='detailsReimbursement_fd2_1_c5_c2' >3500</text>
</view>
    <view   class='flex flex-wrap align-center detailsReimbursement_fd2_1_c6'   v-if= "type=='1'"  >
        <text class='detailsReimbursement_fd2_1_c6_c0' >核销总金额</text>
<text class='detailsReimbursement_fd2_1_c6_c1' >￥</text>
<text class='detailsReimbursement_fd2_1_c6_c2' >1000</text>
</view>
    <view   class='flex flex-wrap align-center detailsReimbursement_fd2_1_c7'   v-if= "type!='1'"  >
        <text class='detailsReimbursement_fd2_1_c7_c0' >报销金额</text>
<text class='detailsReimbursement_fd2_1_c7_c1' >￥</text>
<text class='detailsReimbursement_fd2_1_c7_c2' >3500</text>
</view>
    <view   class='flex flex-wrap align-center detailsReimbursement_fd2_1_c8'     >
        <text class='detailsReimbursement_fd2_1_c8_c0' >创建时间</text>
<text class='detailsReimbursement_fd2_1_c8_c1' >2022-08-0</text>
<text class='detailsReimbursement_fd2_1_c8_c2' >10:10</text>
</view>
    <view   class='flex flex-wrap align-center detailsReimbursement_fd2_1_c9'     >
        <text class='detailsReimbursement_fd2_1_c9_c0' >申请时间</text>
<text class='detailsReimbursement_fd2_1_c9_c1' >2022-08-08</text>
<text class='detailsReimbursement_fd2_1_c9_c2' >10:10</text>
</view>
</view>
    <view   class='flex flex-direction flex-wrap align-stretch detailsReimbursement_fd2_2'     >
            <view   class='flex flex-wrap align-center justify-between detailsReimbursement_fd2_2_c0'     >
        <text class='detailsReimbursement_fd2_2_c0_c0' >详细信息</text>
</view>
    <view   class='flex flex-wrap align-center detailsReimbursement_fd2_2_c1'     >
        <text class='detailsReimbursement_fd2_2_c1_c0' >报销编号</text>
<text class='flex-sub detailsReimbursement_fd2_2_c1_c1' >12523221323</text>
</view>
    <view   class='flex flex-wrap align-center detailsReimbursement_fd2_2_c2'     >
        <text class='detailsReimbursement_fd2_2_c2_c0' >报销部门</text>
<text class='flex-sub detailsReimbursement_fd2_2_c2_c1' >经营部</text>
</view>
    <view   class='flex flex-wrap align-center detailsReimbursement_fd2_2_c3'     >
        <text class='detailsReimbursement_fd2_2_c3_c0' >关联借支</text>
<text class='detailsReimbursement_fd2_2_c3_c1' >支出流水号</text>
<text class='flex-sub detailsReimbursement_fd2_2_c3_c2' >JHSL20220901001</text>
<text class='detailsReimbursement_fd2_2_c3_c3'    @tap.stop="popupShow1666603863137=true" >详情</text>
</view>
    <view   class='flex flex-wrap align-center detailsReimbursement_fd2_2_c4'     >
        <text class='detailsReimbursement_fd2_2_c4_c0' >项目编号</text>
<text class='flex-sub detailsReimbursement_fd2_2_c4_c1' >ZZSJ001</text>
</view>
    <view   class='flex flex-wrap align-center detailsReimbursement_fd2_2_c5'     >
        <text class='detailsReimbursement_fd2_2_c5_c0' >项目名称</text>
<text class='flex-sub detailsReimbursement_fd2_2_c5_c1' >山乡归园田居美丽乡村样板片区工程</text>
</view>
</view>
    <view   class='flex flex-direction flex-wrap align-stretch detailsReimbursement_fd2_3'     >
            <view   class='flex flex-wrap align-center justify-between detailsReimbursement_fd2_3_c0'     >
        <text class='detailsReimbursement_fd2_3_c0_c0' >报销明细</text>
</view>
    <view   class='flex flex-wrap align-center detailsReimbursement_fd2_3_c1'     >
        <text class='detailsReimbursement_fd2_3_c1_c0' >报销类型</text>
<text class='flex-sub detailsReimbursement_fd2_3_c1_c1' >差旅费</text>
</view>
    <view   class='flex flex-wrap align-center detailsReimbursement_fd2_3_c2'     >
        <text class='detailsReimbursement_fd2_3_c2_c0' >费用类型</text>
<text class='detailsReimbursement_fd2_3_c2_c1' >飞机票</text>
</view>
    <view   class='flex flex-wrap align-center detailsReimbursement_fd2_3_c3'     >
        <text class='detailsReimbursement_fd2_3_c3_c0' >报销金额</text>
<text class='detailsReimbursement_fd2_3_c3_c1' >200</text>
<text class='detailsReimbursement_fd2_3_c3_c2' >元</text>
</view>
    <view   class='flex flex-wrap align-center detailsReimbursement_fd2_3_c4'     >
        <text class='detailsReimbursement_fd2_3_c4_c0' >报销内容</text>
<text class='flex-sub detailsReimbursement_fd2_3_c4_c1' >出差的费用</text>
</view>
    <view   class='flex flex-wrap align-center detailsReimbursement_fd2_3_c5'     >
        <text class='detailsReimbursement_fd2_3_c5_c0' >凭证张数</text>
<text class='flex-sub detailsReimbursement_fd2_3_c5_c1' >4</text>
</view>
<text class='detailsReimbursement_fd2_3_c6' >报销凭证</text>
    <view   class='flex flex-wrap align-center detailsReimbursement_fd2_3_c7'     >
        <image class='detailsReimbursement_fd2_3_c7_c0' mode="aspectFit"  :src='STATIC_URL+"31.png"'></image>
</view>
    <view   class='flex flex-wrap align-center detailsReimbursement_fd2_3_c8'     >
        <text class='detailsReimbursement_fd2_3_c8_c0' >报销类型</text>
<text class='flex-sub detailsReimbursement_fd2_3_c8_c1' >差旅费</text>
</view>
    <view   class='flex flex-wrap align-center detailsReimbursement_fd2_3_c9'     >
        <text class='detailsReimbursement_fd2_3_c9_c0' >费用类型</text>
<text class='detailsReimbursement_fd2_3_c9_c1' >飞机票</text>
</view>
    <view   class='flex flex-wrap align-center detailsReimbursement_fd2_3_c10'     >
        <text class='detailsReimbursement_fd2_3_c10_c0' >报销金额</text>
<text class='detailsReimbursement_fd2_3_c10_c1' >200</text>
<text class='detailsReimbursement_fd2_3_c10_c2' >元</text>
</view>
    <view   class='flex flex-wrap align-center detailsReimbursement_fd2_3_c11'     >
        <text class='detailsReimbursement_fd2_3_c11_c0' >报销内容</text>
<text class='flex-sub detailsReimbursement_fd2_3_c11_c1' >出差的费用</text>
</view>
    <view   class='flex flex-wrap align-center detailsReimbursement_fd2_3_c12'     >
        <text class='detailsReimbursement_fd2_3_c12_c0' >凭证张数</text>
<text class='flex-sub detailsReimbursement_fd2_3_c12_c1' >4</text>
</view>
<text class='detailsReimbursement_fd2_3_c13' >报销凭证</text>
    <view   class='flex flex-wrap align-center detailsReimbursement_fd2_3_c14'     >
        <image class='detailsReimbursement_fd2_3_c14_c0' mode="aspectFit"  :src='STATIC_URL+"31.png"'></image>
</view>
</view>
    <view   class='flex flex-direction flex-wrap align-stretch detailsReimbursement_fd2_4'   v-if= "type>='3'"  >
            <view   class='flex flex-wrap align-center justify-between detailsReimbursement_fd2_4_c0'     >
        <text class='detailsReimbursement_fd2_4_c0_c0' >审批进度</text>
</view>
    <view   class='flex flex-wrap align-start detailsReimbursement_fd2_4_c1'   v-if= "type=='3'"  >
            <view   class='flex flex-direction flex-wrap align-center'     >
        <image class='detailsReimbursement_fd2_4_c1_c0_c0' mode="aspectFit"  :src='STATIC_URL+"60.png"'></image>
    <view   class='flex flex-wrap align-center detailsReimbursement_fd2_4_c1_c0_c1'     >
        </view>
<image class='detailsReimbursement_fd2_4_c1_c0_c2' mode="aspectFit"  :src='STATIC_URL+"60.png"'></image>
    <view   class='flex flex-wrap align-center detailsReimbursement_fd2_4_c1_c0_c3'     >
        </view>
<image class='detailsReimbursement_fd2_4_c1_c0_c4' mode="aspectFit"  :src='STATIC_URL+"80.png"'></image>
</view>
    <view   class='flex flex-direction flex-wrap align-stretch flex-sub detailsReimbursement_fd2_4_c1_c1'     >
            <view   class='flex flex-wrap align-center'     >
        <text class='detailsReimbursement_fd2_4_c1_c1_c0_c0' >员工</text>
<image class='detailsReimbursement_fd2_4_c1_c1_c0_c1' mode="aspectFit"  :src='STATIC_URL+"32.png"'></image>
<text class='detailsReimbursement_fd2_4_c1_c1_c0_c2' >陈沉沉</text>
<text class='detailsReimbursement_fd2_4_c1_c1_c0_c3' >发起审批</text>
</view>
    <view   class='flex flex-wrap align-center detailsReimbursement_fd2_4_c1_c1_c1'     >
        <text class='detailsReimbursement_fd2_4_c1_c1_c1_c0' >2022-08-08</text>
<text class='detailsReimbursement_fd2_4_c1_c1_c1_c1' >12:02</text>
</view>
    <view   class='flex flex-wrap align-center detailsReimbursement_fd2_4_c1_c1_c2'     >
        <text class='detailsReimbursement_fd2_4_c1_c1_c2_c0' >经理</text>
<image class='detailsReimbursement_fd2_4_c1_c1_c2_c1' mode="aspectFit"  :src='STATIC_URL+"32.png"'></image>
<text class='detailsReimbursement_fd2_4_c1_c1_c2_c2' >张章章</text>
<text class='detailsReimbursement_fd2_4_c1_c1_c2_c3' >审批通过</text>
</view>
    <view   class='flex flex-wrap align-center detailsReimbursement_fd2_4_c1_c1_c3'     >
        <text class='detailsReimbursement_fd2_4_c1_c1_c3_c0' >2022-08-08</text>
<text class='detailsReimbursement_fd2_4_c1_c1_c3_c1' >12:02</text>
</view>
    <view   class='flex flex-wrap align-center detailsReimbursement_fd2_4_c1_c1_c4'     >
        <text class='detailsReimbursement_fd2_4_c1_c1_c4_c0' >财务</text>
<image class='detailsReimbursement_fd2_4_c1_c1_c4_c1' mode="aspectFit"  :src='STATIC_URL+"32.png"'></image>
<text class='detailsReimbursement_fd2_4_c1_c1_c4_c2' >张章章</text>
<text class='detailsReimbursement_fd2_4_c1_c1_c4_c3' >审批中</text>
</view>
</view>
</view>
    <view   class='flex flex-wrap align-start detailsReimbursement_fd2_4_c2'   v-if= "type=='4'"  >
            <view   class='flex flex-direction flex-wrap align-center'     >
        <image class='detailsReimbursement_fd2_4_c2_c0_c0' mode="aspectFit"  :src='STATIC_URL+"60.png"'></image>
    <view   class='flex flex-wrap align-center detailsReimbursement_fd2_4_c2_c0_c1'     >
        </view>
<image class='detailsReimbursement_fd2_4_c2_c0_c2' mode="aspectFit"  :src='STATIC_URL+"60.png"'></image>
    <view   class='flex flex-wrap align-center detailsReimbursement_fd2_4_c2_c0_c3'     >
        </view>
<image class='detailsReimbursement_fd2_4_c2_c0_c4' mode="aspectFit"  :src='STATIC_URL+"60.png"'></image>
    <view   class='flex flex-wrap align-center detailsReimbursement_fd2_4_c2_c0_c5'     >
        </view>
<image class='detailsReimbursement_fd2_4_c2_c0_c6' mode="aspectFit"  :src='STATIC_URL+"60.png"'></image>
</view>
    <view   class='flex flex-direction flex-wrap align-stretch flex-sub detailsReimbursement_fd2_4_c2_c1'     >
            <view   class='flex flex-wrap align-center'     >
        <text class='detailsReimbursement_fd2_4_c2_c1_c0_c0' >员工</text>
<image class='detailsReimbursement_fd2_4_c2_c1_c0_c1' mode="aspectFit"  :src='STATIC_URL+"32.png"'></image>
<text class='detailsReimbursement_fd2_4_c2_c1_c0_c2' >陈沉沉</text>
<text class='detailsReimbursement_fd2_4_c2_c1_c0_c3' >发起审批</text>
</view>
    <view   class='flex flex-wrap align-center detailsReimbursement_fd2_4_c2_c1_c1'     >
        <text class='detailsReimbursement_fd2_4_c2_c1_c1_c0' >2022-08-08</text>
<text class='detailsReimbursement_fd2_4_c2_c1_c1_c1' >12:02</text>
</view>
    <view   class='flex flex-wrap align-center detailsReimbursement_fd2_4_c2_c1_c2'     >
        <text class='detailsReimbursement_fd2_4_c2_c1_c2_c0' >经理</text>
<image class='detailsReimbursement_fd2_4_c2_c1_c2_c1' mode="aspectFit"  :src='STATIC_URL+"32.png"'></image>
<text class='detailsReimbursement_fd2_4_c2_c1_c2_c2' >张章章</text>
<text class='detailsReimbursement_fd2_4_c2_c1_c2_c3' >审批通过</text>
</view>
    <view   class='flex flex-wrap align-center detailsReimbursement_fd2_4_c2_c1_c3'     >
        <text class='detailsReimbursement_fd2_4_c2_c1_c3_c0' >2022-08-08</text>
<text class='detailsReimbursement_fd2_4_c2_c1_c3_c1' >12:02</text>
</view>
    <view   class='flex flex-wrap align-center detailsReimbursement_fd2_4_c2_c1_c4'     >
        <text class='detailsReimbursement_fd2_4_c2_c1_c4_c0' >财务</text>
<image class='detailsReimbursement_fd2_4_c2_c1_c4_c1' mode="aspectFit"  :src='STATIC_URL+"32.png"'></image>
<text class='detailsReimbursement_fd2_4_c2_c1_c4_c2' >张章章</text>
<text class='detailsReimbursement_fd2_4_c2_c1_c4_c3' >审批通过</text>
</view>
    <view   class='flex flex-wrap align-center detailsReimbursement_fd2_4_c2_c1_c5'     >
        <text class='detailsReimbursement_fd2_4_c2_c1_c5_c0' >2022-08-08</text>
<text class='detailsReimbursement_fd2_4_c2_c1_c5_c1' >12:02</text>
</view>
    <view   class='flex flex-wrap align-center detailsReimbursement_fd2_4_c2_c1_c6'     >
        <text class='detailsReimbursement_fd2_4_c2_c1_c6_c0' >抄送人（已抄送4人）</text>
</view>
    <view   class='flex flex-wrap align-center detailsReimbursement_fd2_4_c2_c1_c7'     >
            <view   class='flex flex-direction flex-wrap align-center detailsReimbursement_fd2_4_c2_c1_c7_c0'     >
        <image class='detailsReimbursement_fd2_4_c2_c1_c7_c0_c0' mode="aspectFit"  :src='STATIC_URL+"32.png"'></image>
<text class='detailsReimbursement_fd2_4_c2_c1_c7_c0_c1' >温温问
(总经理)</text>
</view>
</view>
</view>
</view>
    <view   class='flex flex-wrap align-start detailsReimbursement_fd2_4_c3'   v-if= "type=='5'"  >
            <view   class='flex flex-direction flex-wrap align-center'     >
        <image class='detailsReimbursement_fd2_4_c3_c0_c0' mode="aspectFit"  :src='STATIC_URL+"60.png"'></image>
    <view   class='flex flex-wrap align-center detailsReimbursement_fd2_4_c3_c0_c1'     >
        </view>
<image class='detailsReimbursement_fd2_4_c3_c0_c2' mode="aspectFit"  :src='STATIC_URL+"84.png"'></image>
</view>
    <view   class='flex flex-direction flex-wrap align-stretch flex-sub detailsReimbursement_fd2_4_c3_c1'     >
            <view   class='flex flex-wrap align-center'     >
        <text class='detailsReimbursement_fd2_4_c3_c1_c0_c0' >员工</text>
<image class='detailsReimbursement_fd2_4_c3_c1_c0_c1' mode="aspectFit"  :src='STATIC_URL+"32.png"'></image>
<text class='detailsReimbursement_fd2_4_c3_c1_c0_c2' >陈沉沉</text>
<text class='detailsReimbursement_fd2_4_c3_c1_c0_c3' >发起审批</text>
</view>
    <view   class='flex flex-wrap align-center detailsReimbursement_fd2_4_c3_c1_c1'     >
        <text class='detailsReimbursement_fd2_4_c3_c1_c1_c0' >2022-08-08</text>
<text class='detailsReimbursement_fd2_4_c3_c1_c1_c1' >12:02</text>
</view>
    <view   class='flex flex-wrap align-center detailsReimbursement_fd2_4_c3_c1_c2'     >
        <text class='detailsReimbursement_fd2_4_c3_c1_c2_c0' >经理</text>
<image class='detailsReimbursement_fd2_4_c3_c1_c2_c1' mode="aspectFit"  :src='STATIC_URL+"32.png"'></image>
<text class='detailsReimbursement_fd2_4_c3_c1_c2_c2' >张章章</text>
<text class='detailsReimbursement_fd2_4_c3_c1_c2_c3' >审批驳回</text>
</view>
    <view   class='flex flex-wrap align-center detailsReimbursement_fd2_4_c3_c1_c3'     >
        <text class='detailsReimbursement_fd2_4_c3_c1_c3_c0' >2022-08-08</text>
<text class='detailsReimbursement_fd2_4_c3_c1_c3_c1' >12:02</text>
</view>
    <view   class='flex flex-wrap align-center detailsReimbursement_fd2_4_c3_c1_c4'     >
        <text class='detailsReimbursement_fd2_4_c3_c1_c4_c0' >驳回原因：</text>
<text class='detailsReimbursement_fd2_4_c3_c1_c4_c1' >项目信息有误</text>
</view>
</view>
</view>
</view>
</view>
<!---flex布局flex布局结束-->
<benben-popup v-model="popupShow1666603863137" :mask="true"  mode='bottom'>
    <!---关联支出flex布局开始-->
 <view class="flex flex-direction flex-wrap align-stretch benben-flex-layout"   >
            <view   class='flex flex-direction flex-wrap align-stretch detailsReimbursement_fd3_0'     >
            <view   class='flex flex-wrap align-center justify-between detailsReimbursement_fd3_0_c0'     >
            <view   class='flex flex-wrap align-center detailsReimbursement_fd3_0_c0_c0'     >
        </view>
<text class='detailsReimbursement_fd3_0_c0_c1' >关联支出</text>
<image class='detailsReimbursement_fd3_0_c0_c2' :src='STATIC_URL+"46.png"' @tap.stop="popupShow1666603863137=false" ></image>
</view>
    <view   class='flex flex-wrap align-center detailsReimbursement_fd3_0_c1'     >
        <text class='detailsReimbursement_fd3_0_c1_c0' >支出流水号</text>
<text class='detailsReimbursement_fd3_0_c1_c1' >JHSL20220901001</text>
</view>
    <view   class='flex flex-wrap align-center detailsReimbursement_fd3_0_c2'     >
        <text class='detailsReimbursement_fd3_0_c2_c0' >支出事由</text>
<text class='detailsReimbursement_fd3_0_c2_c1' >汽车加油</text>
</view>
    <view   class='flex flex-wrap align-center detailsReimbursement_fd3_0_c3'     >
        <text class='detailsReimbursement_fd3_0_c3_c0' >支出科目</text>
<text class='detailsReimbursement_fd3_0_c3_c1' >车辆费</text>
</view>
    <view   class='flex flex-wrap align-center detailsReimbursement_fd3_0_c4'     >
        <text class='detailsReimbursement_fd3_0_c4_c0' >支出金额</text>
<text class='detailsReimbursement_fd3_0_c4_c1' >￥</text>
<text class='detailsReimbursement_fd3_0_c4_c2' >500</text>
</view>
    <view   class='flex flex-wrap align-center detailsReimbursement_fd3_0_c5'     >
        <text class='detailsReimbursement_fd3_0_c5_c0' >收款名称</text>
<text class='detailsReimbursement_fd3_0_c5_c1' >张章章</text>
</view>
    <view   class='flex flex-wrap align-center detailsReimbursement_fd3_0_c6'     >
        <text class='detailsReimbursement_fd3_0_c6_c0' >收款账号</text>
<text class='detailsReimbursement_fd3_0_c6_c1' >215551212154512132323</text>
</view>
    <view   class='flex flex-wrap align-center detailsReimbursement_fd3_0_c7'     >
        <text class='detailsReimbursement_fd3_0_c7_c0' >状态</text>
<text class='detailsReimbursement_fd3_0_c7_c1' >待核销</text>
</view>
</view>
</view>
<!---关联支出flex布局结束-->
</benben-popup>
    <view class="flex flex-wrap align-center justify-end benben-position-layout flex detailsReimbursement_flex_4"  v-if= "type=='1' || type=='5'"  >
        <button class='detailsReimbursement_fd4_0' >编辑</button>
<button class='detailsReimbursement_fd4_1' >提交报销</button>

        </view>
<view :style="{height: '97rpx'}" v-if= "type=='1' || type=='5'" ></view>
    
    </view>
</template>
<script>
    
    export default {
        components:{},
        
        data(){
			return {"popupShow1666603863137":false,"popupShow1666161013185":false,"cut":"1","type":""};
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
    .detailsReimbursement_flex_0{
        background:#fff;background-size: 100% !important;width:750rpx;height:88rpx;overflow:hidden;z-index:10;top:0rpx;background-size:100% auto !important;
    }
    .detailsReimbursement_fd0_2{
        width:100rpx;height:88rpx;margin:0rpx 32rpx 0rpx 0rpx;
    }
    .detailsReimbursement_fd0_1{
        color:#000000;font-size:36rpx;font-weight:500;line-height:50rpx;
    }
    .detailsReimbursement_fd0_0{
        width:100rpx;height:88rpx;margin:0rpx 0rpx 0rpx 32rpx;
    }
    .detailsReimbursement_flex_1{
        padding:0rpx 105rpx 0rpx 105rpx;
    }
    .detailsReimbursement_fd1_0_c1_c1{
        background:#fff;background-size: 100% !important;border-radius:0rpx 0rpx 16rpx 0rpx;font-size:32rpx;color:rgba(11, 24, 152, 1);height:110rpx;line-height:110rpx;
    }
    .detailsReimbursement_fd1_0_c1_c0{
        border-right:1px solid rgba(238, 238, 238, 1);background:#fff;background-size: 100% !important;border-radius:0rpx 0rpx 0rpx 16rpx;font-size:32rpx;color:rgba(153, 153, 153, 1);height:110rpx;line-height:110rpx;
    }
    .detailsReimbursement_fd1_0_c0_c1{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsReimbursement_fd1_0_c0_c0{
        color:#333333;font-size:32rpx;font-weight:500;line-height:45rpx;margin:0rpx 0rpx 40rpx 0rpx;
    }
    .detailsReimbursement_fd1_0_c0{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:40rpx 130rpx 40rpx 130rpx;
    }
    .detailsReimbursement_fd1_0{
        background:#fff;background-size: 100% !important;border-radius:16rpx 16rpx 16rpx 16rpx;
    }
    .detailsReimbursement_flex_2{
        background:url(/static/images/41.png) no-repeat;background-size: 100% !important;background-size:100% auto !important;padding:0rpx 32rpx 0rpx 32rpx;
    }
    .detailsReimbursement_fd2_4_c3_c1_c4_c1{
        color:#333;font-size:24rpx;font-weight:400;line-height:33rpx;margin:0rpx 0rpx 0rpx 14rpx;
    }
    .detailsReimbursement_fd2_4_c3_c1_c4_c0{
        color:rgba(102, 102, 102, 1);font-size:24rpx;font-weight:400;line-height:33rpx;
    }
    .detailsReimbursement_fd2_4_c3_c1_c4{
        margin:16rpx 0rpx 0rpx 0rpx;
    }
    .detailsReimbursement_fd2_4_c3_c1_c3_c1{
        color:#333333;font-size:24rpx;font-weight:400;line-height:33rpx;margin:0rpx 0rpx 0rpx 14rpx;
    }
    .detailsReimbursement_fd2_4_c3_c1_c3_c0{
        color:#333333;font-size:24rpx;font-weight:400;line-height:33rpx;
    }
    .detailsReimbursement_fd2_4_c3_c1_c3{
        margin:16rpx 0rpx 0rpx 0rpx;
    }
    .detailsReimbursement_fd2_4_c3_c1_c2_c3{
        color:rgba(230, 53, 65, 1);font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsReimbursement_fd2_4_c3_c1_c2_c2{
        color:#9EA7B7;font-size:24rpx;font-weight:400;line-height:40rpx;margin:0rpx 24rpx 0rpx 0rpx;
    }
    .detailsReimbursement_fd2_4_c3_c1_c2_c1{
        width:36rpx;height:36rpx;border-radius:18rpx 18rpx 18rpx 18rpx;margin:0rpx 10rpx 0rpx 24rpx;
    }
    .detailsReimbursement_fd2_4_c3_c1_c2_c0{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsReimbursement_fd2_4_c3_c1_c2{
        margin:72rpx 0rpx 0rpx 0rpx;
    }
    .detailsReimbursement_fd2_4_c3_c1_c1_c1{
        color:#333333;font-size:24rpx;font-weight:400;line-height:33rpx;margin:0rpx 0rpx 0rpx 14rpx;
    }
    .detailsReimbursement_fd2_4_c3_c1_c1_c0{
        color:#333333;font-size:24rpx;font-weight:400;line-height:33rpx;
    }
    .detailsReimbursement_fd2_4_c3_c1_c1{
        margin:16rpx 0rpx 0rpx 0rpx;
    }
    .detailsReimbursement_fd2_4_c3_c1_c0_c3{
        color:#0B1898;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsReimbursement_fd2_4_c3_c1_c0_c2{
        color:#9EA7B7;font-size:24rpx;font-weight:400;line-height:40rpx;margin:0rpx 24rpx 0rpx 0rpx;
    }
    .detailsReimbursement_fd2_4_c3_c1_c0_c1{
        width:36rpx;height:36rpx;border-radius:18rpx 18rpx 18rpx 18rpx;margin:0rpx 10rpx 0rpx 24rpx;
    }
    .detailsReimbursement_fd2_4_c3_c1_c0_c0{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsReimbursement_fd2_4_c3_c1{
        margin:0rpx 0rpx 0rpx 21rpx;
    }
    .detailsReimbursement_fd2_4_c3_c0_c2{
        width:32rpx;height:32rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .detailsReimbursement_fd2_4_c3_c0_c1{
        border:1px dashed rgba(221, 221, 221, 1);width:1rpx;height:129rpx;
    }
    .detailsReimbursement_fd2_4_c3_c0_c0{
        width:32rpx;height:32rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .detailsReimbursement_fd2_4_c3{
        margin:33rpx 0rpx 0rpx 0rpx;
    }
    .detailsReimbursement_fd2_4_c2_c1_c7_c0_c1{
        color:#9EA7B7;font-size:20rpx;font-weight:400;line-height:24rpx;text-align:center;margin:6rpx 0rpx 0rpx 0rpx;
    }
    .detailsReimbursement_fd2_4_c2_c1_c7_c0_c0{
        width:36rpx;height:36rpx;border-radius:18rpx 18rpx 18rpx 18rpx;
    }
    .detailsReimbursement_fd2_4_c2_c1_c7_c0{
        margin:0rpx 32rpx 0rpx 0rpx;
    }
    .detailsReimbursement_fd2_4_c2_c1_c7{
        margin:16rpx 0rpx 0rpx 0rpx;
    }
    .detailsReimbursement_fd2_4_c2_c1_c6_c0{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsReimbursement_fd2_4_c2_c1_c6{
        margin:70rpx 0rpx 0rpx 0rpx;
    }
    .detailsReimbursement_fd2_4_c2_c1_c5_c1{
        color:#333333;font-size:24rpx;font-weight:400;line-height:33rpx;margin:0rpx 0rpx 0rpx 14rpx;
    }
    .detailsReimbursement_fd2_4_c2_c1_c5_c0{
        color:#333333;font-size:24rpx;font-weight:400;line-height:33rpx;
    }
    .detailsReimbursement_fd2_4_c2_c1_c5{
        margin:16rpx 0rpx 0rpx 0rpx;
    }
    .detailsReimbursement_fd2_4_c2_c1_c4_c3{
        color:rgba(29, 185, 153, 1);font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsReimbursement_fd2_4_c2_c1_c4_c2{
        color:#9EA7B7;font-size:24rpx;font-weight:400;line-height:40rpx;margin:0rpx 24rpx 0rpx 0rpx;
    }
    .detailsReimbursement_fd2_4_c2_c1_c4_c1{
        width:36rpx;height:36rpx;border-radius:18rpx 18rpx 18rpx 18rpx;margin:0rpx 10rpx 0rpx 24rpx;
    }
    .detailsReimbursement_fd2_4_c2_c1_c4_c0{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsReimbursement_fd2_4_c2_c1_c4{
        margin:70rpx 0rpx 0rpx 0rpx;
    }
    .detailsReimbursement_fd2_4_c2_c1_c3_c1{
        color:#333333;font-size:24rpx;font-weight:400;line-height:33rpx;margin:0rpx 0rpx 0rpx 14rpx;
    }
    .detailsReimbursement_fd2_4_c2_c1_c3_c0{
        color:#333333;font-size:24rpx;font-weight:400;line-height:33rpx;
    }
    .detailsReimbursement_fd2_4_c2_c1_c3{
        margin:16rpx 0rpx 0rpx 0rpx;
    }
    .detailsReimbursement_fd2_4_c2_c1_c2_c3{
        color:rgba(29, 185, 153, 1);font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsReimbursement_fd2_4_c2_c1_c2_c2{
        color:#9EA7B7;font-size:24rpx;font-weight:400;line-height:40rpx;margin:0rpx 24rpx 0rpx 0rpx;
    }
    .detailsReimbursement_fd2_4_c2_c1_c2_c1{
        width:36rpx;height:36rpx;border-radius:18rpx 18rpx 18rpx 18rpx;margin:0rpx 10rpx 0rpx 24rpx;
    }
    .detailsReimbursement_fd2_4_c2_c1_c2_c0{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsReimbursement_fd2_4_c2_c1_c2{
        margin:72rpx 0rpx 0rpx 0rpx;
    }
    .detailsReimbursement_fd2_4_c2_c1_c1_c1{
        color:#333333;font-size:24rpx;font-weight:400;line-height:33rpx;margin:0rpx 0rpx 0rpx 14rpx;
    }
    .detailsReimbursement_fd2_4_c2_c1_c1_c0{
        color:#333333;font-size:24rpx;font-weight:400;line-height:33rpx;
    }
    .detailsReimbursement_fd2_4_c2_c1_c1{
        margin:16rpx 0rpx 0rpx 0rpx;
    }
    .detailsReimbursement_fd2_4_c2_c1_c0_c3{
        color:#0B1898;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsReimbursement_fd2_4_c2_c1_c0_c2{
        color:#9EA7B7;font-size:24rpx;font-weight:400;line-height:40rpx;margin:0rpx 24rpx 0rpx 0rpx;
    }
    .detailsReimbursement_fd2_4_c2_c1_c0_c1{
        width:36rpx;height:36rpx;border-radius:18rpx 18rpx 18rpx 18rpx;margin:0rpx 10rpx 0rpx 24rpx;
    }
    .detailsReimbursement_fd2_4_c2_c1_c0_c0{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsReimbursement_fd2_4_c2_c1{
        margin:0rpx 0rpx 0rpx 21rpx;
    }
    .detailsReimbursement_fd2_4_c2_c0_c6{
        width:32rpx;height:32rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .detailsReimbursement_fd2_4_c2_c0_c5{
        border:1px dashed rgba(221, 221, 221, 1);width:1rpx;height:129rpx;
    }
    .detailsReimbursement_fd2_4_c2_c0_c4{
        width:32rpx;height:32rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .detailsReimbursement_fd2_4_c2_c0_c3{
        border:1px dashed rgba(221, 221, 221, 1);width:1rpx;height:129rpx;
    }
    .detailsReimbursement_fd2_4_c2_c0_c2{
        width:32rpx;height:32rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .detailsReimbursement_fd2_4_c2_c0_c1{
        border:1px dashed rgba(221, 221, 221, 1);width:1rpx;height:129rpx;
    }
    .detailsReimbursement_fd2_4_c2_c0_c0{
        width:32rpx;height:32rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .detailsReimbursement_fd2_4_c2{
        margin:33rpx 0rpx 0rpx 0rpx;
    }
    .detailsReimbursement_fd2_4_c1_c1_c4_c3{
        color:#0B1898;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsReimbursement_fd2_4_c1_c1_c4_c2{
        color:#9EA7B7;font-size:24rpx;font-weight:400;line-height:40rpx;margin:0rpx 24rpx 0rpx 0rpx;
    }
    .detailsReimbursement_fd2_4_c1_c1_c4_c1{
        width:36rpx;height:36rpx;border-radius:18rpx 18rpx 18rpx 18rpx;margin:0rpx 10rpx 0rpx 24rpx;
    }
    .detailsReimbursement_fd2_4_c1_c1_c4_c0{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsReimbursement_fd2_4_c1_c1_c4{
        margin:70rpx 0rpx 0rpx 0rpx;
    }
    .detailsReimbursement_fd2_4_c1_c1_c3_c1{
        color:#333333;font-size:24rpx;font-weight:400;line-height:33rpx;margin:0rpx 0rpx 0rpx 14rpx;
    }
    .detailsReimbursement_fd2_4_c1_c1_c3_c0{
        color:#333333;font-size:24rpx;font-weight:400;line-height:33rpx;
    }
    .detailsReimbursement_fd2_4_c1_c1_c3{
        margin:16rpx 0rpx 0rpx 0rpx;
    }
    .detailsReimbursement_fd2_4_c1_c1_c2_c3{
        color:rgba(29, 185, 153, 1);font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsReimbursement_fd2_4_c1_c1_c2_c2{
        color:#9EA7B7;font-size:24rpx;font-weight:400;line-height:40rpx;margin:0rpx 24rpx 0rpx 0rpx;
    }
    .detailsReimbursement_fd2_4_c1_c1_c2_c1{
        width:36rpx;height:36rpx;border-radius:18rpx 18rpx 18rpx 18rpx;margin:0rpx 10rpx 0rpx 24rpx;
    }
    .detailsReimbursement_fd2_4_c1_c1_c2_c0{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsReimbursement_fd2_4_c1_c1_c2{
        margin:72rpx 0rpx 0rpx 0rpx;
    }
    .detailsReimbursement_fd2_4_c1_c1_c1_c1{
        color:#333333;font-size:24rpx;font-weight:400;line-height:33rpx;margin:0rpx 0rpx 0rpx 14rpx;
    }
    .detailsReimbursement_fd2_4_c1_c1_c1_c0{
        color:#333333;font-size:24rpx;font-weight:400;line-height:33rpx;
    }
    .detailsReimbursement_fd2_4_c1_c1_c1{
        margin:16rpx 0rpx 0rpx 0rpx;
    }
    .detailsReimbursement_fd2_4_c1_c1_c0_c3{
        color:#0B1898;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsReimbursement_fd2_4_c1_c1_c0_c2{
        color:#9EA7B7;font-size:24rpx;font-weight:400;line-height:40rpx;margin:0rpx 24rpx 0rpx 0rpx;
    }
    .detailsReimbursement_fd2_4_c1_c1_c0_c1{
        width:36rpx;height:36rpx;border-radius:18rpx 18rpx 18rpx 18rpx;margin:0rpx 10rpx 0rpx 24rpx;
    }
    .detailsReimbursement_fd2_4_c1_c1_c0_c0{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsReimbursement_fd2_4_c1_c1{
        margin:0rpx 0rpx 0rpx 21rpx;
    }
    .detailsReimbursement_fd2_4_c1_c0_c4{
        width:32rpx;height:32rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .detailsReimbursement_fd2_4_c1_c0_c3{
        border:1px dashed rgba(221, 221, 221, 1);width:1rpx;height:129rpx;
    }
    .detailsReimbursement_fd2_4_c1_c0_c2{
        width:32rpx;height:32rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .detailsReimbursement_fd2_4_c1_c0_c1{
        border:1px dashed rgba(221, 221, 221, 1);width:1rpx;height:129rpx;
    }
    .detailsReimbursement_fd2_4_c1_c0_c0{
        width:32rpx;height:32rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .detailsReimbursement_fd2_4_c1{
        margin:33rpx 0rpx 0rpx 0rpx;
    }
    .detailsReimbursement_fd2_4_c0_c0{
        color:#333333;font-size:32rpx;font-weight:500;line-height:45rpx;
    }
    .detailsReimbursement_fd2_4_c0{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:0rpx 0rpx 16rpx 0rpx;
    }
    .detailsReimbursement_fd2_4{
        background:#fff;background-size: 100% !important;border-radius:16rpx 16rpx 16rpx 16rpx;margin:20rpx 0rpx 0rpx 0rpx;padding:32rpx 24rpx 32rpx 24rpx;
    }
    .detailsReimbursement_fd2_3_c14_c0{
        width:152rpx;height:152rpx;margin:0rpx 0rpx 8rpx 15rpx;border-radius:16rpx 16rpx 16rpx 16rpx;
    }
    .detailsReimbursement_fd2_3_c14{
        margin:24rpx 24rpx 0rpx 9rpx;
    }
    .detailsReimbursement_fd2_3_c13{
        color:#333333;font-size:32rpx;font-weight:500;line-height:45rpx;margin:40rpx 24rpx 0rpx 24rpx;
    }
    .detailsReimbursement_fd2_3_c12_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 64rpx;
    }
    .detailsReimbursement_fd2_3_c12_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsReimbursement_fd2_3_c12{
        margin:24rpx 0rpx 0rpx 0rpx;padding:0rpx 24rpx 0rpx 24rpx;
    }
    .detailsReimbursement_fd2_3_c11_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 64rpx;
    }
    .detailsReimbursement_fd2_3_c11_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsReimbursement_fd2_3_c11{
        margin:24rpx 0rpx 0rpx 0rpx;padding:0rpx 24rpx 0rpx 24rpx;
    }
    .detailsReimbursement_fd2_3_c10_c2{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsReimbursement_fd2_3_c10_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 64rpx;
    }
    .detailsReimbursement_fd2_3_c10_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsReimbursement_fd2_3_c10{
        margin:24rpx 0rpx 0rpx 0rpx;padding:0rpx 24rpx 0rpx 24rpx;
    }
    .detailsReimbursement_fd2_3_c9_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 64rpx;
    }
    .detailsReimbursement_fd2_3_c9_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsReimbursement_fd2_3_c9{
        margin:24rpx 0rpx 0rpx 0rpx;padding:0rpx 24rpx 0rpx 24rpx;
    }
    .detailsReimbursement_fd2_3_c8_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 64rpx;
    }
    .detailsReimbursement_fd2_3_c8_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsReimbursement_fd2_3_c8{
        margin:64rpx 0rpx 0rpx 0rpx;padding:0rpx 24rpx 0rpx 24rpx;
    }
    .detailsReimbursement_fd2_3_c7_c0{
        width:152rpx;height:152rpx;margin:0rpx 0rpx 8rpx 15rpx;border-radius:16rpx 16rpx 16rpx 16rpx;
    }
    .detailsReimbursement_fd2_3_c7{
        margin:24rpx 24rpx 0rpx 9rpx;
    }
    .detailsReimbursement_fd2_3_c6{
        color:#333333;font-size:32rpx;font-weight:500;line-height:45rpx;margin:40rpx 24rpx 0rpx 24rpx;
    }
    .detailsReimbursement_fd2_3_c5_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 64rpx;
    }
    .detailsReimbursement_fd2_3_c5_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsReimbursement_fd2_3_c5{
        margin:24rpx 0rpx 0rpx 0rpx;padding:0rpx 24rpx 0rpx 24rpx;
    }
    .detailsReimbursement_fd2_3_c4_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 64rpx;
    }
    .detailsReimbursement_fd2_3_c4_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsReimbursement_fd2_3_c4{
        margin:24rpx 0rpx 0rpx 0rpx;padding:0rpx 24rpx 0rpx 24rpx;
    }
    .detailsReimbursement_fd2_3_c3_c2{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsReimbursement_fd2_3_c3_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 64rpx;
    }
    .detailsReimbursement_fd2_3_c3_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsReimbursement_fd2_3_c3{
        margin:24rpx 0rpx 0rpx 0rpx;padding:0rpx 24rpx 0rpx 24rpx;
    }
    .detailsReimbursement_fd2_3_c2_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 64rpx;
    }
    .detailsReimbursement_fd2_3_c2_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsReimbursement_fd2_3_c2{
        margin:24rpx 0rpx 0rpx 0rpx;padding:0rpx 24rpx 0rpx 24rpx;
    }
    .detailsReimbursement_fd2_3_c1_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 64rpx;
    }
    .detailsReimbursement_fd2_3_c1_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsReimbursement_fd2_3_c1{
        margin:24rpx 0rpx 0rpx 0rpx;padding:0rpx 24rpx 0rpx 24rpx;
    }
    .detailsReimbursement_fd2_3_c0_c0{
        color:#333333;font-size:32rpx;font-weight:500;line-height:45rpx;
    }
    .detailsReimbursement_fd2_3_c0{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:0rpx 24rpx 16rpx 24rpx;
    }
    .detailsReimbursement_fd2_3{
        background:#fff;background-size: 100% !important;border-radius:16rpx 16rpx 16rpx 16rpx;padding:32rpx 0rpx 32rpx 0rpx;margin:20rpx 0rpx 0rpx 0rpx;
    }
    .detailsReimbursement_fd2_2_c5_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 64rpx;
    }
    .detailsReimbursement_fd2_2_c5_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsReimbursement_fd2_2_c5{
        margin:24rpx 0rpx 0rpx 0rpx;padding:0rpx 24rpx 0rpx 24rpx;
    }
    .detailsReimbursement_fd2_2_c4_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 64rpx;
    }
    .detailsReimbursement_fd2_2_c4_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsReimbursement_fd2_2_c4{
        margin:24rpx 0rpx 0rpx 0rpx;padding:0rpx 24rpx 0rpx 24rpx;
    }
    .detailsReimbursement_fd2_2_c3_c3{
        color:rgba(72, 151, 235, 1);font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsReimbursement_fd2_2_c3_c2{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsReimbursement_fd2_2_c3_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 64rpx;
    }
    .detailsReimbursement_fd2_2_c3_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsReimbursement_fd2_2_c3{
        margin:24rpx 0rpx 0rpx 0rpx;padding:0rpx 24rpx 0rpx 24rpx;
    }
    .detailsReimbursement_fd2_2_c2_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 64rpx;
    }
    .detailsReimbursement_fd2_2_c2_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsReimbursement_fd2_2_c2{
        margin:24rpx 0rpx 0rpx 0rpx;padding:0rpx 24rpx 0rpx 24rpx;
    }
    .detailsReimbursement_fd2_2_c1_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 64rpx;
    }
    .detailsReimbursement_fd2_2_c1_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsReimbursement_fd2_2_c1{
        margin:24rpx 0rpx 0rpx 0rpx;padding:0rpx 24rpx 0rpx 24rpx;
    }
    .detailsReimbursement_fd2_2_c0_c0{
        color:#333333;font-size:32rpx;font-weight:500;line-height:45rpx;
    }
    .detailsReimbursement_fd2_2_c0{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:0rpx 24rpx 16rpx 24rpx;
    }
    .detailsReimbursement_fd2_2{
        background:#fff;background-size: 100% !important;border-radius:16rpx 16rpx 16rpx 16rpx;padding:32rpx 0rpx 32rpx 0rpx;margin:20rpx 0rpx 0rpx 0rpx;
    }
    .detailsReimbursement_fd2_1_c9_c2{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 10rpx;
    }
    .detailsReimbursement_fd2_1_c9_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 64rpx;
    }
    .detailsReimbursement_fd2_1_c9_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsReimbursement_fd2_1_c9{
        margin:24rpx 0rpx 0rpx 0rpx;
    }
    .detailsReimbursement_fd2_1_c8_c2{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 10rpx;
    }
    .detailsReimbursement_fd2_1_c8_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 64rpx;
    }
    .detailsReimbursement_fd2_1_c8_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsReimbursement_fd2_1_c8{
        margin:24rpx 0rpx 0rpx 0rpx;
    }
    .detailsReimbursement_fd2_1_c7_c2{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsReimbursement_fd2_1_c7_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 64rpx;
    }
    .detailsReimbursement_fd2_1_c7_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsReimbursement_fd2_1_c7{
        margin:24rpx 0rpx 0rpx 0rpx;
    }
    .detailsReimbursement_fd2_1_c6_c2{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsReimbursement_fd2_1_c6_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 36rpx;
    }
    .detailsReimbursement_fd2_1_c6_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsReimbursement_fd2_1_c6{
        margin:24rpx 0rpx 0rpx 0rpx;
    }
    .detailsReimbursement_fd2_1_c5_c2{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsReimbursement_fd2_1_c5_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 36rpx;
    }
    .detailsReimbursement_fd2_1_c5_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsReimbursement_fd2_1_c5{
        margin:24rpx 0rpx 0rpx 0rpx;
    }
    .detailsReimbursement_fd2_1_c4_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 64rpx;
    }
    .detailsReimbursement_fd2_1_c4_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsReimbursement_fd2_1_c4{
        margin:24rpx 0rpx 0rpx 0rpx;
    }
    .detailsReimbursement_fd2_1_c3_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 92rpx;
    }
    .detailsReimbursement_fd2_1_c3_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsReimbursement_fd2_1_c3{
        margin:24rpx 0rpx 0rpx 0rpx;
    }
    .detailsReimbursement_fd2_1_c2_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 64rpx;
    }
    .detailsReimbursement_fd2_1_c2_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsReimbursement_fd2_1_c2{
        margin:24rpx 0rpx 0rpx 0rpx;
    }
    .detailsReimbursement_fd2_1_c1_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 64rpx;
    }
    .detailsReimbursement_fd2_1_c1_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsReimbursement_fd2_1_c1{
        margin:24rpx 0rpx 0rpx 0rpx;
    }
    .detailsReimbursement_fd2_1_c0_c0{
        color:#333333;font-size:32rpx;font-weight:500;line-height:45rpx;
    }
    .detailsReimbursement_fd2_1_c0{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:0rpx 0rpx 16rpx 0rpx;
    }
    .detailsReimbursement_fd2_1{
        background:#fff;background-size: 100% !important;border-radius:16rpx 16rpx 16rpx 16rpx;padding:32rpx 24rpx 32rpx 24rpx;margin:20rpx 0rpx 0rpx 0rpx;
    }
    .detailsReimbursement_fd2_0_c2_c0{
        color:#FFFFFF;font-size:28rpx;font-weight:500;line-height:40rpx;
    }
    .detailsReimbursement_fd2_0_c2{
        margin:0rpx 0rpx 0rpx auto;
    }
    .detailsReimbursement_fd2_0_c1_4{
        width:160rpx;height:56rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .detailsReimbursement_fd2_0_c1_3{
        width:160rpx;height:56rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .detailsReimbursement_fd2_0_c1_2{
        width:120rpx;height:56rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .detailsReimbursement_fd2_0_c1_1{
        width:120rpx;height:56rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .detailsReimbursement_fd2_0_c1{
        width:120rpx;height:56rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .detailsReimbursement_fd2_0_c0_3{
        width:88rpx;height:88rpx;border-radius:0rpx 0rpx 0rpx 0rpx;margin:0rpx 24rpx 0rpx 0rpx;
    }
    .detailsReimbursement_fd2_0_c0_2{
        width:88rpx;height:88rpx;border-radius:0rpx 0rpx 0rpx 0rpx;margin:0rpx 24rpx 0rpx 0rpx;
    }
    .detailsReimbursement_fd2_0_c0_1{
        width:88rpx;height:88rpx;border-radius:0rpx 0rpx 0rpx 0rpx;margin:0rpx 24rpx 0rpx 0rpx;
    }
    .detailsReimbursement_fd2_0_c0{
        width:88rpx;height:88rpx;border-radius:0rpx 0rpx 0rpx 0rpx;margin:0rpx 24rpx 0rpx 0rpx;
    }
    .detailsReimbursement_fd2_0{
        margin:40rpx 0rpx 20rpx 0rpx;
    }
    .detailsReimbursement_fd3_0_c7_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 132rpx;
    }
    .detailsReimbursement_fd3_0_c7_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsReimbursement_fd3_0_c7{
        padding:0rpx 32rpx 0rpx 32rpx;margin:24rpx 0rpx 0rpx 0rpx;
    }
    .detailsReimbursement_fd3_0_c6_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 76rpx;
    }
    .detailsReimbursement_fd3_0_c6_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsReimbursement_fd3_0_c6{
        padding:0rpx 32rpx 0rpx 32rpx;margin:24rpx 0rpx 0rpx 0rpx;
    }
    .detailsReimbursement_fd3_0_c5_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 76rpx;
    }
    .detailsReimbursement_fd3_0_c5_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsReimbursement_fd3_0_c5{
        padding:0rpx 32rpx 0rpx 32rpx;margin:24rpx 0rpx 0rpx 0rpx;
    }
    .detailsReimbursement_fd3_0_c4_c2{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsReimbursement_fd3_0_c4_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 76rpx;
    }
    .detailsReimbursement_fd3_0_c4_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsReimbursement_fd3_0_c4{
        padding:0rpx 32rpx 0rpx 32rpx;margin:24rpx 0rpx 0rpx 0rpx;
    }
    .detailsReimbursement_fd3_0_c3_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 76rpx;
    }
    .detailsReimbursement_fd3_0_c3_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsReimbursement_fd3_0_c3{
        padding:0rpx 32rpx 0rpx 32rpx;margin:24rpx 0rpx 0rpx 0rpx;
    }
    .detailsReimbursement_fd3_0_c2_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 76rpx;
    }
    .detailsReimbursement_fd3_0_c2_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsReimbursement_fd3_0_c2{
        padding:0rpx 32rpx 0rpx 32rpx;margin:24rpx 0rpx 0rpx 0rpx;
    }
    .detailsReimbursement_fd3_0_c1_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 48rpx;
    }
    .detailsReimbursement_fd3_0_c1_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsReimbursement_fd3_0_c1{
        padding:0rpx 32rpx 0rpx 32rpx;margin:24rpx 0rpx 0rpx 0rpx;
    }
    .detailsReimbursement_fd3_0_c0_c2{
        width:40rpx;height:40rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .detailsReimbursement_fd3_0_c0_c1{
        color:#333333;font-size:36rpx;font-weight:500;line-height:50rpx;
    }
    .detailsReimbursement_fd3_0_c0_c0{
        width:40rpx;height:40rpx;
    }
    .detailsReimbursement_fd3_0_c0{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:32rpx 32rpx 32rpx 32rpx;margin:0rpx 0rpx 8rpx 0rpx;
    }
    .detailsReimbursement_fd3_0{
        background:#fff;background-size: 100% !important;border-radius:24rpx 24rpx 0rpx 0rpx;padding:0rpx 0rpx 40rpx 0rpx;
    }
    .detailsReimbursement_flex_4{
        background:#fff;background-size: 100% !important;width:750rpx;height:97rpx;overflow:hidden;z-index:10;bottom:calc(0rpx + var(--window-bottom));background-size:100% auto !important;
    }
    .detailsReimbursement_fd4_1{
        background:rgba(11, 24, 152, 1);background-size: 100% !important;border-radius:50rpx 50rpx 50rpx 50rpx;font-size:24rpx;color:#fff;width:170rpx;height:60rpx;line-height:60rpx;margin:0rpx 24rpx 0rpx 0rpx;
    }
    .detailsReimbursement_fd4_0{
        border:1px solid #666666;background:#fff;background-size: 100% !important;border-radius:28rpx 28rpx 28rpx 28rpx;font-size:24rpx;color:#333;width:170rpx;height:60rpx;line-height:60rpx;margin:0rpx 24rpx 0rpx 0rpx;
    }
</style>