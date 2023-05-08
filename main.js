import App from './App'

import { createSSRApp } from 'vue'
import i18n from "@/locales";


console.log('process.env.NODE_ENV : ' + process.env.NODE_ENV)

export function createApp() {
	const app = createSSRApp(App);
	app.use(i18n);
	return {
		app
	}
}
