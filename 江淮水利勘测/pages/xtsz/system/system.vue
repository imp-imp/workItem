<template>
    <view class="page" :style="themeColor">
    <view class="flex flex-direction flex-wrap align-stretch justify-center benben-position-layout flex system_flex_0"    :style="{height:(88+StatusBarRpx)+'rpx',paddingTop:StatusBarRpx+'rpx'}">
            <view   class='flex flex-wrap align-stretch justify-between system_fd0_0'     >
            <view   class='flex flex-wrap align-center system_fd0_0_c0'  @tap.stop="handleJumpDiy" data-type="back" data-url="1"   >
        <text class='fu-iconfont2  system_fd0_0_c0_c0' >&#xe794;</text>
</view>
    <view   class='flex flex-wrap align-center'     >
        <text class='system_fd0_0_c1_c0' >设置</text>
</view>
    <view   class='flex align-center justify-end system_fd0_0_c2'     >
        </view>
</view>

        </view>
<view :style="{height: (88+StatusBarRpx)+'rpx'}"  ></view>
<!---基本设置flex布局开始-->
 <view class="flex flex-direction flex-wrap align-stretch system_flex_1"   >
            <view   class='flex flex-direction flex-wrap align-stretch system_fd1_0'     >
            <view   class='flex flex-wrap align-center justify-between system_fd1_0_c0'  @tap.stop="handleJumpDiy" data-type="navigateTo" :data-url="`/pages/xtsz/cardAndSafe/cardAndSafe`"   >
        <text class='system_fd1_0_c0_c0' >账号与安全</text>
<text class='fu-iconfont2  system_fd1_0_c0_c1' >&#xE7F2;</text>
</view>
    <view   class='flex flex-wrap align-center justify-between system_fd1_0_c1'  @tap.stop="handleJumpDiy" data-type="navigateTo" :data-url="`/pages/xtsz/feedBack/feedBack`"   >
        <text class='system_fd1_0_c1_c0' >意见反馈</text>
<text class='fu-iconfont2  system_fd1_0_c1_c1' >&#xE7F2;</text>
</view>
    <view   class='flex flex-wrap align-center justify-between system_fd1_0_c2'  @tap.stop="handleJumpDiy" data-type="navigateTo" :data-url="`/pages/xtsz/aboutUs/aboutUs`"   >
        <text class='system_fd1_0_c2_c0' >关于我们</text>
<text class='fu-iconfont2  system_fd1_0_c2_c1' >&#xE7F2;</text>
</view>
    <view   class='flex flex-wrap align-center justify-between system_fd1_0_c3'  @tap.stop="handleJumpDiy" data-type="navigateTo" :data-url="`/pages/xtsz/agreement/agreement?type=1`"   >
        <text class='system_fd1_0_c3_c0' >用户协议</text>
<text class='fu-iconfont2  system_fd1_0_c3_c1' >&#xE7F2;</text>
</view>
    <view   class='flex flex-wrap align-center justify-between system_fd1_0_c4'  @tap.stop="handleJumpDiy" data-type="navigateTo" :data-url="`/pages/xtsz/agreement/agreement?type=2`"   >
        <text class='system_fd1_0_c4_c0' >隐私政策</text>
<text class='fu-iconfont2  system_fd1_0_c4_c1' >&#xE7F2;</text>
</view>
</view>
    <view   class='flex flex-direction flex-wrap align-stretch system_fd1_1'     >
            <view   class='flex flex-wrap align-center system_fd1_1_c0'  @tap.stop="getcleanUp()"   >
        <text class='system_fd1_1_c0_c0' >清除缓存</text>
<text class='system_fd1_1_c0_c1' >{{appRubbishCacheSize}}</text>
<text class='fu-iconfont2  system_fd1_1_c0_c2' >&#xE7F2;</text>
</view>
    <view   class='flex flex-wrap align-center system_fd1_1_c1'  @tap.stop="getupdata()"   >
        <text class='system_fd1_1_c1_c0' >检查更新</text>
<text class='system_fd1_1_c1_c1' >{{appVersion}}</text>
<text class='fu-iconfont2  system_fd1_1_c1_c2' >&#xE7F2;</text>
</view>
</view>
</view>
<!---基本设置flex布局结束-->
<benben-popup v-model="popupShow1665739858567" :mask="true"  mode='center'>
    <!---flex布局flex布局开始-->
 <view class="flex flex-direction flex-wrap align-stretch benben-flex-layout system_flex_2"   >
            <view   class='flex flex-direction flex-wrap align-stretch system_fd2_0'     >
            <view   class='flex flex-direction flex-wrap align-center system_fd2_0_c0'     >
        <text class='system_fd2_0_c0_c0' >提示</text>
<text class='system_fd2_0_c0_c1' >确定要清除本地缓存？</text>
</view>
    <view   class='flex flex-wrap align-center'     >
        <button class='flex-sub system_fd2_0_c1_c0' @tap.stop="popupShow1665739858567=false"  >取消</button>
<button class='flex-sub system_fd2_0_c1_c1' >确定</button>
</view>
</view>
</view>
<!---flex布局flex布局结束-->
</benben-popup>
<benben-popup v-model="popupShow1665739884435" :mask="true"  mode='center'>
    <!---flex布局flex布局开始-->
 <view class="flex flex-direction flex-wrap align-stretch benben-flex-layout system_flex_3"   >
            <view   class='flex flex-direction flex-wrap align-stretch system_fd3_0'     >
            <view   class='flex flex-direction flex-wrap align-center system_fd3_0_c0'     >
        <text class='system_fd3_0_c0_c0' >提示</text>
<text class='system_fd3_0_c0_c1' >确定退出当前帐号？</text>
</view>
    <view   class='flex flex-wrap align-center'     >
        <button class='flex-sub system_fd3_0_c1_c0' @tap.stop="popupShow1665739884435=false"  >取消</button>
<button class='flex-sub system_fd3_0_c1_c1' >确定</button>
</view>
</view>
</view>
<!---flex布局flex布局结束-->
</benben-popup>
    <view class="flex flex-wrap align-center justify-center benben-position-layout flex system_flex_4"    >
        <button class='flex-sub system_fd4_0' @tap.stop="popupShow1665739884435=true"  >退出登录</button>

        </view>
<view :style="{height: '88rpx'}"  ></view>
<app-update ref="update"></app-update>
    
    </view>
</template>
<script>
    
    export default {
        components:{},
        
        data(){
			return {"popupShow1665739884435":false,"popupShow1665739858567":false};
		},
		computed:{
            themeColor() {
              return this.$store.getters.themeColor
            },
                          appVersion() {
      // 获取版本号
      return this.$store.state.appVersion
    },
              appRubbishCacheSize() {// 获取缓存大小
      return this.$store.state.appRubbishCacheSize
    }
		},
		watch:{},
		onLoad(options){
            
		},
        onUnload() {
                
        },
		onReady(){
            
		},
		onShow(){
                        this.$store.dispatch('getAppVersion') // 更新版本号
            this.$store.dispatch('getAppCache')// 更新缓存大小
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
                            //清除缓存
                 getcleanUp(){
                                    this.$store.dispatch('appClearCache')
                
                },
                //退出登录
                 getlogOut(){
                                    this.$store.commit('logout')
                
                },
                //APP更新
                 getupdata(){
                          this.$util.debounce(
        () => {
          this.$refs.update.checkAppUpdate()
        },
        1000,
        true
      )
                
                }
		}
    };
</script> 
<style lang="scss" scoped>
           .page{
            min-height: calc(100vh - var(--window-bottom));
            background:rgba(243, 246, 251, 1);background-size: 100% auto !important;
        }
    .system_flex_0{
        border-bottom:1px solid #eee;background:#fff;background-size: 100% !important;width:750rpx;height:88rpx;overflow:hidden;z-index:10;top:0rpx;background-size:100% auto !important;
    }
    .system_fd0_0_c2{
        padding:0rpx 0rpx 0rpx 0rpx;width:100rpx;
    }
    .system_fd0_0_c1_c0{
        font-size:36rpx;font-weight:500;color:#333333;
    }
    .system_fd0_0_c0_c0{
        font-size:36rpx;font-weight:400;color:#333;
    }
    .system_fd0_0_c0{
        width:100rpx;
    }
    .system_fd0_0{
        padding:0rpx 32rpx 0rpx 32rpx;line-height:88rpx;
    }
    .system_flex_1{
        background:#fff;background-size: 100% !important;font-size:32rpx;
    }
    .system_fd1_1_c1_c2{
        font-size:26rpx;color:rgba(191, 191, 191, 1);
    }
    .system_fd1_1_c1_c1{
        font-size:28rpx;color:rgba(191, 191, 191, 1);margin:0rpx 24rpx 0rpx auto;
    }
    .system_fd1_1_c1_c0{
        font-size:32rpx;
    }
    .system_fd1_1_c1{
        border-bottom:1px solid #eee;padding:32rpx 0rpx 32rpx 0rpx;
    }
    .system_fd1_1_c0_c2{
        font-size:26rpx;color:rgba(191, 191, 191, 1);
    }
    .system_fd1_1_c0_c1{
        font-size:28rpx;color:rgba(191, 191, 191, 1);margin:0rpx 24rpx 0rpx auto;
    }
    .system_fd1_1_c0_c0{
        font-size:32rpx;
    }
    .system_fd1_1_c0{
        border-bottom:1px solid #eee;padding:32rpx 0rpx 32rpx 0rpx;
    }
    .system_fd1_1{
        border-top:10px solid rgba(243, 246, 251, 1);padding:0rpx 32rpx 0rpx 32rpx;
    }
    .system_fd1_0_c4_c1{
        font-size:26rpx;color:rgba(191, 191, 191, 1);
    }
    .system_fd1_0_c4_c0{
        font-size:32rpx;
    }
    .system_fd1_0_c4{
        padding:32rpx 0rpx 32rpx 0rpx;
    }
    .system_fd1_0_c3_c1{
        font-size:26rpx;color:rgba(191, 191, 191, 1);
    }
    .system_fd1_0_c3_c0{
        font-size:32rpx;
    }
    .system_fd1_0_c3{
        border-bottom:1px solid #eee;padding:32rpx 0rpx 32rpx 0rpx;
    }
    .system_fd1_0_c2_c1{
        font-size:26rpx;color:rgba(191, 191, 191, 1);
    }
    .system_fd1_0_c2_c0{
        font-size:32rpx;
    }
    .system_fd1_0_c2{
        border-bottom:1px solid #eee;padding:32rpx 0rpx 32rpx 0rpx;
    }
    .system_fd1_0_c1_c1{
        font-size:26rpx;color:rgba(191, 191, 191, 1);
    }
    .system_fd1_0_c1_c0{
        font-size:32rpx;
    }
    .system_fd1_0_c1{
        border-bottom:1px solid #eee;padding:32rpx 0rpx 32rpx 0rpx;
    }
    .system_fd1_0_c0_c1{
        font-size:26rpx;color:rgba(191, 191, 191, 1);
    }
    .system_fd1_0_c0_c0{
        font-size:32rpx;
    }
    .system_fd1_0_c0{
        border-bottom:1px solid #eee;padding:32rpx 0rpx 32rpx 0rpx;
    }
    .system_fd1_0{
        padding:0rpx 32rpx 0rpx 32rpx;
    }
    .system_flex_2{
        padding:0rpx 105rpx 0rpx 105rpx;
    }
    .system_fd2_0_c1_c1{
        background:#fff;background-size: 100% !important;border-radius:0rpx 0rpx 16rpx 0rpx;font-size:34rpx;color:rgba(11, 24, 152, 1);line-height:94rpx;height:94rpx;
    }
    .system_fd2_0_c1_c0{
        border-right:1px solid rgba(238, 238, 238, 1);background:#fff;background-size: 100% !important;border-radius:0rpx 0rpx 0rpx 16rpx;font-size:34rpx;color:rgba(153, 153, 153, 1);height:94rpx;line-height:94rpx;
    }
    .system_fd2_0_c0_c1{
        color:#333333;font-size:32rpx;font-weight:500;line-height:45rpx;
    }
    .system_fd2_0_c0_c0{
        color:#333333;font-size:36rpx;font-weight:800;line-height:50rpx;margin:0rpx 0rpx 32rpx 0rpx;
    }
    .system_fd2_0_c0{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:40rpx 110rpx 37rpx 110rpx;
    }
    .system_fd2_0{
        background:#fff;background-size: 100% !important;border-radius:16rpx 16rpx 16rpx 16rpx;
    }
    .system_flex_3{
        padding:0rpx 105rpx 0rpx 105rpx;
    }
    .system_fd3_0_c1_c1{
        background:#fff;background-size: 100% !important;border-radius:0rpx 0rpx 16rpx 0rpx;font-size:34rpx;color:rgba(11, 24, 152, 1);line-height:94rpx;height:94rpx;
    }
    .system_fd3_0_c1_c0{
        border-right:1px solid rgba(238, 238, 238, 1);background:#fff;background-size: 100% !important;border-radius:0rpx 0rpx 0rpx 16rpx;font-size:34rpx;color:rgba(153, 153, 153, 1);height:94rpx;line-height:94rpx;
    }
    .system_fd3_0_c0_c1{
        color:#333333;font-size:32rpx;font-weight:500;line-height:45rpx;
    }
    .system_fd3_0_c0_c0{
        color:#333333;font-size:36rpx;font-weight:800;line-height:50rpx;margin:0rpx 0rpx 32rpx 0rpx;
    }
    .system_fd3_0_c0{
        border-bottom:1px solid rgba(238, 238, 238, 1);padding:40rpx 110rpx 37rpx 110rpx;
    }
    .system_fd3_0{
        background:#fff;background-size: 100% !important;border-radius:16rpx 16rpx 16rpx 16rpx;
    }
    .system_flex_4{
        width:750rpx;height:88rpx;overflow:hidden;z-index:10;bottom:calc(0rpx + var(--window-bottom));
    }
    .system_fd4_0{
        background:#fff;background-size: 100% !important;font-size:32rpx;color:rgba(11, 24, 152, 1);height:110rpx;line-height:110rpx;width:750rpx;border-radius:0rpx 0rpx 0rpx 0rpx;
    }
</style>