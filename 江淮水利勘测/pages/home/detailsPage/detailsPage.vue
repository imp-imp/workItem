<template>
    <view class="page" :style="themeColor">
    <view class="flex flex-wrap align-center justify-between benben-position-layout flex detailsPage_flex_0"    :style="{height:(88+StatusBarRpx)+'rpx',paddingTop:StatusBarRpx+'rpx'}">
            <view   class='flex flex-wrap align-center detailsPage_fd0_0'  @tap.stop="handleJumpDiy" data-type="back" data-url="1"   >
        <text class='fu-iconfont2' >&#xe794;</text>
</view>
<text class='detailsPage_fd0_1' >详情</text>
    <view   class='flex flex-wrap align-center detailsPage_fd0_2'     >
        </view>

        </view>
<view :style="{height: (88+StatusBarRpx)+'rpx'}"  ></view>
<!---flex布局flex布局开始-->
 <view class="flex benben-flex-layout flex-wrap align-center"   >
        <view>
        <benben-flex-tabs class-name='detailsPage_benbenTabsfd1_0' v-model="tabsTypefd1_0" ref="benben_tabsfd1_0" select-mark="benben_tabsfd1_0" key="benben_tabsfd1_0" :open-title-type='false' :open-sticky='true' :top='0' :is-show-content='true' :scrollspy='false'  :tabs-info.sync="tabsInfofd1_0"  >
            
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
                :class="{ 'checkTitlefd1_0': tabsTypefd1_0 == '1', 'flex flex-wrap align-center detailsPage_titlefd1_0_c3': true }"
                @tap="tabsTypefd1_0 = '1'"
                :id="`benben_tabsfd1_0-title-item-${'1'}`"
                
              >
                
<text  >合同信息</text>

              </view>            <view 
                :class="{ 'checkTitlefd1_0': tabsTypefd1_0 == '2', 'flex flex-wrap align-center detailsPage_titlefd1_0_c4': true }"
                @tap="tabsTypefd1_0 = '2'"
                :id="`benben_tabsfd1_0-title-item-${'2'}`"
                
              >
                
<text  >合同概况</text>

              </view>
            </view>
            <view :style="{ left: tabsInfofd1_0.lineleft, maxWidth: tabsInfofd1_0.lineWidth }" id="benben_tabsfd1_0-line" class="benben-tabs-line flex benben-flex-tabs-line detailsPage_linefd1_0"></view>
          </view>
        </scroll-view>
            
        </benben-flex-tabs>
                <view>
                        <view class="benben_tabsfd1_0-body-item flex flex-direction flex-wrap align-stretch detailsPage_bodyfd1_0_c3" v-if=" tabsTypefd1_0 == '1' " :id="`benben_tabsfd1_0-body-item-${'1'}`">
    <view   class='flex flex-direction flex-wrap align-stretch detailsPage_bodyItemfd1_0_c3_c0'     >
            <view   class='flex flex-wrap align-center justify-between detailsPage_bodyItemfd1_0_c3_c0_c0'     >
            <view   class='flex flex-wrap align-center'     >
        <text class='detailsPage_bodyItemfd1_0_c3_c0_c0_c0_c0' >*</text>
<text class='detailsPage_bodyItemfd1_0_c3_c0_c0_c0_c1' >合同编号</text>
</view>
<text class='detailsPage_bodyItemfd1_0_c3_c0_c0_c1' >JHSL-2208-J0001-0001</text>
</view>
    <view   class='flex flex-wrap align-start justify-between detailsPage_bodyItemfd1_0_c3_c0_c1'     >
            <view   class='flex flex-wrap align-center'     >
        <text class='detailsPage_bodyItemfd1_0_c3_c0_c1_c0_c0' >*</text>
<text class='detailsPage_bodyItemfd1_0_c3_c0_c1_c0_c1' >合同名称</text>
</view>
<text class='detailsPage_bodyItemfd1_0_c3_c0_c1_c1' >归园田居施工图设计</text>
</view>
    <view   class='flex flex-wrap align-start justify-between detailsPage_bodyItemfd1_0_c3_c0_c2'     >
            <view   class='flex flex-wrap align-center'     >
        <text class='detailsPage_bodyItemfd1_0_c3_c0_c2_c0_c0' >*</text>
<text class='detailsPage_bodyItemfd1_0_c3_c0_c2_c0_c1' >项目编号</text>
</view>
<text class='detailsPage_bodyItemfd1_0_c3_c0_c2_c1' >2022-N4-001-J</text>
</view>
    <view   class='flex flex-wrap align-start justify-between detailsPage_bodyItemfd1_0_c3_c0_c3'     >
            <view   class='flex flex-wrap align-center'     >
        <text class='detailsPage_bodyItemfd1_0_c3_c0_c3_c0_c0' >*</text>
<text class='detailsPage_bodyItemfd1_0_c3_c0_c3_c0_c1' >项目名称</text>
</view>
<text class='flex-sub detailsPage_bodyItemfd1_0_c3_c0_c3_c1' >山乡归园田居美丽乡村样板片区工程(龙溪村标段)施工</text>
</view>
    <view   class='flex flex-wrap align-center justify-between detailsPage_bodyItemfd1_0_c3_c0_c4'     >
            <view   class='flex flex-wrap align-center'     >
        <text class='detailsPage_bodyItemfd1_0_c3_c0_c4_c0_c0' >获取方式</text>
</view>
<text class='detailsPage_bodyItemfd1_0_c3_c0_c4_c1' >公开招标</text>
</view>
    <view   class='flex flex-wrap align-center justify-between detailsPage_bodyItemfd1_0_c3_c0_c5'     >
            <view   class='flex flex-wrap align-center'     >
        <text class='detailsPage_bodyItemfd1_0_c3_c0_c5_c0_c0' >实施方式</text>
</view>
<text class='detailsPage_bodyItemfd1_0_c3_c0_c5_c1' >直营</text>
</view>
    <view   class='flex flex-wrap align-center justify-between detailsPage_bodyItemfd1_0_c3_c0_c6'     >
            <view   class='flex flex-wrap align-center'     >
        <text class='detailsPage_bodyItemfd1_0_c3_c0_c6_c0_c0' >专业类别</text>
</view>
<text class='detailsPage_bodyItemfd1_0_c3_c0_c6_c1' >水土保持</text>
</view>
    <view   class='flex flex-wrap align-center justify-between detailsPage_bodyItemfd1_0_c3_c0_c7'     >
            <view   class='flex flex-wrap align-center'     >
        <text class='detailsPage_bodyItemfd1_0_c3_c0_c7_c0_c0' >签订日期</text>
</view>
<text class='detailsPage_bodyItemfd1_0_c3_c0_c7_c1' >2022-07-20</text>
</view>
    <view   class='flex flex-wrap align-center justify-between detailsPage_bodyItemfd1_0_c3_c0_c8'     >
            <view   class='flex flex-wrap align-center'     >
        <text class='detailsPage_bodyItemfd1_0_c3_c0_c8_c0_c0' >合同金额</text>
</view>
    <view   class='flex flex-wrap align-center'     >
        <text class='detailsPage_bodyItemfd1_0_c3_c0_c8_c1_c0' >120008</text>
<text class='detailsPage_bodyItemfd1_0_c3_c0_c8_c1_c1' >元</text>
</view>
</view>
    <view   class='flex flex-wrap align-center justify-between detailsPage_bodyItemfd1_0_c3_c0_c9'     >
            <view   class='flex flex-wrap align-center'     >
        <text class='detailsPage_bodyItemfd1_0_c3_c0_c9_c0_c0' >有效合同额</text>
</view>
    <view   class='flex flex-wrap align-center'     >
        <text class='detailsPage_bodyItemfd1_0_c3_c0_c9_c1_c0' >80000</text>
<text class='detailsPage_bodyItemfd1_0_c3_c0_c9_c1_c1' >元</text>
</view>
</view>
    <view   class='flex flex-wrap align-center justify-between detailsPage_bodyItemfd1_0_c3_c0_c10'     >
            <view   class='flex flex-wrap align-center'     >
        <text class='detailsPage_bodyItemfd1_0_c3_c0_c10_c0_c0' >有效比例</text>
</view>
    <view   class='flex flex-wrap align-center'     >
        <text class='detailsPage_bodyItemfd1_0_c3_c0_c10_c1_c0' >10</text>
<text class='detailsPage_bodyItemfd1_0_c3_c0_c10_c1_c1' >%</text>
</view>
</view>
    <view   class='flex flex-wrap align-center justify-between detailsPage_bodyItemfd1_0_c3_c0_c11'     >
            <view   class='flex flex-wrap align-center'     >
        <text class='detailsPage_bodyItemfd1_0_c3_c0_c11_c0_c0' >合同类型</text>
</view>
<text class='detailsPage_bodyItemfd1_0_c3_c0_c11_c1' >原合同</text>
</view>
    <view   class='flex flex-wrap align-center justify-between detailsPage_bodyItemfd1_0_c3_c0_c12'     >
            <view   class='flex flex-wrap align-center'     >
        <text class='detailsPage_bodyItemfd1_0_c3_c0_c12_c0_c0' >履约保证金</text>
</view>
    <view   class='flex flex-wrap align-center'     >
        <text class='detailsPage_bodyItemfd1_0_c3_c0_c12_c1_c0' >12000</text>
<text class='detailsPage_bodyItemfd1_0_c3_c0_c12_c1_c1' >元</text>
</view>
</view>
    <view   class='flex flex-wrap align-center justify-between detailsPage_bodyItemfd1_0_c3_c0_c13'     >
            <view   class='flex flex-wrap align-center'     >
        <text class='detailsPage_bodyItemfd1_0_c3_c0_c13_c0_c0' >服务期</text>
</view>
    <view   class='flex flex-wrap align-center'     >
        <text class='detailsPage_bodyItemfd1_0_c3_c0_c13_c1_c0' >50</text>
<text class='detailsPage_bodyItemfd1_0_c3_c0_c13_c1_c1' >天</text>
</view>
</view>
    <view   class='flex flex-wrap align-center justify-between detailsPage_bodyItemfd1_0_c3_c0_c14'     >
            <view   class='flex flex-wrap align-center'     >
        <text class='detailsPage_bodyItemfd1_0_c3_c0_c14_c0_c0' >项目存档</text>
</view>
<text class='detailsPage_bodyItemfd1_0_c3_c0_c14_c1' >已存档</text>
</view>
    <view   class='flex flex-wrap align-center justify-between detailsPage_bodyItemfd1_0_c3_c0_c15'     >
            <view   class='flex flex-wrap align-center'     >
        <text class='detailsPage_bodyItemfd1_0_c3_c0_c15_c0_c0' >合同份数</text>
</view>
<text class='detailsPage_bodyItemfd1_0_c3_c0_c15_c1' >4</text>
</view>
    <view   class='flex flex-wrap align-center justify-between detailsPage_bodyItemfd1_0_c3_c0_c16'     >
            <view   class='flex flex-wrap align-center'     >
        <text class='detailsPage_bodyItemfd1_0_c3_c0_c16_c0_c0' >支付方式</text>
</view>
<text class='detailsPage_bodyItemfd1_0_c3_c0_c16_c1' >否</text>
</view>
    <view   class='flex flex-wrap align-center justify-between detailsPage_bodyItemfd1_0_c3_c0_c17'     >
            <view   class='flex flex-wrap align-center'     >
        <text class='detailsPage_bodyItemfd1_0_c3_c0_c17_c0_c0' >回款阶段/金额(元)</text>
</view>
<text class='detailsPage_bodyItemfd1_0_c3_c0_c17_c1' >二期款</text>
</view>
    <view   class='flex flex-wrap align-center justify-between detailsPage_bodyItemfd1_0_c3_c0_c18'     >
            <view   class='flex flex-wrap align-center'     >
        <text class='detailsPage_bodyItemfd1_0_c3_c0_c18_c0_c0' >回款状态</text>
</view>
<text class='detailsPage_bodyItemfd1_0_c3_c0_c18_c1' >已回款</text>
</view>
    <view   class='flex flex-wrap align-center justify-between detailsPage_bodyItemfd1_0_c3_c0_c19'     >
            <view   class='flex flex-wrap align-center'     >
        <text class='detailsPage_bodyItemfd1_0_c3_c0_c19_c0_c0' >是否开票</text>
</view>
<text class='detailsPage_bodyItemfd1_0_c3_c0_c19_c1' >是</text>
</view>
    <view   class='flex flex-wrap align-center justify-between detailsPage_bodyItemfd1_0_c3_c0_c20'     >
            <view   class='flex flex-wrap align-center'     >
        <text class='detailsPage_bodyItemfd1_0_c3_c0_c20_c0_c0' >开票金额</text>
</view>
    <view   class='flex flex-wrap align-center'     >
        <text class='detailsPage_bodyItemfd1_0_c3_c0_c20_c1_c0' >6000</text>
<text class='detailsPage_bodyItemfd1_0_c3_c0_c20_c1_c1' >元</text>
</view>
</view>
</view>
</view>            <view class="benben_tabsfd1_0-body-item flex flex-direction flex-wrap align-stretch detailsPage_bodyfd1_0_c4" v-if=" tabsTypefd1_0 == '2' " :id="`benben_tabsfd1_0-body-item-${'2'}`">
    <view   class='flex flex-direction flex-wrap align-stretch detailsPage_bodyItemfd1_0_c4_c0'     >
            <view   class='flex flex-wrap align-center'     >
        <text class='detailsPage_bodyItemfd1_0_c4_c0_c0_c0' >合同甲方</text>
<text class='detailsPage_bodyItemfd1_0_c4_c0_c0_c1' >二阳县光电产业园</text>
</view>
    <view   class='flex flex-wrap align-center detailsPage_bodyItemfd1_0_c4_c0_c1'     >
        <text class='detailsPage_bodyItemfd1_0_c4_c0_c1_c0' >甲方联系人</text>
<text class='detailsPage_bodyItemfd1_0_c4_c0_c1_c1' >王先生</text>
</view>
    <view   class='flex flex-wrap align-center'     >
        <text class='detailsPage_bodyItemfd1_0_c4_c0_c2_c0' >甲方联系电话</text>
<text class='detailsPage_bodyItemfd1_0_c4_c0_c2_c1' >15500000000</text>
</view>
    <view   class='flex flex-wrap align-center detailsPage_bodyItemfd1_0_c4_c0_c3'     >
        <text class='detailsPage_bodyItemfd1_0_c4_c0_c3_c0' >乙方负责人</text>
<text class='detailsPage_bodyItemfd1_0_c4_c0_c3_c1' >陈沉沉</text>
</view>
    <view   class='flex flex-wrap align-center'     >
        <text class='detailsPage_bodyItemfd1_0_c4_c0_c4_c0' >乙方负责人电话</text>
<text class='detailsPage_bodyItemfd1_0_c4_c0_c4_c1' >15500000000</text>
</view>
    <view   class='flex flex-wrap align-start detailsPage_bodyItemfd1_0_c4_c0_c5'     >
        <text class='detailsPage_bodyItemfd1_0_c4_c0_c5_c0' >工作规模及概况</text>
<text class='flex-sub detailsPage_bodyItemfd1_0_c4_c0_c5_c1' >设备维修项目、地库电气维修余项设备维修项目、地库电气维修余项</text>
</view>
    <view   class='flex flex-wrap align-center'     >
        <text class='detailsPage_bodyItemfd1_0_c4_c0_c6_c0' >备注</text>
<text class='flex-sub detailsPage_bodyItemfd1_0_c4_c0_c6_c1' >南阳和郑州公司合作，由南阳为主导</text>
</view>
</view>
</view>
        </view>
</view>
</view>
<!---flex布局flex布局结束-->
    
    </view>
</template>
<script>
    
    export default {
        components:{},
        
        data(){
			return {"tabsInfofd1_0":{ lineleft: '', lineWidth: '', moveX: 0, scrollX: 0, PageScrollX: 0 },"tabsTypefd1_0":""};
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
    .detailsPage_flex_0{
        background:#fff;background-size: 100% !important;width:750rpx;height:88rpx;overflow:hidden;z-index:10;top:0rpx;background-size:100% auto !important;
    }
    .detailsPage_fd0_2{
        width:100rpx;height:88rpx;margin:0rpx 32rpx 0rpx 0rpx;
    }
    .detailsPage_fd0_1{
        color:#000000;font-size:36rpx;font-weight:500;line-height:50rpx;
    }
    .detailsPage_fd0_0{
        width:100rpx;height:88rpx;margin:0rpx 0rpx 0rpx 32rpx;
    }
    .detailsPage_bodyItemfd1_0_c4_c0_c6_c1{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 160rpx;
    }
    .detailsPage_bodyItemfd1_0_c4_c0_c6_c0{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsPage_bodyItemfd1_0_c4_c0_c5_c1{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 20rpx;
    }
    .detailsPage_bodyItemfd1_0_c4_c0_c5_c0{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsPage_bodyItemfd1_0_c4_c0_c5{
        margin:24rpx 10rpx 24rpx 0rpx;
    }
    .detailsPage_bodyItemfd1_0_c4_c0_c4_c1{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 20rpx;
    }
    .detailsPage_bodyItemfd1_0_c4_c0_c4_c0{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsPage_bodyItemfd1_0_c4_c0_c3_c1{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 76rpx;
    }
    .detailsPage_bodyItemfd1_0_c4_c0_c3_c0{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsPage_bodyItemfd1_0_c4_c0_c3{
        margin:24rpx 0rpx 24rpx 0rpx;
    }
    .detailsPage_bodyItemfd1_0_c4_c0_c2_c1{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 50rpx;
    }
    .detailsPage_bodyItemfd1_0_c4_c0_c2_c0{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsPage_bodyItemfd1_0_c4_c0_c1_c1{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 76rpx;
    }
    .detailsPage_bodyItemfd1_0_c4_c0_c1_c0{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsPage_bodyItemfd1_0_c4_c0_c1{
        margin:24rpx 0rpx 24rpx 0rpx;
    }
    .detailsPage_bodyItemfd1_0_c4_c0_c0_c1{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 102rpx;
    }
    .detailsPage_bodyItemfd1_0_c4_c0_c0_c0{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsPage_bodyItemfd1_0_c4_c0{
        background:#fff;background-size: 100% !important;border-radius:16rpx 16rpx 16rpx 16rpx;padding:32rpx 14rpx 32rpx 24rpx;margin:24rpx 0rpx 0rpx 0rpx;
    }
    .detailsPage_bodyfd1_0_c4{
        padding:0rpx 24rpx 0rpx 24rpx;
    }
    .detailsPage_titlefd1_0_c4{
        font-size:28rpx;color:rgba(102, 102, 102, 1);
    }
    .detailsPage_bodyItemfd1_0_c3_c0_c20_c1_c1{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsPage_bodyItemfd1_0_c3_c0_c20_c1_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsPage_bodyItemfd1_0_c3_c0_c20_c0_c0{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsPage_bodyItemfd1_0_c3_c0_c20{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .detailsPage_bodyItemfd1_0_c3_c0_c19_c1{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsPage_bodyItemfd1_0_c3_c0_c19_c0_c0{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsPage_bodyItemfd1_0_c3_c0_c19{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:0rpx 0rpx 32rpx 0rpx;margin:32rpx 0rpx 0rpx 0rpx;
    }
    .detailsPage_bodyItemfd1_0_c3_c0_c18_c1{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsPage_bodyItemfd1_0_c3_c0_c18_c0_c0{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsPage_bodyItemfd1_0_c3_c0_c18{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:0rpx 0rpx 32rpx 0rpx;margin:32rpx 0rpx 0rpx 0rpx;
    }
    .detailsPage_bodyItemfd1_0_c3_c0_c17_c1{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsPage_bodyItemfd1_0_c3_c0_c17_c0_c0{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsPage_bodyItemfd1_0_c3_c0_c17{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:0rpx 0rpx 32rpx 0rpx;margin:32rpx 0rpx 0rpx 0rpx;
    }
    .detailsPage_bodyItemfd1_0_c3_c0_c16_c1{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsPage_bodyItemfd1_0_c3_c0_c16_c0_c0{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsPage_bodyItemfd1_0_c3_c0_c16{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:0rpx 0rpx 32rpx 0rpx;margin:32rpx 0rpx 0rpx 0rpx;
    }
    .detailsPage_bodyItemfd1_0_c3_c0_c15_c1{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsPage_bodyItemfd1_0_c3_c0_c15_c0_c0{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsPage_bodyItemfd1_0_c3_c0_c15{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:0rpx 0rpx 32rpx 0rpx;margin:32rpx 0rpx 0rpx 0rpx;
    }
    .detailsPage_bodyItemfd1_0_c3_c0_c14_c1{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsPage_bodyItemfd1_0_c3_c0_c14_c0_c0{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsPage_bodyItemfd1_0_c3_c0_c14{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:0rpx 0rpx 32rpx 0rpx;margin:32rpx 0rpx 0rpx 0rpx;
    }
    .detailsPage_bodyItemfd1_0_c3_c0_c13_c1_c1{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsPage_bodyItemfd1_0_c3_c0_c13_c1_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsPage_bodyItemfd1_0_c3_c0_c13_c0_c0{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsPage_bodyItemfd1_0_c3_c0_c13{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:0rpx 0rpx 32rpx 0rpx;margin:32rpx 0rpx 0rpx 0rpx;
    }
    .detailsPage_bodyItemfd1_0_c3_c0_c12_c1_c1{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsPage_bodyItemfd1_0_c3_c0_c12_c1_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsPage_bodyItemfd1_0_c3_c0_c12_c0_c0{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsPage_bodyItemfd1_0_c3_c0_c12{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:0rpx 0rpx 32rpx 0rpx;margin:32rpx 0rpx 0rpx 0rpx;
    }
    .detailsPage_bodyItemfd1_0_c3_c0_c11_c1{
        color:rgba(102, 102, 102, 1);font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsPage_bodyItemfd1_0_c3_c0_c11_c0_c0{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsPage_bodyItemfd1_0_c3_c0_c11{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:0rpx 0rpx 32rpx 0rpx;margin:32rpx 0rpx 0rpx 0rpx;
    }
    .detailsPage_bodyItemfd1_0_c3_c0_c10_c1_c1{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsPage_bodyItemfd1_0_c3_c0_c10_c1_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsPage_bodyItemfd1_0_c3_c0_c10_c0_c0{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsPage_bodyItemfd1_0_c3_c0_c10{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:0rpx 0rpx 32rpx 0rpx;margin:32rpx 0rpx 0rpx 0rpx;
    }
    .detailsPage_bodyItemfd1_0_c3_c0_c9_c1_c1{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsPage_bodyItemfd1_0_c3_c0_c9_c1_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsPage_bodyItemfd1_0_c3_c0_c9_c0_c0{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsPage_bodyItemfd1_0_c3_c0_c9{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:0rpx 0rpx 32rpx 0rpx;margin:32rpx 0rpx 0rpx 0rpx;
    }
    .detailsPage_bodyItemfd1_0_c3_c0_c8_c1_c1{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsPage_bodyItemfd1_0_c3_c0_c8_c1_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsPage_bodyItemfd1_0_c3_c0_c8_c0_c0{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsPage_bodyItemfd1_0_c3_c0_c8{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:0rpx 0rpx 32rpx 0rpx;margin:32rpx 0rpx 0rpx 0rpx;
    }
    .detailsPage_bodyItemfd1_0_c3_c0_c7_c1{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsPage_bodyItemfd1_0_c3_c0_c7_c0_c0{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsPage_bodyItemfd1_0_c3_c0_c7{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:0rpx 0rpx 32rpx 0rpx;margin:32rpx 0rpx 0rpx 0rpx;
    }
    .detailsPage_bodyItemfd1_0_c3_c0_c6_c1{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsPage_bodyItemfd1_0_c3_c0_c6_c0_c0{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsPage_bodyItemfd1_0_c3_c0_c6{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:0rpx 0rpx 32rpx 0rpx;margin:32rpx 0rpx 0rpx 0rpx;
    }
    .detailsPage_bodyItemfd1_0_c3_c0_c5_c1{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsPage_bodyItemfd1_0_c3_c0_c5_c0_c0{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsPage_bodyItemfd1_0_c3_c0_c5{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:0rpx 0rpx 32rpx 0rpx;margin:32rpx 0rpx 0rpx 0rpx;
    }
    .detailsPage_bodyItemfd1_0_c3_c0_c4_c1{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsPage_bodyItemfd1_0_c3_c0_c4_c0_c0{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsPage_bodyItemfd1_0_c3_c0_c4{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:0rpx 0rpx 32rpx 0rpx;margin:32rpx 0rpx 0rpx 0rpx;
    }
    .detailsPage_bodyItemfd1_0_c3_c0_c3_c1{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 80rpx;text-align:right;
    }
    .detailsPage_bodyItemfd1_0_c3_c0_c3_c0_c1{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsPage_bodyItemfd1_0_c3_c0_c3_c0_c0{
        color:rgba(230, 53, 65, 1);font-size:28rpx;font-weight:400;line-height:30rpx;
    }
    .detailsPage_bodyItemfd1_0_c3_c0_c3{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:0rpx 0rpx 32rpx 0rpx;margin:32rpx 0rpx 0rpx 0rpx;
    }
    .detailsPage_bodyItemfd1_0_c3_c0_c2_c1{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 80rpx;
    }
    .detailsPage_bodyItemfd1_0_c3_c0_c2_c0_c1{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsPage_bodyItemfd1_0_c3_c0_c2_c0_c0{
        color:rgba(230, 53, 65, 1);font-size:28rpx;font-weight:400;line-height:30rpx;
    }
    .detailsPage_bodyItemfd1_0_c3_c0_c2{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:0rpx 0rpx 32rpx 0rpx;margin:32rpx 0rpx 0rpx 0rpx;
    }
    .detailsPage_bodyItemfd1_0_c3_c0_c1_c1{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 80rpx;
    }
    .detailsPage_bodyItemfd1_0_c3_c0_c1_c0_c1{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsPage_bodyItemfd1_0_c3_c0_c1_c0_c0{
        color:rgba(230, 53, 65, 1);font-size:28rpx;font-weight:400;line-height:30rpx;
    }
    .detailsPage_bodyItemfd1_0_c3_c0_c1{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:0rpx 0rpx 32rpx 0rpx;margin:32rpx 0rpx 0rpx 0rpx;
    }
    .detailsPage_bodyItemfd1_0_c3_c0_c0_c1{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsPage_bodyItemfd1_0_c3_c0_c0_c0_c1{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .detailsPage_bodyItemfd1_0_c3_c0_c0_c0_c0{
        color:rgba(230, 53, 65, 1);font-size:28rpx;font-weight:400;line-height:30rpx;
    }
    .detailsPage_bodyItemfd1_0_c3_c0_c0{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:0rpx 0rpx 32rpx 0rpx;
    }
    .detailsPage_bodyItemfd1_0_c3_c0{
        background:#fff;background-size: 100% !important;border-radius:16rpx 16rpx 16rpx 16rpx;padding:32rpx 24rpx 32rpx 24rpx;margin:20rpx 0rpx 0rpx 0rpx;
    }
    .detailsPage_bodyfd1_0_c3{
        padding:0rpx 24rpx 0rpx 24rpx;
    }
    .detailsPage_titlefd1_0_c3{
        margin:0rpx 56rpx 0rpx 32rpx;color:rgba(102, 102, 102, 1);font-size:28rpx;
    }
    .detailsPage_linefd1_0{
        background:url(/static/images/12.png) no-repeat;background-size: 100% !important;width:40rpx;height:6rpx;top:80rpx;background-size:100% auto !important;
    }
    .checkTitlefd1_0{
        font-weight:700 !important;font-size:32rpx !important;color:rgba(11, 24, 152, 1) !important;background-color:rgba(243, 246, 251, 1) !important;
    }
    ::v-deep .detailsPage_benbenTabsfd1_0{
        background:rgba(243, 246, 251, 1);background-size: 100% !important;width:750rpx;height:90rpx;white-space:nowrap;text-align:center;
    }
</style>