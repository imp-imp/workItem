<template>
    <view class="page" :style="themeColor">
    <view class="flex flex-wrap align-center justify-between benben-position-layout flex write_flex_0"    :style="{height:(88+StatusBarRpx)+'rpx',paddingTop:StatusBarRpx+'rpx'}">
            <view   class='flex flex-wrap align-center write_fd0_0'  @tap.stop="handleJumpDiy" data-type="back" data-url="1"   >
        <text class='fu-iconfont2' >&#xe794;</text>
</view>
<text class='write_fd0_1' >写日志</text>
    <view   class='flex flex-wrap align-center write_fd0_2'     >
        </view>

        </view>
<view :style="{height: (88+StatusBarRpx)+'rpx'}"  ></view>
<!---flex布局flex布局开始-->
 <view class="flex flex-direction flex-wrap align-stretch benben-flex-layout"   >
        <view>
        <benben-flex-tabs class-name='write_benbenTabsfd1_0' v-model="tabs" ref="benben_tabsfd1_0" select-mark="benben_tabsfd1_0" key="benben_tabsfd1_0" :open-title-type='false' :open-sticky='true' :top='0' :is-show-content='false' :scrollspy='false'  :tabs-info.sync="tabsInfofd1_0"  >
            
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
                :class="{ 'checkTitlefd1_0': tabs == '1', 'flex flex-wrap align-center write_titlefd1_0_c3': true }"
                @tap="tabs = '1'"
                :id="`benben_tabsfd1_0-title-item-${'1'}`"
                
              >
                
<text  >进度日志</text>

              </view>            <view 
                :class="{ 'checkTitlefd1_0': tabs == '2', 'flex flex-wrap align-center write_titlefd1_0_c4': true }"
                @tap="tabs = '2'"
                :id="`benben_tabsfd1_0-title-item-${'2'}`"
                
              >
                
<text  >问题日志</text>

              </view>
            </view>
            <view :style="{ left: tabsInfofd1_0.lineleft, maxWidth: tabsInfofd1_0.lineWidth }" id="benben_tabsfd1_0-line" class="benben-tabs-line flex benben-flex-tabs-line write_linefd1_0"></view>
          </view>
        </scroll-view>
            
        </benben-flex-tabs>
        
</view>
</view>
<!---flex布局flex布局结束-->
<!---flex布局flex布局开始-->
 <view class="flex flex-direction flex-wrap align-stretch benben-flex-layout write_flex_2"   >
            <view   class='flex flex-direction flex-wrap align-stretch write_fd2_0'     >
        <text class='write_fd2_0_c0' >项目</text>
<text class='write_fd2_0_c1' >关于二阳县光电产业园基础设施建设项目-园区基础设施改扩建工程</text>
<text class='write_fd2_0_c2' >日志内容</text>
<view class='flex flex-wrap write_fd2_0_c3'>
<textarea class='flex write_input_fd2_0_c3' confirm-type="done" :placeholder="'请输入进度日志'" :maxlength="240" placeholder-style="color:#999;font-size:28rpx"   v-model="fd2_0_c3" />

</view>
</view>
</view>
<!---flex布局flex布局结束-->
    <view class="flex flex-direction flex-wrap align-center benben-position-layout flex write_flex_3"    >
        <button class='write_fd3_0' >提交</button>

        </view>
<view :style="{height: '138rpx'}"  ></view>
    
    </view>
</template>
<script>
    
    export default {
        components:{},
        
        data(){
			return {"fd2_0_c3":"","tabsInfofd1_0":{ lineleft: '', lineWidth: '', moveX: 0, scrollX: 0, PageScrollX: 0 },"tabs":"1"};
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
    .write_flex_0{
        background:#fff;background-size: 100% !important;width:750rpx;height:88rpx;overflow:hidden;z-index:10;top:0rpx;background-size:100% auto !important;
    }
    .write_fd0_2{
        width:100rpx;height:88rpx;margin:0rpx 32rpx 0rpx 0rpx;
    }
    .write_fd0_1{
        color:#000000;font-size:36rpx;font-weight:500;line-height:50rpx;
    }
    .write_fd0_0{
        width:100rpx;height:88rpx;margin:0rpx 0rpx 0rpx 32rpx;
    }
    .write_titlefd1_0_c4{
        font-size:32rpx;color:rgba(102, 102, 102, 1);
    }
    .write_titlefd1_0_c3{
        margin:0rpx 56rpx 0rpx 24rpx;color:rgba(102, 102, 102, 1);font-size:32rpx;
    }
    .write_linefd1_0{
        background:url(/static/images/12.png) no-repeat;background-size: 100% !important;width:40rpx;height:6rpx;top:80rpx;background-size:100% auto !important;
    }
    .checkTitlefd1_0{
        font-weight:700 !important;font-size:32rpx !important;color:rgba(11, 24, 152, 1) !important;background-color:rgba(243, 246, 251, 1) !important;
    }
    ::v-deep .write_benbenTabsfd1_0{
        width:750rpx;height:90rpx;white-space:nowrap;text-align:center;
    }
    .write_flex_2{
        padding:0rpx 24rpx 0rpx 24rpx;
    }
    .write_input_fd2_0_c3{
        width:100%;height:380rpx;font-size:28rpx;font-weight:400;color:#333;padding:24rpx 0rpx 0rpx 24rpx;
    }
    .write_fd2_0_c3{
        background:rgba(243, 246, 251, 1);background-size: 100% !important;width:650rpx;border-radius:10rpx 10rpx 10rpx 10rpx;
    }
    .write_fd2_0_c2{
        color:#1F1F1F;font-size:32rpx;font-weight:500;line-height:45rpx;margin:0rpx 0rpx 24rpx 0rpx;
    }
    .write_fd2_0_c1{
        color:#666666;font-size:28rpx;font-weight:400;line-height:48rpx;margin:24rpx 0rpx 40rpx 0rpx;
    }
    .write_fd2_0_c0{
        color:#333333;font-size:32rpx;font-weight:400;line-height:45rpx;
    }
    .write_fd2_0{
        background:#fff;background-size: 100% !important;border-radius:24rpx 24rpx 24rpx 24rpx;padding:32rpx 24rpx 32rpx 24rpx;margin:24rpx 0rpx 0rpx 0rpx;
    }
    .write_flex_3{
        width:750rpx;height:138rpx;overflow:hidden;z-index:10;bottom:calc(0rpx + var(--window-bottom));
    }
    .write_fd3_0{
        background:rgba(11, 24, 152, 1);background-size: 100% !important;border-radius:100rpx 100rpx 100rpx 100rpx;font-size:32rpx;color:#fff;width:686rpx;height:88rpx;line-height:88rpx;margin:0rpx 32rpx 0rpx 32rpx;
    }
</style>