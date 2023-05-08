import { createI18n, useI18n } from 'vue-i18n';
import zh from "./zh";
import en from "./en";

// import { getLocale } from "@/utils/locale"; // 用于获取浏览器语言等信息

function getLocale(): string {
	const defaultLocale = DEFAULT_LANG;
	let locale = uni.getStorageSync('locale');
	if (!locale) {
		locale = defaultLocale;
		uni.setStorageSync('locale', locale);
	}
	return locale;
}

// 默认语言
const DEFAULT_LANG = "en-US";

// i18n 实例
const messages = {
	zh,
	en
};
// const locales = import('@/locales/*.json');
// Object.keys(locales).forEach((key) => {
// 	const lang = key.replace(/^\.\/locales\/(.*)\.json$/, '$1');
// 	messages[lang] = locales[key].default;
// });

const i18n = createI18n({
	locale: getLocale(),
	fallbackLocale: 'en', // 设置备用语言
	messages: messages
});

export default i18n

export const $t = i18n.global.t;