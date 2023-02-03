<template>
	<view class="page">
		<view class="fu-tabbar" :style="[{ height: CustomBar + 'px' }]">
			<view :style="[{ height: StatusBar + 'px' }]"></view>
			<view class="fu-tabbar-con flex justify-start align-center solid-bottom" :style="[{ height: CustomBar - StatusBar + 'px' }]">
				<view class="cuIcon-back padding-left-sm text-333 text-xl" @click="handleBack"></view>
				<view class="search-wrap">
					<view class="cu-bar search bg-white">
						<view class="search-form round">
							<text class="cuIcon-search"></text>
							<input v-model="keywords" :adjust-position="false" type="text" :placeholder="i18n['搜索']" confirm-type="search" @confirm="handleSearch" />
							<text v-if="keywords.length != 0" class="cuIcon-roundclosefill text-lg text-gray padding-right-xs" @tap="handleClear"></text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view v-show="isSeach" class="uni-indexed-list__list">
			<view v-for="(item, index) in list" :key="index" class="uni-indexed-list__item" hover-class="uni-indexed-list__item--hover">
				<view class="uni-indexed-list__item-container" @click="searchClick(item)">
					<view class="uni-indexed-list__item-border" :class="{'uni-indexed-list__item-border--last':index===list.length-1}">
						<text class="uni-indexed-list__item-content">{{ item.name }}</text>
					</view>
				</view>
			</view>
			<view class=""></view>
		</view>

		<view class="choose-position-wrap padding-left-sm padding-right-sm padding-bottom-sm"  v-show="!isSeach">
			<view class="choose-position-tips text-999 text-df text-bold">
				{{i18n['定位/最近访问']}}
			</view>
			<view class="choose-position flex justify-start align-center">
				<view v-if="location.name" class="choose-position-item solid bg-white text-center text-lg text-333 text-cut" @click="searchClick(location)">
					<text class="cuIcon-locationfill text-red"></text>{{location.name}}
				</view>
				<block v-for="(item,index) in storage" :key="index">
					<view class="choose-position-item solid bg-white text-center text-lg text-333 text-cut" @click="searchClick(item)">
						{{item.name}}
					</view>
				</block>
			</view>
		</view>
		<view class="" style="position: relative;" :style="[{ height: 'calc(100% - 148rpx - '+ CustomBar +'px)' }]"  v-show="!isSeach">
			<view class="uni-indexed-list" ref="list" id="list">
				<!-- #ifdef APP-NVUE -->
				<list class="uni-indexed-list__scroll" scrollable="true" show-scrollbar="false">
					<cell v-for="(list, idx) in lists" :key="idx" :ref="'uni-indexed-list-' + idx">
						<!-- #endif -->
						<!-- #ifndef APP-NVUE -->
						<scroll-view :scroll-into-view="scrollViewId" class="uni-indexed-list__scroll" scroll-y>
							<view v-for="(list, idx) in lists" :key="idx" :id="'uni-indexed-list-' + idx">
								<!-- #endif -->
								<indexed-list-item :list="list" :loaded="loaded" :idx="idx"  @itemClick="onClick"></indexed-list-item>
								<!-- #ifndef APP-NVUE -->
							</view>
						</scroll-view>
						<!-- #endif -->
						<!-- #ifdef APP-NVUE -->
					</cell>
				</list>
				<!-- #endif -->
				<view
					class="uni-indexed-list__menu"
					:class="touchmove ? 'uni-indexed-list__menu--active' : ''"
					@touchstart="touchStart"
					@touchmove.stop.prevent="touchMove"
					@touchend="touchEnd"
					@mousedown.stop="mousedown"
					@mousemove.stop.prevent="mousemove"
					@mouseleave.stop="mouseleave"
				>
					<view v-for="(list, key) in lists" :key="key" class="uni-indexed-list__menu-item">
						<text class="uni-indexed-list__menu-text" :class="touchmoveIndex == key ? 'uni-indexed-list__menu-text--active' : ''">{{ list.key }}</text>
					</view>
				</view>
				<view v-if="touchmove" class="uni-indexed-list__alert-wrapper">
					<text class="uni-indexed-list__alert">{{ lists[touchmoveIndex].key }}</text>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
import indexedListItem from './uni-indexed-list-item.vue';
import citys from './static/citys.js';
// #ifdef APP-NVUE
const dom = weex.requireModule('dom');
// #endif
// #ifdef APP-PLUS
function throttle(func, delay) {
	var prev = Date.now();
	return function() {
		var context = this;
		var args = arguments;
		var now = Date.now();
		if (now - prev >= delay) {
			func.apply(context, args);
			prev = Date.now();
		}
	};
}

function touchMove(e) {
	let pageY = e.touches[0].pageY;
	let index = Math.floor((pageY - this.winOffsetY) / this.itemHeight);
	if (this.touchmoveIndex === index) {
		return false;
	}
	let item = this.lists[index];
	if (item) {
		// #ifndef APP-NVUE
		this.scrollViewId = 'uni-indexed-list-' + index;
		this.touchmoveIndex = index;
		// #endif
		// #ifdef APP-NVUE
		dom.scrollToElement(this.$refs['uni-indexed-list-' + index][0], {
			animated: false
		});
		this.touchmoveIndex = index;
		// #endif
	}
}
const throttleTouchMove = throttle(touchMove, 40);
// #endif

/**
 * IndexedList 索引列表
 * @description 用于展示索引列表
 * @tutorial https://ext.dcloud.net.cn/plugin?id=375
 * 	@value true 展示模式
 * 	@value false 选择模式
 * @property {Object} options 索引列表需要的数据对象
 * @event {Function} click 点击列表事件 ，返回当前选择项的事件对象
 * @example <uni-indexed-list options=""  @click=""></uni-indexed-list>
 */
export default {
	name: 'UniIndexedList',
	components: {
		indexedListItem
	},
	data() {
		return {
			lists:[],
			winHeight: 0,
			itemHeight: 0,
			winOffsetY: 0,
			touchmove: false,
			touchmoveIndex: -1,
			scrollViewId: '',
			touchmovable: true,
			loaded: false,
			isPC: false,
			keywords:'',
			storage:[],
			isSeach:false,
			list:[],
			location:{}
		};
	},
	watch: {
		options: {
			handler: function() {
				this.setList();
			},
			deep: true
		}
	},
	mounted() {
		// #ifdef H5
		this.isPC = this.IsPC();
		// #endif
		this.$nextTick(()=>{
			setTimeout(() => {
				this.setList();
			}, 50);
			setTimeout(() => {
				this.loaded = true;
			}, 300);
		})
		this.storage = uni.getStorageSync('storage')?JSON.parse(uni.getStorageSync('storage')):[];
		this.autoGetLocation();
	},
	methods: {
		/**
     * @description 自动定位获取地理位置
     * 这个定位只使用app，且不能获取code值，如果想和组件选择城市匹配，可以根据城市去城市js去查找对应code
     * 或者引入三方sdk定位获取code
     */
    autoGetLocation(){
      let _this = this;
      uni.getLocation({
        type: 'wgs84',
        geocode:true,
        success: function (res) {
            console.log('当前位置信息：' , res);
            _this.location = {
              name:res.address.city,
              code:''
            }
        },
		fail: function (err){
          console.log('当前位置信息：',err);
        }
      });
    },
		handleBack(){
			uni.navigateBack({
				delta:1
			})
		},
		handleSearch(){
			if(!this.keywords.trim()){
				this.list = [];
				this.keywords = '';
				this.isSeach = false;
				return;
			}
			let list = [];
			this.lists.forEach(val=>{
				val.items.forEach(item=>{
					// console.log(item)
					if(item.name.includes(this.keywords)){
						list.push(item);
					}
				})
			})
			this.list = list;
			this.isSeach = true;
			console.log(list);
		},
		handleClear(){
			this.keywords = '';
			this.list = [];
			this.isSeach = false;
		},
		setList() {
			let index = 0;
			this.lists = [];
			citys.list.forEach((value, index) => {
				if (value.data.length === 0) {
					return;
				}
				let indexBefore = index;
				let items = value.data.map(item => {
					// console.log(items)
					let obj = {};
					obj['key'] = value.letter;
					obj['name'] = item.label;
					obj['itemIndex'] = index;
					obj['code'] = item.code;
					index++;
					obj.checked = item.checked ? item.checked : false;
					return obj;
				});
				this.lists.push({
					title: value.letter,
					key: value.letter,
					items: items,
					itemIndex: indexBefore
				});
			});
			// #ifndef APP-NVUE
			uni.createSelectorQuery()
				.in(this)
				.select('#list')
				.boundingClientRect()
				.exec(ret => {
					this.winOffsetY = ret[0].top;
					this.winHeight = ret[0].height;
					this.itemHeight = this.winHeight / this.lists.length;
				});
			// #endif
			// #ifdef APP-NVUE
			dom.getComponentRect(this.$refs['list'], res => {
				this.winOffsetY = res.size.top;
				this.winHeight = res.size.height;
				this.itemHeight = this.winHeight / this.lists.length;
			});
			// #endif
		},
		touchStart(e) {
			this.touchmove = true;
			let pageY = this.isPC ? e.pageY : e.touches[0].pageY;
			let index = Math.floor((pageY - this.winOffsetY) / this.itemHeight);
			let item = this.lists[index];
			if (item) {
				this.scrollViewId = 'uni-indexed-list-' + index;
				this.touchmoveIndex = index;
				// #ifdef APP-NVUE
				dom.scrollToElement(this.$refs['uni-indexed-list-' + index][0], {
					animated: false
				});
				// #endif
			}
		},
		touchMove(e) {
			// #ifndef APP-PLUS
			let pageY = this.isPC ? e.pageY : e.touches[0].pageY;
			let index = Math.floor((pageY - this.winOffsetY) / this.itemHeight);
			if (this.touchmoveIndex === index) {
				return false;
			}
			let item = this.lists[index];
			if (item) {
				this.scrollViewId = 'uni-indexed-list-' + index;
				this.touchmoveIndex = index;
			}
			// #endif
			// #ifdef APP-PLUS
			throttleTouchMove.call(this, e);
			// #endif
		},
		touchEnd() {
			this.touchmove = false;
			this.touchmoveIndex = -1;
		},

		/**
		 * 兼容 PC @tian
		 */

		mousedown(e) {
			if (!this.isPC) return;
			this.touchStart(e);
		},
		mousemove(e) {
			if (!this.isPC) return;
			this.touchMove(e);
		},
		mouseleave(e) {
			if (!this.isPC) return;
			this.touchEnd(e);
		},

		// #ifdef H5
		IsPC() {
			var userAgentInfo = navigator.userAgent;
			var Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod'];
			var flag = true;
			for (let v = 0; v < Agents.length - 1; v++) {
				if (userAgentInfo.indexOf(Agents[v]) > 0) {
					flag = false;
					break;
				}
			}
			return flag;
		},
		// #endif

		onClick(e) {
			let { idx, index } = e;
			let obj = {};
			for (let key in this.lists[idx].items[index]) {
				obj[key] = this.lists[idx].items[index][key];
			}
			
			
			if(this.storage.length >=2){
				this.storage.pop();
				this.storage.unshift(obj);
			}else{
				this.storage.unshift(obj);
			}
			uni.setStorageSync('storage',JSON.stringify(this.storage));
			this.$emit('click', {
				item: obj,
				// select: select
			});
		},
		searchClick(item){
			this.$emit('click', {
				item: item,
				// select: select
			});
		}
	}
};
</script>
<style lang="scss" scoped>
.page{
	height: 100vh;
}
.choose-position-wrap{
	.choose-position-tips{
		height: 64rpx;
		line-height: 64rpx;
	}
	.choose-position{
		.choose-position-item{
			width: 180rpx;
			height: 64rpx;
			line-height: 62rpx;
			padding: 0 8rpx;
			border-radius: 8rpx;
			border: 1rpx solid #999;
			box-sizing: border-box;
			margin-right: 20rpx;
		}
	}
}
.uni-indexed-list {
	position: absolute;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	/* #ifndef APP-NVUE */
	display: flex;
	/* #endif */
	flex-direction: row;
}

.uni-indexed-list__scroll {
	flex: 1;
}

.uni-indexed-list__menu {
	// position: absolute;
	// top: 50%;
	// right: 0;
	// transform: translateY(-50%);
	width: 24px;
	background-color: lightgrey;
	/* #ifndef APP-NVUE */
	display: flex;
	/* #endif */
	flex-direction: column;
}

.uni-indexed-list__menu-item {
	/* #ifndef APP-NVUE */
	display: flex;
	/* #endif */
	flex: 1;
	align-items: center;
	justify-content: center;
	/* #ifdef H5 */
	cursor: pointer;
	/* #endif */
}

.uni-indexed-list__menu-text {
	line-height: 20px;
	font-size: 12px;
	text-align: center;
	color: #aaa;
}

.uni-indexed-list__menu--active {
	background-color: rgb(200, 200, 200);
}

.uni-indexed-list__menu-text--active {
	color: #007aff;
}

.uni-indexed-list__alert-wrapper {
	position: absolute;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	/* #ifndef APP-NVUE */
	display: flex;
	/* #endif */
	flex-direction: row;
	align-items: center;
	justify-content: center;
}

.uni-indexed-list__alert {
	width: 80px;
	height: 80px;
	border-radius: 80px;
	text-align: center;
	line-height: 80px;
	font-size: 35px;
	color: #fff;
	background-color: rgba(0, 0, 0, 0.5);
}
// 搜索 start
.fu-tabbar {
	position: sticky;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 99999;
	background: #ffffff;
	overflow: hidden;
	.fu-tabbar-con {
		position: relative;
		.search-wrap {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			// #ifndef MP-WEIXIN
			width: calc(100% - 100rpx);
			// #endif
			// #ifdef MP-WEIXIN
			width: calc(100% - 242rpx);
			// #endif
		}
	}
}
// 搜索 end
.uni-indexed-list__list {
		background-color: $uni-bg-color;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		border-top-style: solid;
		border-top-width: 1px;
		border-top-color: $uni-border-color;
	}

	.uni-indexed-list__item {
		font-size: $uni-font-size-lg;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex: 1;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.uni-indexed-list__item-container {
		padding-left: $uni-spacing-row-lg;
		flex: 1;
		position: relative;
		/* #ifndef APP-NVUE */
		display: flex;
		box-sizing: border-box;
		/* #endif */
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		/* #ifdef H5 */
		cursor: pointer;
		/* #endif */
	}

	.uni-indexed-list__item-border {
		flex: 1;
		position: relative;
		/* #ifndef APP-NVUE */
		display: flex;
		box-sizing: border-box;
		/* #endif */
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		height: 50px;
		padding: $uni-spacing-row-lg;
		padding-left: 0;
		border-bottom-style: solid;
		border-bottom-width: 1px;
		border-bottom-color: $uni-border-color;
	}

	.uni-indexed-list__item-border--last {
		border-bottom-width: 0px;
	}

	.uni-indexed-list__item-content {
		flex: 1;
		font-size: 14px;
	}

	.uni-indexed-list {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
	}

	.uni-indexed-list__title-wrapper {
		/* #ifndef APP-NVUE */
		display: flex;
		width: 100%;
		/* #endif */
		background-color: #f7f7f7;
	}

	.uni-indexed-list__title {
		padding: 6px 12px;
		line-height: 24px;
		font-size: $uni-font-size-sm;
	}
</style>
