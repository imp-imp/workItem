<template>
    <view class="page" :style="themeColor">
    <view class="flex flex-wrap align-center justify-between benben-position-layout flex Journal_flex_0"    :style="{height:(88+StatusBarRpx)+'rpx',paddingTop:StatusBarRpx+'rpx'}">
            <view   class='flex flex-wrap align-center Journal_fd0_0'  @tap.stop="handleJumpDiy" data-type="back" data-url="1"   >
        <text class='fu-iconfont2' >&#xe794;</text>
</view>
<text class='Journal_fd0_1' >日志中心</text>
    <view   class='flex flex-wrap align-center Journal_fd0_2'     >
        </view>

        </view>
<view :style="{height: (88+StatusBarRpx)+'rpx'}"  ></view>
<!---flex布局flex布局开始-->
 <view class="flex flex-direction flex-wrap align-stretch benben-flex-layout Journal_flex_1"   >
            <view   class='flex flex-wrap align-center Journal_fd1_0'     >
        <image class='Journal_fd1_0_c0' mode="aspectFit"  :src='STATIC_URL+"37.png"'></image>
<input class='flex-sub Journal_fd1_0_c1'  type="text" placeholder="搜索" confirm-type="done" :maxlength="-1" placeholder-style="color:#999;font-size:28rpx"  v-model="fd1_0_c1" />
</view>
</view>
<!---flex布局flex布局结束-->
<!---flex布局flex布局开始-->
 <view class="flex flex-direction flex-wrap align-stretch benben-flex-layout Journal_flex_2"   >
            <view   class='flex flex-direction flex-wrap align-stretch Journal_fd2_0'     >
        <view>
        <benben-flex-tabs class-name='Journal_benbenTabsfd2_0_c0' v-model="tabs" ref="benben_tabsfd2_0_c0" select-mark="benben_tabsfd2_0_c0" key="benben_tabsfd2_0_c0" :open-title-type='false' :open-sticky='true' :top='0' :is-show-content='true' :scrollspy='false'  :tabs-info.sync="tabsInfofd2_0_c0"  >
            
                    <scroll-view
          @scroll="tabsInfofd2_0_c0.scrollX = $event.detail.scrollLeft"
          id="benben_tabsfd2_0_c0"
          class="benben-tabs"
          style="width:750rpx"
          :scroll-x="true"
          :scroll-left.sync="tabsInfofd2_0_c0.moveX"
          scroll-with-animation="all .3s ease"
        >
          <view class="benben-tabs-content" id="benben_tabsfd2_0_c0-content">
            <view id="benben_tabsfd2_0_c0-title" class="benben-tabs-title flex align-center flex ">
                        <view 
                :class="{ 'checkTitlefd2_0_c0': tabs == '1', 'flex flex-wrap align-center Journal_titlefd2_0_c0_c3': true }"
                @tap="tabs = '1'"
                :id="`benben_tabsfd2_0_c0-title-item-${'1'}`"
                
              >
                
<text  >我提交的</text>

              </view>            <view 
                :class="{ 'checkTitlefd2_0_c0': tabs == '2', 'flex flex-wrap align-center Journal_titlefd2_0_c0_c4': true }"
                @tap="tabs = '2'"
                :id="`benben_tabsfd2_0_c0-title-item-${'2'}`"
                
              >
                
<text  >员工提交的</text>

              </view>
            </view>
            <view :style="{ left: tabsInfofd2_0_c0.lineleft, maxWidth: tabsInfofd2_0_c0.lineWidth }" id="benben_tabsfd2_0_c0-line" class="benben-tabs-line flex benben-flex-tabs-line Journal_linefd2_0_c0"></view>
          </view>
        </scroll-view>
            
    <view   class='flex flex-wrap align-center Journal_rightfd2_0_c0_c0'     >
        <text class='Journal_rightfd2_0_c0_c0_c0' >全部</text>
<image class='Journal_rightfd2_0_c0_c0_c1' mode="aspectFit"  :src='STATIC_URL+"59.png"'></image>
</view>

        </benben-flex-tabs>
                <view>
                        <view class="benben_tabsfd2_0_c0-body-item flex flex-direction flex-wrap align-stretch Journal_bodyfd2_0_c0_c3" v-if=" tabs == '1' " :id="`benben_tabsfd2_0_c0-body-item-${'1'}`">
    <view   class='flex flex-wrap align-center'     >
        <image class='Journal_bodyItemfd2_0_c0_c3_c0_c0' mode="aspectFit"  :src='STATIC_URL+"32.png"'></image>
    <view   class='flex flex-direction flex-wrap align-stretch flex-sub Journal_bodyItemfd2_0_c0_c3_c0_c1'     >
        <text class='Journal_bodyItemfd2_0_c0_c3_c0_c1_c0' >设计部-设计经理-陈沉沉</text>
<text class='Journal_bodyItemfd2_0_c0_c3_c0_c1_c1' >2022-08-08  15:10:12</text>
</view>
    <view   class='flex flex-wrap align-center Journal_bodyItemfd2_0_c0_c3_c0_c2'     >
        <text class='Journal_bodyItemfd2_0_c0_c3_c0_c2_c0'   v-if= "cut!='3'"  >进度日志</text><text class='Journal_bodyItemfd2_0_c0_c3_c0_c2_c0_1'   v-if= "cut=='3'"  >问题日志</text>
</view>
</view>

<text class='Journal_bodyItemfd2_0_c0_c3_c1' >您的“山乡美丽乡村建设项目”合同可以回二期款，请及时处理，合同可以回二期款，请及时处理合同可以回二期款，请及时处理合同可以回二期款，请及时处理合同可以回二期款，请及时处理</text>

    <view   class='flex flex-wrap align-center Journal_bodyItemfd2_0_c0_c3_c2'     >
        <text class='Journal_bodyItemfd2_0_c0_c3_c2_c0' >已读</text>
    <view   class='flex flex-direction flex-wrap align-center Journal_bodyItemfd2_0_c0_c3_c2_c1'   v-if= "cut!='2'"  >
        <image class='Journal_bodyItemfd2_0_c0_c3_c2_c1_c0' mode="aspectFit"  :src='STATIC_URL+"32.png"'></image>
<text class='Journal_bodyItemfd2_0_c0_c3_c2_c1_c1' >张总</text>
</view>
<text class='Journal_bodyItemfd2_0_c0_c3_c2_c2'   v-if= "cut=='2'"  >无</text>
</view>
</view>            <view class="benben_tabsfd2_0_c0-body-item flex flex-direction flex-wrap align-stretch" v-if=" tabs == '2' " :id="`benben_tabsfd2_0_c0-body-item-${'2'}`"></view>
        </view>
</view>
</view>
</view>
<!---flex布局flex布局结束-->
    <view class="flex benben-position-layout flex flex-wrap align-center Journal_flex_3"    :style="{top:(700+StatusBarRpx)+'rpx'}">
        <image class='Journal_fd3_0' :src='STATIC_URL+"57.png"' @tap.stop="handleJumpDiy" data-type="navigateTo" :data-url="`/pages/applicationCenter/writeLog/writeLog`" ></image>

        </view>
<view :style="{height: '118rpx'}"  ></view>
    
    </view>
</template>
<script>
    
    export default {
        components:{},
        
        data(){
			return {"tabsInfofd2_0_c0":{ lineleft: '', lineWidth: '', moveX: 0, scrollX: 0, PageScrollX: 0 },"fd1_0_c1":"","cut":"3","tabs":"1"};
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
    .Journal_flex_0{
        background:#fff;background-size: 100% !important;width:750rpx;height:88rpx;overflow:hidden;z-index:10;top:0rpx;background-size:100% auto !important;
    }
    .Journal_fd0_2{
        width:100rpx;height:88rpx;margin:0rpx 32rpx 0rpx 0rpx;
    }
    .Journal_fd0_1{
        color:#000000;font-size:36rpx;font-weight:500;line-height:50rpx;
    }
    .Journal_fd0_0{
        width:100rpx;height:88rpx;margin:0rpx 0rpx 0rpx 32rpx;
    }
    .Journal_flex_1{
        padding:0rpx 32rpx 0rpx 32rpx;margin:24rpx 0rpx 0rpx 0rpx;
    }
    .Journal_fd1_0_c1{
        margin:0rpx 0rpx 0rpx 14rpx;color:#333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .Journal_fd1_0_c0{
        width:40rpx;height:40rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .Journal_fd1_0{
        background:#fff;background-size: 100% !important;border-radius:34rpx 34rpx 34rpx 34rpx;padding:16rpx 24rpx 16rpx 24rpx;
    }
    .Journal_flex_2{
        padding:0rpx 24rpx 0rpx 24rpx;
    }
    .Journal_titlefd2_0_c0_c4{
        font-size:28rpx;color:rgba(102, 102, 102, 1);
    }
    .Journal_bodyItemfd2_0_c0_c3_c2_c2{
        color:#9EA7B7;font-size:24rpx;font-weight:400;line-height:33rpx;
    }
    .Journal_bodyItemfd2_0_c0_c3_c2_c1_c1{
        color:#9EA7B7;font-size:20rpx;font-weight:400;line-height:28rpx;
    }
    .Journal_bodyItemfd2_0_c0_c3_c2_c1_c0{
        width:36rpx;height:36rpx;border-radius:18rpx 18rpx 18rpx 18rpx;margin:0rpx 0rpx 6rpx 0rpx;
    }
    .Journal_bodyItemfd2_0_c0_c3_c2_c1{
        margin:0rpx 20rpx 0rpx 0rpx;
    }
    .Journal_bodyItemfd2_0_c0_c3_c2_c0{
        color:#9EA7B7;font-size:24rpx;font-weight:400;line-height:33rpx;margin:0rpx 40rpx 0rpx 0rpx;
    }
    .Journal_bodyItemfd2_0_c0_c3_c2{
        margin:20rpx 0rpx 0rpx 0rpx;
    }
    .Journal_bodyItemfd2_0_c0_c3_c1{
        color:#666666;font-size:28rpx;font-weight:400;line-height:48rpx;margin:21rpx 0rpx 0rpx 0rpx;
    }
    .Journal_bodyItemfd2_0_c0_c3_c0_c2_c0_1{
        background:rgba(213, 50, 21, 0.2);background-size: 100% !important;color:rgba(230, 53, 65, 1);font-size:22rpx;font-weight:500;line-height:30rpx;padding:2rpx 6rpx 2rpx 6rpx;background-size:100% auto !important;border-radius:4rpx 4rpx 4rpx 4rpx;
    }
    .Journal_bodyItemfd2_0_c0_c3_c0_c2_c0{
        background:rgba(29, 185, 153, 0.1);background-size: 100% !important;color:#1DB999;font-size:22rpx;font-weight:500;line-height:30rpx;padding:2rpx 6rpx 2rpx 6rpx;background-size:100% auto !important;border-radius:4rpx 4rpx 4rpx 4rpx;
    }
    .Journal_bodyItemfd2_0_c0_c3_c0_c2{
        margin:0rpx 0rpx 0rpx 10rpx;
    }
    .Journal_bodyItemfd2_0_c0_c3_c0_c1_c1{
        color:#666666;font-size:24rpx;font-weight:400;line-height:33rpx;margin:10rpx 0rpx 0rpx 0rpx;
    }
    .Journal_bodyItemfd2_0_c0_c3_c0_c1_c0{
        color:#333333;font-size:32rpx;font-weight:500;line-height:45rpx;
    }
    .Journal_bodyItemfd2_0_c0_c3_c0_c1{
        margin:0rpx 0rpx 0rpx 16rpx;
    }
    .Journal_bodyItemfd2_0_c0_c3_c0_c0{
        width:88rpx;height:88rpx;border-radius:44rpx 44rpx 44rpx 44rpx;
    }
    .Journal_bodyfd2_0_c0_c3{
        padding:32rpx 24rpx 32rpx 24rpx;border-radius:0rpx 0rpx 16rpx 16rpx;
    }
    .Journal_titlefd2_0_c0_c3{
        margin:0rpx 56rpx 0rpx 24rpx;font-size:28rpx;color:rgba(102, 102, 102, 1);
    }
    .Journal_linefd2_0_c0{
        background:url(/static/images/12.png) no-repeat;background-size: 100% !important;width:40rpx;height:6rpx;top:80rpx;background-size:100% auto !important;
    }
    .Journal_rightfd2_0_c0_c0_c1{
        width:28rpx;height:18rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .Journal_rightfd2_0_c0_c0_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 16rpx 0rpx 0rpx;
    }
    .Journal_rightfd2_0_c0_c0{
        height:100%;margin:0rpx 24rpx 0rpx 0rpx;width:132rpx;
    }
    .checkTitlefd2_0_c0{
        font-weight:700 !important;font-size:32rpx !important;color:rgba(11, 24, 152, 1) !important;background-color:rgba(255, 255, 255, 1) !important;
    }
    ::v-deep .Journal_benbenTabsfd2_0_c0{
        border-bottom:1px solid rgba(238, 238, 238, 1);background:#fff;background-size: 100% !important;width:702rpx;height:90rpx;white-space:nowrap;text-align:center;border-radius:16rpx 16rpx 0rpx 0rpx;
    }
    .Journal_fd2_0{
        background:#fff;background-size: 100% !important;border-radius:16rpx 16rpx 16rpx 16rpx;margin:24rpx 0rpx 0rpx 0rpx;
    }
    .Journal_flex_3{
        width:118rpx;height:118rpx;overflow:hidden;z-index:10;top:700rpx;right:0rpx;
    }
    .Journal_fd3_0{
        width:118rpx;height:118rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
</style>