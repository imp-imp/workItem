<template>
    <view class="page" :style="themeColor">
    <view class="flex flex-direction flex-wrap align-stretch benben-position-layout flex projectAll_flex_0"    :style="{height:(88+StatusBarRpx)+'rpx',paddingTop:StatusBarRpx+'rpx'}">
            <view   class='flex flex-wrap align-center projectAll_fd0_0'     >
        <image class='projectAll_fd0_0_c0' mode="aspectFit"  :src='STATIC_URL+"48.png"'></image>
<input class='flex-sub projectAll_fd0_0_c1'  type="text" placeholder="搜索" confirm-type="done" :maxlength="-1" placeholder-style="color:#999;font-size:28rpx"  v-model="fd0_0_c1" />
</view>

        </view>
<view :style="{height: (88+StatusBarRpx)+'rpx'}"  ></view>
<!---flex布局flex布局开始-->
 <view class="flex benben-flex-layout flex-wrap align-center projectAll_flex_1"   >
            <benben-select-diy ref="showSelectPopup1665970866898" class-name='flex align-center flex' :items.sync="cut_name" v-model="cut_id"  default-type="value" default-label="name" :allow-cancel='false' type="radio" :disabled='false'  >
    <template v-for = '(item,key0) in cut_name'>
            <view v-if="item.isSelected"  class='flex flex-direction align-center flex projectAll_fd1_0_c0' :key="key0" @tap="$refs.showSelectPopup1665970866898.tapHandle(key0)"     >
        <image class='projectAll_fd1_0_c0_c0' mode="aspectFit"  :src='item.image'></image>
<text class='projectAll_fd1_0_c0_c1' >{{item.name}}</text>
</view>    <view  v-else  class='flex flex-direction align-center flex projectAll_fd1_0_c1' :key="key0" @tap="$refs.showSelectPopup1665970866898.tapHandle(key0)"     >
        <image class='projectAll_fd1_0_c1_c0' mode="aspectFit"  :src='item.image'></image>
<text class='projectAll_fd1_0_c1_c1' >{{item.name}}</text>
</view></template></benben-select-diy>
</view>
<!---flex布局flex布局结束-->
<!---flex布局flex布局开始-->
 <view class="flex benben-flex-layout flex-wrap align-center"   >
        <view>
        <benben-flex-tabs class-name='projectAll_benbenTabsfd2_0' v-model="tabs" ref="benben_tabsfd2_0" select-mark="benben_tabsfd2_0" key="benben_tabsfd2_0" :open-title-type='false' :open-sticky='true' :top='0' :is-show-content='true' :scrollspy='false'  :tabs-info.sync="tabsInfofd2_0"  >
            
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
                :class="{ 'checkTitlefd2_0': tabs == '1', 'flex flex-wrap align-center projectAll_titlefd2_0_c3': true }"
                @tap="tabs = '1'"
                :id="`benben_tabsfd2_0-title-item-${'1'}`"
                
              >
                
<text  >全部</text>

              </view>            <view 
                :class="{ 'checkTitlefd2_0': tabs == '2', 'flex flex-wrap align-center projectAll_titlefd2_0_c4': true }"
                @tap="tabs = '2'"
                :id="`benben_tabsfd2_0-title-item-${'2'}`"
                
              >
                
<text  >进行中</text>

              </view>            <view 
                :class="{ 'checkTitlefd2_0': tabs == '3', 'flex flex-wrap align-center projectAll_titlefd2_0_c5': true }"
                @tap="tabs = '3'"
                :id="`benben_tabsfd2_0-title-item-${'3'}`"
                
              >
                
<text  >已完成</text>

              </view>            <view 
                :class="{ 'checkTitlefd2_0': tabs == '4', 'flex flex-wrap align-center projectAll_titlefd2_0_c6': true }"
                @tap="tabs = '4'"
                :id="`benben_tabsfd2_0-title-item-${'4'}`"
                
              >
                
<text  >暂停</text>

              </view>            <view 
                :class="{ 'checkTitlefd2_0': tabs == '5', 'flex flex-wrap align-center projectAll_titlefd2_0_c7': true }"
                @tap="tabs = '5'"
                :id="`benben_tabsfd2_0-title-item-${'5'}`"
                
              >
                
<text  >失控</text>

              </view>
            </view>
            <view :style="{ left: tabsInfofd2_0.lineleft, maxWidth: tabsInfofd2_0.lineWidth }" id="benben_tabsfd2_0-line" class="benben-tabs-line flex benben-flex-tabs-line projectAll_linefd2_0"></view>
          </view>
        </scroll-view>
            
        </benben-flex-tabs>
                <view>
                        <view class="benben_tabsfd2_0-body-item flex flex-direction flex-wrap align-stretch projectAll_bodyfd2_0_c3" v-if=" tabs == '1' " :id="`benben_tabsfd2_0-body-item-${'1'}`">
    <view   class='flex flex-direction flex-wrap align-stretch projectAll_bodyItemfd2_0_c3_c0'  @tap.stop="handleJumpDiy" data-type="navigateTo" :data-url="`/pages/home/progress/progress?type=1`"   >
            <view   class='flex flex-wrap align-center justify-between projectAll_bodyItemfd2_0_c3_c0_c0'     >
            <view   class='flex flex-wrap align-center'     >
        <text class='projectAll_bodyItemfd2_0_c3_c0_c0_c0_c0' >项目编号</text>
<text class='projectAll_bodyItemfd2_0_c3_c0_c0_c0_c1' >2022-N4-001-J</text>
</view>
    <view   class='flex flex-wrap align-center'     >
        <text class='projectAll_bodyItemfd2_0_c3_c0_c0_c1_c0'   v-if= "variate=='1'"  >进行中</text><text class='projectAll_bodyItemfd2_0_c3_c0_c0_c1_c0_1'   v-if= "variate=='2'"  >进行中</text><text class='projectAll_bodyItemfd2_0_c3_c0_c0_c1_c0_2'   v-if= "variate=='3'"  >已完成</text>
</view>
</view>
    <view   class='flex flex-wrap align-center projectAll_bodyItemfd2_0_c3_c0_c1'     >
        <text class='projectAll_bodyItemfd2_0_c3_c0_c1_c0' >紧急程度</text>
<image class='projectAll_bodyItemfd2_0_c3_c0_c1_c1' :src='STATIC_URL+"55.png"'  v-if= "variate=='1'"></image><image class='projectAll_bodyItemfd2_0_c3_c0_c1_c1_1' :src='STATIC_URL+"56.png"'  v-if= "variate=='2'"></image><image class='projectAll_bodyItemfd2_0_c3_c0_c1_c1_2' :src='STATIC_URL+"56.png"'  v-if= "variate=='3'"></image>
</view>
    <view   class='flex flex-wrap align-start projectAll_bodyItemfd2_0_c3_c0_c2'     >
        <text class='projectAll_bodyItemfd2_0_c3_c0_c2_c0' >项目名称</text>
<text class='flex-sub projectAll_bodyItemfd2_0_c3_c0_c2_c1' >关于二阳县光电产业园基础设施建设项目-园区基础设施改扩建工程</text>
</view>
    <view   class='flex flex-wrap align-center projectAll_bodyItemfd2_0_c3_c0_c3'     >
        <text class='projectAll_bodyItemfd2_0_c3_c0_c3_c0' >主负责人</text>
<text class='flex-sub projectAll_bodyItemfd2_0_c3_c0_c3_c1' >陈沉沉</text>
</view>
</view>

    <view   class='flex flex-direction flex-wrap align-stretch projectAll_bodyItemfd2_0_c3_c1'  @tap.stop="handleJumpDiy" data-type="navigateTo" :data-url="`/pages/home/progress/progress?type=1`"   >
            <view   class='flex flex-wrap align-center justify-between projectAll_bodyItemfd2_0_c3_c1_c0'     >
            <view   class='flex flex-wrap align-center'     >
        <text class='projectAll_bodyItemfd2_0_c3_c1_c0_c0_c0' >项目编号</text>
<text class='projectAll_bodyItemfd2_0_c3_c1_c0_c0_c1' >2022-N4-001-J</text>
</view>
    <view   class='flex flex-wrap align-center'     >
        <text class='projectAll_bodyItemfd2_0_c3_c1_c0_c1_c0' >进行中</text>
</view>
</view>
    <view   class='flex flex-wrap align-center projectAll_bodyItemfd2_0_c3_c1_c1'     >
        <text class='projectAll_bodyItemfd2_0_c3_c1_c1_c0' >紧急程度</text>
    <view   class='flex flex-wrap align-center projectAll_bodyItemfd2_0_c3_c1_c1_c1'     >
        <text class='projectAll_bodyItemfd2_0_c3_c1_c1_c1_c0' >一般</text>
</view>
</view>
    <view   class='flex flex-wrap align-start projectAll_bodyItemfd2_0_c3_c1_c2'     >
        <text class='projectAll_bodyItemfd2_0_c3_c1_c2_c0' >项目名称</text>
<text class='flex-sub projectAll_bodyItemfd2_0_c3_c1_c2_c1' >关于二阳县光电产业园基础设施建设项目-园区基础设施改扩建工程</text>
</view>
    <view   class='flex flex-wrap align-center projectAll_bodyItemfd2_0_c3_c1_c3'     >
        <text class='projectAll_bodyItemfd2_0_c3_c1_c3_c0' >主负责人</text>
<text class='flex-sub projectAll_bodyItemfd2_0_c3_c1_c3_c1' >陈沉沉</text>
</view>
</view>
</view>            <view class="benben_tabsfd2_0-body-item flex flex-direction flex-wrap align-stretch projectAll_bodyfd2_0_c4" v-if=" tabs == '2' " :id="`benben_tabsfd2_0-body-item-${'2'}`">
    <view   class='flex flex-direction flex-wrap align-stretch projectAll_bodyItemfd2_0_c4_c0'  @tap.stop="handleJumpDiy" data-type="navigateTo" :data-url="`/pages/home/progress/progress?type=1`"   >
            <view   class='flex flex-wrap align-center justify-between projectAll_bodyItemfd2_0_c4_c0_c0'     >
            <view   class='flex flex-wrap align-center'     >
        <text class='projectAll_bodyItemfd2_0_c4_c0_c0_c0_c0' >项目编号</text>
<text class='projectAll_bodyItemfd2_0_c4_c0_c0_c0_c1' >2022-N4-001-J</text>
</view>
    <view   class='flex flex-wrap align-center'     >
        <text class='projectAll_bodyItemfd2_0_c4_c0_c0_c1_c0' >进行中</text>
</view>
</view>
    <view   class='flex flex-wrap align-center projectAll_bodyItemfd2_0_c4_c0_c1'     >
        <text class='projectAll_bodyItemfd2_0_c4_c0_c1_c0' >紧急程度</text>
<image class='projectAll_bodyItemfd2_0_c4_c0_c1_c1' mode="aspectFit"  :src='STATIC_URL+"55.png"'></image>
</view>
    <view   class='flex flex-wrap align-start projectAll_bodyItemfd2_0_c4_c0_c2'     >
        <text class='projectAll_bodyItemfd2_0_c4_c0_c2_c0' >项目名称</text>
<text class='flex-sub projectAll_bodyItemfd2_0_c4_c0_c2_c1' >关于二阳县光电产业园基础设施建设项目-园区基础设施改扩建工程</text>
</view>
    <view   class='flex flex-wrap align-center projectAll_bodyItemfd2_0_c4_c0_c3'     >
        <text class='projectAll_bodyItemfd2_0_c4_c0_c3_c0' >主负责人</text>
<text class='flex-sub projectAll_bodyItemfd2_0_c4_c0_c3_c1' >陈沉沉</text>
</view>
</view>

    <view   class='flex flex-direction flex-wrap align-stretch projectAll_bodyItemfd2_0_c4_c1'  @tap.stop="handleJumpDiy" data-type="navigateTo" :data-url="`/pages/home/progress/progress?type=1`"   >
            <view   class='flex flex-wrap align-center justify-between projectAll_bodyItemfd2_0_c4_c1_c0'     >
            <view   class='flex flex-wrap align-center'     >
        <text class='projectAll_bodyItemfd2_0_c4_c1_c0_c0_c0' >项目编号</text>
<text class='projectAll_bodyItemfd2_0_c4_c1_c0_c0_c1' >2022-N4-001-J</text>
</view>
    <view   class='flex flex-wrap align-center'     >
        <text class='projectAll_bodyItemfd2_0_c4_c1_c0_c1_c0' >进行中</text>
</view>
</view>
    <view   class='flex flex-wrap align-center projectAll_bodyItemfd2_0_c4_c1_c1'     >
        <text class='projectAll_bodyItemfd2_0_c4_c1_c1_c0' >紧急程度</text>
    <view   class='flex flex-wrap align-center projectAll_bodyItemfd2_0_c4_c1_c1_c1'     >
        <text class='projectAll_bodyItemfd2_0_c4_c1_c1_c1_c0' >一般</text>
</view>
</view>
    <view   class='flex flex-wrap align-start projectAll_bodyItemfd2_0_c4_c1_c2'     >
        <text class='projectAll_bodyItemfd2_0_c4_c1_c2_c0' >项目名称</text>
<text class='flex-sub projectAll_bodyItemfd2_0_c4_c1_c2_c1' >关于二阳县光电产业园基础设施建设项目-园区基础设施改扩建工程</text>
</view>
    <view   class='flex flex-wrap align-center projectAll_bodyItemfd2_0_c4_c1_c3'     >
        <text class='projectAll_bodyItemfd2_0_c4_c1_c3_c0' >主负责人</text>
<text class='flex-sub projectAll_bodyItemfd2_0_c4_c1_c3_c1' >陈沉沉</text>
</view>
</view>
</view>            <view class="benben_tabsfd2_0-body-item flex flex-direction flex-wrap align-stretch projectAll_bodyfd2_0_c5" v-if=" tabs == '3' " :id="`benben_tabsfd2_0-body-item-${'3'}`">
    <view   class='flex flex-direction flex-wrap align-stretch projectAll_bodyItemfd2_0_c5_c0'  @tap.stop="handleJumpDiy" data-type="navigateTo" :data-url="`/pages/home/progress/progress?type=2`"   >
            <view   class='flex flex-wrap align-center justify-between projectAll_bodyItemfd2_0_c5_c0_c0'     >
            <view   class='flex flex-wrap align-center'     >
        <text class='projectAll_bodyItemfd2_0_c5_c0_c0_c0_c0' >项目编号</text>
<text class='projectAll_bodyItemfd2_0_c5_c0_c0_c0_c1' >2022-N4-001-J</text>
</view>
    <view   class='flex flex-wrap align-center'     >
        <text class='projectAll_bodyItemfd2_0_c5_c0_c0_c1_c0' >已完成</text>
</view>
</view>
    <view   class='flex flex-wrap align-center projectAll_bodyItemfd2_0_c5_c0_c1'     >
        <text class='projectAll_bodyItemfd2_0_c5_c0_c1_c0' >紧急程度</text>
<image class='projectAll_bodyItemfd2_0_c5_c0_c1_c1' mode="aspectFit"  :src='STATIC_URL+"56.png"'></image>
</view>
    <view   class='flex flex-wrap align-start projectAll_bodyItemfd2_0_c5_c0_c2'     >
        <text class='projectAll_bodyItemfd2_0_c5_c0_c2_c0' >项目名称</text>
<text class='flex-sub projectAll_bodyItemfd2_0_c5_c0_c2_c1' >关于二阳县光电产业园基础设施建设项目-园区基础设施改扩建工程</text>
</view>
    <view   class='flex flex-wrap align-center projectAll_bodyItemfd2_0_c5_c0_c3'     >
        <text class='projectAll_bodyItemfd2_0_c5_c0_c3_c0' >主负责人</text>
<text class='flex-sub projectAll_bodyItemfd2_0_c5_c0_c3_c1' >陈沉沉</text>
</view>
</view>
</view>            <view class="benben_tabsfd2_0-body-item flex flex-direction flex-wrap align-stretch projectAll_bodyfd2_0_c6" v-if=" tabs == '4' " :id="`benben_tabsfd2_0-body-item-${'4'}`">
    <view   class='flex flex-direction flex-wrap align-stretch projectAll_bodyItemfd2_0_c6_c0'  @tap.stop="handleJumpDiy" data-type="navigateTo" :data-url="`/pages/home/progress/progress?type=3`"   >
            <view   class='flex flex-wrap align-center justify-between projectAll_bodyItemfd2_0_c6_c0_c0'     >
            <view   class='flex flex-wrap align-center'     >
        <text class='projectAll_bodyItemfd2_0_c6_c0_c0_c0_c0' >项目编号</text>
<text class='projectAll_bodyItemfd2_0_c6_c0_c0_c0_c1' >2022-N4-001-J</text>
</view>
    <view   class='flex flex-wrap align-center'     >
        <text class='projectAll_bodyItemfd2_0_c6_c0_c0_c1_c0' >暂停</text>
</view>
</view>
    <view   class='flex flex-wrap align-center projectAll_bodyItemfd2_0_c6_c0_c1'     >
        <text class='projectAll_bodyItemfd2_0_c6_c0_c1_c0' >紧急程度</text>
    <view   class='flex flex-wrap align-center projectAll_bodyItemfd2_0_c6_c0_c1_c1'     >
        <text class='projectAll_bodyItemfd2_0_c6_c0_c1_c1_c0' >一般</text>
</view>
</view>
    <view   class='flex flex-wrap align-start projectAll_bodyItemfd2_0_c6_c0_c2'     >
        <text class='projectAll_bodyItemfd2_0_c6_c0_c2_c0' >项目名称</text>
<text class='flex-sub projectAll_bodyItemfd2_0_c6_c0_c2_c1' >关于二阳县光电产业园基础设施建设项目-园区基础设施改扩建工程</text>
</view>
    <view   class='flex flex-wrap align-center projectAll_bodyItemfd2_0_c6_c0_c3'     >
        <text class='projectAll_bodyItemfd2_0_c6_c0_c3_c0' >主负责人</text>
<text class='flex-sub projectAll_bodyItemfd2_0_c6_c0_c3_c1' >陈沉沉</text>
</view>
</view>
</view>            <view class="benben_tabsfd2_0-body-item flex flex-direction flex-wrap align-stretch projectAll_bodyfd2_0_c7" v-if=" tabs == '5' " :id="`benben_tabsfd2_0-body-item-${'5'}`">
    <view   class='flex flex-direction flex-wrap align-stretch projectAll_bodyItemfd2_0_c7_c0'  @tap.stop="handleJumpDiy" data-type="navigateTo" :data-url="`/pages/home/progress/progress?type=4`"   >
            <view   class='flex flex-wrap align-center justify-between projectAll_bodyItemfd2_0_c7_c0_c0'     >
            <view   class='flex flex-wrap align-center'     >
        <text class='projectAll_bodyItemfd2_0_c7_c0_c0_c0_c0' >项目编号</text>
<text class='projectAll_bodyItemfd2_0_c7_c0_c0_c0_c1' >2022-N4-001-J</text>
</view>
    <view   class='flex flex-wrap align-center'     >
        <text class='projectAll_bodyItemfd2_0_c7_c0_c0_c1_c0' >失控</text>
</view>
</view>
    <view   class='flex flex-wrap align-center projectAll_bodyItemfd2_0_c7_c0_c1'     >
        <text class='projectAll_bodyItemfd2_0_c7_c0_c1_c0' >紧急程度</text>
    <view   class='flex flex-wrap align-center projectAll_bodyItemfd2_0_c7_c0_c1_c1'     >
        <text class='projectAll_bodyItemfd2_0_c7_c0_c1_c1_c0' >一般</text>
</view>
</view>
    <view   class='flex flex-wrap align-start projectAll_bodyItemfd2_0_c7_c0_c2'     >
        <text class='projectAll_bodyItemfd2_0_c7_c0_c2_c0' >项目名称</text>
<text class='flex-sub projectAll_bodyItemfd2_0_c7_c0_c2_c1' >关于二阳县光电产业园基础设施建设项目-园区基础设施改扩建工程</text>
</view>
    <view   class='flex flex-wrap align-center projectAll_bodyItemfd2_0_c7_c0_c3'     >
        <text class='projectAll_bodyItemfd2_0_c7_c0_c3_c0' >主负责人</text>
<text class='flex-sub projectAll_bodyItemfd2_0_c7_c0_c3_c1' >陈沉沉</text>
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
			return {"tabsInfofd2_0":{ lineleft: '', lineWidth: '', moveX: 0, scrollX: 0, PageScrollX: 0 },"fd0_0_c1":"","cut_id":"","cut_name":[{"name":"我负责的","value":"1","image":"https://zhongben-crm.oss-cn-zhangjiakou.aliyuncs.com/uploads/images/20221017/5762b7b1373ba427dc8a3a60dc65c2d4.png"},{"name":"我参与的","value":"2","image":"https://zhongben-crm.oss-cn-zhangjiakou.aliyuncs.com/uploads/images/20221017/3a38ce4806c01c1a4df4201ef8ff26cd.png"},{"name":"我管理的","value":"3","image":"https://zhongben-crm.oss-cn-zhangjiakou.aliyuncs.com/uploads/images/20221017/4dffe031c99f4dd514aef62bd64a4746.png"},{"name":"已完成的","value":"4","image":"https://zhongben-crm.oss-cn-zhangjiakou.aliyuncs.com/uploads/images/20221017/a6a87524ba929421366bdf1b7947e1ad.png"}],"tabs":"1","variate":"1"};
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
            background:url(/static/images/49.png) no-repeat ,rgba(243, 246, 251, 1);background-size: 100% auto !important;
        }
    .projectAll_flex_0{
        background:#fff;background-size: 100% !important;width:750rpx;height:88rpx;overflow:hidden;z-index:10;top:0rpx;background-size:100% auto !important;
    }
    .projectAll_fd0_0_c1{
        color:#333;font-size:24rpx;font-weight:400;line-height:33rpx;margin:0rpx 0rpx 0rpx 18rpx;
    }
    .projectAll_fd0_0_c0{
        width:32rpx;height:32rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .projectAll_fd0_0{
        background:rgba(243, 246, 251, 1);background-size: 100% !important;margin:19rpx 24rpx 0rpx 24rpx;border-radius:34rpx 34rpx 34rpx 34rpx;padding:12rpx 32rpx 12rpx 32rpx;
    }
    .projectAll_flex_1{
        padding:24rpx 24rpx 0rpx 6rpx;
    }
    .projectAll_fd1_0_c1_c1{
        color:#333333;font-size:26rpx;font-weight:400;line-height:37rpx;
    }
    .projectAll_fd1_0_c1_c0{
        width:72rpx;height:72rpx;border-radius:0rpx 0rpx 0rpx 0rpx;margin:0rpx 0rpx 14rpx 0rpx;
    }
    .projectAll_fd1_0_c1{
        background:#fff;background-size: 100% !important;border-radius:24rpx 24rpx 24rpx 24rpx;margin:0rpx 0rpx 0rpx 18rpx;padding:28rpx 28rpx 27rpx 28rpx;
    }
    .projectAll_fd1_0_c0_c1{
        color:#333333;font-size:26rpx;font-weight:400;line-height:37rpx;margin:14rpx 0rpx 0rpx 0rpx;
    }
    .projectAll_fd1_0_c0_c0{
        width:72rpx;height:72rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .projectAll_fd1_0_c0{
        background:linear-gradient(180deg, #FFFFFF 0%, #C9D8FF 100%);background-size: 100% !important;border-radius:24rpx 24rpx 24rpx 24rpx;margin:0rpx 0rpx 0rpx 18rpx;padding:28rpx 28rpx 27rpx 28rpx;
    }
    .projectAll_bodyItemfd2_0_c7_c0_c3_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .projectAll_bodyItemfd2_0_c7_c0_c3_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .projectAll_bodyItemfd2_0_c7_c0_c3{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .projectAll_bodyItemfd2_0_c7_c0_c2_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .projectAll_bodyItemfd2_0_c7_c0_c2_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .projectAll_bodyItemfd2_0_c7_c0_c2{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .projectAll_bodyItemfd2_0_c7_c0_c1_c1_c0{
        color:#666666;font-size:20rpx;font-weight:500;line-height:28rpx;
    }
    .projectAll_bodyItemfd2_0_c7_c0_c1_c1{
        border:1px solid rgba(102, 102, 102, 1);margin:0rpx 0rpx 0rpx 16rpx;padding:3rpx 8rpx 3rpx 8rpx;border-radius:6rpx 6rpx 6rpx 6rpx;
    }
    .projectAll_bodyItemfd2_0_c7_c0_c1_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .projectAll_bodyItemfd2_0_c7_c0_c1{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .projectAll_bodyItemfd2_0_c7_c0_c0_c1_c0{
        color:#0B1898;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .projectAll_bodyItemfd2_0_c7_c0_c0_c0_c1{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .projectAll_bodyItemfd2_0_c7_c0_c0_c0_c0{
        color:rgba(102, 102, 102, 1);font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .projectAll_bodyItemfd2_0_c7_c0_c0{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:0rpx 0rpx 20rpx 0rpx;
    }
    .projectAll_bodyItemfd2_0_c7_c0{
        background:#fff;background-size: 100% !important;border-radius:16rpx 16rpx 16rpx 16rpx;padding:32rpx 24rpx 32rpx 24rpx;margin:20rpx 0rpx 0rpx 0rpx;
    }
    .projectAll_bodyfd2_0_c7{
        padding:0rpx 24rpx 0rpx 24rpx;
    }
    .projectAll_titlefd2_0_c7{
        font-size:28rpx;color:rgba(102, 102, 102, 1);
    }
    .projectAll_bodyItemfd2_0_c6_c0_c3_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .projectAll_bodyItemfd2_0_c6_c0_c3_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .projectAll_bodyItemfd2_0_c6_c0_c3{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .projectAll_bodyItemfd2_0_c6_c0_c2_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .projectAll_bodyItemfd2_0_c6_c0_c2_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .projectAll_bodyItemfd2_0_c6_c0_c2{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .projectAll_bodyItemfd2_0_c6_c0_c1_c1_c0{
        color:#666666;font-size:20rpx;font-weight:500;line-height:28rpx;
    }
    .projectAll_bodyItemfd2_0_c6_c0_c1_c1{
        border:1px solid rgba(102, 102, 102, 1);margin:0rpx 0rpx 0rpx 16rpx;padding:3rpx 8rpx 3rpx 8rpx;border-radius:6rpx 6rpx 6rpx 6rpx;
    }
    .projectAll_bodyItemfd2_0_c6_c0_c1_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .projectAll_bodyItemfd2_0_c6_c0_c1{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .projectAll_bodyItemfd2_0_c6_c0_c0_c1_c0{
        color:#0B1898;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .projectAll_bodyItemfd2_0_c6_c0_c0_c0_c1{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .projectAll_bodyItemfd2_0_c6_c0_c0_c0_c0{
        color:rgba(102, 102, 102, 1);font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .projectAll_bodyItemfd2_0_c6_c0_c0{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:0rpx 0rpx 20rpx 0rpx;
    }
    .projectAll_bodyItemfd2_0_c6_c0{
        background:#fff;background-size: 100% !important;border-radius:16rpx 16rpx 16rpx 16rpx;padding:32rpx 24rpx 32rpx 24rpx;margin:20rpx 0rpx 0rpx 0rpx;
    }
    .projectAll_bodyfd2_0_c6{
        padding:0rpx 24rpx 0rpx 24rpx;
    }
    .projectAll_titlefd2_0_c6{
        font-size:28rpx;color:rgba(102, 102, 102, 1);
    }
    .projectAll_bodyItemfd2_0_c5_c0_c3_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .projectAll_bodyItemfd2_0_c5_c0_c3_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .projectAll_bodyItemfd2_0_c5_c0_c3{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .projectAll_bodyItemfd2_0_c5_c0_c2_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .projectAll_bodyItemfd2_0_c5_c0_c2_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .projectAll_bodyItemfd2_0_c5_c0_c2{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .projectAll_bodyItemfd2_0_c5_c0_c1_c1{
        width:62rpx;height:34rpx;border-radius:0rpx 0rpx 0rpx 0rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .projectAll_bodyItemfd2_0_c5_c0_c1_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .projectAll_bodyItemfd2_0_c5_c0_c1{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .projectAll_bodyItemfd2_0_c5_c0_c0_c1_c0{
        color:#0B1898;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .projectAll_bodyItemfd2_0_c5_c0_c0_c0_c1{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .projectAll_bodyItemfd2_0_c5_c0_c0_c0_c0{
        color:rgba(102, 102, 102, 1);font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .projectAll_bodyItemfd2_0_c5_c0_c0{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:0rpx 0rpx 20rpx 0rpx;
    }
    .projectAll_bodyItemfd2_0_c5_c0{
        background:#fff;background-size: 100% !important;border-radius:16rpx 16rpx 16rpx 16rpx;padding:32rpx 24rpx 32rpx 24rpx;margin:20rpx 0rpx 0rpx 0rpx;
    }
    .projectAll_bodyfd2_0_c5{
        padding:0rpx 24rpx 0rpx 24rpx;
    }
    .projectAll_titlefd2_0_c5{
        font-size:28rpx;color:rgba(102, 102, 102, 1);
    }
    .projectAll_bodyItemfd2_0_c4_c1_c3_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .projectAll_bodyItemfd2_0_c4_c1_c3_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .projectAll_bodyItemfd2_0_c4_c1_c3{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .projectAll_bodyItemfd2_0_c4_c1_c2_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .projectAll_bodyItemfd2_0_c4_c1_c2_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .projectAll_bodyItemfd2_0_c4_c1_c2{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .projectAll_bodyItemfd2_0_c4_c1_c1_c1_c0{
        color:#666666;font-size:20rpx;font-weight:500;line-height:28rpx;
    }
    .projectAll_bodyItemfd2_0_c4_c1_c1_c1{
        border:1px solid rgba(102, 102, 102, 1);margin:0rpx 0rpx 0rpx 16rpx;padding:3rpx 8rpx 3rpx 8rpx;border-radius:6rpx 6rpx 6rpx 6rpx;
    }
    .projectAll_bodyItemfd2_0_c4_c1_c1_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .projectAll_bodyItemfd2_0_c4_c1_c1{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .projectAll_bodyItemfd2_0_c4_c1_c0_c1_c0{
        color:#0B1898;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .projectAll_bodyItemfd2_0_c4_c1_c0_c0_c1{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .projectAll_bodyItemfd2_0_c4_c1_c0_c0_c0{
        color:rgba(102, 102, 102, 1);font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .projectAll_bodyItemfd2_0_c4_c1_c0{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:0rpx 0rpx 20rpx 0rpx;
    }
    .projectAll_bodyItemfd2_0_c4_c1{
        background:#fff;background-size: 100% !important;border-radius:16rpx 16rpx 16rpx 16rpx;padding:32rpx 24rpx 32rpx 24rpx;margin:20rpx 0rpx 0rpx 0rpx;
    }
    .projectAll_bodyItemfd2_0_c4_c0_c3_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .projectAll_bodyItemfd2_0_c4_c0_c3_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .projectAll_bodyItemfd2_0_c4_c0_c3{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .projectAll_bodyItemfd2_0_c4_c0_c2_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .projectAll_bodyItemfd2_0_c4_c0_c2_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .projectAll_bodyItemfd2_0_c4_c0_c2{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .projectAll_bodyItemfd2_0_c4_c0_c1_c1{
        width:92rpx;height:34rpx;border-radius:0rpx 0rpx 0rpx 0rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .projectAll_bodyItemfd2_0_c4_c0_c1_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .projectAll_bodyItemfd2_0_c4_c0_c1{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .projectAll_bodyItemfd2_0_c4_c0_c0_c1_c0{
        color:#0B1898;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .projectAll_bodyItemfd2_0_c4_c0_c0_c0_c1{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .projectAll_bodyItemfd2_0_c4_c0_c0_c0_c0{
        color:rgba(102, 102, 102, 1);font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .projectAll_bodyItemfd2_0_c4_c0_c0{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:0rpx 0rpx 20rpx 0rpx;
    }
    .projectAll_bodyItemfd2_0_c4_c0{
        background:#fff;background-size: 100% !important;border-radius:16rpx 16rpx 16rpx 16rpx;padding:32rpx 24rpx 32rpx 24rpx;margin:20rpx 0rpx 0rpx 0rpx;
    }
    .projectAll_bodyfd2_0_c4{
        padding:0rpx 24rpx 0rpx 24rpx;
    }
    .projectAll_titlefd2_0_c4{
        font-size:28rpx;color:rgba(102, 102, 102, 1);
    }
    .projectAll_bodyItemfd2_0_c3_c1_c3_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .projectAll_bodyItemfd2_0_c3_c1_c3_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .projectAll_bodyItemfd2_0_c3_c1_c3{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .projectAll_bodyItemfd2_0_c3_c1_c2_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .projectAll_bodyItemfd2_0_c3_c1_c2_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .projectAll_bodyItemfd2_0_c3_c1_c2{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .projectAll_bodyItemfd2_0_c3_c1_c1_c1_c0{
        color:#666666;font-size:20rpx;font-weight:500;line-height:28rpx;
    }
    .projectAll_bodyItemfd2_0_c3_c1_c1_c1{
        border:1px solid rgba(102, 102, 102, 1);margin:0rpx 0rpx 0rpx 16rpx;padding:3rpx 8rpx 3rpx 8rpx;border-radius:6rpx 6rpx 6rpx 6rpx;
    }
    .projectAll_bodyItemfd2_0_c3_c1_c1_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .projectAll_bodyItemfd2_0_c3_c1_c1{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .projectAll_bodyItemfd2_0_c3_c1_c0_c1_c0{
        color:#0B1898;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .projectAll_bodyItemfd2_0_c3_c1_c0_c0_c1{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .projectAll_bodyItemfd2_0_c3_c1_c0_c0_c0{
        color:rgba(102, 102, 102, 1);font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .projectAll_bodyItemfd2_0_c3_c1_c0{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:0rpx 0rpx 20rpx 0rpx;
    }
    .projectAll_bodyItemfd2_0_c3_c1{
        background:#fff;background-size: 100% !important;border-radius:16rpx 16rpx 16rpx 16rpx;padding:32rpx 24rpx 32rpx 24rpx;margin:20rpx 0rpx 0rpx 0rpx;
    }
    .projectAll_bodyItemfd2_0_c3_c0_c3_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .projectAll_bodyItemfd2_0_c3_c0_c3_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .projectAll_bodyItemfd2_0_c3_c0_c3{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .projectAll_bodyItemfd2_0_c3_c0_c2_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .projectAll_bodyItemfd2_0_c3_c0_c2_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .projectAll_bodyItemfd2_0_c3_c0_c2{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .projectAll_bodyItemfd2_0_c3_c0_c1_c1_2{
        width:92rpx;height:34rpx;border-radius:0rpx 0rpx 0rpx 0rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .projectAll_bodyItemfd2_0_c3_c0_c1_c1_1{
        width:92rpx;height:34rpx;border-radius:0rpx 0rpx 0rpx 0rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .projectAll_bodyItemfd2_0_c3_c0_c1_c1{
        width:92rpx;height:34rpx;border-radius:0rpx 0rpx 0rpx 0rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .projectAll_bodyItemfd2_0_c3_c0_c1_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .projectAll_bodyItemfd2_0_c3_c0_c1{
        margin:32rpx 0rpx 0rpx 0rpx;
    }
    .projectAll_bodyItemfd2_0_c3_c0_c0_c1_c0_2{
        color:#0B1898;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .projectAll_bodyItemfd2_0_c3_c0_c0_c1_c0_1{
        color:#0B1898;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .projectAll_bodyItemfd2_0_c3_c0_c0_c1_c0{
        color:#0B1898;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .projectAll_bodyItemfd2_0_c3_c0_c0_c0_c1{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .projectAll_bodyItemfd2_0_c3_c0_c0_c0_c0{
        color:rgba(102, 102, 102, 1);font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .projectAll_bodyItemfd2_0_c3_c0_c0{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:0rpx 0rpx 20rpx 0rpx;
    }
    .projectAll_bodyItemfd2_0_c3_c0{
        background:#fff;background-size: 100% !important;border-radius:16rpx 16rpx 16rpx 16rpx;padding:32rpx 24rpx 32rpx 24rpx;margin:20rpx 0rpx 0rpx 0rpx;
    }
    .projectAll_bodyfd2_0_c3{
        padding:0rpx 24rpx 0rpx 24rpx;
    }
    .projectAll_titlefd2_0_c3{
        font-size:28rpx;color:rgba(102, 102, 102, 1);
    }
    .projectAll_linefd2_0{
        background:url(/static/images/54.png) no-repeat;background-size: 100% !important;width:18rpx;height:6rpx;top:80rpx;background-size:100% auto !important;
    }
    .checkTitlefd2_0{
        font-weight:700 !important;font-size:32rpx !important;color:rgba(11, 24, 152, 1) !important;
    }
    ::v-deep .projectAll_benbenTabsfd2_0{
        width:750rpx;height:90rpx;white-space:nowrap;text-align:center;
    }
</style>