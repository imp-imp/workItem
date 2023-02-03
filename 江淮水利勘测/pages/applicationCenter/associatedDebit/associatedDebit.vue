<template>
    <view class="page" :style="themeColor">
    <view class="flex flex-wrap align-center justify-between benben-position-layout flex associatedDebit_flex_0"    :style="{height:(88+StatusBarRpx)+'rpx',paddingTop:StatusBarRpx+'rpx'}">
            <view   class='flex flex-wrap align-center associatedDebit_fd0_0'  @tap.stop="handleJumpDiy" data-type="back" data-url="1"   >
        <text class='fu-iconfont2' >&#xe794;</text>
</view>
<text class='associatedDebit_fd0_1' >关联借支</text>
    <view   class='flex flex-wrap align-center justify-end associatedDebit_fd0_2'     >
        <text class='associatedDebit_fd0_2_c0' >确定</text>
</view>

        </view>
<view :style="{height: (88+StatusBarRpx)+'rpx'}"  ></view>
<!---flex布局flex布局开始-->
 <view class="flex flex-direction flex-wrap align-stretch benben-flex-layout associatedDebit_flex_1"   >
            <benben-select-diy ref="showSelectPopup1666164785094" class-name='flex flex-direction align-stretch flex' :items.sync="cut_name" v-model="cut_id"  default-type="value" default-label="name" :allow-cancel='false' type="radio" :disabled='false'  >
    <template v-for = '(item,key0) in cut_name'>
            <view v-if="item.isSelected"  class='flex align-center flex associatedDebit_fd1_0_c0' :key="key0" @tap="$refs.showSelectPopup1666164785094.tapHandle(key0)"     >
        <image class='associatedDebit_fd1_0_c0_c0' mode="aspectFit"  :src='STATIC_URL+"75.png"'></image>
    <view   class='flex flex-direction flex-wrap align-stretch flex-sub associatedDebit_fd1_0_c0_c1'     >
            <view   class='flex flex-wrap align-center justify-between associatedDebit_fd1_0_c0_c1_c0'     >
            <view   class='flex flex-wrap align-center'     >
        <text class='associatedDebit_fd1_0_c0_c1_c0_c0_c0' >支出流水号：</text>
<text class='associatedDebit_fd1_0_c0_c1_c0_c0_c1' >JHSL20220901001</text>
</view>
<text class='associatedDebit_fd1_0_c0_c1_c0_c1' >待核销</text>
</view>
    <view   class='flex flex-wrap align-center associatedDebit_fd1_0_c0_c1_c1'     >
        <text class='associatedDebit_fd1_0_c0_c1_c1_c0' >公司名称</text>
<text class='flex-sub associatedDebit_fd1_0_c0_c1_c1_c1' >河南省北纬勘测设计有限公司</text>
</view>
    <view   class='flex flex-wrap align-center associatedDebit_fd1_0_c0_c1_c2'     >
        <text class='associatedDebit_fd1_0_c0_c1_c2_c0' >支出事由</text>
<text class='flex-sub associatedDebit_fd1_0_c0_c1_c2_c1' >汽车加油</text>
</view>
    <view   class='flex flex-wrap align-center'     >
        <text class='associatedDebit_fd1_0_c0_c1_c3_c0' >支出科目</text>
<text class='flex-sub associatedDebit_fd1_0_c0_c1_c3_c1' >车辆费</text>
</view>
    <view   class='flex flex-wrap align-center associatedDebit_fd1_0_c0_c1_c4'     >
        <text class='associatedDebit_fd1_0_c0_c1_c4_c0' >支出金额(元)</text>
<text class='flex-sub associatedDebit_fd1_0_c0_c1_c4_c1' >500</text>
</view>
    <view   class='flex flex-wrap align-center'     >
        <text class='associatedDebit_fd1_0_c0_c1_c5_c0' >已核销金额(元)</text>
<text class='flex-sub associatedDebit_fd1_0_c0_c1_c5_c1' >300</text>
</view>
    <view   class='flex flex-wrap align-center associatedDebit_fd1_0_c0_c1_c6'     >
        <text class='associatedDebit_fd1_0_c0_c1_c6_c0' >剩余核销金额(元)</text>
<text class='flex-sub associatedDebit_fd1_0_c0_c1_c6_c1' >300</text>
</view>
    <view   class='flex flex-wrap align-center'     >
        <text class='associatedDebit_fd1_0_c0_c1_c7_c0' >本次核销金额(元)：</text>
    <view   class='flex flex-wrap align-center flex-sub associatedDebit_fd1_0_c0_c1_c7_c1'     >
        <input class='associatedDebit_fd1_0_c0_c1_c7_c1_c0'  type="text" placeholder="请输入" confirm-type="done" :maxlength="-1" placeholder-style="color:#999;font-size:28rpx"  v-model="fd1_0_c0_c1_c7_c1_c0" />
</view>
</view>
</view>
</view>    <view  v-else  class='flex align-center flex associatedDebit_fd1_0_c1' :key="key0" @tap="$refs.showSelectPopup1666164785094.tapHandle(key0)"     >
        <image class='associatedDebit_fd1_0_c1_c0' mode="aspectFit"  :src='STATIC_URL+"76.png"'></image>
    <view   class='flex flex-direction flex-wrap align-stretch flex-sub associatedDebit_fd1_0_c1_c1'     >
            <view   class='flex flex-wrap align-center justify-between associatedDebit_fd1_0_c1_c1_c0'     >
            <view   class='flex flex-wrap align-center'     >
        <text class='associatedDebit_fd1_0_c1_c1_c0_c0_c0' >支出流水号：</text>
<text class='associatedDebit_fd1_0_c1_c1_c0_c0_c1' >JHSL20220901001</text>
</view>
<text class='associatedDebit_fd1_0_c1_c1_c0_c1' >待核销</text>
</view>
    <view   class='flex flex-wrap align-center associatedDebit_fd1_0_c1_c1_c1'     >
        <text class='associatedDebit_fd1_0_c1_c1_c1_c0' >公司名称</text>
<text class='flex-sub associatedDebit_fd1_0_c1_c1_c1_c1' >河南省北纬勘测设计有限公司</text>
</view>
    <view   class='flex flex-wrap align-center associatedDebit_fd1_0_c1_c1_c2'     >
        <text class='associatedDebit_fd1_0_c1_c1_c2_c0' >支出事由</text>
<text class='flex-sub associatedDebit_fd1_0_c1_c1_c2_c1' >汽车加油</text>
</view>
    <view   class='flex flex-wrap align-center'     >
        <text class='associatedDebit_fd1_0_c1_c1_c3_c0' >支出科目</text>
<text class='flex-sub associatedDebit_fd1_0_c1_c1_c3_c1' >车辆费</text>
</view>
    <view   class='flex flex-wrap align-center associatedDebit_fd1_0_c1_c1_c4'     >
        <text class='associatedDebit_fd1_0_c1_c1_c4_c0' >支出金额(元)</text>
<text class='flex-sub associatedDebit_fd1_0_c1_c1_c4_c1' >500</text>
</view>
    <view   class='flex flex-wrap align-center'     >
        <text class='associatedDebit_fd1_0_c1_c1_c5_c0' >已核销金额(元)</text>
<text class='flex-sub associatedDebit_fd1_0_c1_c1_c5_c1' >300</text>
</view>
    <view   class='flex flex-wrap align-center associatedDebit_fd1_0_c1_c1_c6'     >
        <text class='associatedDebit_fd1_0_c1_c1_c6_c0' >剩余核销金额(元)</text>
<text class='flex-sub associatedDebit_fd1_0_c1_c1_c6_c1' >300</text>
</view>
    <view   class='flex flex-wrap align-center'     >
        <text class='associatedDebit_fd1_0_c1_c1_c7_c0' >本次核销金额(元)：</text>
    <view   class='flex flex-wrap align-center flex-sub associatedDebit_fd1_0_c1_c1_c7_c1'     >
        <input class='associatedDebit_fd1_0_c1_c1_c7_c1_c0'  type="text" placeholder="请输入" confirm-type="done" :maxlength="-1" placeholder-style="color:#999;font-size:28rpx"  v-model="fd1_0_c1_c1_c7_c1_c0" />
</view>
</view>
</view>
</view></template></benben-select-diy>
</view>
<!---flex布局flex布局结束-->
    
    </view>
</template>
<script>
    
    export default {
        components:{},
        
        data(){
			return {"fd1_0_c0_c1_c7_c1_c0":"","fd1_0_c1_c1_c7_c1_c0":"","cut_id":"","cut_name":[{"name":"","value":"1","image":""},{"name":"","value":"2","image":""},{"name":"","value":"3","image":""}]};
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
    .associatedDebit_flex_0{
        border-bottom:1px solid rgba(238, 238, 238, 1);background:#fff;background-size: 100% !important;width:750rpx;height:88rpx;overflow:hidden;z-index:10;top:0rpx;background-size:100% auto !important;
    }
    .associatedDebit_fd0_2_c0{
        color:#0B1898;font-size:28rpx;font-weight:500;line-height:40rpx;
    }
    .associatedDebit_fd0_2{
        width:100rpx;height:88rpx;margin:0rpx 32rpx 0rpx 0rpx;
    }
    .associatedDebit_fd0_1{
        color:#000000;font-size:36rpx;font-weight:500;line-height:50rpx;
    }
    .associatedDebit_fd0_0{
        width:100rpx;height:88rpx;margin:0rpx 0rpx 0rpx 32rpx;
    }
    .associatedDebit_flex_1{
        padding:4rpx 24rpx 0rpx 24rpx;
    }
    .associatedDebit_fd1_0_c1_c1_c7_c1_c0{
        color:#333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .associatedDebit_fd1_0_c1_c1_c7_c1{
        border:1px solid #EEEEEE;border-radius:8rpx 8rpx 8rpx 8rpx;padding:12rpx 16rpx 12rpx 16rpx;margin:0rpx 0rpx 0rpx 24rpx;
    }
    .associatedDebit_fd1_0_c1_c1_c7_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .associatedDebit_fd1_0_c1_c1_c6_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 23rpx;
    }
    .associatedDebit_fd1_0_c1_c1_c6_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .associatedDebit_fd1_0_c1_c1_c6{
        margin:24rpx 0rpx 24rpx 0rpx;
    }
    .associatedDebit_fd1_0_c1_c1_c5_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 51rpx;
    }
    .associatedDebit_fd1_0_c1_c1_c5_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .associatedDebit_fd1_0_c1_c1_c4_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 79rpx;
    }
    .associatedDebit_fd1_0_c1_c1_c4_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .associatedDebit_fd1_0_c1_c1_c4{
        margin:24rpx 0rpx 24rpx 0rpx;
    }
    .associatedDebit_fd1_0_c1_c1_c3_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 126rpx;
    }
    .associatedDebit_fd1_0_c1_c1_c3_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .associatedDebit_fd1_0_c1_c1_c2_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 126rpx;
    }
    .associatedDebit_fd1_0_c1_c1_c2_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .associatedDebit_fd1_0_c1_c1_c2{
        margin:24rpx 0rpx 24rpx 0rpx;
    }
    .associatedDebit_fd1_0_c1_c1_c1_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 126rpx;
    }
    .associatedDebit_fd1_0_c1_c1_c1_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .associatedDebit_fd1_0_c1_c1_c1{
        margin:0rpx 0rpx 0rpx 0rpx;
    }
    .associatedDebit_fd1_0_c1_c1_c0_c1{
        color:#0B1898;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .associatedDebit_fd1_0_c1_c1_c0_c0_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .associatedDebit_fd1_0_c1_c1_c0_c0_c0{
        color:rgba(102, 102, 102, 1);font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .associatedDebit_fd1_0_c1_c1_c0{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:0rpx 0rpx 20rpx 0rpx;margin:0rpx 0rpx 32rpx 0rpx;
    }
    .associatedDebit_fd1_0_c1_c1{
        background:#fff;background-size: 100% !important;margin:0rpx 0rpx 0rpx 24rpx;padding:31rpx 16rpx 32rpx 24rpx;border-radius:16rpx 16rpx 16rpx 16rpx;
    }
    .associatedDebit_fd1_0_c1_c0{
        width:36rpx;height:36rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .associatedDebit_fd1_0_c1{
        margin:20rpx 0rpx 0rpx 0rpx;
    }
    .associatedDebit_fd1_0_c0_c1_c7_c1_c0{
        color:#333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .associatedDebit_fd1_0_c0_c1_c7_c1{
        border:1px solid #EEEEEE;border-radius:8rpx 8rpx 8rpx 8rpx;padding:12rpx 16rpx 12rpx 16rpx;margin:0rpx 0rpx 0rpx 24rpx;
    }
    .associatedDebit_fd1_0_c0_c1_c7_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .associatedDebit_fd1_0_c0_c1_c6_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 23rpx;
    }
    .associatedDebit_fd1_0_c0_c1_c6_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .associatedDebit_fd1_0_c0_c1_c6{
        margin:24rpx 0rpx 24rpx 0rpx;
    }
    .associatedDebit_fd1_0_c0_c1_c5_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 51rpx;
    }
    .associatedDebit_fd1_0_c0_c1_c5_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .associatedDebit_fd1_0_c0_c1_c4_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 79rpx;
    }
    .associatedDebit_fd1_0_c0_c1_c4_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .associatedDebit_fd1_0_c0_c1_c4{
        margin:24rpx 0rpx 24rpx 0rpx;
    }
    .associatedDebit_fd1_0_c0_c1_c3_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 126rpx;
    }
    .associatedDebit_fd1_0_c0_c1_c3_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .associatedDebit_fd1_0_c0_c1_c2_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 126rpx;
    }
    .associatedDebit_fd1_0_c0_c1_c2_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .associatedDebit_fd1_0_c0_c1_c2{
        margin:24rpx 0rpx 24rpx 0rpx;
    }
    .associatedDebit_fd1_0_c0_c1_c1_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 0rpx 0rpx 126rpx;
    }
    .associatedDebit_fd1_0_c0_c1_c1_c0{
        color:#666666;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .associatedDebit_fd1_0_c0_c1_c1{
        margin:0rpx 0rpx 0rpx 0rpx;
    }
    .associatedDebit_fd1_0_c0_c1_c0_c1{
        color:#0B1898;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .associatedDebit_fd1_0_c0_c1_c0_c0_c1{
        color:#1F1F1F;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .associatedDebit_fd1_0_c0_c1_c0_c0_c0{
        color:rgba(102, 102, 102, 1);font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .associatedDebit_fd1_0_c0_c1_c0{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:0rpx 0rpx 20rpx 0rpx;margin:0rpx 0rpx 32rpx 0rpx;
    }
    .associatedDebit_fd1_0_c0_c1{
        background:#fff;background-size: 100% !important;margin:0rpx 0rpx 0rpx 24rpx;padding:31rpx 16rpx 32rpx 24rpx;border-radius:16rpx 16rpx 16rpx 16rpx;
    }
    .associatedDebit_fd1_0_c0_c0{
        width:36rpx;height:36rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .associatedDebit_fd1_0_c0{
        margin:20rpx 0rpx 0rpx 0rpx;
    }
</style>