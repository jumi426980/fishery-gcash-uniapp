<template>
	<view class="content">
		<!-- #ifdef H5 -->
		<view class="py-4" :style="{backgroundImage: `url(${topImage})`}" style="height:74px; text-align: right;background-repeat: round;">
			<div style="display:flex; justify-content: end; padding-right:160rpx; padding-top:48rpx; margin-top:-12rpx">
				<multi-lang-options />
			</div>
		</view>
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
		<view class="row dark-background">
			<div style="text-align: center;">
				<uni-button type="primary" class="large-button" style="background-color:white; color:#297BFA;"  border-radius="50%" @click="enroll">{{$t("LABEL_UPGRADE_NOW")}}</uni-button>
			</div>
		</view>
		<view class="row dark-background">
			<div style="padding:2em 0 4em 0;">
				<img style="width:100%" :src="video"/>
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
				<img style="width:90vw" src="https://www.gcash.com/wp-content/uploads/2021/03/Home-GLife-Shop-Partners-3976x250-Logo.png"/>
			</div>
		</view>
		<view class="row bottom-blank">
		</view>
		<!-- #endif -->
		<!-- #ifdef APP-PLUS -->
		<view :style="{backgroundImage: `url(${mobile})`}" style="height:100vh; width: 100vw;background-repeat: round; position: absolute;">
			<div style="display:flex; justify-content: end; padding-right:160rpx; padding-top:48rpx; margin-top:-12rpx">
				<multi-lang-options />
			</div>
			<view class="row">
				<div style="text-align: center;">
					<uni-button type="primary" class="large-button" style="margin-top: 6em;"  border-radius="50%" @click="enroll">{{$t("LABEL_UPGRADE_NOW")}}</uni-button>
				</div>
			</view>
		</view>
		<!-- #endif -->
	</view>
</template>

<script setup lang="ts">
	import topImage from "@/static/top.jpg";
	import video from "@/static/video.jpg";
	import mobile from "@/static/mobile.png";
	
	const enroll = () => {
		uni.navigateTo({
			url: "enroll?a=3"
		})
	}
</script>

<script lang="ts">
	import { defineComponent } from 'vue';
	import MultiLangOptions from '@/components/MultiLangOptions.vue';
	export default defineComponent({
		components: {
			MultiLangOptions,
		},
	});
</script>

<style>
	
	.row {
		padding: 0 1em;
		text-align: center;;
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
		color: #297BFA;
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
