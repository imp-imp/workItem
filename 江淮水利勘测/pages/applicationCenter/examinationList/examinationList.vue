<template>
    <view class="page" :style="themeColor">
    <view class="flex flex-wrap align-center justify-between benben-position-layout flex examinationList_flex_0"    :style="{height:(88+StatusBarRpx)+'rpx',paddingTop:StatusBarRpx+'rpx'}">
            <view   class='flex flex-wrap align-center examinationList_fd0_0'  @tap.stop="handleJumpDiy" data-type="back" data-url="1"   >
        <text class='fu-iconfont2' >&#xe794;</text>
</view>
<text class='examinationList_fd0_1' >审批列表</text>
    <view   class='flex flex-wrap align-center examinationList_fd0_2'     >
        </view>

        </view>
<view :style="{height: (88+StatusBarRpx)+'rpx'}"  ></view>
<!---flex布局flex布局开始-->
 <view class="flex benben-flex-layout flex-wrap align-center"   >
        <view>
        <benben-flex-tabs class-name='examinationList_benbenTabsfd1_0' v-model="tabs" ref="benben_tabsfd1_0" select-mark="benben_tabsfd1_0" key="benben_tabsfd1_0" :open-title-type='false' :open-sticky='true' :top='0' :is-show-content='true' :scrollspy='false'  :tabs-info.sync="tabsInfofd1_0"  >
            
                    <scroll-view
          @scroll="tabsInfofd1_0.scrollX = $event.detail.scrollLeft"
          id="benben_tabsfd1_0"
          class="benben-tabs"
          style="width:750rpx"
          :scroll-x="true"
          :scroll-left.sync="tabsInfofd1_0.moveX"
          scroll-with-animation="all .3s ease"
        >
          <view class="benben-tabs-content" id="benben_tabsfd1_0-content">
            <view id="benben_tabsfd1_0-title" class="benben-tabs-title flex flex align-center justify-around">
                        <view 
                :class="{ 'checkTitlefd1_0': tabs == '1', 'flex flex-wrap align-center examinationList_titlefd1_0_c3': true }"
                @tap="tabs = '1'"
                :id="`benben_tabsfd1_0-title-item-${'1'}`"
                
              >
                
<text  >我的</text>

              </view>            <view 
                :class="{ 'checkTitlefd1_0': tabs == '2', 'flex flex-wrap align-center examinationList_titlefd1_0_c4': true }"
                @tap="tabs = '2'"
                :id="`benben_tabsfd1_0-title-item-${'2'}`"
                
              >
                
<text  >待审批</text>

              </view>            <view 
                :class="{ 'checkTitlefd1_0': tabs == '3', 'flex flex-wrap align-center examinationList_titlefd1_0_c5': true }"
                @tap="tabs = '3'"
                :id="`benben_tabsfd1_0-title-item-${'3'}`"
                
              >
                
<text  >已审批</text>

              </view>            <view 
                :class="{ 'checkTitlefd1_0': tabs == '4', 'flex flex-wrap align-center examinationList_titlefd1_0_c6': true }"
                @tap="tabs = '4'"
                :id="`benben_tabsfd1_0-title-item-${'4'}`"
                
              >
                
<text  >抄送给我</text>

              </view>
            </view>
            <view :style="{ left: tabsInfofd1_0.lineleft, maxWidth: tabsInfofd1_0.lineWidth }" id="benben_tabsfd1_0-line" class="benben-tabs-line flex benben-flex-tabs-line examinationList_linefd1_0"></view>
          </view>
        </scroll-view>
            
    <view   class='flex flex-wrap align-center justify-end examinationList_rightfd1_0_c0'     >
        <image class='examinationList_rightfd1_0_c0_c0' mode="aspectFit"  :src='STATIC_URL+"47.png"'></image>
</view>

        </benben-flex-tabs>
                <view>
                        <view class="benben_tabsfd1_0-body-item flex flex-direction flex-wrap align-stretch examinationList_bodyfd1_0_c3" v-if=" tabs == '1' " :id="`benben_tabsfd1_0-body-item-${'1'}`">
    <view   class='flex flex-direction flex-wrap align-stretch examinationList_bodyItemfd1_0_c3_c0'  @tap.stop="handleJumpDiy" data-type="navigateTo" :data-url="`/pages/applicationCenter/detailsApproved/detailsApproved?type=1`"   >
            <view   class='flex flex-wrap align-center justify-between examinationList_bodyItemfd1_0_c3_c0_c0'     >
            <view   class='flex flex-wrap align-center'     >
        <text class='examinationList_bodyItemfd1_0_c3_c0_c0_c0_c0' >类型：</text>
<text class='examinationList_bodyItemfd1_0_c3_c0_c0_c0_c1' >报销</text>
</view>
    <view   class='flex flex-wrap align-center'     >
        <text class='examinationList_bodyItemfd1_0_c3_c0_c0_c1_c0' >待审批</text>
</view>
</view>
    <view   class='flex flex-wrap align-center examinationList_bodyItemfd1_0_c3_c0_c1'     >
        <text class='examinationList_bodyItemfd1_0_c3_c0_c1_c0' >申请人</text>
<text class='flex-sub examinationList_bodyItemfd1_0_c3_c0_c1_c1' >陈沉沉</text>
</view>
    <view   class='flex flex-wrap align-start examinationList_bodyItemfd1_0_c3_c0_c2'     >
        <text class='examinationList_bodyItemfd1_0_c3_c0_c2_c0' >审批事项</text>
<text class='flex-sub examinationList_bodyItemfd1_0_c3_c0_c2_c1' >山乡归园田居美丽乡村样板片区工程出差住宿</text>
</view>
    <view   class='flex flex-wrap align-center examinationList_bodyItemfd1_0_c3_c0_c3'     >
        <text class='examinationList_bodyItemfd1_0_c3_c0_c3_c0' >申请金额</text>
<text class='examinationList_bodyItemfd1_0_c3_c0_c3_c1' >￥</text>
<text class='examinationList_bodyItemfd1_0_c3_c0_c3_c2' >3500</text>
</view>
    <view   class='flex flex-wrap align-center examinationList_bodyItemfd1_0_c3_c0_c4'     >
        <text class='examinationList_bodyItemfd1_0_c3_c0_c4_c0' >项目编号</text>
<text class='flex-sub examinationList_bodyItemfd1_0_c3_c0_c4_c1' >2022-N4-001-J</text>
</view>
    <view   class='flex flex-wrap align-center examinationList_bodyItemfd1_0_c3_c0_c5'     >
        <text class='examinationList_bodyItemfd1_0_c3_c0_c5_c0' >项目名称</text>
<text class='flex-sub examinationList_bodyItemfd1_0_c3_c0_c5_c1' >二阳县光电产业园基础设施建设项目</text>
</view>
    <view   class='flex flex-wrap align-center examinationList_bodyItemfd1_0_c3_c0_c6'     >
        <text class='examinationList_bodyItemfd1_0_c3_c0_c6_c0' >申请时间</text>
<text class='examinationList_bodyItemfd1_0_c3_c0_c6_c1' >2022-08-08</text>
<text class='examinationList_bodyItemfd1_0_c3_c0_c6_c2' >10:10</text>
</view>
</view>

    <view   class='flex flex-direction flex-wrap align-stretch examinationList_bodyItemfd1_0_c3_c1'  @tap.stop="handleJumpDiy" data-type="navigateTo" :data-url="`/pages/applicationCenter/detailsApproved/detailsApproved?type=2`"   >
            <view   class='flex flex-wrap align-center justify-between examinationList_bodyItemfd1_0_c3_c1_c0'     >
            <view   class='flex flex-wrap align-center'     >
        <text class='examinationList_bodyItemfd1_0_c3_c1_c0_c0_c0' >类型：</text>
<text class='examinationList_bodyItemfd1_0_c3_c1_c0_c0_c1' >借支</text>
</view>
    <view   class='flex flex-wrap align-center'     >
        <text class='examinationList_bodyItemfd1_0_c3_c1_c0_c1_c0' >审批中</text>
</view>
</view>
    <view   class='flex flex-wrap align-center examinationList_bodyItemfd1_0_c3_c1_c1'     >
        <text class='examinationList_bodyItemfd1_0_c3_c1_c1_c0' >申请人</text>
<text class='flex-sub examinationList_bodyItemfd1_0_c3_c1_c1_c1' >陈沉沉</text>
</view>
    <view   class='flex flex-wrap align-start examinationList_bodyItemfd1_0_c3_c1_c2'     >
        <text class='examinationList_bodyItemfd1_0_c3_c1_c2_c0' >审批事项</text>
<text class='flex-sub examinationList_bodyItemfd1_0_c3_c1_c2_c1' >山乡归园田居美丽乡村样板片区工程出差住宿</text>
</view>
    <view   class='flex flex-wrap align-center examinationList_bodyItemfd1_0_c3_c1_c3'     >
        <text class='examinationList_bodyItemfd1_0_c3_c1_c3_c0' >申请金额</text>
<text class='examinationList_bodyItemfd1_0_c3_c1_c3_c1' >￥</text>
<text class='examinationList_bodyItemfd1_0_c3_c1_c3_c2' >3500</text>
</view>
    <view   class='flex flex-wrap align-center examinationList_bodyItemfd1_0_c3_c1_c4'     >
        <text class='examinationList_bodyItemfd1_0_c3_c1_c4_c0' >项目编号</text>
<text class='flex-sub examinationList_bodyItemfd1_0_c3_c1_c4_c1' >2022-N4-001-J</text>
</view>
    <view   class='flex flex-wrap align-center examinationList_bodyItemfd1_0_c3_c1_c5'     >
        <text class='examinationList_bodyItemfd1_0_c3_c1_c5_c0' >项目名称</text>
<text class='flex-sub examinationList_bodyItemfd1_0_c3_c1_c5_c1' >二阳县光电产业园基础设施建设项目</text>
</view>
    <view   class='flex flex-wrap align-center examinationList_bodyItemfd1_0_c3_c1_c6'     >
        <text class='examinationList_bodyItemfd1_0_c3_c1_c6_c0' >申请时间</text>
<text class='examinationList_bodyItemfd1_0_c3_c1_c6_c1' >2022-08-08</text>
<text class='examinationList_bodyItemfd1_0_c3_c1_c6_c2' >10:10</text>
</view>
</view>

    <view   class='flex flex-direction flex-wrap align-stretch examinationList_bodyItemfd1_0_c3_c2'  @tap.stop="handleJumpDiy" data-type="navigateTo" :data-url="`/pages/applicationCenter/detailsApproved/detailsApproved?type=3`"   >
            <view   class='flex flex-wrap align-center justify-between examinationList_bodyItemfd1_0_c3_c2_c0'     >
            <view   class='flex flex-wrap align-center'     >
        <text class='examinationList_bodyItemfd1_0_c3_c2_c0_c0_c0' >类型：</text>
<text class='examinationList_bodyItemfd1_0_c3_c2_c0_c0_c1' >回款</text>
</view>
    <view   class='flex flex-wrap align-center'     >
        <text class='examinationList_bodyItemfd1_0_c3_c2_c0_c1_c0' >审批通过</text>
</view>
</view>
    <view   class='flex flex-wrap align-center examinationList_bodyItemfd1_0_c3_c2_c1'     >
        <text class='examinationList_bodyItemfd1_0_c3_c2_c1_c0' >申请人</text>
<text class='flex-sub examinationList_bodyItemfd1_0_c3_c2_c1_c1' >陈沉沉</text>
</view>
    <view   class='flex flex-wrap align-start examinationList_bodyItemfd1_0_c3_c2_c2'     >
        <text class='examinationList_bodyItemfd1_0_c3_c2_c2_c0' >审批事项</text>
<text class='flex-sub examinationList_bodyItemfd1_0_c3_c2_c2_c1' >山乡归园田居美丽乡村样板片区工程出差住宿</text>
</view>
    <view   class='flex flex-wrap align-center examinationList_bodyItemfd1_0_c3_c2_c3'     >
        <text class='examinationList_bodyItemfd1_0_c3_c2_c3_c0' >申请金额</text>
<text class='examinationList_bodyItemfd1_0_c3_c2_c3_c1' >￥</text>
<text class='examinationList_bodyItemfd1_0_c3_c2_c3_c2' >3500</text>
</view>
    <view   class='flex flex-wrap align-center examinationList_bodyItemfd1_0_c3_c2_c4'     >
        <text class='examinationList_bodyItemfd1_0_c3_c2_c4_c0' >项目编号</text>
<text class='flex-sub examinationList_bodyItemfd1_0_c3_c2_c4_c1' >2022-N4-001-J</text>
</view>
    <view   class='flex flex-wrap align-center examinationList_bodyItemfd1_0_c3_c2_c5'     >
        <text class='examinationList_bodyItemfd1_0_c3_c2_c5_c0' >项目名称</text>
<text class='flex-sub examinationList_bodyItemfd1_0_c3_c2_c5_c1' >二阳县光电产业园基础设施建设项目</text>
</view>
    <view   class='flex flex-wrap align-center examinationList_bodyItemfd1_0_c3_c2_c6'     >
        <text class='examinationList_bodyItemfd1_0_c3_c2_c6_c0' >申请时间</text>
<text class='examinationList_bodyItemfd1_0_c3_c2_c6_c1' >2022-08-08</text>
<text class='examinationList_bodyItemfd1_0_c3_c2_c6_c2' >10:10</text>
</view>
</view>

    <view   class='flex flex-direction flex-wrap align-stretch examinationList_bodyItemfd1_0_c3_c3'  @tap.stop="handleJumpDiy" data-type="navigateTo" :data-url="`/pages/applicationCenter/detailsApproved/detailsApproved?type=4`"   >
            <view   class='flex flex-wrap align-center justify-between examinationList_bodyItemfd1_0_c3_c3_c0'     >
            <view   class='flex flex-wrap align-center'     >
        <text class='examinationList_bodyItemfd1_0_c3_c3_c0_c0_c0' >类型：</text>
<text class='examinationList_bodyItemfd1_0_c3_c3_c0_c0_c1' >开票</text>
</view>
    <view   class='flex flex-wrap align-center'     >
        <text class='examinationList_bodyItemfd1_0_c3_c3_c0_c1_c0' >审批驳回</text>
</view>
</view>
    <view   class='flex flex-wrap align-center examinationList_bodyItemfd1_0_c3_c3_c1'     >
        <text class='examinationList_bodyItemfd1_0_c3_c3_c1_c0' >申请人</text>
<text class='flex-sub examinationList_bodyItemfd1_0_c3_c3_c1_c1' >陈沉沉</text>
</view>
    <view   class='flex flex-wrap align-start examinationList_bodyItemfd1_0_c3_c3_c2'     >
        <text class='examinationList_bodyItemfd1_0_c3_c3_c2_c0' >审批事项</text>
<text class='flex-sub examinationList_bodyItemfd1_0_c3_c3_c2_c1' >山乡归园田居美丽乡村样板片区工程出差住宿</text>
</view>
    <view   class='flex flex-wrap align-center examinationList_bodyItemfd1_0_c3_c3_c3'     >
        <text class='examinationList_bodyItemfd1_0_c3_c3_c3_c0' >申请金额</text>
<text class='examinationList_bodyItemfd1_0_c3_c3_c3_c1' >￥</text>
<text class='examinationList_bodyItemfd1_0_c3_c3_c3_c2' >3500</text>
</view>
    <view   class='flex flex-wrap align-center examinationList_bodyItemfd1_0_c3_c3_c4'     >
        <text class='examinationList_bodyItemfd1_0_c3_c3_c4_c0' >项目编号</text>
<text class='flex-sub examinationList_bodyItemfd1_0_c3_c3_c4_c1' >2022-N4-001-J</text>
</view>
    <view   class='flex flex-wrap align-center examinationList_bodyItemfd1_0_c3_c3_c5'     >
        <text class='examinationList_bodyItemfd1_0_c3_c3_c5_c0' >项目名称</text>
<text class='flex-sub examinationList_bodyItemfd1_0_c3_c3_c5_c1' >二阳县光电产业园基础设施建设项目</text>
</view>
    <view   class='flex flex-wrap align-center examinationList_bodyItemfd1_0_c3_c3_c6'     >
        <text class='examinationList_bodyItemfd1_0_c3_c3_c6_c0' >申请时间</text>
<text class='examinationList_bodyItemfd1_0_c3_c3_c6_c1' >2022-08-08</text>
<text class='examinationList_bodyItemfd1_0_c3_c3_c6_c2' >10:10</text>
</view>
</view>
</view>            <view class="benben_tabsfd1_0-body-item flex flex-direction flex-wrap align-stretch examinationList_bodyfd1_0_c4" v-if=" tabs == '2' " :id="`benben_tabsfd1_0-body-item-${'2'}`">
    <view   class='flex flex-direction flex-wrap align-stretch examinationList_bodyItemfd1_0_c4_c0'  @tap.stop="handleJumpDiy" data-type="navigateTo" :data-url="`/pages/applicationCenter/detailsApproved/detailsApproved?type=5`"   >
            <view   class='flex flex-wrap align-center justify-between examinationList_bodyItemfd1_0_c4_c0_c0'     >
            <view   class='flex flex-wrap align-center'     >
        <text class='examinationList_bodyItemfd1_0_c4_c0_c0_c0_c0' >类型：</text>
<text class='examinationList_bodyItemfd1_0_c4_c0_c0_c0_c1' >报销</text>
</view>
    <view   class='flex flex-wrap align-center'     >
        <text class='examinationList_bodyItemfd1_0_c4_c0_c0_c1_c0' >待审批</text>
</view>
</view>
    <view   class='flex flex-wrap align-center examinationList_bodyItemfd1_0_c4_c0_c1'     >
        <text class='examinationList_bodyItemfd1_0_c4_c0_c1_c0' >申请人</text>
<text class='flex-sub examinationList_bodyItemfd1_0_c4_c0_c1_c1' >陈沉沉</text>
</view>
    <view   class='flex flex-wrap align-start examinationList_bodyItemfd1_0_c4_c0_c2'     >
        <text class='examinationList_bodyItemfd1_0_c4_c0_c2_c0' >审批事项</text>
<text class='flex-sub examinationList_bodyItemfd1_0_c4_c0_c2_c1' >山乡归园田居美丽乡村样板片区工程出差住宿</text>
</view>
    <view   class='flex flex-wrap align-center examinationList_bodyItemfd1_0_c4_c0_c3'     >
        <text class='examinationList_bodyItemfd1_0_c4_c0_c3_c0' >申请金额</text>
<text class='examinationList_bodyItemfd1_0_c4_c0_c3_c1' >￥</text>
<text class='examinationList_bodyItemfd1_0_c4_c0_c3_c2' >3500</text>
</view>
    <view   class='flex flex-wrap align-center examinationList_bodyItemfd1_0_c4_c0_c4'     >
        <text class='examinationList_bodyItemfd1_0_c4_c0_c4_c0' >项目编号</text>
<text class='flex-sub examinationList_bodyItemfd1_0_c4_c0_c4_c1' >2022-N4-001-J</text>
</view>
    <view   class='flex flex-wrap align-center examinationList_bodyItemfd1_0_c4_c0_c5'     >
        <text class='examinationList_bodyItemfd1_0_c4_c0_c5_c0' >项目名称</text>
<text class='flex-sub examinationList_bodyItemfd1_0_c4_c0_c5_c1' >二阳县光电产业园基础设施建设项目</text>
</view>
    <view   class='flex flex-wrap align-center examinationList_bodyItemfd1_0_c4_c0_c6'     >
        <text class='examinationList_bodyItemfd1_0_c4_c0_c6_c0' >申请时间</text>
<text class='examinationList_bodyItemfd1_0_c4_c0_c6_c1' >2022-08-08</text>
<text class='examinationList_bodyItemfd1_0_c4_c0_c6_c2' >10:10</text>
</view>
    <view   class='flex flex-wrap align-center justify-end examinationList_bodyItemfd1_0_c4_c0_c7'     >
        <button class='examinationList_bodyItemfd1_0_c4_c0_c7_c0' @tap.stop="handleJumpDiy" data-type="navigateTo" :data-url="`/pages/applicationCenter/dismissApproval/dismissApproval`"  >驳回</button>
<button class='examinationList_bodyItemfd1_0_c4_c0_c7_c1' @tap.stop="handleJumpDiy" data-type="navigateTo" :data-url="`/pages/applicationCenter/agreeApproval/agreeApproval`"  >同意</button>
</view>
</view>
</view>            <view class="benben_tabsfd1_0-body-item flex flex-direction flex-wrap align-stretch examinationList_bodyfd1_0_c5" v-if=" tabs == '3' " :id="`benben_tabsfd1_0-body-item-${'3'}`">
    <view   class='flex flex-direction flex-wrap align-stretch examinationList_bodyItemfd1_0_c5_c0'  @tap.stop="handleJumpDiy" data-type="navigateTo" :data-url="`/pages/applicationCenter/detailsApproved/detailsApproved?type=6`"   >
            <view   class='flex flex-wrap align-center justify-between examinationList_bodyItemfd1_0_c5_c0_c0'     >
            <view   class='flex flex-wrap align-center'     >
        <text class='examinationList_bodyItemfd1_0_c5_c0_c0_c0_c0' >类型：</text>
<text class='examinationList_bodyItemfd1_0_c5_c0_c0_c0_c1' >回款</text>
</view>
    <view   class='flex flex-wrap align-center'     >
        <text class='examinationList_bodyItemfd1_0_c5_c0_c0_c1_c0' >审批通过</text>
</view>
</view>
    <view   class='flex flex-wrap align-center examinationList_bodyItemfd1_0_c5_c0_c1'     >
        <text class='examinationList_bodyItemfd1_0_c5_c0_c1_c0' >申请人</text>
<text class='flex-sub examinationList_bodyItemfd1_0_c5_c0_c1_c1' >陈沉沉</text>
</view>
    <view   class='flex flex-wrap align-start examinationList_bodyItemfd1_0_c5_c0_c2'     >
        <text class='examinationList_bodyItemfd1_0_c5_c0_c2_c0' >审批事项</text>
<text class='flex-sub examinationList_bodyItemfd1_0_c5_c0_c2_c1' >山乡归园田居美丽乡村样板片区工程二期款</text>
</view>
    <view   class='flex flex-wrap align-center examinationList_bodyItemfd1_0_c5_c0_c3'     >
        <text class='examinationList_bodyItemfd1_0_c5_c0_c3_c0' >申请金额</text>
<text class='examinationList_bodyItemfd1_0_c5_c0_c3_c1' >￥</text>
<text class='examinationList_bodyItemfd1_0_c5_c0_c3_c2' >3500</text>
</view>
    <view   class='flex flex-wrap align-center examinationList_bodyItemfd1_0_c5_c0_c4'     >
        <text class='examinationList_bodyItemfd1_0_c5_c0_c4_c0' >项目编号</text>
<text class='flex-sub examinationList_bodyItemfd1_0_c5_c0_c4_c1' >2022-N4-001-J</text>
</view>
    <view   class='flex flex-wrap align-center examinationList_bodyItemfd1_0_c5_c0_c5'     >
        <text class='examinationList_bodyItemfd1_0_c5_c0_c5_c0' >项目名称</text>
<text class='flex-sub examinationList_bodyItemfd1_0_c5_c0_c5_c1' >二阳县光电产业园基础设施建设项目</text>
</view>
    <view   class='flex flex-wrap align-center examinationList_bodyItemfd1_0_c5_c0_c6'     >
        <text class='examinationList_bodyItemfd1_0_c5_c0_c6_c0' >申请时间</text>
<text class='examinationList_bodyItemfd1_0_c5_c0_c6_c1' >2022-08-08</text>
<text class='examinationList_bodyItemfd1_0_c5_c0_c6_c2' >10:10</text>
</view>
</view>

    <view   class='flex flex-direction flex-wrap align-stretch examinationList_bodyItemfd1_0_c5_c1'  @tap.stop="handleJumpDiy" data-type="navigateTo" :data-url="`/pages/applicationCenter/detailsApproved/detailsApproved?type=7`"   >
            <view   class='flex flex-wrap align-center justify-between examinationList_bodyItemfd1_0_c5_c1_c0'     >
            <view   class='flex flex-wrap align-center'     >
        <text class='examinationList_bodyItemfd1_0_c5_c1_c0_c0_c0' >类型：</text>
<text class='examinationList_bodyItemfd1_0_c5_c1_c0_c0_c1' >开票</text>
</view>
    <view   class='flex flex-wrap align-center'     >
        <text class='examinationList_bodyItemfd1_0_c5_c1_c0_c1_c0' >审批驳回</text>
</view>
</view>
    <view   class='flex flex-wrap align-center examinationList_bodyItemfd1_0_c5_c1_c1'     >
        <text class='examinationList_bodyItemfd1_0_c5_c1_c1_c0' >申请人</text>
<text class='flex-sub examinationList_bodyItemfd1_0_c5_c1_c1_c1' >陈沉沉</text>
</view>
    <view   class='flex flex-wrap align-start examinationList_bodyItemfd1_0_c5_c1_c2'     >
        <text class='examinationList_bodyItemfd1_0_c5_c1_c2_c0' >审批事项</text>
<text class='flex-sub examinationList_bodyItemfd1_0_c5_c1_c2_c1' >山乡归园田居美丽乡村样板片区工程二期款</text>
</view>
    <view   class='flex flex-wrap align-center examinationList_bodyItemfd1_0_c5_c1_c3'     >
        <text class='examinationList_bodyItemfd1_0_c5_c1_c3_c0' >申请金额</text>
<text class='examinationList_bodyItemfd1_0_c5_c1_c3_c1' >￥</text>
<text class='examinationList_bodyItemfd1_0_c5_c1_c3_c2' >3500</text>
</view>
    <view   class='flex flex-wrap align-center examinationList_bodyItemfd1_0_c5_c1_c4'     >
        <text class='examinationList_bodyItemfd1_0_c5_c1_c4_c0' >项目编号</text>
<text class='flex-sub examinationList_bodyItemfd1_0_c5_c1_c4_c1' >2022-N4-001-J</text>
</view>
    <view   class='flex flex-wrap align-center examinationList_bodyItemfd1_0_c5_c1_c5'     >
        <text class='examinationList_bodyItemfd1_0_c5_c1_c5_c0' >项目名称</text>
<text class='flex-sub examinationList_bodyItemfd1_0_c5_c1_c5_c1' >二阳县光电产业园基础设施建设项目</text>
</view>
    <view   class='flex flex-wrap align-center examinationList_bodyItemfd1_0_c5_c1_c6'     >
        <text class='examinationList_bodyItemfd1_0_c5_c1_c6_c0' >申请时间</text>
<text class='examinationList_bodyItemfd1_0_c5_c1_c6_c1' >2022-08-08</text>
<text class='examinationList_bodyItemfd1_0_c5_c1_c6_c2' >10:10</text>
</view>
</view>
</view>            <view class="benben_tabsfd1_0-body-item flex flex-direction flex-wrap align-stretch examinationList_bodyfd1_0_c6" v-if=" tabs == '4' " :id="`benben_tabsfd1_0-body-item-${'4'}`">
    <view   class='flex flex-direction flex-wrap align-stretch examinationList_bodyItemfd1_0_c6_c0'  @tap.stop="handleJumpDiy" data-type="navigateTo" :data-url="`/pages/applicationCenter/detailsApproved/detailsApproved?type=8`"   >
            <view   class='flex flex-wrap align-center justify-between examinationList_bodyItemfd1_0_c6_c0_c0'     >
            <view   class='flex flex-wrap align-center'     >
        <text class='examinationList_bodyItemfd1_0_c6_c0_c0_c0_c0' >类型：</text>
<text class='examinationList_bodyItemfd1_0_c6_c0_c0_c0_c1' >回款</text>
</view>
    <view   class='flex flex-wrap align-center'     >
        <text class='examinationList_bodyItemfd1_0_c6_c0_c0_c1_c0' >审批通过</text>
</view>
</view>
    <view   class='flex flex-wrap align-center examinationList_bodyItemfd1_0_c6_c0_c1'     >
        <text class='examinationList_bodyItemfd1_0_c6_c0_c1_c0' >申请人</text>
<text class='flex-sub examinationList_bodyItemfd1_0_c6_c0_c1_c1' >陈沉沉</text>
</view>
    <view   class='flex flex-wrap align-start examinationList_bodyItemfd1_0_c6_c0_c2'     >
        <text class='examinationList_bodyItemfd1_0_c6_c0_c2_c0' >审批事项</text>
<text class='flex-sub examinationList_bodyItemfd1_0_c6_c0_c2_c1' >山乡归园田居美丽乡村样板片区工程二期款</text>
</view>
    <view   class='flex flex-wrap align-center examinationList_bodyItemfd1_0_c6_c0_c3'     >
        <text class='examinationList_bodyItemfd1_0_c6_c0_c3_c0' >申请金额</text>
<text class='examinationList_bodyItemfd1_0_c6_c0_c3_c1' >￥</text>
<text class='examinationList_bodyItemfd1_0_c6_c0_c3_c2' >3500</text>
</view>
    <view   class='flex flex-wrap align-center examinationList_bodyItemfd1_0_c6_c0_c4'     >
        <text class='examinationList_bodyItemfd1_0_c6_c0_c4_c0' >项目编号</text>
<text class='flex-sub examinationList_bodyItemfd1_0_c6_c0_c4_c1' >2022-N4-001-J</text>
</view>
    <view   class='flex flex-wrap align-center examinationList_bodyItemfd1_0_c6_c0_c5'     >
        <text class='examinationList_bodyItemfd1_0_c6_c0_c5_c0' >项目名称</text>
<text class='flex-sub examinationList_bodyItemfd1_0_c6_c0_c5_c1' >二阳县光电产业园基础设施建设项目</text>
</view>
    <view   class='flex flex-wrap align-center examinationList_bodyItemfd1_0_c6_c0_c6'     >
        <text class='examinationList_bodyItemfd1_0_c6_c0_c6_c0' >申请时间</text>
<text class='examinationList_bodyItemfd1_0_c6_c0_c6_c1' >2022-08-08</text>
<text class='examinationList_bodyItemfd1_0_c6_c0_c6_c2' >10:10</text>
</view>
</view>

    <view   class='flex flex-direction flex-wrap align-stretch examinationList_bodyItemfd1_0_c6_c1'  @tap.stop="handleJumpDiy" data-type="navigateTo" :data-url="`/pages/applicationCenter/detailsApproved/detailsApproved?type=9`"   >
            <view   class='flex flex-wrap align-center justify-between examinationList_bodyItemfd1_0_c6_c1_c0'     >
            <view   class='flex flex-wrap align-center'     >
        <text class='examinationList_bodyItemfd1_0_c6_c1_c0_c0_c0' >类型：</text>
<text class='examinationList_bodyItemfd1_0_c6_c1_c0_c0_c1' >回款</text>
</view>
    <view   class='flex flex-wrap align-center'     >
        <text class='examinationList_bodyItemfd1_0_c6_c1_c0_c1_c0' >审批驳回</text>
</view>
</view>
    <view   class='flex flex-wrap align-center examinationList_bodyItemfd1_0_c6_c1_c1'     >
        <text class='examinationList_bodyItemfd1_0_c6_c1_c1_c0' >申请人</text>
<text class='flex-sub examinationList_bodyItemfd1_0_c6_c1_c1_c1' >陈沉沉</text>
</view>
    <view   class='flex flex-wrap align-start examinationList_bodyItemfd1_0_c6_c1_c2'     >
        <text class='examinationList_bodyItemfd1_0_c6_c1_c2_c0' >审批事项</text>
<text class='flex-sub examinationList_bodyItemfd1_0_c6_c1_c2_c1' >山乡归园田居美丽乡村样板片区工程二期款</text>
</view>
    <view   class='flex flex-wrap align-center examinationList_bodyItemfd1_0_c6_c1_c3'     >
        <text class='examinationList_bodyItemfd1_0_c6_c1_c3_c0' >申请金额</text>
<text class='examinationList_bodyItemfd1_0_c6_c1_c3_c1' >￥</text>
<text class='examinationList_bodyItemfd1_0_c6_c1_c3_c2' >3500</text>
</view>
    <view   class='flex flex-wrap align-center examinationList_bodyItemfd1_0_c6_c1_c4'     >
        <text class='examinationList_bodyItemfd1_0_c6_c1_c4_c0' >项目编号</text>
<text class='flex-sub examinationList_bodyItemfd1_0_c6_c1_c4_c1' >2022-N4-001-J</text>
</view>
    <view   class='flex flex-wrap align-center examinationList_bodyItemfd1_0_c6_c1_c5'     >
        <text class='examinationList_bodyItemfd1_0_c6_c1_c5_c0' >项目名称</text>
<text class='flex-sub examinationList_bodyItemfd1_0_c6_c1_c5_c1' >二阳县光电产业园基础设施建设项目</text>
</view>
    <view   class='flex flex-wrap align-center examinationList_bodyItemfd1_0_c6_c1_c6'     >
        <text class='examinationList_bodyItemfd1_0_c6_c1_c6_c0' >申请时间</text>
<text class='examinationList_bodyItemfd1_0_c6_c1_c6_c1' >2022-08-08</text>
<text class='examinationList_bodyItemfd1_0_c6_c1_c6_c2' >10:10</text>
</view>
</view>
</view>
        </view>
</view>
</view>
<!---flex布局flex布局结束-->
    <benben-popup v-model="popupShow1666073323478" :mask="true" mode="center">
            <benben-calendar :query="benbenCalendar" >
    </benben-calendar>
    </benben-popup>
<benben-popup v-model="popupShow1666073600970" :mask="true"  mode='bottom'>
    <!---flex布局flex布局开始-->
 <view class="flex flex-direction flex-wrap align-stretch benben-flex-layout"   >
            <view   class='flex flex-direction flex-wrap align-stretch examinationList_fd3_0'     >
            <view   class='flex flex-wrap align-center justify-between examinationList_fd3_0_c0'     >
        <text class='examinationList_fd3_0_c0_c0'    @tap.stop="popupShow1666073600970=false" >取消</text>
<text class='examinationList_fd3_0_c0_c1' >选择申请人</text>
<text class='examinationList_fd3_0_c0_c2' >确定</text>
</view>
    <benben-select-diy ref="showSelectPopup1666073558200" class-name='flex flex-direction align-stretch flex' :items.sync="cut_name" v-model="cut_id"  default-type="value" default-label="name" :allow-cancel='false' type="radio" :disabled='false'  >
    <template v-for = '(item,key0) in cut_name'>
            <view v-if="item.isSelected"  class='flex align-center justify-between flex examinationList_fd3_0_c1_c0' :key="key0" @tap="$refs.showSelectPopup1666073558200.tapHandle(key0)"     >
        <text class='examinationList_fd3_0_c1_c0_c0' >{{item.name}}</text>
<image class='examinationList_fd3_0_c1_c0_c1' mode="aspectFit"  :src='STATIC_URL+"4.png"'></image>
</view>    <view  v-else  class='flex align-center justify-between flex examinationList_fd3_0_c1_c1' :key="key0" @tap="$refs.showSelectPopup1666073558200.tapHandle(key0)"     >
        <text class='examinationList_fd3_0_c1_c1_c0' >{{item.name}}</text>
<image class='examinationList_fd3_0_c1_c1_c1' mode="aspectFit"  :src='STATIC_URL+"5.png"'></image>
</view></template></benben-select-diy>
</view>
</view>
<!---flex布局flex布局结束-->
</benben-popup>
    
    </view>
</template>
<script>
    
    export default {
        components:{},
        
        data(){
			return {"popupShow1666073600970":false,"popupShow1666073323478":false,"benbenCalendar":{'width': 622,'background': '#ffffff','borderRadius': '24rpx 24rpx 24rpx 24rpx','mode': 'range','future': false,'changeTitle': true,'changeYear': true,'changeMonth': true,'yearArrowColor': '#666666','monthArrowColor': '#999999','startText': '开始','endText': '结束','activeBgColor': 'rgba(41,121,255,1)','rangeBgColor': 'rgba(41,121,255,0.13)'},"tabsInfofd1_0":{ lineleft: '', lineWidth: '', moveX: 0, scrollX: 0, PageScrollX: 0 },"tabs":"1","cut_id":"","cut_name":[{"name":"全部","value":"1","image":""},{"name":"阳阳","value":"2","image":""},{"name":"张章章","value":"3","image":""},{"name":"徐栩栩","value":"4","image":""},{"name":"罗洛洛","value":"5","image":""},{"name":"张章章","value":"6","image":""}]};
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
            background:#F8F8F8;background-size: 100% auto !important;
        }
    .examinationList_flex_0{
        border-bottom:1px solid rgba(238, 238, 238, 1);background:#fff;background-size: 100% !important;width:750rpx;height:88rpx;overflow:hidden;z-index:10;top:0rpx;background-size:100% auto !important;
    }
    .examinationList_fd0_2{
        width:100rpx;height:88rpx;margin:0rpx 32rpx 0rpx 0rpx;
    }
    .examinationList_fd0_1{
        color:#000000;font-size:36rpx;font-weight:500;line-height:50rpx;
    }
    .examinationList_fd0_0{
        width:100rpx;height:88rpx;margin:0rpx 0rpx 0rpx 32rpx;
    }
    .examinationList_bodyItemfd1_0_c6_c1_c6_c2{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 20rpx;
    }
    .examinationList_bodyItemfd1_0_c6_c1_c6_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 22rpx;
    }
    .examinationList_bodyItemfd1_0_c6_c1_c6_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .examinationList_bodyItemfd1_0_c6_c1_c6{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .examinationList_bodyItemfd1_0_c6_c1_c5_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 22rpx;-webkit-line-clamp:1;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;
    }
    .examinationList_bodyItemfd1_0_c6_c1_c5_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .examinationList_bodyItemfd1_0_c6_c1_c5{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .examinationList_bodyItemfd1_0_c6_c1_c4_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 22rpx;
    }
    .examinationList_bodyItemfd1_0_c6_c1_c4_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .examinationList_bodyItemfd1_0_c6_c1_c4{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .examinationList_bodyItemfd1_0_c6_c1_c3_c2{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .examinationList_bodyItemfd1_0_c6_c1_c3_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 22rpx;
    }
    .examinationList_bodyItemfd1_0_c6_c1_c3_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .examinationList_bodyItemfd1_0_c6_c1_c3{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .examinationList_bodyItemfd1_0_c6_c1_c2_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 22rpx;
    }
    .examinationList_bodyItemfd1_0_c6_c1_c2_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .examinationList_bodyItemfd1_0_c6_c1_c2{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .examinationList_bodyItemfd1_0_c6_c1_c1_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 50rpx;
    }
    .examinationList_bodyItemfd1_0_c6_c1_c1_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .examinationList_bodyItemfd1_0_c6_c1_c1{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .examinationList_bodyItemfd1_0_c6_c1_c0_c1_c0{
        color:rgba(230, 53, 65, 1);font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .examinationList_bodyItemfd1_0_c6_c1_c0_c0_c1{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .examinationList_bodyItemfd1_0_c6_c1_c0_c0_c0{
        color:rgba(102, 102, 102, 1);font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .examinationList_bodyItemfd1_0_c6_c1_c0{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:0rpx 0rpx 20rpx 0rpx;
    }
    .examinationList_bodyItemfd1_0_c6_c1{
        background:#fff;background-size: 100% !important;border-radius:16rpx 16rpx 16rpx 16rpx;padding:32rpx 24rpx 32rpx 24rpx;margin:20rpx 0rpx 0rpx 0rpx;
    }
    .examinationList_bodyItemfd1_0_c6_c0_c6_c2{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 20rpx;
    }
    .examinationList_bodyItemfd1_0_c6_c0_c6_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 22rpx;
    }
    .examinationList_bodyItemfd1_0_c6_c0_c6_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .examinationList_bodyItemfd1_0_c6_c0_c6{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .examinationList_bodyItemfd1_0_c6_c0_c5_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 22rpx;-webkit-line-clamp:1;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;
    }
    .examinationList_bodyItemfd1_0_c6_c0_c5_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .examinationList_bodyItemfd1_0_c6_c0_c5{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .examinationList_bodyItemfd1_0_c6_c0_c4_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 22rpx;
    }
    .examinationList_bodyItemfd1_0_c6_c0_c4_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .examinationList_bodyItemfd1_0_c6_c0_c4{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .examinationList_bodyItemfd1_0_c6_c0_c3_c2{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .examinationList_bodyItemfd1_0_c6_c0_c3_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 22rpx;
    }
    .examinationList_bodyItemfd1_0_c6_c0_c3_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .examinationList_bodyItemfd1_0_c6_c0_c3{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .examinationList_bodyItemfd1_0_c6_c0_c2_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 22rpx;
    }
    .examinationList_bodyItemfd1_0_c6_c0_c2_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .examinationList_bodyItemfd1_0_c6_c0_c2{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .examinationList_bodyItemfd1_0_c6_c0_c1_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 50rpx;
    }
    .examinationList_bodyItemfd1_0_c6_c0_c1_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .examinationList_bodyItemfd1_0_c6_c0_c1{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .examinationList_bodyItemfd1_0_c6_c0_c0_c1_c0{
        color:rgba(29, 185, 153, 1);font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .examinationList_bodyItemfd1_0_c6_c0_c0_c0_c1{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .examinationList_bodyItemfd1_0_c6_c0_c0_c0_c0{
        color:rgba(102, 102, 102, 1);font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .examinationList_bodyItemfd1_0_c6_c0_c0{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:0rpx 0rpx 20rpx 0rpx;
    }
    .examinationList_bodyItemfd1_0_c6_c0{
        background:#fff;background-size: 100% !important;border-radius:16rpx 16rpx 16rpx 16rpx;padding:32rpx 24rpx 32rpx 24rpx;margin:20rpx 0rpx 0rpx 0rpx;
    }
    .examinationList_bodyfd1_0_c6{
        padding:0rpx 24rpx 0rpx 24rpx;
    }
    .examinationList_titlefd1_0_c6{
        color:rgba(102, 102, 102, 1);font-size:28rpx;
    }
    .examinationList_bodyItemfd1_0_c5_c1_c6_c2{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 20rpx;
    }
    .examinationList_bodyItemfd1_0_c5_c1_c6_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 22rpx;
    }
    .examinationList_bodyItemfd1_0_c5_c1_c6_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .examinationList_bodyItemfd1_0_c5_c1_c6{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .examinationList_bodyItemfd1_0_c5_c1_c5_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 22rpx;-webkit-line-clamp:1;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;
    }
    .examinationList_bodyItemfd1_0_c5_c1_c5_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .examinationList_bodyItemfd1_0_c5_c1_c5{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .examinationList_bodyItemfd1_0_c5_c1_c4_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 22rpx;
    }
    .examinationList_bodyItemfd1_0_c5_c1_c4_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .examinationList_bodyItemfd1_0_c5_c1_c4{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .examinationList_bodyItemfd1_0_c5_c1_c3_c2{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .examinationList_bodyItemfd1_0_c5_c1_c3_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 22rpx;
    }
    .examinationList_bodyItemfd1_0_c5_c1_c3_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .examinationList_bodyItemfd1_0_c5_c1_c3{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .examinationList_bodyItemfd1_0_c5_c1_c2_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 22rpx;
    }
    .examinationList_bodyItemfd1_0_c5_c1_c2_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .examinationList_bodyItemfd1_0_c5_c1_c2{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .examinationList_bodyItemfd1_0_c5_c1_c1_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 50rpx;
    }
    .examinationList_bodyItemfd1_0_c5_c1_c1_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .examinationList_bodyItemfd1_0_c5_c1_c1{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .examinationList_bodyItemfd1_0_c5_c1_c0_c1_c0{
        color:#0B1898;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .examinationList_bodyItemfd1_0_c5_c1_c0_c0_c1{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .examinationList_bodyItemfd1_0_c5_c1_c0_c0_c0{
        color:rgba(102, 102, 102, 1);font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .examinationList_bodyItemfd1_0_c5_c1_c0{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:0rpx 0rpx 20rpx 0rpx;
    }
    .examinationList_bodyItemfd1_0_c5_c1{
        background:#fff;background-size: 100% !important;border-radius:16rpx 16rpx 16rpx 16rpx;padding:32rpx 24rpx 32rpx 24rpx;margin:20rpx 0rpx 0rpx 0rpx;
    }
    .examinationList_bodyItemfd1_0_c5_c0_c6_c2{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 20rpx;
    }
    .examinationList_bodyItemfd1_0_c5_c0_c6_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 22rpx;
    }
    .examinationList_bodyItemfd1_0_c5_c0_c6_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .examinationList_bodyItemfd1_0_c5_c0_c6{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .examinationList_bodyItemfd1_0_c5_c0_c5_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 22rpx;-webkit-line-clamp:1;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;
    }
    .examinationList_bodyItemfd1_0_c5_c0_c5_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .examinationList_bodyItemfd1_0_c5_c0_c5{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .examinationList_bodyItemfd1_0_c5_c0_c4_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 22rpx;
    }
    .examinationList_bodyItemfd1_0_c5_c0_c4_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .examinationList_bodyItemfd1_0_c5_c0_c4{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .examinationList_bodyItemfd1_0_c5_c0_c3_c2{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .examinationList_bodyItemfd1_0_c5_c0_c3_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 22rpx;
    }
    .examinationList_bodyItemfd1_0_c5_c0_c3_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .examinationList_bodyItemfd1_0_c5_c0_c3{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .examinationList_bodyItemfd1_0_c5_c0_c2_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 22rpx;
    }
    .examinationList_bodyItemfd1_0_c5_c0_c2_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .examinationList_bodyItemfd1_0_c5_c0_c2{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .examinationList_bodyItemfd1_0_c5_c0_c1_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 50rpx;
    }
    .examinationList_bodyItemfd1_0_c5_c0_c1_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .examinationList_bodyItemfd1_0_c5_c0_c1{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .examinationList_bodyItemfd1_0_c5_c0_c0_c1_c0{
        color:#0B1898;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .examinationList_bodyItemfd1_0_c5_c0_c0_c0_c1{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .examinationList_bodyItemfd1_0_c5_c0_c0_c0_c0{
        color:rgba(102, 102, 102, 1);font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .examinationList_bodyItemfd1_0_c5_c0_c0{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:0rpx 0rpx 20rpx 0rpx;
    }
    .examinationList_bodyItemfd1_0_c5_c0{
        background:#fff;background-size: 100% !important;border-radius:16rpx 16rpx 16rpx 16rpx;padding:32rpx 24rpx 32rpx 24rpx;margin:20rpx 0rpx 0rpx 0rpx;
    }
    .examinationList_bodyfd1_0_c5{
        padding:0rpx 24rpx 0rpx 24rpx;
    }
    .examinationList_titlefd1_0_c5{
        font-size:28rpx;color:rgba(102, 102, 102, 1);
    }
    .examinationList_bodyItemfd1_0_c4_c0_c7_c1{
        background:rgba(11, 24, 152, 1);background-size: 100% !important;border-radius:28rpx 28rpx 28rpx 28rpx;font-size:24rpx;color:#fff;width:160rpx;height:56rpx;line-height:56rpx;margin:0rpx 0rpx 0rpx 24rpx;
    }
    .examinationList_bodyItemfd1_0_c4_c0_c7_c0{
        border:1px solid #666666;background:#fff;background-size: 100% !important;border-radius:28rpx 28rpx 28rpx 28rpx;font-size:24rpx;color:#333;width:160rpx;height:56rpx;line-height:56rpx;
    }
    .examinationList_bodyItemfd1_0_c4_c0_c7{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .examinationList_bodyItemfd1_0_c4_c0_c6_c2{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 20rpx;
    }
    .examinationList_bodyItemfd1_0_c4_c0_c6_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 22rpx;
    }
    .examinationList_bodyItemfd1_0_c4_c0_c6_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .examinationList_bodyItemfd1_0_c4_c0_c6{
        border-bottom:1px solid rgba(238, 238, 238, 1);margin:32rpx 0rpx 0rpx 0rpx;padding:0rpx 0rpx 32rpx 0rpx;
    }
    .examinationList_bodyItemfd1_0_c4_c0_c5_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 22rpx;-webkit-line-clamp:1;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;
    }
    .examinationList_bodyItemfd1_0_c4_c0_c5_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .examinationList_bodyItemfd1_0_c4_c0_c5{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .examinationList_bodyItemfd1_0_c4_c0_c4_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 22rpx;
    }
    .examinationList_bodyItemfd1_0_c4_c0_c4_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .examinationList_bodyItemfd1_0_c4_c0_c4{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .examinationList_bodyItemfd1_0_c4_c0_c3_c2{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .examinationList_bodyItemfd1_0_c4_c0_c3_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 22rpx;
    }
    .examinationList_bodyItemfd1_0_c4_c0_c3_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .examinationList_bodyItemfd1_0_c4_c0_c3{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .examinationList_bodyItemfd1_0_c4_c0_c2_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 22rpx;
    }
    .examinationList_bodyItemfd1_0_c4_c0_c2_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .examinationList_bodyItemfd1_0_c4_c0_c2{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .examinationList_bodyItemfd1_0_c4_c0_c1_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 50rpx;
    }
    .examinationList_bodyItemfd1_0_c4_c0_c1_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .examinationList_bodyItemfd1_0_c4_c0_c1{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .examinationList_bodyItemfd1_0_c4_c0_c0_c1_c0{
        color:#0B1898;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .examinationList_bodyItemfd1_0_c4_c0_c0_c0_c1{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .examinationList_bodyItemfd1_0_c4_c0_c0_c0_c0{
        color:rgba(102, 102, 102, 1);font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .examinationList_bodyItemfd1_0_c4_c0_c0{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:0rpx 0rpx 20rpx 0rpx;
    }
    .examinationList_bodyItemfd1_0_c4_c0{
        background:#fff;background-size: 100% !important;border-radius:16rpx 16rpx 16rpx 16rpx;padding:32rpx 24rpx 32rpx 24rpx;margin:20rpx 0rpx 0rpx 0rpx;
    }
    .examinationList_bodyfd1_0_c4{
        padding:0rpx 24rpx 0rpx 24rpx;
    }
    .examinationList_titlefd1_0_c4{
        font-size:28rpx;color:rgba(102, 102, 102, 1);
    }
    .examinationList_bodyItemfd1_0_c3_c3_c6_c2{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 20rpx;
    }
    .examinationList_bodyItemfd1_0_c3_c3_c6_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 22rpx;
    }
    .examinationList_bodyItemfd1_0_c3_c3_c6_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .examinationList_bodyItemfd1_0_c3_c3_c6{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .examinationList_bodyItemfd1_0_c3_c3_c5_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 22rpx;-webkit-line-clamp:1;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;
    }
    .examinationList_bodyItemfd1_0_c3_c3_c5_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .examinationList_bodyItemfd1_0_c3_c3_c5{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .examinationList_bodyItemfd1_0_c3_c3_c4_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 22rpx;
    }
    .examinationList_bodyItemfd1_0_c3_c3_c4_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .examinationList_bodyItemfd1_0_c3_c3_c4{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .examinationList_bodyItemfd1_0_c3_c3_c3_c2{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .examinationList_bodyItemfd1_0_c3_c3_c3_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 22rpx;
    }
    .examinationList_bodyItemfd1_0_c3_c3_c3_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .examinationList_bodyItemfd1_0_c3_c3_c3{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .examinationList_bodyItemfd1_0_c3_c3_c2_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 22rpx;
    }
    .examinationList_bodyItemfd1_0_c3_c3_c2_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .examinationList_bodyItemfd1_0_c3_c3_c2{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .examinationList_bodyItemfd1_0_c3_c3_c1_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 50rpx;
    }
    .examinationList_bodyItemfd1_0_c3_c3_c1_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .examinationList_bodyItemfd1_0_c3_c3_c1{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .examinationList_bodyItemfd1_0_c3_c3_c0_c1_c0{
        color:#0B1898;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .examinationList_bodyItemfd1_0_c3_c3_c0_c0_c1{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .examinationList_bodyItemfd1_0_c3_c3_c0_c0_c0{
        color:rgba(102, 102, 102, 1);font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .examinationList_bodyItemfd1_0_c3_c3_c0{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:0rpx 0rpx 20rpx 0rpx;
    }
    .examinationList_bodyItemfd1_0_c3_c3{
        background:#fff;background-size: 100% !important;border-radius:16rpx 16rpx 16rpx 16rpx;padding:32rpx 24rpx 32rpx 24rpx;margin:20rpx 0rpx 0rpx 0rpx;
    }
    .examinationList_bodyItemfd1_0_c3_c2_c6_c2{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 20rpx;
    }
    .examinationList_bodyItemfd1_0_c3_c2_c6_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 22rpx;
    }
    .examinationList_bodyItemfd1_0_c3_c2_c6_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .examinationList_bodyItemfd1_0_c3_c2_c6{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .examinationList_bodyItemfd1_0_c3_c2_c5_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 22rpx;-webkit-line-clamp:1;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;
    }
    .examinationList_bodyItemfd1_0_c3_c2_c5_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .examinationList_bodyItemfd1_0_c3_c2_c5{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .examinationList_bodyItemfd1_0_c3_c2_c4_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 22rpx;
    }
    .examinationList_bodyItemfd1_0_c3_c2_c4_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .examinationList_bodyItemfd1_0_c3_c2_c4{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .examinationList_bodyItemfd1_0_c3_c2_c3_c2{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .examinationList_bodyItemfd1_0_c3_c2_c3_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 22rpx;
    }
    .examinationList_bodyItemfd1_0_c3_c2_c3_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .examinationList_bodyItemfd1_0_c3_c2_c3{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .examinationList_bodyItemfd1_0_c3_c2_c2_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 22rpx;
    }
    .examinationList_bodyItemfd1_0_c3_c2_c2_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .examinationList_bodyItemfd1_0_c3_c2_c2{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .examinationList_bodyItemfd1_0_c3_c2_c1_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 50rpx;
    }
    .examinationList_bodyItemfd1_0_c3_c2_c1_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .examinationList_bodyItemfd1_0_c3_c2_c1{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .examinationList_bodyItemfd1_0_c3_c2_c0_c1_c0{
        color:#0B1898;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .examinationList_bodyItemfd1_0_c3_c2_c0_c0_c1{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .examinationList_bodyItemfd1_0_c3_c2_c0_c0_c0{
        color:rgba(102, 102, 102, 1);font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .examinationList_bodyItemfd1_0_c3_c2_c0{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:0rpx 0rpx 20rpx 0rpx;
    }
    .examinationList_bodyItemfd1_0_c3_c2{
        background:#fff;background-size: 100% !important;border-radius:16rpx 16rpx 16rpx 16rpx;padding:32rpx 24rpx 32rpx 24rpx;margin:20rpx 0rpx 0rpx 0rpx;
    }
    .examinationList_bodyItemfd1_0_c3_c1_c6_c2{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 20rpx;
    }
    .examinationList_bodyItemfd1_0_c3_c1_c6_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 22rpx;
    }
    .examinationList_bodyItemfd1_0_c3_c1_c6_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .examinationList_bodyItemfd1_0_c3_c1_c6{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .examinationList_bodyItemfd1_0_c3_c1_c5_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 22rpx;-webkit-line-clamp:1;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;
    }
    .examinationList_bodyItemfd1_0_c3_c1_c5_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .examinationList_bodyItemfd1_0_c3_c1_c5{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .examinationList_bodyItemfd1_0_c3_c1_c4_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 22rpx;
    }
    .examinationList_bodyItemfd1_0_c3_c1_c4_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .examinationList_bodyItemfd1_0_c3_c1_c4{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .examinationList_bodyItemfd1_0_c3_c1_c3_c2{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .examinationList_bodyItemfd1_0_c3_c1_c3_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 22rpx;
    }
    .examinationList_bodyItemfd1_0_c3_c1_c3_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .examinationList_bodyItemfd1_0_c3_c1_c3{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .examinationList_bodyItemfd1_0_c3_c1_c2_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 22rpx;
    }
    .examinationList_bodyItemfd1_0_c3_c1_c2_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .examinationList_bodyItemfd1_0_c3_c1_c2{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .examinationList_bodyItemfd1_0_c3_c1_c1_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 50rpx;
    }
    .examinationList_bodyItemfd1_0_c3_c1_c1_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .examinationList_bodyItemfd1_0_c3_c1_c1{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .examinationList_bodyItemfd1_0_c3_c1_c0_c1_c0{
        color:#0B1898;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .examinationList_bodyItemfd1_0_c3_c1_c0_c0_c1{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .examinationList_bodyItemfd1_0_c3_c1_c0_c0_c0{
        color:rgba(102, 102, 102, 1);font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .examinationList_bodyItemfd1_0_c3_c1_c0{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:0rpx 0rpx 20rpx 0rpx;
    }
    .examinationList_bodyItemfd1_0_c3_c1{
        background:#fff;background-size: 100% !important;border-radius:16rpx 16rpx 16rpx 16rpx;padding:32rpx 24rpx 32rpx 24rpx;margin:20rpx 0rpx 0rpx 0rpx;
    }
    .examinationList_bodyItemfd1_0_c3_c0_c6_c2{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 20rpx;
    }
    .examinationList_bodyItemfd1_0_c3_c0_c6_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 22rpx;
    }
    .examinationList_bodyItemfd1_0_c3_c0_c6_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .examinationList_bodyItemfd1_0_c3_c0_c6{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .examinationList_bodyItemfd1_0_c3_c0_c5_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 22rpx;-webkit-line-clamp:1;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;
    }
    .examinationList_bodyItemfd1_0_c3_c0_c5_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .examinationList_bodyItemfd1_0_c3_c0_c5{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .examinationList_bodyItemfd1_0_c3_c0_c4_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 22rpx;
    }
    .examinationList_bodyItemfd1_0_c3_c0_c4_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .examinationList_bodyItemfd1_0_c3_c0_c4{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .examinationList_bodyItemfd1_0_c3_c0_c3_c2{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .examinationList_bodyItemfd1_0_c3_c0_c3_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 22rpx;
    }
    .examinationList_bodyItemfd1_0_c3_c0_c3_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .examinationList_bodyItemfd1_0_c3_c0_c3{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .examinationList_bodyItemfd1_0_c3_c0_c2_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 22rpx;
    }
    .examinationList_bodyItemfd1_0_c3_c0_c2_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .examinationList_bodyItemfd1_0_c3_c0_c2{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .examinationList_bodyItemfd1_0_c3_c0_c1_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 50rpx;
    }
    .examinationList_bodyItemfd1_0_c3_c0_c1_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .examinationList_bodyItemfd1_0_c3_c0_c1{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .examinationList_bodyItemfd1_0_c3_c0_c0_c1_c0{
        color:#0B1898;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .examinationList_bodyItemfd1_0_c3_c0_c0_c0_c1{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .examinationList_bodyItemfd1_0_c3_c0_c0_c0_c0{
        color:rgba(102, 102, 102, 1);font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .examinationList_bodyItemfd1_0_c3_c0_c0{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:0rpx 0rpx 20rpx 0rpx;
    }
    .examinationList_bodyItemfd1_0_c3_c0{
        background:#fff;background-size: 100% !important;border-radius:16rpx 16rpx 16rpx 16rpx;padding:32rpx 24rpx 32rpx 24rpx;margin:20rpx 0rpx 0rpx 0rpx;
    }
    .examinationList_bodyfd1_0_c3{
        padding:0rpx 24rpx 0rpx 24rpx;
    }
    .examinationList_titlefd1_0_c3{
        font-size:28rpx;color:rgba(102, 102, 102, 1);
    }
    .examinationList_linefd1_0{
        background:url(/static/images/12.png) no-repeat;background-size: 100% !important;width:40rpx;height:6rpx;top:80rpx;background-size:100% auto !important;
    }
    .examinationList_rightfd1_0_c0_c0{
        width:32rpx;height:32rpx;border-radius:0rpx 0rpx 0rpx 0rpx;margin:0rpx 24rpx 0rpx 0rpx;
    }
    .examinationList_rightfd1_0_c0{
        width:100rpx;height:100%;
    }
    .checkTitlefd1_0{
        font-weight:700 !important;font-size:32rpx !important;color:rgba(11, 24, 152, 1) !important;background-color:rgba(255, 255, 255, 1) !important;
    }
    ::v-deep .examinationList_benbenTabsfd1_0{
        background:#fff;background-size: 100% !important;width:750rpx;height:90rpx;white-space:nowrap;text-align:center;
    }
    .examinationList_fd3_0_c1_c1_c1{
        width:36rpx;height:36rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .examinationList_fd3_0_c1_c1_c0{
        color:#333333;font-size:32rpx;font-weight:400;line-height:45rpx;
    }
    .examinationList_fd3_0_c1_c1{
        padding:0rpx 32rpx 0rpx 26rpx;margin:32rpx 0rpx 0rpx 0rpx;
    }
    .examinationList_fd3_0_c1_c0_c1{
        width:36rpx;height:36rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .examinationList_fd3_0_c1_c0_c0{
        color:#333333;font-size:32rpx;font-weight:400;line-height:45rpx;
    }
    .examinationList_fd3_0_c1_c0{
        padding:0rpx 32rpx 0rpx 26rpx;margin:32rpx 0rpx 0rpx 0rpx;
    }
    .examinationList_fd3_0_c0_c2{
        color:#0B1898;font-size:28rpx;font-weight:500;line-height:40rpx;
    }
    .examinationList_fd3_0_c0_c1{
        color:#333333;font-size:36rpx;font-weight:500;line-height:50rpx;
    }
    .examinationList_fd3_0_c0_c0{
        color:#666666;font-size:28rpx;font-weight:500;line-height:40rpx;
    }
    .examinationList_fd3_0_c0{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:32rpx 32rpx 32rpx 32rpx;
    }
    .examinationList_fd3_0{
        background:#fff;background-size: 100% !important;border-radius:24rpx 24rpx 0rpx 0rpx;padding:0rpx 0rpx 40rpx 0rpx;
    }
</style>