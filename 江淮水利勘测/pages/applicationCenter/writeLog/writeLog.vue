<template>
    <view class="page" :style="themeColor">
    <view class="flex flex-wrap align-center justify-between benben-position-layout flex writeLog_flex_0"    :style="{height:(88+StatusBarRpx)+'rpx',paddingTop:StatusBarRpx+'rpx'}">
            <view   class='flex flex-wrap align-center writeLog_fd0_0'  @tap.stop="handleJumpDiy" data-type="back" data-url="1"   >
        <text class='fu-iconfont2' >&#xe794;</text>
</view>
<text class='writeLog_fd0_1' >写日志</text>
    <view   class='flex flex-wrap align-center writeLog_fd0_2'     >
        </view>

        </view>
<view :style="{height: (88+StatusBarRpx)+'rpx'}"  ></view>
<!---flex布局flex布局开始-->
 <view class="flex benben-flex-layout flex-wrap align-center"   >
        <view>
        <benben-flex-tabs class-name='writeLog_benbenTabsfd1_0' v-model="cut" ref="benben_tabsfd1_0" select-mark="benben_tabsfd1_0" key="benben_tabsfd1_0" :open-title-type='false' :open-sticky='true' :top='88' :is-show-content='false' :scrollspy='false'  :tabs-info.sync="tabsInfofd1_0"  >
            
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
                :class="{ 'checkTitlefd1_0': cut == '1', 'flex flex-wrap align-center writeLog_titlefd1_0_c3': true }"
                @tap="cut = '1'"
                :id="`benben_tabsfd1_0-title-item-${'1'}`"
                
              >
                
<text  >进度日志</text>

              </view>            <view 
                :class="{ 'checkTitlefd1_0': cut == '2', 'flex flex-wrap align-center writeLog_titlefd1_0_c4': true }"
                @tap="cut = '2'"
                :id="`benben_tabsfd1_0-title-item-${'2'}`"
                
              >
                
<text  >问题日志</text>

              </view>
            </view>
            <view :style="{ left: tabsInfofd1_0.lineleft, maxWidth: tabsInfofd1_0.lineWidth }" id="benben_tabsfd1_0-line" class="benben-tabs-line flex benben-flex-tabs-line writeLog_linefd1_0"></view>
          </view>
        </scroll-view>
            
        </benben-flex-tabs>
        
</view>
</view>
<!---flex布局flex布局结束-->
<!---flex布局flex布局开始-->
 <view class="flex flex-direction flex-wrap align-stretch benben-flex-layout writeLog_flex_2"   >
            <view   class='flex flex-wrap align-center justify-between writeLog_fd2_0'  @tap.stop="popupShow1666079139522=true"   >
        <text class='writeLog_fd2_0_c0' >项目</text>
    <view   class='flex flex-wrap align-center'     >
        <text class='writeLog_fd2_0_c1_c0' >选择项目</text>
<image class='writeLog_fd2_0_c1_c1' mode="aspectFit"  :src='STATIC_URL+"74.png"'></image>
</view>
</view>
</view>
<!---flex布局flex布局结束-->
<benben-popup v-model="popupShow1666079139522" :mask="true"  mode='bottom'>
    <!---多选弹窗flex布局开始-->
 <view class="flex flex-direction flex-wrap align-stretch benben-flex-layout"   >
            <view   class='flex flex-direction flex-wrap align-stretch writeLog_fd3_0'     >
            <view   class='flex flex-wrap align-center justify-between writeLog_fd3_0_c0'     >
        <text class='writeLog_fd3_0_c0_c0'    @tap.stop="popupShow1666079139522=false" >取消</text>
<text class='writeLog_fd3_0_c0_c1' >选择项目</text>
<text class='writeLog_fd3_0_c0_c2' >确定</text>
</view>
    <benben-select-diy ref="showSelectPopup1666078355146" class-name='flex flex-direction align-stretch flex' :items.sync="cat_name" v-model="cat"  default-type="value" default-label="name" :allow-cancel='true' type="checkbox" :disabled='false'  >
    <template v-for = '(item,key0) in cat_name'>
            <view v-if="item.isSelected"  class='flex align-center justify-between flex writeLog_fd3_0_c1_c0' :key="key0" @tap="$refs.showSelectPopup1666078355146.tapHandle(key0)"     >
        <text class='writeLog_fd3_0_c1_c0_c0' >{{item.name}}</text>
<image class='writeLog_fd3_0_c1_c0_c1' mode="aspectFit"  :src='STATIC_URL+"75.png"'></image>
</view>    <view  v-else  class='flex align-center justify-between flex writeLog_fd3_0_c1_c1' :key="key0" @tap="$refs.showSelectPopup1666078355146.tapHandle(key0)"     >
        <text class='writeLog_fd3_0_c1_c1_c0' >{{item.name}}</text>
<image class='writeLog_fd3_0_c1_c1_c1' mode="aspectFit"  :src='STATIC_URL+"76.png"'></image>
</view></template></benben-select-diy>
</view>
</view>
<!---多选弹窗flex布局结束-->
</benben-popup>
<!---flex布局flex布局开始-->
 <view class="flex flex-direction flex-wrap align-stretch benben-flex-layout writeLog_flex_4"  v-if= "state=='2'" >
            <view   class='flex flex-direction flex-wrap align-stretch writeLog_fd4_0'     >
            <view   class='flex flex-wrap align-center justify-between'     >
        <text class='writeLog_fd4_0_c0_c0' >项目名称</text>
<image class='writeLog_fd4_0_c0_c1' mode="aspectFit"  :src='STATIC_URL+"77.png"'></image>
</view>
<text class='writeLog_fd4_0_c1' >关于二阳县光电产业园基础设施建设项目-园区基础设施改扩建工程</text>
<text class='writeLog_fd4_0_c2' >日志内容</text>
<view class='flex flex-wrap writeLog_fd4_0_c3'>
<textarea class='flex writeLog_input_fd4_0_c3' confirm-type="done" :placeholder="'请输入'" :maxlength="240" placeholder-style="color:#999;font-size:28rpx"   v-model="fd4_0_c3" />

</view>
</view>
</view>
<!---flex布局flex布局结束-->
    <view class="flex flex-direction flex-wrap align-center benben-position-layout flex writeLog_flex_5"    >
        <button class='writeLog_fd5_0' >提交</button>

        </view>
<view :style="{height: '136rpx'}"  ></view>
    
    </view>
</template>
<script>
    
    export default {
        components:{},
        
        data(){
			return {"fd4_0_c3":"","popupShow1666079139522":false,"tabsInfofd1_0":{ lineleft: '', lineWidth: '', moveX: 0, scrollX: 0, PageScrollX: 0 },"cut":"1","cat":"","cat_name":[{"name":"关于二阳县光电产业园基础设施建设项目-园区基础设施改扩建工程","value":"1","image":""},{"name":"二阳县光电产业园基础设施建设项目","value":"2","image":""},{"name":"关于二阳县光电产业园基础设施建设项目-园区基础设施改扩建工程","value":"3","image":""},{"name":"关于二阳县光电产业园基础设施建设项目-园区基础设施改扩建工程","value":"4","image":""}],"state":"1"};
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
    .writeLog_flex_0{
        background:#fff;background-size: 100% !important;width:750rpx;height:88rpx;overflow:hidden;z-index:10;top:0rpx;background-size:100% auto !important;
    }
    .writeLog_fd0_2{
        width:100rpx;height:88rpx;margin:0rpx 32rpx 0rpx 0rpx;
    }
    .writeLog_fd0_1{
        color:#000000;font-size:36rpx;font-weight:500;line-height:50rpx;
    }
    .writeLog_fd0_0{
        width:100rpx;height:88rpx;margin:0rpx 0rpx 0rpx 32rpx;
    }
    .writeLog_bodyfd1_0_c4{
        padding:0rpx 24rpx 0rpx 24rpx;
    }
    .writeLog_titlefd1_0_c4{
        color:rgba(102, 102, 102, 1);font-size:28rpx;
    }
    .writeLog_bodyfd1_0_c3{
        padding:0rpx 24rpx 0rpx 24rpx;
    }
    .writeLog_titlefd1_0_c3{
        color:rgba(102, 102, 102, 1);font-size:28rpx;margin:0rpx 56rpx 0rpx 32rpx;
    }
    .writeLog_linefd1_0{
        background:url(/static/images/12.png) no-repeat;background-size: 100% !important;width:40rpx;height:6rpx;top:80rpx;background-size:100% auto !important;
    }
    .checkTitlefd1_0{
        font-weight:700 !important;font-size:32rpx !important;color:rgba(11, 24, 152, 1) !important;background-color:rgba(243, 246, 251, 1) !important;
    }
    ::v-deep .writeLog_benbenTabsfd1_0{
        width:750rpx;height:90rpx;white-space:nowrap;text-align:center;
    }
    .writeLog_flex_2{
        padding:0rpx 24rpx 0rpx 24rpx;
    }
    .writeLog_fd2_0_c1_c1{
        width:14rpx;height:26rpx;border-radius:0rpx 0rpx 0rpx 0rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .writeLog_fd2_0_c1_c0{
        color:#9EA7B7;font-size:32rpx;font-weight:400;line-height:45rpx;
    }
    .writeLog_fd2_0_c0{
        color:#333333;font-size:32rpx;font-weight:400;line-height:45rpx;
    }
    .writeLog_fd2_0{
        background:#fff;background-size: 100% !important;border-radius:16rpx 16rpx 16rpx 16rpx;margin:24rpx 0rpx 0rpx 0rpx;padding:26rpx 24rpx 25rpx 24rpx;
    }
    .writeLog_fd3_0_c1_c1_c1{
        width:36rpx;height:36rpx;border-radius:0rpx 0rpx 0rpx 0rpx;margin:0rpx 0rpx 0rpx 60rpx;
    }
    .writeLog_fd3_0_c1_c1_c0{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .writeLog_fd3_0_c1_c1{
        padding:0rpx 32rpx 0rpx 26rpx;margin:32rpx 0rpx 0rpx 0rpx;height:86rpx;
    }
    .writeLog_fd3_0_c1_c0_c1{
        width:36rpx;height:36rpx;border-radius:0rpx 0rpx 0rpx 0rpx;margin:0rpx 0rpx 0rpx 60rpx;
    }
    .writeLog_fd3_0_c1_c0_c0{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .writeLog_fd3_0_c1_c0{
        padding:0rpx 32rpx 0rpx 26rpx;margin:32rpx 0rpx 0rpx 0rpx;height:86rpx;
    }
    .writeLog_fd3_0_c0_c2{
        color:#0B1898;font-size:28rpx;font-weight:500;line-height:40rpx;
    }
    .writeLog_fd3_0_c0_c1{
        color:#333333;font-size:36rpx;font-weight:500;line-height:50rpx;
    }
    .writeLog_fd3_0_c0_c0{
        color:#666666;font-size:28rpx;font-weight:500;line-height:40rpx;
    }
    .writeLog_fd3_0_c0{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:32rpx 32rpx 32rpx 32rpx;
    }
    .writeLog_fd3_0{
        background:#fff;background-size: 100% !important;border-radius:24rpx 24rpx 0rpx 0rpx;padding:0rpx 0rpx 40rpx 0rpx;
    }
    .writeLog_flex_4{
        padding:0rpx 24rpx 0rpx 24rpx;
    }
    .writeLog_input_fd4_0_c3{
        width:100%;height:140rpx;font-size:28rpx;font-weight:400;color:#333;padding:22rpx 0rpx 0rpx 24rpx;
    }
    .writeLog_fd4_0_c3{
        background:rgba(243, 246, 251, 1);background-size: 100% !important;width:650rpx;border-radius:16rpx 16rpx 16rpx 16rpx;
    }
    .writeLog_fd4_0_c2{
        color:#333333;font-size:32rpx;font-weight:500;line-height:45rpx;margin:40rpx 0rpx 24rpx 0rpx;
    }
    .writeLog_fd4_0_c1{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;margin:24rpx 0rpx 0rpx 0rpx;
    }
    .writeLog_fd4_0_c0_c1{
        width:32rpx;height:32rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .writeLog_fd4_0_c0_c0{
        color:#333333;font-size:32rpx;font-weight:500;line-height:45rpx;
    }
    .writeLog_fd4_0{
        background:#fff;background-size: 100% !important;border-radius:16rpx 16rpx 16rpx 16rpx;margin:20rpx 0rpx 0rpx 0rpx;padding:32rpx 24rpx 32rpx 24rpx;
    }
    .writeLog_flex_5{
        width:750rpx;height:136rpx;overflow:hidden;z-index:10;bottom:calc(0rpx + var(--window-bottom));
    }
    .writeLog_fd5_0{
        background:rgba(11, 24, 152, 1);background-size: 100% !important;border-radius:100rpx 100rpx 100rpx 100rpx;font-size:32rpx;color:#fff;width:686rpx;height:88rpx;line-height:88rpx;
    }
</style>