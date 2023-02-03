<template>
    <view class="page" :style="themeColor">
    <view class="flex flex-wrap align-center justify-between benben-position-layout flex reimbursement_flex_0"    :style="{height:(88+StatusBarRpx)+'rpx',paddingTop:StatusBarRpx+'rpx'}">
            <view   class='flex flex-wrap align-center reimbursement_fd0_0'  @tap.stop="handleJumpDiy" data-type="back" data-url="1"   >
        <text class='fu-iconfont2' >&#xe794;</text>
</view>
<text class='reimbursement_fd0_1' >新增报销</text>
    <view   class='flex flex-wrap align-center reimbursement_fd0_2'     >
        </view>

        </view>
<view :style="{height: (88+StatusBarRpx)+'rpx'}"  ></view>
<!--选择报销类型开始 -->
        <benben-picker ref="benbenWritePickerCodepicker1" :visible.sync="pickerDiy1665802695907" :label.sync='cut_id' :value.sync='cut_id' :options='cut_name'  mode='selector' :mask-show='true' :timeout='true' :picker-height='88' default-type='value' :default-props='{"label":"name","value":"value"}' >
            <template #picker-header>
        <view   class='flex flex-wrap align-center justify-between reimbursement_picker1_0'     >
        <text class='reimbursement_picker1_0_c0' @tap="$refs.benbenWritePickerCodepicker1.cancel()" >取消</text>
<text class='reimbursement_picker1_0_c1' >报销类型</text>
<text class='reimbursement_picker1_0_c2' @tap="$refs.benbenWritePickerCodepicker1.pickerConfirm()" >确定</text>
</view>
</template>
        </benben-picker>
<!--选择报销类型结束 -->
<!---flex布局flex布局开始-->
 <view class="flex flex-direction flex-wrap align-stretch benben-flex-layout reimbursement_flex_2"   >
            <view   class='flex flex-direction flex-wrap align-stretch reimbursement_fd2_0'     >
            <view   class='flex flex-wrap align-center justify-between reimbursement_fd2_0_c0'     >
        <text class='reimbursement_fd2_0_c0_c0' >公司名称</text>
    <view   class='flex flex-wrap align-center flex-sub reimbursement_fd2_0_c0_c1'     >
        <input class='flex-sub reimbursement_fd2_0_c0_c1_c0'  type="text" placeholder="请选择" confirm-type="done" :maxlength="-1" :disabled='true' placeholder-style="color:#999;font-size:28rpx"  v-model="fd2_0_c0_c1_c0" />
<image class='reimbursement_fd2_0_c0_c1_c1' mode="aspectFit"  :src='STATIC_URL+"27.png"'></image>
</view>
</view>
    <view   class='flex flex-wrap align-center justify-between reimbursement_fd2_0_c1'  @tap.stop="pickerDiy1665803303567=true"   >
        <text class='reimbursement_fd2_0_c1_c0' >报销部门</text>
    <view   class='flex flex-wrap align-center flex-sub reimbursement_fd2_0_c1_c1'     >
        <input class='flex-sub reimbursement_fd2_0_c1_c1_c0'  type="text" placeholder="请选择" confirm-type="done" :maxlength="-1" :disabled='true' placeholder-style="color:#999;font-size:28rpx"  v-model="department_id" />
<image class='reimbursement_fd2_0_c1_c1_c1' mode="aspectFit"  :src='STATIC_URL+"27.png"'></image>
</view>
</view>
    <view   class='flex flex-wrap align-center justify-between reimbursement_fd2_0_c2'  @tap.stop="pickerDiy1665803068213=true"   >
        <text class='reimbursement_fd2_0_c2_c0' >项目名称</text>
    <view   class='flex flex-wrap align-center flex-sub reimbursement_fd2_0_c2_c1'     >
        <input class='flex-sub reimbursement_fd2_0_c2_c1_c0'  type="text" placeholder="请选择" confirm-type="done" :maxlength="-1" :disabled='true' placeholder-style="color:#999;font-size:28rpx"  v-model="project_id" />
<image class='reimbursement_fd2_0_c2_c1_c1' mode="aspectFit"  :src='STATIC_URL+"27.png"'></image>
</view>
</view>
    <view   class='flex flex-wrap align-center justify-between reimbursement_fd2_0_c3'     >
        <text class='reimbursement_fd2_0_c3_c0' >项目编号</text>
    <view   class='flex flex-wrap align-center flex-sub reimbursement_fd2_0_c3_c1'     >
        <input class='flex-sub reimbursement_fd2_0_c3_c1_c0'  type="text" placeholder="选择项目后自动显示" confirm-type="done" :maxlength="-1" :disabled='true' placeholder-style="color:#999;font-size:28rpx"  v-model="fd2_0_c3_c1_c0" />
</view>
</view>
    <view   class='flex flex-wrap align-center justify-between reimbursement_fd2_0_c4'  @tap.stop="handleJumpDiy" data-type="navigateTo" :data-url="`/pages/applicationCenter/associatedDebit/associatedDebit`"   >
        <text class='reimbursement_fd2_0_c4_c0' >关联借支</text>
    <view   class='flex flex-wrap align-center flex-sub reimbursement_fd2_0_c4_c1'     >
        <input class='flex-sub reimbursement_fd2_0_c4_c1_c0'  type="text" placeholder="请选择" confirm-type="done" :maxlength="-1" :disabled='true' placeholder-style="color:#999;font-size:28rpx"  v-model="fd2_0_c4_c1_c0" />
<image class='reimbursement_fd2_0_c4_c1_c1' mode="aspectFit"  :src='STATIC_URL+"27.png"'></image>
</view>
</view>
</view>
    <view   class='flex flex-direction flex-wrap align-stretch reimbursement_fd2_1'     >
        <text class='reimbursement_fd2_1_c0' >报销总金额(元)</text>
    <view   class='flex flex-wrap align-center reimbursement_fd2_1_c1'     >
        <input class='flex-sub reimbursement_fd2_1_c1_c0'  type="text" placeholder="根据下方汇总自动显示" confirm-type="done" :maxlength="-1" :disabled='true' placeholder-style="color:#999;font-size:28rpx"  v-model="fd2_1_c1_c0" />
</view>
<text class='reimbursement_fd2_1_c2' >核销总金额(元)</text>
    <view   class='flex flex-wrap align-center reimbursement_fd2_1_c3'     >
        <input class='flex-sub reimbursement_fd2_1_c3_c0'  type="text" placeholder="根据关联借支中填写的核销金额自动汇总" confirm-type="done" :maxlength="-1" :disabled='true' placeholder-style="color:#999;font-size:28rpx"  v-model="fd2_1_c3_c0" />
</view>
<text class='reimbursement_fd2_1_c4' >实际报销金额(元)</text>
    <view   class='flex flex-wrap align-center reimbursement_fd2_1_c5'     >
        <input class='flex-sub reimbursement_fd2_1_c5_c0'  type="text" placeholder="根据报销与核销总金额自动汇总" confirm-type="done" :maxlength="-1" :disabled='true' placeholder-style="color:#999;font-size:28rpx"  v-model="fd2_1_c5_c0" />
</view>
</view>
    <view   class='flex flex-direction flex-wrap align-stretch reimbursement_fd2_2'     >
            <view   class='flex flex-wrap align-center justify-between reimbursement_fd2_2_c0'  @tap.stop="pickerDiy1665802695907=true"   >
        <text class='reimbursement_fd2_2_c0_c0' >报销类型</text>
    <view   class='flex flex-wrap align-center flex-sub reimbursement_fd2_2_c0_c1'     >
        <input class='flex-sub reimbursement_fd2_2_c0_c1_c0'  type="text" placeholder="请选择" confirm-type="done" :maxlength="-1" :disabled='true' placeholder-style="color:#999;font-size:28rpx"  v-model="cut_id" />
<image class='reimbursement_fd2_2_c0_c1_c1' mode="aspectFit"  :src='STATIC_URL+"27.png"'></image>
</view>
</view>
    <view   class='flex flex-wrap align-center justify-between reimbursement_fd2_2_c1'  @tap.stop="pickerDiy1665803104149=true"   >
        <text class='reimbursement_fd2_2_c1_c0' >费用类型</text>
    <view   class='flex flex-wrap align-center flex-sub reimbursement_fd2_2_c1_c1'     >
        <input class='flex-sub reimbursement_fd2_2_c1_c1_c0'  type="text" placeholder="请选择" confirm-type="done" :maxlength="-1" :disabled='true' placeholder-style="color:#999;font-size:28rpx"  v-model="cost_id" />
<image class='reimbursement_fd2_2_c1_c1_c1' mode="aspectFit"  :src='STATIC_URL+"27.png"'></image>
</view>
</view>
    <view   class='flex flex-wrap align-center justify-between reimbursement_fd2_2_c2'     >
        <text class='reimbursement_fd2_2_c2_c0' >报销金额(元)</text>
    <view   class='flex flex-wrap align-center flex-sub reimbursement_fd2_2_c2_c1'     >
        <input class='flex-sub reimbursement_fd2_2_c2_c1_c0'  type="text" placeholder="请输入报销金额" confirm-type="done" :maxlength="-1" placeholder-style="color:#999;font-size:28rpx"  v-model="fd2_2_c2_c1_c0" />
</view>
</view>
<text class='reimbursement_fd2_2_c3' >报销内容</text>
<view class='flex flex-wrap reimbursement_fd2_2_c4'>
<textarea class='flex reimbursement_input_fd2_2_c4' confirm-type="done" :placeholder="'请输入报销内容'" :maxlength="240" placeholder-style="color:#999;font-size:28rpx"   v-model="fd2_2_c4" />

</view>
    <view   class='flex flex-wrap align-center justify-between reimbursement_fd2_2_c5'     >
        <text class='reimbursement_fd2_2_c5_c0' >凭证张数</text>
    <view   class='flex flex-wrap align-center flex-sub reimbursement_fd2_2_c5_c1'     >
        <input class='flex-sub reimbursement_fd2_2_c5_c1_c0'  type="text" placeholder="请输入数量" confirm-type="done" :maxlength="-1" placeholder-style="color:#999;font-size:28rpx"  v-model="fd2_2_c5_c1_c0" />
</view>
</view>
<text class='reimbursement_fd2_2_c6' >报销凭证</text>
<image class='reimbursement_fd2_2_c7' mode="aspectFit"  :src='STATIC_URL+"111.jpg"'></image>
</view>
    <view   class='flex flex-wrap align-center justify-center reimbursement_fd2_3'     >
        <text class='fu-iconfont2  reimbursement_fd2_3_c0' >&#xe749;</text>
<text class='reimbursement_fd2_3_c1' >继续添加</text>
</view>
</view>
<!---flex布局flex布局结束-->
<!--选择部门开始 -->
        <benben-picker ref="benbenWritePickerCodepicker3" :visible.sync="pickerDiy1665803303567" :label.sync='department_id' :value.sync='department_id' :options='department_name'  mode='selector' :mask-show='true' :timeout='true' :picker-height='88' default-type='value' :default-props='{"label":"name","value":"value"}' >
            <template #picker-header>
        <view   class='flex flex-wrap align-center justify-between reimbursement_picker3_0'     >
        <text class='reimbursement_picker3_0_c0' @tap="$refs.benbenWritePickerCodepicker3.cancel()" >取消</text>
<text class='reimbursement_picker3_0_c1' >报销部门</text>
<text class='reimbursement_picker3_0_c2' @tap="$refs.benbenWritePickerCodepicker3.pickerConfirm()" >确定</text>
</view>
</template>
        </benben-picker>
<!--选择部门结束 -->
<!--选择项目开始 -->
        <benben-picker ref="benbenWritePickerCodepicker4" :visible.sync="pickerDiy1665803068213" :label.sync='project_id' :value.sync='project_id' :options='project_name'  mode='selector' :mask-show='true' :timeout='true' :picker-height='88' default-type='value' :default-props='{"label":"name","value":"value"}' >
            <template #picker-header>
        <view   class='flex flex-wrap align-center justify-between reimbursement_picker4_0'     >
        <text class='reimbursement_picker4_0_c0' @tap="$refs.benbenWritePickerCodepicker4.cancel()" >取消</text>
<text class='reimbursement_picker4_0_c1' >选择项目</text>
<text class='reimbursement_picker4_0_c2' @tap="$refs.benbenWritePickerCodepicker4.pickerConfirm()" >确定</text>
</view>
</template>
        </benben-picker>
<!--选择项目结束 -->
<!--选择费用类型开始 -->
        <benben-picker ref="benbenWritePickerCodepicker5" :visible.sync="pickerDiy1665803104149" :label.sync='cost_id' :value.sync='cost_id' :options='cost_name'  mode='selector' :mask-show='true' :timeout='true' :picker-height='88' default-type='value' :default-props='{"label":"name","value":"value"}' >
            <template #picker-header>
        <view   class='flex flex-wrap align-center justify-between reimbursement_picker5_0'     >
        <text class='reimbursement_picker5_0_c0' @tap="$refs.benbenWritePickerCodepicker5.cancel()" >取消</text>
<text class='reimbursement_picker5_0_c1' >费用类型</text>
<text class='reimbursement_picker5_0_c2' @tap="$refs.benbenWritePickerCodepicker5.pickerConfirm()" >确定</text>
</view>
</template>
        </benben-picker>
<!--选择费用类型结束 -->
    <view class="flex flex-direction flex-wrap align-center benben-position-layout flex reimbursement_flex_6"    >
        <button class='reimbursement_fd6_0' @tap.stop="handleJumpDiy" data-type="back" data-url="1"  >确定</button>

        </view>
<view :style="{height: '117rpx'}"  ></view>
    
    </view>
</template>
<script>
    
    export default {
        components:{},
        
        data(){
			return {"pickerDiy1665803104149":false,"pickerDiy1665803068213":false,"pickerDiy1665803303567":false,"fd2_0_c0_c1_c0":"","fd2_0_c3_c1_c0":"","fd2_0_c4_c1_c0":"","fd2_1_c1_c0":"","fd2_1_c3_c0":"","fd2_1_c5_c0":"","fd2_2_c2_c1_c0":"","fd2_2_c4":"","fd2_2_c5_c1_c0":"","pickerDiy1665802695907":false,"cut_id":"","cut_name":[{"name":"差旅费","value":"1","image":""},{"name":"车辆费","value":"2","image":""},{"name":"车辆保险费","value":"3","image":""},{"name":"办公费","value":"4","image":""},{"name":"招待费","value":"5","image":""}],"department_name":[{"name":"经营部","value":"1","image":""},{"name":"投资部","value":"2","image":""},{"name":"总工室","value":"3","image":""},{"name":"财务部","value":"4","image":""},{"name":"综合部","value":"5","image":""}],"department_id":"","project_name":[{"name":"山县绿化施工项目","value":"1","image":""},{"name":"乡村光电产业园光电项目","value":"2","image":""},{"name":"关于二阳县光电产业园基础设施建设项目…","value":"3","image":""},{"name":"山乡归园田居美丽乡村样板片区工程…","value":"4","image":""},{"name":"运河街道美丽乡村扩面东新村15组环境","value":"5","image":""}],"project_id":"","cost_name":[{"name":"飞机票","value":"1","image":""},{"name":"火车票","value":"2","image":""},{"name":"住宿费","value":"3","image":""},{"name":"餐饮费","value":"4","image":""},{"name":"礼品费","value":"5","image":""}],"cost_id":""};
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
    .reimbursement_flex_0{
        background:#fff;background-size: 100% !important;width:750rpx;height:88rpx;overflow:hidden;z-index:10;top:0rpx;background-size:100% auto !important;
    }
    .reimbursement_fd0_2{
        width:100rpx;height:88rpx;margin:0rpx 32rpx 0rpx 0rpx;
    }
    .reimbursement_fd0_1{
        color:#000000;font-size:36rpx;font-weight:500;line-height:50rpx;
    }
    .reimbursement_fd0_0{
        width:100rpx;height:88rpx;margin:0rpx 0rpx 0rpx 32rpx;
    }
    .reimbursement_picker1_0_c2{
        color:#0B1898;font-size:28rpx;font-weight:500;line-height:40rpx;
    }
    .reimbursement_picker1_0_c1{
        color:#333333;font-size:36rpx;font-weight:500;line-height:50rpx;
    }
    .reimbursement_picker1_0_c0{
        color:#666666;font-size:28rpx;font-weight:500;line-height:40rpx;
    }
    .reimbursement_picker1_0{
        border-bottom:1px solid #eee;background:#fff;background-size: 100% !important;padding:0rpx 32rpx 0rpx 32rpx;line-height:88rpx;border-radius:25rpx 25rpx 0rpx 0rpx;background-size:100% auto !important;height:88rpx;
    }
    .reimbursement_flex_2{
        padding:0rpx 24rpx 0rpx 24rpx;
    }
    .reimbursement_fd2_3_c1{
        color:#0B1898;font-size:32rpx;font-weight:400;line-height:45rpx;margin:0rpx 0rpx 0rpx 16rpx;
    }
    .reimbursement_fd2_3_c0{
        color:rgba(11, 24, 152, 1);
    }
    .reimbursement_fd2_3{
        margin:57rpx 0rpx 40rpx 0rpx;
    }
    .reimbursement_fd2_2_c7{
        width:40rpx;height:40rpx;border-radius:0rpx 0rpx 0rpx 0rpx;margin:16rpx 0rpx 32rpx 0rpx;
    }
    .reimbursement_fd2_2_c6{
        color:#333333;font-size:32rpx;font-weight:500;line-height:45rpx;
    }
    .reimbursement_fd2_2_c5_c1_c0{
        height:104rpx;text-align:right;color:#333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .reimbursement_fd2_2_c5_c1{
        margin:0rpx 0rpx 0rpx 24rpx;
    }
    .reimbursement_fd2_2_c5_c0{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .reimbursement_fd2_2_c5{
        border-bottom:1px solid rgba(238, 238, 238, 1);margin:0rpx 0rpx 32rpx 0rpx;
    }
    .reimbursement_input_fd2_2_c4{
        width:100%;height:140rpx;font-size:28rpx;font-weight:400;color:#333;padding:24rpx 0rpx 0rpx 24rpx;
    }
    .reimbursement_fd2_2_c4{
        background:rgba(243, 246, 251, 1);background-size: 100% !important;width:654rpx;border-radius:8rpx 8rpx 8rpx 8rpx;
    }
    .reimbursement_fd2_2_c3{
        color:#333333;font-size:32rpx;font-weight:500;line-height:45rpx;margin:32rpx 0rpx 24rpx 0rpx;
    }
    .reimbursement_fd2_2_c2_c1_c0{
        height:104rpx;text-align:right;color:#333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .reimbursement_fd2_2_c2_c1{
        margin:0rpx 0rpx 0rpx 24rpx;
    }
    .reimbursement_fd2_2_c2_c0{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .reimbursement_fd2_2_c2{
        border-bottom:1px solid rgba(238, 238, 238, 1);
    }
    .reimbursement_fd2_2_c1_c1_c1{
        width:16rpx;height:28rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .reimbursement_fd2_2_c1_c1_c0{
        height:104rpx;text-align:right;color:#333;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 16rpx 0rpx 0rpx;
    }
    .reimbursement_fd2_2_c1_c1{
        margin:0rpx 0rpx 0rpx 24rpx;
    }
    .reimbursement_fd2_2_c1_c0{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .reimbursement_fd2_2_c1{
        border-bottom:1px solid rgba(238, 238, 238, 1);
    }
    .reimbursement_fd2_2_c0_c1_c1{
        width:16rpx;height:28rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .reimbursement_fd2_2_c0_c1_c0{
        height:104rpx;text-align:right;color:#333;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 16rpx 0rpx 0rpx;
    }
    .reimbursement_fd2_2_c0_c1{
        margin:0rpx 0rpx 0rpx 24rpx;
    }
    .reimbursement_fd2_2_c0_c0{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .reimbursement_fd2_2_c0{
        border-bottom:1px solid rgba(238, 238, 238, 1);
    }
    .reimbursement_fd2_2{
        background:#fff;background-size: 100% !important;border-radius:24rpx 24rpx 24rpx 24rpx;padding:0rpx 24rpx 0rpx 24rpx;margin:32rpx 0rpx 0rpx 0rpx;
    }
    .reimbursement_fd2_1_c5_c0{
        color:#333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .reimbursement_fd2_1_c5{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:0rpx 0rpx 32rpx 0rpx;margin:24rpx 0rpx 0rpx 0rpx;
    }
    .reimbursement_fd2_1_c4{
        color:#333333;font-size:32rpx;font-weight:400;line-height:45rpx;margin:40rpx 0rpx 0rpx 0rpx;
    }
    .reimbursement_fd2_1_c3_c0{
        color:#333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .reimbursement_fd2_1_c3{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:0rpx 0rpx 32rpx 0rpx;margin:24rpx 0rpx 0rpx 0rpx;
    }
    .reimbursement_fd2_1_c2{
        color:#333333;font-size:32rpx;font-weight:400;line-height:45rpx;margin:40rpx 0rpx 0rpx 0rpx;
    }
    .reimbursement_fd2_1_c1_c0{
        color:#333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .reimbursement_fd2_1_c1{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:0rpx 0rpx 32rpx 0rpx;margin:24rpx 0rpx 0rpx 0rpx;
    }
    .reimbursement_fd2_1_c0{
        color:#333333;font-size:32rpx;font-weight:400;line-height:45rpx;
    }
    .reimbursement_fd2_1{
        background:#fff;background-size: 100% !important;border-radius:24rpx 24rpx 24rpx 24rpx;padding:32rpx 24rpx 0rpx 24rpx;margin:20rpx 0rpx 0rpx 0rpx;
    }
    .reimbursement_fd2_0_c4_c1_c1{
        width:16rpx;height:28rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .reimbursement_fd2_0_c4_c1_c0{
        height:104rpx;text-align:right;color:#333;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 16rpx 0rpx 0rpx;
    }
    .reimbursement_fd2_0_c4_c1{
        margin:0rpx 0rpx 0rpx 24rpx;
    }
    .reimbursement_fd2_0_c4_c0{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .reimbursement_fd2_0_c4{
        border-bottom:1px solid rgba(238, 238, 238, 1);
    }
    .reimbursement_fd2_0_c3_c1_c0{
        height:104rpx;text-align:right;color:#333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .reimbursement_fd2_0_c3_c1{
        margin:0rpx 0rpx 0rpx 24rpx;
    }
    .reimbursement_fd2_0_c3_c0{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .reimbursement_fd2_0_c3{
        border-bottom:1px solid rgba(238, 238, 238, 1);
    }
    .reimbursement_fd2_0_c2_c1_c1{
        width:16rpx;height:28rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .reimbursement_fd2_0_c2_c1_c0{
        height:104rpx;text-align:right;color:#333;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 16rpx 0rpx 0rpx;
    }
    .reimbursement_fd2_0_c2_c1{
        margin:0rpx 0rpx 0rpx 24rpx;
    }
    .reimbursement_fd2_0_c2_c0{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .reimbursement_fd2_0_c2{
        border-bottom:1px solid rgba(238, 238, 238, 1);
    }
    .reimbursement_fd2_0_c1_c1_c1{
        width:16rpx;height:28rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .reimbursement_fd2_0_c1_c1_c0{
        height:104rpx;text-align:right;color:#333;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 16rpx 0rpx 0rpx;
    }
    .reimbursement_fd2_0_c1_c1{
        margin:0rpx 0rpx 0rpx 24rpx;
    }
    .reimbursement_fd2_0_c1_c0{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .reimbursement_fd2_0_c1{
        border-bottom:1px solid rgba(238, 238, 238, 1);
    }
    .reimbursement_fd2_0_c0_c1_c1{
        width:16rpx;height:28rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
    .reimbursement_fd2_0_c0_c1_c0{
        height:104rpx;text-align:right;color:#333;font-size:28rpx;font-weight:400;line-height:40rpx;margin:0rpx 16rpx 0rpx 0rpx;
    }
    .reimbursement_fd2_0_c0_c1{
        margin:0rpx 0rpx 0rpx 24rpx;
    }
    .reimbursement_fd2_0_c0_c0{
        color:#333333;font-size:28rpx;font-weight:400;line-height:40rpx;
    }
    .reimbursement_fd2_0_c0{
        border-bottom:1px solid rgba(238, 238, 238, 1);
    }
    .reimbursement_fd2_0{
        background:#fff;background-size: 100% !important;border-radius:24rpx 24rpx 24rpx 24rpx;padding:0rpx 24rpx 0rpx 24rpx;margin:24rpx 0rpx 0rpx 0rpx;
    }
    .reimbursement_picker3_0_c2{
        color:#0B1898;font-size:28rpx;font-weight:500;line-height:40rpx;
    }
    .reimbursement_picker3_0_c1{
        color:#333333;font-size:36rpx;font-weight:500;line-height:50rpx;
    }
    .reimbursement_picker3_0_c0{
        color:#666666;font-size:28rpx;font-weight:500;line-height:40rpx;
    }
    .reimbursement_picker3_0{
        border-bottom:1px solid #eee;background:#fff;background-size: 100% !important;padding:0rpx 32rpx 0rpx 32rpx;line-height:88rpx;border-radius:25rpx 25rpx 0rpx 0rpx;background-size:100% auto !important;height:88rpx;
    }
    .reimbursement_picker4_0_c2{
        color:#0B1898;font-size:28rpx;font-weight:500;line-height:40rpx;
    }
    .reimbursement_picker4_0_c1{
        color:#333333;font-size:36rpx;font-weight:500;line-height:50rpx;
    }
    .reimbursement_picker4_0_c0{
        color:#666666;font-size:28rpx;font-weight:500;line-height:40rpx;
    }
    .reimbursement_picker4_0{
        border-bottom:1px solid #eee;background:#fff;background-size: 100% !important;padding:0rpx 32rpx 0rpx 32rpx;line-height:88rpx;border-radius:25rpx 25rpx 0rpx 0rpx;background-size:100% auto !important;height:88rpx;
    }
    .reimbursement_picker5_0_c2{
        color:#0B1898;font-size:28rpx;font-weight:500;line-height:40rpx;
    }
    .reimbursement_picker5_0_c1{
        color:#333333;font-size:36rpx;font-weight:500;line-height:50rpx;
    }
    .reimbursement_picker5_0_c0{
        color:#666666;font-size:28rpx;font-weight:500;line-height:40rpx;
    }
    .reimbursement_picker5_0{
        border-bottom:1px solid #eee;background:#fff;background-size: 100% !important;padding:0rpx 32rpx 0rpx 32rpx;line-height:88rpx;border-radius:25rpx 25rpx 0rpx 0rpx;background-size:100% auto !important;height:88rpx;
    }
    .reimbursement_flex_6{
        width:750rpx;height:117rpx;overflow:hidden;z-index:10;bottom:calc(0rpx + var(--window-bottom));
    }
    .reimbursement_fd6_0{
        background:rgba(11, 24, 152, 1);background-size: 100% !important;border-radius:100rpx 100rpx 100rpx 100rpx;font-size:32rpx;color:#FFFFFF;width:686rpx;height:88rpx;line-height:88rpx;font-weight:700;margin:0rpx 32rpx 0rpx 32rpx;
    }
</style>