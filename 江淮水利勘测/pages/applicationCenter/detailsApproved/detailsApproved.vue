<template>
    <view class="page" :style="themeColor">
    <view class="flex flex-wrap align-center justify-between benben-position-layout flex detailsApproved_flex_0"    :style="{height:(88+StatusBarRpx)+'rpx',paddingTop:StatusBarRpx+'rpx'}">
            <view   class='flex flex-wrap align-center detailsApproved_fd0_0'  @tap.stop="handleJumpDiy" data-type="back" data-url="1"   >
        <text class='fu-iconfont2' >&#xe794;</text>
</view>
<text class='detailsApproved_fd0_1' >详情</text>
    <view   class='flex flex-wrap align-center detailsApproved_fd0_2'     >
        </view>

        </view>
<view :style="{height: (88+StatusBarRpx)+'rpx'}"  ></view>
<!---flex布局flex布局开始-->
 <view class="flex flex-direction flex-wrap align-stretch benben-flex-layout detailsApproved_flex_1"   >
            <view   class='flex flex-wrap align-center detailsApproved_fd1_0'     >
        <image class='detailsApproved_fd1_0_c0' :src='STATIC_URL+"79.png"'  v-if= "type=='1' || type=='2'"></image><image class='detailsApproved_fd1_0_c0_1' :src='STATIC_URL+"82.png"'  v-if= "type=='3'"></image><image class='detailsApproved_fd1_0_c0_2' :src='STATIC_URL+"85.png"'  v-if= "type=='4'"></image><image class='detailsApproved_fd1_0_c0_3' :src='STATIC_URL+"79.png"'  v-if= "type=='5'"></image><image class='detailsApproved_fd1_0_c0_4' :src='STATIC_URL+"82.png"'  v-if= "type=='6'"></image><image class='detailsApproved_fd1_0_c0_5' :src='STATIC_URL+"85.png"'  v-if= "type=='7'"></image><image class='detailsApproved_fd1_0_c0_6' :src='STATIC_URL+"82.png"'  v-if= "type=='8'"></image><image class='detailsApproved_fd1_0_c0_7' :src='STATIC_URL+"85.png"'  v-if= "type=='9'"></image>
<image class='detailsApproved_fd1_0_c1' :src='STATIC_URL+"78.png"'  v-if= "type=='1'"></image><image class='detailsApproved_fd1_0_c1_1' :src='STATIC_URL+"81.png"'  v-if= "type=='2'"></image><image class='detailsApproved_fd1_0_c1_2' :src='STATIC_URL+"83.png"'  v-if= "type=='3'"></image><image class='detailsApproved_fd1_0_c1_3' :src='STATIC_URL+"86.png"'  v-if= "type=='4'"></image><image class='detailsApproved_fd1_0_c1_4' :src='STATIC_URL+"78.png"'  v-if= "type=='5'"></image><image class='detailsApproved_fd1_0_c1_5' :src='STATIC_URL+"83.png"'  v-if= "type=='6'"></image><image class='detailsApproved_fd1_0_c1_6' :src='STATIC_URL+"86.png"'  v-if= "type=='7'"></image><image class='detailsApproved_fd1_0_c1_7' :src='STATIC_URL+"83.png"'  v-if= "type=='8'"></image><image class='detailsApproved_fd1_0_c1_8' :src='STATIC_URL+"86.png"'  v-if= "type=='9'"></image>
    <view   class='flex flex-wrap align-center detailsApproved_fd1_0_c2'     >
        <text class='detailsApproved_fd1_0_c2_c0'   v-if= "type=='1'"  >请耐心等待…</text><text class='detailsApproved_fd1_0_c2_c0_1'   v-if= "type=='2'"  >请耐心等待…</text><text class='detailsApproved_fd1_0_c2_c0_2'   v-if= "type=='5'"  >请耐心等待…</text>
</view>
</view>
    <view   class='flex flex-direction flex-wrap align-stretch detailsApproved_fd1_1'     >
            <view   class='flex flex-wrap align-center justify-between detailsApproved_fd1_1_c0'     >
        <text class='detailsApproved_fd1_1_c0_c0' >申请内容</text>
</view>
    <view   class='flex flex-wrap align-center detailsApproved_fd1_1_c1'     >
        <text class='detailsApproved_fd1_1_c1_c0' >申请类型</text>
<text class='flex-sub detailsApproved_fd1_1_c1_c1' >报销</text>
</view>
    <view   class='flex flex-wrap align-center detailsApproved_fd1_1_c2'     >
        <text class='detailsApproved_fd1_1_c2_c0' >申请人</text>
<text class='flex-sub detailsApproved_fd1_1_c2_c1' >陈沉沉</text>
</view>
    <view   class='flex flex-wrap align-start detailsApproved_fd1_1_c3'     >
        <text class='detailsApproved_fd1_1_c3_c0' >审批事项</text>
<text class='flex-sub detailsApproved_fd1_1_c3_c1' >山乡归园田居美丽乡村样板片区工程出差住宿</text>
</view>
    <view   class='flex flex-wrap align-center detailsApproved_fd1_1_c4'     >
        <text class='detailsApproved_fd1_1_c4_c0' >申请金额</text>
<text class='detailsApproved_fd1_1_c4_c1' >￥</text>
<text class='detailsApproved_fd1_1_c4_c2' >3500</text>
</view>
    <view   class='flex flex-wrap align-center detailsApproved_fd1_1_c5'     >
        <text class='detailsApproved_fd1_1_c5_c0' >申请时间</text>
<text class='detailsApproved_fd1_1_c5_c1' >2022-08-08</text>
<text class='detailsApproved_fd1_1_c5_c2' >10:10</text>
</view>
</view>
    <view   class='flex flex-direction flex-wrap align-stretch detailsApproved_fd1_2'     >
            <view   class='flex flex-wrap align-center justify-between detailsApproved_fd1_2_c0'     >
        <text class='detailsApproved_fd1_2_c0_c0' >详细信息</text>
</view>
    <view   class='flex flex-wrap align-center detailsApproved_fd1_2_c1'     >
        <text class='detailsApproved_fd1_2_c1_c0' >报销部门</text>
<text class='flex-sub detailsApproved_fd1_2_c1_c1' >经营部</text>
</view>
    <view   class='flex flex-wrap align-center detailsApproved_fd1_2_c2'     >
        <text class='detailsApproved_fd1_2_c2_c0' >关联借支</text>
<text class='detailsApproved_fd1_2_c2_c1' >支出流水号</text>
<text class='flex-sub detailsApproved_fd1_2_c2_c2' >JHSL20220901001</text>
<text class='detailsApproved_fd1_2_c2_c3' >详情</text>
</view>
    <view   class='flex flex-wrap align-center detailsApproved_fd1_2_c3'     >
        <text class='detailsApproved_fd1_2_c3_c0' >项目编号</text>
<text class='flex-sub detailsApproved_fd1_2_c3_c1' >ZZSJ001</text>
</view>
    <view   class='flex flex-wrap align-center detailsApproved_fd1_2_c4'     >
        <text class='detailsApproved_fd1_2_c4_c0' >项目名称</text>
<text class='flex-sub detailsApproved_fd1_2_c4_c1' >山乡归园田居美丽乡村样板片区工程</text>
</view>
<text class='detailsApproved_fd1_2_c5' >报销凭证</text>
    <view   class='flex flex-wrap align-center detailsApproved_fd1_2_c6'     >
        <image class='detailsApproved_fd1_2_c6_c0' mode="aspectFit"  :src='STATIC_URL+"31.png"'></image>
</view>
</view>
    <view   class='flex flex-direction flex-wrap align-stretch detailsApproved_fd1_3'   v-if= "type!='1'"  >
            <view   class='flex flex-wrap align-center justify-between detailsApproved_fd1_3_c0'     >
        <text class='detailsApproved_fd1_3_c0_c0' >审批进度</text>
</view>
    <view   class='flex flex-wrap align-start detailsApproved_fd1_3_c1'   v-if= "type=='2' || type=='6'"  >
            <view   class='flex flex-direction flex-wrap align-center'     >
        <image class='detailsApproved_fd1_3_c1_c0_c0' mode="aspectFit"  :src='STATIC_URL+"60.png"'></image>
    <view   class='flex flex-wrap align-center detailsApproved_fd1_3_c1_c0_c1'     >
        </view>
<image class='detailsApproved_fd1_3_c1_c0_c2' mode="aspectFit"  :src='STATIC_URL+"60.png"'></image>
    <view   class='flex flex-wrap align-center detailsApproved_fd1_3_c1_c0_c3'     >
        </view>
<image class='detailsApproved_fd1_3_c1_c0_c4' mode="aspectFit"  :src='STATIC_URL+"80.png"'></image>
</view>
    <view   class='flex flex-direction flex-wrap align-stretch flex-sub detailsApproved_fd1_3_c1_c1'     >
            <view   class='flex flex-wrap align-center'     >
        <text class='detailsApproved_fd1_3_c1_c1_c0_c0' >员工</text>
<image class='detailsApproved_fd1_3_c1_c1_c0_c1' mode="aspectFit"  :src='STATIC_URL+"32.png"'></image>
<text class='detailsApproved_fd1_3_c1_c1_c0_c2' >陈沉沉</text>
<text class='detailsApproved_fd1_3_c1_c1_c0_c3' >发起审批</text>
</view>
    <view   class='flex flex-wrap align-center detailsApproved_fd1_3_c1_c1_c1'     >
        <text class='detailsApproved_fd1_3_c1_c1_c1_c0' >2022-08-08</text>
<text class='detailsApproved_fd1_3_c1_c1_c1_c1' >12:02</text>
</view>
    <view   class='flex flex-wrap align-center detailsApproved_fd1_3_c1_c1_c2'     >
        <text class='detailsApproved_fd1_3_c1_c1_c2_c0' >经理</text>
<image class='detailsApproved_fd1_3_c1_c1_c2_c1' mode="aspectFit"  :src='STATIC_URL+"32.png"'></image>
<text class='detailsApproved_fd1_3_c1_c1_c2_c2' >张章章</text>
<text class='detailsApproved_fd1_3_c1_c1_c2_c3' >审批通过</text>
</view>
    <view   class='flex flex-wrap align-center detailsApproved_fd1_3_c1_c1_c3'     >
        <text class='detailsApproved_fd1_3_c1_c1_c3_c0' >2022-08-08</text>
<text class='detailsApproved_fd1_3_c1_c1_c3_c1' >12:02</text>
</view>
    <view   class='flex flex-wrap align-center detailsApproved_fd1_3_c1_c1_c4'     >
        <text class='detailsApproved_fd1_3_c1_c1_c4_c0' >财务</text>
<image class='detailsApproved_fd1_3_c1_c1_c4_c1' mode="aspectFit"  :src='STATIC_URL+"32.png"'></image>
<text class='detailsApproved_fd1_3_c1_c1_c4_c2' >张章章</text>
<text class='detailsApproved_fd1_3_c1_c1_c4_c3' >审批中</text>
</view>
</view>
</view>
    <view   class='flex flex-wrap align-start detailsApproved_fd1_3_c2'   v-if= "type=='3' || type=='8'"  >
            <view   class='flex flex-direction flex-wrap align-center'     >
        <image class='detailsApproved_fd1_3_c2_c0_c0' mode="aspectFit"  :src='STATIC_URL+"60.png"'></image>
    <view   class='flex flex-wrap align-center detailsApproved_fd1_3_c2_c0_c1'     >
        </view>
<image class='detailsApproved_fd1_3_c2_c0_c2' mode="aspectFit"  :src='STATIC_URL+"60.png"'></image>
    <view   class='flex flex-wrap align-center detailsApproved_fd1_3_c2_c0_c3'     >
        </view>
<image class='detailsApproved_fd1_3_c2_c0_c4' mode="aspectFit"  :src='STATIC_URL+"60.png"'></image>
    <view   class='flex flex-wrap align-center detailsApproved_fd1_3_c2_c0_c5'     >
        </view>
<image class='detailsApproved_fd1_3_c2_c0_c6' mode="aspectFit"  :src='STATIC_URL+"60.png"'></image>
</view>
    <view   class='flex flex-direction flex-wrap align-stretch flex-sub detailsApproved_fd1_3_c2_c1'     >
            <view   class='flex flex-wrap align-center'     >
        <text class='detailsApproved_fd1_3_c2_c1_c0_c0' >员工</text>
<image class='detailsApproved_fd1_3_c2_c1_c0_c1' mode="aspectFit"  :src='STATIC_URL+"32.png"'></image>
<text class='detailsApproved_fd1_3_c2_c1_c0_c2' >陈沉沉</text>
<text class='detailsApproved_fd1_3_c2_c1_c0_c3' >发起审批</text>
</view>
    <view   class='flex flex-wrap align-center detailsApproved_fd1_3_c2_c1_c1'     >
        <text class='detailsApproved_fd1_3_c2_c1_c1_c0' >2022-08-08</text>
<text class='detailsApproved_fd1_3_c2_c1_c1_c1' >12:02</text>
</view>
    <view   class='flex flex-wrap align-center detailsApproved_fd1_3_c2_c1_c2'     >
        <text class='detailsApproved_fd1_3_c2_c1_c2_c0' >经理</text>
<image class='detailsApproved_fd1_3_c2_c1_c2_c1' mode="aspectFit"  :src='STATIC_URL+"32.png"'></image>
<text class='detailsApproved_fd1_3_c2_c1_c2_c2' >张章章</text>
<text class='detailsApproved_fd1_3_c2_c1_c2_c3' >审批通过</text>
</view>
    <view   class='flex flex-wrap align-center detailsApproved_fd1_3_c2_c1_c3'     >
        <text class='detailsApproved_fd1_3_c2_c1_c3_c0' >2022-08-08</text>
<text class='detailsApproved_fd1_3_c2_c1_c3_c1' >12:02</text>
</view>
    <view   class='flex flex-wrap align-center detailsApproved_fd1_3_c2_c1_c4'     >
        <text class='detailsApproved_fd1_3_c2_c1_c4_c0' >财务</text>
<image class='detailsApproved_fd1_3_c2_c1_c4_c1' mode="aspectFit"  :src='STATIC_URL+"32.png"'></image>
<text class='detailsApproved_fd1_3_c2_c1_c4_c2' >张章章</text>
<text class='detailsApproved_fd1_3_c2_c1_c4_c3' >审批通过</text>
</view>
    <view   class='flex flex-wrap align-center detailsApproved_fd1_3_c2_c1_c5'     >
        <text class='detailsApproved_fd1_3_c2_c1_c5_c0' >2022-08-08</text>
<text class='detailsApproved_fd1_3_c2_c1_c5_c1' >12:02</text>
</view>
    <view   class='flex flex-wrap align-center detailsApproved_fd1_3_c2_c1_c6'     >
        <text class='detailsApproved_fd1_3_c2_c1_c6_c0' >抄送人（已抄送4人）</text>
</view>
    <view   class='flex flex-wrap align-center detailsApproved_fd1_3_c2_c1_c7'     >
            <view   class='flex flex-direction flex-wrap align-center detailsApproved_fd1_3_c2_c1_c7_c0'     >
        <image class='detailsApproved_fd1_3_c2_c1_c7_c0_c0' mode="aspectFit"  :src='STATIC_URL+"32.png"'></image>
<text class='detailsApproved_fd1_3_c2_c1_c7_c0_c1' >温温问
(总经理)</text>
</view>
</view>
</view>
</view>
    <view   class='flex flex-wrap align-start detailsApproved_fd1_3_c3'   v-if= "type=='4' || type=='9'"  >
            <view   class='flex flex-direction flex-wrap align-center'     >
        <image class='detailsApproved_fd1_3_c3_c0_c0' mode="aspectFit"  :src='STATIC_URL+"60.png"'></image>
    <view   class='flex flex-wrap align-center detailsApproved_fd1_3_c3_c0_c1'     >
        </view>
<image class='detailsApproved_fd1_3_c3_c0_c2' mode="aspectFit"  :src='STATIC_URL+"60.png"'></image>
    <view   class='flex flex-wrap align-center detailsApproved_fd1_3_c3_c0_c3'     >
        </view>
<image class='detailsApproved_fd1_3_c3_c0_c4' mode="aspectFit"  :src='STATIC_URL+"84.png"'></image>
    <view   class='flex flex-wrap align-center detailsApproved_fd1_3_c3_c0_c5'     >
        </view>
<image class='detailsApproved_fd1_3_c3_c0_c6' mode="aspectFit"  :src='STATIC_URL+"84.png"'></image>
</view>
    <view   class='flex flex-direction flex-wrap align-stretch flex-sub detailsApproved_fd1_3_c3_c1'     >
            <view   class='flex flex-wrap align-center'     >
        <text class='detailsApproved_fd1_3_c3_c1_c0_c0' >员工</text>
<image class='detailsApproved_fd1_3_c3_c1_c0_c1' mode="aspectFit"  :src='STATIC_URL+"32.png"'></image>
<text class='detailsApproved_fd1_3_c3_c1_c0_c2' >陈沉沉</text>
<text class='detailsApproved_fd1_3_c3_c1_c0_c3' >发起审批</text>
</view>
    <view   class='flex flex-wrap align-center detailsApproved_fd1_3_c3_c1_c1'     >
        <text class='detailsApproved_fd1_3_c3_c1_c1_c0' >2022-08-08</text>
<text class='detailsApproved_fd1_3_c3_c1_c1_c1' >12:02</text>
</view>
    <view   class='flex flex-wrap align-center detailsApproved_fd1_3_c3_c1_c2'     >
        <text class='detailsApproved_fd1_3_c3_c1_c2_c0' >经理</text>
<image class='detailsApproved_fd1_3_c3_c1_c2_c1' mode="aspectFit"  :src='STATIC_URL+"32.png"'></image>
<text class='detailsApproved_fd1_3_c3_c1_c2_c2' >张章章</text>
<text class='detailsApproved_fd1_3_c3_c1_c2_c3' >审批通过</text>
</view>
    <view   class='flex flex-wrap align-center detailsApproved_fd1_3_c3_c1_c3'     >
        <text class='detailsApproved_fd1_3_c3_c1_c3_c0' >2022-08-08</text>
<text class='detailsApproved_fd1_3_c3_c1_c3_c1' >12:02</text>
</view>
    <view   class='flex flex-wrap align-center detailsApproved_fd1_3_c3_c1_c4'     >
        <text class='detailsApproved_fd1_3_c3_c1_c4_c0' >财务</text>
<image class='detailsApproved_fd1_3_c3_c1_c4_c1' mode="aspectFit"  :src='STATIC_URL+"32.png"'></image>
<text class='detailsApproved_fd1_3_c3_c1_c4_c2' >张章章</text>
<text class='detailsApproved_fd1_3_c3_c1_c4_c3' >审批驳回</text>
</view>
    <view   class='flex flex-wrap align-center detailsApproved_fd1_3_c3_c1_c5'     >
        <text class='detailsApproved_fd1_3_c3_c1_c5_c0' >2022-08-08</text>
<text class='detailsApproved_fd1_3_c3_c1_c5_c1' >12:02</text>
</view>
    <view   class='flex flex-wrap align-center detailsApproved_fd1_3_c3_c1_c6'     >
        <text class='detailsApproved_fd1_3_c3_c1_c6_c0' >驳回原因：</text>
<text class='detailsApproved_fd1_3_c3_c1_c6_c1' >项目信息有误</text>
</view>
    <view   class='flex flex-wrap align-center detailsApproved_fd1_3_c3_c1_c7'     >
        <text class='detailsApproved_fd1_3_c3_c1_c7_c0' >抄送人（已抄送4人）</text>
</view>
    <view   class='flex flex-wrap align-center detailsApproved_fd1_3_c3_c1_c8'     >
            <view   class='flex flex-direction flex-wrap align-center detailsApproved_fd1_3_c3_c1_c8_c0'     >
        <image class='detailsApproved_fd1_3_c3_c1_c8_c0_c0' mode="aspectFit"  :src='STATIC_URL+"32.png"'></image>
<text class='detailsApproved_fd1_3_c3_c1_c8_c0_c1' >温温问
(总经理)</text>
</view>
</view>
</view>
</view>
    <view   class='flex flex-wrap align-start detailsApproved_fd1_3_c4'   v-if= "type=='5'"  >
            <view   class='flex flex-direction flex-wrap align-center'     >
        <image class='detailsApproved_fd1_3_c4_c0_c0' mode="aspectFit"  :src='STATIC_URL+"60.png"'></image>
    <view   class='flex flex-wrap align-center detailsApproved_fd1_3_c4_c0_c1'     >
        </view>
<image class='detailsApproved_fd1_3_c4_c0_c2' mode="aspectFit"  :src='STATIC_URL+"80.png"'></image>
</view>
    <view   class='flex flex-direction flex-wrap align-stretch flex-sub detailsApproved_fd1_3_c4_c1'     >
            <view   class='flex flex-wrap align-center'     >
        <text class='detailsApproved_fd1_3_c4_c1_c0_c0' >员工</text>
<image class='detailsApproved_fd1_3_c4_c1_c0_c1' mode="aspectFit"  :src='STATIC_URL+"32.png"'></image>
<text class='detailsApproved_fd1_3_c4_c1_c0_c2' >陈沉沉</text>
<text class='detailsApproved_fd1_3_c4_c1_c0_c3' >发起审批</text>
</view>
    <view   class='flex flex-wrap align-center detailsApproved_fd1_3_c4_c1_c1'     >
        <text class='detailsApproved_fd1_3_c4_c1_c1_c0' >2022-08-08</text>
<text class='detailsApproved_fd1_3_c4_c1_c1_c1' >12:02</text>
</view>
    <view   class='flex flex-wrap align-center detailsApproved_fd1_3_c4_c1_c2'     >
        <text class='detailsApproved_fd1_3_c4_c1_c2_c0' >经理</text>
<image class='detailsApproved_fd1_3_c4_c1_c2_c1' mode="aspectFit"  :src='STATIC_URL+"32.png"'></image>
<text class='detailsApproved_fd1_3_c4_c1_c2_c2' >张章章</text>
<text class='detailsApproved_fd1_3_c4_c1_c2_c3' >待审批</text>
</view>
</view>
</view>
    <view   class='flex flex-wrap align-start detailsApproved_fd1_3_c5'   v-if= "type=='7'"  >
            <view   class='flex flex-direction flex-wrap align-center'     >
        <image class='detailsApproved_fd1_3_c5_c0_c0' mode="aspectFit"  :src='STATIC_URL+"60.png"'></image>
    <view   class='flex flex-wrap align-center detailsApproved_fd1_3_c5_c0_c1'     >
        </view>
<image class='detailsApproved_fd1_3_c5_c0_c2' mode="aspectFit"  :src='STATIC_URL+"84.png"'></image>
</view>
    <view   class='flex flex-direction flex-wrap align-stretch flex-sub detailsApproved_fd1_3_c5_c1'     >
            <view   class='flex flex-wrap align-center'     >
        <text class='detailsApproved_fd1_3_c5_c1_c0_c0' >员工</text>
<image class='detailsApproved_fd1_3_c5_c1_c0_c1' mode="aspectFit"  :src='STATIC_URL+"32.png"'></image>
<text class='detailsApproved_fd1_3_c5_c1_c0_c2' >陈沉沉</text>
<text class='detailsApproved_fd1_3_c5_c1_c0_c3' >发起审批</text>
</view>
    <view   class='flex flex-wrap align-center detailsApproved_fd1_3_c5_c1_c1'     >
        <text class='detailsApproved_fd1_3_c5_c1_c1_c0' >2022-08-08</text>
<text class='detailsApproved_fd1_3_c5_c1_c1_c1' >12:02</text>
</view>
    <view   class='flex flex-wrap align-center detailsApproved_fd1_3_c5_c1_c2'     >
        <text class='detailsApproved_fd1_3_c5_c1_c2_c0' >经理</text>
<image class='detailsApproved_fd1_3_c5_c1_c2_c1' mode="aspectFit"  :src='STATIC_URL+"32.png"'></image>
<text class='detailsApproved_fd1_3_c5_c1_c2_c2' >张章章</text>
<text class='detailsApproved_fd1_3_c5_c1_c2_c3' >审批驳回</text>
</view>
    <view   class='flex flex-wrap align-center detailsApproved_fd1_3_c5_c1_c3'     >
        <text class='detailsApproved_fd1_3_c5_c1_c3_c0' >2022-08-08</text>
<text class='detailsApproved_fd1_3_c5_c1_c3_c1' >12:02</text>
</view>
    <view   class='flex flex-wrap align-center detailsApproved_fd1_3_c5_c1_c4'     >
        <text class='detailsApproved_fd1_3_c5_c1_c4_c0' >驳回原因：</text>
<text class='detailsApproved_fd1_3_c5_c1_c4_c1' >项目信息有误</text>
</view>
</view>
</view>
</view>
</view>
<!---flex布局flex布局结束-->
<benben-popup v-model="popupShow1666085366941" :mask="true"  mode='bottom'>
    <!---多选弹窗flex布局开始-->
 <view class="flex flex-direction flex-wrap align-stretch benben-flex-layout"   >
            <view   class='flex flex-direction flex-wrap align-stretch detailsApproved_fd2_0'     >
            <view   class='flex flex-wrap align-center justify-between detailsApproved_fd2_0_c0'     >
            <view   class='flex flex-wrap align-center detailsApproved_fd2_0_c0_c0'     >
        </view>
<text class='detailsApproved_fd2_0_c0_c1' >关联支出</text>
<image class='detailsApproved_fd2_0_c0_c2' mode="aspectFit"  :src='STATIC_URL+"46.png"'></image>
</view>
    <view   class='flex flex-wrap align-center detailsApproved_fd2_0_c1'     >
        <text class='detailsApproved_fd2_0_c1_c0' >支出流水号</text>
<text class='detailsApproved_fd2_0_c1_c1' >JHSL20220901001</text>
</view>
    <view   class='flex flex-wrap align-center detailsApproved_fd2_0_c2'     >
        <text class='detailsApproved_fd2_0_c2_c0' >支出事由</text>
<text class='detailsApproved_fd2_0_c2_c1' >汽车加油</text>
</view>
    <view   class='flex flex-wrap align-center detailsApproved_fd2_0_c3'     >
        <text class='detailsApproved_fd2_0_c3_c0' >支出科目</text>
<text class='detailsApproved_fd2_0_c3_c1' >车辆费</text>
</view>
    <view   class='flex flex-wrap align-center detailsApproved_fd2_0_c4'     >
        <text class='detailsApproved_fd2_0_c4_c0' >支出金额</text>
<text class='detailsApproved_fd2_0_c4_c1' >￥</text>
<text class='detailsApproved_fd2_0_c4_c2' >500</text>
</view>
    <view   class='flex flex-wrap align-center detailsApproved_fd2_0_c5'     >
        <text class='detailsApproved_fd2_0_c5_c0' >收款名称</text>
<text class='detailsApproved_fd2_0_c5_c1' >张章章</text>
</view>
    <view   class='flex flex-wrap align-center detailsApproved_fd2_0_c6'     >
        <text class='detailsApproved_fd2_0_c6_c0' >收款账号</text>
<text class='detailsApproved_fd2_0_c6_c1' >215551212154512132323</text>
</view>
    <view   class='flex flex-wrap align-center detailsApproved_fd2_0_c7'     >
        <text class='detailsApproved_fd2_0_c7_c0' >状态</text>
<text class='detailsApproved_fd2_0_c7_c1' >待核销</text>
</view>
</view>
</view>
<!---多选弹窗flex布局结束-->
</benben-popup>
    <view class="flex flex-wrap align-center justify-end benben-position-layout flex detailsApproved_flex_3"  v-if= "type=='5'"  >
        <button class='detailsApproved_fd3_0' @tap.stop="handleJumpDiy" data-type="navigateTo" :data-url="`/pages/applicationCenter/dismissApproval/dismissApproval`"  >驳回</button>
<button class='detailsApproved_fd3_1' @tap.stop="handleJumpDiy" data-type="navigateTo" :data-url="`/pages/applicationCenter/agreeApproval/agreeApproval`"  >同意</button>

        </view>
<view :style="{height: '97rpx'}" v-if= "type=='5'" ></view>
    
    </view>
</template>
<script>
    
    export default {
        components:{},
        
        data(){
			return {"popupShow1666085366941":false,"cut":"2","type":""};
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
    .detailsApproved_flex_0{
        background:#fff;background-size: 100% !important;width:750rpx;height:88rpx;overflow:hidden;z-index:10;top:0rpx;background-size:100% auto !important;
    }
    .detailsApproved_fd0_2{
        width:100rpx;height:88rpx;margin:0rpx 32rpx 0rpx 0rpx;
    }
    .detailsApproved_fd0_1{
        color:#000000;font-size:36rpx;font-weight:500;line-height:50rpx;
    }
    .detailsApproved_fd0_0{
        width:100rpx;height:88rpx;margin:0rpx 0rpx 0rpx 32rpx;
    }
    .detailsApproved_flex_1{
        background:url(/static/images/41.png) no-repeat;background-size: 100% !important;background-size:100% auto !important;padding:0rpx 32rpx 0rpx 32rpx;
    }
    .detailsApproved_fd1_3_c5_c1_c4_c1{
        color:#333;font-size:24rpx;font-weight:400;line-height:33rpx;margin:0rpx 0rpx 0rpx 14rpx;
    }
    .detailsApproved_fd1_3_c5_c1_c4_c0{
        color:rgba(102, 102, 102, 1);font-size:24rpx;font-weight:400;line-height:33rpx;
    }
    .detailsApproved_fd1_3_c5_c1_c4{
        margin:16rpx 0rpx 0rpx 0rpx;
    }
    .detailsApproved_fd1_3_c5_c1_c3_c1{
        color:#333333;font-size:24rpx;font-weight:400;line-height:33rpx;margin:0rpx 0rpx 0rpx 14rpx;
    }
    .detailsApproved_fd1_3_c5_c1_c3_c0{
        color:#333333;font-size:24rpx;font-weight:400;line-height:33rpx;
    }
    .detailsApproved_fd1_3_c5_c1_c3{
        margin:16rpx 0rpx 0rpx 0rpx;
    }
    .detailsApproved_fd1_3_c5_c1_c2_c3{
        color:rgba(230, 53, 65, 1);font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsApproved_fd1_3_c5_c1_c2_c2{
        color:#9EA7B7;font-size:24rpx;font-weight:400;line-height:40rpx;margin:0rpx 24rpx 0rpx 0rpx;
    }
    .detailsApproved_fd1_3_c5_c1_c2_c1{
        width:36rpx;height:36rpx;border-radius:18rpx 18rpx 18rpx 18rpx;margin:0rpx 10rpx 0rpx 24rpx;
    }
    .detailsApproved_fd1_3_c5_c1_c2_c0{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsApproved_fd1_3_c5_c1_c2{
        margin:72rpx 0rpx 0rpx 0rpx;
    }
    .detailsApproved_fd1_3_c5_c1_c1_c1{
        color:#333333;font-size:24rpx;font-weight:400;line-height:33rpx;margin:0rpx 0rpx 0rpx 14rpx;
    }
    .detailsApproved_fd1_3_c5_c1_c1_c0{
        color:#333333;font-size:24rpx;font-weight:400;line-height:33rpx;
    }
    .detailsApproved_fd1_3_c5_c1_c1{
        margin:16rpx 0rpx 0rpx 0rpx;
    }
    .detailsApproved_fd1_3_c5_c1_c0_c3{
        color:#0B1898;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsApproved_fd1_3_c5_c1_c0_c2{
        color:#9EA7B7;font-size:24rpx;font-weight:400;line-height:40rpx;margin:0rpx 24rpx 0rpx 0rpx;
    }
    .detailsApproved_fd1_3_c5_c1_c0_c1{
        width:36rpx;height:36rpx;border-radius:18rpx 18rpx 18rpx 18rpx;margin:0rpx 10rpx 0rpx 24rpx;
    }
    .detailsApproved_fd1_3_c5_c1_c0_c0{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsApproved_fd1_3_c5_c1{
        margin:0rpx 0rpx 0rpx 21rpx;
    }
    .detailsApproved_fd1_3_c5_c0_c2{
        width:32rpx;height:32rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .detailsApproved_fd1_3_c5_c0_c1{
        border:1px dashed rgba(221, 221, 221, 1);width:1rpx;height:129rpx;
    }
    .detailsApproved_fd1_3_c5_c0_c0{
        width:32rpx;height:32rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .detailsApproved_fd1_3_c5{
        margin:33rpx 0rpx 0rpx 0rpx;
    }
    .detailsApproved_fd1_3_c4_c1_c2_c3{
        color:rgba(255, 127, 32, 1);font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsApproved_fd1_3_c4_c1_c2_c2{
        color:#9EA7B7;font-size:24rpx;font-weight:400;line-height:40rpx;margin:0rpx 24rpx 0rpx 0rpx;
    }
    .detailsApproved_fd1_3_c4_c1_c2_c1{
        width:36rpx;height:36rpx;border-radius:18rpx 18rpx 18rpx 18rpx;margin:0rpx 10rpx 0rpx 24rpx;
    }
    .detailsApproved_fd1_3_c4_c1_c2_c0{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsApproved_fd1_3_c4_c1_c2{
        margin:72rpx 0rpx 0rpx 0rpx;
    }
    .detailsApproved_fd1_3_c4_c1_c1_c1{
        color:#333333;font-size:24rpx;font-weight:400;line-height:33rpx;margin:0rpx 0rpx 0rpx 14rpx;
    }
    .detailsApproved_fd1_3_c4_c1_c1_c0{
        color:#333333;font-size:24rpx;font-weight:400;line-height:33rpx;
    }
    .detailsApproved_fd1_3_c4_c1_c1{
        margin:16rpx 0rpx 0rpx 0rpx;
    }
    .detailsApproved_fd1_3_c4_c1_c0_c3{
        color:#0B1898;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsApproved_fd1_3_c4_c1_c0_c2{
        color:#9EA7B7;font-size:24rpx;font-weight:400;line-height:40rpx;margin:0rpx 24rpx 0rpx 0rpx;
    }
    .detailsApproved_fd1_3_c4_c1_c0_c1{
        width:36rpx;height:36rpx;border-radius:18rpx 18rpx 18rpx 18rpx;margin:0rpx 10rpx 0rpx 24rpx;
    }
    .detailsApproved_fd1_3_c4_c1_c0_c0{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsApproved_fd1_3_c4_c1{
        margin:0rpx 0rpx 0rpx 21rpx;
    }
    .detailsApproved_fd1_3_c4_c0_c2{
        width:32rpx;height:32rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .detailsApproved_fd1_3_c4_c0_c1{
        border:1px dashed rgba(221, 221, 221, 1);width:1rpx;height:129rpx;
    }
    .detailsApproved_fd1_3_c4_c0_c0{
        width:32rpx;height:32rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .detailsApproved_fd1_3_c4{
        margin:33rpx 0rpx 0rpx 0rpx;
    }
    .detailsApproved_fd1_3_c3_c1_c8_c0_c1{
        color:#9EA7B7;font-size:20rpx;font-weight:400;line-height:24rpx;text-align:center;margin:6rpx 0rpx 0rpx 0rpx;
    }
    .detailsApproved_fd1_3_c3_c1_c8_c0_c0{
        width:36rpx;height:36rpx;border-radius:18rpx 18rpx 18rpx 18rpx;
    }
    .detailsApproved_fd1_3_c3_c1_c8_c0{
        margin:0rpx 32rpx 0rpx 0rpx;
    }
    .detailsApproved_fd1_3_c3_c1_c8{
        margin:16rpx 0rpx 0rpx 0rpx;
    }
    .detailsApproved_fd1_3_c3_c1_c7_c0{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsApproved_fd1_3_c3_c1_c7{
        margin:70rpx 0rpx 0rpx 0rpx;
    }
    .detailsApproved_fd1_3_c3_c1_c6_c1{
        color:#333;font-size:24rpx;font-weight:400;line-height:33rpx;margin:0rpx 0rpx 0rpx 14rpx;
    }
    .detailsApproved_fd1_3_c3_c1_c6_c0{
        color:rgba(102, 102, 102, 1);font-size:24rpx;font-weight:400;line-height:33rpx;
    }
    .detailsApproved_fd1_3_c3_c1_c6{
        margin:16rpx 0rpx 0rpx 0rpx;
    }
    .detailsApproved_fd1_3_c3_c1_c5_c1{
        color:#333333;font-size:24rpx;font-weight:400;line-height:33rpx;margin:0rpx 0rpx 0rpx 14rpx;
    }
    .detailsApproved_fd1_3_c3_c1_c5_c0{
        color:#333333;font-size:24rpx;font-weight:400;line-height:33rpx;
    }
    .detailsApproved_fd1_3_c3_c1_c5{
        margin:16rpx 0rpx 0rpx 0rpx;
    }
    .detailsApproved_fd1_3_c3_c1_c4_c3{
        color:rgba(230, 53, 65, 1);font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsApproved_fd1_3_c3_c1_c4_c2{
        color:#9EA7B7;font-size:24rpx;font-weight:400;line-height:40rpx;margin:0rpx 24rpx 0rpx 0rpx;
    }
    .detailsApproved_fd1_3_c3_c1_c4_c1{
        width:36rpx;height:36rpx;border-radius:18rpx 18rpx 18rpx 18rpx;margin:0rpx 10rpx 0rpx 24rpx;
    }
    .detailsApproved_fd1_3_c3_c1_c4_c0{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsApproved_fd1_3_c3_c1_c4{
        margin:70rpx 0rpx 0rpx 0rpx;
    }
    .detailsApproved_fd1_3_c3_c1_c3_c1{
        color:#333333;font-size:24rpx;font-weight:400;line-height:33rpx;margin:0rpx 0rpx 0rpx 14rpx;
    }
    .detailsApproved_fd1_3_c3_c1_c3_c0{
        color:#333333;font-size:24rpx;font-weight:400;line-height:33rpx;
    }
    .detailsApproved_fd1_3_c3_c1_c3{
        margin:16rpx 0rpx 0rpx 0rpx;
    }
    .detailsApproved_fd1_3_c3_c1_c2_c3{
        color:rgba(29, 185, 153, 1);font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsApproved_fd1_3_c3_c1_c2_c2{
        color:#9EA7B7;font-size:24rpx;font-weight:400;line-height:40rpx;margin:0rpx 24rpx 0rpx 0rpx;
    }
    .detailsApproved_fd1_3_c3_c1_c2_c1{
        width:36rpx;height:36rpx;border-radius:18rpx 18rpx 18rpx 18rpx;margin:0rpx 10rpx 0rpx 24rpx;
    }
    .detailsApproved_fd1_3_c3_c1_c2_c0{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsApproved_fd1_3_c3_c1_c2{
        margin:72rpx 0rpx 0rpx 0rpx;
    }
    .detailsApproved_fd1_3_c3_c1_c1_c1{
        color:#333333;font-size:24rpx;font-weight:400;line-height:33rpx;margin:0rpx 0rpx 0rpx 14rpx;
    }
    .detailsApproved_fd1_3_c3_c1_c1_c0{
        color:#333333;font-size:24rpx;font-weight:400;line-height:33rpx;
    }
    .detailsApproved_fd1_3_c3_c1_c1{
        margin:16rpx 0rpx 0rpx 0rpx;
    }
    .detailsApproved_fd1_3_c3_c1_c0_c3{
        color:#0B1898;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsApproved_fd1_3_c3_c1_c0_c2{
        color:#9EA7B7;font-size:24rpx;font-weight:400;line-height:40rpx;margin:0rpx 24rpx 0rpx 0rpx;
    }
    .detailsApproved_fd1_3_c3_c1_c0_c1{
        width:36rpx;height:36rpx;border-radius:18rpx 18rpx 18rpx 18rpx;margin:0rpx 10rpx 0rpx 24rpx;
    }
    .detailsApproved_fd1_3_c3_c1_c0_c0{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsApproved_fd1_3_c3_c1{
        margin:0rpx 0rpx 0rpx 21rpx;
    }
    .detailsApproved_fd1_3_c3_c0_c6{
        width:32rpx;height:32rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .detailsApproved_fd1_3_c3_c0_c5{
        border:1px dashed rgba(221, 221, 221, 1);width:1rpx;height:178rpx;
    }
    .detailsApproved_fd1_3_c3_c0_c4{
        width:32rpx;height:32rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .detailsApproved_fd1_3_c3_c0_c3{
        border:1px dashed rgba(221, 221, 221, 1);width:1rpx;height:129rpx;
    }
    .detailsApproved_fd1_3_c3_c0_c2{
        width:32rpx;height:32rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .detailsApproved_fd1_3_c3_c0_c1{
        border:1px dashed rgba(221, 221, 221, 1);width:1rpx;height:129rpx;
    }
    .detailsApproved_fd1_3_c3_c0_c0{
        width:32rpx;height:32rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .detailsApproved_fd1_3_c3{
        margin:33rpx 0rpx 0rpx 0rpx;
    }
    .detailsApproved_fd1_3_c2_c1_c7_c0_c1{
        color:#9EA7B7;font-size:20rpx;font-weight:400;line-height:24rpx;text-align:center;margin:6rpx 0rpx 0rpx 0rpx;
    }
    .detailsApproved_fd1_3_c2_c1_c7_c0_c0{
        width:36rpx;height:36rpx;border-radius:18rpx 18rpx 18rpx 18rpx;
    }
    .detailsApproved_fd1_3_c2_c1_c7_c0{
        margin:0rpx 32rpx 0rpx 0rpx;
    }
    .detailsApproved_fd1_3_c2_c1_c7{
        margin:16rpx 0rpx 0rpx 0rpx;
    }
    .detailsApproved_fd1_3_c2_c1_c6_c0{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsApproved_fd1_3_c2_c1_c6{
        margin:70rpx 0rpx 0rpx 0rpx;
    }
    .detailsApproved_fd1_3_c2_c1_c5_c1{
        color:#333333;font-size:24rpx;font-weight:400;line-height:33rpx;margin:0rpx 0rpx 0rpx 14rpx;
    }
    .detailsApproved_fd1_3_c2_c1_c5_c0{
        color:#333333;font-size:24rpx;font-weight:400;line-height:33rpx;
    }
    .detailsApproved_fd1_3_c2_c1_c5{
        margin:16rpx 0rpx 0rpx 0rpx;
    }
    .detailsApproved_fd1_3_c2_c1_c4_c3{
        color:rgba(29, 185, 153, 1);font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsApproved_fd1_3_c2_c1_c4_c2{
        color:#9EA7B7;font-size:24rpx;font-weight:400;line-height:40rpx;margin:0rpx 24rpx 0rpx 0rpx;
    }
    .detailsApproved_fd1_3_c2_c1_c4_c1{
        width:36rpx;height:36rpx;border-radius:18rpx 18rpx 18rpx 18rpx;margin:0rpx 10rpx 0rpx 24rpx;
    }
    .detailsApproved_fd1_3_c2_c1_c4_c0{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsApproved_fd1_3_c2_c1_c4{
        margin:70rpx 0rpx 0rpx 0rpx;
    }
    .detailsApproved_fd1_3_c2_c1_c3_c1{
        color:#333333;font-size:24rpx;font-weight:400;line-height:33rpx;margin:0rpx 0rpx 0rpx 14rpx;
    }
    .detailsApproved_fd1_3_c2_c1_c3_c0{
        color:#333333;font-size:24rpx;font-weight:400;line-height:33rpx;
    }
    .detailsApproved_fd1_3_c2_c1_c3{
        margin:16rpx 0rpx 0rpx 0rpx;
    }
    .detailsApproved_fd1_3_c2_c1_c2_c3{
        color:rgba(29, 185, 153, 1);font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsApproved_fd1_3_c2_c1_c2_c2{
        color:#9EA7B7;font-size:24rpx;font-weight:400;line-height:40rpx;margin:0rpx 24rpx 0rpx 0rpx;
    }
    .detailsApproved_fd1_3_c2_c1_c2_c1{
        width:36rpx;height:36rpx;border-radius:18rpx 18rpx 18rpx 18rpx;margin:0rpx 10rpx 0rpx 24rpx;
    }
    .detailsApproved_fd1_3_c2_c1_c2_c0{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsApproved_fd1_3_c2_c1_c2{
        margin:72rpx 0rpx 0rpx 0rpx;
    }
    .detailsApproved_fd1_3_c2_c1_c1_c1{
        color:#333333;font-size:24rpx;font-weight:400;line-height:33rpx;margin:0rpx 0rpx 0rpx 14rpx;
    }
    .detailsApproved_fd1_3_c2_c1_c1_c0{
        color:#333333;font-size:24rpx;font-weight:400;line-height:33rpx;
    }
    .detailsApproved_fd1_3_c2_c1_c1{
        margin:16rpx 0rpx 0rpx 0rpx;
    }
    .detailsApproved_fd1_3_c2_c1_c0_c3{
        color:#0B1898;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsApproved_fd1_3_c2_c1_c0_c2{
        color:#9EA7B7;font-size:24rpx;font-weight:400;line-height:40rpx;margin:0rpx 24rpx 0rpx 0rpx;
    }
    .detailsApproved_fd1_3_c2_c1_c0_c1{
        width:36rpx;height:36rpx;border-radius:18rpx 18rpx 18rpx 18rpx;margin:0rpx 10rpx 0rpx 24rpx;
    }
    .detailsApproved_fd1_3_c2_c1_c0_c0{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsApproved_fd1_3_c2_c1{
        margin:0rpx 0rpx 0rpx 21rpx;
    }
    .detailsApproved_fd1_3_c2_c0_c6{
        width:32rpx;height:32rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .detailsApproved_fd1_3_c2_c0_c5{
        border:1px dashed rgba(221, 221, 221, 1);width:1rpx;height:129rpx;
    }
    .detailsApproved_fd1_3_c2_c0_c4{
        width:32rpx;height:32rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .detailsApproved_fd1_3_c2_c0_c3{
        border:1px dashed rgba(221, 221, 221, 1);width:1rpx;height:129rpx;
    }
    .detailsApproved_fd1_3_c2_c0_c2{
        width:32rpx;height:32rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .detailsApproved_fd1_3_c2_c0_c1{
        border:1px dashed rgba(221, 221, 221, 1);width:1rpx;height:129rpx;
    }
    .detailsApproved_fd1_3_c2_c0_c0{
        width:32rpx;height:32rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .detailsApproved_fd1_3_c2{
        margin:33rpx 0rpx 0rpx 0rpx;
    }
    .detailsApproved_fd1_3_c1_c1_c4_c3{
        color:#0B1898;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsApproved_fd1_3_c1_c1_c4_c2{
        color:#9EA7B7;font-size:24rpx;font-weight:400;line-height:40rpx;margin:0rpx 24rpx 0rpx 0rpx;
    }
    .detailsApproved_fd1_3_c1_c1_c4_c1{
        width:36rpx;height:36rpx;border-radius:18rpx 18rpx 18rpx 18rpx;margin:0rpx 10rpx 0rpx 24rpx;
    }
    .detailsApproved_fd1_3_c1_c1_c4_c0{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsApproved_fd1_3_c1_c1_c4{
        margin:70rpx 0rpx 0rpx 0rpx;
    }
    .detailsApproved_fd1_3_c1_c1_c3_c1{
        color:#333333;font-size:24rpx;font-weight:400;line-height:33rpx;margin:0rpx 0rpx 0rpx 14rpx;
    }
    .detailsApproved_fd1_3_c1_c1_c3_c0{
        color:#333333;font-size:24rpx;font-weight:400;line-height:33rpx;
    }
    .detailsApproved_fd1_3_c1_c1_c3{
        margin:16rpx 0rpx 0rpx 0rpx;
    }
    .detailsApproved_fd1_3_c1_c1_c2_c3{
        color:rgba(29, 185, 153, 1);font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsApproved_fd1_3_c1_c1_c2_c2{
        color:#9EA7B7;font-size:24rpx;font-weight:400;line-height:40rpx;margin:0rpx 24rpx 0rpx 0rpx;
    }
    .detailsApproved_fd1_3_c1_c1_c2_c1{
        width:36rpx;height:36rpx;border-radius:18rpx 18rpx 18rpx 18rpx;margin:0rpx 10rpx 0rpx 24rpx;
    }
    .detailsApproved_fd1_3_c1_c1_c2_c0{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsApproved_fd1_3_c1_c1_c2{
        margin:72rpx 0rpx 0rpx 0rpx;
    }
    .detailsApproved_fd1_3_c1_c1_c1_c1{
        color:#333333;font-size:24rpx;font-weight:400;line-height:33rpx;margin:0rpx 0rpx 0rpx 14rpx;
    }
    .detailsApproved_fd1_3_c1_c1_c1_c0{
        color:#333333;font-size:24rpx;font-weight:400;line-height:33rpx;
    }
    .detailsApproved_fd1_3_c1_c1_c1{
        margin:16rpx 0rpx 0rpx 0rpx;
    }
    .detailsApproved_fd1_3_c1_c1_c0_c3{
        color:#0B1898;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsApproved_fd1_3_c1_c1_c0_c2{
        color:#9EA7B7;font-size:24rpx;font-weight:400;line-height:40rpx;margin:0rpx 24rpx 0rpx 0rpx;
    }
    .detailsApproved_fd1_3_c1_c1_c0_c1{
        width:36rpx;height:36rpx;border-radius:18rpx 18rpx 18rpx 18rpx;margin:0rpx 10rpx 0rpx 24rpx;
    }
    .detailsApproved_fd1_3_c1_c1_c0_c0{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsApproved_fd1_3_c1_c1{
        margin:0rpx 0rpx 0rpx 21rpx;
    }
    .detailsApproved_fd1_3_c1_c0_c4{
        width:32rpx;height:32rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .detailsApproved_fd1_3_c1_c0_c3{
        border:1px dashed rgba(221, 221, 221, 1);width:1rpx;height:129rpx;
    }
    .detailsApproved_fd1_3_c1_c0_c2{
        width:32rpx;height:32rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .detailsApproved_fd1_3_c1_c0_c1{
        border:1px dashed rgba(221, 221, 221, 1);width:1rpx;height:129rpx;
    }
    .detailsApproved_fd1_3_c1_c0_c0{
        width:32rpx;height:32rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .detailsApproved_fd1_3_c1{
        margin:33rpx 0rpx 0rpx 0rpx;
    }
    .detailsApproved_fd1_3_c0_c0{
        color:#333333;font-size:32rpx;font-weight:500;line-height:45rpx;
    }
    .detailsApproved_fd1_3_c0{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:0rpx 0rpx 16rpx 0rpx;
    }
    .detailsApproved_fd1_3{
        background:#fff;background-size: 100% !important;border-radius:16rpx 16rpx 16rpx 16rpx;margin:20rpx 0rpx 0rpx 0rpx;padding:32rpx 24rpx 32rpx 24rpx;
    }
    .detailsApproved_fd1_2_c6_c0{
        width:152rpx;height:152rpx;margin:0rpx 0rpx 8rpx 15rpx;border-radius:16rpx 16rpx 16rpx 16rpx;
    }
    .detailsApproved_fd1_2_c6{
        margin:24rpx 24rpx 0rpx 9rpx;
    }
    .detailsApproved_fd1_2_c5{
        color:#333333;font-size:32rpx;font-weight:500;line-height:45rpx;margin:40rpx 24rpx 0rpx 24rpx;
    }
    .detailsApproved_fd1_2_c4_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 64rpx;
    }
    .detailsApproved_fd1_2_c4_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsApproved_fd1_2_c4{
        margin:24rpx 0rpx 0rpx 0rpx;padding:0rpx 24rpx 0rpx 24rpx;
    }
    .detailsApproved_fd1_2_c3_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 64rpx;
    }
    .detailsApproved_fd1_2_c3_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsApproved_fd1_2_c3{
        margin:24rpx 0rpx 0rpx 0rpx;padding:0rpx 24rpx 0rpx 24rpx;
    }
    .detailsApproved_fd1_2_c2_c3{
        color:rgba(72, 151, 235, 1);font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsApproved_fd1_2_c2_c2{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsApproved_fd1_2_c2_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 64rpx;
    }
    .detailsApproved_fd1_2_c2_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsApproved_fd1_2_c2{
        margin:24rpx 0rpx 0rpx 0rpx;padding:0rpx 24rpx 0rpx 24rpx;
    }
    .detailsApproved_fd1_2_c1_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 64rpx;
    }
    .detailsApproved_fd1_2_c1_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsApproved_fd1_2_c1{
        margin:24rpx 0rpx 0rpx 0rpx;padding:0rpx 24rpx 0rpx 24rpx;
    }
    .detailsApproved_fd1_2_c0_c0{
        color:#333333;font-size:32rpx;font-weight:500;line-height:45rpx;
    }
    .detailsApproved_fd1_2_c0{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:0rpx 24rpx 16rpx 24rpx;
    }
    .detailsApproved_fd1_2{
        background:#fff;background-size: 100% !important;border-radius:16rpx 16rpx 16rpx 16rpx;padding:32rpx 0rpx 32rpx 0rpx;margin:20rpx 0rpx 0rpx 0rpx;
    }
    .detailsApproved_fd1_1_c5_c2{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 10rpx;
    }
    .detailsApproved_fd1_1_c5_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 64rpx;
    }
    .detailsApproved_fd1_1_c5_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsApproved_fd1_1_c5{
        margin:24rpx 0rpx 0rpx 0rpx;
    }
    .detailsApproved_fd1_1_c4_c2{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsApproved_fd1_1_c4_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 64rpx;
    }
    .detailsApproved_fd1_1_c4_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsApproved_fd1_1_c4{
        margin:24rpx 0rpx 0rpx 0rpx;
    }
    .detailsApproved_fd1_1_c3_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 64rpx;
    }
    .detailsApproved_fd1_1_c3_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsApproved_fd1_1_c3{
        margin:24rpx 0rpx 0rpx 0rpx;
    }
    .detailsApproved_fd1_1_c2_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 92rpx;
    }
    .detailsApproved_fd1_1_c2_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsApproved_fd1_1_c2{
        margin:24rpx 0rpx 0rpx 0rpx;
    }
    .detailsApproved_fd1_1_c1_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 64rpx;
    }
    .detailsApproved_fd1_1_c1_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsApproved_fd1_1_c1{
        margin:24rpx 0rpx 0rpx 0rpx;
    }
    .detailsApproved_fd1_1_c0_c0{
        color:#333333;font-size:32rpx;font-weight:500;line-height:45rpx;
    }
    .detailsApproved_fd1_1_c0{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:0rpx 0rpx 16rpx 0rpx;
    }
    .detailsApproved_fd1_1{
        background:#fff;background-size: 100% !important;border-radius:16rpx 16rpx 16rpx 16rpx;padding:32rpx 24rpx 32rpx 24rpx;margin:20rpx 0rpx 0rpx 0rpx;
    }
    .detailsApproved_fd1_0_c2_c0_2{
        color:#FFFFFF;font-size:28rpx;font-weight:500;line-height:40rpx;
    }
    .detailsApproved_fd1_0_c2_c0_1{
        color:#FFFFFF;font-size:28rpx;font-weight:500;line-height:40rpx;
    }
    .detailsApproved_fd1_0_c2_c0{
        color:#FFFFFF;font-size:28rpx;font-weight:500;line-height:40rpx;
    }
    .detailsApproved_fd1_0_c2{
        margin:0rpx 0rpx 0rpx auto;
    }
    .detailsApproved_fd1_0_c1_8{
        width:160rpx;height:56rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .detailsApproved_fd1_0_c1_7{
        width:160rpx;height:56rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .detailsApproved_fd1_0_c1_6{
        width:160rpx;height:56rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .detailsApproved_fd1_0_c1_5{
        width:160rpx;height:56rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .detailsApproved_fd1_0_c1_4{
        width:120rpx;height:56rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .detailsApproved_fd1_0_c1_3{
        width:160rpx;height:56rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .detailsApproved_fd1_0_c1_2{
        width:160rpx;height:56rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .detailsApproved_fd1_0_c1_1{
        width:120rpx;height:56rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .detailsApproved_fd1_0_c1{
        width:120rpx;height:56rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .detailsApproved_fd1_0_c0_7{
        width:88rpx;height:88rpx;border-radius:0rpx 0rpx 0rpx 0rpx;margin:0rpx 24rpx 0rpx 0rpx;
    }
    .detailsApproved_fd1_0_c0_6{
        width:88rpx;height:88rpx;border-radius:0rpx 0rpx 0rpx 0rpx;margin:0rpx 24rpx 0rpx 0rpx;
    }
    .detailsApproved_fd1_0_c0_5{
        width:88rpx;height:88rpx;border-radius:0rpx 0rpx 0rpx 0rpx;margin:0rpx 24rpx 0rpx 0rpx;
    }
    .detailsApproved_fd1_0_c0_4{
        width:88rpx;height:88rpx;border-radius:0rpx 0rpx 0rpx 0rpx;margin:0rpx 24rpx 0rpx 0rpx;
    }
    .detailsApproved_fd1_0_c0_3{
        width:88rpx;height:88rpx;border-radius:0rpx 0rpx 0rpx 0rpx;margin:0rpx 24rpx 0rpx 0rpx;
    }
    .detailsApproved_fd1_0_c0_2{
        width:88rpx;height:88rpx;border-radius:0rpx 0rpx 0rpx 0rpx;margin:0rpx 24rpx 0rpx 0rpx;
    }
    .detailsApproved_fd1_0_c0_1{
        width:88rpx;height:88rpx;border-radius:0rpx 0rpx 0rpx 0rpx;margin:0rpx 24rpx 0rpx 0rpx;
    }
    .detailsApproved_fd1_0_c0{
        width:88rpx;height:88rpx;border-radius:0rpx 0rpx 0rpx 0rpx;margin:0rpx 24rpx 0rpx 0rpx;
    }
    .detailsApproved_fd1_0{
        margin:40rpx 0rpx 20rpx 0rpx;
    }
    .detailsApproved_fd2_0_c7_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 132rpx;
    }
    .detailsApproved_fd2_0_c7_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsApproved_fd2_0_c7{
        padding:0rpx 32rpx 0rpx 32rpx;margin:24rpx 0rpx 0rpx 0rpx;
    }
    .detailsApproved_fd2_0_c6_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 76rpx;
    }
    .detailsApproved_fd2_0_c6_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsApproved_fd2_0_c6{
        padding:0rpx 32rpx 0rpx 32rpx;margin:24rpx 0rpx 0rpx 0rpx;
    }
    .detailsApproved_fd2_0_c5_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 76rpx;
    }
    .detailsApproved_fd2_0_c5_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsApproved_fd2_0_c5{
        padding:0rpx 32rpx 0rpx 32rpx;margin:24rpx 0rpx 0rpx 0rpx;
    }
    .detailsApproved_fd2_0_c4_c2{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsApproved_fd2_0_c4_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 76rpx;
    }
    .detailsApproved_fd2_0_c4_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsApproved_fd2_0_c4{
        padding:0rpx 32rpx 0rpx 32rpx;margin:24rpx 0rpx 0rpx 0rpx;
    }
    .detailsApproved_fd2_0_c3_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 76rpx;
    }
    .detailsApproved_fd2_0_c3_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsApproved_fd2_0_c3{
        padding:0rpx 32rpx 0rpx 32rpx;margin:24rpx 0rpx 0rpx 0rpx;
    }
    .detailsApproved_fd2_0_c2_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 76rpx;
    }
    .detailsApproved_fd2_0_c2_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsApproved_fd2_0_c2{
        padding:0rpx 32rpx 0rpx 32rpx;margin:24rpx 0rpx 0rpx 0rpx;
    }
    .detailsApproved_fd2_0_c1_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 48rpx;
    }
    .detailsApproved_fd2_0_c1_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsApproved_fd2_0_c1{
        padding:0rpx 32rpx 0rpx 32rpx;margin:24rpx 0rpx 0rpx 0rpx;
    }
    .detailsApproved_fd2_0_c0_c2{
        width:40rpx;height:40rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .detailsApproved_fd2_0_c0_c1{
        color:#333333;font-size:36rpx;font-weight:500;line-height:50rpx;
    }
    .detailsApproved_fd2_0_c0_c0{
        width:40rpx;height:40rpx;
    }
    .detailsApproved_fd2_0_c0{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:32rpx 32rpx 32rpx 32rpx;margin:0rpx 0rpx 8rpx 0rpx;
    }
    .detailsApproved_fd2_0{
        background:#fff;background-size: 100% !important;border-radius:24rpx 24rpx 0rpx 0rpx;padding:0rpx 0rpx 40rpx 0rpx;
    }
    .detailsApproved_flex_3{
        background:#fff;background-size: 100% !important;width:750rpx;height:97rpx;overflow:hidden;z-index:10;bottom:calc(0rpx + var(--window-bottom));background-size:100% auto !important;
    }
    .detailsApproved_fd3_1{
        background:rgba(11, 24, 152, 1);background-size: 100% !important;border-radius:50rpx 50rpx 50rpx 50rpx;font-size:24rpx;color:#fff;width:170rpx;height:60rpx;line-height:60rpx;margin:0rpx 24rpx 0rpx 0rpx;
    }
    .detailsApproved_fd3_0{
        border:1px solid #666666;background:#fff;background-size: 100% !important;border-radius:28rpx 28rpx 28rpx 28rpx;font-size:24rpx;color:#333;width:170rpx;height:60rpx;line-height:60rpx;margin:0rpx 24rpx 0rpx 0rpx;
    }
</style>