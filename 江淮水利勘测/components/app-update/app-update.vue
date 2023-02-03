<template>
	<fu-popup v-model="isShow" mode="center" border-radius="16" :mask-close-able="false">
		<view class="update-box">
			<view class="title">{{ i18n["发现新版本"] }}</view>
			<textarea class="content" disabled :value="content"></textarea>
			<view class="cu-progress sm striped active" v-if="loading > 0">
				<view class="bg-theme" :style="[{ width: loading + '%' }]"></view>
			</view>
			<view class="foot solid-top">
				<view class="flex-sub text-gray solid-right" @click="handleCancel">{{
          i18n["下次再说"]
        }}</view>
				<view class="flex-sub text-green" @click="handleConfirm">{{
          i18n["马上更新"]
        }}</view>
			</view>
		</view>
	</fu-popup>
</template>

<script>
	/**
	 * author: 刘欢
	 * @description app检测升级组件
	 * @param {boolean} auto 是否自动检测更新
	 * **/
	import {
		API_BASE_URL,
		SYSTEM_CONFIG
	} from "@/common/config.js";
	export default {
		name: 'app-update',
		props: {
			auto: {
				type: Boolean,
				default: false,
			}, // 是否自动检测更新
		},
		data() {
			return {
				isShow: false,
				content: "",
				apkUrl: "",
				loading: 0,
				isLoad: false,
				downloadTask: null,
			};
		},
		methods: {
			checkAppUpdate() {
				console.log("检查更新");
				const self = this;
				plus.runtime.getProperty(plus.runtime.appid, async function(widgetInfo) {
					console.log("本地版本信息", widgetInfo);
					// 请求版本检查接口
					const [error, result] = await uni.request({
						url: API_BASE_URL + global.apiUrls.publicUpdateAPP,
						header: {
							"content-type": "application/x-www-form-urlencoded",
						},
						data: {
							app_ident: "user",
							client: SYSTEM_CONFIG.platform === "Android" ? 3 : 2,
						},
						method: "POST",
					});
					console.log('result.data', result.data);
					if (result.data.code == 1) {
						const data = result.data.data;
						console.log("接口信息", data);
						if (data.is_take == 1) {
							console.log("是有效的版本");
							if (data.type == 2) {
								console.log("是整包更新");
								if (data.version > widgetInfo.versionCode) {
									console.log("有新版本");
									self.content = data.readme;
									self.apkUrl = data.url;
									self.isShow = true;
								} else {
									console.log("是否是自动检测", self.auto);
									if (!self.auto) {
										console.log("??????");
										self.$message.info(global.i18n["已是最新版本~"]);
									}
								}
							} else {
								console.log("是热更新");
								if (data.version > widgetInfo.versionCode) {
									uni.downloadFile({
										url: data.url,
										success: (downloadResult) => {
											if (downloadResult.statusCode === 200) {
												plus.runtime.install(downloadResult.tempFilePath, {
													force: true,
												});
												self.$util.showModal({
													title: global.i18n["提示"],
													content: global.i18n[
														"已准备好新版本,是否重启体验新版?"],
													confirmText: global.i18n["重启"],
													success: (res) => {
														if (res.confirm) {
															plus.runtime.restart();
														}
													},
												});
											}
										},
									});
								} else {
									console.log("是否是自动检测", self.auto);
									if (!self.auto) {
										self.$message.info(global.i18n["已是最新版本~"]);
									}
								}
							}
						}
					}
				});
			},
			// 取消
			handleCancel() {
				this.downloadTask && this.downloadTask.abort();
				this.isShow = false;
			},
			// 确定
			handleConfirm() {
				/* #ifdef APP-PLUS */
				if (plus.os.name.toLowerCase() === "android") {
					console.log("是安卓系统");
					if (this.isLoad) return;
					this.isLoad = true;
					this.downloadTask = uni.downloadFile({
						url: this.apkUrl,
						success: (downloadResult) => {
							console.log("downloadResult 下载成功", downloadResult);
							if (downloadResult.statusCode === 200) {
								this.isShow = false;
								plus.runtime.install(downloadResult.tempFilePath, {
									force: true,
								});
								plus.runtime.restart();
							}
						},
						fail: (err) => {
							console.log("ERROR", err);
							if (err.errMsg == "downloadFile:fail abort") {
								this.$message.info(global.i18n["取消下载"]);
							} else {
								this.$message.info(global.i18n["下载失败"]);
							}
						},
						complete: () => {
							this.isLoad = false;
						},
					});
					this.downloadTask.onProgressUpdate((res) => {
						this.loading = res.progress;
					});
				} else {
					console.log("是苹果系统,跳转到苹果应用商店");
					plus.runtime.openURL(this.apkUrl);
				}
				/* #endif */
			},
		},
		created() {
			// #ifdef APP-PLUS
			if (this.auto) {
				setTimeout(() => {
					this.checkAppUpdate();
				}, 2500);
			}
			// #endif
		},
	};
</script>

<style lang="scss" scoped>
	.update-box {
		width: 500rpx;
		background-color: #ffffff;

		.title {
			height: 100rpx;
			line-height: 100rpx;
			text-align: center;
			font-size: 32rpx;
			color: #333333;
		}

		.content {
			width: 100%;
			height: 500rpx;
			padding: 0 32rpx 32rpx 32rpx;
			box-sizing: border-box;
		}

		.foot {
			height: 80rpx;
			display: flex;
			line-height: 80rpx;
			text-align: center;
		}
	}
</style>
