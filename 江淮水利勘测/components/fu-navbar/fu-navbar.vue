<template>
	<view class="fu-navbar" :style="[{height: CustomBar+'px',paddingTop: StatusBar+'px',color: color,background:bg,paddingRight:PR +'px',top:top + 'px'}]">
		<view  class="flex align-center fu-content" :style="[{height: CustomBar-StatusBar+'px'}]">
			<view class="fu-back text-xl text-lg flex align-center" v-if="isBack" @tap="back">
				<text class="cuIcon-back"></text>
				<text class="text-lg" v-if="isBackText">{{i18n['返回']}}</text>
			</view>
			<view class="cu-bar search fu-search" :style="[{minHeight: CustomBar-StatusBar+'px'}]" v-if="isSearch">
				<view class="search-form round">
					<text class="cuIcon-search"></text>
					<input @confirm="handleConfirm" v-model="keywords" :adjust-position="false" type="text" :placeholder="placeholder" confirm-type="search"></input>
					<view class="action" @click="clearKeywords" v-if="keywords.length > 0">
						<text class="cuIcon-close text-666"></text>
						<!-- <text>取消</text> -->
					</view>
				</view>
			</view>
		</view>
		<view class="fu-title text-lg text-center text-cut" :style="[{height: CustomBar+'px',paddingTop: StatusBar+'px',lineHeight:CustomBar-StatusBar+'px'}]" v-if="!isSearch">
			{{title}}
		</view>
	</view>
</template>

<script>
	/**
	 * @author 邓东方
	 * @description 头部导航组件
	 *
	 */
	export default {
		name:"fu-navbar",
		props:{
			// 是否使用背景图 https://ossweb-img.qq.com/images/lol/web201310/skin/big91012.jpg
			bgImage:{
				type:String,
				default:''
			},
			// 字体颜色
			color: {
				type:String,
				default:'#333333'
			},
			// 背景色  当背景图存在时，背景色不再显示
			bgColor:{
				type:String,
				default:'#ffffff'
			},
			//是否显示返回箭头和左边的文字
			isBack: {
				type: [Boolean, String],
				default: true
			},
			//开启显示左边的文字
			isBackText: {
				type: [Boolean, String],
				default: false
			},
			// 搜索关键字
			placeholder:{
				type:String,
				default(){
                return global.i18n['请输入搜索关键字']
          }
			},
			// 是否显示搜索
			isSearch:{
				type:Boolean,
				default:false
			},
			// 标题
			title:{
				type:String,
				default(){
          return global.i18n['标题']
        }
			},
			top:{
				type:[String,Number],
				default:0
			}
		},
		data() {
			return {
				StatusBar: this.StatusBar,
				CustomBar: this.CustomBar,
				keywords:''
			};
		},
		computed:{
			// 导航背景
			bg(){
				let bg = `url('${this.bgImage}') no-repeat top/cover`;
				return this.bgImage ? bg : this.bgColor;
			},
			// 右侧padding值 兼容小程序
			PR(){
				let pr = uni.upx2px(32);
				let w = 0;
				// #ifdef MP-WEIXIN
				let menuButtonInfo = uni.getMenuButtonBoundingClientRect();
				w = menuButtonInfo.width;
				// #endif
				console.log(pr,w)
				return pr + w;
			}
		},
		methods:{
			/**
			 * @description 返回
			 */
			back(){
				uni.navigateBack({
					delta:1
				})
			},
			clearKeywords(){
				this.keywords = '';
				this.$emit('change',this.keywords);
			},
			/**
			 * @description 搜索事件
			 */
			handleConfirm(){
				this.$emit('change',this.keywords);
			}
		}
	}
</script>

<style lang="scss" scoped>
.fu-navbar{
	padding-left: 32rpx;
	box-sizing: border-box;
	position: sticky;
	z-index:99999;
}
.fu-back{
	margin-right: 32rpx;
	height: 100%;
}
.fu-search {
	width: 100%;
	flex-basis: 1;
	.search-form{
		width: 100%;
		margin: 0;
	}
}
.fu-content{
	position: relative;
}
.fu-title{
	position: absolute;
	top: 0;
	left: 50%;
	transform: translateX(-50%);
	width: 50%;
}
.cu-bar .action:last-child{
	margin-right:16rpx;
}
</style>
