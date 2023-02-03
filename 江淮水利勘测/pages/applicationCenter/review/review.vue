<template>
    <view class="page" :style="themeColor">
    <view class="flex flex-wrap align-center justify-between benben-position-layout flex review_flex_0"    :style="{height:(88+StatusBarRpx)+'rpx',paddingTop:StatusBarRpx+'rpx'}">
            <view   class='flex flex-wrap align-center review_fd0_0'  @tap.stop="handleJumpDiy" data-type="back" data-url="1"   >
        <text class='fu-iconfont2' >&#xe794;</text>
</view>
<text class='review_fd0_1' >回款</text>
    <view   class='flex flex-wrap align-center review_fd0_2'     >
        </view>

        </view>
<view :style="{height: (88+StatusBarRpx)+'rpx'}"  ></view>
<!---flex布局flex布局开始-->
 <view class="flex flex-direction flex-wrap align-stretch benben-flex-layout"   >
        <view>
        <benben-flex-tabs class-name='review_benbenTabsfd1_0' v-model="tabs" ref="benben_tabsfd1_0" select-mark="benben_tabsfd1_0" key="benben_tabsfd1_0" :open-title-type='false' :open-sticky='true' :top='0' :is-show-content='true' :scrollspy='false'  :tabs-info.sync="tabsInfofd1_0"  >
            
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
            <view id="benben_tabsfd1_0-title" class="benben-tabs-title flex align-center flex ">
                        <view 
                :class="{ 'checkTitlefd1_0': tabs == '1', 'flex flex-wrap align-center review_titlefd1_0_c3': true }"
                @tap="tabs = '1'"
                :id="`benben_tabsfd1_0-title-item-${'1'}`"
                
              >
                
<text  >回款管理</text>

              </view>            <view 
                :class="{ 'checkTitlefd1_0': tabs == '2', 'flex flex-wrap align-center review_titlefd1_0_c4': true }"
                @tap="tabs = '2'"
                :id="`benben_tabsfd1_0-title-item-${'2'}`"
                
              >
                
<text  >回款审核</text>

              </view>
            </view>
            <view :style="{ left: tabsInfofd1_0.lineleft, maxWidth: tabsInfofd1_0.lineWidth }" id="benben_tabsfd1_0-line" class="benben-tabs-line flex benben-flex-tabs-line review_linefd1_0"></view>
          </view>
        </scroll-view>
            
        </benben-flex-tabs>
                <view>
                        <view class="benben_tabsfd1_0-body-item flex flex-direction flex-wrap align-stretch" v-if=" tabs == '1' " :id="`benben_tabsfd1_0-body-item-${'1'}`">
    <view   class='flex flex-wrap align-center review_bodyItemfd1_0_c3_c0'     >
        <image class='review_bodyItemfd1_0_c3_c0_c0' mode="aspectFit"  :src='STATIC_URL+"37.png"'></image>
<input class='flex-sub review_bodyItemfd1_0_c3_c0_c1'  type="text" placeholder="搜索" confirm-type="done" :maxlength="-1" placeholder-style="color:#999;font-size:28rpx"  v-model="bodyItemfd1_0_c3_c0_c1" />
</view>

<view>
        <benben-flex-tabs class-name='review_benbenTabsbodyItemfd1_0_c3_c1' v-model="tabss" ref="benben_tabsbodyItemfd1_0_c3_c1" select-mark="benben_tabsbodyItemfd1_0_c3_c1" key="benben_tabsbodyItemfd1_0_c3_c1" :open-title-type='false' :open-sticky='true' :top='88' :is-show-content='true' :scrollspy='false'  :tabs-info.sync="tabsInfobodyItemfd1_0_c3_c1"  >
            
                    <scroll-view
          @scroll="tabsInfobodyItemfd1_0_c3_c1.scrollX = $event.detail.scrollLeft"
          id="benben_tabsbodyItemfd1_0_c3_c1"
          class="benben-tabs"
          style="width:750rpx"
          :scroll-x="true"
          :scroll-left.sync="tabsInfobodyItemfd1_0_c3_c1.moveX"
          scroll-with-animation="all .3s ease"
        >
          <view class="benben-tabs-content" id="benben_tabsbodyItemfd1_0_c3_c1-content">
            <view id="benben_tabsbodyItemfd1_0_c3_c1-title" class="benben-tabs-title flex flex align-center justify-around">
                        <view 
                :class="{ 'checkTitlebodyItemfd1_0_c3_c1': tabss == '1', 'flex flex-wrap align-center review_titlebodyItemfd1_0_c3_c1_c3': true }"
                @tap="tabss = '1'"
                :id="`benben_tabsbodyItemfd1_0_c3_c1-title-item-${'1'}`"
                
              >
                
<text  >待提交</text>

              </view>            <view 
                :class="{ 'checkTitlebodyItemfd1_0_c3_c1': tabss == '2', 'flex flex-wrap align-center review_titlebodyItemfd1_0_c3_c1_c4': true }"
                @tap="tabss = '2'"
                :id="`benben_tabsbodyItemfd1_0_c3_c1-title-item-${'2'}`"
                
              >
                
<text  >待确认</text>

              </view>            <view 
                :class="{ 'checkTitlebodyItemfd1_0_c3_c1': tabss == '3', 'flex flex-wrap align-center review_titlebodyItemfd1_0_c3_c1_c5': true }"
                @tap="tabss = '3'"
                :id="`benben_tabsbodyItemfd1_0_c3_c1-title-item-${'3'}`"
                
              >
                
<text  >确认通过</text>

              </view>            <view 
                :class="{ 'checkTitlebodyItemfd1_0_c3_c1': tabss == '4', 'flex flex-wrap align-center review_titlebodyItemfd1_0_c3_c1_c6': true }"
                @tap="tabss = '4'"
                :id="`benben_tabsbodyItemfd1_0_c3_c1-title-item-${'4'}`"
                
              >
                
<text  >确认失败</text>

              </view>
            </view>
            <view :style="{ left: tabsInfobodyItemfd1_0_c3_c1.lineleft, maxWidth: tabsInfobodyItemfd1_0_c3_c1.lineWidth }" id="benben_tabsbodyItemfd1_0_c3_c1-line" class="benben-tabs-line flex benben-flex-tabs-line review_linebodyItemfd1_0_c3_c1"></view>
          </view>
        </scroll-view>
            
        </benben-flex-tabs>
                <view>
                        <view class="benben_tabsbodyItemfd1_0_c3_c1-body-item flex flex-direction flex-wrap align-stretch review_bodybodyItemfd1_0_c3_c1_c3" v-if=" tabss == '1' " :id="`benben_tabsbodyItemfd1_0_c3_c1-body-item-${'1'}`">
    <view   class='flex flex-direction flex-wrap align-stretch review_bodyItembodyItemfd1_0_c3_c1_c3_c0'  @tap.stop="handleJumpDiy" data-type="navigateTo" :data-url="`/pages/applicationCenter/management/management?type=1`"   >
            <view   class='flex flex-direction flex-wrap align-stretch review_bodyItembodyItemfd1_0_c3_c1_c3_c0_c0'     >
            <view   class='flex flex-wrap align-center justify-between review_bodyItembodyItemfd1_0_c3_c1_c3_c0_c0_c0'     >
            <view   class='flex flex-wrap align-center'     >
        <text class='review_bodyItembodyItemfd1_0_c3_c1_c3_c0_c0_c0_c0_c0' >创建时间：</text>
<text class='review_bodyItembodyItemfd1_0_c3_c1_c3_c0_c0_c0_c0_c1'   v-if= "cut=='1'"  >2022-08-08</text><text class='review_bodyItembodyItemfd1_0_c3_c1_c3_c0_c0_c0_c0_c1_1'   v-if= "cut=='2'"  >车辆费</text><text class='review_bodyItembodyItemfd1_0_c3_c1_c3_c0_c0_c0_c0_c1_2'   v-if= "cut=='3'"  >车辆保险费</text><text class='review_bodyItembodyItemfd1_0_c3_c1_c3_c0_c0_c0_c0_c1_3'   v-if= "cut=='4'"  >办公费</text><text class='review_bodyItembodyItemfd1_0_c3_c1_c3_c0_c0_c0_c0_c1_4'   v-if= "cut=='5'"  >招待费</text><text class='review_bodyItembodyItemfd1_0_c3_c1_c3_c0_c0_c0_c0_c1_5'   v-if= "cut=='6'"  >水电费</text><text class='review_bodyItembodyItemfd1_0_c3_c1_c3_c0_c0_c0_c0_c1_6'   v-if= "cut=='7'"  >会费</text>
<text class='review_bodyItembodyItemfd1_0_c3_c1_c3_c0_c0_c0_c0_c2'   v-if= "cut=='1'"  >10:10</text><text class='review_bodyItembodyItemfd1_0_c3_c1_c3_c0_c0_c0_c0_c2_1'   v-if= "cut=='2'"  >车辆费</text><text class='review_bodyItembodyItemfd1_0_c3_c1_c3_c0_c0_c0_c0_c2_2'   v-if= "cut=='3'"  >车辆保险费</text><text class='review_bodyItembodyItemfd1_0_c3_c1_c3_c0_c0_c0_c0_c2_3'   v-if= "cut=='4'"  >办公费</text><text class='review_bodyItembodyItemfd1_0_c3_c1_c3_c0_c0_c0_c0_c2_4'   v-if= "cut=='5'"  >招待费</text><text class='review_bodyItembodyItemfd1_0_c3_c1_c3_c0_c0_c0_c0_c2_5'   v-if= "cut=='6'"  >水电费</text><text class='review_bodyItembodyItemfd1_0_c3_c1_c3_c0_c0_c0_c0_c2_6'   v-if= "cut=='7'"  >会费</text>
</view>
    <view   class='flex flex-wrap align-center'     >
        <text class='review_bodyItembodyItemfd1_0_c3_c1_c3_c0_c0_c0_c1_c0' >待提交</text>
</view>
</view>
    <view   class='flex flex-wrap align-center review_bodyItembodyItemfd1_0_c3_c1_c3_c0_c0_c1'     >
        <text class='review_bodyItembodyItemfd1_0_c3_c1_c3_c0_c0_c1_c0' >申请人</text>
<text class='flex-sub review_bodyItembodyItemfd1_0_c3_c1_c3_c0_c0_c1_c1' >陈沉沉</text>
</view>
    <view   class='flex flex-wrap align-start review_bodyItembodyItemfd1_0_c3_c1_c3_c0_c0_c2'     >
        <text class='review_bodyItembodyItemfd1_0_c3_c1_c3_c0_c0_c2_c0' >回款名称</text>
<text class='flex-sub review_bodyItembodyItemfd1_0_c3_c1_c3_c0_c0_c2_c1' >一期款</text>
</view>
    <view   class='flex flex-wrap align-center review_bodyItembodyItemfd1_0_c3_c1_c3_c0_c0_c3'     >
        <text class='review_bodyItembodyItemfd1_0_c3_c1_c3_c0_c0_c3_c0' >回款金额</text>
<text class='review_bodyItembodyItemfd1_0_c3_c1_c3_c0_c0_c3_c1' >￥</text>
<text class='review_bodyItembodyItemfd1_0_c3_c1_c3_c0_c0_c3_c2' >3500</text>
</view>
    <view   class='flex flex-wrap align-start review_bodyItembodyItemfd1_0_c3_c1_c3_c0_c0_c4'     >
        <text class='review_bodyItembodyItemfd1_0_c3_c1_c3_c0_c0_c4_c0' >项目编号</text>
<text class='flex-sub review_bodyItembodyItemfd1_0_c3_c1_c3_c0_c0_c4_c1' >2022-N4-001-J</text>
</view>
    <view   class='flex flex-wrap align-center review_bodyItembodyItemfd1_0_c3_c1_c3_c0_c0_c5'     >
        <text class='review_bodyItembodyItemfd1_0_c3_c1_c3_c0_c0_c5_c0' >项目名称</text>
<text class='flex-sub review_bodyItembodyItemfd1_0_c3_c1_c3_c0_c0_c5_c1' >二阳县光电产业园基础设施建设项目</text>
</view>
    <view   class='flex flex-wrap align-center review_bodyItembodyItemfd1_0_c3_c1_c3_c0_c0_c6'     >
        <text class='review_bodyItembodyItemfd1_0_c3_c1_c3_c0_c0_c6_c0' >申请时间</text>
<text class='review_bodyItembodyItemfd1_0_c3_c1_c3_c0_c0_c6_c1' >2022-08-08</text>
<text class='review_bodyItembodyItemfd1_0_c3_c1_c3_c0_c0_c6_c2' >10:10</text>
</view>
</view>
    <view   class='flex flex-wrap align-center justify-end review_bodyItembodyItemfd1_0_c3_c1_c3_c0_c1'     >
        <button class='review_bodyItembodyItemfd1_0_c3_c1_c3_c0_c1_c0' >编辑</button>
<button class='review_bodyItembodyItemfd1_0_c3_c1_c3_c0_c1_c1' @tap.stop="popupShow1666341756433=true"  >提交</button>
</view>
</view>
</view>            <view class="benben_tabsbodyItemfd1_0_c3_c1-body-item flex flex-direction flex-wrap align-stretch review_bodybodyItemfd1_0_c3_c1_c4" v-if=" tabss == '2' " :id="`benben_tabsbodyItemfd1_0_c3_c1-body-item-${'2'}`">
    <view   class='flex flex-direction flex-wrap align-stretch review_bodyItembodyItemfd1_0_c3_c1_c4_c0'  @tap.stop="handleJumpDiy" data-type="navigateTo" :data-url="`/pages/applicationCenter/management/management?type=2`"   >
            <view   class='flex flex-direction flex-wrap align-stretch'     >
            <view   class='flex flex-wrap align-center justify-between review_bodyItembodyItemfd1_0_c3_c1_c4_c0_c0_c0'     >
            <view   class='flex flex-wrap align-center'     >
        <text class='review_bodyItembodyItemfd1_0_c3_c1_c4_c0_c0_c0_c0_c0' >创建时间：</text>
<text class='review_bodyItembodyItemfd1_0_c3_c1_c4_c0_c0_c0_c0_c1'   v-if= "cut=='1'"  >2022-08-08</text><text class='review_bodyItembodyItemfd1_0_c3_c1_c4_c0_c0_c0_c0_c1_1'   v-if= "cut=='2'"  >车辆费</text><text class='review_bodyItembodyItemfd1_0_c3_c1_c4_c0_c0_c0_c0_c1_2'   v-if= "cut=='3'"  >车辆保险费</text><text class='review_bodyItembodyItemfd1_0_c3_c1_c4_c0_c0_c0_c0_c1_3'   v-if= "cut=='4'"  >办公费</text><text class='review_bodyItembodyItemfd1_0_c3_c1_c4_c0_c0_c0_c0_c1_4'   v-if= "cut=='5'"  >招待费</text><text class='review_bodyItembodyItemfd1_0_c3_c1_c4_c0_c0_c0_c0_c1_5'   v-if= "cut=='6'"  >水电费</text><text class='review_bodyItembodyItemfd1_0_c3_c1_c4_c0_c0_c0_c0_c1_6'   v-if= "cut=='7'"  >会费</text>
<text class='review_bodyItembodyItemfd1_0_c3_c1_c4_c0_c0_c0_c0_c2'   v-if= "cut=='1'"  >10:10</text><text class='review_bodyItembodyItemfd1_0_c3_c1_c4_c0_c0_c0_c0_c2_1'   v-if= "cut=='2'"  >车辆费</text><text class='review_bodyItembodyItemfd1_0_c3_c1_c4_c0_c0_c0_c0_c2_2'   v-if= "cut=='3'"  >车辆保险费</text><text class='review_bodyItembodyItemfd1_0_c3_c1_c4_c0_c0_c0_c0_c2_3'   v-if= "cut=='4'"  >办公费</text><text class='review_bodyItembodyItemfd1_0_c3_c1_c4_c0_c0_c0_c0_c2_4'   v-if= "cut=='5'"  >招待费</text><text class='review_bodyItembodyItemfd1_0_c3_c1_c4_c0_c0_c0_c0_c2_5'   v-if= "cut=='6'"  >水电费</text><text class='review_bodyItembodyItemfd1_0_c3_c1_c4_c0_c0_c0_c0_c2_6'   v-if= "cut=='7'"  >会费</text>
</view>
    <view   class='flex flex-wrap align-center'     >
        <text class='review_bodyItembodyItemfd1_0_c3_c1_c4_c0_c0_c0_c1_c0' >待确认</text>
</view>
</view>
    <view   class='flex flex-wrap align-center review_bodyItembodyItemfd1_0_c3_c1_c4_c0_c0_c1'     >
        <text class='review_bodyItembodyItemfd1_0_c3_c1_c4_c0_c0_c1_c0' >申请人</text>
<text class='flex-sub review_bodyItembodyItemfd1_0_c3_c1_c4_c0_c0_c1_c1' >陈沉沉</text>
</view>
    <view   class='flex flex-wrap align-start review_bodyItembodyItemfd1_0_c3_c1_c4_c0_c0_c2'     >
        <text class='review_bodyItembodyItemfd1_0_c3_c1_c4_c0_c0_c2_c0' >回款名称</text>
<text class='flex-sub review_bodyItembodyItemfd1_0_c3_c1_c4_c0_c0_c2_c1' >一期款</text>
</view>
    <view   class='flex flex-wrap align-center review_bodyItembodyItemfd1_0_c3_c1_c4_c0_c0_c3'     >
        <text class='review_bodyItembodyItemfd1_0_c3_c1_c4_c0_c0_c3_c0' >回款金额</text>
<text class='review_bodyItembodyItemfd1_0_c3_c1_c4_c0_c0_c3_c1' >￥</text>
<text class='review_bodyItembodyItemfd1_0_c3_c1_c4_c0_c0_c3_c2' >3500</text>
</view>
    <view   class='flex flex-wrap align-start review_bodyItembodyItemfd1_0_c3_c1_c4_c0_c0_c4'     >
        <text class='review_bodyItembodyItemfd1_0_c3_c1_c4_c0_c0_c4_c0' >项目编号</text>
<text class='flex-sub review_bodyItembodyItemfd1_0_c3_c1_c4_c0_c0_c4_c1' >2022-N4-001-J</text>
</view>
    <view   class='flex flex-wrap align-center review_bodyItembodyItemfd1_0_c3_c1_c4_c0_c0_c5'     >
        <text class='review_bodyItembodyItemfd1_0_c3_c1_c4_c0_c0_c5_c0' >项目名称</text>
<text class='flex-sub review_bodyItembodyItemfd1_0_c3_c1_c4_c0_c0_c5_c1' >二阳县光电产业园基础设施建设项目</text>
</view>
    <view   class='flex flex-wrap align-center review_bodyItembodyItemfd1_0_c3_c1_c4_c0_c0_c6'     >
        <text class='review_bodyItembodyItemfd1_0_c3_c1_c4_c0_c0_c6_c0' >申请时间</text>
<text class='review_bodyItembodyItemfd1_0_c3_c1_c4_c0_c0_c6_c1' >2022-08-08</text>
<text class='review_bodyItembodyItemfd1_0_c3_c1_c4_c0_c0_c6_c2' >10:10</text>
</view>
</view>
</view>
</view>            <view class="benben_tabsbodyItemfd1_0_c3_c1-body-item flex flex-direction flex-wrap align-stretch review_bodybodyItemfd1_0_c3_c1_c5" v-if=" tabss == '3' " :id="`benben_tabsbodyItemfd1_0_c3_c1-body-item-${'3'}`">
    <view   class='flex flex-direction flex-wrap align-stretch review_bodyItembodyItemfd1_0_c3_c1_c5_c0'  @tap.stop="handleJumpDiy" data-type="navigateTo" :data-url="`/pages/applicationCenter/management/management?type=3`"   >
            <view   class='flex flex-direction flex-wrap align-stretch'     >
            <view   class='flex flex-wrap align-center justify-between review_bodyItembodyItemfd1_0_c3_c1_c5_c0_c0_c0'     >
            <view   class='flex flex-wrap align-center'     >
        <text class='review_bodyItembodyItemfd1_0_c3_c1_c5_c0_c0_c0_c0_c0' >创建时间：</text>
<text class='review_bodyItembodyItemfd1_0_c3_c1_c5_c0_c0_c0_c0_c1'   v-if= "cut=='1'"  >2022-08-08</text><text class='review_bodyItembodyItemfd1_0_c3_c1_c5_c0_c0_c0_c0_c1_1'   v-if= "cut=='2'"  >车辆费</text><text class='review_bodyItembodyItemfd1_0_c3_c1_c5_c0_c0_c0_c0_c1_2'   v-if= "cut=='3'"  >车辆保险费</text><text class='review_bodyItembodyItemfd1_0_c3_c1_c5_c0_c0_c0_c0_c1_3'   v-if= "cut=='4'"  >办公费</text><text class='review_bodyItembodyItemfd1_0_c3_c1_c5_c0_c0_c0_c0_c1_4'   v-if= "cut=='5'"  >招待费</text><text class='review_bodyItembodyItemfd1_0_c3_c1_c5_c0_c0_c0_c0_c1_5'   v-if= "cut=='6'"  >水电费</text><text class='review_bodyItembodyItemfd1_0_c3_c1_c5_c0_c0_c0_c0_c1_6'   v-if= "cut=='7'"  >会费</text>
<text class='review_bodyItembodyItemfd1_0_c3_c1_c5_c0_c0_c0_c0_c2'   v-if= "cut=='1'"  >10:10</text><text class='review_bodyItembodyItemfd1_0_c3_c1_c5_c0_c0_c0_c0_c2_1'   v-if= "cut=='2'"  >车辆费</text><text class='review_bodyItembodyItemfd1_0_c3_c1_c5_c0_c0_c0_c0_c2_2'   v-if= "cut=='3'"  >车辆保险费</text><text class='review_bodyItembodyItemfd1_0_c3_c1_c5_c0_c0_c0_c0_c2_3'   v-if= "cut=='4'"  >办公费</text><text class='review_bodyItembodyItemfd1_0_c3_c1_c5_c0_c0_c0_c0_c2_4'   v-if= "cut=='5'"  >招待费</text><text class='review_bodyItembodyItemfd1_0_c3_c1_c5_c0_c0_c0_c0_c2_5'   v-if= "cut=='6'"  >水电费</text><text class='review_bodyItembodyItemfd1_0_c3_c1_c5_c0_c0_c0_c0_c2_6'   v-if= "cut=='7'"  >会费</text>
</view>
    <view   class='flex flex-wrap align-center'     >
        <text class='review_bodyItembodyItemfd1_0_c3_c1_c5_c0_c0_c0_c1_c0' >确认通过</text>
</view>
</view>
    <view   class='flex flex-wrap align-center review_bodyItembodyItemfd1_0_c3_c1_c5_c0_c0_c1'     >
        <text class='review_bodyItembodyItemfd1_0_c3_c1_c5_c0_c0_c1_c0' >申请人</text>
<text class='flex-sub review_bodyItembodyItemfd1_0_c3_c1_c5_c0_c0_c1_c1' >陈沉沉</text>
</view>
    <view   class='flex flex-wrap align-start review_bodyItembodyItemfd1_0_c3_c1_c5_c0_c0_c2'     >
        <text class='review_bodyItembodyItemfd1_0_c3_c1_c5_c0_c0_c2_c0' >一期款</text>
<text class='flex-sub review_bodyItembodyItemfd1_0_c3_c1_c5_c0_c0_c2_c1' >出差</text>
</view>
    <view   class='flex flex-wrap align-center review_bodyItembodyItemfd1_0_c3_c1_c5_c0_c0_c3'     >
        <text class='review_bodyItembodyItemfd1_0_c3_c1_c5_c0_c0_c3_c0' >回款金额</text>
<text class='review_bodyItembodyItemfd1_0_c3_c1_c5_c0_c0_c3_c1' >￥</text>
<text class='review_bodyItembodyItemfd1_0_c3_c1_c5_c0_c0_c3_c2' >3500</text>
</view>
    <view   class='flex flex-wrap align-start review_bodyItembodyItemfd1_0_c3_c1_c5_c0_c0_c4'     >
        <text class='review_bodyItembodyItemfd1_0_c3_c1_c5_c0_c0_c4_c0' >项目编号</text>
<text class='flex-sub review_bodyItembodyItemfd1_0_c3_c1_c5_c0_c0_c4_c1' >2022-N4-001-J</text>
</view>
    <view   class='flex flex-wrap align-center review_bodyItembodyItemfd1_0_c3_c1_c5_c0_c0_c5'     >
        <text class='review_bodyItembodyItemfd1_0_c3_c1_c5_c0_c0_c5_c0' >项目名称</text>
<text class='flex-sub review_bodyItembodyItemfd1_0_c3_c1_c5_c0_c0_c5_c1' >二阳县光电产业园基础设施建设项目</text>
</view>
    <view   class='flex flex-wrap align-center review_bodyItembodyItemfd1_0_c3_c1_c5_c0_c0_c6'     >
        <text class='review_bodyItembodyItemfd1_0_c3_c1_c5_c0_c0_c6_c0' >申请时间</text>
<text class='review_bodyItembodyItemfd1_0_c3_c1_c5_c0_c0_c6_c1' >2022-08-08</text>
<text class='review_bodyItembodyItemfd1_0_c3_c1_c5_c0_c0_c6_c2' >10:10</text>
</view>
</view>
</view>
</view>            <view class="benben_tabsbodyItemfd1_0_c3_c1-body-item flex flex-direction flex-wrap align-stretch review_bodybodyItemfd1_0_c3_c1_c6" v-if=" tabss == '4' " :id="`benben_tabsbodyItemfd1_0_c3_c1-body-item-${'4'}`">
    <view   class='flex flex-direction flex-wrap align-stretch review_bodyItembodyItemfd1_0_c3_c1_c6_c0'  @tap.stop="handleJumpDiy" data-type="navigateTo" :data-url="`/pages/applicationCenter/management/management?type=4`"   >
            <view   class='flex flex-direction flex-wrap align-stretch review_bodyItembodyItemfd1_0_c3_c1_c6_c0_c0'     >
            <view   class='flex flex-wrap align-center justify-between review_bodyItembodyItemfd1_0_c3_c1_c6_c0_c0_c0'     >
            <view   class='flex flex-wrap align-center'     >
        <text class='review_bodyItembodyItemfd1_0_c3_c1_c6_c0_c0_c0_c0_c0' >创建时间：</text>
<text class='review_bodyItembodyItemfd1_0_c3_c1_c6_c0_c0_c0_c0_c1'   v-if= "cut=='1'"  >2022-08-08</text><text class='review_bodyItembodyItemfd1_0_c3_c1_c6_c0_c0_c0_c0_c1_1'   v-if= "cut=='2'"  >车辆费</text><text class='review_bodyItembodyItemfd1_0_c3_c1_c6_c0_c0_c0_c0_c1_2'   v-if= "cut=='3'"  >车辆保险费</text><text class='review_bodyItembodyItemfd1_0_c3_c1_c6_c0_c0_c0_c0_c1_3'   v-if= "cut=='4'"  >办公费</text><text class='review_bodyItembodyItemfd1_0_c3_c1_c6_c0_c0_c0_c0_c1_4'   v-if= "cut=='5'"  >招待费</text><text class='review_bodyItembodyItemfd1_0_c3_c1_c6_c0_c0_c0_c0_c1_5'   v-if= "cut=='6'"  >水电费</text><text class='review_bodyItembodyItemfd1_0_c3_c1_c6_c0_c0_c0_c0_c1_6'   v-if= "cut=='7'"  >会费</text>
<text class='review_bodyItembodyItemfd1_0_c3_c1_c6_c0_c0_c0_c0_c2'   v-if= "cut=='1'"  >10:10</text><text class='review_bodyItembodyItemfd1_0_c3_c1_c6_c0_c0_c0_c0_c2_1'   v-if= "cut=='2'"  >车辆费</text><text class='review_bodyItembodyItemfd1_0_c3_c1_c6_c0_c0_c0_c0_c2_2'   v-if= "cut=='3'"  >车辆保险费</text><text class='review_bodyItembodyItemfd1_0_c3_c1_c6_c0_c0_c0_c0_c2_3'   v-if= "cut=='4'"  >办公费</text><text class='review_bodyItembodyItemfd1_0_c3_c1_c6_c0_c0_c0_c0_c2_4'   v-if= "cut=='5'"  >招待费</text><text class='review_bodyItembodyItemfd1_0_c3_c1_c6_c0_c0_c0_c0_c2_5'   v-if= "cut=='6'"  >水电费</text><text class='review_bodyItembodyItemfd1_0_c3_c1_c6_c0_c0_c0_c0_c2_6'   v-if= "cut=='7'"  >会费</text>
</view>
    <view   class='flex flex-wrap align-center'     >
        <text class='review_bodyItembodyItemfd1_0_c3_c1_c6_c0_c0_c0_c1_c0' >确认失败</text>
</view>
</view>
    <view   class='flex flex-wrap align-center review_bodyItembodyItemfd1_0_c3_c1_c6_c0_c0_c1'     >
        <text class='review_bodyItembodyItemfd1_0_c3_c1_c6_c0_c0_c1_c0' >申请人</text>
<text class='flex-sub review_bodyItembodyItemfd1_0_c3_c1_c6_c0_c0_c1_c1' >陈沉沉</text>
</view>
    <view   class='flex flex-wrap align-start review_bodyItembodyItemfd1_0_c3_c1_c6_c0_c0_c2'     >
        <text class='review_bodyItembodyItemfd1_0_c3_c1_c6_c0_c0_c2_c0' >回款名称</text>
<text class='flex-sub review_bodyItembodyItemfd1_0_c3_c1_c6_c0_c0_c2_c1' >一期款</text>
</view>
    <view   class='flex flex-wrap align-center review_bodyItembodyItemfd1_0_c3_c1_c6_c0_c0_c3'     >
        <text class='review_bodyItembodyItemfd1_0_c3_c1_c6_c0_c0_c3_c0' >回款金额</text>
<text class='review_bodyItembodyItemfd1_0_c3_c1_c6_c0_c0_c3_c1' >￥</text>
<text class='review_bodyItembodyItemfd1_0_c3_c1_c6_c0_c0_c3_c2' >3500</text>
</view>
    <view   class='flex flex-wrap align-start review_bodyItembodyItemfd1_0_c3_c1_c6_c0_c0_c4'     >
        <text class='review_bodyItembodyItemfd1_0_c3_c1_c6_c0_c0_c4_c0' >项目编号</text>
<text class='flex-sub review_bodyItembodyItemfd1_0_c3_c1_c6_c0_c0_c4_c1' >2022-N4-001-J</text>
</view>
    <view   class='flex flex-wrap align-center review_bodyItembodyItemfd1_0_c3_c1_c6_c0_c0_c5'     >
        <text class='review_bodyItembodyItemfd1_0_c3_c1_c6_c0_c0_c5_c0' >项目名称</text>
<text class='flex-sub review_bodyItembodyItemfd1_0_c3_c1_c6_c0_c0_c5_c1' >二阳县光电产业园基础设施建设项目</text>
</view>
    <view   class='flex flex-wrap align-center review_bodyItembodyItemfd1_0_c3_c1_c6_c0_c0_c6'     >
        <text class='review_bodyItembodyItemfd1_0_c3_c1_c6_c0_c0_c6_c0' >申请时间</text>
<text class='review_bodyItembodyItemfd1_0_c3_c1_c6_c0_c0_c6_c1' >2022-08-08</text>
<text class='review_bodyItembodyItemfd1_0_c3_c1_c6_c0_c0_c6_c2' >10:10</text>
</view>
</view>
    <view   class='flex flex-wrap align-center justify-end review_bodyItembodyItemfd1_0_c3_c1_c6_c0_c1'     >
        <button class='review_bodyItembodyItemfd1_0_c3_c1_c6_c0_c1_c0' >编辑</button>
<button class='review_bodyItembodyItemfd1_0_c3_c1_c6_c0_c1_c1' >提交</button>
</view>
</view>
</view>
        </view>
</view>
</view>            <view class="benben_tabsfd1_0-body-item flex flex-direction flex-wrap align-stretch" v-if=" tabs == '2' " :id="`benben_tabsfd1_0-body-item-${'2'}`">
    <view   class='flex flex-wrap align-center review_bodyItemfd1_0_c4_c0'     >
        <image class='review_bodyItemfd1_0_c4_c0_c0' mode="aspectFit"  :src='STATIC_URL+"37.png"'></image>
<input class='flex-sub review_bodyItemfd1_0_c4_c0_c1'  type="text" placeholder="搜索" confirm-type="done" :maxlength="-1" placeholder-style="color:#999;font-size:28rpx"  v-model="bodyItemfd1_0_c4_c0_c1" />
</view>

<view>
        <benben-flex-tabs class-name='review_benbenTabsbodyItemfd1_0_c4_c1' v-model="tabss" ref="benben_tabsbodyItemfd1_0_c4_c1" select-mark="benben_tabsbodyItemfd1_0_c4_c1" key="benben_tabsbodyItemfd1_0_c4_c1" :open-title-type='false' :open-sticky='true' :top='88' :is-show-content='true' :scrollspy='false'  :tabs-info.sync="tabsInfobodyItemfd1_0_c4_c1"  >
            
                    <scroll-view
          @scroll="tabsInfobodyItemfd1_0_c4_c1.scrollX = $event.detail.scrollLeft"
          id="benben_tabsbodyItemfd1_0_c4_c1"
          class="benben-tabs"
          style="width:750rpx"
          :scroll-x="true"
          :scroll-left.sync="tabsInfobodyItemfd1_0_c4_c1.moveX"
          scroll-with-animation="all .3s ease"
        >
          <view class="benben-tabs-content" id="benben_tabsbodyItemfd1_0_c4_c1-content">
            <view id="benben_tabsbodyItemfd1_0_c4_c1-title" class="benben-tabs-title flex flex align-center justify-around">
                        <view 
                :class="{ 'checkTitlebodyItemfd1_0_c4_c1': tabss == '1', 'flex flex-wrap align-center review_titlebodyItemfd1_0_c4_c1_c3': true }"
                @tap="tabss = '1'"
                :id="`benben_tabsbodyItemfd1_0_c4_c1-title-item-${'1'}`"
                
              >
                
<text  >待确认</text>

              </view>            <view 
                :class="{ 'checkTitlebodyItemfd1_0_c4_c1': tabss == '3', 'flex flex-wrap align-center review_titlebodyItemfd1_0_c4_c1_c4': true }"
                @tap="tabss = '3'"
                :id="`benben_tabsbodyItemfd1_0_c4_c1-title-item-${'3'}`"
                
              >
                
<text  >确认通过</text>

              </view>            <view 
                :class="{ 'checkTitlebodyItemfd1_0_c4_c1': tabss == '4', 'flex flex-wrap align-center review_titlebodyItemfd1_0_c4_c1_c5': true }"
                @tap="tabss = '4'"
                :id="`benben_tabsbodyItemfd1_0_c4_c1-title-item-${'4'}`"
                
              >
                
<text  >确认失败</text>

              </view>
            </view>
            <view :style="{ left: tabsInfobodyItemfd1_0_c4_c1.lineleft, maxWidth: tabsInfobodyItemfd1_0_c4_c1.lineWidth }" id="benben_tabsbodyItemfd1_0_c4_c1-line" class="benben-tabs-line flex benben-flex-tabs-line review_linebodyItemfd1_0_c4_c1"></view>
          </view>
        </scroll-view>
            
        </benben-flex-tabs>
                <view>
                        <view class="benben_tabsbodyItemfd1_0_c4_c1-body-item flex flex-direction flex-wrap align-stretch review_bodybodyItemfd1_0_c4_c1_c3" v-if=" tabss == '1' " :id="`benben_tabsbodyItemfd1_0_c4_c1-body-item-${'1'}`">
    <view   class='flex flex-direction flex-wrap align-stretch review_bodyItembodyItemfd1_0_c4_c1_c3_c0'  @tap.stop="handleJumpDiy" data-type="navigateTo" :data-url="`/pages/applicationCenter/receivableReview/receivableReview?type=1`"   >
            <view   class='flex flex-direction flex-wrap align-stretch review_bodyItembodyItemfd1_0_c4_c1_c3_c0_c0'     >
            <view   class='flex flex-wrap align-center justify-between review_bodyItembodyItemfd1_0_c4_c1_c3_c0_c0_c0'     >
            <view   class='flex flex-wrap align-center'     >
        <text class='review_bodyItembodyItemfd1_0_c4_c1_c3_c0_c0_c0_c0_c0' >创建时间：</text>
<text class='review_bodyItembodyItemfd1_0_c4_c1_c3_c0_c0_c0_c0_c1'   v-if= "cut=='1'"  >2022-08-08</text><text class='review_bodyItembodyItemfd1_0_c4_c1_c3_c0_c0_c0_c0_c1_1'   v-if= "cut=='2'"  >车辆费</text><text class='review_bodyItembodyItemfd1_0_c4_c1_c3_c0_c0_c0_c0_c1_2'   v-if= "cut=='3'"  >车辆保险费</text><text class='review_bodyItembodyItemfd1_0_c4_c1_c3_c0_c0_c0_c0_c1_3'   v-if= "cut=='4'"  >办公费</text><text class='review_bodyItembodyItemfd1_0_c4_c1_c3_c0_c0_c0_c0_c1_4'   v-if= "cut=='5'"  >招待费</text><text class='review_bodyItembodyItemfd1_0_c4_c1_c3_c0_c0_c0_c0_c1_5'   v-if= "cut=='6'"  >水电费</text><text class='review_bodyItembodyItemfd1_0_c4_c1_c3_c0_c0_c0_c0_c1_6'   v-if= "cut=='7'"  >会费</text>
<text class='review_bodyItembodyItemfd1_0_c4_c1_c3_c0_c0_c0_c0_c2'   v-if= "cut=='1'"  >10:10</text><text class='review_bodyItembodyItemfd1_0_c4_c1_c3_c0_c0_c0_c0_c2_1'   v-if= "cut=='2'"  >车辆费</text><text class='review_bodyItembodyItemfd1_0_c4_c1_c3_c0_c0_c0_c0_c2_2'   v-if= "cut=='3'"  >车辆保险费</text><text class='review_bodyItembodyItemfd1_0_c4_c1_c3_c0_c0_c0_c0_c2_3'   v-if= "cut=='4'"  >办公费</text><text class='review_bodyItembodyItemfd1_0_c4_c1_c3_c0_c0_c0_c0_c2_4'   v-if= "cut=='5'"  >招待费</text><text class='review_bodyItembodyItemfd1_0_c4_c1_c3_c0_c0_c0_c0_c2_5'   v-if= "cut=='6'"  >水电费</text><text class='review_bodyItembodyItemfd1_0_c4_c1_c3_c0_c0_c0_c0_c2_6'   v-if= "cut=='7'"  >会费</text>
</view>
    <view   class='flex flex-wrap align-center'     >
        <text class='review_bodyItembodyItemfd1_0_c4_c1_c3_c0_c0_c0_c1_c0' >待确认</text>
</view>
</view>
    <view   class='flex flex-wrap align-center review_bodyItembodyItemfd1_0_c4_c1_c3_c0_c0_c1'     >
        <text class='review_bodyItembodyItemfd1_0_c4_c1_c3_c0_c0_c1_c0' >申请人</text>
<text class='flex-sub review_bodyItembodyItemfd1_0_c4_c1_c3_c0_c0_c1_c1' >陈沉沉</text>
</view>
    <view   class='flex flex-wrap align-start review_bodyItembodyItemfd1_0_c4_c1_c3_c0_c0_c2'     >
        <text class='review_bodyItembodyItemfd1_0_c4_c1_c3_c0_c0_c2_c0' >回款名称</text>
<text class='flex-sub review_bodyItembodyItemfd1_0_c4_c1_c3_c0_c0_c2_c1' >一期款</text>
</view>
    <view   class='flex flex-wrap align-center review_bodyItembodyItemfd1_0_c4_c1_c3_c0_c0_c3'     >
        <text class='review_bodyItembodyItemfd1_0_c4_c1_c3_c0_c0_c3_c0' >回款金额</text>
<text class='review_bodyItembodyItemfd1_0_c4_c1_c3_c0_c0_c3_c1' >￥</text>
<text class='review_bodyItembodyItemfd1_0_c4_c1_c3_c0_c0_c3_c2' >3500</text>
</view>
    <view   class='flex flex-wrap align-start review_bodyItembodyItemfd1_0_c4_c1_c3_c0_c0_c4'     >
        <text class='review_bodyItembodyItemfd1_0_c4_c1_c3_c0_c0_c4_c0' >项目编号</text>
<text class='flex-sub review_bodyItembodyItemfd1_0_c4_c1_c3_c0_c0_c4_c1' >2022-N4-001-J</text>
</view>
    <view   class='flex flex-wrap align-center review_bodyItembodyItemfd1_0_c4_c1_c3_c0_c0_c5'     >
        <text class='review_bodyItembodyItemfd1_0_c4_c1_c3_c0_c0_c5_c0' >项目名称</text>
<text class='flex-sub review_bodyItembodyItemfd1_0_c4_c1_c3_c0_c0_c5_c1' >二阳县光电产业园基础设施建设项目</text>
</view>
    <view   class='flex flex-wrap align-center review_bodyItembodyItemfd1_0_c4_c1_c3_c0_c0_c6'     >
        <text class='review_bodyItembodyItemfd1_0_c4_c1_c3_c0_c0_c6_c0' >申请时间</text>
<text class='review_bodyItembodyItemfd1_0_c4_c1_c3_c0_c0_c6_c1' >2022-08-08</text>
<text class='review_bodyItembodyItemfd1_0_c4_c1_c3_c0_c0_c6_c2' >10:10</text>
</view>
</view>
    <view   class='flex flex-wrap align-center justify-end review_bodyItembodyItemfd1_0_c4_c1_c3_c0_c1'     >
        <button class='review_bodyItembodyItemfd1_0_c4_c1_c3_c0_c1_c0' @tap.stop="popupShow1666341314870=true"  >驳回</button>
<button class='review_bodyItembodyItemfd1_0_c4_c1_c3_c0_c1_c1' @tap.stop="popupShow1666341018305=true"  >通过</button>
</view>
</view>
</view>            <view class="benben_tabsbodyItemfd1_0_c4_c1-body-item flex flex-direction flex-wrap align-stretch review_bodybodyItemfd1_0_c4_c1_c4" v-if=" tabss == '3' " :id="`benben_tabsbodyItemfd1_0_c4_c1-body-item-${'3'}`">
    <view   class='flex flex-direction flex-wrap align-stretch review_bodyItembodyItemfd1_0_c4_c1_c4_c0'  @tap.stop="handleJumpDiy" data-type="navigateTo" :data-url="`/pages/applicationCenter/receivableReview/receivableReview?type=2`"   >
            <view   class='flex flex-direction flex-wrap align-stretch'     >
            <view   class='flex flex-wrap align-center justify-between review_bodyItembodyItemfd1_0_c4_c1_c4_c0_c0_c0'     >
            <view   class='flex flex-wrap align-center'     >
        <text class='review_bodyItembodyItemfd1_0_c4_c1_c4_c0_c0_c0_c0_c0' >创建时间：</text>
<text class='review_bodyItembodyItemfd1_0_c4_c1_c4_c0_c0_c0_c0_c1'   v-if= "cut=='1'"  >2022-08-08</text><text class='review_bodyItembodyItemfd1_0_c4_c1_c4_c0_c0_c0_c0_c1_1'   v-if= "cut=='2'"  >车辆费</text><text class='review_bodyItembodyItemfd1_0_c4_c1_c4_c0_c0_c0_c0_c1_2'   v-if= "cut=='3'"  >车辆保险费</text><text class='review_bodyItembodyItemfd1_0_c4_c1_c4_c0_c0_c0_c0_c1_3'   v-if= "cut=='4'"  >办公费</text><text class='review_bodyItembodyItemfd1_0_c4_c1_c4_c0_c0_c0_c0_c1_4'   v-if= "cut=='5'"  >招待费</text><text class='review_bodyItembodyItemfd1_0_c4_c1_c4_c0_c0_c0_c0_c1_5'   v-if= "cut=='6'"  >水电费</text><text class='review_bodyItembodyItemfd1_0_c4_c1_c4_c0_c0_c0_c0_c1_6'   v-if= "cut=='7'"  >会费</text>
<text class='review_bodyItembodyItemfd1_0_c4_c1_c4_c0_c0_c0_c0_c2'   v-if= "cut=='1'"  >10:10</text><text class='review_bodyItembodyItemfd1_0_c4_c1_c4_c0_c0_c0_c0_c2_1'   v-if= "cut=='2'"  >车辆费</text><text class='review_bodyItembodyItemfd1_0_c4_c1_c4_c0_c0_c0_c0_c2_2'   v-if= "cut=='3'"  >车辆保险费</text><text class='review_bodyItembodyItemfd1_0_c4_c1_c4_c0_c0_c0_c0_c2_3'   v-if= "cut=='4'"  >办公费</text><text class='review_bodyItembodyItemfd1_0_c4_c1_c4_c0_c0_c0_c0_c2_4'   v-if= "cut=='5'"  >招待费</text><text class='review_bodyItembodyItemfd1_0_c4_c1_c4_c0_c0_c0_c0_c2_5'   v-if= "cut=='6'"  >水电费</text><text class='review_bodyItembodyItemfd1_0_c4_c1_c4_c0_c0_c0_c0_c2_6'   v-if= "cut=='7'"  >会费</text>
</view>
    <view   class='flex flex-wrap align-center'     >
        <text class='review_bodyItembodyItemfd1_0_c4_c1_c4_c0_c0_c0_c1_c0' >确认通过</text>
</view>
</view>
    <view   class='flex flex-wrap align-center review_bodyItembodyItemfd1_0_c4_c1_c4_c0_c0_c1'     >
        <text class='review_bodyItembodyItemfd1_0_c4_c1_c4_c0_c0_c1_c0' >申请人</text>
<text class='flex-sub review_bodyItembodyItemfd1_0_c4_c1_c4_c0_c0_c1_c1' >陈沉沉</text>
</view>
    <view   class='flex flex-wrap align-start review_bodyItembodyItemfd1_0_c4_c1_c4_c0_c0_c2'     >
        <text class='review_bodyItembodyItemfd1_0_c4_c1_c4_c0_c0_c2_c0' >一期款</text>
<text class='flex-sub review_bodyItembodyItemfd1_0_c4_c1_c4_c0_c0_c2_c1' >出差</text>
</view>
    <view   class='flex flex-wrap align-center review_bodyItembodyItemfd1_0_c4_c1_c4_c0_c0_c3'     >
        <text class='review_bodyItembodyItemfd1_0_c4_c1_c4_c0_c0_c3_c0' >回款金额</text>
<text class='review_bodyItembodyItemfd1_0_c4_c1_c4_c0_c0_c3_c1' >￥</text>
<text class='review_bodyItembodyItemfd1_0_c4_c1_c4_c0_c0_c3_c2' >3500</text>
</view>
    <view   class='flex flex-wrap align-start review_bodyItembodyItemfd1_0_c4_c1_c4_c0_c0_c4'     >
        <text class='review_bodyItembodyItemfd1_0_c4_c1_c4_c0_c0_c4_c0' >项目编号</text>
<text class='flex-sub review_bodyItembodyItemfd1_0_c4_c1_c4_c0_c0_c4_c1' >2022-N4-001-J</text>
</view>
    <view   class='flex flex-wrap align-center review_bodyItembodyItemfd1_0_c4_c1_c4_c0_c0_c5'     >
        <text class='review_bodyItembodyItemfd1_0_c4_c1_c4_c0_c0_c5_c0' >项目名称</text>
<text class='flex-sub review_bodyItembodyItemfd1_0_c4_c1_c4_c0_c0_c5_c1' >二阳县光电产业园基础设施建设项目</text>
</view>
    <view   class='flex flex-wrap align-center review_bodyItembodyItemfd1_0_c4_c1_c4_c0_c0_c6'     >
        <text class='review_bodyItembodyItemfd1_0_c4_c1_c4_c0_c0_c6_c0' >申请时间</text>
<text class='review_bodyItembodyItemfd1_0_c4_c1_c4_c0_c0_c6_c1' >2022-08-08</text>
<text class='review_bodyItembodyItemfd1_0_c4_c1_c4_c0_c0_c6_c2' >10:10</text>
</view>
</view>
</view>
</view>            <view class="benben_tabsbodyItemfd1_0_c4_c1-body-item flex flex-direction flex-wrap align-stretch review_bodybodyItemfd1_0_c4_c1_c5" v-if=" tabss == '4' " :id="`benben_tabsbodyItemfd1_0_c4_c1-body-item-${'4'}`">
    <view   class='flex flex-direction flex-wrap align-stretch review_bodyItembodyItemfd1_0_c4_c1_c5_c0'  @tap.stop="handleJumpDiy" data-type="navigateTo" :data-url="`/pages/applicationCenter/receivableReview/receivableReview?type=3`"   >
            <view   class='flex flex-direction flex-wrap align-stretch'     >
            <view   class='flex flex-wrap align-center justify-between review_bodyItembodyItemfd1_0_c4_c1_c5_c0_c0_c0'     >
            <view   class='flex flex-wrap align-center'     >
        <text class='review_bodyItembodyItemfd1_0_c4_c1_c5_c0_c0_c0_c0_c0' >创建时间：</text>
<text class='review_bodyItembodyItemfd1_0_c4_c1_c5_c0_c0_c0_c0_c1'   v-if= "cut=='1'"  >2022-08-08</text><text class='review_bodyItembodyItemfd1_0_c4_c1_c5_c0_c0_c0_c0_c1_1'   v-if= "cut=='2'"  >车辆费</text><text class='review_bodyItembodyItemfd1_0_c4_c1_c5_c0_c0_c0_c0_c1_2'   v-if= "cut=='3'"  >车辆保险费</text><text class='review_bodyItembodyItemfd1_0_c4_c1_c5_c0_c0_c0_c0_c1_3'   v-if= "cut=='4'"  >办公费</text><text class='review_bodyItembodyItemfd1_0_c4_c1_c5_c0_c0_c0_c0_c1_4'   v-if= "cut=='5'"  >招待费</text><text class='review_bodyItembodyItemfd1_0_c4_c1_c5_c0_c0_c0_c0_c1_5'   v-if= "cut=='6'"  >水电费</text><text class='review_bodyItembodyItemfd1_0_c4_c1_c5_c0_c0_c0_c0_c1_6'   v-if= "cut=='7'"  >会费</text>
<text class='review_bodyItembodyItemfd1_0_c4_c1_c5_c0_c0_c0_c0_c2'   v-if= "cut=='1'"  >10:10</text><text class='review_bodyItembodyItemfd1_0_c4_c1_c5_c0_c0_c0_c0_c2_1'   v-if= "cut=='2'"  >车辆费</text><text class='review_bodyItembodyItemfd1_0_c4_c1_c5_c0_c0_c0_c0_c2_2'   v-if= "cut=='3'"  >车辆保险费</text><text class='review_bodyItembodyItemfd1_0_c4_c1_c5_c0_c0_c0_c0_c2_3'   v-if= "cut=='4'"  >办公费</text><text class='review_bodyItembodyItemfd1_0_c4_c1_c5_c0_c0_c0_c0_c2_4'   v-if= "cut=='5'"  >招待费</text><text class='review_bodyItembodyItemfd1_0_c4_c1_c5_c0_c0_c0_c0_c2_5'   v-if= "cut=='6'"  >水电费</text><text class='review_bodyItembodyItemfd1_0_c4_c1_c5_c0_c0_c0_c0_c2_6'   v-if= "cut=='7'"  >会费</text>
</view>
    <view   class='flex flex-wrap align-center'     >
        <text class='review_bodyItembodyItemfd1_0_c4_c1_c5_c0_c0_c0_c1_c0' >确认失败</text>
</view>
</view>
    <view   class='flex flex-wrap align-center review_bodyItembodyItemfd1_0_c4_c1_c5_c0_c0_c1'     >
        <text class='review_bodyItembodyItemfd1_0_c4_c1_c5_c0_c0_c1_c0' >申请人</text>
<text class='flex-sub review_bodyItembodyItemfd1_0_c4_c1_c5_c0_c0_c1_c1' >陈沉沉</text>
</view>
    <view   class='flex flex-wrap align-start review_bodyItembodyItemfd1_0_c4_c1_c5_c0_c0_c2'     >
        <text class='review_bodyItembodyItemfd1_0_c4_c1_c5_c0_c0_c2_c0' >回款名称</text>
<text class='flex-sub review_bodyItembodyItemfd1_0_c4_c1_c5_c0_c0_c2_c1' >一期款</text>
</view>
    <view   class='flex flex-wrap align-center review_bodyItembodyItemfd1_0_c4_c1_c5_c0_c0_c3'     >
        <text class='review_bodyItembodyItemfd1_0_c4_c1_c5_c0_c0_c3_c0' >回款金额</text>
<text class='review_bodyItembodyItemfd1_0_c4_c1_c5_c0_c0_c3_c1' >￥</text>
<text class='review_bodyItembodyItemfd1_0_c4_c1_c5_c0_c0_c3_c2' >3500</text>
</view>
    <view   class='flex flex-wrap align-start review_bodyItembodyItemfd1_0_c4_c1_c5_c0_c0_c4'     >
        <text class='review_bodyItembodyItemfd1_0_c4_c1_c5_c0_c0_c4_c0' >项目编号</text>
<text class='flex-sub review_bodyItembodyItemfd1_0_c4_c1_c5_c0_c0_c4_c1' >2022-N4-001-J</text>
</view>
    <view   class='flex flex-wrap align-center review_bodyItembodyItemfd1_0_c4_c1_c5_c0_c0_c5'     >
        <text class='review_bodyItembodyItemfd1_0_c4_c1_c5_c0_c0_c5_c0' >项目名称</text>
<text class='flex-sub review_bodyItembodyItemfd1_0_c4_c1_c5_c0_c0_c5_c1' >二阳县光电产业园基础设施建设项目</text>
</view>
    <view   class='flex flex-wrap align-center review_bodyItembodyItemfd1_0_c4_c1_c5_c0_c0_c6'     >
        <text class='review_bodyItembodyItemfd1_0_c4_c1_c5_c0_c0_c6_c0' >申请时间</text>
<text class='review_bodyItembodyItemfd1_0_c4_c1_c5_c0_c0_c6_c1' >2022-08-08</text>
<text class='review_bodyItembodyItemfd1_0_c4_c1_c5_c0_c0_c6_c2' >10:10</text>
</view>
</view>
</view>
</view>
        </view>
</view>
</view>
        </view>
</view>
</view>
<!---flex布局flex布局结束-->
    <view class="flex benben-position-layout flex flex-wrap align-center review_flex_2"    :style="{top:(800+StatusBarRpx)+'rpx'}">
        <image class='review_fd2_0' :src='STATIC_URL+"40.png"' @tap.stop="handleJumpDiy" data-type="navigateTo" :data-url="`/pages/applicationCenter/collection/collection`" ></image>

        </view>
<view :style="{height: '88rpx'}"  ></view>
<benben-popup v-model="popupShow1666341314870" :mask="true"  mode='center'>
    <!---确认驳回flex布局开始-->
 <view class="flex flex-direction flex-wrap align-stretch benben-flex-layout review_flex_3"   >
            <view   class='flex flex-direction flex-wrap align-stretch review_fd3_0'     >
            <view   class='flex flex-direction flex-wrap align-center review_fd3_0_c0'     >
        <text class='review_fd3_0_c0_c0' >提示</text>
<text class='review_fd3_0_c0_c1' >确认驳回该条回款信息吗？</text>
</view>
    <view   class='flex flex-wrap align-center'     >
        <button class='flex-sub review_fd3_0_c1_c0' @tap.stop="popupShow1666341314870=false"  >取消</button>
<button class='flex-sub review_fd3_0_c1_c1' @tap.stop="getstate()"  >确定</button>
</view>
</view>
</view>
<!---确认驳回flex布局结束-->
</benben-popup>
<benben-popup v-model="popupShow1666341018305" :mask="true"  mode='center'>
    <!---确认通过flex布局开始-->
 <view class="flex flex-direction flex-wrap align-stretch benben-flex-layout review_flex_4"   >
            <view   class='flex flex-direction flex-wrap align-stretch review_fd4_0'     >
            <view   class='flex flex-direction flex-wrap align-center review_fd4_0_c0'     >
        <text class='review_fd4_0_c0_c0' >提示</text>
<text class='review_fd4_0_c0_c1' >确认通过该条回款信息吗？</text>
</view>
    <view   class='flex flex-wrap align-center'     >
        <button class='flex-sub review_fd4_0_c1_c0' @tap.stop="popupShow1666341018305=false"  >取消</button>
<button class='flex-sub review_fd4_0_c1_c1' >确定</button>
</view>
</view>
</view>
<!---确认通过flex布局结束-->
</benben-popup>
<benben-popup v-model="popupShow1666341466827" :mask="true"  mode='center'>
    <!---驳回原因flex布局开始-->
 <view class="flex flex-direction flex-wrap align-stretch benben-flex-layout review_flex_5"   >
            <view   class='flex flex-direction flex-wrap align-center review_fd5_0'     >
        <text class='review_fd5_0_c0' >驳回原因</text>
<view class='flex flex-wrap review_fd5_0_c1'>
<textarea class='flex review_input_fd5_0_c1' confirm-type="done" :placeholder="'请输入驳回原因'" :maxlength="240" placeholder-style="color:#999;font-size:28rpx"   v-model="fd5_0_c1" />

</view>
    <view   class='flex flex-wrap align-center review_fd5_0_c2'     >
        <button class='review_fd5_0_c2_c0' >取消</button>
<button class='review_fd5_0_c2_c1' >确认</button>
</view>
</view>
</view>
<!---驳回原因flex布局结束-->
</benben-popup>
<benben-popup v-model="popupShow1666341756433" :mask="true"  mode='center'>
    <!---提交回款flex布局开始-->
 <view class="flex flex-direction flex-wrap align-stretch benben-flex-layout review_flex_6"   >
            <view   class='flex flex-direction flex-wrap align-stretch review_fd6_0'     >
            <view   class='flex flex-direction flex-wrap align-center review_fd6_0_c0'     >
        <text class='review_fd6_0_c0_c0' >提示</text>
<text class='review_fd6_0_c0_c1' >确定要提交该回款吗？</text>
</view>
    <view   class='flex flex-wrap align-center'     >
        <button class='flex-sub review_fd6_0_c1_c0' @tap.stop="popupShow1666341756433=false"  >取消</button>
<button class='flex-sub review_fd6_0_c1_c1' >确定</button>
</view>
</view>
</view>
<!---提交回款flex布局结束-->
</benben-popup>
    
    </view>
</template>
<script>
    
    export default {
        components:{},
        
        data(){
			return {"popupShow1666341756433":false,"fd5_0_c1":"","popupShow1666341466827":false,"popupShow1666341018305":false,"popupShow1666341314870":false,"tabsInfobodyItemfd1_0_c4_c1":{ lineleft: '', lineWidth: '', moveX: 0, scrollX: 0, PageScrollX: 0 },"tabsInfobodyItemfd1_0_c3_c1":{ lineleft: '', lineWidth: '', moveX: 0, scrollX: 0, PageScrollX: 0 },"tabsInfofd1_0":{ lineleft: '', lineWidth: '', moveX: 0, scrollX: 0, PageScrollX: 0 },"bodyItemfd1_0_c3_c0_c1":"","bodyItemfd1_0_c4_c0_c1":"","tabs":"1","cut":"1","tabss":"1"};
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
                            //隐藏与显示
                 getstate(){
                        this.popupShow1666341314870 = false;
    this.popupShow1666341466827 = true;
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
    .review_flex_0{
        background:#fff;background-size: 100% !important;width:750rpx;height:88rpx;overflow:hidden;z-index:10;top:0rpx;background-size:100% auto !important;
    }
    .review_fd0_2{
        width:100rpx;height:88rpx;margin:0rpx 32rpx 0rpx 0rpx;
    }
    .review_fd0_1{
        color:#000000;font-size:36rpx;font-weight:500;line-height:50rpx;
    }
    .review_fd0_0{
        width:100rpx;height:88rpx;margin:0rpx 0rpx 0rpx 32rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c5_c0_c0_c6_c2{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 10rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c5_c0_c0_c6_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c5_c0_c0_c6_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c5_c0_c0_c6{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c5_c0_c0_c5_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c5_c0_c0_c5_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c5_c0_c0_c5{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c5_c0_c0_c4_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c5_c0_c0_c4_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c5_c0_c0_c4{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c5_c0_c0_c3_c2{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c5_c0_c0_c3_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c5_c0_c0_c3_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c5_c0_c0_c3{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c5_c0_c0_c2_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c5_c0_c0_c2_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c5_c0_c0_c2{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c5_c0_c0_c1_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 50rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c5_c0_c0_c1_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c5_c0_c0_c1{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c5_c0_c0_c0_c1_c0{
        color:#0B1898;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c5_c0_c0_c0_c0_c2_6{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c5_c0_c0_c0_c0_c2_5{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c5_c0_c0_c0_c0_c2_4{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c5_c0_c0_c0_c0_c2_3{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c5_c0_c0_c0_c0_c2_2{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c5_c0_c0_c0_c0_c2_1{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c5_c0_c0_c0_c0_c2{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 10rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c5_c0_c0_c0_c0_c1_6{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c5_c0_c0_c0_c0_c1_5{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c5_c0_c0_c0_c0_c1_4{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c5_c0_c0_c0_c0_c1_3{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c5_c0_c0_c0_c0_c1_2{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c5_c0_c0_c0_c0_c1_1{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c5_c0_c0_c0_c0_c1{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c5_c0_c0_c0_c0_c0{
        color:rgba(102, 102, 102, 1);font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c5_c0_c0_c0{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:0rpx 0rpx 20rpx 0rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c5_c0{
        background:#fff;background-size: 100% !important;border-radius:16rpx 16rpx 16rpx 16rpx;padding:32rpx 24rpx 32rpx 24rpx;margin:20rpx 0rpx 0rpx 0rpx;
    }
    .review_bodybodyItemfd1_0_c4_c1_c5{
        padding:0rpx 24rpx 0rpx 24rpx;
    }
    .review_titlebodyItemfd1_0_c4_c1_c5{
        font-size:28rpx;color:rgba(102, 102, 102, 1);
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c4_c0_c0_c6_c2{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 10rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c4_c0_c0_c6_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c4_c0_c0_c6_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c4_c0_c0_c6{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c4_c0_c0_c5_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c4_c0_c0_c5_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c4_c0_c0_c5{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c4_c0_c0_c4_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c4_c0_c0_c4_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c4_c0_c0_c4{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c4_c0_c0_c3_c2{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c4_c0_c0_c3_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c4_c0_c0_c3_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c4_c0_c0_c3{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c4_c0_c0_c2_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 50rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c4_c0_c0_c2_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c4_c0_c0_c2{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c4_c0_c0_c1_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 50rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c4_c0_c0_c1_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c4_c0_c0_c1{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c4_c0_c0_c0_c1_c0{
        color:#0B1898;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c4_c0_c0_c0_c0_c2_6{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c4_c0_c0_c0_c0_c2_5{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c4_c0_c0_c0_c0_c2_4{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c4_c0_c0_c0_c0_c2_3{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c4_c0_c0_c0_c0_c2_2{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c4_c0_c0_c0_c0_c2_1{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c4_c0_c0_c0_c0_c2{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 10rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c4_c0_c0_c0_c0_c1_6{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c4_c0_c0_c0_c0_c1_5{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c4_c0_c0_c0_c0_c1_4{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c4_c0_c0_c0_c0_c1_3{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c4_c0_c0_c0_c0_c1_2{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c4_c0_c0_c0_c0_c1_1{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c4_c0_c0_c0_c0_c1{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c4_c0_c0_c0_c0_c0{
        color:rgba(102, 102, 102, 1);font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c4_c0_c0_c0{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:0rpx 0rpx 20rpx 0rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c4_c0{
        background:#fff;background-size: 100% !important;border-radius:16rpx 16rpx 16rpx 16rpx;padding:32rpx 24rpx 32rpx 24rpx;margin:20rpx 0rpx 0rpx 0rpx;
    }
    .review_bodybodyItemfd1_0_c4_c1_c4{
        padding:0rpx 24rpx 0rpx 24rpx;
    }
    .review_titlebodyItemfd1_0_c4_c1_c4{
        font-size:28rpx;color:rgba(102, 102, 102, 1);
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c3_c0_c1_c1{
        background:rgba(11, 24, 152, 1);background-size: 100% !important;border-radius:28rpx 28rpx 28rpx 28rpx;font-size:24rpx;color:#fff;width:160rpx;height:56rpx;line-height:56rpx;margin:0rpx 0rpx 0rpx 24rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c3_c0_c1_c0{
        border:1px solid #666666;background:#fff;background-size: 100% !important;border-radius:28rpx 28rpx 28rpx 28rpx;font-size:24rpx;color:#333;width:160rpx;height:56rpx;line-height:56rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c3_c0_c1{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c3_c0_c0_c6_c2{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 10rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c3_c0_c0_c6_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c3_c0_c0_c6_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c3_c0_c0_c6{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c3_c0_c0_c5_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c3_c0_c0_c5_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c3_c0_c0_c5{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c3_c0_c0_c4_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c3_c0_c0_c4_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c3_c0_c0_c4{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c3_c0_c0_c3_c2{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c3_c0_c0_c3_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c3_c0_c0_c3_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c3_c0_c0_c3{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c3_c0_c0_c2_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c3_c0_c0_c2_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c3_c0_c0_c2{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c3_c0_c0_c1_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 50rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c3_c0_c0_c1_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c3_c0_c0_c1{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c3_c0_c0_c0_c1_c0{
        color:#0B1898;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c3_c0_c0_c0_c0_c2_6{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c3_c0_c0_c0_c0_c2_5{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c3_c0_c0_c0_c0_c2_4{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c3_c0_c0_c0_c0_c2_3{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c3_c0_c0_c0_c0_c2_2{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c3_c0_c0_c0_c0_c2_1{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c3_c0_c0_c0_c0_c2{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 10rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c3_c0_c0_c0_c0_c1_6{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c3_c0_c0_c0_c0_c1_5{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c3_c0_c0_c0_c0_c1_4{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c3_c0_c0_c0_c0_c1_3{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c3_c0_c0_c0_c0_c1_2{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c3_c0_c0_c0_c0_c1_1{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c3_c0_c0_c0_c0_c1{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c3_c0_c0_c0_c0_c0{
        color:rgba(102, 102, 102, 1);font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c3_c0_c0_c0{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:0rpx 0rpx 20rpx 0rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c3_c0_c0{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:0rpx 0rpx 32rpx 0rpx;
    }
    .review_bodyItembodyItemfd1_0_c4_c1_c3_c0{
        background:#fff;background-size: 100% !important;border-radius:16rpx 16rpx 16rpx 16rpx;padding:32rpx 24rpx 32rpx 24rpx;margin:20rpx 0rpx 0rpx 0rpx;
    }
    .review_bodybodyItemfd1_0_c4_c1_c3{
        padding:0rpx 24rpx 0rpx 24rpx;
    }
    .review_titlebodyItemfd1_0_c4_c1_c3{
        color:rgba(102, 102, 102, 1);font-size:28rpx;
    }
    .review_linebodyItemfd1_0_c4_c1{
        background:url(/static/images/12.png) no-repeat;background-size: 100% !important;width:40rpx;height:6rpx;top:80rpx;background-size:100% auto !important;
    }
    .checkTitlebodyItemfd1_0_c4_c1{
        font-weight:700 !important;font-size:32rpx !important;color:rgba(11, 24, 152, 1) !important;background-color:rgba(243, 246, 251, 1) !important;
    }
    ::v-deep .review_benbenTabsbodyItemfd1_0_c4_c1{
        width:750rpx;height:90rpx;white-space:nowrap;text-align:center;
    }
    .review_bodyItemfd1_0_c4_c0_c1{
        margin:0rpx 0rpx 0rpx 14rpx;color:#333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItemfd1_0_c4_c0_c0{
        width:40rpx;height:40rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .review_bodyItemfd1_0_c4_c0{
        background:#fff;background-size: 100% !important;border-radius:34rpx 34rpx 34rpx 34rpx;padding:16rpx 24rpx 16rpx 24rpx;margin:24rpx 32rpx 0rpx 32rpx;
    }
    .review_titlefd1_0_c4{
        font-size:32rpx;color:rgba(102, 102, 102, 1);
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c6_c0_c1_c1{
        background:rgba(11, 24, 152, 1);background-size: 100% !important;border-radius:28rpx 28rpx 28rpx 28rpx;font-size:24rpx;color:#fff;width:160rpx;height:56rpx;line-height:56rpx;margin:0rpx 0rpx 0rpx 24rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c6_c0_c1_c0{
        border:1px solid #666666;background:#fff;background-size: 100% !important;border-radius:28rpx 28rpx 28rpx 28rpx;font-size:24rpx;color:#333;width:160rpx;height:56rpx;line-height:56rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c6_c0_c1{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c6_c0_c0_c6_c2{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 10rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c6_c0_c0_c6_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c6_c0_c0_c6_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c6_c0_c0_c6{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c6_c0_c0_c5_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c6_c0_c0_c5_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c6_c0_c0_c5{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c6_c0_c0_c4_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c6_c0_c0_c4_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c6_c0_c0_c4{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c6_c0_c0_c3_c2{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c6_c0_c0_c3_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c6_c0_c0_c3_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c6_c0_c0_c3{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c6_c0_c0_c2_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c6_c0_c0_c2_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c6_c0_c0_c2{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c6_c0_c0_c1_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 50rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c6_c0_c0_c1_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c6_c0_c0_c1{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c6_c0_c0_c0_c1_c0{
        color:#0B1898;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c6_c0_c0_c0_c0_c2_6{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c6_c0_c0_c0_c0_c2_5{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c6_c0_c0_c0_c0_c2_4{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c6_c0_c0_c0_c0_c2_3{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c6_c0_c0_c0_c0_c2_2{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c6_c0_c0_c0_c0_c2_1{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c6_c0_c0_c0_c0_c2{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 10rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c6_c0_c0_c0_c0_c1_6{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c6_c0_c0_c0_c0_c1_5{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c6_c0_c0_c0_c0_c1_4{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c6_c0_c0_c0_c0_c1_3{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c6_c0_c0_c0_c0_c1_2{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c6_c0_c0_c0_c0_c1_1{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c6_c0_c0_c0_c0_c1{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c6_c0_c0_c0_c0_c0{
        color:rgba(102, 102, 102, 1);font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c6_c0_c0_c0{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:0rpx 0rpx 20rpx 0rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c6_c0_c0{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:0rpx 0rpx 32rpx 0rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c6_c0{
        background:#fff;background-size: 100% !important;border-radius:16rpx 16rpx 16rpx 16rpx;padding:32rpx 24rpx 32rpx 24rpx;margin:20rpx 0rpx 0rpx 0rpx;
    }
    .review_bodybodyItemfd1_0_c3_c1_c6{
        padding:0rpx 24rpx 0rpx 24rpx;
    }
    .review_titlebodyItemfd1_0_c3_c1_c6{
        font-size:28rpx;color:rgba(102, 102, 102, 1);
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c5_c0_c0_c6_c2{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 10rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c5_c0_c0_c6_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c5_c0_c0_c6_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c5_c0_c0_c6{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c5_c0_c0_c5_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c5_c0_c0_c5_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c5_c0_c0_c5{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c5_c0_c0_c4_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c5_c0_c0_c4_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c5_c0_c0_c4{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c5_c0_c0_c3_c2{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c5_c0_c0_c3_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c5_c0_c0_c3_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c5_c0_c0_c3{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c5_c0_c0_c2_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c5_c0_c0_c2_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c5_c0_c0_c2{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c5_c0_c0_c1_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 50rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c5_c0_c0_c1_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c5_c0_c0_c1{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c5_c0_c0_c0_c1_c0{
        color:#0B1898;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c5_c0_c0_c0_c0_c2_6{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c5_c0_c0_c0_c0_c2_5{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c5_c0_c0_c0_c0_c2_4{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c5_c0_c0_c0_c0_c2_3{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c5_c0_c0_c0_c0_c2_2{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c5_c0_c0_c0_c0_c2_1{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c5_c0_c0_c0_c0_c2{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 10rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c5_c0_c0_c0_c0_c1_6{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c5_c0_c0_c0_c0_c1_5{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c5_c0_c0_c0_c0_c1_4{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c5_c0_c0_c0_c0_c1_3{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c5_c0_c0_c0_c0_c1_2{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c5_c0_c0_c0_c0_c1_1{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c5_c0_c0_c0_c0_c1{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c5_c0_c0_c0_c0_c0{
        color:rgba(102, 102, 102, 1);font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c5_c0_c0_c0{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:0rpx 0rpx 20rpx 0rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c5_c0{
        background:#fff;background-size: 100% !important;border-radius:16rpx 16rpx 16rpx 16rpx;padding:32rpx 24rpx 32rpx 24rpx;margin:20rpx 0rpx 0rpx 0rpx;
    }
    .review_bodybodyItemfd1_0_c3_c1_c5{
        padding:0rpx 24rpx 0rpx 24rpx;
    }
    .review_titlebodyItemfd1_0_c3_c1_c5{
        font-size:28rpx;color:rgba(102, 102, 102, 1);
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c4_c0_c0_c6_c2{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 10rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c4_c0_c0_c6_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c4_c0_c0_c6_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c4_c0_c0_c6{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c4_c0_c0_c5_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c4_c0_c0_c5_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c4_c0_c0_c5{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c4_c0_c0_c4_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c4_c0_c0_c4_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c4_c0_c0_c4{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c4_c0_c0_c3_c2{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c4_c0_c0_c3_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c4_c0_c0_c3_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c4_c0_c0_c3{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c4_c0_c0_c2_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c4_c0_c0_c2_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c4_c0_c0_c2{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c4_c0_c0_c1_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 50rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c4_c0_c0_c1_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c4_c0_c0_c1{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c4_c0_c0_c0_c1_c0{
        color:#0B1898;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c4_c0_c0_c0_c0_c2_6{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c4_c0_c0_c0_c0_c2_5{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c4_c0_c0_c0_c0_c2_4{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c4_c0_c0_c0_c0_c2_3{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c4_c0_c0_c0_c0_c2_2{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c4_c0_c0_c0_c0_c2_1{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c4_c0_c0_c0_c0_c2{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 10rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c4_c0_c0_c0_c0_c1_6{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c4_c0_c0_c0_c0_c1_5{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c4_c0_c0_c0_c0_c1_4{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c4_c0_c0_c0_c0_c1_3{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c4_c0_c0_c0_c0_c1_2{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c4_c0_c0_c0_c0_c1_1{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c4_c0_c0_c0_c0_c1{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c4_c0_c0_c0_c0_c0{
        color:rgba(102, 102, 102, 1);font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c4_c0_c0_c0{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:0rpx 0rpx 20rpx 0rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c4_c0{
        background:#fff;background-size: 100% !important;border-radius:16rpx 16rpx 16rpx 16rpx;padding:32rpx 24rpx 32rpx 24rpx;margin:20rpx 0rpx 0rpx 0rpx;
    }
    .review_bodybodyItemfd1_0_c3_c1_c4{
        padding:0rpx 24rpx 0rpx 24rpx;
    }
    .review_titlebodyItemfd1_0_c3_c1_c4{
        color:rgba(102, 102, 102, 1);font-size:28rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c3_c0_c1_c1{
        background:rgba(11, 24, 152, 1);background-size: 100% !important;border-radius:28rpx 28rpx 28rpx 28rpx;font-size:24rpx;color:#fff;width:160rpx;height:56rpx;line-height:56rpx;margin:0rpx 0rpx 0rpx 24rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c3_c0_c1_c0{
        border:1px solid #666666;background:#fff;background-size: 100% !important;border-radius:28rpx 28rpx 28rpx 28rpx;font-size:24rpx;color:#333;width:160rpx;height:56rpx;line-height:56rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c3_c0_c1{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c3_c0_c0_c6_c2{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 10rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c3_c0_c0_c6_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c3_c0_c0_c6_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c3_c0_c0_c6{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c3_c0_c0_c5_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c3_c0_c0_c5_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c3_c0_c0_c5{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c3_c0_c0_c4_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c3_c0_c0_c4_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c3_c0_c0_c4{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c3_c0_c0_c3_c2{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c3_c0_c0_c3_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c3_c0_c0_c3_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c3_c0_c0_c3{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c3_c0_c0_c2_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c3_c0_c0_c2_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c3_c0_c0_c2{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c3_c0_c0_c1_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 50rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c3_c0_c0_c1_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c3_c0_c0_c1{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c3_c0_c0_c0_c1_c0{
        color:#0B1898;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c3_c0_c0_c0_c0_c2_6{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c3_c0_c0_c0_c0_c2_5{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c3_c0_c0_c0_c0_c2_4{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c3_c0_c0_c0_c0_c2_3{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c3_c0_c0_c0_c0_c2_2{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c3_c0_c0_c0_c0_c2_1{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c3_c0_c0_c0_c0_c2{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 10rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c3_c0_c0_c0_c0_c1_6{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c3_c0_c0_c0_c0_c1_5{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c3_c0_c0_c0_c0_c1_4{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c3_c0_c0_c0_c0_c1_3{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c3_c0_c0_c0_c0_c1_2{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c3_c0_c0_c0_c0_c1_1{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c3_c0_c0_c0_c0_c1{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c3_c0_c0_c0_c0_c0{
        color:rgba(102, 102, 102, 1);font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c3_c0_c0_c0{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:0rpx 0rpx 20rpx 0rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c3_c0_c0{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:0rpx 0rpx 32rpx 0rpx;
    }
    .review_bodyItembodyItemfd1_0_c3_c1_c3_c0{
        background:#fff;background-size: 100% !important;border-radius:16rpx 16rpx 16rpx 16rpx;padding:32rpx 24rpx 32rpx 24rpx;margin:20rpx 0rpx 0rpx 0rpx;
    }
    .review_bodybodyItemfd1_0_c3_c1_c3{
        padding:0rpx 24rpx 0rpx 24rpx;
    }
    .review_titlebodyItemfd1_0_c3_c1_c3{
        color:rgba(102, 102, 102, 1);font-size:28rpx;
    }
    .review_linebodyItemfd1_0_c3_c1{
        background:url(/static/images/12.png) no-repeat;background-size: 100% !important;width:40rpx;height:6rpx;top:80rpx;background-size:100% auto !important;
    }
    .checkTitlebodyItemfd1_0_c3_c1{
        font-weight:700 !important;font-size:32rpx !important;color:rgba(11, 24, 152, 1) !important;background-color:rgba(243, 246, 251, 1) !important;
    }
    ::v-deep .review_benbenTabsbodyItemfd1_0_c3_c1{
        width:750rpx;height:90rpx;white-space:nowrap;text-align:center;
    }
    .review_bodyItemfd1_0_c3_c0_c1{
        margin:0rpx 0rpx 0rpx 14rpx;color:#333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_bodyItemfd1_0_c3_c0_c0{
        width:40rpx;height:40rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .review_bodyItemfd1_0_c3_c0{
        background:#fff;background-size: 100% !important;border-radius:34rpx 34rpx 34rpx 34rpx;padding:16rpx 24rpx 16rpx 24rpx;margin:24rpx 32rpx 0rpx 32rpx;
    }
    .review_titlefd1_0_c3{
        margin:0rpx 50rpx 0rpx 32rpx;font-size:32rpx;color:rgba(102, 102, 102, 1);
    }
    .review_linefd1_0{
        background:rgba(11, 24, 152, 0.3);background-size: 100% !important;width:72rpx;height:12rpx;top:60rpx;background-size:100% auto !important;border-radius:6rpx 6rpx 6rpx 6rpx;
    }
    .checkTitlefd1_0{
        font-weight:700 !important;font-size:36rpx !important;color:#333 !important;background-color:rgba(255, 255, 255, 1) !important;
    }
    ::v-deep .review_benbenTabsfd1_0{
        background:#fff;background-size: 100% !important;width:750rpx;height:90rpx;white-space:nowrap;text-align:center;
    }
    .review_flex_2{
        width:88rpx;height:88rpx;overflow:hidden;z-index:10;right:24rpx;top:800rpx;
    }
    .review_fd2_0{
        width:88rpx;height:88rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .review_flex_3{
        padding:0rpx 105rpx 0rpx 105rpx;
    }
    .review_fd3_0_c1_c1{
        background:#fff;background-size: 100% !important;border-radius:0rpx 0rpx 16rpx 0rpx;font-size:32rpx;color:rgba(11, 24, 152, 1);height:110rpx;line-height:110rpx;
    }
    .review_fd3_0_c1_c0{
        border-right:1px solid rgba(238, 238, 238, 1);background:#fff;background-size: 100% !important;border-radius:0rpx 0rpx 0rpx 16rpx;font-size:32rpx;color:rgba(153, 153, 153, 1);height:110rpx;line-height:110rpx;
    }
    .review_fd3_0_c0_c1{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_fd3_0_c0_c0{
        color:#333333;font-size:32rpx;font-weight:500;line-height:45rpx;margin:0rpx 0rpx 40rpx 0rpx;
    }
    .review_fd3_0_c0{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:40rpx 102rpx 40rpx 102rpx;
    }
    .review_fd3_0{
        background:#fff;background-size: 100% !important;border-radius:16rpx 16rpx 16rpx 16rpx;
    }
    .review_flex_4{
        padding:0rpx 105rpx 0rpx 105rpx;
    }
    .review_fd4_0_c1_c1{
        background:#fff;background-size: 100% !important;border-radius:0rpx 0rpx 16rpx 0rpx;font-size:32rpx;color:rgba(11, 24, 152, 1);height:110rpx;line-height:110rpx;
    }
    .review_fd4_0_c1_c0{
        border-right:1px solid rgba(238, 238, 238, 1);background:#fff;background-size: 100% !important;border-radius:0rpx 0rpx 0rpx 16rpx;font-size:32rpx;color:rgba(153, 153, 153, 1);height:110rpx;line-height:110rpx;
    }
    .review_fd4_0_c0_c1{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_fd4_0_c0_c0{
        color:#333333;font-size:32rpx;font-weight:500;line-height:45rpx;margin:0rpx 0rpx 40rpx 0rpx;
    }
    .review_fd4_0_c0{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:40rpx 102rpx 40rpx 102rpx;
    }
    .review_fd4_0{
        background:#fff;background-size: 100% !important;border-radius:16rpx 16rpx 16rpx 16rpx;
    }
    .review_flex_5{
        padding:0rpx 75rpx 0rpx 75rpx;
    }
    .review_fd5_0_c2_c1{
        background:rgba(11, 24, 152, 1);background-size: 100% !important;border-radius:39rpx 39rpx 39rpx 39rpx;font-size:32rpx;color:#fff;width:200rpx;height:68rpx;line-height:68rpx;margin:0rpx 0rpx 0rpx 50rpx;
    }
    .review_fd5_0_c2_c0{
        border:1px solid #707070;background:#fff;background-size: 100% !important;border-radius:39rpx 39rpx 39rpx 39rpx;font-size:32rpx;color:rgba(153, 153, 153, 1);width:200rpx;height:68rpx;line-height:68rpx;
    }
    .review_fd5_0_c2{
        margin:53rpx 0rpx 0rpx 0rpx;
    }
    .review_input_fd5_0_c1{
        width:100%;height:319rpx;font-size:28rpx;font-weight:400;color:#333;padding:24rpx 0rpx 0rpx 24rpx;
    }
    .review_fd5_0_c1{
        border:1px solid rgba(191, 191, 191, 1);background:#fff;background-size: 100% !important;width:540rpx;border-radius:10rpx 10rpx 10rpx 10rpx;
    }
    .review_fd5_0_c0{
        color:#1A1A1A;font-size:32rpx;font-weight:700;line-height:45rpx;margin:0rpx 0rpx 27rpx 0rpx;
    }
    .review_fd5_0{
        background:#fff;background-size: 100% !important;border-radius:18rpx 18rpx 18rpx 18rpx;padding:35rpx 30rpx 53rpx 30rpx;
    }
    .review_flex_6{
        padding:0rpx 105rpx 0rpx 105rpx;
    }
    .review_fd6_0_c1_c1{
        background:#fff;background-size: 100% !important;border-radius:0rpx 0rpx 16rpx 0rpx;font-size:32rpx;color:rgba(11, 24, 152, 1);height:110rpx;line-height:110rpx;
    }
    .review_fd6_0_c1_c0{
        border-right:1px solid rgba(238, 238, 238, 1);background:#fff;background-size: 100% !important;border-radius:0rpx 0rpx 0rpx 16rpx;font-size:32rpx;color:rgba(153, 153, 153, 1);height:110rpx;line-height:110rpx;
    }
    .review_fd6_0_c0_c1{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .review_fd6_0_c0_c0{
        color:#333333;font-size:32rpx;font-weight:500;line-height:45rpx;margin:0rpx 0rpx 40rpx 0rpx;
    }
    .review_fd6_0_c0{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:40rpx 130rpx 40rpx 130rpx;
    }
    .review_fd6_0{
        background:#fff;background-size: 100% !important;border-radius:16rpx 16rpx 16rpx 16rpx;
    }
</style>