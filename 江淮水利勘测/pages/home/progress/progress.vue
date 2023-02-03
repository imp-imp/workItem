<template>
    <view class="page" :style="themeColor">
        <view class="flex flex-wrap align-center justify-between benben-position-layout flex progress_flex_0" :style="{height:(88+StatusBarRpx)+'rpx',paddingTop:StatusBarRpx+'rpx'}">
            <view class='flex flex-wrap align-center progress_fd0_0' @tap.stop="handleJumpDiy" data-type="back" data-url="1">
                <text class='fu-iconfont2'>&#xe794;</text>
            </view>
            <text class='progress_fd0_1'>详情</text>
            <view class='flex flex-wrap align-center progress_fd0_2'>
            </view>

        </view>
        <view :style="{height: (88+StatusBarRpx)+'rpx'}"></view>
        <!---flex布局flex布局开始-->
        <view class="flex flex-wrap align-center benben-flex-layout">
            <view>
                <benben-flex-tabs class-name='progress_benbenTabsfd1_0' v-model="tabs" ref="benben_tabsfd1_0" select-mark="benben_tabsfd1_0" key="benben_tabsfd1_0" :open-title-type='false' :open-sticky='true' :top='88' :is-show-content='true' :scrollspy='false' :tabs-info.sync="tabsInfofd1_0">

                    <scroll-view @scroll="tabsInfofd1_0.scrollX = $event.detail.scrollLeft" id="benben_tabsfd1_0" class="benben-tabs" style="width:750rpx" :scroll-x="true" :scroll-left.sync="tabsInfofd1_0.moveX" scroll-with-animation="all .3s ease">
                        <view class="benben-tabs-content" id="benben_tabsfd1_0-content">
                            <view id="benben_tabsfd1_0-title" class="benben-tabs-title flex align-center flex ">
                                <view :class="{ 'checkTitlefd1_0': tabs == '1', 'flex flex-wrap align-center progress_titlefd1_0_c3': true }" @tap="tabs = '1'" :id="`benben_tabsfd1_0-title-item-${'1'}`">

                                    <text>信息/概况</text>

                                </view>
                                <view :class="{ 'checkTitlefd1_0': tabs == '2', 'flex flex-wrap align-center progress_titlefd1_0_c4': true }" @tap="tabs = '2'" :id="`benben_tabsfd1_0-title-item-${'2'}`">

                                    <text>项目分配</text>

                                </view>
                                <view :class="{ 'checkTitlefd1_0': tabs == '3', 'flex flex-wrap align-center progress_titlefd1_0_c5': true }" @tap="tabs = '3'" :id="`benben_tabsfd1_0-title-item-${'3'}`">

                                    <text>项目日志</text>

                                </view>
                                <view :class="{ 'checkTitlefd1_0': tabs == '4', 'flex flex-wrap align-center progress_titlefd1_0_c6': true }" @tap="tabs = '4'" :id="`benben_tabsfd1_0-title-item-${'4'}`">

                                    <text>计划</text>

                                </view>
                                <view :class="{ 'checkTitlefd1_0': tabs == '5', 'flex flex-wrap align-center progress_titlefd1_0_c7': true }" @tap="tabs = '5'" :id="`benben_tabsfd1_0-title-item-${'5'}`">

                                    <text>延期记录</text>

                                </view>
                                <view :class="{ 'checkTitlefd1_0': tabs == '6', 'flex flex-wrap align-center progress_titlefd1_0_c8': true }" @tap="tabs = '6'" :id="`benben_tabsfd1_0-title-item-${'6'}`">

                                    <text>项目合同</text>

                                </view>
                                <view :class="{ 'checkTitlefd1_0': tabs == '7', 'flex flex-wrap align-center progress_titlefd1_0_c9': true }" @tap="tabs = '7'" :id="`benben_tabsfd1_0-title-item-${'7'}`">

                                    <text>项目成本</text>

                                </view>
                                <view :class="{ 'checkTitlefd1_0': tabs == '8', 'flex flex-wrap align-center progress_titlefd1_0_c10': true }" @tap="tabs = '8'" :id="`benben_tabsfd1_0-title-item-${'8'}`">

                                    <text>项目回款</text>

                                </view>
                                <view :class="{ 'checkTitlefd1_0': tabs == '9', 'flex flex-wrap align-center progress_titlefd1_0_c11': true }" @tap="tabs = '9'" :id="`benben_tabsfd1_0-title-item-${'9'}`">

                                    <text>开票记录</text>

                                </view>
                                <view :class="{ 'checkTitlefd1_0': tabs == '10', 'flex flex-wrap align-center progress_titlefd1_0_c12': true }" @tap="tabs = '10'" :id="`benben_tabsfd1_0-title-item-${'10'}`">

                                    <text>借支申请</text>

                                </view>
                                <view :class="{ 'checkTitlefd1_0': tabs == '11', 'flex flex-wrap align-center progress_titlefd1_0_c13': true }" @tap="tabs = '11'" :id="`benben_tabsfd1_0-title-item-${'11'}`">

                                    <text>项目得分</text>

                                </view>
                            </view>
                            <view :style="{ left: tabsInfofd1_0.lineleft, maxWidth: tabsInfofd1_0.lineWidth }" id="benben_tabsfd1_0-line" class="benben-tabs-line flex benben-flex-tabs-line progress_linefd1_0"></view>
                        </view>
                    </scroll-view>

                </benben-flex-tabs>
                <view>
                    <view class="benben_tabsfd1_0-body-item flex flex-direction flex-wrap align-stretch progress_bodyfd1_0_c3" v-if=" tabs == '1' " :id="`benben_tabsfd1_0-body-item-${'1'}`">
                        <view class='flex flex-direction flex-wrap align-stretch progress_bodyItemfd1_0_c3_c0'>
                            <text class='progress_bodyItemfd1_0_c3_c0_c0'>项目信息</text>
                            <view class='flex flex-wrap align-center justify-between progress_bodyItemfd1_0_c3_c0_c1'>
                                <view class='flex flex-wrap align-center'>
                                    <text class='progress_bodyItemfd1_0_c3_c0_c1_c0_c0'>*</text>
                                    <text class='progress_bodyItemfd1_0_c3_c0_c1_c0_c1'>项目编号</text>
                                </view>
                                <text class='progress_bodyItemfd1_0_c3_c0_c1_c1'>ZZSA0523</text>
                            </view>
                            <view class='flex flex-wrap align-start justify-between progress_bodyItemfd1_0_c3_c0_c2'>
                                <view class='flex flex-wrap align-center'>
                                    <text class='progress_bodyItemfd1_0_c3_c0_c2_c0_c0'>*</text>
                                    <text class='progress_bodyItemfd1_0_c3_c0_c2_c0_c1'>项目名称</text>
                                </view>
                                <text class='flex-sub progress_bodyItemfd1_0_c3_c0_c2_c1'>山乡归园田居美丽乡村样板片区工程(龙溪村标段)施工</text>
                            </view>
                            <view class='flex flex-wrap align-center justify-between progress_bodyItemfd1_0_c3_c0_c3'>
                                <view class='flex flex-wrap align-center'>
                                    <text class='progress_bodyItemfd1_0_c3_c0_c3_c0_c0'>项目所属部门</text>
                                </view>
                                <text class='progress_bodyItemfd1_0_c3_c0_c3_c1'>经营部-设计一室</text>
                            </view>
                            <view class='flex flex-wrap align-center justify-between progress_bodyItemfd1_0_c3_c0_c4'>
                                <view class='flex flex-wrap align-center'>
                                    <text class='progress_bodyItemfd1_0_c3_c0_c4_c0_c0'>实施方式</text>
                                </view>
                                <text class='progress_bodyItemfd1_0_c3_c0_c4_c1'>直营</text>
                            </view>
                            <view class='flex flex-wrap align-center justify-between progress_bodyItemfd1_0_c3_c0_c5'>
                                <view class='flex flex-wrap align-center'>
                                    <text class='progress_bodyItemfd1_0_c3_c0_c5_c0_c0'>业务类别</text>
                                </view>
                                <text class='progress_bodyItemfd1_0_c3_c0_c5_c1'>勘测设计类</text>
                            </view>
                            <view class='flex flex-wrap align-center justify-between progress_bodyItemfd1_0_c3_c0_c6'>
                                <view class='flex flex-wrap align-center'>
                                    <text class='progress_bodyItemfd1_0_c3_c0_c6_c0_c0'>专业类别</text>
                                </view>
                                <text class='progress_bodyItemfd1_0_c3_c0_c6_c1'>水土保持</text>
                            </view>
                            <view class='flex flex-wrap align-center justify-between progress_bodyItemfd1_0_c3_c0_c7'>
                                <view class='flex flex-wrap align-center'>
                                    <text class='progress_bodyItemfd1_0_c3_c0_c7_c0_c0'>项目金额</text>
                                </view>
                                <text class='progress_bodyItemfd1_0_c3_c0_c7_c1'>128000元</text>
                            </view>
                            <view class='flex flex-wrap align-center justify-between progress_bodyItemfd1_0_c3_c0_c8'>
                                <view class='flex flex-wrap align-center'>
                                    <text class='progress_bodyItemfd1_0_c3_c0_c8_c0_c0'>工程阶段</text>
                                </view>
                                <text class='progress_bodyItemfd1_0_c3_c0_c8_c1'>咨询报告编制</text>
                            </view>
                            <view class='flex flex-wrap align-center justify-between progress_bodyItemfd1_0_c3_c0_c9'>
                                <view class='flex flex-wrap align-center'>
                                    <text class='progress_bodyItemfd1_0_c3_c0_c9_c0_c0'>紧急程度</text>
                                </view>
                                <view class='flex flex-wrap align-center'>
                                    <text class='progress_bodyItemfd1_0_c3_c0_c9_c1_c0' v-if="type=='1'">一般</text><text class='progress_bodyItemfd1_0_c3_c0_c9_c1_c0_1' v-if="type=='2'">紧急</text>
                                    <image class='progress_bodyItemfd1_0_c3_c0_c9_c1_c1' :src='STATIC_URL+"55.png"' v-if="type=='3'"></image>
                                    <image class='progress_bodyItemfd1_0_c3_c0_c9_c1_c1_1' :src='STATIC_URL+"55.png"' v-if="type=='4'"></image>
                                </view>
                            </view>
                            <view class='flex flex-wrap align-center justify-between progress_bodyItemfd1_0_c3_c0_c10'>
                                <view class='flex flex-wrap align-center'>
                                    <text class='progress_bodyItemfd1_0_c3_c0_c10_c0_c0'>项目状态</text>
                                </view>
                                <text class='progress_bodyItemfd1_0_c3_c0_c10_c1' v-if="type=='1'">进行中</text><text class='progress_bodyItemfd1_0_c3_c0_c10_c1_1' v-if="type=='2'">已完成</text><text class='progress_bodyItemfd1_0_c3_c0_c10_c1_2' v-if="type=='3'">暂停</text><text class='progress_bodyItemfd1_0_c3_c0_c10_c1_3' v-if="type=='4'">失控</text>
                            </view>
                            <view class='flex flex-wrap align-center justify-between progress_bodyItemfd1_0_c3_c0_c11' v-if="type=='3'">
                                <view class='flex flex-wrap align-center'>
                                    <text class='progress_bodyItemfd1_0_c3_c0_c11_c0_c0'>暂停原因</text>
                                </view>
                                <text class='progress_bodyItemfd1_0_c3_c0_c11_c1'>勘测区域有变</text>
                            </view>
                            <view class='flex flex-wrap align-center justify-between progress_bodyItemfd1_0_c3_c0_c12' v-if="type=='3'">
                                <view class='flex flex-wrap align-center'>
                                    <text class='progress_bodyItemfd1_0_c3_c0_c12_c0_c0'>重启时间</text>
                                </view>
                                <text class='progress_bodyItemfd1_0_c3_c0_c12_c1'>2022-10-05</text>
                            </view>
                            <view class='flex flex-wrap align-center justify-between progress_bodyItemfd1_0_c3_c0_c13'>
                                <view class='flex flex-wrap align-center'>
                                    <text class='progress_bodyItemfd1_0_c3_c0_c13_c0_c0'>项目存档</text>
                                </view>
                                <text class='progress_bodyItemfd1_0_c3_c0_c13_c1' v-if="type=='1'">未存档</text><text class='progress_bodyItemfd1_0_c3_c0_c13_c1_1' v-if="type=='2'">已存档</text><text class='progress_bodyItemfd1_0_c3_c0_c13_c1_2' v-if="type=='3'">未存档</text><text class='progress_bodyItemfd1_0_c3_c0_c13_c1_3' v-if="type=='4'">未存档</text>
                            </view>
                            <view class='flex flex-wrap align-center justify-between progress_bodyItemfd1_0_c3_c0_c14'>
                                <view class='flex flex-wrap align-center'>
                                    <text class='progress_bodyItemfd1_0_c3_c0_c14_c0_c0'>总工期</text>
                                </view>
                                <text class='progress_bodyItemfd1_0_c3_c0_c14_c1'>50天</text>
                            </view>
                            <view class='flex flex-wrap align-center justify-between progress_bodyItemfd1_0_c3_c0_c15'>
                                <view class='flex flex-wrap align-center'>
                                    <text class='progress_bodyItemfd1_0_c3_c0_c15_c0_c0'>总外包金额</text>
                                </view>
                                <text class='progress_bodyItemfd1_0_c3_c0_c15_c1'>28000元</text>
                            </view>
                            <view class='flex flex-wrap align-center justify-between progress_bodyItemfd1_0_c3_c0_c16'>
                                <view class='flex flex-wrap align-center'>
                                    <text class='progress_bodyItemfd1_0_c3_c0_c16_c0_c0'>超期</text>
                                </view>
                                <view class='flex flex-wrap align-center'>
                                    <text class='progress_bodyItemfd1_0_c3_c0_c16_c1_c0' v-if="type=='1'">是</text><text class='progress_bodyItemfd1_0_c3_c0_c16_c1_c0_1' v-if="type=='2' || type=='3'">否</text><text class='progress_bodyItemfd1_0_c3_c0_c16_c1_c0_2' v-if="type=='4'">否</text>
                                    <text class='progress_bodyItemfd1_0_c3_c0_c16_c1_c1' v-if="type=='1'">5天</text>
                                    <button class='progress_bodyItemfd1_0_c3_c0_c16_c1_c2' @tap.stop="handleJumpDiy" data-type="navigateTo" :data-url="`/pages/home/extension/extension`" v-if="type=='1'">申请延期</button>
                                </view>
                            </view>
                        </view>

                        <view class='flex flex-direction flex-wrap align-stretch progress_bodyItemfd1_0_c3_c1'>
                            <text class='progress_bodyItemfd1_0_c3_c1_c0'>项目概况</text>
                            <view class='flex flex-wrap align-center justify-between progress_bodyItemfd1_0_c3_c1_c1'>
                                <view class='flex flex-wrap align-center'>
                                    <text class='progress_bodyItemfd1_0_c3_c1_c1_c0_c0'>项目总投资</text>
                                </view>
                                <text class='progress_bodyItemfd1_0_c3_c1_c1_c1'>200000元</text>
                            </view>
                            <view class='flex flex-wrap align-center justify-between progress_bodyItemfd1_0_c3_c1_c2'>
                                <view class='flex flex-wrap align-center'>
                                    <text class='progress_bodyItemfd1_0_c3_c1_c2_c0_c0'>项目地址</text>
                                </view>
                                <text class='progress_bodyItemfd1_0_c3_c1_c2_c1'>河南省郑州市金水区龙子湖北路36号</text>
                            </view>
                            <view class='flex flex-wrap align-center justify-between progress_bodyItemfd1_0_c3_c1_c3'>
                                <view class='flex flex-wrap align-center'>
                                    <text class='progress_bodyItemfd1_0_c3_c1_c3_c0_c0'>建设区域</text>
                                </view>
                                <text class='progress_bodyItemfd1_0_c3_c1_c3_c1'>河南省 郑州市 二七区</text>
                            </view>
                            <view class='flex flex-wrap align-center justify-between progress_bodyItemfd1_0_c3_c1_c4'>
                                <view class='flex flex-wrap align-center'>
                                    <text class='progress_bodyItemfd1_0_c3_c1_c4_c0_c0'>业主名称</text>
                                </view>
                                <text class='progress_bodyItemfd1_0_c3_c1_c4_c1'>二阳县光电产业园</text>
                            </view>
                            <view class='flex flex-wrap align-center justify-between progress_bodyItemfd1_0_c3_c1_c5'>
                                <view class='flex flex-wrap align-center'>
                                    <text class='progress_bodyItemfd1_0_c3_c1_c5_c0_c0'>业主联系人</text>
                                </view>
                                <text class='progress_bodyItemfd1_0_c3_c1_c5_c1'>王先生</text>
                            </view>
                            <view class='flex flex-wrap align-center justify-between progress_bodyItemfd1_0_c3_c1_c6'>
                                <view class='flex flex-wrap align-center'>
                                    <text class='progress_bodyItemfd1_0_c3_c1_c6_c0_c0'>业主联系电话</text>
                                </view>
                                <text class='progress_bodyItemfd1_0_c3_c1_c6_c1'>15500000000</text>
                            </view>
                            <view class='flex flex-wrap align-start justify-between progress_bodyItemfd1_0_c3_c1_c7'>
                                <view class='flex flex-wrap align-center'>
                                    <text class='progress_bodyItemfd1_0_c3_c1_c7_c0_c0'>项目概况</text>
                                </view>
                                <text class='flex-sub progress_bodyItemfd1_0_c3_c1_c7_c1'>设备维修项目、地库电气维修余项设备维修项目、地库电气维修余项</text>
                            </view>
                            <view class='flex flex-wrap align-center justify-between progress_bodyItemfd1_0_c3_c1_c8'>
                                <view class='flex flex-wrap align-center'>
                                    <text class='progress_bodyItemfd1_0_c3_c1_c8_c0_c0'>制作要求</text>
                                </view>
                                <text class='progress_bodyItemfd1_0_c3_c1_c8_c1'>详细明确，认真负责</text>
                            </view>
                            <view class='flex flex-wrap align-center justify-between progress_bodyItemfd1_0_c3_c1_c9'>
                                <view class='flex flex-wrap align-center'>
                                    <text class='progress_bodyItemfd1_0_c3_c1_c9_c0_c0'>存在问题</text>
                                </view>
                                <text class='progress_bodyItemfd1_0_c3_c1_c9_c1'>无</text>
                            </view>
                            <view class='flex flex-wrap align-center justify-between progress_bodyItemfd1_0_c3_c1_c10'>
                                <view class='flex flex-wrap align-center'>
                                    <text class='progress_bodyItemfd1_0_c3_c1_c10_c0_c0'>备注</text>
                                </view>
                                <text class='progress_bodyItemfd1_0_c3_c1_c10_c1'>南阳和郑州公司合作，由南阳为主导</text>
                            </view>
                        </view>
                    </view>
                    <view class="benben_tabsfd1_0-body-item flex flex-direction flex-wrap align-stretch progress_bodyfd1_0_c4" v-if=" tabs == '2' " :id="`benben_tabsfd1_0-body-item-${'2'}`">
                        <view class='flex flex-direction flex-wrap align-stretch progress_bodyItemfd1_0_c4_c0'>
                            <view>
                                <benben-flex-tabs class-name='progress_benbenTabsbodyItemfd1_0_c4_c0_c0' v-model="cut" ref="benben_tabsbodyItemfd1_0_c4_c0_c0" select-mark="benben_tabsbodyItemfd1_0_c4_c0_c0" key="benben_tabsbodyItemfd1_0_c4_c0_c0" :open-title-type='false' :open-sticky='true' :top='202' :is-show-content='true' :scrollspy='false' :tabs-info.sync="tabsInfobodyItemfd1_0_c4_c0_c0">

                                    <scroll-view @scroll="tabsInfobodyItemfd1_0_c4_c0_c0.scrollX = $event.detail.scrollLeft" id="benben_tabsbodyItemfd1_0_c4_c0_c0" class="benben-tabs" style="width:750rpx" :scroll-x="true" :scroll-left.sync="tabsInfobodyItemfd1_0_c4_c0_c0.moveX" scroll-with-animation="all .3s ease">
                                        <view class="benben-tabs-content" id="benben_tabsbodyItemfd1_0_c4_c0_c0-content">
                                            <view id="benben_tabsbodyItemfd1_0_c4_c0_c0-title" class="benben-tabs-title flex align-center flex ">
                                                <view :class="{ 'checkTitlebodyItemfd1_0_c4_c0_c0': cut == '1', 'flex flex-wrap align-center progress_titlebodyItemfd1_0_c4_c0_c0_c3': true }" @tap="cut = '1'" :id="`benben_tabsbodyItemfd1_0_c4_c0_c0-title-item-${'1'}`">

                                                    <text>项目分配</text>

                                                </view>
                                                <view :class="{ 'checkTitlebodyItemfd1_0_c4_c0_c0': cut == '2', 'flex flex-wrap align-center progress_titlebodyItemfd1_0_c4_c0_c0_c4': true }" @tap="cut = '2'" :id="`benben_tabsbodyItemfd1_0_c4_c0_c0-title-item-${'2'}`">

                                                    <text>工作量饼状图</text>

                                                </view>
                                            </view>
                                            <view :style="{ left: tabsInfobodyItemfd1_0_c4_c0_c0.lineleft, maxWidth: tabsInfobodyItemfd1_0_c4_c0_c0.lineWidth }" id="benben_tabsbodyItemfd1_0_c4_c0_c0-line" class="benben-tabs-line flex benben-flex-tabs-line progress_linebodyItemfd1_0_c4_c0_c0"></view>
                                        </view>
                                    </scroll-view>

                                </benben-flex-tabs>
                                <view>
                                    <view class="benben_tabsbodyItemfd1_0_c4_c0_c0-body-item flex flex-direction flex-wrap align-stretch progress_bodybodyItemfd1_0_c4_c0_c0_c3" v-if=" cut == '1' " :id="`benben_tabsbodyItemfd1_0_c4_c0_c0-body-item-${'1'}`">
                                        <view class='flex flex-wrap align-center justify-between progress_bodyItembodyItemfd1_0_c4_c0_c0_c3_c0'>
                                            <text class='progress_bodyItembodyItemfd1_0_c4_c0_c0_c3_c0_c0'>主负责人</text>
                                            <text class='progress_bodyItembodyItemfd1_0_c4_c0_c0_c3_c0_c1'>陈沉沉</text>
                                        </view>

                                        <view class='flex flex-wrap align-center justify-between progress_bodyItembodyItemfd1_0_c4_c0_c0_c3_c1'>
                                            <text class='progress_bodyItembodyItemfd1_0_c4_c0_c0_c3_c1_c0'>所属部门</text>
                                            <text class='progress_bodyItembodyItemfd1_0_c4_c0_c0_c3_c1_c1'>经营部</text>
                                        </view>

                                        <text class='progress_bodyItembodyItemfd1_0_c4_c0_c0_c3_c2'>项目参与人员</text>

                                        <view class='flex flex-direction flex-wrap align-stretch progress_bodyItembodyItemfd1_0_c4_c0_c0_c3_c3'>
                                            <view class='flex flex-wrap align-center'>
                                                <text class='progress_bodyItembodyItemfd1_0_c4_c0_c0_c3_c3_c0_c0'>姓名</text>
                                                <text class='progress_bodyItembodyItemfd1_0_c4_c0_c0_c3_c3_c0_c1'>张伞伞</text>
                                            </view>
                                            <view class='flex flex-wrap align-center progress_bodyItembodyItemfd1_0_c4_c0_c0_c3_c3_c1'>
                                                <text class='progress_bodyItembodyItemfd1_0_c4_c0_c0_c3_c3_c1_c0'>专业分工</text>
                                                <text class='progress_bodyItembodyItemfd1_0_c4_c0_c0_c3_c3_c1_c1'>图纸设计</text>
                                            </view>
                                            <view class='flex flex-wrap align-center'>
                                                <text class='progress_bodyItembodyItemfd1_0_c4_c0_c0_c3_c3_c2_c0'>工作比例</text>
                                                <text class='progress_bodyItembodyItemfd1_0_c4_c0_c0_c3_c3_c2_c1'>30%</text>
                                            </view>
                                            <view class='flex flex-wrap align-center progress_bodyItembodyItemfd1_0_c4_c0_c0_c3_c3_c3'>
                                                <text class='progress_bodyItembodyItemfd1_0_c4_c0_c0_c3_c3_c3_c0'>开始时间</text>
                                                <text class='progress_bodyItembodyItemfd1_0_c4_c0_c0_c3_c3_c3_c1'>2022-08-08</text>
                                            </view>
                                            <view class='flex flex-wrap align-center'>
                                                <text class='progress_bodyItembodyItemfd1_0_c4_c0_c0_c3_c3_c4_c0'>结束时间</text>
                                                <text class='progress_bodyItembodyItemfd1_0_c4_c0_c0_c3_c3_c4_c1'>2022-08-08</text>
                                            </view>
                                            <view class='flex flex-wrap align-center progress_bodyItembodyItemfd1_0_c4_c0_c0_c3_c3_c5'>
                                                <text class='progress_bodyItembodyItemfd1_0_c4_c0_c0_c3_c3_c5_c0'>总计时长</text>
                                                <text class='progress_bodyItembodyItemfd1_0_c4_c0_c0_c3_c3_c5_c1'>12天</text>
                                            </view>
                                            <view class='flex flex-wrap align-center'>
                                                <text class='progress_bodyItembodyItemfd1_0_c4_c0_c0_c3_c3_c6_c0'>剩余时长</text>
                                                <text class='progress_bodyItembodyItemfd1_0_c4_c0_c0_c3_c3_c6_c1'>10天</text>
                                            </view>
                                            <view class='flex flex-wrap align-center progress_bodyItembodyItemfd1_0_c4_c0_c0_c3_c3_c7'>
                                                <text class='progress_bodyItembodyItemfd1_0_c4_c0_c0_c3_c3_c7_c0'>个人产值</text>
                                                <text class='progress_bodyItembodyItemfd1_0_c4_c0_c0_c3_c3_c7_c1'>0</text>
                                            </view>
                                        </view>
                                    </view>
                                    <view class="benben_tabsbodyItemfd1_0_c4_c0_c0-body-item flex flex-direction flex-wrap align-stretch" v-if=" cut == '2' " :id="`benben_tabsbodyItemfd1_0_c4_c0_c0-body-item-${'2'}`"></view>
                                </view>
                            </view>
                        </view>
                    </view>
                    <view class="benben_tabsfd1_0-body-item flex flex-direction flex-wrap align-stretch progress_bodyfd1_0_c5" v-if=" tabs == '3' " :id="`benben_tabsfd1_0-body-item-${'3'}`">
                        <view class='flex flex-direction flex-wrap align-stretch progress_bodyItemfd1_0_c5_c0'>
                            <view>
                                <benben-flex-tabs class-name='progress_benbenTabsbodyItemfd1_0_c5_c0_c0' v-model="cut" ref="benben_tabsbodyItemfd1_0_c5_c0_c0" select-mark="benben_tabsbodyItemfd1_0_c5_c0_c0" key="benben_tabsbodyItemfd1_0_c5_c0_c0" :open-title-type='false' :open-sticky='true' :top='202' :is-show-content='true' :scrollspy='false' :tabs-info.sync="tabsInfobodyItemfd1_0_c5_c0_c0">

                                    <scroll-view @scroll="tabsInfobodyItemfd1_0_c5_c0_c0.scrollX = $event.detail.scrollLeft" id="benben_tabsbodyItemfd1_0_c5_c0_c0" class="benben-tabs" style="width:750rpx" :scroll-x="true" :scroll-left.sync="tabsInfobodyItemfd1_0_c5_c0_c0.moveX" scroll-with-animation="all .3s ease">
                                        <view class="benben-tabs-content" id="benben_tabsbodyItemfd1_0_c5_c0_c0-content">
                                            <view id="benben_tabsbodyItemfd1_0_c5_c0_c0-title" class="benben-tabs-title flex align-center flex ">
                                                <view :class="{ 'checkTitlebodyItemfd1_0_c5_c0_c0': cut == '1', 'flex flex-wrap align-center progress_titlebodyItemfd1_0_c5_c0_c0_c3': true }" @tap="cut = '1'" :id="`benben_tabsbodyItemfd1_0_c5_c0_c0-title-item-${'1'}`">

                                                    <text>进度日志</text>

                                                </view>
                                                <view :class="{ 'checkTitlebodyItemfd1_0_c5_c0_c0': cut == '2', 'flex flex-wrap align-center progress_titlebodyItemfd1_0_c5_c0_c0_c4': true }" @tap="cut = '2'" :id="`benben_tabsbodyItemfd1_0_c5_c0_c0-title-item-${'2'}`">

                                                    <text>问题日志</text>

                                                </view>
                                            </view>
                                            <view :style="{ left: tabsInfobodyItemfd1_0_c5_c0_c0.lineleft, maxWidth: tabsInfobodyItemfd1_0_c5_c0_c0.lineWidth }" id="benben_tabsbodyItemfd1_0_c5_c0_c0-line" class="benben-tabs-line flex benben-flex-tabs-line progress_linebodyItemfd1_0_c5_c0_c0"></view>
                                        </view>
                                    </scroll-view>

                                    <view class='flex flex-wrap align-center progress_rightbodyItemfd1_0_c5_c0_c0_c0'>
                                        <text class='progress_rightbodyItemfd1_0_c5_c0_c0_c0_c0'>全部</text>
                                        <image class='progress_rightbodyItemfd1_0_c5_c0_c0_c0_c1' mode="aspectFit" :src='STATIC_URL+"59.png"'></image>
                                    </view>

                                </benben-flex-tabs>
                                <view>
                                    <view class="benben_tabsbodyItemfd1_0_c5_c0_c0-body-item flex flex-direction flex-wrap align-stretch progress_bodybodyItemfd1_0_c5_c0_c0_c3" v-if=" cut == '1' " :id="`benben_tabsbodyItemfd1_0_c5_c0_c0-body-item-${'1'}`">
                                        <view class='flex flex-wrap align-center'>
                                            <image class='progress_bodyItembodyItemfd1_0_c5_c0_c0_c3_c0_c0' mode="aspectFit" :src='STATIC_URL+"32.png"'></image>
                                            <view class='flex flex-direction flex-wrap align-stretch flex-sub progress_bodyItembodyItemfd1_0_c5_c0_c0_c3_c0_c1'>
                                                <text class='progress_bodyItembodyItemfd1_0_c5_c0_c0_c3_c0_c1_c0'>设计部-设计经理-陈沉沉</text>
                                                <text class='progress_bodyItembodyItemfd1_0_c5_c0_c0_c3_c0_c1_c1'>2022-08-08 15:10:12</text>
                                            </view>
                                        </view>

                                        <text class='progress_bodyItembodyItemfd1_0_c5_c0_c0_c3_c1'>您的“山乡美丽乡村建设项目”合同可以回二期款，请及时处理，合同可以回二期款，请及时处理合同可以回二期款，请及时处理合同可以回二期款，请及时处理合同可以回二期款，请及时处理</text>

                                        <view class='flex flex-wrap align-center progress_bodyItembodyItemfd1_0_c5_c0_c0_c3_c2'>
                                            <text class='progress_bodyItembodyItemfd1_0_c5_c0_c0_c3_c2_c0'>已读</text>
                                            <view class='flex flex-direction flex-wrap align-center'>
                                                <image class='progress_bodyItembodyItemfd1_0_c5_c0_c0_c3_c2_c1_c0' mode="aspectFit" :src='STATIC_URL+"32.png"'></image>
                                                <text class='progress_bodyItembodyItemfd1_0_c5_c0_c0_c3_c2_c1_c1'>张总</text>
                                            </view>
                                        </view>
                                    </view>
                                    <view class="benben_tabsbodyItemfd1_0_c5_c0_c0-body-item flex flex-direction flex-wrap align-stretch" v-if=" cut == '2' " :id="`benben_tabsbodyItemfd1_0_c5_c0_c0-body-item-${'2'}`"></view>
                                </view>
                            </view>
                        </view>
                    </view>
                    <view class="benben_tabsfd1_0-body-item flex flex-direction flex-wrap align-stretch progress_bodyfd1_0_c6" v-if=" tabs == '4' " :id="`benben_tabsfd1_0-body-item-${'4'}`">
                        <view class='flex flex-direction flex-wrap align-stretch progress_bodyItemfd1_0_c6_c0'>
                            <text class='progress_bodyItemfd1_0_c6_c0_c0'>项目计划</text>
                            <view class='flex flex-wrap align-center justify-between progress_bodyItemfd1_0_c6_c0_c1'>
                                <view class='flex flex-wrap align-center'>
                                    <text class='progress_bodyItemfd1_0_c6_c0_c1_c0_c0'>项目总工期</text>
                                </view>
                                <view class='flex flex-wrap align-center'>
                                    <text class='progress_bodyItemfd1_0_c6_c0_c1_c1_c0'>50</text>
                                    <text class='progress_bodyItemfd1_0_c6_c0_c1_c1_c1'>天</text>
                                </view>
                            </view>
                            <view class='flex flex-wrap align-center justify-between progress_bodyItemfd1_0_c6_c0_c2'>
                                <view class='flex flex-wrap align-center'>
                                    <text class='progress_bodyItemfd1_0_c6_c0_c2_c0_c0'>剩余天数</text>
                                </view>
                                <view class='flex flex-wrap align-center'>
                                    <text class='progress_bodyItemfd1_0_c6_c0_c2_c1_c0'>18</text>
                                    <text class='progress_bodyItemfd1_0_c6_c0_c2_c1_c1'>天</text>
                                </view>
                            </view>
                            <view class='flex flex-wrap align-center justify-between progress_bodyItemfd1_0_c6_c0_c3'>
                                <view class='flex flex-wrap align-center'>
                                    <text class='progress_bodyItemfd1_0_c6_c0_c3_c0_c0'>累计进度</text>
                                </view>
                                <view class='flex flex-wrap align-center'>
                                    <text class='progress_bodyItemfd1_0_c6_c0_c3_c1_c0'>80</text>
                                    <text class='progress_bodyItemfd1_0_c6_c0_c3_c1_c1'>%</text>
                                </view>
                            </view>
                            <view class='flex flex-wrap align-center justify-between progress_bodyItemfd1_0_c6_c0_c4'>
                                <view class='flex flex-wrap align-center'>
                                    <text class='progress_bodyItemfd1_0_c6_c0_c4_c0_c0'>计划开工时间</text>
                                </view>
                                <text class='progress_bodyItemfd1_0_c6_c0_c4_c1'>2022-08-18</text>
                            </view>
                            <view class='flex flex-wrap align-center justify-between progress_bodyItemfd1_0_c6_c0_c5'>
                                <view class='flex flex-wrap align-center'>
                                    <text class='progress_bodyItemfd1_0_c6_c0_c5_c0_c0'>计划竣工时间</text>
                                </view>
                                <text class='progress_bodyItemfd1_0_c6_c0_c5_c1'>2022-09-30</text>
                            </view>
                            <view class='flex flex-wrap align-center justify-between progress_bodyItemfd1_0_c6_c0_c6'>
                                <view class='flex flex-wrap align-center'>
                                    <text class='progress_bodyItemfd1_0_c6_c0_c6_c0_c0'>计划设计开始</text>
                                </view>
                                <text class='progress_bodyItemfd1_0_c6_c0_c6_c1'>2022-08-18</text>
                            </view>
                            <view class='flex flex-wrap align-center justify-between progress_bodyItemfd1_0_c6_c0_c7'>
                                <view class='flex flex-wrap align-center'>
                                    <text class='progress_bodyItemfd1_0_c6_c0_c7_c0_c0'>计划设计结束</text>
                                </view>
                                <text class='progress_bodyItemfd1_0_c6_c0_c7_c1'>2022-09-30</text>
                            </view>
                            <view class='flex flex-wrap align-center justify-between progress_bodyItemfd1_0_c6_c0_c8'>
                                <view class='flex flex-wrap align-center'>
                                    <text class='progress_bodyItemfd1_0_c6_c0_c8_c0_c0'>勘察野外开工时间</text>
                                </view>
                                <text class='progress_bodyItemfd1_0_c6_c0_c8_c1'>勘察野外开工时间</text>
                            </view>
                            <view class='flex flex-wrap align-center justify-between progress_bodyItemfd1_0_c6_c0_c9'>
                                <view class='flex flex-wrap align-center'>
                                    <text class='progress_bodyItemfd1_0_c6_c0_c9_c0_c0'>勘察野外结束时间</text>
                                </view>
                                <text class='progress_bodyItemfd1_0_c6_c0_c9_c1'>2022-09-30</text>
                            </view>
                            <view class='flex flex-wrap align-center justify-between progress_bodyItemfd1_0_c6_c0_c10'>
                                <view class='flex flex-wrap align-center'>
                                    <text class='progress_bodyItemfd1_0_c6_c0_c10_c0_c0'>测量野外开工时间</text>
                                </view>
                                <text class='progress_bodyItemfd1_0_c6_c0_c10_c1'>2022-08-18</text>
                            </view>
                            <view class='flex flex-wrap align-center justify-between progress_bodyItemfd1_0_c6_c0_c11'>
                                <view class='flex flex-wrap align-center'>
                                    <text class='progress_bodyItemfd1_0_c6_c0_c11_c0_c0'>测量野外结束时间</text>
                                </view>
                                <text class='progress_bodyItemfd1_0_c6_c0_c11_c1'>2022-09-30</text>
                            </view>
                            <view class='flex flex-wrap align-center justify-between progress_bodyItemfd1_0_c6_c0_c12'>
                                <view class='flex flex-wrap align-center'>
                                    <text class='progress_bodyItemfd1_0_c6_c0_c12_c0_c0'>实际开工时间</text>
                                </view>
                                <text class='progress_bodyItemfd1_0_c6_c0_c12_c1'>2022-08-18</text>
                            </view>
                            <view class='flex flex-wrap align-center justify-between progress_bodyItemfd1_0_c6_c0_c13'>
                                <view class='flex flex-wrap align-center'>
                                    <text class='progress_bodyItemfd1_0_c6_c0_c13_c0_c0'>实际竣工时间</text>
                                </view>
                                <text class='progress_bodyItemfd1_0_c6_c0_c13_c1'>2022-09-30</text>
                            </view>
                        </view>
                    </view>
                    <view class="benben_tabsfd1_0-body-item flex flex-direction flex-wrap align-stretch progress_bodyfd1_0_c7" v-if=" tabs == '5' " :id="`benben_tabsfd1_0-body-item-${'5'}`">
                        <view class='flex flex-direction flex-wrap align-stretch progress_bodyItemfd1_0_c7_c0'>
                            <view class='flex flex-wrap align-center'>
                                <text class='progress_bodyItemfd1_0_c7_c0_c0_c0'>申请天数</text>
                                <text class='progress_bodyItemfd1_0_c7_c0_c0_c1'>10</text>
                                <text class='progress_bodyItemfd1_0_c7_c0_c0_c2'>天</text>
                            </view>
                            <view class='flex flex-wrap align-center progress_bodyItemfd1_0_c7_c0_c1'>
                                <text class='progress_bodyItemfd1_0_c7_c0_c1_c0'>申请原因</text>
                                <text class='progress_bodyItemfd1_0_c7_c0_c1_c1'>公司有其他安排</text>
                            </view>
                            <view class='flex flex-wrap align-center'>
                                <text class='progress_bodyItemfd1_0_c7_c0_c2_c0'>申请人</text>
                                <text class='progress_bodyItemfd1_0_c7_c0_c2_c1'>顾古古</text>
                            </view>
                            <view class='flex flex-wrap align-center progress_bodyItemfd1_0_c7_c0_c3'>
                                <text class='progress_bodyItemfd1_0_c7_c0_c3_c0'>审批状态</text>
                                <text class='progress_bodyItemfd1_0_c7_c0_c3_c1'>审批中</text>
                            </view>
                            <view class='flex flex-wrap align-center'>
                                <text class='progress_bodyItemfd1_0_c7_c0_c4_c0'>项目状态</text>
                                <text class='progress_bodyItemfd1_0_c7_c0_c4_c1'>超期</text>
                            </view>
                            <view class='flex flex-wrap align-center progress_bodyItemfd1_0_c7_c0_c5'>
                                <text class='progress_bodyItemfd1_0_c7_c0_c5_c0'>申请时间</text>
                                <text class='progress_bodyItemfd1_0_c7_c0_c5_c1'>2022-03-06 10:20</text>
                            </view>
                            <view class='flex flex-wrap align-center'>
                                <text class='progress_bodyItemfd1_0_c7_c0_c6_c0'>审批时间</text>
                                <text class='progress_bodyItemfd1_0_c7_c0_c6_c1'>— —</text>
                            </view>
                            <view class='flex flex-wrap align-center progress_bodyItemfd1_0_c7_c0_c7'>
                                <text class='progress_bodyItemfd1_0_c7_c0_c7_c0'>审批进度</text>
                                <text class='progress_bodyItemfd1_0_c7_c0_c7_c1' @tap.stop="handleJumpDiy" data-type="navigateTo" :data-url="`/pages/home/approvals/approvals`">详情</text>
                            </view>
                        </view>

                        <view class='flex flex-direction flex-wrap align-stretch progress_bodyItemfd1_0_c7_c1'>
                            <view class='flex flex-wrap align-center'>
                                <text class='progress_bodyItemfd1_0_c7_c1_c0_c0'>申请天数</text>
                                <text class='progress_bodyItemfd1_0_c7_c1_c0_c1'>10</text>
                                <text class='progress_bodyItemfd1_0_c7_c1_c0_c2'>天</text>
                            </view>
                            <view class='flex flex-wrap align-center progress_bodyItemfd1_0_c7_c1_c1'>
                                <text class='progress_bodyItemfd1_0_c7_c1_c1_c0'>申请原因</text>
                                <text class='progress_bodyItemfd1_0_c7_c1_c1_c1'>甲方暂停</text>
                            </view>
                            <view class='flex flex-wrap align-center'>
                                <text class='progress_bodyItemfd1_0_c7_c1_c2_c0'>申请人</text>
                                <text class='progress_bodyItemfd1_0_c7_c1_c2_c1'>顾古古</text>
                            </view>
                            <view class='flex flex-wrap align-center progress_bodyItemfd1_0_c7_c1_c3'>
                                <text class='progress_bodyItemfd1_0_c7_c1_c3_c0'>审批状态</text>
                                <text class='progress_bodyItemfd1_0_c7_c1_c3_c1'>已通过</text>
                            </view>
                            <view class='flex flex-wrap align-center'>
                                <text class='progress_bodyItemfd1_0_c7_c1_c4_c0'>项目状态</text>
                                <text class='progress_bodyItemfd1_0_c7_c1_c4_c1'>进行中</text>
                            </view>
                            <view class='flex flex-wrap align-center progress_bodyItemfd1_0_c7_c1_c5'>
                                <text class='progress_bodyItemfd1_0_c7_c1_c5_c0'>申请时间</text>
                                <text class='progress_bodyItemfd1_0_c7_c1_c5_c1'>2022-03-06 10:20</text>
                            </view>
                            <view class='flex flex-wrap align-center'>
                                <text class='progress_bodyItemfd1_0_c7_c1_c6_c0'>审批时间</text>
                                <text class='progress_bodyItemfd1_0_c7_c1_c6_c1'>2022-03-06 10:20</text>
                            </view>
                            <view class='flex flex-wrap align-center progress_bodyItemfd1_0_c7_c1_c7'>
                                <text class='progress_bodyItemfd1_0_c7_c1_c7_c0'>审批进度</text>
                                <text class='progress_bodyItemfd1_0_c7_c1_c7_c1' @tap.stop="handleJumpDiy" data-type="navigateTo" :data-url="`/pages/home/approvals/approvals`">详情</text>
                            </view>
                        </view>
                    </view>
                    <view class="benben_tabsfd1_0-body-item flex flex-direction flex-wrap align-stretch progress_bodyfd1_0_c8" v-if=" tabs == '6' " :id="`benben_tabsfd1_0-body-item-${'6'}`">
                        <view class='flex flex-direction flex-wrap align-stretch progress_bodyItemfd1_0_c8_c0' @tap.stop="handleJumpDiy" data-type="navigateTo" :data-url="`/pages/home/detailsPage/detailsPage`">
                            <view class='flex flex-wrap align-center'>
                                <text class='progress_bodyItemfd1_0_c8_c0_c0_c0'>合同编号</text>
                                <text class='progress_bodyItemfd1_0_c8_c0_c0_c1'>JHSL-2208-J0001-0001</text>
                            </view>
                            <view class='flex flex-wrap align-center progress_bodyItemfd1_0_c8_c0_c1'>
                                <text class='progress_bodyItemfd1_0_c8_c0_c1_c0'>合同名称</text>
                                <text class='progress_bodyItemfd1_0_c8_c0_c1_c1'>光电产业园施工图设计合同</text>
                            </view>
                            <view class='flex flex-wrap align-center'>
                                <text class='progress_bodyItemfd1_0_c8_c0_c2_c0'>合同金额</text>
                                <text class='progress_bodyItemfd1_0_c8_c0_c2_c1'>120000元</text>
                            </view>
                            <view class='flex flex-wrap align-center progress_bodyItemfd1_0_c8_c0_c3'>
                                <text class='progress_bodyItemfd1_0_c8_c0_c3_c0'>合同类型</text>
                                <text class='progress_bodyItemfd1_0_c8_c0_c3_c1'>原合同</text>
                            </view>
                            <view class='flex flex-wrap align-center'>
                                <text class='progress_bodyItemfd1_0_c8_c0_c4_c0'>支付方式</text>
                                <text class='progress_bodyItemfd1_0_c8_c0_c4_c1'>分阶段</text>
                            </view>
                            <view class='flex flex-wrap align-center progress_bodyItemfd1_0_c8_c0_c5'>
                                <text class='progress_bodyItemfd1_0_c8_c0_c5_c0'>合同甲方</text>
                                <text class='progress_bodyItemfd1_0_c8_c0_c5_c1'>二阳县光电产业园</text>
                            </view>
                            <view class='flex flex-wrap align-center progress_bodyItemfd1_0_c8_c0_c6'>
                                <text class='progress_bodyItemfd1_0_c8_c0_c6_c0'>签订日期</text>
                                <text class='progress_bodyItemfd1_0_c8_c0_c6_c1'>2022-07-20 </text>
                            </view>
                            <view class='flex flex-wrap align-center justify-end progress_bodyItemfd1_0_c8_c0_c7'>
                                <text class='progress_bodyItemfd1_0_c8_c0_c7_c0'>合同详情</text>
                            </view>
                        </view>
                    </view>
                    <view class="benben_tabsfd1_0-body-item flex flex-direction flex-wrap align-stretch progress_bodyfd1_0_c9" v-if=" tabs == '7' " :id="`benben_tabsfd1_0-body-item-${'7'}`">
                        <text class='progress_bodyItemfd1_0_c9_c0'>成本信息</text>

                        <view class='flex flex-wrap align-center progress_bodyItemfd1_0_c9_c1'>
                            <text class='progress_bodyItemfd1_0_c9_c1_c0'>项目总成本</text>
                            <text class='progress_bodyItemfd1_0_c9_c1_c1'>10400</text>
                            <text class='progress_bodyItemfd1_0_c9_c1_c2'>元</text>
                        </view>

                        <view class='flex flex-wrap align-center justify-between progress_bodyItemfd1_0_c9_c2'>
                            <text class='progress_bodyItemfd1_0_c9_c2_c0'>成本明细</text>
                            <view class='flex flex-wrap align-center'>
                                <image class='progress_bodyItemfd1_0_c9_c2_c1_c0' mode="aspectFit" :src='STATIC_URL+"61.png"'></image>
                                <text class='progress_bodyItemfd1_0_c9_c2_c1_c1'>筛选</text>
                            </view>
                        </view>

                        <jyf-parser class='progress_bodyItemfd1_0_c9_c3'>
                        </jyf-parser>
                    </view>
                    <view class="benben_tabsfd1_0-body-item flex flex-direction flex-wrap align-stretch progress_bodyfd1_0_c10" v-if=" tabs == '8' " :id="`benben_tabsfd1_0-body-item-${'8'}`">
                        <text class='progress_bodyItemfd1_0_c10_c0'>回款信息</text>

                        <view class='flex flex-wrap align-center progress_bodyItemfd1_0_c10_c1'>
                            <text class='progress_bodyItemfd1_0_c10_c1_c0'>回款期数</text>
                            <text class='progress_bodyItemfd1_0_c10_c1_c1'>四期</text>
                            <text class='progress_bodyItemfd1_0_c10_c1_c2'>回款阶段</text>
                            <text class='progress_bodyItemfd1_0_c10_c1_c3'>一期款</text>
                        </view>

                        <text class='progress_bodyItemfd1_0_c10_c2'>回款记录</text>

                        <jyf-parser class='progress_bodyItemfd1_0_c10_c3'>
                        </jyf-parser>
                    </view>
                    <view class="benben_tabsfd1_0-body-item flex flex-direction flex-wrap align-stretch progress_bodyfd1_0_c11" v-if=" tabs == '9' " :id="`benben_tabsfd1_0-body-item-${'9'}`">
                        <jyf-parser class='progress_bodyItemfd1_0_c11_c0'>
                        </jyf-parser>
                    </view>
                    <view class="benben_tabsfd1_0-body-item flex flex-direction flex-wrap align-stretch progress_bodyfd1_0_c12" v-if=" tabs == '10' " :id="`benben_tabsfd1_0-body-item-${'10'}`">
                        <text class='progress_bodyItemfd1_0_c12_c0'>借支申请</text>

                        <view class='flex flex-wrap align-center progress_bodyItemfd1_0_c12_c1'>
                            <text class='progress_bodyItemfd1_0_c12_c1_c0'>全部员工</text>
                            <image class='progress_bodyItemfd1_0_c12_c1_c1' mode="aspectFit" :src='STATIC_URL+"62.png"'></image>
                            <text class='progress_bodyItemfd1_0_c12_c1_c2'>全部类型</text>
                            <image class='progress_bodyItemfd1_0_c12_c1_c3' mode="aspectFit" :src='STATIC_URL+"62.png"'></image>
                            <text class='progress_bodyItemfd1_0_c12_c1_c4'>全部状态</text>
                            <image class='progress_bodyItemfd1_0_c12_c1_c5' mode="aspectFit" :src='STATIC_URL+"62.png"'></image>
                        </view>

                        <view class='flex flex-direction flex-wrap align-stretch progress_bodyItemfd1_0_c12_c2'>
                            <view class='flex flex-wrap align-center'>
                                <image class='progress_bodyItemfd1_0_c12_c2_c0_c0' mode="aspectFit" :src='STATIC_URL+"32.png"'></image>
                                <view class='flex flex-direction flex-wrap align-stretch flex-sub progress_bodyItemfd1_0_c12_c2_c0_c1'>
                                    <text class='progress_bodyItemfd1_0_c12_c2_c0_c1_c0'>设计部-设计经理-陈沉沉</text>
                                    <view class='flex flex-wrap align-center progress_bodyItemfd1_0_c12_c2_c0_c1_c1'>
                                        <text class='progress_bodyItemfd1_0_c12_c2_c0_c1_c1_c0'>2022-08-08</text>
                                        <text class='progress_bodyItemfd1_0_c12_c2_c0_c1_c1_c1'>15:10:12</text>
                                    </view>
                                </view>
                            </view>
                            <view class='flex flex-wrap align-center progress_bodyItemfd1_0_c12_c2_c1'>
                                <text class='progress_bodyItemfd1_0_c12_c2_c1_c0'>支出状态</text>
                                <text class='progress_bodyItemfd1_0_c12_c2_c1_c1'>审核中</text>
                            </view>
                            <view class='flex flex-wrap align-start progress_bodyItemfd1_0_c12_c2_c2'>
                                <text class='progress_bodyItemfd1_0_c12_c2_c2_c0'>支出事由</text>
                                <view class='flex-sub progress_bodyItemfd1_0_c12_c2_c2_c1'>
                                    <text class='flex-sub progress_bodyItemfd1_0_c12_c2_c2_c1_c0' v-if="cut=='1'">汽车加油汽车加油汽车加油汽车…</text><text class='flex-sub progress_bodyItemfd1_0_c12_c2_c2_c1_c0_1' v-if="cut=='2'">汽车加油汽车加油汽车加油汽车费用说明内容的描述汽车加油汽车加油汽车费用说明内容的描述汽车加油汽车加油汽车费用说明内容的</text>
                                    <text class='progress_bodyItemfd1_0_c12_c2_c2_c1_c1' v-if="cut=='1'" @tap.stop="getallaway()">全部</text><text class='progress_bodyItemfd1_0_c12_c2_c2_c1_c1_1' v-if="cut=='2'" @tap.stop="getallaway()">收起</text>
                                </view>
                            </view>
                            <view class='flex flex-wrap align-center'>
                                <text class='progress_bodyItemfd1_0_c12_c2_c3_c0'>支出科目</text>
                                <text class='flex-sub progress_bodyItemfd1_0_c12_c2_c3_c1'>车辆费</text>
                            </view>
                            <view class='flex flex-wrap align-center progress_bodyItemfd1_0_c12_c2_c4'>
                                <text class='progress_bodyItemfd1_0_c12_c2_c4_c0'>支出金额</text>
                                <text class='flex-sub progress_bodyItemfd1_0_c12_c2_c4_c1'></text>
                            </view>
                            <view class='flex flex-wrap align-center'>
                                <text class='progress_bodyItemfd1_0_c12_c2_c5_c0'>收款名称</text>
                                <text class='flex-sub progress_bodyItemfd1_0_c12_c2_c5_c1'>陈沉沉</text>
                            </view>
                            <view class='flex flex-wrap align-center progress_bodyItemfd1_0_c12_c2_c6'>
                                <text class='progress_bodyItemfd1_0_c12_c2_c6_c0'>收款账号</text>
                                <text class='flex-sub progress_bodyItemfd1_0_c12_c2_c6_c1'>0121331545450845521</text>
                            </view>
                            <view class='flex flex-wrap align-center'>
                                <text class='progress_bodyItemfd1_0_c12_c2_c7_c0'>开户银行 </text>
                                <text class='flex-sub progress_bodyItemfd1_0_c12_c2_c7_c1'>工商银行花园路支行</text>
                            </view>
                            <view class='flex flex-wrap align-center progress_bodyItemfd1_0_c12_c2_c8'>
                                <text class='progress_bodyItemfd1_0_c12_c2_c8_c0'>支出账号</text>
                                <text class='flex-sub progress_bodyItemfd1_0_c12_c2_c8_c1'>1213631545450845521</text>
                            </view>
                            <view class='flex flex-wrap align-center'>
                                <text class='progress_bodyItemfd1_0_c12_c2_c9_c0'>支出时间</text>
                                <text class='flex-sub progress_bodyItemfd1_0_c12_c2_c9_c1'>2022-08-08</text>
                            </view>
                            <view class='flex flex-wrap align-start progress_bodyItemfd1_0_c12_c2_c10'>
                                <text class='progress_bodyItemfd1_0_c12_c2_c10_c0'>支出凭证</text>
                                <image class='progress_bodyItemfd1_0_c12_c2_c10_c1' mode="aspectFit" :src='STATIC_URL+"63.png"'></image>
                            </view>
                            <view class='flex flex-wrap align-center'>
                                <text class='progress_bodyItemfd1_0_c12_c2_c11_c0'>支出附件</text>
                                <text class='flex-sub progress_bodyItemfd1_0_c12_c2_c11_c1'>车费保养说明.doc</text>
                            </view>
                        </view>
                    </view>
                    <view class="benben_tabsfd1_0-body-item flex flex-direction flex-wrap align-stretch progress_bodyfd1_0_c13" v-if=" tabs == '11' " :id="`benben_tabsfd1_0-body-item-${'11'}`">
                        <text class='progress_bodyItemfd1_0_c13_c0'>项目得分</text>

                        <jyf-parser class='progress_bodyItemfd1_0_c13_c1'>
                        </jyf-parser>
                    </view>
                </view>
            </view>
        </view>
        <!---flex布局flex布局结束-->
        <view class="flex benben-position-layout flex flex-wrap align-center progress_flex_2" :style="{top:(700+StatusBarRpx)+'rpx'}">
            <image class='progress_fd2_0' :src='STATIC_URL+"57.png"' @tap.stop="handleJumpDiy" data-type="navigateTo" :data-url="`/pages/home/write/write`"></image>

        </view>
        <view :style="{height: '118rpx'}"></view>

    </view>
</template> 
 <script>
    export default {
        components: {},

        data() {
            return {
                "tabsInfobodyItemfd1_0_c5_c0_c0": {
                    lineleft: '',
                    lineWidth: '',
                    moveX: 0,
                    scrollX: 0,
                    PageScrollX: 0
                },
                "tabsInfobodyItemfd1_0_c4_c0_c0": {
                    lineleft: '',
                    lineWidth: '',
                    moveX: 0,
                    scrollX: 0,
                    PageScrollX: 0
                },
                "tabsInfofd1_0": {
                    lineleft: '',
                    lineWidth: '',
                    moveX: 0,
                    scrollX: 0,
                    PageScrollX: 0
                },
                "cut": "1",
                "tabs": "1",
                "type": ""
            };
        },
        computed: {
            themeColor() {
                return this.$store.getters.themeColor
            },

        },
        watch: {},
        onLoad(options) {
            let {
                type
            } = options
            this.type = type || ''
        },
        onUnload() {

        },
        onReady() {

        },
        onShow() {

        },
        onHide() {

        },
        onResize() {

        },
        onPullDownRefresh() {

        },
        onReachBottom(e) {

        },
        onPageScroll(e) {

        },
        methods: {
            //全部或收起
            getallaway() {
                if (this.cut == '1') {
                    this.cut = '2';
                    return
                }
                if (this.cut == '2') {
                    this.cut = '1';
                    return
                }
            }
        }
    };
</script>  
 <style lang="scss" scoped>
    .page {
        min-height: calc(100vh - var(--window-bottom));
        background: rgba(243, 246, 251, 1);
        background-size: 100% auto !important;
    }

    .progress_flex_0 {
        border-bottom: 1px solid rgba(238, 238, 238, 1);
        background: #fff;
        background-size: 100% !important;
        width: 750rpx;
        height: 88rpx;
        overflow: hidden;
        z-index: 10;
        top: 0rpx;
        background-size: 100% auto !important;
    }

    .progress_fd0_2 {
        width: 100rpx;
        height: 88rpx;
        margin: 0rpx 32rpx 0rpx 0rpx;
    }

    .progress_fd0_1 {
        color: #000000;
        font-size: 36rpx;
        font-weight: 500;
        line-height: 50rpx;
    }

    .progress_fd0_0 {
        width: 100rpx;
        height: 88rpx;
        margin: 0rpx 0rpx 0rpx 32rpx;
    }

    ::v-deep .progress_bodyItemfd1_0_c13_c1 {
        width: 100%;
    }

    .progress_bodyItemfd1_0_c13_c0 {
        color: #333333;
        font-size: 32rpx;
        font-weight: 500;
        line-height: 45rpx;
        margin: 32rpx 0rpx 24rpx 0rpx;
    }

    .progress_bodyfd1_0_c13 {
        background: #fff;
        background-size: 100% !important;
        padding: 0rpx 24rpx 0rpx 24rpx;
        background-size: 100% auto !important;
    }

    .progress_titlefd1_0_c13 {
        font-size: 32rpx;
        color: rgba(102, 102, 102, 1);
        margin: 0rpx 58rpx 0rpx 32rpx;
    }

    .progress_bodyItemfd1_0_c12_c2_c11_c1 {
        color: #0B1898;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
        margin: 0rpx 0rpx 0rpx 64rpx;
    }

    .progress_bodyItemfd1_0_c12_c2_c11_c0 {
        color: #333333;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c12_c2_c10_c1 {
        width: 131rpx;
        height: 131rpx;
        border-radius: 16rpx 16rpx 16rpx 16rpx;
    }

    .progress_bodyItemfd1_0_c12_c2_c10_c0 {
        color: #333333;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
        margin: 0rpx 64rpx 0rpx 0rpx;
    }

    .progress_bodyItemfd1_0_c12_c2_c10 {
        margin: 24rpx 0rpx 24rpx 0rpx;
    }

    .progress_bodyItemfd1_0_c12_c2_c9_c1 {
        color: rgba(102, 102, 102, 1);
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
        margin: 0rpx 0rpx 0rpx 64rpx;
    }

    .progress_bodyItemfd1_0_c12_c2_c9_c0 {
        color: #333333;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c12_c2_c8_c1 {
        color: rgba(102, 102, 102, 1);
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
        margin: 0rpx 0rpx 0rpx 64rpx;
    }

    .progress_bodyItemfd1_0_c12_c2_c8_c0 {
        color: #333333;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c12_c2_c8 {
        margin: 24rpx 0rpx 24rpx 0rpx;
    }

    .progress_bodyItemfd1_0_c12_c2_c7_c1 {
        color: rgba(102, 102, 102, 1);
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
        margin: 0rpx 0rpx 0rpx 64rpx;
    }

    .progress_bodyItemfd1_0_c12_c2_c7_c0 {
        color: #333333;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c12_c2_c6_c1 {
        color: rgba(102, 102, 102, 1);
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
        margin: 0rpx 0rpx 0rpx 64rpx;
    }

    .progress_bodyItemfd1_0_c12_c2_c6_c0 {
        color: #333333;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c12_c2_c6 {
        margin: 24rpx 0rpx 24rpx 0rpx;
    }

    .progress_bodyItemfd1_0_c12_c2_c5_c1 {
        color: rgba(102, 102, 102, 1);
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
        margin: 0rpx 0rpx 0rpx 64rpx;
    }

    .progress_bodyItemfd1_0_c12_c2_c5_c0 {
        color: #333333;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c12_c2_c4_c1 {
        color: rgba(102, 102, 102, 1);
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
        margin: 0rpx 0rpx 0rpx 64rpx;
    }

    .progress_bodyItemfd1_0_c12_c2_c4_c0 {
        color: #333333;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c12_c2_c4 {
        margin: 24rpx 0rpx 24rpx 0rpx;
    }

    .progress_bodyItemfd1_0_c12_c2_c3_c1 {
        color: rgba(102, 102, 102, 1);
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
        margin: 0rpx 0rpx 0rpx 64rpx;
    }

    .progress_bodyItemfd1_0_c12_c2_c3_c0 {
        color: #333333;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c12_c2_c2_c1_c1_1 {
        color: rgba(72, 151, 235, 1);
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
        margin: 0rpx 0rpx 0rpx 16rpx;
    }

    .progress_bodyItemfd1_0_c12_c2_c2_c1_c1 {
        color: rgba(72, 151, 235, 1);
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c12_c2_c2_c1_c0_1 {
        color: rgba(102, 102, 102, 1);
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c12_c2_c2_c1_c0 {
        color: rgba(102, 102, 102, 1);
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
        margin: 0rpx 5rpx 0rpx 0rpx;
    }

    .progress_bodyItemfd1_0_c12_c2_c2_c1 {
        margin: 0rpx 0rpx 0rpx 62rpx;
    }

    .progress_bodyItemfd1_0_c12_c2_c2_c0 {
        color: #333333;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c12_c2_c2 {
        margin: 24rpx 0rpx 24rpx 0rpx;
    }

    .progress_bodyItemfd1_0_c12_c2_c1_c1 {
        color: #1DB999;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
        margin: 0rpx 0rpx 0rpx 64rpx;
    }

    .progress_bodyItemfd1_0_c12_c2_c1_c0 {
        color: #333333;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c12_c2_c1 {
        margin: 40rpx 0rpx 0rpx 0rpx;
    }

    .progress_bodyItemfd1_0_c12_c2_c0_c1_c1_c1 {
        color: #666666;
        font-size: 24rpx;
        font-weight: 400;
        line-height: 33rpx;
    }

    .progress_bodyItemfd1_0_c12_c2_c0_c1_c1_c0 {
        color: #666666;
        font-size: 24rpx;
        font-weight: 400;
        line-height: 33rpx;
        margin: 0rpx 20rpx 0rpx 0rpx;
    }

    .progress_bodyItemfd1_0_c12_c2_c0_c1_c1 {
        margin: 10rpx 0rpx 0rpx 0rpx;
    }

    .progress_bodyItemfd1_0_c12_c2_c0_c1_c0 {
        color: #333333;
        font-size: 32rpx;
        font-weight: 500;
        line-height: 45rpx;
    }

    .progress_bodyItemfd1_0_c12_c2_c0_c1 {
        margin: 0rpx 0rpx 0rpx 16rpx;
    }

    .progress_bodyItemfd1_0_c12_c2_c0_c0 {
        width: 88rpx;
        height: 88rpx;
        border-radius: 44rpx 44rpx 44rpx 44rpx;
    }

    .progress_bodyItemfd1_0_c12_c2 {
        background: #fff;
        background-size: 100% !important;
        border-radius: 16rpx 16rpx 16rpx 16rpx;
        padding: 32rpx 24rpx 32rpx 24rpx;
        margin: 24rpx 0rpx 0rpx 0rpx;
    }

    .progress_bodyItemfd1_0_c12_c1_c5 {
        width: 14rpx;
        height: 9rpx;
        border-radius: 0rpx 0rpx 0rpx 0rpx;
    }

    .progress_bodyItemfd1_0_c12_c1_c4 {
        color: #333333;
        font-size: 28rpx;
        font-weight: 700;
        line-height: 40rpx;
        margin: 0rpx 20rpx 0rpx 0rpx;
    }

    .progress_bodyItemfd1_0_c12_c1_c3 {
        width: 14rpx;
        height: 9rpx;
        border-radius: 0rpx 0rpx 0rpx 0rpx;
        margin: 0rpx 108rpx 0rpx 0rpx;
    }

    .progress_bodyItemfd1_0_c12_c1_c2 {
        color: #333333;
        font-size: 28rpx;
        font-weight: 700;
        line-height: 40rpx;
        margin: 0rpx 20rpx 0rpx 0rpx;
    }

    .progress_bodyItemfd1_0_c12_c1_c1 {
        width: 14rpx;
        height: 9rpx;
        border-radius: 0rpx 0rpx 0rpx 0rpx;
        margin: 0rpx 108rpx 0rpx 0rpx;
    }

    .progress_bodyItemfd1_0_c12_c1_c0 {
        color: #333333;
        font-size: 28rpx;
        font-weight: 700;
        line-height: 40rpx;
        margin: 0rpx 20rpx 0rpx 0rpx;
    }

    .progress_bodyItemfd1_0_c12_c1 {
        padding: 0rpx 24rpx 0rpx 24rpx;
        margin: 24rpx 0rpx 0rpx 0rpx;
    }

    .progress_bodyItemfd1_0_c12_c0 {
        color: #333333;
        font-size: 32rpx;
        font-weight: 500;
        line-height: 45rpx;
        margin: 24rpx 0rpx 0rpx 0rpx;
    }

    .progress_bodyfd1_0_c12 {
        padding: 0rpx 24rpx 0rpx 24rpx;
    }

    .progress_titlefd1_0_c12 {
        font-size: 32rpx;
        color: rgba(102, 102, 102, 1);
        margin: 0rpx 0rpx 0rpx 32rpx;
    }

    ::v-deep .progress_bodyItemfd1_0_c11_c0 {
        width: 100%;
    }

    .progress_bodyfd1_0_c11 {
        background: #fff;
        background-size: 100% !important;
        padding: 32rpx 24rpx 0rpx 24rpx;
        background-size: 100% auto !important;
    }

    .progress_titlefd1_0_c11 {
        font-size: 32rpx;
        color: rgba(102, 102, 102, 1);
        margin: 0rpx 0rpx 0rpx 32rpx;
    }

    ::v-deep .progress_bodyItemfd1_0_c10_c3 {
        width: 100%;
    }

    .progress_bodyItemfd1_0_c10_c2 {
        color: #333333;
        font-size: 32rpx;
        font-weight: 500;
        line-height: 45rpx;
        margin: 0rpx 0rpx 25rpx 0rpx;
    }

    .progress_bodyItemfd1_0_c10_c1_c3 {
        color: #0B1898;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
        margin: 0rpx 0rpx 0rpx 24rpx;
    }

    .progress_bodyItemfd1_0_c10_c1_c2 {
        color: #333;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
        margin: 0rpx 0rpx 0rpx 96rpx;
    }

    .progress_bodyItemfd1_0_c10_c1_c1 {
        color: #0B1898;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
        margin: 0rpx 0rpx 0rpx 24rpx;
    }

    .progress_bodyItemfd1_0_c10_c1_c0 {
        color: #333;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c10_c1 {
        margin: 24rpx 0rpx 56rpx 0rpx;
    }

    .progress_bodyItemfd1_0_c10_c0 {
        color: #333333;
        font-size: 32rpx;
        font-weight: 500;
        line-height: 45rpx;
        margin: 32rpx 0rpx 0rpx 0rpx;
    }

    .progress_bodyfd1_0_c10 {
        background: #fff;
        background-size: 100% !important;
        padding: 0rpx 24rpx 0rpx 24rpx;
        background-size: 100% auto !important;
    }

    .progress_titlefd1_0_c10 {
        font-size: 32rpx;
        color: rgba(102, 102, 102, 1);
        margin: 0rpx 0rpx 0rpx 32rpx;
    }

    ::v-deep .progress_bodyItemfd1_0_c9_c3 {
        width: 100%;
    }

    .progress_bodyItemfd1_0_c9_c2_c1_c1 {
        color: #0B1898;
        font-size: 24rpx;
        font-weight: 400;
        line-height: 33rpx;
    }

    .progress_bodyItemfd1_0_c9_c2_c1_c0 {
        width: 28rpx;
        height: 28rpx;
        border-radius: 0rpx 0rpx 0rpx 0rpx;
        margin: 0rpx 8rpx 0rpx 0rpx;
    }

    .progress_bodyItemfd1_0_c9_c2_c0 {
        color: #333333;
        font-size: 32rpx;
        font-weight: 500;
        line-height: 45rpx;
    }

    .progress_bodyItemfd1_0_c9_c2 {
        margin: 0rpx 0rpx 25rpx 0rpx;
    }

    .progress_bodyItemfd1_0_c9_c1_c2 {
        color: #0B1898;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c9_c1_c1 {
        color: #0B1898;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c9_c1_c0 {
        color: #333;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c9_c1 {
        margin: 24rpx 0rpx 56rpx 0rpx;
    }

    .progress_bodyItemfd1_0_c9_c0 {
        color: #333333;
        font-size: 32rpx;
        font-weight: 500;
        line-height: 45rpx;
        margin: 32rpx 0rpx 0rpx 0rpx;
    }

    .progress_bodyfd1_0_c9 {
        background: #fff;
        background-size: 100% !important;
        padding: 0rpx 24rpx 0rpx 24rpx;
        background-size: 100% auto !important;
    }

    .progress_titlefd1_0_c9 {
        font-size: 32rpx;
        color: rgba(102, 102, 102, 1);
        margin: 0rpx 0rpx 0rpx 32rpx;
    }

    .progress_bodyItemfd1_0_c8_c0_c7_c0 {
        color: #0B1898;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c8_c0_c7 {
        margin: 32rpx 0rpx 0rpx 0rpx;
    }

    .progress_bodyItemfd1_0_c8_c0_c6_c1 {
        color: #666666;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
        margin: 0rpx 0rpx 0rpx 64rpx;
    }

    .progress_bodyItemfd1_0_c8_c0_c6_c0 {
        color: #333333;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c8_c0_c6 {
        border-bottom: 1px solid rgba(238, 238, 238, 1);
        padding: 0rpx 0rpx 32rpx 0rpx;
    }

    .progress_bodyItemfd1_0_c8_c0_c5_c1 {
        color: #666666;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
        margin: 0rpx 0rpx 0rpx 64rpx;
    }

    .progress_bodyItemfd1_0_c8_c0_c5_c0 {
        color: #333333;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c8_c0_c5 {
        margin: 24rpx 0rpx 24rpx 0rpx;
    }

    .progress_bodyItemfd1_0_c8_c0_c4_c1 {
        color: #666666;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
        margin: 0rpx 0rpx 0rpx 64rpx;
    }

    .progress_bodyItemfd1_0_c8_c0_c4_c0 {
        color: #333333;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c8_c0_c3_c1 {
        color: #666666;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
        margin: 0rpx 0rpx 0rpx 64rpx;
    }

    .progress_bodyItemfd1_0_c8_c0_c3_c0 {
        color: #333333;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c8_c0_c3 {
        margin: 24rpx 0rpx 24rpx 0rpx;
    }

    .progress_bodyItemfd1_0_c8_c0_c2_c1 {
        color: #666666;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
        margin: 0rpx 0rpx 0rpx 64rpx;
    }

    .progress_bodyItemfd1_0_c8_c0_c2_c0 {
        color: #333333;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c8_c0_c1_c1 {
        color: #666666;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
        margin: 0rpx 0rpx 0rpx 64rpx;
    }

    .progress_bodyItemfd1_0_c8_c0_c1_c0 {
        color: #333333;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c8_c0_c1 {
        margin: 24rpx 0rpx 24rpx 0rpx;
    }

    .progress_bodyItemfd1_0_c8_c0_c0_c1 {
        color: #666666;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
        margin: 0rpx 0rpx 0rpx 64rpx;
    }

    .progress_bodyItemfd1_0_c8_c0_c0_c0 {
        color: #333333;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c8_c0 {
        background: #fff;
        background-size: 100% !important;
        border-radius: 16rpx 16rpx 16rpx 16rpx;
        padding: 32rpx 24rpx 32rpx 24rpx;
        margin: 24rpx 0rpx 0rpx 0rpx;
    }

    .progress_bodyfd1_0_c8 {
        padding: 0rpx 24rpx 0rpx 24rpx;
    }

    .progress_titlefd1_0_c8 {
        font-size: 32rpx;
        color: rgba(102, 102, 102, 1);
        margin: 0rpx 0rpx 0rpx 32rpx;
    }

    .progress_bodyItemfd1_0_c7_c1_c7_c1 {
        color: rgba(11, 24, 152, 1);
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
        margin: 0rpx 0rpx 0rpx 64rpx;
    }

    .progress_bodyItemfd1_0_c7_c1_c7_c0 {
        color: #333333;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c7_c1_c7 {
        margin: 24rpx 0rpx 0rpx 0rpx;
    }

    .progress_bodyItemfd1_0_c7_c1_c6_c1 {
        color: #666666;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
        margin: 0rpx 0rpx 0rpx 64rpx;
    }

    .progress_bodyItemfd1_0_c7_c1_c6_c0 {
        color: #333333;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c7_c1_c5_c1 {
        color: #666666;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
        margin: 0rpx 0rpx 0rpx 64rpx;
    }

    .progress_bodyItemfd1_0_c7_c1_c5_c0 {
        color: #333333;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c7_c1_c5 {
        margin: 24rpx 0rpx 24rpx 0rpx;
    }

    .progress_bodyItemfd1_0_c7_c1_c4_c1 {
        color: #666666;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
        margin: 0rpx 0rpx 0rpx 64rpx;
    }

    .progress_bodyItemfd1_0_c7_c1_c4_c0 {
        color: #333333;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c7_c1_c3_c1 {
        color: #666666;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
        margin: 0rpx 0rpx 0rpx 64rpx;
    }

    .progress_bodyItemfd1_0_c7_c1_c3_c0 {
        color: #333333;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c7_c1_c3 {
        margin: 24rpx 0rpx 24rpx 0rpx;
    }

    .progress_bodyItemfd1_0_c7_c1_c2_c1 {
        color: #666666;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
        margin: 0rpx 0rpx 0rpx 92rpx;
    }

    .progress_bodyItemfd1_0_c7_c1_c2_c0 {
        color: #333333;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c7_c1_c1_c1 {
        color: #666666;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
        margin: 0rpx 0rpx 0rpx 64rpx;
    }

    .progress_bodyItemfd1_0_c7_c1_c1_c0 {
        color: #333333;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c7_c1_c1 {
        margin: 24rpx 0rpx 24rpx 0rpx;
    }

    .progress_bodyItemfd1_0_c7_c1_c0_c2 {
        color: #666666;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c7_c1_c0_c1 {
        color: #666666;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
        margin: 0rpx 0rpx 0rpx 64rpx;
    }

    .progress_bodyItemfd1_0_c7_c1_c0_c0 {
        color: #333333;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c7_c1 {
        background: #fff;
        background-size: 100% !important;
        border-radius: 16rpx 16rpx 16rpx 16rpx;
        padding: 32rpx 24rpx 32rpx 24rpx;
        margin: 24rpx 0rpx 0rpx 0rpx;
    }

    .progress_bodyItemfd1_0_c7_c0_c7_c1 {
        color: #4897EB;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
        margin: 0rpx 0rpx 0rpx 64rpx;
    }

    .progress_bodyItemfd1_0_c7_c0_c7_c0 {
        color: #333333;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c7_c0_c7 {
        margin: 24rpx 0rpx 0rpx 0rpx;
    }

    .progress_bodyItemfd1_0_c7_c0_c6_c1 {
        color: #666666;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
        margin: 0rpx 0rpx 0rpx 64rpx;
    }

    .progress_bodyItemfd1_0_c7_c0_c6_c0 {
        color: #333333;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c7_c0_c5_c1 {
        color: #666666;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
        margin: 0rpx 0rpx 0rpx 64rpx;
    }

    .progress_bodyItemfd1_0_c7_c0_c5_c0 {
        color: #333333;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c7_c0_c5 {
        margin: 24rpx 0rpx 24rpx 0rpx;
    }

    .progress_bodyItemfd1_0_c7_c0_c4_c1 {
        color: #666666;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
        margin: 0rpx 0rpx 0rpx 64rpx;
    }

    .progress_bodyItemfd1_0_c7_c0_c4_c0 {
        color: #333333;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c7_c0_c3_c1 {
        color: #666666;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
        margin: 0rpx 0rpx 0rpx 64rpx;
    }

    .progress_bodyItemfd1_0_c7_c0_c3_c0 {
        color: #333333;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c7_c0_c3 {
        margin: 24rpx 0rpx 24rpx 0rpx;
    }

    .progress_bodyItemfd1_0_c7_c0_c2_c1 {
        color: #666666;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
        margin: 0rpx 0rpx 0rpx 92rpx;
    }

    .progress_bodyItemfd1_0_c7_c0_c2_c0 {
        color: #333333;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c7_c0_c1_c1 {
        color: #666666;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
        margin: 0rpx 0rpx 0rpx 64rpx;
    }

    .progress_bodyItemfd1_0_c7_c0_c1_c0 {
        color: #333333;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c7_c0_c1 {
        margin: 24rpx 0rpx 24rpx 0rpx;
    }

    .progress_bodyItemfd1_0_c7_c0_c0_c2 {
        color: #666666;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c7_c0_c0_c1 {
        color: #666666;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
        margin: 0rpx 0rpx 0rpx 64rpx;
    }

    .progress_bodyItemfd1_0_c7_c0_c0_c0 {
        color: #333333;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c7_c0 {
        background: #fff;
        background-size: 100% !important;
        border-radius: 16rpx 16rpx 16rpx 16rpx;
        padding: 32rpx 24rpx 32rpx 24rpx;
        margin: 24rpx 0rpx 0rpx 0rpx;
    }

    .progress_bodyfd1_0_c7 {
        padding: 0rpx 24rpx 0rpx 24rpx;
    }

    .progress_titlefd1_0_c7 {
        font-size: 32rpx;
        color: rgba(102, 102, 102, 1);
        margin: 0rpx 0rpx 0rpx 32rpx;
    }

    .progress_bodyItemfd1_0_c6_c0_c13_c1 {
        color: #666666;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c6_c0_c13_c0_c0 {
        color: #333333;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c6_c0_c13 {
        margin: 32rpx 0rpx 0rpx 0rpx;
    }

    .progress_bodyItemfd1_0_c6_c0_c12_c1 {
        color: #666666;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c6_c0_c12_c0_c0 {
        color: #333333;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c6_c0_c12 {
        border-bottom: 1px solid rgba(238, 238, 238, 1);
        padding: 0rpx 0rpx 32rpx 0rpx;
        margin: 32rpx 0rpx 0rpx 0rpx;
    }

    .progress_bodyItemfd1_0_c6_c0_c11_c1 {
        color: #666666;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c6_c0_c11_c0_c0 {
        color: #333333;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c6_c0_c11 {
        border-bottom: 1px solid rgba(238, 238, 238, 1);
        padding: 0rpx 0rpx 32rpx 0rpx;
        margin: 32rpx 0rpx 0rpx 0rpx;
    }

    .progress_bodyItemfd1_0_c6_c0_c10_c1 {
        color: #666666;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c6_c0_c10_c0_c0 {
        color: #333333;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c6_c0_c10 {
        border-bottom: 1px solid rgba(238, 238, 238, 1);
        padding: 0rpx 0rpx 32rpx 0rpx;
        margin: 32rpx 0rpx 0rpx 0rpx;
    }

    .progress_bodyItemfd1_0_c6_c0_c9_c1 {
        color: #666666;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c6_c0_c9_c0_c0 {
        color: #333333;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c6_c0_c9 {
        border-bottom: 1px solid rgba(238, 238, 238, 1);
        padding: 0rpx 0rpx 32rpx 0rpx;
        margin: 32rpx 0rpx 0rpx 0rpx;
    }

    .progress_bodyItemfd1_0_c6_c0_c8_c1 {
        color: #666666;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c6_c0_c8_c0_c0 {
        color: #333333;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c6_c0_c8 {
        border-bottom: 1px solid rgba(238, 238, 238, 1);
        padding: 0rpx 0rpx 32rpx 0rpx;
        margin: 32rpx 0rpx 0rpx 0rpx;
    }

    .progress_bodyItemfd1_0_c6_c0_c7_c1 {
        color: #666666;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c6_c0_c7_c0_c0 {
        color: #333333;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c6_c0_c7 {
        border-bottom: 1px solid rgba(238, 238, 238, 1);
        padding: 0rpx 0rpx 32rpx 0rpx;
        margin: 32rpx 0rpx 0rpx 0rpx;
    }

    .progress_bodyItemfd1_0_c6_c0_c6_c1 {
        color: #666666;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c6_c0_c6_c0_c0 {
        color: #333333;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c6_c0_c6 {
        border-bottom: 1px solid rgba(238, 238, 238, 1);
        padding: 0rpx 0rpx 32rpx 0rpx;
        margin: 32rpx 0rpx 0rpx 0rpx;
    }

    .progress_bodyItemfd1_0_c6_c0_c5_c1 {
        color: #666666;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c6_c0_c5_c0_c0 {
        color: #333333;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c6_c0_c5 {
        border-bottom: 1px solid rgba(238, 238, 238, 1);
        padding: 0rpx 0rpx 32rpx 0rpx;
        margin: 32rpx 0rpx 0rpx 0rpx;
    }

    .progress_bodyItemfd1_0_c6_c0_c4_c1 {
        color: #666666;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c6_c0_c4_c0_c0 {
        color: #333333;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c6_c0_c4 {
        border-bottom: 1px solid rgba(238, 238, 238, 1);
        padding: 0rpx 0rpx 32rpx 0rpx;
        margin: 32rpx 0rpx 0rpx 0rpx;
    }

    .progress_bodyItemfd1_0_c6_c0_c3_c1_c1 {
        color: #666666;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c6_c0_c3_c1_c0 {
        color: #666666;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c6_c0_c3_c0_c0 {
        color: #333333;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c6_c0_c3 {
        border-bottom: 1px solid rgba(238, 238, 238, 1);
        padding: 0rpx 0rpx 32rpx 0rpx;
        margin: 32rpx 0rpx 0rpx 0rpx;
    }

    .progress_bodyItemfd1_0_c6_c0_c2_c1_c1 {
        color: #666666;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c6_c0_c2_c1_c0 {
        color: #666666;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c6_c0_c2_c0_c0 {
        color: #333333;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c6_c0_c2 {
        border-bottom: 1px solid rgba(238, 238, 238, 1);
        padding: 0rpx 0rpx 32rpx 0rpx;
        margin: 32rpx 0rpx 0rpx 0rpx;
    }

    .progress_bodyItemfd1_0_c6_c0_c1_c1_c1 {
        color: #666666;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c6_c0_c1_c1_c0 {
        color: #666666;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c6_c0_c1_c0_c0 {
        color: #333333;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c6_c0_c1 {
        border-bottom: 1px solid rgba(238, 238, 238, 1);
        padding: 0rpx 0rpx 32rpx 0rpx;
    }

    .progress_bodyItemfd1_0_c6_c0_c0 {
        border-bottom: 1px solid rgba(238, 238, 238, 1);
        color: #333333;
        font-size: 32rpx;
        font-weight: 500;
        line-height: 45rpx;
        padding: 0rpx 0rpx 14rpx 0rpx;
        margin: 0rpx 0rpx 32rpx 0rpx;
    }

    .progress_bodyItemfd1_0_c6_c0 {
        background: #fff;
        background-size: 100% !important;
        border-radius: 16rpx 16rpx 16rpx 16rpx;
        padding: 32rpx 24rpx 32rpx 24rpx;
        margin: 20rpx 0rpx 0rpx 0rpx;
    }

    .progress_bodyfd1_0_c6 {
        padding: 0rpx 24rpx 0rpx 24rpx;
    }

    .progress_titlefd1_0_c6 {
        font-size: 32rpx;
        color: rgba(102, 102, 102, 1);
        margin: 0rpx 0rpx 0rpx 32rpx;
    }

    .progress_titlebodyItemfd1_0_c5_c0_c0_c4 {
        font-size: 28rpx;
        color: rgba(102, 102, 102, 1);
    }

    .progress_bodyItembodyItemfd1_0_c5_c0_c0_c3_c2_c1_c1 {
        color: #9EA7B7;
        font-size: 20rpx;
        font-weight: 400;
        line-height: 28rpx;
    }

    .progress_bodyItembodyItemfd1_0_c5_c0_c0_c3_c2_c1_c0 {
        width: 36rpx;
        height: 36rpx;
        border-radius: 18rpx 18rpx 18rpx 18rpx;
        margin: 0rpx 0rpx 6rpx 0rpx;
    }

    .progress_bodyItembodyItemfd1_0_c5_c0_c0_c3_c2_c0 {
        color: #9EA7B7;
        font-size: 24rpx;
        font-weight: 400;
        line-height: 33rpx;
        margin: 0rpx 40rpx 0rpx 0rpx;
    }

    .progress_bodyItembodyItemfd1_0_c5_c0_c0_c3_c2 {
        margin: 20rpx 0rpx 0rpx 0rpx;
    }

    .progress_bodyItembodyItemfd1_0_c5_c0_c0_c3_c1 {
        color: #666666;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 48rpx;
        margin: 21rpx 0rpx 0rpx 0rpx;
    }

    .progress_bodyItembodyItemfd1_0_c5_c0_c0_c3_c0_c1_c1 {
        color: #666666;
        font-size: 24rpx;
        font-weight: 400;
        line-height: 33rpx;
        margin: 10rpx 0rpx 0rpx 0rpx;
    }

    .progress_bodyItembodyItemfd1_0_c5_c0_c0_c3_c0_c1_c0 {
        color: #333333;
        font-size: 32rpx;
        font-weight: 500;
        line-height: 45rpx;
    }

    .progress_bodyItembodyItemfd1_0_c5_c0_c0_c3_c0_c1 {
        margin: 0rpx 0rpx 0rpx 16rpx;
    }

    .progress_bodyItembodyItemfd1_0_c5_c0_c0_c3_c0_c0 {
        width: 88rpx;
        height: 88rpx;
        border-radius: 44rpx 44rpx 44rpx 44rpx;
    }

    .progress_bodybodyItemfd1_0_c5_c0_c0_c3 {
        padding: 32rpx 24rpx 32rpx 24rpx;
        border-radius: 0rpx 0rpx 16rpx 16rpx;
    }

    .progress_titlebodyItemfd1_0_c5_c0_c0_c3 {
        margin: 0rpx 56rpx 0rpx 24rpx;
        font-size: 28rpx;
        color: rgba(102, 102, 102, 1);
    }

    .progress_linebodyItemfd1_0_c5_c0_c0 {
        background: url(/static/images/12.png) no-repeat;
        background-size: 100% !important;
        width: 40rpx;
        height: 6rpx;
        top: 80rpx;
        background-size: 100% auto !important;
    }

    .progress_rightbodyItemfd1_0_c5_c0_c0_c0_c1 {
        width: 28rpx;
        height: 18rpx;
        border-radius: 0rpx 0rpx 0rpx 0rpx;
    }

    .progress_rightbodyItemfd1_0_c5_c0_c0_c0_c0 {
        color: #666666;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
        margin: 0rpx 16rpx 0rpx 0rpx;
    }

    .progress_rightbodyItemfd1_0_c5_c0_c0_c0 {
        height: 100%;
        margin: 0rpx 24rpx 0rpx 0rpx;
        width: 132rpx;
    }

    .checkTitlebodyItemfd1_0_c5_c0_c0 {
        font-weight: 700 !important;
        font-size: 32rpx !important;
        color: rgba(11, 24, 152, 1) !important;
        background-color: rgba(255, 255, 255, 1) !important;
    }

    ::v-deep .progress_benbenTabsbodyItemfd1_0_c5_c0_c0 {
        border-bottom: 1px solid rgba(238, 238, 238, 1);
        background: #fff;
        background-size: 100% !important;
        width: 702rpx;
        height: 90rpx;
        white-space: nowrap;
        text-align: center;
        border-radius: 16rpx 16rpx 0rpx 0rpx;
    }

    .progress_bodyItemfd1_0_c5_c0 {
        background: #fff;
        background-size: 100% !important;
        border-radius: 16rpx 16rpx 16rpx 16rpx;
        margin: 24rpx 0rpx 0rpx 0rpx;
    }

    .progress_bodyfd1_0_c5 {
        padding: 0rpx 24rpx 0rpx 24rpx;
    }

    .progress_titlefd1_0_c5 {
        font-size: 32rpx;
        color: rgba(102, 102, 102, 1);
        margin: 0rpx 0rpx 0rpx 32rpx;
    }

    .progress_titlebodyItemfd1_0_c4_c0_c0_c4 {
        font-size: 28rpx;
        color: rgba(102, 102, 102, 1);
    }

    .progress_bodyItembodyItemfd1_0_c4_c0_c0_c3_c3_c7_c1 {
        color: #666666;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
        margin: 0rpx 0rpx 0rpx 32rpx;
    }

    .progress_bodyItembodyItemfd1_0_c4_c0_c0_c3_c3_c7_c0 {
        color: #333333;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItembodyItemfd1_0_c4_c0_c0_c3_c3_c7 {
        margin: 24rpx 0rpx 0rpx 0rpx;
    }

    .progress_bodyItembodyItemfd1_0_c4_c0_c0_c3_c3_c6_c1 {
        color: #666666;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
        margin: 0rpx 0rpx 0rpx 32rpx;
    }

    .progress_bodyItembodyItemfd1_0_c4_c0_c0_c3_c3_c6_c0 {
        color: #333333;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItembodyItemfd1_0_c4_c0_c0_c3_c3_c5_c1 {
        color: #666666;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
        margin: 0rpx 0rpx 0rpx 32rpx;
    }

    .progress_bodyItembodyItemfd1_0_c4_c0_c0_c3_c3_c5_c0 {
        color: #333333;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItembodyItemfd1_0_c4_c0_c0_c3_c3_c5 {
        margin: 24rpx 0rpx 24rpx 0rpx;
    }

    .progress_bodyItembodyItemfd1_0_c4_c0_c0_c3_c3_c4_c1 {
        color: #666666;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
        margin: 0rpx 0rpx 0rpx 32rpx;
    }

    .progress_bodyItembodyItemfd1_0_c4_c0_c0_c3_c3_c4_c0 {
        color: #333333;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItembodyItemfd1_0_c4_c0_c0_c3_c3_c3_c1 {
        color: #666666;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
        margin: 0rpx 0rpx 0rpx 32rpx;
    }

    .progress_bodyItembodyItemfd1_0_c4_c0_c0_c3_c3_c3_c0 {
        color: #333333;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItembodyItemfd1_0_c4_c0_c0_c3_c3_c3 {
        margin: 24rpx 0rpx 24rpx 0rpx;
    }

    .progress_bodyItembodyItemfd1_0_c4_c0_c0_c3_c3_c2_c1 {
        color: #666666;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
        margin: 0rpx 0rpx 0rpx 32rpx;
    }

    .progress_bodyItembodyItemfd1_0_c4_c0_c0_c3_c3_c2_c0 {
        color: #333333;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItembodyItemfd1_0_c4_c0_c0_c3_c3_c1_c1 {
        color: #666666;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
        margin: 0rpx 0rpx 0rpx 32rpx;
    }

    .progress_bodyItembodyItemfd1_0_c4_c0_c0_c3_c3_c1_c0 {
        color: #333333;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItembodyItemfd1_0_c4_c0_c0_c3_c3_c1 {
        margin: 24rpx 0rpx 24rpx 0rpx;
    }

    .progress_bodyItembodyItemfd1_0_c4_c0_c0_c3_c3_c0_c1 {
        color: #666666;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
        margin: 0rpx 0rpx 0rpx 88rpx;
    }

    .progress_bodyItembodyItemfd1_0_c4_c0_c0_c3_c3_c0_c0 {
        color: #333333;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItembodyItemfd1_0_c4_c0_c0_c3_c3 {
        background: rgba(243, 246, 251, 1);
        background-size: 100% !important;
        border-radius: 16rpx 16rpx 16rpx 16rpx;
        padding: 32rpx 24rpx 32rpx 24rpx;
        margin: 24rpx 0rpx 0rpx 0rpx;
    }

    .progress_bodyItembodyItemfd1_0_c4_c0_c0_c3_c2 {
        color: #1F1F1F;
        font-size: 28rpx;
        font-weight: 500;
        line-height: 40rpx;
    }

    .progress_bodyItembodyItemfd1_0_c4_c0_c0_c3_c1_c1 {
        color: #666666;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItembodyItemfd1_0_c4_c0_c0_c3_c1_c0 {
        color: #333333;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItembodyItemfd1_0_c4_c0_c0_c3_c1 {
        border-bottom: 1px solid rgba(238, 238, 238, 1);
        padding: 32rpx 0rpx 32rpx 0rpx;
    }

    .progress_bodyItembodyItemfd1_0_c4_c0_c0_c3_c0_c1 {
        color: #666666;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItembodyItemfd1_0_c4_c0_c0_c3_c0_c0 {
        color: #333333;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItembodyItemfd1_0_c4_c0_c0_c3_c0 {
        border-bottom: 1px solid rgba(238, 238, 238, 1);
        padding: 32rpx 0rpx 32rpx 0rpx;
    }

    .progress_bodybodyItemfd1_0_c4_c0_c0_c3 {
        padding: 0rpx 24rpx 32rpx 24rpx;
        border-radius: 0rpx 0rpx 16rpx 16rpx;
    }

    .progress_titlebodyItemfd1_0_c4_c0_c0_c3 {
        margin: 0rpx 56rpx 0rpx 24rpx;
        font-size: 28rpx;
        color: rgba(102, 102, 102, 1);
    }

    .progress_linebodyItemfd1_0_c4_c0_c0 {
        background: url(/static/images/12.png) no-repeat;
        background-size: 100% !important;
        width: 40rpx;
        height: 6rpx;
        top: 80rpx;
        background-size: 100% auto !important;
    }

    .checkTitlebodyItemfd1_0_c4_c0_c0 {
        font-weight: 700 !important;
        font-size: 32rpx !important;
        color: rgba(11, 24, 152, 1) !important;
        background-color: rgba(255, 255, 255, 1) !important;
    }

    ::v-deep .progress_benbenTabsbodyItemfd1_0_c4_c0_c0 {
        border-bottom: 1px solid rgba(238, 238, 238, 1);
        background: #fff;
        background-size: 100% !important;
        width: 702rpx;
        height: 90rpx;
        white-space: nowrap;
        text-align: center;
        border-radius: 16rpx 16rpx 0rpx 0rpx;
    }

    .progress_bodyItemfd1_0_c4_c0 {
        background: #fff;
        background-size: 100% !important;
        border-radius: 16rpx 16rpx 16rpx 16rpx;
        margin: 24rpx 0rpx 0rpx 0rpx;
    }

    .progress_bodyfd1_0_c4 {
        padding: 0rpx 24rpx 0rpx 24rpx;
    }

    .progress_titlefd1_0_c4 {
        font-size: 32rpx;
        color: rgba(102, 102, 102, 1);
        margin: 0rpx 0rpx 0rpx 32rpx;
    }

    .progress_bodyItemfd1_0_c3_c1_c10_c1 {
        color: #666666;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c3_c1_c10_c0_c0 {
        color: #333333;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c3_c1_c10 {
        margin: 32rpx 0rpx 0rpx 0rpx;
    }

    .progress_bodyItemfd1_0_c3_c1_c9_c1 {
        color: #666666;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c3_c1_c9_c0_c0 {
        color: #333333;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c3_c1_c9 {
        border-bottom: 1px solid rgba(238, 238, 238, 1);
        padding: 0rpx 0rpx 32rpx 0rpx;
        margin: 32rpx 0rpx 0rpx 0rpx;
    }

    .progress_bodyItemfd1_0_c3_c1_c8_c1 {
        color: #666666;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c3_c1_c8_c0_c0 {
        color: #333333;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c3_c1_c8 {
        border-bottom: 1px solid rgba(238, 238, 238, 1);
        padding: 0rpx 0rpx 32rpx 0rpx;
        margin: 32rpx 0rpx 0rpx 0rpx;
    }

    .progress_bodyItemfd1_0_c3_c1_c7_c1 {
        color: #666666;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
        margin: 0rpx 0rpx 0rpx 66rpx;
        text-align: right;
    }

    .progress_bodyItemfd1_0_c3_c1_c7_c0_c0 {
        color: #333333;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c3_c1_c7 {
        border-bottom: 1px solid rgba(238, 238, 238, 1);
        padding: 0rpx 0rpx 32rpx 0rpx;
        margin: 32rpx 0rpx 0rpx 0rpx;
    }

    .progress_bodyItemfd1_0_c3_c1_c6_c1 {
        color: #666666;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c3_c1_c6_c0_c0 {
        color: #333333;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c3_c1_c6 {
        border-bottom: 1px solid rgba(238, 238, 238, 1);
        padding: 0rpx 0rpx 32rpx 0rpx;
        margin: 32rpx 0rpx 0rpx 0rpx;
    }

    .progress_bodyItemfd1_0_c3_c1_c5_c1 {
        color: #666666;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c3_c1_c5_c0_c0 {
        color: #333333;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c3_c1_c5 {
        border-bottom: 1px solid rgba(238, 238, 238, 1);
        padding: 0rpx 0rpx 32rpx 0rpx;
        margin: 32rpx 0rpx 0rpx 0rpx;
    }

    .progress_bodyItemfd1_0_c3_c1_c4_c1 {
        color: #666666;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c3_c1_c4_c0_c0 {
        color: #333333;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c3_c1_c4 {
        border-bottom: 1px solid rgba(238, 238, 238, 1);
        padding: 0rpx 0rpx 32rpx 0rpx;
        margin: 32rpx 0rpx 0rpx 0rpx;
    }

    .progress_bodyItemfd1_0_c3_c1_c3_c1 {
        color: #666666;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c3_c1_c3_c0_c0 {
        color: #333333;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c3_c1_c3 {
        border-bottom: 1px solid rgba(238, 238, 238, 1);
        padding: 0rpx 0rpx 32rpx 0rpx;
        margin: 32rpx 0rpx 0rpx 0rpx;
    }

    .progress_bodyItemfd1_0_c3_c1_c2_c1 {
        color: #666666;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c3_c1_c2_c0_c0 {
        color: #333333;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c3_c1_c2 {
        border-bottom: 1px solid rgba(238, 238, 238, 1);
        padding: 0rpx 0rpx 32rpx 0rpx;
        margin: 32rpx 0rpx 0rpx 0rpx;
    }

    .progress_bodyItemfd1_0_c3_c1_c1_c1 {
        color: #666666;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c3_c1_c1_c0_c0 {
        color: #333333;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c3_c1_c1 {
        border-bottom: 1px solid rgba(238, 238, 238, 1);
        padding: 0rpx 0rpx 32rpx 0rpx;
    }

    .progress_bodyItemfd1_0_c3_c1_c0 {
        color: #333333;
        font-size: 32rpx;
        font-weight: 500;
        line-height: 45rpx;
        margin: 0rpx 0rpx 48rpx 0rpx;
    }

    .progress_bodyItemfd1_0_c3_c1 {
        background: #fff;
        background-size: 100% !important;
        border-radius: 16rpx 16rpx 16rpx 16rpx;
        padding: 32rpx 24rpx 32rpx 24rpx;
        margin: 20rpx 0rpx 0rpx 0rpx;
    }

    .progress_bodyItemfd1_0_c3_c0_c16_c1_c2 {
        background: rgba(11, 24, 152, 1);
        background-size: 100% !important;
        border-radius: 25rpx 25rpx 25rpx 25rpx;
        font-size: 24rpx;
        color: #fff;
        height: 56rpx;
        line-height: 56rpx;
        width: 154rpx;
        margin: 0rpx 0rpx 0rpx 24rpx;
    }

    .progress_bodyItemfd1_0_c3_c0_c16_c1_c1 {
        color: #E63541;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c3_c0_c16_c1_c0_2 {
        color: rgba(102, 102, 102, 1);
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
        margin: 0rpx 14rpx 0rpx 0rpx;
    }

    .progress_bodyItemfd1_0_c3_c0_c16_c1_c0_1 {
        color: rgba(102, 102, 102, 1);
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
        margin: 0rpx 14rpx 0rpx 0rpx;
    }

    .progress_bodyItemfd1_0_c3_c0_c16_c1_c0 {
        color: rgba(102, 102, 102, 1);
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
        margin: 0rpx 14rpx 0rpx 0rpx;
    }

    .progress_bodyItemfd1_0_c3_c0_c16_c0_c0 {
        color: #333333;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c3_c0_c16 {
        margin: 32rpx 0rpx 0rpx 0rpx;
    }

    .progress_bodyItemfd1_0_c3_c0_c15_c1 {
        color: #666666;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c3_c0_c15_c0_c0 {
        color: #333333;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c3_c0_c15 {
        border-bottom: 1px solid rgba(238, 238, 238, 1);
        padding: 0rpx 0rpx 32rpx 0rpx;
        margin: 32rpx 0rpx 0rpx 0rpx;
    }

    .progress_bodyItemfd1_0_c3_c0_c14_c1 {
        color: #666666;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c3_c0_c14_c0_c0 {
        color: #333333;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c3_c0_c14 {
        border-bottom: 1px solid rgba(238, 238, 238, 1);
        padding: 0rpx 0rpx 32rpx 0rpx;
        margin: 32rpx 0rpx 0rpx 0rpx;
    }

    .progress_bodyItemfd1_0_c3_c0_c13_c1_3 {
        color: #666666;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c3_c0_c13_c1_2 {
        color: #666666;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c3_c0_c13_c1_1 {
        color: #666666;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c3_c0_c13_c1 {
        color: #666666;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c3_c0_c13_c0_c0 {
        color: #333333;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c3_c0_c13 {
        border-bottom: 1px solid rgba(238, 238, 238, 1);
        padding: 0rpx 0rpx 32rpx 0rpx;
        margin: 32rpx 0rpx 0rpx 0rpx;
    }

    .progress_bodyItemfd1_0_c3_c0_c12_c1 {
        color: #0B1898;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c3_c0_c12_c0_c0 {
        color: #333333;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c3_c0_c12 {
        border-bottom: 1px solid rgba(238, 238, 238, 1);
        padding: 0rpx 0rpx 32rpx 0rpx;
        margin: 32rpx 0rpx 0rpx 0rpx;
    }

    .progress_bodyItemfd1_0_c3_c0_c11_c1 {
        color: #666666;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c3_c0_c11_c0_c0 {
        color: #333333;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c3_c0_c11 {
        border-bottom: 1px solid rgba(238, 238, 238, 1);
        padding: 0rpx 0rpx 32rpx 0rpx;
        margin: 32rpx 0rpx 0rpx 0rpx;
    }

    .progress_bodyItemfd1_0_c3_c0_c10_c1_3 {
        color: rgba(255, 127, 32, 1);
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c3_c0_c10_c1_2 {
        color: rgba(255, 127, 32, 1);
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c3_c0_c10_c1_1 {
        color: rgba(29, 185, 153, 1);
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c3_c0_c10_c1 {
        color: #0B1898;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c3_c0_c10_c0_c0 {
        color: #333333;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c3_c0_c10 {
        border-bottom: 1px solid rgba(238, 238, 238, 1);
        padding: 0rpx 0rpx 32rpx 0rpx;
        margin: 32rpx 0rpx 0rpx 0rpx;
    }

    .progress_bodyItemfd1_0_c3_c0_c9_c1_c1_1 {
        width: 92rpx;
        height: 34rpx;
        border-radius: 0rpx 0rpx 0rpx 0rpx;
    }

    .progress_bodyItemfd1_0_c3_c0_c9_c1_c1 {
        width: 92rpx;
        height: 34rpx;
        border-radius: 0rpx 0rpx 0rpx 0rpx;
    }

    .progress_bodyItemfd1_0_c3_c0_c9_c1_c0_1 {
        border: 1px solid rgba(255, 127, 32, 1);
        color: rgba(255, 127, 32, 1);
        font-size: 20rpx;
        font-weight: 500;
        line-height: 28rpx;
        padding: 3rpx 11rpx 3rpx 11rpx;
    }

    .progress_bodyItemfd1_0_c3_c0_c9_c1_c0 {
        border: 1px solid rgba(102, 102, 102, 1);
        color: #666666;
        font-size: 20rpx;
        font-weight: 500;
        line-height: 28rpx;
        padding: 3rpx 8rpx 3rpx 8rpx;
        border-radius: 6rpx 6rpx 6rpx 6rpx;
    }

    .progress_bodyItemfd1_0_c3_c0_c9_c0_c0 {
        color: #333333;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c3_c0_c9 {
        border-bottom: 1px solid rgba(238, 238, 238, 1);
        padding: 0rpx 0rpx 32rpx 0rpx;
        margin: 32rpx 0rpx 0rpx 0rpx;
    }

    .progress_bodyItemfd1_0_c3_c0_c8_c1 {
        color: #666666;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c3_c0_c8_c0_c0 {
        color: #333333;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c3_c0_c8 {
        border-bottom: 1px solid rgba(238, 238, 238, 1);
        padding: 0rpx 0rpx 32rpx 0rpx;
        margin: 32rpx 0rpx 0rpx 0rpx;
    }

    .progress_bodyItemfd1_0_c3_c0_c7_c1 {
        color: #666666;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c3_c0_c7_c0_c0 {
        color: #333333;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c3_c0_c7 {
        border-bottom: 1px solid rgba(238, 238, 238, 1);
        padding: 0rpx 0rpx 32rpx 0rpx;
        margin: 32rpx 0rpx 0rpx 0rpx;
    }

    .progress_bodyItemfd1_0_c3_c0_c6_c1 {
        color: #666666;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c3_c0_c6_c0_c0 {
        color: #333333;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c3_c0_c6 {
        border-bottom: 1px solid rgba(238, 238, 238, 1);
        padding: 0rpx 0rpx 32rpx 0rpx;
        margin: 32rpx 0rpx 0rpx 0rpx;
    }

    .progress_bodyItemfd1_0_c3_c0_c5_c1 {
        color: #666666;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c3_c0_c5_c0_c0 {
        color: #333333;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c3_c0_c5 {
        border-bottom: 1px solid rgba(238, 238, 238, 1);
        padding: 0rpx 0rpx 32rpx 0rpx;
        margin: 32rpx 0rpx 0rpx 0rpx;
    }

    .progress_bodyItemfd1_0_c3_c0_c4_c1 {
        color: #666666;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c3_c0_c4_c0_c0 {
        color: #333333;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c3_c0_c4 {
        border-bottom: 1px solid rgba(238, 238, 238, 1);
        padding: 0rpx 0rpx 32rpx 0rpx;
        margin: 32rpx 0rpx 0rpx 0rpx;
    }

    .progress_bodyItemfd1_0_c3_c0_c3_c1 {
        color: #666666;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c3_c0_c3_c0_c0 {
        color: #333333;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c3_c0_c3 {
        border-bottom: 1px solid rgba(238, 238, 238, 1);
        padding: 0rpx 0rpx 32rpx 0rpx;
        margin: 32rpx 0rpx 0rpx 0rpx;
    }

    .progress_bodyItemfd1_0_c3_c0_c2_c1 {
        color: #666666;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
        margin: 0rpx 0rpx 0rpx 80rpx;
        text-align: right;
    }

    .progress_bodyItemfd1_0_c3_c0_c2_c0_c1 {
        color: #333333;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c3_c0_c2_c0_c0 {
        color: rgba(230, 53, 65, 1);
        font-size: 28rpx;
        font-weight: 400;
        line-height: 30rpx;
    }

    .progress_bodyItemfd1_0_c3_c0_c2 {
        border-bottom: 1px solid rgba(238, 238, 238, 1);
        padding: 0rpx 0rpx 32rpx 0rpx;
        margin: 32rpx 0rpx 0rpx 0rpx;
    }

    .progress_bodyItemfd1_0_c3_c0_c1_c1 {
        color: #666666;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c3_c0_c1_c0_c1 {
        color: #333333;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 40rpx;
    }

    .progress_bodyItemfd1_0_c3_c0_c1_c0_c0 {
        color: rgba(230, 53, 65, 1);
        font-size: 28rpx;
        font-weight: 400;
        line-height: 30rpx;
    }

    .progress_bodyItemfd1_0_c3_c0_c1 {
        border-bottom: 1px solid rgba(238, 238, 238, 1);
        padding: 0rpx 0rpx 32rpx 0rpx;
    }

    .progress_bodyItemfd1_0_c3_c0_c0 {
        border-bottom: 1px solid rgba(238, 238, 238, 1);
        color: #333333;
        font-size: 32rpx;
        font-weight: 500;
        line-height: 45rpx;
        margin: 0rpx 0rpx 32rpx 0rpx;
        padding: 0rpx 0rpx 16rpx 0rpx;
    }

    .progress_bodyItemfd1_0_c3_c0 {
        background: #fff;
        background-size: 100% !important;
        border-radius: 16rpx 16rpx 16rpx 16rpx;
        padding: 32rpx 24rpx 32rpx 24rpx;
        margin: 20rpx 0rpx 0rpx 0rpx;
    }

    .progress_bodyfd1_0_c3 {
        padding: 0rpx 24rpx 0rpx 24rpx;
    }

    .progress_titlefd1_0_c3 {
        font-size: 32rpx;
        color: rgba(102, 102, 102, 1);
        margin: 0rpx 0rpx 0rpx 32rpx;
    }

    .progress_linefd1_0 {
        background: rgba(11, 24, 152, 0.3);
        background-size: 100% !important;
        width: 72rpx;
        height: 12rpx;
        top: 61rpx;
        background-size: 100% auto !important;
    }

    .checkTitlefd1_0 {
        font-weight: 700 !important;
        font-size: 36rpx !important;
        color: #333 !important;
        background-color: rgba(255, 255, 255, 1) !important;
    }

    ::v-deep .progress_benbenTabsfd1_0 {
        background: #fff;
        background-size: 100% !important;
        width: 750rpx;
        height: 90rpx;
        white-space: nowrap;
        text-align: center;
    }

    .progress_flex_2 {
        width: 118rpx;
        height: 118rpx;
        overflow: hidden;
        z-index: 10;
        top: 700rpx;
        right: 0rpx;
    }

    .progress_fd2_0 {
        width: 118rpx;
        height: 118rpx;
        border-radius: 0rpx 0rpx 0rpx 0rpx;
    }
</style>