<template>
    <view class="page" :style="themeColor">
    <view class="flex benben-position-layout flex flex-wrap align-center page_flex_0"    :style="{height:(88+StatusBarRpx)+'rpx',paddingTop:StatusBarRpx+'rpx'}">
        
        </view>
<view :style="{height: (88+StatusBarRpx)+'rpx'}"  ></view>
<!---flex布局flex布局开始-->
 <view class="flex flex-direction flex-wrap align-stretch benben-flex-layout page_flex_1"   >
            <view   class='flex flex-wrap align-center justify-center page_fd1_0'     >
        <image class='page_fd1_0_c0' mode="aspectFit"  :src='STATIC_URL+"111.jpg"'></image>
<text class='page_fd1_0_c1' >江淮水利设计</text>
</view>
<view style="position: relative">
    <swiper ref="benbenSwiperfd1_1" @change="bannerIndexfd1_1 = $event.detail.current" class='flex position-relative page_fd1_1' previous-margin="0rpx" next-margin="0rpx" :display-multiple-items="1" :interval="5000" :duration="500" :autoplay='true' :circular='true' >
        
    
        <swiper-item class='flex  page_fd1_1_c1'      >
        <image class='page_fd1_1_c1_c0' mode="aspectFit"  :src='STATIC_URL+"7.png"'></image>
</swiper-item>
    

    </swiper>
    <view style="position: absolute" class="flex dot flex align-center justify-center page_swiperDotfd1_1">
        <template v-for="(item, index) in (1)">
            <view :key="index" v-if="bannerIndexfd1_1 == index"
                class="flex dot selected flex align-center justify-center page_swiperDotSelectedfd1_1">
            </view>
            <view :key="index" v-else
                class="flex dot unselected flex align-center justify-center page_swiperDotUnselectedfd1_1">
            </view>
        </template>
    </view>
</view>
    <view   class='flex flex-wrap align-center justify-between page_fd1_2'     >
            <view   class='flex flex-wrap align-center page_fd1_2_c0'  @tap.stop="handleJumpDiy" data-type="navigateTo" :data-url="`/pages/applicationCenter/inform/inform`"   >
            <view   class='flex flex-wrap align-center page_fd1_2_c0_c0'     >
        <image class='page_fd1_2_c0_c0_c0' mode="aspectFit"  :src='STATIC_URL+"10.png"'></image>
        <benben-message-num class='page_fd1_2_c0_c0_c1' :message-num="number" size='24' color='#fff' background-color='red'  >
        </benben-message-num>
</view>
<text class='page_fd1_2_c0_c1' >公告通知</text>
</view>
    <view   class='flex flex-wrap align-center page_fd1_2_c1'  @tap.stop="handleJumpDiy" data-type="navigateTo" :data-url="`/pages/home/messageList/messageList`"   >
            <view   class='flex flex-wrap align-center page_fd1_2_c1_c0'     >
        <image class='page_fd1_2_c1_c0_c0' mode="aspectFit"  :src='STATIC_URL+"11.png"'></image>
        <benben-message-num class='page_fd1_2_c1_c0_c1' :message-num="number" size='24' color='#fff' background-color='red'  >
        </benben-message-num>
</view>
<text class='page_fd1_2_c1_c1' >消息提醒</text>
</view>
</view>
</view>
<!---flex布局flex布局结束-->
<!---flex布局flex布局开始-->
 <view class="flex benben-flex-layout flex-wrap align-center page_flex_2"   >
        <view>
        <benben-flex-tabs class-name='page_benbenTabsfd2_0' v-model="tabs" ref="benben_tabsfd2_0" select-mark="benben_tabsfd2_0" key="benben_tabsfd2_0" :open-title-type='false' :open-sticky='true' :top='0' :is-show-content='false' :scrollspy='false'  :tabs-info.sync="tabsInfofd2_0"  >
            
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
            <view id="benben_tabsfd2_0-title" class="benben-tabs-title flex align-center flex ">
                        <view 
                :class="{ 'checkTitlefd2_0': tabs == '1', 'flex flex-wrap align-center page_titlefd2_0_c3': true }"
                @tap="tabs = '1'"
                :id="`benben_tabsfd2_0-title-item-${'1'}`"
                
              >
                
<text  >待办事项</text>

              </view>            <view 
                :class="{ 'checkTitlefd2_0': tabs == '2', 'flex flex-wrap align-center page_titlefd2_0_c4': true }"
                @tap="tabs = '2'"
                :id="`benben_tabsfd2_0-title-item-${'2'}`"
                
              >
                
<text  >已办事项</text>

              </view>
            </view>
            <view :style="{ left: tabsInfofd2_0.lineleft, maxWidth: tabsInfofd2_0.lineWidth }" id="benben_tabsfd2_0-line" class="benben-tabs-line flex benben-flex-tabs-line page_linefd2_0"></view>
          </view>
        </scroll-view>
            
    <view   class='flex flex-wrap align-center page_rightfd2_0_c0'  @tap.stop="handleJumpDiy" data-type="navigateTo" :data-url="`/pages/applicationCenter/todo/todo`"   >
        <text class='page_rightfd2_0_c0_c0' >全部</text>
<image class='page_rightfd2_0_c0_c1' mode="aspectFit"  :src='STATIC_URL+"13.png"'></image>
</view>

        </benben-flex-tabs>
        
</view>
</view>
<!---flex布局flex布局结束-->
<!---flex布局flex布局开始-->
 <view class="flex flex-direction flex-wrap align-stretch benben-flex-layout page_flex_3"   >
            <view   class='flex flex-direction flex-wrap align-stretch page_fd3_0'     >
            <view   class='flex flex-wrap align-center page_fd3_0_c0'     >
        <image class='page_fd3_0_c0_c0' mode="aspectFit"  :src='STATIC_URL+"15.png"'></image>
<text class='page_fd3_0_c0_c1' >云乡施工设计项目二期款</text>
<image class='page_fd3_0_c0_c2' mode="aspectFit"  :src='STATIC_URL+"16.png"'></image>
</view>
    <view   class='flex flex-wrap align-center page_fd3_0_c1'     >
        <image class='page_fd3_0_c1_c0' mode="aspectFit"  :src='STATIC_URL+"17.png"'></image>
<text class='page_fd3_0_c1_c1' >发起人:</text>
<text class='page_fd3_0_c1_c2' >张章章</text>
</view>
    <view   class='flex flex-wrap align-center page_fd3_0_c2'     >
        <image class='page_fd3_0_c2_c0' mode="aspectFit"  :src='STATIC_URL+"18.png"'></image>
<text class='page_fd3_0_c2_c1' >发起时间:</text>
<text class='page_fd3_0_c2_c2' >2022-08-08 12:01</text>
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
			return {"tabsInfofd2_0":{ lineleft: '', lineWidth: '', moveX: 0, scrollX: 0, PageScrollX: 0 },"bannerIndexfd1_1":0,"number":"1","tabs":"1"};
		},
		computed:{
            themeColor() {
              return this.$store.getters.themeColor
            },
            
		},
		watch:{},
		onLoad(options){
            if(global.appTabBarType)this.toHomeDiy()
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
            background:url(/static/images/6.png) no-repeat ,rgba(243, 246, 251, 1);background-size: 100% auto !important;
        }
    .page_flex_0{
        width:750rpx;height:88rpx;overflow:hidden;z-index:10;top:0rpx;
    }
    .page_flex_1{
        padding:0rpx 24rpx 0rpx 24rpx;
    }
    .page_fd1_2_c1_c1{
        color:#FFFFFF;font-size:32rpx;font-weight:500;line-height:45rpx;margin:0rpx 0rpx 0rpx 24rpx;
    }
    .page_fd1_2_c1_c0_c1{
        position:absolute;top:-2rpx;right:-2rpx;
    }
    .page_fd1_2_c1_c0_c0{
        width:88rpx;height:88rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .page_fd1_2_c1_c0{
        position:relative;
    }
    .page_fd1_2_c1{
        background:linear-gradient(118deg, #F07F6F 0%, #F4988B 100%);background-size: 100% !important;border-radius:16rpx 16rpx 16rpx 16rpx;padding:39rpx 50rpx 39rpx 50rpx;
    }
    .page_fd1_2_c0_c1{
        color:#FFFFFF;font-size:32rpx;font-weight:500;line-height:45rpx;margin:0rpx 0rpx 0rpx 24rpx;
    }
    .page_fd1_2_c0_c0_c1{
        position:absolute;top:-2rpx;right:-2rpx;
    }
    .page_fd1_2_c0_c0_c0{
        width:88rpx;height:88rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .page_fd1_2_c0_c0{
        position:relative;
    }
    .page_fd1_2_c0{
        background:linear-gradient(128deg, #4577FB 0%, #6D93FC 100%);background-size: 100% !important;border-radius:16rpx 16rpx 16rpx 16rpx;padding:39rpx 50rpx 39rpx 50rpx;
    }
    .page_fd1_2{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .page_numberfd1_1_c0{
        background:#525050;background-size: 100% !important;position:absolute;bottom:20rpx;right:30rpx;width:80rpx;height:40rpx;border-radius:6rpx 6rpx 6rpx 6rpx;font-size:24rpx;color:#FFFFFF;line-height:46rpx;font-weight:400;
    }
    .page_fd1_1_c1{
        width:702rpx;height:300rpx;
    }
    .page_fd1_1_c1_c0{
        width:702rpx;height:300rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .page_fd1_1{
        width:702rpx;height:300rpx;
    }
    .page_swiperDotUnselectedfd1_1{
        background:url(/static/images/9.png) no-repeat;background-size: 100% !important;width:16rpx;height:16rpx;border-radius:100rpx 100rpx 100rpx 100rpx;margin:0rpx 6rpx 0rpx 0rpx;font-size:24rpx;
    }
    .page_swiperDotSelectedfd1_1{
        background:url(/static/images/8.png) no-repeat;background-size: 100% !important;width:16rpx;height:16rpx;border-radius:100rpx 100rpx 100rpx 100rpx;margin:0rpx 6rpx 0rpx 0rpx;font-size:24rpx;
    }
    ::v-deep .page_swiperDotfd1_1{
        position:absolute;bottom:20rpx;left:0rpx;right:0rpx;
    }
    .page_fd1_0_c1{
        color:#FFFFFF;font-size:36rpx;font-weight:500;line-height:50rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .page_fd1_0_c0{
        width:65rpx;height:26rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .page_fd1_0{
        margin:0rpx 0rpx 22rpx 0rpx;
    }
    .page_flex_2{
        padding:0rpx 24rpx 0rpx 24rpx;
    }
    .page_titlefd2_0_c4{
        font-size:32rpx;color:rgba(102, 102, 102, 1);
    }
    .page_titlefd2_0_c3{
        margin:0rpx 56rpx 0rpx 0rpx;font-size:32rpx;color:rgba(102, 102, 102, 1);
    }
    .page_linefd2_0{
        background:url(/static/images/12.png) no-repeat;background-size: 100% !important;width:40rpx;height:6rpx;top:80rpx;background-size:100% auto !important;
    }
    .page_rightfd2_0_c0_c1{
        width:18rpx;height:28rpx;border-radius:0rpx 0rpx 0rpx 0rpx;margin:0rpx 0rpx 6rpx 10rpx;
    }
    .page_rightfd2_0_c0_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .page_rightfd2_0_c0{
        height:100%;width:104rpx;
    }
    .checkTitlefd2_0{
        font-weight:700 !important;font-size:32rpx !important;color:#333 !important;background-color:rgba(243, 246, 251, 1) !important;
    }
    ::v-deep .page_benbenTabsfd2_0{
        background:rgba(243, 246, 251, 1);background-size: 100% !important;width:702rpx;height:90rpx;white-space:nowrap;text-align:center;
    }
    .page_flex_3{
        padding:0rpx 24rpx 0rpx 24rpx;
    }
    .page_fd3_0_c2_c2{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .page_fd3_0_c2_c1{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .page_fd3_0_c2_c0{
        width:28rpx;height:28rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .page_fd3_0_c2{
        margin:24rpx 0rpx 0rpx 0rpx;
    }
    .page_fd3_0_c1_c2{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .page_fd3_0_c1_c1{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .page_fd3_0_c1_c0{
        width:28rpx;height:28rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .page_fd3_0_c1{
        margin:24rpx 0rpx 0rpx 0rpx;
    }
    .page_fd3_0_c0_c2{
        width:40rpx;height:40rpx;border-radius:0rpx 0rpx 0rpx 0rpx;margin:0rpx 0rpx 0rpx auto;
    }
    .page_fd3_0_c0_c1{
        color:#333333;font-size:32rpx;font-weight:500;line-height:45rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .page_fd3_0_c0_c0{
        width:100rpx;height:34rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .page_fd3_0_c0{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:0rpx 0rpx 24rpx 0rpx;
    }
    .page_fd3_0{
        background:#fff;background-size: 100% !important;border-radius:16rpx 16rpx 16rpx 16rpx;padding:32rpx 24rpx 32rpx 24rpx;margin:24rpx 0rpx 0rpx 0rpx;
    }
</style>