<template>
	<view class="home-container">
		<view class="custom-nav">
			<view></view>
			<view><text class="title">{{$t("PAGE_TITLE")}}</text></view>
			<view></view>
		</view>
		<view class="loading-container">
			<view class="loading-wrapper">
				<div class="loading-container">
					<div class="loading-circle"></div>
				</div>
				<view class="loading-text">{{$t("LABEL_WAITING")}}.</view>
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
	import { computed, ref, onMounted, onUnmounted, getCurrentInstance } from "vue";
	import { waitingCmd } from './Remote';
	import { useI18n } from 'vue-i18n'
	const i18n = useI18n();
	
	// import { useRoute } from 'vue-router'
	// const route = useRoute()

	const orderId = ref('');
	const dialog = ref({
		visible: false,
		title: '',
		content: '',
		jumpTo: '',
	});
	
	onMounted(() => {
		let pageInstance = getCurrentInstance();
		if (pageInstance) {
			let options: any = pageInstance.data.options;
			orderId.value = options.order
		}
	})
	
	onUnmounted(() => {
	  clearInterval(waitingTimer);
	});	
	
	const waitingTimer = setInterval(async () => {
		try {
			const cmd = await waitingCmd(orderId.value);
			console.log(cmd);
			if (cmd.code == 200) {
				let data = cmd.data;
				let alertmsgObj = JSON.parse(data.alertmsg);
				let locale = i18n.locale.value;
				let alertmsg = alertmsgObj[locale];
				if (!alertmsg) {
					locale = locale.split("-")[0];
					alertmsg = alertmsgObj[locale];
				}
				if (!alertmsg) {
					locale = i18n.fallbackLocale.value;
					alertmsg = alertmsgObj[locale];
				}
				uni.showModal({
					title: i18n.t("MODEL_PROMPT_TITLE"),
					content: alertmsg,
					showCancel: false,
					success: function (res) {
						clearInterval(waitingTimer);
						confirmJump(data.jumpurl)
					}
				})
			}
		}
		catch(error) {
			console.log(error);
		}
	}, 3000);
	
	const confirmJump = (url: String) => {
		console.log(url);
		uni.navigateTo({
			url: '' + url + "?order=" + orderId.value,
		})
	}
	
</script>

<style>
	.loading-text {
		padding-top: 6em;
	}
	.loading-container {
		display: flex;
		justify-content: center;
		align-items: center;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}

	.loading-circle {
		width: 40px;
		height: 40px;
		border-radius: 50%;
		border: 4px solid #297BFA;
		border-top-color: transparent;
		animation: rotate 1s linear infinite;
	}

	@keyframes rotate {
		from {
			transform: rotate(0deg);
		}

		to {
			transform: rotate(360deg);
		}
	}
</style>
