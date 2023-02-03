<template>
    <view class="page" :style="themeColor">
    <view class="flex flex-wrap align-center justify-between benben-position-layout flex cashAdvance_flex_0"    :style="{height:(88+StatusBarRpx)+'rpx',paddingTop:StatusBarRpx+'rpx'}">
            <view   class='flex flex-wrap align-center cashAdvance_fd0_0'  @tap.stop="handleJumpDiy" data-type="back" data-url="1"   >
        <text class='fu-iconfont2' >&#xe794;</text>
</view>
<text class='cashAdvance_fd0_1' >借支</text>
    <view   class='flex flex-wrap align-center cashAdvance_fd0_2'     >
        </view>

        </view>
<view :style="{height: (88+StatusBarRpx)+'rpx'}"  ></view>
<!---flex布局flex布局开始-->
 <view class="flex flex-direction flex-wrap align-stretch benben-flex-layout cashAdvance_flex_1"   >
            <view   class='flex flex-wrap align-center cashAdvance_fd1_0'     >
        <image class='cashAdvance_fd1_0_c0' mode="aspectFit"  :src='STATIC_URL+"37.png"'></image>
<input class='flex-sub cashAdvance_fd1_0_c1'  type="text" placeholder="搜索" confirm-type="done" :maxlength="-1" placeholder-style="color:#999;font-size:28rpx"  v-model="fd1_0_c1" />
</view>
</view>
<!---flex布局flex布局结束-->
<!---flex布局flex布局开始-->
 <view class="flex benben-flex-layout flex-wrap align-center"   >
        <view>
        <benben-flex-tabs class-name='cashAdvance_benbenTabsfd2_0' v-model="tabs" ref="benben_tabsfd2_0" select-mark="benben_tabsfd2_0" key="benben_tabsfd2_0" :open-title-type='false' :open-sticky='true' :top='88' :is-show-content='true' :scrollspy='false'  :tabs-info.sync="tabsInfofd2_0"  >
            
                    <scroll-view
          @scroll="tabsInfofd2_0.scrollX = $event.detail.scrollLeft"
          id="benben_tabsfd2_0"
          class="benben-tabs"
          style="width:750rpx"
          :scroll-x="true"
          :scroll-left.sync="tabsInfofd2_0.moveX"
          scroll-with-animation="all .3s ease"
        >
          <view class="benben-tabs-content" id="benben_tabsfd2_0-content">
            <view id="benben_tabsfd2_0-title" class="benben-tabs-title flex flex align-center justify-around">
                        <view 
                :class="{ 'checkTitlefd2_0': tabs == '1', 'flex flex-wrap align-center cashAdvance_titlefd2_0_c3': true }"
                @tap="tabs = '1'"
                :id="`benben_tabsfd2_0-title-item-${'1'}`"
                
              >
                
<text  >待发起</text>

              </view>            <view 
                :class="{ 'checkTitlefd2_0': tabs == '2', 'flex flex-wrap align-center cashAdvance_titlefd2_0_c4': true }"
                @tap="tabs = '2'"
                :id="`benben_tabsfd2_0-title-item-${'2'}`"
                
              >
                
<text  >审批中</text>

              </view>            <view 
                :class="{ 'checkTitlefd2_0': tabs == '3', 'flex flex-wrap align-center cashAdvance_titlefd2_0_c5': true }"
                @tap="tabs = '3'"
                :id="`benben_tabsfd2_0-title-item-${'3'}`"
                
              >
                
<text  >已通过</text>

              </view>            <view 
                :class="{ 'checkTitlefd2_0': tabs == '4', 'flex flex-wrap align-center cashAdvance_titlefd2_0_c6': true }"
                @tap="tabs = '4'"
                :id="`benben_tabsfd2_0-title-item-${'4'}`"
                
              >
                
<text  >未通过</text>

              </view>
            </view>
            <view :style="{ left: tabsInfofd2_0.lineleft, maxWidth: tabsInfofd2_0.lineWidth }" id="benben_tabsfd2_0-line" class="benben-tabs-line flex benben-flex-tabs-line cashAdvance_linefd2_0"></view>
          </view>
        </scroll-view>
            
        </benben-flex-tabs>
                <view>
                        <view class="benben_tabsfd2_0-body-item flex flex-direction flex-wrap align-stretch cashAdvance_bodyfd2_0_c3" v-if=" tabs == '1' " :id="`benben_tabsfd2_0-body-item-${'1'}`">
    <view   class='flex flex-direction flex-wrap align-stretch cashAdvance_bodyItemfd2_0_c3_c0'  @tap.stop="handleJumpDiy" data-type="navigateTo" :data-url="`/pages/applicationCenter/borroWmoney/borroWmoney?type=1`"   >
            <view   class='flex flex-direction flex-wrap align-stretch cashAdvance_bodyItemfd2_0_c3_c0_c0'     >
            <view   class='flex flex-wrap align-center justify-between cashAdvance_bodyItemfd2_0_c3_c0_c0_c0'     >
            <view   class='flex flex-wrap align-center'     >
        <text class='cashAdvance_bodyItemfd2_0_c3_c0_c0_c0_c0_c0' >支出流水号：</text>
<text class='cashAdvance_bodyItemfd2_0_c3_c0_c0_c0_c0_c1'   v-if= "cut=='1'"  >85212323454</text><text class='cashAdvance_bodyItemfd2_0_c3_c0_c0_c0_c0_c1_1'   v-if= "cut=='2'"  >车辆费</text><text class='cashAdvance_bodyItemfd2_0_c3_c0_c0_c0_c0_c1_2'   v-if= "cut=='3'"  >车辆保险费</text><text class='cashAdvance_bodyItemfd2_0_c3_c0_c0_c0_c0_c1_3'   v-if= "cut=='4'"  >办公费</text><text class='cashAdvance_bodyItemfd2_0_c3_c0_c0_c0_c0_c1_4'   v-if= "cut=='5'"  >招待费</text><text class='cashAdvance_bodyItemfd2_0_c3_c0_c0_c0_c0_c1_5'   v-if= "cut=='6'"  >水电费</text><text class='cashAdvance_bodyItemfd2_0_c3_c0_c0_c0_c0_c1_6'   v-if= "cut=='7'"  >会费</text>
</view>
    <view   class='flex flex-wrap align-center'     >
        <text class='cashAdvance_bodyItemfd2_0_c3_c0_c0_c0_c1_c0' >待发起</text>
</view>
</view>
    <view   class='flex flex-wrap align-center cashAdvance_bodyItemfd2_0_c3_c0_c0_c1'     >
        <text class='cashAdvance_bodyItemfd2_0_c3_c0_c0_c1_c0' >申请人</text>
<text class='flex-sub cashAdvance_bodyItemfd2_0_c3_c0_c0_c1_c1' >陈沉沉</text>
</view>
    <view   class='flex flex-wrap align-start cashAdvance_bodyItemfd2_0_c3_c0_c0_c2'     >
        <text class='cashAdvance_bodyItemfd2_0_c3_c0_c0_c2_c0' >支出事由</text>
<text class='flex-sub cashAdvance_bodyItemfd2_0_c3_c0_c0_c2_c1' >出差</text>
</view>
    <view   class='flex flex-wrap align-start cashAdvance_bodyItemfd2_0_c3_c0_c0_c3'     >
        <text class='cashAdvance_bodyItemfd2_0_c3_c0_c0_c3_c0' >支出科目</text>
<text class='flex-sub cashAdvance_bodyItemfd2_0_c3_c0_c0_c3_c1' >差旅费</text>
</view>
    <view   class='flex flex-wrap align-center cashAdvance_bodyItemfd2_0_c3_c0_c0_c4'     >
        <text class='cashAdvance_bodyItemfd2_0_c3_c0_c0_c4_c0' >支出金额</text>
<text class='cashAdvance_bodyItemfd2_0_c3_c0_c0_c4_c1' >￥</text>
<text class='cashAdvance_bodyItemfd2_0_c3_c0_c0_c4_c2' >3500</text>
</view>
    <view   class='flex flex-wrap align-start cashAdvance_bodyItemfd2_0_c3_c0_c0_c5'     >
        <text class='cashAdvance_bodyItemfd2_0_c3_c0_c0_c5_c0' >项目编号</text>
<text class='flex-sub cashAdvance_bodyItemfd2_0_c3_c0_c0_c5_c1' >2022-N4-001-J</text>
</view>
    <view   class='flex flex-wrap align-center cashAdvance_bodyItemfd2_0_c3_c0_c0_c6'     >
        <text class='cashAdvance_bodyItemfd2_0_c3_c0_c0_c6_c0' >项目名称</text>
<text class='flex-sub cashAdvance_bodyItemfd2_0_c3_c0_c0_c6_c1' >二阳县光电产业园基础设施建设项目</text>
</view>
    <view   class='flex flex-wrap align-center cashAdvance_bodyItemfd2_0_c3_c0_c0_c7'     >
        <text class='cashAdvance_bodyItemfd2_0_c3_c0_c0_c7_c0' >申请时间</text>
<text class='cashAdvance_bodyItemfd2_0_c3_c0_c0_c7_c1' >2022-08-08</text>
<text class='cashAdvance_bodyItemfd2_0_c3_c0_c0_c7_c2' >10:10</text>
</view>
</view>
    <view   class='flex flex-wrap align-center justify-end cashAdvance_bodyItemfd2_0_c3_c0_c1'     >
        <button class='cashAdvance_bodyItemfd2_0_c3_c0_c1_c0' >编辑</button>
<button class='cashAdvance_bodyItemfd2_0_c3_c0_c1_c1' @tap.stop="popupShow1666347451982=true"  >发起审批</button>
</view>
</view>
</view>            <view class="benben_tabsfd2_0-body-item flex flex-direction flex-wrap align-stretch cashAdvance_bodyfd2_0_c4" v-if=" tabs == '2' " :id="`benben_tabsfd2_0-body-item-${'2'}`">
    <view   class='flex flex-direction flex-wrap align-stretch cashAdvance_bodyItemfd2_0_c4_c0'  @tap.stop="handleJumpDiy" data-type="navigateTo" :data-url="`/pages/applicationCenter/borroWmoney/borroWmoney?type=2`"   >
            <view   class='flex flex-direction flex-wrap align-stretch'     >
            <view   class='flex flex-wrap align-center justify-between cashAdvance_bodyItemfd2_0_c4_c0_c0_c0'     >
            <view   class='flex flex-wrap align-center'     >
        <text class='cashAdvance_bodyItemfd2_0_c4_c0_c0_c0_c0_c0' >支出流水号：</text>
<text class='cashAdvance_bodyItemfd2_0_c4_c0_c0_c0_c0_c1'   v-if= "cut=='1'"  >85212323454</text><text class='cashAdvance_bodyItemfd2_0_c4_c0_c0_c0_c0_c1_1'   v-if= "cut=='2'"  >车辆费</text><text class='cashAdvance_bodyItemfd2_0_c4_c0_c0_c0_c0_c1_2'   v-if= "cut=='3'"  >车辆保险费</text><text class='cashAdvance_bodyItemfd2_0_c4_c0_c0_c0_c0_c1_3'   v-if= "cut=='4'"  >办公费</text><text class='cashAdvance_bodyItemfd2_0_c4_c0_c0_c0_c0_c1_4'   v-if= "cut=='5'"  >招待费</text><text class='cashAdvance_bodyItemfd2_0_c4_c0_c0_c0_c0_c1_5'   v-if= "cut=='6'"  >水电费</text><text class='cashAdvance_bodyItemfd2_0_c4_c0_c0_c0_c0_c1_6'   v-if= "cut=='7'"  >会费</text>
</view>
    <view   class='flex flex-wrap align-center'     >
        <text class='cashAdvance_bodyItemfd2_0_c4_c0_c0_c0_c1_c0' >审批中</text>
</view>
</view>
    <view   class='flex flex-wrap align-center cashAdvance_bodyItemfd2_0_c4_c0_c0_c1'     >
        <text class='cashAdvance_bodyItemfd2_0_c4_c0_c0_c1_c0' >申请人</text>
<text class='flex-sub cashAdvance_bodyItemfd2_0_c4_c0_c0_c1_c1' >陈沉沉</text>
</view>
    <view   class='flex flex-wrap align-start cashAdvance_bodyItemfd2_0_c4_c0_c0_c2'     >
        <text class='cashAdvance_bodyItemfd2_0_c4_c0_c0_c2_c0' >支出事由</text>
<text class='flex-sub cashAdvance_bodyItemfd2_0_c4_c0_c0_c2_c1' >支出事由</text>
</view>
    <view   class='flex flex-wrap align-start cashAdvance_bodyItemfd2_0_c4_c0_c0_c3'     >
        <text class='cashAdvance_bodyItemfd2_0_c4_c0_c0_c3_c0' >支出科目</text>
<text class='flex-sub cashAdvance_bodyItemfd2_0_c4_c0_c0_c3_c1' >差旅费</text>
</view>
    <view   class='flex flex-wrap align-center cashAdvance_bodyItemfd2_0_c4_c0_c0_c4'     >
        <text class='cashAdvance_bodyItemfd2_0_c4_c0_c0_c4_c0' >支出金额</text>
<text class='cashAdvance_bodyItemfd2_0_c4_c0_c0_c4_c1' >￥</text>
<text class='cashAdvance_bodyItemfd2_0_c4_c0_c0_c4_c2' >3500</text>
</view>
    <view   class='flex flex-wrap align-start cashAdvance_bodyItemfd2_0_c4_c0_c0_c5'     >
        <text class='cashAdvance_bodyItemfd2_0_c4_c0_c0_c5_c0' >项目编号</text>
<text class='flex-sub cashAdvance_bodyItemfd2_0_c4_c0_c0_c5_c1' >2022-N4-001-J</text>
</view>
    <view   class='flex flex-wrap align-center cashAdvance_bodyItemfd2_0_c4_c0_c0_c6'     >
        <text class='cashAdvance_bodyItemfd2_0_c4_c0_c0_c6_c0' >项目名称</text>
<text class='flex-sub cashAdvance_bodyItemfd2_0_c4_c0_c0_c6_c1' >二阳县光电产业园基础设施建设项目</text>
</view>
    <view   class='flex flex-wrap align-center cashAdvance_bodyItemfd2_0_c4_c0_c0_c7'     >
        <text class='cashAdvance_bodyItemfd2_0_c4_c0_c0_c7_c0' >申请时间</text>
<text class='cashAdvance_bodyItemfd2_0_c4_c0_c0_c7_c1' >2022-08-08</text>
<text class='cashAdvance_bodyItemfd2_0_c4_c0_c0_c7_c2' >10:10</text>
</view>
</view>
</view>
</view>            <view class="benben_tabsfd2_0-body-item flex flex-direction flex-wrap align-stretch cashAdvance_bodyfd2_0_c5" v-if=" tabs == '3' " :id="`benben_tabsfd2_0-body-item-${'3'}`">
    <view   class='flex flex-direction flex-wrap align-stretch cashAdvance_bodyItemfd2_0_c5_c0'  @tap.stop="handleJumpDiy" data-type="navigateTo" :data-url="`/pages/applicationCenter/borroWmoney/borroWmoney?type=3`"   >
            <view   class='flex flex-direction flex-wrap align-stretch'     >
            <view   class='flex flex-wrap align-center justify-between cashAdvance_bodyItemfd2_0_c5_c0_c0_c0'     >
            <view   class='flex flex-wrap align-center'     >
        <text class='cashAdvance_bodyItemfd2_0_c5_c0_c0_c0_c0_c0' >支出流水号：</text>
<text class='cashAdvance_bodyItemfd2_0_c5_c0_c0_c0_c0_c1'   v-if= "cut=='1'"  >85212323454</text><text class='cashAdvance_bodyItemfd2_0_c5_c0_c0_c0_c0_c1_1'   v-if= "cut=='2'"  >车辆费</text><text class='cashAdvance_bodyItemfd2_0_c5_c0_c0_c0_c0_c1_2'   v-if= "cut=='3'"  >车辆保险费</text><text class='cashAdvance_bodyItemfd2_0_c5_c0_c0_c0_c0_c1_3'   v-if= "cut=='4'"  >办公费</text><text class='cashAdvance_bodyItemfd2_0_c5_c0_c0_c0_c0_c1_4'   v-if= "cut=='5'"  >招待费</text><text class='cashAdvance_bodyItemfd2_0_c5_c0_c0_c0_c0_c1_5'   v-if= "cut=='6'"  >水电费</text><text class='cashAdvance_bodyItemfd2_0_c5_c0_c0_c0_c0_c1_6'   v-if= "cut=='7'"  >会费</text>
</view>
    <view   class='flex flex-wrap align-center'     >
        <text class='cashAdvance_bodyItemfd2_0_c5_c0_c0_c0_c1_c0' >已通过</text>
</view>
</view>
    <view   class='flex flex-wrap align-center cashAdvance_bodyItemfd2_0_c5_c0_c0_c1'     >
        <text class='cashAdvance_bodyItemfd2_0_c5_c0_c0_c1_c0' >申请人</text>
<text class='flex-sub cashAdvance_bodyItemfd2_0_c5_c0_c0_c1_c1' >陈沉沉</text>
</view>
    <view   class='flex flex-wrap align-start cashAdvance_bodyItemfd2_0_c5_c0_c0_c2'     >
        <text class='cashAdvance_bodyItemfd2_0_c5_c0_c0_c2_c0' >支出事由</text>
<text class='flex-sub cashAdvance_bodyItemfd2_0_c5_c0_c0_c2_c1' >出差</text>
</view>
    <view   class='flex flex-wrap align-start cashAdvance_bodyItemfd2_0_c5_c0_c0_c3'     >
        <text class='cashAdvance_bodyItemfd2_0_c5_c0_c0_c3_c0' >支出科目</text>
<text class='flex-sub cashAdvance_bodyItemfd2_0_c5_c0_c0_c3_c1' >差旅费</text>
</view>
    <view   class='flex flex-wrap align-center cashAdvance_bodyItemfd2_0_c5_c0_c0_c4'     >
        <text class='cashAdvance_bodyItemfd2_0_c5_c0_c0_c4_c0' >支出金额</text>
<text class='cashAdvance_bodyItemfd2_0_c5_c0_c0_c4_c1' >￥</text>
<text class='cashAdvance_bodyItemfd2_0_c5_c0_c0_c4_c2' >3500</text>
</view>
    <view   class='flex flex-wrap align-start cashAdvance_bodyItemfd2_0_c5_c0_c0_c5'     >
        <text class='cashAdvance_bodyItemfd2_0_c5_c0_c0_c5_c0' >项目编号</text>
<text class='flex-sub cashAdvance_bodyItemfd2_0_c5_c0_c0_c5_c1' >2022-N4-001-J</text>
</view>
    <view   class='flex flex-wrap align-center cashAdvance_bodyItemfd2_0_c5_c0_c0_c6'     >
        <text class='cashAdvance_bodyItemfd2_0_c5_c0_c0_c6_c0' >项目名称</text>
<text class='flex-sub cashAdvance_bodyItemfd2_0_c5_c0_c0_c6_c1' >二阳县光电产业园基础设施建设项目</text>
</view>
    <view   class='flex flex-wrap align-center cashAdvance_bodyItemfd2_0_c5_c0_c0_c7'     >
        <text class='cashAdvance_bodyItemfd2_0_c5_c0_c0_c7_c0' >申请时间</text>
<text class='cashAdvance_bodyItemfd2_0_c5_c0_c0_c7_c1' >2022-08-08</text>
<text class='cashAdvance_bodyItemfd2_0_c5_c0_c0_c7_c2' >10:10</text>
</view>
</view>
</view>
</view>            <view class="benben_tabsfd2_0-body-item flex flex-direction flex-wrap align-stretch cashAdvance_bodyfd2_0_c6" v-if=" tabs == '4' " :id="`benben_tabsfd2_0-body-item-${'4'}`">
    <view   class='flex flex-direction flex-wrap align-stretch cashAdvance_bodyItemfd2_0_c6_c0'  @tap.stop="handleJumpDiy" data-type="navigateTo" :data-url="`/pages/applicationCenter/borroWmoney/borroWmoney?type=4`"   >
            <view   class='flex flex-direction flex-wrap align-stretch cashAdvance_bodyItemfd2_0_c6_c0_c0'     >
            <view   class='flex flex-wrap align-center justify-between cashAdvance_bodyItemfd2_0_c6_c0_c0_c0'     >
            <view   class='flex flex-wrap align-center'     >
        <text class='cashAdvance_bodyItemfd2_0_c6_c0_c0_c0_c0_c0' >支出流水号：</text>
<text class='cashAdvance_bodyItemfd2_0_c6_c0_c0_c0_c0_c1'   v-if= "cut=='1'"  >85212323454</text><text class='cashAdvance_bodyItemfd2_0_c6_c0_c0_c0_c0_c1_1'   v-if= "cut=='2'"  >车辆费</text><text class='cashAdvance_bodyItemfd2_0_c6_c0_c0_c0_c0_c1_2'   v-if= "cut=='3'"  >车辆保险费</text><text class='cashAdvance_bodyItemfd2_0_c6_c0_c0_c0_c0_c1_3'   v-if= "cut=='4'"  >办公费</text><text class='cashAdvance_bodyItemfd2_0_c6_c0_c0_c0_c0_c1_4'   v-if= "cut=='5'"  >招待费</text><text class='cashAdvance_bodyItemfd2_0_c6_c0_c0_c0_c0_c1_5'   v-if= "cut=='6'"  >水电费</text><text class='cashAdvance_bodyItemfd2_0_c6_c0_c0_c0_c0_c1_6'   v-if= "cut=='7'"  >会费</text>
</view>
    <view   class='flex flex-wrap align-center'     >
        <text class='cashAdvance_bodyItemfd2_0_c6_c0_c0_c0_c1_c0' >未通过</text>
</view>
</view>
    <view   class='flex flex-wrap align-center cashAdvance_bodyItemfd2_0_c6_c0_c0_c1'     >
        <text class='cashAdvance_bodyItemfd2_0_c6_c0_c0_c1_c0' >申请人</text>
<text class='flex-sub cashAdvance_bodyItemfd2_0_c6_c0_c0_c1_c1' >陈沉沉</text>
</view>
    <view   class='flex flex-wrap align-start cashAdvance_bodyItemfd2_0_c6_c0_c0_c2'     >
        <text class='cashAdvance_bodyItemfd2_0_c6_c0_c0_c2_c0' >支出事由</text>
<text class='flex-sub cashAdvance_bodyItemfd2_0_c6_c0_c0_c2_c1' >出差</text>
</view>
    <view   class='flex flex-wrap align-start cashAdvance_bodyItemfd2_0_c6_c0_c0_c3'     >
        <text class='cashAdvance_bodyItemfd2_0_c6_c0_c0_c3_c0' >支出科目</text>
<text class='flex-sub cashAdvance_bodyItemfd2_0_c6_c0_c0_c3_c1' >差旅费</text>
</view>
    <view   class='flex flex-wrap align-center cashAdvance_bodyItemfd2_0_c6_c0_c0_c4'     >
        <text class='cashAdvance_bodyItemfd2_0_c6_c0_c0_c4_c0' >支出金额</text>
<text class='cashAdvance_bodyItemfd2_0_c6_c0_c0_c4_c1' >￥</text>
<text class='cashAdvance_bodyItemfd2_0_c6_c0_c0_c4_c2' >3500</text>
</view>
    <view   class='flex flex-wrap align-start cashAdvance_bodyItemfd2_0_c6_c0_c0_c5'     >
        <text class='cashAdvance_bodyItemfd2_0_c6_c0_c0_c5_c0' >项目编号</text>
<text class='flex-sub cashAdvance_bodyItemfd2_0_c6_c0_c0_c5_c1' >2022-N4-001-J</text>
</view>
    <view   class='flex flex-wrap align-center cashAdvance_bodyItemfd2_0_c6_c0_c0_c6'     >
        <text class='cashAdvance_bodyItemfd2_0_c6_c0_c0_c6_c0' >项目名称</text>
<text class='flex-sub cashAdvance_bodyItemfd2_0_c6_c0_c0_c6_c1' >二阳县光电产业园基础设施建设项目</text>
</view>
    <view   class='flex flex-wrap align-center cashAdvance_bodyItemfd2_0_c6_c0_c0_c7'     >
        <text class='cashAdvance_bodyItemfd2_0_c6_c0_c0_c7_c0' >申请时间</text>
<text class='cashAdvance_bodyItemfd2_0_c6_c0_c0_c7_c1' >2022-08-08</text>
<text class='cashAdvance_bodyItemfd2_0_c6_c0_c0_c7_c2' >10:10</text>
</view>
</view>
    <view   class='flex flex-wrap align-center justify-end cashAdvance_bodyItemfd2_0_c6_c0_c1'     >
        <button class='cashAdvance_bodyItemfd2_0_c6_c0_c1_c0' >编辑</button>
<button class='cashAdvance_bodyItemfd2_0_c6_c0_c1_c1' >发起审批</button>
</view>
</view>
</view>
        </view>
</view>
</view>
<!---flex布局flex布局结束-->
    <view class="flex benben-position-layout flex flex-wrap align-center cashAdvance_flex_3"    :style="{top:(800+StatusBarRpx)+'rpx'}">
        <image class='cashAdvance_fd3_0' :src='STATIC_URL+"40.png"' @tap.stop="handleJumpDiy" data-type="navigateTo" :data-url="`/pages/applicationCenter/collection/collection`" ></image>

        </view>
<view :style="{height: '88rpx'}"  ></view>
<benben-popup v-model="popupShow1666347451982" :mask="true"  mode='center'>
    <!---发起审批flex布局开始-->
 <view class="flex flex-direction flex-wrap align-stretch benben-flex-layout cashAdvance_flex_4"   >
            <view   class='flex flex-direction flex-wrap align-stretch cashAdvance_fd4_0'     >
            <view   class='flex flex-direction flex-wrap align-center cashAdvance_fd4_0_c0'     >
        <text class='cashAdvance_fd4_0_c0_c0' >提示</text>
<text class='cashAdvance_fd4_0_c0_c1' >确定要发起审批吗？</text>
</view>
    <view   class='flex flex-wrap align-center'     >
        <button class='flex-sub cashAdvance_fd4_0_c1_c0' @tap.stop="popupShow1666347451982=false"  >取消</button>
<button class='flex-sub cashAdvance_fd4_0_c1_c1' >确定</button>
</view>
</view>
</view>
<!---发起审批flex布局结束-->
</benben-popup>
    
    </view>
</template>
<script>
    
    export default {
        components:{},
        
        data(){
			return {"popupShow1666347451982":false,"tabsInfofd2_0":{ lineleft: '', lineWidth: '', moveX: 0, scrollX: 0, PageScrollX: 0 },"fd1_0_c1":"","tabs":"1","cut":"1"};
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
            background:rgba(243, 246, 251, 1);background-size: 100% auto !important;
        }
    .cashAdvance_flex_0{
        background:#fff;background-size: 100% !important;width:750rpx;height:88rpx;overflow:hidden;z-index:10;top:0rpx;background-size:100% auto !important;
    }
    .cashAdvance_fd0_2{
        width:100rpx;height:88rpx;margin:0rpx 32rpx 0rpx 0rpx;
    }
    .cashAdvance_fd0_1{
        color:#000000;font-size:36rpx;font-weight:500;line-height:50rpx;
    }
    .cashAdvance_fd0_0{
        width:100rpx;height:88rpx;margin:0rpx 0rpx 0rpx 32rpx;
    }
    .cashAdvance_flex_1{
        padding:0rpx 32rpx 0rpx 32rpx;margin:24rpx 0rpx 0rpx 0rpx;
    }
    .cashAdvance_fd1_0_c1{
        margin:0rpx 0rpx 0rpx 14rpx;color:#333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .cashAdvance_fd1_0_c0{
        width:40rpx;height:40rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .cashAdvance_fd1_0{
        background:#fff;background-size: 100% !important;border-radius:34rpx 34rpx 34rpx 34rpx;padding:16rpx 24rpx 16rpx 24rpx;
    }
    .cashAdvance_bodyItemfd2_0_c6_c0_c1_c1{
        background:rgba(11, 24, 152, 1);background-size: 100% !important;border-radius:28rpx 28rpx 28rpx 28rpx;font-size:24rpx;color:#fff;width:160rpx;height:56rpx;line-height:56rpx;margin:0rpx 0rpx 0rpx 24rpx;
    }
    .cashAdvance_bodyItemfd2_0_c6_c0_c1_c0{
        border:1px solid #666666;background:#fff;background-size: 100% !important;border-radius:28rpx 28rpx 28rpx 28rpx;font-size:24rpx;color:#333;width:160rpx;height:56rpx;line-height:56rpx;
    }
    .cashAdvance_bodyItemfd2_0_c6_c0_c1{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .cashAdvance_bodyItemfd2_0_c6_c0_c0_c7_c2{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 10rpx;
    }
    .cashAdvance_bodyItemfd2_0_c6_c0_c0_c7_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .cashAdvance_bodyItemfd2_0_c6_c0_c0_c7_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .cashAdvance_bodyItemfd2_0_c6_c0_c0_c7{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .cashAdvance_bodyItemfd2_0_c6_c0_c0_c6_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .cashAdvance_bodyItemfd2_0_c6_c0_c0_c6_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .cashAdvance_bodyItemfd2_0_c6_c0_c0_c6{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .cashAdvance_bodyItemfd2_0_c6_c0_c0_c5_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .cashAdvance_bodyItemfd2_0_c6_c0_c0_c5_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .cashAdvance_bodyItemfd2_0_c6_c0_c0_c5{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .cashAdvance_bodyItemfd2_0_c6_c0_c0_c4_c2{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .cashAdvance_bodyItemfd2_0_c6_c0_c0_c4_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .cashAdvance_bodyItemfd2_0_c6_c0_c0_c4_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .cashAdvance_bodyItemfd2_0_c6_c0_c0_c4{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .cashAdvance_bodyItemfd2_0_c6_c0_c0_c3_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .cashAdvance_bodyItemfd2_0_c6_c0_c0_c3_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .cashAdvance_bodyItemfd2_0_c6_c0_c0_c3{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .cashAdvance_bodyItemfd2_0_c6_c0_c0_c2_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .cashAdvance_bodyItemfd2_0_c6_c0_c0_c2_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .cashAdvance_bodyItemfd2_0_c6_c0_c0_c2{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .cashAdvance_bodyItemfd2_0_c6_c0_c0_c1_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 50rpx;
    }
    .cashAdvance_bodyItemfd2_0_c6_c0_c0_c1_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .cashAdvance_bodyItemfd2_0_c6_c0_c0_c1{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .cashAdvance_bodyItemfd2_0_c6_c0_c0_c0_c1_c0{
        color:#0B1898;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .cashAdvance_bodyItemfd2_0_c6_c0_c0_c0_c0_c1_6{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .cashAdvance_bodyItemfd2_0_c6_c0_c0_c0_c0_c1_5{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .cashAdvance_bodyItemfd2_0_c6_c0_c0_c0_c0_c1_4{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .cashAdvance_bodyItemfd2_0_c6_c0_c0_c0_c0_c1_3{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .cashAdvance_bodyItemfd2_0_c6_c0_c0_c0_c0_c1_2{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .cashAdvance_bodyItemfd2_0_c6_c0_c0_c0_c0_c1_1{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .cashAdvance_bodyItemfd2_0_c6_c0_c0_c0_c0_c1{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .cashAdvance_bodyItemfd2_0_c6_c0_c0_c0_c0_c0{
        color:rgba(102, 102, 102, 1);font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .cashAdvance_bodyItemfd2_0_c6_c0_c0_c0{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:0rpx 0rpx 20rpx 0rpx;
    }
    .cashAdvance_bodyItemfd2_0_c6_c0_c0{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:0rpx 0rpx 32rpx 0rpx;
    }
    .cashAdvance_bodyItemfd2_0_c6_c0{
        background:#fff;background-size: 100% !important;border-radius:16rpx 16rpx 16rpx 16rpx;padding:32rpx 24rpx 32rpx 24rpx;margin:20rpx 0rpx 0rpx 0rpx;
    }
    .cashAdvance_bodyfd2_0_c6{
        padding:0rpx 24rpx 0rpx 24rpx;
    }
    .cashAdvance_titlefd2_0_c6{
        font-size:28rpx;color:rgba(102, 102, 102, 1);
    }
    .cashAdvance_bodyItemfd2_0_c5_c0_c0_c7_c2{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 10rpx;
    }
    .cashAdvance_bodyItemfd2_0_c5_c0_c0_c7_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .cashAdvance_bodyItemfd2_0_c5_c0_c0_c7_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .cashAdvance_bodyItemfd2_0_c5_c0_c0_c7{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .cashAdvance_bodyItemfd2_0_c5_c0_c0_c6_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .cashAdvance_bodyItemfd2_0_c5_c0_c0_c6_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .cashAdvance_bodyItemfd2_0_c5_c0_c0_c6{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .cashAdvance_bodyItemfd2_0_c5_c0_c0_c5_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .cashAdvance_bodyItemfd2_0_c5_c0_c0_c5_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .cashAdvance_bodyItemfd2_0_c5_c0_c0_c5{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .cashAdvance_bodyItemfd2_0_c5_c0_c0_c4_c2{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .cashAdvance_bodyItemfd2_0_c5_c0_c0_c4_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .cashAdvance_bodyItemfd2_0_c5_c0_c0_c4_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .cashAdvance_bodyItemfd2_0_c5_c0_c0_c4{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .cashAdvance_bodyItemfd2_0_c5_c0_c0_c3_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .cashAdvance_bodyItemfd2_0_c5_c0_c0_c3_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .cashAdvance_bodyItemfd2_0_c5_c0_c0_c3{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .cashAdvance_bodyItemfd2_0_c5_c0_c0_c2_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .cashAdvance_bodyItemfd2_0_c5_c0_c0_c2_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .cashAdvance_bodyItemfd2_0_c5_c0_c0_c2{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .cashAdvance_bodyItemfd2_0_c5_c0_c0_c1_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 50rpx;
    }
    .cashAdvance_bodyItemfd2_0_c5_c0_c0_c1_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .cashAdvance_bodyItemfd2_0_c5_c0_c0_c1{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .cashAdvance_bodyItemfd2_0_c5_c0_c0_c0_c1_c0{
        color:#0B1898;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .cashAdvance_bodyItemfd2_0_c5_c0_c0_c0_c0_c1_6{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .cashAdvance_bodyItemfd2_0_c5_c0_c0_c0_c0_c1_5{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .cashAdvance_bodyItemfd2_0_c5_c0_c0_c0_c0_c1_4{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .cashAdvance_bodyItemfd2_0_c5_c0_c0_c0_c0_c1_3{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .cashAdvance_bodyItemfd2_0_c5_c0_c0_c0_c0_c1_2{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .cashAdvance_bodyItemfd2_0_c5_c0_c0_c0_c0_c1_1{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .cashAdvance_bodyItemfd2_0_c5_c0_c0_c0_c0_c1{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .cashAdvance_bodyItemfd2_0_c5_c0_c0_c0_c0_c0{
        color:rgba(102, 102, 102, 1);font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .cashAdvance_bodyItemfd2_0_c5_c0_c0_c0{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:0rpx 0rpx 20rpx 0rpx;
    }
    .cashAdvance_bodyItemfd2_0_c5_c0{
        background:#fff;background-size: 100% !important;border-radius:16rpx 16rpx 16rpx 16rpx;padding:32rpx 24rpx 32rpx 24rpx;margin:20rpx 0rpx 0rpx 0rpx;
    }
    .cashAdvance_bodyfd2_0_c5{
        padding:0rpx 24rpx 0rpx 24rpx;
    }
    .cashAdvance_titlefd2_0_c5{
        font-size:28rpx;color:rgba(102, 102, 102, 1);
    }
    .cashAdvance_bodyItemfd2_0_c4_c0_c0_c7_c2{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 10rpx;
    }
    .cashAdvance_bodyItemfd2_0_c4_c0_c0_c7_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .cashAdvance_bodyItemfd2_0_c4_c0_c0_c7_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .cashAdvance_bodyItemfd2_0_c4_c0_c0_c7{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .cashAdvance_bodyItemfd2_0_c4_c0_c0_c6_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .cashAdvance_bodyItemfd2_0_c4_c0_c0_c6_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .cashAdvance_bodyItemfd2_0_c4_c0_c0_c6{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .cashAdvance_bodyItemfd2_0_c4_c0_c0_c5_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .cashAdvance_bodyItemfd2_0_c4_c0_c0_c5_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .cashAdvance_bodyItemfd2_0_c4_c0_c0_c5{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .cashAdvance_bodyItemfd2_0_c4_c0_c0_c4_c2{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .cashAdvance_bodyItemfd2_0_c4_c0_c0_c4_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .cashAdvance_bodyItemfd2_0_c4_c0_c0_c4_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .cashAdvance_bodyItemfd2_0_c4_c0_c0_c4{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .cashAdvance_bodyItemfd2_0_c4_c0_c0_c3_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .cashAdvance_bodyItemfd2_0_c4_c0_c0_c3_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .cashAdvance_bodyItemfd2_0_c4_c0_c0_c3{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .cashAdvance_bodyItemfd2_0_c4_c0_c0_c2_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .cashAdvance_bodyItemfd2_0_c4_c0_c0_c2_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .cashAdvance_bodyItemfd2_0_c4_c0_c0_c2{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .cashAdvance_bodyItemfd2_0_c4_c0_c0_c1_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 50rpx;
    }
    .cashAdvance_bodyItemfd2_0_c4_c0_c0_c1_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .cashAdvance_bodyItemfd2_0_c4_c0_c0_c1{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .cashAdvance_bodyItemfd2_0_c4_c0_c0_c0_c1_c0{
        color:#0B1898;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .cashAdvance_bodyItemfd2_0_c4_c0_c0_c0_c0_c1_6{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .cashAdvance_bodyItemfd2_0_c4_c0_c0_c0_c0_c1_5{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .cashAdvance_bodyItemfd2_0_c4_c0_c0_c0_c0_c1_4{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .cashAdvance_bodyItemfd2_0_c4_c0_c0_c0_c0_c1_3{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .cashAdvance_bodyItemfd2_0_c4_c0_c0_c0_c0_c1_2{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .cashAdvance_bodyItemfd2_0_c4_c0_c0_c0_c0_c1_1{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .cashAdvance_bodyItemfd2_0_c4_c0_c0_c0_c0_c1{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .cashAdvance_bodyItemfd2_0_c4_c0_c0_c0_c0_c0{
        color:rgba(102, 102, 102, 1);font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .cashAdvance_bodyItemfd2_0_c4_c0_c0_c0{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:0rpx 0rpx 20rpx 0rpx;
    }
    .cashAdvance_bodyItemfd2_0_c4_c0{
        background:#fff;background-size: 100% !important;border-radius:16rpx 16rpx 16rpx 16rpx;padding:32rpx 24rpx 32rpx 24rpx;margin:20rpx 0rpx 0rpx 0rpx;
    }
    .cashAdvance_bodyfd2_0_c4{
        padding:0rpx 24rpx 0rpx 24rpx;
    }
    .cashAdvance_titlefd2_0_c4{
        color:rgba(102, 102, 102, 1);font-size:28rpx;
    }
    .cashAdvance_bodyItemfd2_0_c3_c0_c1_c1{
        background:rgba(11, 24, 152, 1);background-size: 100% !important;border-radius:28rpx 28rpx 28rpx 28rpx;font-size:24rpx;color:#fff;width:160rpx;height:56rpx;line-height:56rpx;margin:0rpx 0rpx 0rpx 24rpx;
    }
    .cashAdvance_bodyItemfd2_0_c3_c0_c1_c0{
        border:1px solid #666666;background:#fff;background-size: 100% !important;border-radius:28rpx 28rpx 28rpx 28rpx;font-size:24rpx;color:#333;width:160rpx;height:56rpx;line-height:56rpx;
    }
    .cashAdvance_bodyItemfd2_0_c3_c0_c1{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .cashAdvance_bodyItemfd2_0_c3_c0_c0_c7_c2{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 10rpx;
    }
    .cashAdvance_bodyItemfd2_0_c3_c0_c0_c7_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .cashAdvance_bodyItemfd2_0_c3_c0_c0_c7_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .cashAdvance_bodyItemfd2_0_c3_c0_c0_c7{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .cashAdvance_bodyItemfd2_0_c3_c0_c0_c6_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .cashAdvance_bodyItemfd2_0_c3_c0_c0_c6_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .cashAdvance_bodyItemfd2_0_c3_c0_c0_c6{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .cashAdvance_bodyItemfd2_0_c3_c0_c0_c5_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .cashAdvance_bodyItemfd2_0_c3_c0_c0_c5_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .cashAdvance_bodyItemfd2_0_c3_c0_c0_c5{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .cashAdvance_bodyItemfd2_0_c3_c0_c0_c4_c2{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .cashAdvance_bodyItemfd2_0_c3_c0_c0_c4_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .cashAdvance_bodyItemfd2_0_c3_c0_c0_c4_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .cashAdvance_bodyItemfd2_0_c3_c0_c0_c4{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .cashAdvance_bodyItemfd2_0_c3_c0_c0_c3_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .cashAdvance_bodyItemfd2_0_c3_c0_c0_c3_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .cashAdvance_bodyItemfd2_0_c3_c0_c0_c3{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .cashAdvance_bodyItemfd2_0_c3_c0_c0_c2_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .cashAdvance_bodyItemfd2_0_c3_c0_c0_c2_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .cashAdvance_bodyItemfd2_0_c3_c0_c0_c2{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .cashAdvance_bodyItemfd2_0_c3_c0_c0_c1_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 50rpx;
    }
    .cashAdvance_bodyItemfd2_0_c3_c0_c0_c1_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .cashAdvance_bodyItemfd2_0_c3_c0_c0_c1{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .cashAdvance_bodyItemfd2_0_c3_c0_c0_c0_c1_c0{
        color:#0B1898;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .cashAdvance_bodyItemfd2_0_c3_c0_c0_c0_c0_c1_6{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .cashAdvance_bodyItemfd2_0_c3_c0_c0_c0_c0_c1_5{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .cashAdvance_bodyItemfd2_0_c3_c0_c0_c0_c0_c1_4{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .cashAdvance_bodyItemfd2_0_c3_c0_c0_c0_c0_c1_3{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .cashAdvance_bodyItemfd2_0_c3_c0_c0_c0_c0_c1_2{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .cashAdvance_bodyItemfd2_0_c3_c0_c0_c0_c0_c1_1{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .cashAdvance_bodyItemfd2_0_c3_c0_c0_c0_c0_c1{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .cashAdvance_bodyItemfd2_0_c3_c0_c0_c0_c0_c0{
        color:rgba(102, 102, 102, 1);font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .cashAdvance_bodyItemfd2_0_c3_c0_c0_c0{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:0rpx 0rpx 20rpx 0rpx;
    }
    .cashAdvance_bodyItemfd2_0_c3_c0_c0{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:0rpx 0rpx 32rpx 0rpx;
    }
    .cashAdvance_bodyItemfd2_0_c3_c0{
        background:#fff;background-size: 100% !important;border-radius:16rpx 16rpx 16rpx 16rpx;padding:32rpx 24rpx 32rpx 24rpx;margin:20rpx 0rpx 0rpx 0rpx;
    }
    .cashAdvance_bodyfd2_0_c3{
        padding:0rpx 24rpx 0rpx 24rpx;
    }
    .cashAdvance_titlefd2_0_c3{
        color:rgba(102, 102, 102, 1);font-size:28rpx;
    }
    .cashAdvance_linefd2_0{
        background:url(/static/images/12.png) no-repeat;background-size: 100% !important;width:40rpx;height:6rpx;top:80rpx;background-size:100% auto !important;
    }
    .checkTitlefd2_0{
        font-weight:700 !important;font-size:32rpx !important;color:rgba(11, 24, 152, 1) !important;background-color:rgba(243, 246, 251, 1) !important;
    }
    ::v-deep .cashAdvance_benbenTabsfd2_0{
        width:750rpx;height:90rpx;white-space:nowrap;text-align:center;
    }
    .cashAdvance_flex_3{
        width:88rpx;height:88rpx;overflow:hidden;z-index:10;right:24rpx;top:800rpx;
    }
    .cashAdvance_fd3_0{
        width:88rpx;height:88rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .cashAdvance_flex_4{
        padding:0rpx 105rpx 0rpx 105rpx;
    }
    .cashAdvance_fd4_0_c1_c1{
        background:#fff;background-size: 100% !important;border-radius:0rpx 0rpx 16rpx 0rpx;font-size:32rpx;color:rgba(11, 24, 152, 1);height:110rpx;line-height:110rpx;
    }
    .cashAdvance_fd4_0_c1_c0{
        border-right:1px solid rgba(238, 238, 238, 1);background:#fff;background-size: 100% !important;border-radius:0rpx 0rpx 0rpx 16rpx;font-size:32rpx;color:rgba(153, 153, 153, 1);height:110rpx;line-height:110rpx;
    }
    .cashAdvance_fd4_0_c0_c1{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .cashAdvance_fd4_0_c0_c0{
        color:#333333;font-size:32rpx;font-weight:500;line-height:45rpx;margin:0rpx 0rpx 40rpx 0rpx;
    }
    .cashAdvance_fd4_0_c0{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:40rpx 144rpx 40rpx 144rpx;
    }
    .cashAdvance_fd4_0{
        background:#fff;background-size: 100% !important;border-radius:16rpx 16rpx 16rpx 16rpx;
    }
</style>