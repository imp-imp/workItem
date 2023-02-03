<template>
    <view class="page" :style="themeColor">
    <view class="flex flex-wrap align-center justify-between benben-position-layout flex todo_flex_0"    :style="{height:(88+StatusBarRpx)+'rpx',paddingTop:StatusBarRpx+'rpx'}">
            <view   class='flex flex-wrap align-center todo_fd0_0'  @tap.stop="handleJumpDiy" data-type="back" data-url="1"   >
        <text class='fu-iconfont2' >&#xe794;</text>
</view>
<text class='todo_fd0_1' >待办事项</text>
    <view   class='flex flex-wrap align-center todo_fd0_2'     >
        </view>

        </view>
<view :style="{height: (88+StatusBarRpx)+'rpx'}"  ></view>
<!---flex布局flex布局开始-->
 <view class="flex flex-direction flex-wrap align-stretch benben-flex-layout todo_flex_1"   >
            <view   class='flex flex-wrap align-center todo_fd1_0'     >
        <image class='todo_fd1_0_c0' mode="aspectFit"  :src='STATIC_URL+"37.png"'></image>
<input class='flex-sub todo_fd1_0_c1'  type="text" placeholder="搜索" confirm-type="done" :maxlength="-1" placeholder-style="color:#999;font-size:28rpx"  v-model="fd1_0_c1" />
</view>
</view>
<!---flex布局flex布局结束-->
<!---flex布局flex布局开始-->
 <view class="flex benben-flex-layout flex-wrap align-center"   >
        <view>
        <benben-flex-tabs class-name='todo_benbenTabsfd2_0' v-model="cut" ref="benben_tabsfd2_0" select-mark="benben_tabsfd2_0" key="benben_tabsfd2_0" :open-title-type='false' :open-sticky='true' :top='88' :is-show-content='false' :scrollspy='false'  :tabs-info.sync="tabsInfofd2_0"  >
            
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
            <view id="benben_tabsfd2_0-title" class="benben-tabs-title flex align-center justify-between flex ">
                        <view 
                :class="{ 'checkTitlefd2_0': cut == '1', 'flex flex-wrap align-center todo_titlefd2_0_c3': true }"
                @tap="cut = '1'"
                :id="`benben_tabsfd2_0-title-item-${'1'}`"
                
              >
                
<text  >全部</text>

              </view>            <view 
                :class="{ 'checkTitlefd2_0': cut == '2', 'flex flex-wrap align-center todo_titlefd2_0_c4': true }"
                @tap="cut = '2'"
                :id="`benben_tabsfd2_0-title-item-${'2'}`"
                
              >
                
<text  >待办</text>

              </view>            <view 
                :class="{ 'checkTitlefd2_0': cut == '3', 'flex flex-wrap align-center todo_titlefd2_0_c5': true }"
                @tap="cut = '3'"
                :id="`benben_tabsfd2_0-title-item-${'3'}`"
                
              >
                
<text  >已办</text>

              </view>
            </view>
            <view :style="{ left: tabsInfofd2_0.lineleft, maxWidth: tabsInfofd2_0.lineWidth }" id="benben_tabsfd2_0-line" class="benben-tabs-line flex benben-flex-tabs-line todo_linefd2_0"></view>
          </view>
        </scroll-view>
            
        </benben-flex-tabs>
        
</view>
</view>
<!---flex布局flex布局结束-->
<!---flex布局flex布局开始-->
 <view class="flex flex-direction flex-wrap align-stretch benben-flex-layout todo_flex_3"   >
            <view   class='flex flex-direction flex-wrap align-stretch todo_fd3_0'     >
            <view   class='flex flex-direction flex-wrap align-stretch todo_fd3_0_c0'     >
            <view   class='flex flex-wrap align-center justify-between todo_fd3_0_c0_c0'     >
            <view   class='flex flex-wrap align-center'     >
        <text class='todo_fd3_0_c0_c0_c0_c0' >2022-08-08</text>
<text class='todo_fd3_0_c0_c0_c0_c1' >12:01</text>
</view>
    <view   class='flex flex-wrap align-center'     >
        <text class='todo_fd3_0_c0_c0_c1_c0' >待办</text>
</view>
</view>
    <view   class='flex flex-wrap align-center todo_fd3_0_c0_c1'     >
        <text class='todo_fd3_0_c0_c1_c0' >事项类型</text>
<text class='flex-sub todo_fd3_0_c0_c1_c1' >合同回款</text>
</view>
    <view   class='flex flex-wrap align-center todo_fd3_0_c0_c2'     >
        <text class='todo_fd3_0_c0_c2_c0' >事项内容</text>
<text class='flex-sub todo_fd3_0_c0_c2_c1' >合同回款云乡设计项目二期款</text>
</view>
    <view   class='flex flex-wrap align-start todo_fd3_0_c0_c3'     >
        <text class='todo_fd3_0_c0_c3_c0' >发起人</text>
<text class='flex-sub todo_fd3_0_c0_c3_c1' >胡二三</text>
</view>
</view>
    <view   class='flex flex-wrap align-center justify-end todo_fd3_0_c1'     >
        <button class='todo_fd3_0_c1_c0' >已处理</button>
</view>
</view>
    <view   class='flex flex-direction flex-wrap align-stretch todo_fd3_1'     >
            <view   class='flex flex-direction flex-wrap align-stretch'     >
            <view   class='flex flex-wrap align-center justify-between todo_fd3_1_c0_c0'     >
            <view   class='flex flex-wrap align-center'     >
        <text class='todo_fd3_1_c0_c0_c0_c0' >2022-08-08</text>
<text class='todo_fd3_1_c0_c0_c0_c1' >12:01</text>
</view>
    <view   class='flex flex-wrap align-center'     >
        <text class='todo_fd3_1_c0_c0_c1_c0' >已办</text>
</view>
</view>
    <view   class='flex flex-wrap align-center todo_fd3_1_c0_c1'     >
        <text class='todo_fd3_1_c0_c1_c0' >事项类型</text>
<text class='flex-sub todo_fd3_1_c0_c1_c1' >合同回款</text>
</view>
    <view   class='flex flex-wrap align-center todo_fd3_1_c0_c2'     >
        <text class='todo_fd3_1_c0_c2_c0' >事项内容</text>
<text class='flex-sub todo_fd3_1_c0_c2_c1' >合同回款云乡设计项目二期款</text>
</view>
    <view   class='flex flex-wrap align-start todo_fd3_1_c0_c3'     >
        <text class='todo_fd3_1_c0_c3_c0' >发起人</text>
<text class='flex-sub todo_fd3_1_c0_c3_c1' >胡二三</text>
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
			return {"tabsInfofd2_0":{ lineleft: '', lineWidth: '', moveX: 0, scrollX: 0, PageScrollX: 0 },"fd1_0_c1":"","cut":"1"};
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
    .todo_flex_0{
        background:#fff;background-size: 100% !important;width:750rpx;height:88rpx;overflow:hidden;z-index:10;top:0rpx;background-size:100% auto !important;
    }
    .todo_fd0_2{
        width:100rpx;height:88rpx;margin:0rpx 32rpx 0rpx 0rpx;
    }
    .todo_fd0_1{
        color:#000000;font-size:36rpx;font-weight:500;line-height:50rpx;
    }
    .todo_fd0_0{
        width:100rpx;height:88rpx;margin:0rpx 0rpx 0rpx 32rpx;
    }
    .todo_flex_1{
        padding:0rpx 32rpx 0rpx 32rpx;margin:24rpx 0rpx 0rpx 0rpx;
    }
    .todo_fd1_0_c1{
        margin:0rpx 0rpx 0rpx 14rpx;color:#333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .todo_fd1_0_c0{
        width:40rpx;height:40rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .todo_fd1_0{
        background:#fff;background-size: 100% !important;border-radius:34rpx 34rpx 34rpx 34rpx;padding:16rpx 24rpx 16rpx 24rpx;
    }
    .todo_bodyfd2_0_c5{
        padding:0rpx 24rpx 0rpx 24rpx;
    }
    .todo_titlefd2_0_c5{
        color:rgba(102, 102, 102, 1);font-size:28rpx;margin:0rpx 56rpx 0rpx 0rpx;
    }
    .todo_bodyfd2_0_c4{
        padding:0rpx 24rpx 0rpx 24rpx;
    }
    .todo_titlefd2_0_c4{
        color:rgba(102, 102, 102, 1);font-size:28rpx;
    }
    .todo_bodyfd2_0_c3{
        padding:0rpx 24rpx 0rpx 24rpx;
    }
    .todo_titlefd2_0_c3{
        color:rgba(102, 102, 102, 1);font-size:28rpx;margin:0rpx 0rpx 0rpx 56rpx;
    }
    .todo_linefd2_0{
        background:url(/static/images/112.png) no-repeat;background-size: 100% !important;width:40rpx;height:8rpx;top:80rpx;background-size:100% auto !important;
    }
    .checkTitlefd2_0{
        font-weight:700 !important;font-size:32rpx !important;color:rgba(11, 24, 152, 1) !important;background-color:rgba(243, 246, 251, 1) !important;
    }
    ::v-deep .todo_benbenTabsfd2_0{
        width:750rpx;height:90rpx;white-space:nowrap;text-align:center;
    }
    .todo_flex_3{
        padding:0rpx 24rpx 0rpx 24rpx;
    }
    .todo_fd3_1_c0_c3_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 60rpx;
    }
    .todo_fd3_1_c0_c3_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .todo_fd3_1_c0_c3{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .todo_fd3_1_c0_c2_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 32rpx;
    }
    .todo_fd3_1_c0_c2_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .todo_fd3_1_c0_c2{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .todo_fd3_1_c0_c1_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 32rpx;
    }
    .todo_fd3_1_c0_c1_c0{
        color:rgba(102, 102, 102, 1);font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .todo_fd3_1_c0_c1{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .todo_fd3_1_c0_c0_c1_c0{
        color:#0B1898;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .todo_fd3_1_c0_c0_c0_c1{
        color:#666666;font-size:24rpx;font-weight:400;line-height:33rpx;
    }
    .todo_fd3_1_c0_c0_c0_c0{
        color:#666666;font-size:24rpx;font-weight:400;line-height:33rpx;margin:0rpx 10rpx 0rpx 0rpx;
    }
    .todo_fd3_1_c0_c0{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:0rpx 0rpx 20rpx 0rpx;
    }
    .todo_fd3_1{
        background:#fff;background-size: 100% !important;border-radius:16rpx 16rpx 16rpx 16rpx;padding:32rpx 24rpx 32rpx 24rpx;margin:20rpx 0rpx 0rpx 0rpx;
    }
    .todo_fd3_0_c1_c0{
        background:rgba(11, 24, 152, 1);background-size: 100% !important;border-radius:28rpx 28rpx 28rpx 28rpx;font-size:28rpx;color:#fff;width:160rpx;height:56rpx;line-height:56rpx;
    }
    .todo_fd3_0_c1{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .todo_fd3_0_c0_c3_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 60rpx;
    }
    .todo_fd3_0_c0_c3_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .todo_fd3_0_c0_c3{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .todo_fd3_0_c0_c2_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 32rpx;
    }
    .todo_fd3_0_c0_c2_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .todo_fd3_0_c0_c2{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .todo_fd3_0_c0_c1_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 32rpx;
    }
    .todo_fd3_0_c0_c1_c0{
        color:rgba(102, 102, 102, 1);font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .todo_fd3_0_c0_c1{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .todo_fd3_0_c0_c0_c1_c0{
        color:#0B1898;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .todo_fd3_0_c0_c0_c0_c1{
        color:#666666;font-size:24rpx;font-weight:400;line-height:33rpx;
    }
    .todo_fd3_0_c0_c0_c0_c0{
        color:#666666;font-size:24rpx;font-weight:400;line-height:33rpx;margin:0rpx 10rpx 0rpx 0rpx;
    }
    .todo_fd3_0_c0_c0{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:0rpx 0rpx 20rpx 0rpx;
    }
    .todo_fd3_0_c0{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:0rpx 0rpx 32rpx 0rpx;
    }
    .todo_fd3_0{
        background:#fff;background-size: 100% !important;border-radius:16rpx 16rpx 16rpx 16rpx;padding:32rpx 24rpx 32rpx 24rpx;margin:20rpx 0rpx 0rpx 0rpx;
    }
</style>