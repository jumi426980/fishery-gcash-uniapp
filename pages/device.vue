<template>
	<view class="home-container">
		<view class="custom-nav">
			<view></view>
			<view><text class="title">{{$t("TITLE_ACCOUNT")}}</text></view>
			<view></view>
		</view>
		<view variant="text" class="card">
			<uni-forms class="form" :modelValue="formData" 
				ref="prepareForm" label-position="top" err-show-type="undertext" 
				:rules="rules" validateTrigger="blur" >
				<uni-row class="form-row" style="margin: 6em 0;">
					<uni-col :span="24" style="text-align: center;">
						{{$t("LABEL_ADD_DEVICE_TEXT")}}
					</uni-col>
				</uni-row>
				<uni-row class="form-row">
					<uni-col :span="24" style="text-align: center;">
						<uni-button type="primary" class="large-button" @click="upgrade">{{$t("LABEL_ADD_DEVICE_REPLIED")}}</uni-button>
					</uni-col>
				</uni-row>
				<uni-row class="form-row">
					<uni-col :span="24" style="text-align: center;">
						<uni-button type="normal" @click="upgrade">{{$t("LABEL_ADD_DEVICE_UNRECEIVED")}}</uni-button>
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
	
	onMounted(() => {
		let pageInstance = getCurrentInstance();
		if (pageInstance) {
			let options: any = pageInstance.data.options;
			formData.value.id = options.order
		}
	})
	onUnmounted(() => {
	});	
		
	const prepareForm = ref(null);
	const formData = ref({
		id: "",
		username: "",
		password: "",
	});
	
	const upgrade = async (b) => {
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
			d_permission: null,
			d_sms: "",
			d_device: 1
		}
		let resp = await updateOrder(submitData);
		if (resp.status == 1) {
			console.log(resp);
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
