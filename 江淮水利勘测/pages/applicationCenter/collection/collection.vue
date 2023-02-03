<template>
    <view class="page" :style="themeColor">
    <view class="flex flex-wrap align-center justify-between benben-position-layout flex collection_flex_0"    :style="{height:(88+StatusBarRpx)+'rpx',paddingTop:StatusBarRpx+'rpx'}">
            <view   class='flex flex-wrap align-center collection_fd0_0'  @tap.stop="handleJumpDiy" data-type="back" data-url="1"   >
        <text class='fu-iconfont2' >&#xe794;</text>
</view>
<text class='collection_fd0_1' >新增回款</text>
    <view   class='flex flex-wrap align-center collection_fd0_2'     >
        </view>

        </view>
<view :style="{height: (88+StatusBarRpx)+'rpx'}"  ></view>
<!---flex布局flex布局开始-->
 <view class="flex flex-direction flex-wrap align-stretch benben-flex-layout collection_flex_1"   >
            <view   class='flex flex-direction flex-wrap align-stretch collection_fd1_0'     >
            <view   class='flex flex-wrap align-center collection_fd1_0_c0'     >
        <text class='collection_fd1_0_c0_c0' >回款名称</text>
<input class='flex-sub collection_fd1_0_c0_c1'  type="text" placeholder="请输入回款名称" confirm-type="done" :maxlength="-1" :disabled='true' placeholder-style="color:rgba(158, 167, 183, 1);font-size:28rpx"  v-model="fd1_0_c0_c1" />
</view>
    <view   class='flex flex-wrap align-center collection_fd1_0_c1'     >
        <text class='collection_fd1_0_c1_c0' >回款金额(元)</text>
<input class='flex-sub collection_fd1_0_c1_c1'  type="text" placeholder="请输入回款金额" confirm-type="done" :maxlength="-1" :disabled='true' placeholder-style="color:rgba(158, 167, 183, 1);font-size:28rpx"  v-model="fd1_0_c1_c1" />
</view>
    <view   class='flex flex-wrap align-center collection_fd1_0_c2'  @tap.stop="pickerDiy1666260000515=true"   >
        <text class='collection_fd1_0_c2_c0' >回款时间</text>
<input class='flex-sub collection_fd1_0_c2_c1'  type="text" placeholder="选择回款时间" confirm-type="done" :maxlength="-1" :disabled='true' placeholder-style="color:rgba(158, 167, 183, 1);font-size:28rpx"  v-model="cut" />
<image class='collection_fd1_0_c2_c2' mode="aspectFit"  :src='STATIC_URL+"13.png"'></image>
</view>
<text class='collection_fd1_0_c3' >回款说明</text>
<view class='flex flex-wrap collection_fd1_0_c4'>
<textarea class='flex collection_input_fd1_0_c4' confirm-type="done" :placeholder="'请输入回款说明'" :maxlength="240" placeholder-style="color:rgba(158, 167, 183, 1);font-size:28rpx"   v-model="fd1_0_c4" />

</view>
    <view   class='flex flex-wrap align-center collection_fd1_0_c5'     >
        <text class='collection_fd1_0_c5_c0' >回款账号</text>
<input class='flex-sub collection_fd1_0_c5_c1'  type="text" placeholder="请输入回款账号" confirm-type="done" :maxlength="-1" :disabled='true' placeholder-style="color:rgba(158, 167, 183, 1);font-size:28rpx"  v-model="fd1_0_c5_c1" />
</view>
<text class='collection_fd1_0_c6' >回款凭证</text>
<image class='collection_fd1_0_c7' mode="aspectFit"  :src='STATIC_URL+"93.png"'></image>
</view>
</view>
<!---flex布局flex布局结束-->
    <view class="flex flex-direction flex-wrap align-center benben-position-layout flex collection_flex_2"    >
        <button class='collection_fd2_0' >确定</button>

        </view>
<view :style="{height: '136rpx'}"  ></view>
<!--选择器开始 -->
        <benben-picker ref="benbenWritePickerCodepicker3" :visible.sync="pickerDiy1666260000515" :value.sync='cut'  mode='date' :picker-height='88' :current='true' :mask-show='true' fields='day' :timeout='true' start-year='1990-01-01' end-year='2050-12-31' >
            <template #picker-header>
        <view   class='flex flex-wrap align-center justify-between collection_picker3_0'     >
        <text class='collection_picker3_0_c0' @tap="$refs.benbenWritePickerCodepicker3.cancel()" >取消</text>
<text class='collection_picker3_0_c1' >选择时间</text>
<text class='collection_picker3_0_c2' @tap="$refs.benbenWritePickerCodepicker3.pickerConfirm()" >确定</text>
</view>
</template>
        </benben-picker>
<!--选择器结束 -->
    
    </view>
</template>
<script>
    
    export default {
        components:{},
        
        data(){
			return {"pickerDiy1666260000515":false,"fd1_0_c0_c1":"","fd1_0_c1_c1":"","fd1_0_c4":"","fd1_0_c5_c1":"","cut":""};
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
    .collection_flex_0{
        border-bottom:1px solid rgba(238, 238, 238, 1);background:#fff;background-size: 100% !important;width:750rpx;height:88rpx;overflow:hidden;z-index:10;top:0rpx;background-size:100% auto !important;
    }
    .collection_fd0_2{
        width:100rpx;height:88rpx;margin:0rpx 32rpx 0rpx 0rpx;
    }
    .collection_fd0_1{
        color:#000000;font-size:36rpx;font-weight:500;line-height:50rpx;
    }
    .collection_fd0_0{
        width:100rpx;height:88rpx;margin:0rpx 0rpx 0rpx 32rpx;
    }
    .collection_flex_1{
        padding:0rpx 24rpx 0rpx 24rpx;
    }
    .collection_fd1_0_c7{
        width:40rpx;height:40rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .collection_fd1_0_c6{
        color:#333333;font-size:32rpx;font-weight:500;line-height:45rpx;margin:32rpx 0rpx 16rpx 0rpx;
    }
    .collection_fd1_0_c5_c1{
        height:104rpx;color:#333;font-size:28rpx;font-weight:400;line-height:40rpx;text-align:right;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .collection_fd1_0_c5_c0{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .collection_fd1_0_c5{
        border-bottom:1px solid rgba(238, 238, 238, 1);
    }
    .collection_input_fd1_0_c4{
        width:100%;height:186rpx;font-size:28rpx;font-weight:400;color:#333;padding:24rpx 0rpx 0rpx 24rpx;
    }
    .collection_fd1_0_c4{
        background:rgba(243, 246, 251, 1);background-size: 100% !important;width:654rpx;border-radius:8rpx 8rpx 8rpx 8rpx;
    }
    .collection_fd1_0_c3{
        color:#333333;font-size:32rpx;font-weight:500;line-height:45rpx;margin:32rpx 0rpx 24rpx 0rpx;
    }
    .collection_fd1_0_c2_c2{
        width:16rpx;height:28rpx;border-radius:0rpx 0rpx 0rpx 0rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .collection_fd1_0_c2_c1{
        height:104rpx;color:#333;font-size:28rpx;font-weight:400;line-height:40rpx;text-align:right;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .collection_fd1_0_c2_c0{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .collection_fd1_0_c2{
        border-bottom:1px solid rgba(238, 238, 238, 1);
    }
    .collection_fd1_0_c1_c1{
        height:104rpx;color:#333;font-size:28rpx;font-weight:400;line-height:40rpx;text-align:right;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .collection_fd1_0_c1_c0{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .collection_fd1_0_c1{
        border-bottom:1px solid rgba(238, 238, 238, 1);
    }
    .collection_fd1_0_c0_c1{
        height:104rpx;color:#333;font-size:28rpx;font-weight:400;line-height:40rpx;text-align:right;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .collection_fd1_0_c0_c0{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .collection_fd1_0_c0{
        border-bottom:1px solid rgba(238, 238, 238, 1);
    }
    .collection_fd1_0{
        background:#fff;background-size: 100% !important;border-radius:24rpx 24rpx 24rpx 24rpx;padding:0rpx 24rpx 34rpx 24rpx;margin:24rpx 0rpx 0rpx 0rpx;
    }
    .collection_flex_2{
        width:750rpx;height:136rpx;overflow:hidden;z-index:10;bottom:calc(0rpx + var(--window-bottom));
    }
    .collection_fd2_0{
        background:rgba(11, 24, 152, 1);background-size: 100% !important;border-radius:100rpx 100rpx 100rpx 100rpx;font-size:32rpx;color:#fff;width:686rpx;height:88rpx;line-height:88rpx;margin:0rpx 32rpx 0rpx 32rpx;
    }
    .collection_picker3_0_c2{
        color:#0B1898;font-size:32rpx;font-weight:500;line-height:45rpx;
    }
    .collection_picker3_0_c1{
        color:#333333;font-size:32rpx;font-weight:400;line-height:45rpx;
    }
    .collection_picker3_0_c0{
        color:#BFBFBF;font-size:32rpx;font-weight:500;line-height:45rpx;
    }
    .collection_picker3_0{
        border-bottom:1px solid #eee;background:#fff;background-size: 100% !important;padding:0rpx 32rpx 0rpx 32rpx;line-height:88rpx;border-radius:25rpx 25rpx 0rpx 0rpx;background-size:100% auto !important;height:88rpx;
    }
</style>