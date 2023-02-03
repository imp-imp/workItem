<template>
    <view class="page" :style="themeColor">
    <view class="flex flex-wrap align-center justify-between benben-position-layout flex messageList_flex_0"    :style="{height:(88+StatusBarRpx)+'rpx',paddingTop:StatusBarRpx+'rpx'}">
            <view   class='flex flex-wrap align-center messageList_fd0_0'  @tap.stop="handleJumpDiy" data-type="back" data-url="1"   >
        <text class='fu-iconfont2' >&#xe794;</text>
</view>
<text class='messageList_fd0_1' >消息</text>
    <view   class='flex flex-wrap align-center messageList_fd0_2'     >
        </view>

        </view>
<view :style="{height: (88+StatusBarRpx)+'rpx'}"  ></view>
<!---flex布局flex布局开始-->
 <view class="flex flex-direction flex-wrap align-stretch benben-flex-layout messageList_flex_1"   >
            <view   class='flex flex-wrap align-center messageList_fd1_0'     >
        <image class='messageList_fd1_0_c0' mode="aspectFit"  :src='STATIC_URL+"19.png"'></image>
<input class='flex-sub messageList_fd1_0_c1'  type="text" placeholder="请输入" confirm-type="done" :maxlength="-1" placeholder-style="color:#999;font-size:28rpx"  v-model="fd1_0_c1" />
</view>
</view>
<!---flex布局flex布局结束-->
<!---flex布局flex布局开始-->
 <view class="flex benben-flex-layout flex-wrap align-center"   >
        <view>
        <benben-flex-tabs class-name='messageList_benbenTabsfd2_0' v-model="tabs" ref="benben_tabsfd2_0" select-mark="benben_tabsfd2_0" key="benben_tabsfd2_0" :open-title-type='false' :open-sticky='true' :top='88' :is-show-content='false' :scrollspy='false'  :tabs-info.sync="tabsInfofd2_0"  >
            
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
                :class="{ 'checkTitlefd2_0': tabs == '1', 'flex flex-wrap align-center messageList_titlefd2_0_c3': true }"
                @tap="tabs = '1'"
                :id="`benben_tabsfd2_0-title-item-${'1'}`"
                
              >
                
<text  >全部</text>

              </view>            <view 
                :class="{ 'checkTitlefd2_0': tabs == '2', 'flex flex-wrap align-center messageList_titlefd2_0_c4': true }"
                @tap="tabs = '2'"
                :id="`benben_tabsfd2_0-title-item-${'2'}`"
                
              >
                
<text  >已读</text>

              </view>            <view 
                :class="{ 'checkTitlefd2_0': tabs == '3', 'flex flex-wrap align-center messageList_titlefd2_0_c5': true }"
                @tap="tabs = '3'"
                :id="`benben_tabsfd2_0-title-item-${'3'}`"
                
              >
                
<text  >未读</text>

              </view>
            </view>
            <view :style="{ left: tabsInfofd2_0.lineleft, maxWidth: tabsInfofd2_0.lineWidth }" id="benben_tabsfd2_0-line" class="benben-tabs-line flex benben-flex-tabs-line messageList_linefd2_0"></view>
          </view>
        </scroll-view>
            
        </benben-flex-tabs>
        
</view>
</view>
<!---flex布局flex布局结束-->
<!---flex布局flex布局开始-->
 <view class="flex flex-direction flex-wrap align-stretch benben-flex-layout messageList_flex_3"   >
            <view   class='flex flex-direction flex-wrap align-stretch messageList_fd3_0'  @tap.stop="handleJumpDiy" data-type="navigateTo" :data-url="`/pages/home/messageDetails/messageDetails`"   >
            <view   class='flex flex-wrap align-center justify-between messageList_fd3_0_c0'     >
        <text class='messageList_fd3_0_c0_c0' >2022-08-08 12:01</text>
<text class='messageList_fd3_0_c0_c1' >已读</text>
</view>
    <view   class='flex flex-wrap align-center messageList_fd3_0_c1'     >
        <text class='messageList_fd3_0_c1_c0' >类型</text>
<text class='messageList_fd3_0_c1_c1' >超期提醒</text>
</view>
    <view   class='flex flex-wrap align-center messageList_fd3_0_c2'     >
        <text class='messageList_fd3_0_c2_c0' >内容</text>
<text class='flex-sub messageList_fd3_0_c2_c1' >您的“山乡美丽乡村建设项目”即将超…</text>
<text class='messageList_fd3_0_c2_c2' >详情</text>
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
			return {"tabsInfofd2_0":{ lineleft: '', lineWidth: '', moveX: 0, scrollX: 0, PageScrollX: 0 },"fd1_0_c1":"","tabs":"1"};
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
    .messageList_flex_0{
        border-bottom:1px solid rgba(238, 238, 238, 1);background:#fff;background-size: 100% !important;width:750rpx;height:88rpx;overflow:hidden;z-index:10;top:0rpx;background-size:100% auto !important;
    }
    .messageList_fd0_2{
        width:100rpx;height:88rpx;margin:0rpx 32rpx 0rpx 0rpx;
    }
    .messageList_fd0_1{
        color:#000000;font-size:36rpx;font-weight:500;line-height:50rpx;
    }
    .messageList_fd0_0{
        width:100rpx;height:88rpx;margin:0rpx 0rpx 0rpx 32rpx;
    }
    .messageList_flex_1{
        padding:0rpx 32rpx 0rpx 32rpx;
    }
    .messageList_fd1_0_c1{
        margin:0rpx 0rpx 0rpx 14rpx;
    }
    .messageList_fd1_0_c0{
        width:40rpx;height:40rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .messageList_fd1_0{
        background:#fff;background-size: 100% !important;border-radius:30rpx 30rpx 30rpx 30rpx;padding:16rpx 24rpx 16rpx 24rpx;margin:32rpx 0rpx 0rpx 0rpx;
    }
    .messageList_titlefd2_0_c5{
        color:rgba(102, 102, 102, 1);
    }
    .messageList_titlefd2_0_c4{
        color:rgba(102, 102, 102, 1);
    }
    .messageList_titlefd2_0_c3{
        color:rgba(102, 102, 102, 1);
    }
    .messageList_linefd2_0{
        background:url(/static/images/20.png) no-repeat;background-size: 100% !important;width:48rpx;height:8rpx;top:80rpx;background-size:100% auto !important;
    }
    .checkTitlefd2_0{
        font-weight:700 !important;font-size:32rpx !important;color:#333 !important;background-color:rgba(243, 246, 251, 1) !important;
    }
    ::v-deep .messageList_benbenTabsfd2_0{
        background:rgba(243, 246, 251, 1);background-size: 100% !important;width:750rpx;height:90rpx;white-space:nowrap;text-align:center;background-size:100% auto !important;
    }
    .messageList_flex_3{
        padding:0rpx 24rpx 0rpx 24rpx;
    }
    .messageList_fd3_0_c2_c2{
        color:#4897EB;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .messageList_fd3_0_c2_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 20rpx 0rpx 20rpx;-webkit-line-clamp:1;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;
    }
    .messageList_fd3_0_c2_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .messageList_fd3_0_c2{
        margin:25rpx 0rpx 0rpx 0rpx;
    }
    .messageList_fd3_0_c1_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 20rpx;
    }
    .messageList_fd3_0_c1_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .messageList_fd3_0_c1{
        margin:24rpx 0rpx 0rpx 0rpx;
    }
    .messageList_fd3_0_c0_c1{
        color:#9EA7B7;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .messageList_fd3_0_c0_c0{
        color:#666666;font-size:24rpx;font-weight:400;line-height:33rpx;
    }
    .messageList_fd3_0_c0{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:0rpx 0rpx 24rpx 0rpx;
    }
    .messageList_fd3_0{
        background:#fff;background-size: 100% !important;border-radius:16rpx 16rpx 16rpx 16rpx;padding:36rpx 24rpx 32rpx 24rpx;margin:20rpx 0rpx 0rpx 0rpx;
    }
</style>