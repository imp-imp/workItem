<template>
    <view class="page" :style="themeColor">
    <view class="flex flex-wrap align-center justify-between benben-position-layout flex advance_flex_0"    :style="{height:(88+StatusBarRpx)+'rpx',paddingTop:StatusBarRpx+'rpx'}">
            <view   class='flex flex-wrap align-center advance_fd0_0'  @tap.stop="handleJumpDiy" data-type="back" data-url="1"   >
        <text class='fu-iconfont2' >&#xe794;</text>
</view>
<text class='advance_fd0_1' >新增借支</text>
    <view   class='flex flex-wrap align-center advance_fd0_2'     >
        </view>

        </view>
<view :style="{height: (88+StatusBarRpx)+'rpx'}"  ></view>
<!---flex布局flex布局开始-->
 <view class="flex flex-direction flex-wrap align-stretch benben-flex-layout advance_flex_1"   >
            <view   class='flex flex-direction flex-wrap align-stretch advance_fd1_0'     >
            <view   class='flex flex-wrap align-center advance_fd1_0_c0'     >
        <text class='advance_fd1_0_c0_c0' >公司名称</text>
<input class='flex-sub advance_fd1_0_c0_c1'  type="text" placeholder="请选择" confirm-type="done" :maxlength="-1" :disabled='true' placeholder-style="color:rgba(158, 167, 183, 1);font-size:28rpx"  v-model="fd1_0_c0_c1" />
<image class='advance_fd1_0_c0_c2' mode="aspectFit"  :src='STATIC_URL+"13.png"'></image>
</view>
    <view   class='flex flex-wrap align-center advance_fd1_0_c1'     >
        <text class='advance_fd1_0_c1_c0' >支出事由</text>
<input class='flex-sub advance_fd1_0_c1_c1'  type="text" placeholder="请输入支出事由" confirm-type="done" :maxlength="-1" :disabled='true' placeholder-style="color:rgba(158, 167, 183, 1);font-size:28rpx"  v-model="fd1_0_c1_c1" />
</view>
    <view   class='flex flex-wrap align-center advance_fd1_0_c2'     >
        <text class='advance_fd1_0_c2_c0' >支出科目</text>
<input class='flex-sub advance_fd1_0_c2_c1'  type="text" placeholder="请输入支出科目" confirm-type="done" :maxlength="-1" :disabled='true' placeholder-style="color:rgba(158, 167, 183, 1);font-size:28rpx"  v-model="fd1_0_c2_c1" />
</view>
    <view   class='flex flex-wrap align-center advance_fd1_0_c3'     >
        <text class='advance_fd1_0_c3_c0' >支出金额(元)</text>
<input class='flex-sub advance_fd1_0_c3_c1'  type="text" placeholder="请输入支出金额" confirm-type="done" :maxlength="-1" :disabled='true' placeholder-style="color:rgba(158, 167, 183, 1);font-size:28rpx"  v-model="fd1_0_c3_c1" />
</view>
    <view   class='flex flex-wrap align-center advance_fd1_0_c4'  @tap.stop="pickerDiy1666254850851=true"   >
        <text class='advance_fd1_0_c4_c0' >支出状态</text>
<input class='flex-sub advance_fd1_0_c4_c1'  type="text" placeholder="请选择" confirm-type="done" :maxlength="-1" :disabled='true' placeholder-style="color:rgba(158, 167, 183, 1);font-size:28rpx"  v-model="cut_id" />
<image class='advance_fd1_0_c4_c2' mode="aspectFit"  :src='STATIC_URL+"13.png"'></image>
</view>
    <view   class='flex flex-wrap align-center advance_fd1_0_c5'     >
        <text class='advance_fd1_0_c5_c0' >收款名称</text>
<input class='flex-sub advance_fd1_0_c5_c1'  type="text" placeholder="请输入收款名称" confirm-type="done" :maxlength="-1" :disabled='true' placeholder-style="color:rgba(158, 167, 183, 1);font-size:28rpx"  v-model="fd1_0_c5_c1" />
</view>
    <view   class='flex flex-wrap align-center advance_fd1_0_c6'     >
        <text class='advance_fd1_0_c6_c0' >收款账号</text>
<input class='flex-sub advance_fd1_0_c6_c1'  type="text" placeholder="请输入收款账号" confirm-type="done" :maxlength="-1" :disabled='true' placeholder-style="color:rgba(158, 167, 183, 1);font-size:28rpx"  v-model="fd1_0_c6_c1" />
</view>
    <view   class='flex flex-wrap align-center advance_fd1_0_c7'     >
        <text class='advance_fd1_0_c7_c0' >开户银行</text>
<input class='flex-sub advance_fd1_0_c7_c1'  type="text" placeholder="请输入开户银行" confirm-type="done" :maxlength="-1" :disabled='true' placeholder-style="color:rgba(158, 167, 183, 1);font-size:28rpx"  v-model="fd1_0_c7_c1" />
</view>
    <view   class='flex flex-wrap align-center advance_fd1_0_c8'     >
        <text class='advance_fd1_0_c8_c0' >支出账号</text>
<input class='flex-sub advance_fd1_0_c8_c1'  type="text" placeholder="请输入支出账号" confirm-type="done" :maxlength="-1" :disabled='true' placeholder-style="color:rgba(158, 167, 183, 1);font-size:28rpx"  v-model="fd1_0_c8_c1" />
</view>
    <view   class='flex flex-wrap align-center advance_fd1_0_c9'     >
        <text class='advance_fd1_0_c9_c0' >支出时间</text>
<input class='flex-sub advance_fd1_0_c9_c1'  type="text" placeholder="选择支出时间" confirm-type="done" :maxlength="-1" :disabled='true' placeholder-style="color:rgba(158, 167, 183, 1);font-size:28rpx"  v-model="fd1_0_c9_c1" />
<image class='advance_fd1_0_c9_c2' mode="aspectFit"  :src='STATIC_URL+"13.png"'></image>
</view>
    <view   class='flex flex-wrap align-center advance_fd1_0_c10'     >
        <text class='advance_fd1_0_c10_c0' >还款日期</text>
<input class='flex-sub advance_fd1_0_c10_c1'  type="text" placeholder="选择还款日期" confirm-type="done" :maxlength="-1" :disabled='true' placeholder-style="color:rgba(158, 167, 183, 1);font-size:28rpx"  v-model="fd1_0_c10_c1" />
<image class='advance_fd1_0_c10_c2' mode="aspectFit"  :src='STATIC_URL+"13.png"'></image>
</view>
    <view   class='flex flex-wrap align-center advance_fd1_0_c11'     >
        <text class='advance_fd1_0_c11_c0' >借款利息(元)</text>
<input class='flex-sub advance_fd1_0_c11_c1'  type="text" placeholder="请输入借款利息" confirm-type="done" :maxlength="-1" :disabled='true' placeholder-style="color:rgba(158, 167, 183, 1);font-size:28rpx"  v-model="fd1_0_c11_c1" />
</view>
<text class='advance_fd1_0_c12' >支出凭证</text>
<image class='advance_fd1_0_c13' mode="aspectFit"  :src='STATIC_URL+"93.png"'></image>
<text class='advance_fd1_0_c14' >支出附件</text>
    <view   class='flex flex-wrap align-center'     >
        <button class='advance_fd1_0_c15_c0' >上传文件</button>
</view>
</view>
</view>
<!---flex布局flex布局结束-->
<!--选择器开始 -->
        <benben-picker ref="benbenWritePickerCodepicker2" :visible.sync="pickerDiy1666254850851" :label.sync='cut_id' :value.sync='cut_id' :options='cut_name'  mode='selector' :mask-show='true' :timeout='true' :picker-height='88' default-type='value' :default-props='{"label":"name","value":"value"}' >
            <template #picker-header>
        <view   class='flex flex-wrap align-center justify-between advance_picker2_0'     >
        <text class='advance_picker2_0_c0' @tap="$refs.benbenWritePickerCodepicker2.cancel()" >取消</text>
<text class='advance_picker2_0_c1' >选择支出状态</text>
<text class='advance_picker2_0_c2' @tap="$refs.benbenWritePickerCodepicker2.pickerConfirm()" >确定</text>
</view>
</template>
        </benben-picker>
<!--选择器结束 -->
    <view class="flex flex-direction flex-wrap align-center benben-position-layout flex advance_flex_3"    >
        <button class='advance_fd3_0' >确定</button>

        </view>
<view :style="{height: '136rpx'}"  ></view>
    
    </view>
</template>
<script>
    
    export default {
        components:{},
        
        data(){
			return {"pickerDiy1666254850851":false,"fd1_0_c0_c1":"","fd1_0_c1_c1":"","fd1_0_c2_c1":"","fd1_0_c3_c1":"","fd1_0_c5_c1":"","fd1_0_c6_c1":"","fd1_0_c7_c1":"","fd1_0_c8_c1":"","fd1_0_c9_c1":"","fd1_0_c10_c1":"","fd1_0_c11_c1":"","cut_id":"","cut_name":[{"name":"支出中","value":"1","image":""},{"name":"待核销","value":"2","image":""},{"name":"已核销","value":"3","image":""}]};
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
    .advance_flex_0{
        border-bottom:1px solid rgba(238, 238, 238, 1);background:#fff;background-size: 100% !important;width:750rpx;height:88rpx;overflow:hidden;z-index:10;top:0rpx;background-size:100% auto !important;
    }
    .advance_fd0_2{
        width:100rpx;height:88rpx;margin:0rpx 32rpx 0rpx 0rpx;
    }
    .advance_fd0_1{
        color:#000000;font-size:36rpx;font-weight:500;line-height:50rpx;
    }
    .advance_fd0_0{
        width:100rpx;height:88rpx;margin:0rpx 0rpx 0rpx 32rpx;
    }
    .advance_flex_1{
        padding:0rpx 24rpx 0rpx 24rpx;
    }
    .advance_fd1_0_c15_c0{
        border:1px solid #0B1898;background:#fff;background-size: 100% !important;border-radius:28rpx 28rpx 28rpx 28rpx;font-size:24rpx;color:rgba(11, 24, 152, 1);width:160rpx;height:56rpx;line-height:56rpx;
    }
    .advance_fd1_0_c14{
        color:#333333;font-size:24rpx;font-weight:400;line-height:33rpx;margin:20rpx 0rpx 20rpx 0rpx;
    }
    .advance_fd1_0_c13{
        width:40rpx;height:40rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .advance_fd1_0_c12{
        color:#333333;font-size:32rpx;font-weight:500;line-height:45rpx;margin:32rpx 0rpx 16rpx 0rpx;
    }
    .advance_fd1_0_c11_c1{
        height:104rpx;color:#333;font-size:28rpx;font-weight:400;line-height:40rpx;text-align:right;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .advance_fd1_0_c11_c0{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .advance_fd1_0_c11{
        border-bottom:1px solid rgba(238, 238, 238, 1);
    }
    .advance_fd1_0_c10_c2{
        width:16rpx;height:28rpx;border-radius:0rpx 0rpx 0rpx 0rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .advance_fd1_0_c10_c1{
        height:104rpx;color:#333;font-size:28rpx;font-weight:400;line-height:40rpx;text-align:right;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .advance_fd1_0_c10_c0{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .advance_fd1_0_c10{
        border-bottom:1px solid rgba(238, 238, 238, 1);
    }
    .advance_fd1_0_c9_c2{
        width:16rpx;height:28rpx;border-radius:0rpx 0rpx 0rpx 0rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .advance_fd1_0_c9_c1{
        height:104rpx;color:#333;font-size:28rpx;font-weight:400;line-height:40rpx;text-align:right;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .advance_fd1_0_c9_c0{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .advance_fd1_0_c9{
        border-bottom:1px solid rgba(238, 238, 238, 1);
    }
    .advance_fd1_0_c8_c1{
        height:104rpx;color:#333;font-size:28rpx;font-weight:400;line-height:40rpx;text-align:right;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .advance_fd1_0_c8_c0{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .advance_fd1_0_c8{
        border-bottom:1px solid rgba(238, 238, 238, 1);
    }
    .advance_fd1_0_c7_c1{
        height:104rpx;color:#333;font-size:28rpx;font-weight:400;line-height:40rpx;text-align:right;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .advance_fd1_0_c7_c0{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .advance_fd1_0_c7{
        border-bottom:1px solid rgba(238, 238, 238, 1);
    }
    .advance_fd1_0_c6_c1{
        height:104rpx;color:#333;font-size:28rpx;font-weight:400;line-height:40rpx;text-align:right;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .advance_fd1_0_c6_c0{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .advance_fd1_0_c6{
        border-bottom:1px solid rgba(238, 238, 238, 1);
    }
    .advance_fd1_0_c5_c1{
        height:104rpx;color:#333;font-size:28rpx;font-weight:400;line-height:40rpx;text-align:right;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .advance_fd1_0_c5_c0{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .advance_fd1_0_c5{
        border-bottom:1px solid rgba(238, 238, 238, 1);
    }
    .advance_fd1_0_c4_c2{
        width:16rpx;height:28rpx;border-radius:0rpx 0rpx 0rpx 0rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .advance_fd1_0_c4_c1{
        height:104rpx;color:#333;font-size:28rpx;font-weight:400;line-height:40rpx;text-align:right;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .advance_fd1_0_c4_c0{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .advance_fd1_0_c4{
        border-bottom:1px solid rgba(238, 238, 238, 1);
    }
    .advance_fd1_0_c3_c1{
        height:104rpx;color:#333;font-size:28rpx;font-weight:400;line-height:40rpx;text-align:right;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .advance_fd1_0_c3_c0{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .advance_fd1_0_c3{
        border-bottom:1px solid rgba(238, 238, 238, 1);
    }
    .advance_fd1_0_c2_c1{
        height:104rpx;color:#333;font-size:28rpx;font-weight:400;line-height:40rpx;text-align:right;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .advance_fd1_0_c2_c0{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .advance_fd1_0_c2{
        border-bottom:1px solid rgba(238, 238, 238, 1);
    }
    .advance_fd1_0_c1_c1{
        height:104rpx;color:#333;font-size:28rpx;font-weight:400;line-height:40rpx;text-align:right;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .advance_fd1_0_c1_c0{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .advance_fd1_0_c1{
        border-bottom:1px solid rgba(238, 238, 238, 1);
    }
    .advance_fd1_0_c0_c2{
        width:16rpx;height:28rpx;border-radius:0rpx 0rpx 0rpx 0rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .advance_fd1_0_c0_c1{
        height:104rpx;color:#333;font-size:28rpx;font-weight:400;line-height:40rpx;text-align:right;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .advance_fd1_0_c0_c0{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .advance_fd1_0_c0{
        border-bottom:1px solid rgba(238, 238, 238, 1);
    }
    .advance_fd1_0{
        background:#fff;background-size: 100% !important;border-radius:24rpx 24rpx 24rpx 24rpx;padding:0rpx 24rpx 34rpx 24rpx;margin:24rpx 0rpx 0rpx 0rpx;
    }
    .advance_picker2_0_c2{
        color:#0B1898;font-size:28rpx;font-weight:500;line-height:40rpx;
    }
    .advance_picker2_0_c1{
        color:#333333;font-size:36rpx;font-weight:500;line-height:50rpx;
    }
    .advance_picker2_0_c0{
        color:#666666;font-size:28rpx;font-weight:500;line-height:40rpx;
    }
    .advance_picker2_0{
        border-bottom:1px solid #eee;background:#fff;background-size: 100% !important;padding:0rpx 32rpx 0rpx 32rpx;line-height:88rpx;border-radius:25rpx 25rpx 0rpx 0rpx;background-size:100% auto !important;height:88rpx;
    }
    .advance_flex_3{
        width:750rpx;height:136rpx;overflow:hidden;z-index:10;bottom:calc(0rpx + var(--window-bottom));
    }
    .advance_fd3_0{
        background:rgba(11, 24, 152, 1);background-size: 100% !important;border-radius:100rpx 100rpx 100rpx 100rpx;font-size:32rpx;color:#fff;width:686rpx;height:88rpx;line-height:88rpx;margin:0rpx 32rpx 0rpx 32rpx;
    }
</style>