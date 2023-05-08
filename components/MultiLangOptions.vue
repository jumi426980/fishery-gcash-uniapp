<template>
	<div class="language-panel" style="text-align: right;">
		<div v-for="(language, index) in supportedLanguages" class="wrapper" :class="(language.code == selectedLanguage ? 'selected' : 'unselected')" @click="changeLanguage(language)">
			<div class="fi" :class="['fi-' + language.icon]" :title="language.name"></div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { ref } from 'vue'
	import i18n from '@/locales'
	
	const name = "MultiLangOptoins"

	const supportedLanguages = [{
			code: "en",
			name: "English",
			icon: "ph"
		},
		{
			code: "zh",
			name: "中文",
			icon: "cn"
		},
	];

	const selectedLanguage = ref(i18n.global.locale);

	function changeLanguage(language: any) {
		selectedLanguage.value = language.code;
		i18n.global.locale = language.code;
	};
</script>

<style>
	@import url("https://cdn.jsdelivr.net/gh/lipis/flag-icons@6.6.6/css/flag-icons.min.css");
	.language-panel {
		display: flex; 
		flex-direction: row; 
		gap: 4px;
	}
	.language-panel .selected {
		border: 1px solid white;
	}
	.language-panel .unselected {
		border: 1px solid transparent;
	}
	.language-panel .wrapper {
		padding: 0 6px;
	}
</style>
