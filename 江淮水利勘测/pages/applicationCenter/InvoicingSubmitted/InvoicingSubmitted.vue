<template>
    <view class="page" :style="themeColor">
    <view class="flex flex-wrap align-center justify-between benben-position-layout flex InvoicingSubmitted_flex_0"    :style="{height:(88+StatusBarRpx)+'rpx',paddingTop:StatusBarRpx+'rpx'}">
            <view   class='flex flex-wrap align-center InvoicingSubmitted_fd0_0'  @tap.stop="handleJumpDiy" data-type="back" data-url="1"   >
        <text class='fu-iconfont2' >&#xe794;</text>
</view>
<text class='InvoicingSubmitted_fd0_1' >开票</text>
    <view   class='flex flex-wrap align-center InvoicingSubmitted_fd0_2'     >
        </view>

        </view>
<view :style="{height: (88+StatusBarRpx)+'rpx'}"  ></view>
<!---flex布局flex布局开始-->
 <view class="flex flex-direction flex-wrap align-stretch benben-flex-layout InvoicingSubmitted_flex_1"   >
            <view   class='flex flex-wrap align-center InvoicingSubmitted_fd1_0'     >
        <image class='InvoicingSubmitted_fd1_0_c0' mode="aspectFit"  :src='STATIC_URL+"37.png"'></image>
<input class='flex-sub InvoicingSubmitted_fd1_0_c1'  type="text" placeholder="搜索" confirm-type="done" :maxlength="-1" placeholder-style="color:#999;font-size:28rpx"  v-model="fd1_0_c1" />
</view>
</view>
<!---flex布局flex布局结束-->
<!---flex布局flex布局开始-->
 <view class="flex benben-flex-layout flex-wrap align-center"   >
        <view>
        <benben-flex-tabs class-name='InvoicingSubmitted_benbenTabsfd2_0' v-model="cut" ref="benben_tabsfd2_0" select-mark="benben_tabsfd2_0" key="benben_tabsfd2_0" :open-title-type='false' :open-sticky='true' :top='88' :is-show-content='true' :scrollspy='false'  :tabs-info.sync="tabsInfofd2_0"  >
            
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
                :class="{ 'checkTitlefd2_0': cut == '1', 'flex flex-wrap align-center InvoicingSubmitted_titlefd2_0_c3': true }"
                @tap="cut = '1'"
                :id="`benben_tabsfd2_0-title-item-${'1'}`"
                
              >
                
<text  >待提交</text>

              </view>            <view 
                :class="{ 'checkTitlefd2_0': cut == '2', 'flex flex-wrap align-center InvoicingSubmitted_titlefd2_0_c4': true }"
                @tap="cut = '2'"
                :id="`benben_tabsfd2_0-title-item-${'2'}`"
                
              >
                
<text  >待开票</text>

              </view>            <view 
                :class="{ 'checkTitlefd2_0': cut == '3', 'flex flex-wrap align-center InvoicingSubmitted_titlefd2_0_c5': true }"
                @tap="cut = '3'"
                :id="`benben_tabsfd2_0-title-item-${'3'}`"
                
              >
                
<text  >已开票</text>

              </view>
            </view>
            <view :style="{ left: tabsInfofd2_0.lineleft, maxWidth: tabsInfofd2_0.lineWidth }" id="benben_tabsfd2_0-line" class="benben-tabs-line flex benben-flex-tabs-line InvoicingSubmitted_linefd2_0"></view>
          </view>
        </scroll-view>
            
        </benben-flex-tabs>
                <view>
                        <view class="benben_tabsfd2_0-body-item flex flex-direction flex-wrap align-stretch InvoicingSubmitted_bodyfd2_0_c3" v-if=" cut == '1' " :id="`benben_tabsfd2_0-body-item-${'1'}`">
    <view   class='flex flex-direction flex-wrap align-stretch InvoicingSubmitted_bodyItemfd2_0_c3_c0'  @tap.stop="handleJumpDiy" data-type="navigateTo" :data-url="`/pages/applicationCenter/submittedBilling/submittedBilling?type=1`"   >
            <view   class='flex flex-direction flex-wrap align-stretch InvoicingSubmitted_bodyItemfd2_0_c3_c0_c0'     >
            <view   class='flex flex-wrap align-center justify-between InvoicingSubmitted_bodyItemfd2_0_c3_c0_c0_c0'     >
            <view   class='flex flex-wrap align-center'     >
        <text class='InvoicingSubmitted_bodyItemfd2_0_c3_c0_c0_c0_c0_c0' >创建时间：</text>
<text class='InvoicingSubmitted_bodyItemfd2_0_c3_c0_c0_c0_c0_c1' >2022-08-08  10:10</text>
</view>
    <view   class='flex flex-wrap align-center'     >
        <text class='InvoicingSubmitted_bodyItemfd2_0_c3_c0_c0_c0_c1_c0' >待提交</text>
</view>
</view>
    <view   class='flex flex-wrap align-center InvoicingSubmitted_bodyItemfd2_0_c3_c0_c0_c1'     >
        <text class='InvoicingSubmitted_bodyItemfd2_0_c3_c0_c0_c1_c0' >开票金额</text>
<text class='flex-sub InvoicingSubmitted_bodyItemfd2_0_c3_c0_c0_c1_c1' >2000元</text>
</view>
    <view   class='flex flex-wrap align-center InvoicingSubmitted_bodyItemfd2_0_c3_c0_c0_c2'     >
        <text class='InvoicingSubmitted_bodyItemfd2_0_c3_c0_c0_c2_c0' >项目编号</text>
<text class='flex-sub InvoicingSubmitted_bodyItemfd2_0_c3_c0_c0_c2_c1' >2022-N4-001-J</text>
</view>
    <view   class='flex flex-wrap align-start InvoicingSubmitted_bodyItemfd2_0_c3_c0_c0_c3'     >
        <text class='InvoicingSubmitted_bodyItemfd2_0_c3_c0_c0_c3_c0' >项目名称</text>
<text class='flex-sub InvoicingSubmitted_bodyItemfd2_0_c3_c0_c0_c3_c1' >关于二阳县光电产业园基础设施建设项目-园区基础设施改扩建工程</text>
</view>
</view>
    <view   class='flex flex-wrap align-center justify-end InvoicingSubmitted_bodyItemfd2_0_c3_c0_c1'     >
        <button class='InvoicingSubmitted_bodyItemfd2_0_c3_c0_c1_c0' >提交</button>
</view>
</view>
</view>            <view class="benben_tabsfd2_0-body-item flex flex-direction flex-wrap align-stretch InvoicingSubmitted_bodyfd2_0_c4" v-if=" cut == '2' " :id="`benben_tabsfd2_0-body-item-${'2'}`">
    <view   class='flex flex-direction flex-wrap align-stretch InvoicingSubmitted_bodyItemfd2_0_c4_c0'  @tap.stop="handleJumpDiy" data-type="navigateTo" :data-url="`/pages/applicationCenter/submittedBilling/submittedBilling?type=2`"   >
            <view   class='flex flex-wrap align-center justify-between InvoicingSubmitted_bodyItemfd2_0_c4_c0_c0'     >
            <view   class='flex flex-wrap align-center'     >
        <text class='InvoicingSubmitted_bodyItemfd2_0_c4_c0_c0_c0_c0' >创建时间：</text>
<text class='InvoicingSubmitted_bodyItemfd2_0_c4_c0_c0_c0_c1' >2022-08-08  10:10</text>
</view>
    <view   class='flex flex-wrap align-center'     >
        <text class='InvoicingSubmitted_bodyItemfd2_0_c4_c0_c0_c1_c0' >待开票</text>
</view>
</view>
    <view   class='flex flex-wrap align-center InvoicingSubmitted_bodyItemfd2_0_c4_c0_c1'     >
        <text class='InvoicingSubmitted_bodyItemfd2_0_c4_c0_c1_c0' >开票金额</text>
<text class='flex-sub InvoicingSubmitted_bodyItemfd2_0_c4_c0_c1_c1' >2000元</text>
</view>
    <view   class='flex flex-wrap align-center InvoicingSubmitted_bodyItemfd2_0_c4_c0_c2'     >
        <text class='InvoicingSubmitted_bodyItemfd2_0_c4_c0_c2_c0' >项目编号</text>
<text class='flex-sub InvoicingSubmitted_bodyItemfd2_0_c4_c0_c2_c1' >2022-N4-001-J</text>
</view>
    <view   class='flex flex-wrap align-start InvoicingSubmitted_bodyItemfd2_0_c4_c0_c3'     >
        <text class='InvoicingSubmitted_bodyItemfd2_0_c4_c0_c3_c0' >项目名称</text>
<text class='flex-sub InvoicingSubmitted_bodyItemfd2_0_c4_c0_c3_c1' >关于二阳县光电产业园基础设施建设项目-园区基础设施改扩建工程</text>
</view>
    <view   class='flex flex-wrap align-center InvoicingSubmitted_bodyItemfd2_0_c4_c0_c4'     >
        <text class='InvoicingSubmitted_bodyItemfd2_0_c4_c0_c4_c0' >申请时间</text>
<text class='flex-sub InvoicingSubmitted_bodyItemfd2_0_c4_c0_c4_c1' >2022-08-08  10:10</text>
</view>
</view>

    <view   class='flex flex-direction flex-wrap align-stretch InvoicingSubmitted_bodyItemfd2_0_c4_c1'  @tap.stop="handleJumpDiy" data-type="navigateTo" :data-url="`/pages/applicationCenter/submittedBilling/submittedBilling?type=2`"   >
            <view   class='flex flex-direction flex-wrap align-stretch InvoicingSubmitted_bodyItemfd2_0_c4_c1_c0'     >
            <view   class='flex flex-wrap align-center justify-between InvoicingSubmitted_bodyItemfd2_0_c4_c1_c0_c0'     >
            <view   class='flex flex-wrap align-center'     >
        <text class='InvoicingSubmitted_bodyItemfd2_0_c4_c1_c0_c0_c0_c0' >创建时间：</text>
<text class='InvoicingSubmitted_bodyItemfd2_0_c4_c1_c0_c0_c0_c1' >2022-08-08  10:10</text>
</view>
    <view   class='flex flex-wrap align-center'     >
        <text class='InvoicingSubmitted_bodyItemfd2_0_c4_c1_c0_c0_c1_c0' >待开票</text>
</view>
</view>
    <view   class='flex flex-wrap align-center InvoicingSubmitted_bodyItemfd2_0_c4_c1_c0_c1'     >
        <text class='InvoicingSubmitted_bodyItemfd2_0_c4_c1_c0_c1_c0' >开票金额</text>
<text class='flex-sub InvoicingSubmitted_bodyItemfd2_0_c4_c1_c0_c1_c1' >2000元</text>
</view>
    <view   class='flex flex-wrap align-center InvoicingSubmitted_bodyItemfd2_0_c4_c1_c0_c2'     >
        <text class='InvoicingSubmitted_bodyItemfd2_0_c4_c1_c0_c2_c0' >项目编号</text>
<text class='flex-sub InvoicingSubmitted_bodyItemfd2_0_c4_c1_c0_c2_c1' >2022-N4-001-J</text>
</view>
    <view   class='flex flex-wrap align-start InvoicingSubmitted_bodyItemfd2_0_c4_c1_c0_c3'     >
        <text class='InvoicingSubmitted_bodyItemfd2_0_c4_c1_c0_c3_c0' >项目名称</text>
<text class='flex-sub InvoicingSubmitted_bodyItemfd2_0_c4_c1_c0_c3_c1' >关于二阳县光电产业园基础设施建设项目-园区基础设施改扩建工程</text>
</view>
    <view   class='flex flex-wrap align-center InvoicingSubmitted_bodyItemfd2_0_c4_c1_c0_c4'     >
        <text class='InvoicingSubmitted_bodyItemfd2_0_c4_c1_c0_c4_c0' >申请时间</text>
<text class='flex-sub InvoicingSubmitted_bodyItemfd2_0_c4_c1_c0_c4_c1' >2022-08-08  10:10</text>
</view>
</view>
    <view   class='flex flex-wrap align-center justify-end InvoicingSubmitted_bodyItemfd2_0_c4_c1_c1'     >
        <button class='InvoicingSubmitted_bodyItemfd2_0_c4_c1_c1_c0' @tap.stop="popupShow1666339570563=true"  >开票完成</button>
</view>
</view>
</view>            <view class="benben_tabsfd2_0-body-item flex flex-direction flex-wrap align-stretch InvoicingSubmitted_bodyfd2_0_c5" v-if=" cut == '3' " :id="`benben_tabsfd2_0-body-item-${'3'}`">
    <view   class='flex flex-direction flex-wrap align-stretch InvoicingSubmitted_bodyItemfd2_0_c5_c0'  @tap.stop="handleJumpDiy" data-type="navigateTo" :data-url="`/pages/applicationCenter/submittedBilling/submittedBilling?type=3`"   >
            <view   class='flex flex-wrap align-center justify-between InvoicingSubmitted_bodyItemfd2_0_c5_c0_c0'     >
            <view   class='flex flex-wrap align-center'     >
        <text class='InvoicingSubmitted_bodyItemfd2_0_c5_c0_c0_c0_c0' >创建时间：</text>
<text class='InvoicingSubmitted_bodyItemfd2_0_c5_c0_c0_c0_c1' >2022-08-08  10:10</text>
</view>
    <view   class='flex flex-wrap align-center'     >
        <text class='InvoicingSubmitted_bodyItemfd2_0_c5_c0_c0_c1_c0' >已开票</text>
</view>
</view>
    <view   class='flex flex-wrap align-center InvoicingSubmitted_bodyItemfd2_0_c5_c0_c1'     >
        <text class='InvoicingSubmitted_bodyItemfd2_0_c5_c0_c1_c0' >开票金额</text>
<text class='flex-sub InvoicingSubmitted_bodyItemfd2_0_c5_c0_c1_c1' >2000元</text>
</view>
    <view   class='flex flex-wrap align-center InvoicingSubmitted_bodyItemfd2_0_c5_c0_c2'     >
        <text class='InvoicingSubmitted_bodyItemfd2_0_c5_c0_c2_c0' >项目编号</text>
<text class='flex-sub InvoicingSubmitted_bodyItemfd2_0_c5_c0_c2_c1' >2022-N4-001-J</text>
</view>
    <view   class='flex flex-wrap align-start InvoicingSubmitted_bodyItemfd2_0_c5_c0_c3'     >
        <text class='InvoicingSubmitted_bodyItemfd2_0_c5_c0_c3_c0' >项目名称</text>
<text class='flex-sub InvoicingSubmitted_bodyItemfd2_0_c5_c0_c3_c1' >关于二阳县光电产业园基础设施建设项目-园区基础设施改扩建工程</text>
</view>
    <view   class='flex flex-wrap align-center InvoicingSubmitted_bodyItemfd2_0_c5_c0_c4'     >
        <text class='InvoicingSubmitted_bodyItemfd2_0_c5_c0_c4_c0' >申请时间</text>
<text class='flex-sub InvoicingSubmitted_bodyItemfd2_0_c5_c0_c4_c1' >2022-08-08  10:10</text>
</view>
</view>
</view>
        </view>
</view>
</view>
<!---flex布局flex布局结束-->
    <view class="flex benben-position-layout flex flex-wrap align-center InvoicingSubmitted_flex_3"    :style="{top:(800+StatusBarRpx)+'rpx'}">
        <image class='InvoicingSubmitted_fd3_0' :src='STATIC_URL+"40.png"' @tap.stop="handleJumpDiy" data-type="navigateTo" :data-url="`/pages/applicationCenter/invoice/invoice`" ></image>

        </view>
<view :style="{height: '88rpx'}"  ></view>
<benben-popup v-model="popupShow1666339570563" :mask="true"  mode='center'>
    <!---开票flex布局开始-->
 <view class="flex flex-direction flex-wrap align-stretch benben-flex-layout InvoicingSubmitted_flex_4"   >
            <view   class='flex flex-direction flex-wrap align-stretch InvoicingSubmitted_fd4_0'     >
            <view   class='flex flex-wrap align-center justify-center'     >
        <text class='InvoicingSubmitted_fd4_0_c0_c0' >开票完成</text>
<image class='InvoicingSubmitted_fd4_0_c0_c1' :src='STATIC_URL+"46.png"' @tap.stop="popupShow1666339570563=false" ></image>
</view>
<text class='InvoicingSubmitted_fd4_0_c1' >实际开票金额</text>
    <view   class='flex flex-wrap align-center InvoicingSubmitted_fd4_0_c2'     >
        <input class='flex-sub InvoicingSubmitted_fd4_0_c2_c0'  type="text" placeholder="请输入实际开票金额" confirm-type="done" :maxlength="-1" placeholder-style="color:#999;font-size:28rpx"  v-model="fd4_0_c2_c0" />
</view>
    <view   class='flex flex-wrap align-center justify-center'     >
        <button class='InvoicingSubmitted_fd4_0_c3_c0' >确认</button>
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
			return {"fd4_0_c2_c0":"","popupShow1666339570563":false,"tabsInfofd2_0":{ lineleft: '', lineWidth: '', moveX: 0, scrollX: 0, PageScrollX: 0 },"fd1_0_c1":"","cut":"1"};
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
    .InvoicingSubmitted_flex_0{
        background:#fff;background-size: 100% !important;width:750rpx;height:88rpx;overflow:hidden;z-index:10;top:0rpx;background-size:100% auto !important;
    }
    .InvoicingSubmitted_fd0_2{
        width:100rpx;height:88rpx;margin:0rpx 32rpx 0rpx 0rpx;
    }
    .InvoicingSubmitted_fd0_1{
        color:#000000;font-size:36rpx;font-weight:500;line-height:50rpx;
    }
    .InvoicingSubmitted_fd0_0{
        width:100rpx;height:88rpx;margin:0rpx 0rpx 0rpx 32rpx;
    }
    .InvoicingSubmitted_flex_1{
        padding:0rpx 32rpx 0rpx 32rpx;margin:24rpx 0rpx 0rpx 0rpx;
    }
    .InvoicingSubmitted_fd1_0_c1{
        margin:0rpx 0rpx 0rpx 14rpx;color:#333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .InvoicingSubmitted_fd1_0_c0{
        width:40rpx;height:40rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .InvoicingSubmitted_fd1_0{
        background:#fff;background-size: 100% !important;border-radius:34rpx 34rpx 34rpx 34rpx;padding:16rpx 24rpx 16rpx 24rpx;
    }
    .InvoicingSubmitted_bodyItemfd2_0_c5_c0_c4_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .InvoicingSubmitted_bodyItemfd2_0_c5_c0_c4_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .InvoicingSubmitted_bodyItemfd2_0_c5_c0_c4{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .InvoicingSubmitted_bodyItemfd2_0_c5_c0_c3_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .InvoicingSubmitted_bodyItemfd2_0_c5_c0_c3_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .InvoicingSubmitted_bodyItemfd2_0_c5_c0_c3{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .InvoicingSubmitted_bodyItemfd2_0_c5_c0_c2_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .InvoicingSubmitted_bodyItemfd2_0_c5_c0_c2_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .InvoicingSubmitted_bodyItemfd2_0_c5_c0_c2{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .InvoicingSubmitted_bodyItemfd2_0_c5_c0_c1_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .InvoicingSubmitted_bodyItemfd2_0_c5_c0_c1_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .InvoicingSubmitted_bodyItemfd2_0_c5_c0_c1{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .InvoicingSubmitted_bodyItemfd2_0_c5_c0_c0_c1_c0{
        color:#0B1898;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .InvoicingSubmitted_bodyItemfd2_0_c5_c0_c0_c0_c1{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .InvoicingSubmitted_bodyItemfd2_0_c5_c0_c0_c0_c0{
        color:rgba(102, 102, 102, 1);font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .InvoicingSubmitted_bodyItemfd2_0_c5_c0_c0{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:0rpx 0rpx 20rpx 0rpx;
    }
    .InvoicingSubmitted_bodyItemfd2_0_c5_c0{
        background:#fff;background-size: 100% !important;border-radius:16rpx 16rpx 16rpx 16rpx;padding:32rpx 24rpx 32rpx 24rpx;margin:20rpx 0rpx 0rpx 0rpx;
    }
    .InvoicingSubmitted_bodyfd2_0_c5{
        padding:0rpx 24rpx 0rpx 24rpx;
    }
    .InvoicingSubmitted_titlefd2_0_c5{
        color:rgba(102, 102, 102, 1);font-size:28rpx;
    }
    .InvoicingSubmitted_bodyItemfd2_0_c4_c1_c1_c0{
        background:rgba(11, 24, 152, 1);background-size: 100% !important;border-radius:28rpx 28rpx 28rpx 28rpx;font-size:24rpx;color:#fff;width:160rpx;height:56rpx;line-height:56rpx;
    }
    .InvoicingSubmitted_bodyItemfd2_0_c4_c1_c1{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .InvoicingSubmitted_bodyItemfd2_0_c4_c1_c0_c4_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .InvoicingSubmitted_bodyItemfd2_0_c4_c1_c0_c4_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .InvoicingSubmitted_bodyItemfd2_0_c4_c1_c0_c4{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .InvoicingSubmitted_bodyItemfd2_0_c4_c1_c0_c3_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .InvoicingSubmitted_bodyItemfd2_0_c4_c1_c0_c3_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .InvoicingSubmitted_bodyItemfd2_0_c4_c1_c0_c3{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .InvoicingSubmitted_bodyItemfd2_0_c4_c1_c0_c2_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .InvoicingSubmitted_bodyItemfd2_0_c4_c1_c0_c2_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .InvoicingSubmitted_bodyItemfd2_0_c4_c1_c0_c2{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .InvoicingSubmitted_bodyItemfd2_0_c4_c1_c0_c1_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .InvoicingSubmitted_bodyItemfd2_0_c4_c1_c0_c1_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .InvoicingSubmitted_bodyItemfd2_0_c4_c1_c0_c1{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .InvoicingSubmitted_bodyItemfd2_0_c4_c1_c0_c0_c1_c0{
        color:#0B1898;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .InvoicingSubmitted_bodyItemfd2_0_c4_c1_c0_c0_c0_c1{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .InvoicingSubmitted_bodyItemfd2_0_c4_c1_c0_c0_c0_c0{
        color:rgba(102, 102, 102, 1);font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .InvoicingSubmitted_bodyItemfd2_0_c4_c1_c0_c0{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:0rpx 0rpx 20rpx 0rpx;
    }
    .InvoicingSubmitted_bodyItemfd2_0_c4_c1_c0{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:0rpx 0rpx 32rpx 0rpx;
    }
    .InvoicingSubmitted_bodyItemfd2_0_c4_c1{
        background:#fff;background-size: 100% !important;border-radius:16rpx 16rpx 16rpx 16rpx;padding:32rpx 24rpx 32rpx 24rpx;margin:20rpx 0rpx 0rpx 0rpx;
    }
    .InvoicingSubmitted_bodyItemfd2_0_c4_c0_c4_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .InvoicingSubmitted_bodyItemfd2_0_c4_c0_c4_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .InvoicingSubmitted_bodyItemfd2_0_c4_c0_c4{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .InvoicingSubmitted_bodyItemfd2_0_c4_c0_c3_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .InvoicingSubmitted_bodyItemfd2_0_c4_c0_c3_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .InvoicingSubmitted_bodyItemfd2_0_c4_c0_c3{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .InvoicingSubmitted_bodyItemfd2_0_c4_c0_c2_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .InvoicingSubmitted_bodyItemfd2_0_c4_c0_c2_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .InvoicingSubmitted_bodyItemfd2_0_c4_c0_c2{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .InvoicingSubmitted_bodyItemfd2_0_c4_c0_c1_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .InvoicingSubmitted_bodyItemfd2_0_c4_c0_c1_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .InvoicingSubmitted_bodyItemfd2_0_c4_c0_c1{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .InvoicingSubmitted_bodyItemfd2_0_c4_c0_c0_c1_c0{
        color:#0B1898;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .InvoicingSubmitted_bodyItemfd2_0_c4_c0_c0_c0_c1{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .InvoicingSubmitted_bodyItemfd2_0_c4_c0_c0_c0_c0{
        color:rgba(102, 102, 102, 1);font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .InvoicingSubmitted_bodyItemfd2_0_c4_c0_c0{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:0rpx 0rpx 20rpx 0rpx;
    }
    .InvoicingSubmitted_bodyItemfd2_0_c4_c0{
        background:#fff;background-size: 100% !important;border-radius:16rpx 16rpx 16rpx 16rpx;padding:32rpx 24rpx 32rpx 24rpx;margin:20rpx 0rpx 0rpx 0rpx;
    }
    .InvoicingSubmitted_bodyfd2_0_c4{
        padding:0rpx 24rpx 0rpx 24rpx;
    }
    .InvoicingSubmitted_titlefd2_0_c4{
        color:rgba(102, 102, 102, 1);font-size:28rpx;
    }
    .InvoicingSubmitted_bodyItemfd2_0_c3_c0_c1_c0{
        background:rgba(11, 24, 152, 1);background-size: 100% !important;border-radius:28rpx 28rpx 28rpx 28rpx;font-size:24rpx;color:#fff;width:160rpx;height:56rpx;line-height:56rpx;
    }
    .InvoicingSubmitted_bodyItemfd2_0_c3_c0_c1{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .InvoicingSubmitted_bodyItemfd2_0_c3_c0_c0_c3_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .InvoicingSubmitted_bodyItemfd2_0_c3_c0_c0_c3_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .InvoicingSubmitted_bodyItemfd2_0_c3_c0_c0_c3{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .InvoicingSubmitted_bodyItemfd2_0_c3_c0_c0_c2_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .InvoicingSubmitted_bodyItemfd2_0_c3_c0_c0_c2_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .InvoicingSubmitted_bodyItemfd2_0_c3_c0_c0_c2{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .InvoicingSubmitted_bodyItemfd2_0_c3_c0_c0_c1_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .InvoicingSubmitted_bodyItemfd2_0_c3_c0_c0_c1_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .InvoicingSubmitted_bodyItemfd2_0_c3_c0_c0_c1{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .InvoicingSubmitted_bodyItemfd2_0_c3_c0_c0_c0_c1_c0{
        color:#0B1898;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .InvoicingSubmitted_bodyItemfd2_0_c3_c0_c0_c0_c0_c1{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .InvoicingSubmitted_bodyItemfd2_0_c3_c0_c0_c0_c0_c0{
        color:rgba(102, 102, 102, 1);font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .InvoicingSubmitted_bodyItemfd2_0_c3_c0_c0_c0{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:0rpx 0rpx 20rpx 0rpx;
    }
    .InvoicingSubmitted_bodyItemfd2_0_c3_c0_c0{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:0rpx 0rpx 32rpx 0rpx;
    }
    .InvoicingSubmitted_bodyItemfd2_0_c3_c0{
        background:#fff;background-size: 100% !important;border-radius:16rpx 16rpx 16rpx 16rpx;padding:32rpx 24rpx 32rpx 24rpx;margin:20rpx 0rpx 0rpx 0rpx;
    }
    .InvoicingSubmitted_bodyfd2_0_c3{
        padding:0rpx 24rpx 0rpx 24rpx;
    }
    .InvoicingSubmitted_titlefd2_0_c3{
        color:rgba(102, 102, 102, 1);font-size:28rpx;
    }
    .InvoicingSubmitted_linefd2_0{
        background:url(/static/images/12.png) no-repeat;background-size: 100% !important;width:40rpx;height:6rpx;top:80rpx;background-size:100% auto !important;
    }
    .checkTitlefd2_0{
        font-weight:700 !important;font-size:32rpx !important;color:rgba(11, 24, 152, 1) !important;background-color:rgba(243, 246, 251, 1) !important;
    }
    ::v-deep .InvoicingSubmitted_benbenTabsfd2_0{
        width:750rpx;height:90rpx;white-space:nowrap;text-align:center;
    }
    .InvoicingSubmitted_flex_3{
        width:88rpx;height:88rpx;overflow:hidden;z-index:10;right:24rpx;top:800rpx;
    }
    .InvoicingSubmitted_fd3_0{
        width:88rpx;height:88rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .InvoicingSubmitted_flex_4{
        padding:0rpx 75rpx 0rpx 75rpx;
    }
    .InvoicingSubmitted_fd4_0_c3_c0{
        background:rgba(11, 24, 152, 1);background-size: 100% !important;border-radius:39rpx 39rpx 39rpx 39rpx;font-size:32rpx;color:#fff;width:200rpx;height:68rpx;line-height:68rpx;
    }
    .InvoicingSubmitted_fd4_0_c2_c0{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .InvoicingSubmitted_fd4_0_c2{
        border:1px solid #BFBFBF;background:rgba(255, 255, 255, 1);background-size: 100% !important;border-radius:18rpx 18rpx 18rpx 18rpx;padding:24rpx 24rpx 24rpx 24rpx;margin:24rpx 0rpx 64rpx 0rpx;
    }
    .InvoicingSubmitted_fd4_0_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:50rpx 0rpx 0rpx 0rpx;
    }
    .InvoicingSubmitted_fd4_0_c0_c1{
        width:40rpx;height:40rpx;border-radius:0rpx 0rpx 0rpx 0rpx;margin:0rpx 0rpx 0rpx auto;
    }
    .InvoicingSubmitted_fd4_0_c0_c0{
        margin:0rpx 0rpx 0rpx auto;color:#1A1A1A;font-size:32rpx;font-weight:700;line-height:45rpx;
    }
    .InvoicingSubmitted_fd4_0{
        background:rgba(255, 255, 255, 1);background-size: 100% !important;border-radius:18rpx 18rpx 18rpx 18rpx;padding:35rpx 30rpx 44rpx 30rpx;width:600rpx;
    }
</style>