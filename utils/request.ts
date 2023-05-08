import { isObject, isArray } from '@vue/shared'

const request = {
	// 设置请求头
	setHeader(key: string, value: string): void {
		uni.request({
			header: {
				[key]: value,
			},
		});
	},

	// 发送GET请求
	get(url: string, params?: any, config?: any) {
		return this.request({
			url,
			method: 'GET',
			data: params,
			...config,
		});
	},

	// 发送POST请求
	post(url: string, data?: any, config?: any) {
		return this.request({
			url,
			method: 'POST',
			data,
			...config,
		});
	},

	// 发送PUT请求
	put(url: string, data?: any, config?: any) {
		return this.request({
			url,
			method: 'PUT',
			data,
			...config,
		});
	},

	// 发送DELETE请求
	delete(url: string, data?: any, config?: any) {
		return this.request({
			url,
			method: 'DELETE',
			data,
			...config,
		});
	},

	// 发送请求
	request(config: any) {
		// 设置请求头
		if (config.headers) {
			Object.keys(config.headers).forEach((key) => {
				this.setHeader(key, config.headers[key]);
			});
		}

		// 发送请求
		return new Promise((resolve, reject) => {
			uni.request({
				url: config.url,
				method: config.method || 'GET',
				data: config.data || {},
				success: (res: any) => {
					resolve(res.data);
				},
				fail: (err: any) => {
					reject(err);
				},
			});
		});
	},

	// 上传文件
	upload(url: string, filePath: string, name: string, formData?: any, config?: any) {
		return new Promise((resolve, reject) => {
			uni.uploadFile({
				url,
				filePath,
				name,
				formData: isObject(formData) || isArray(formData) ? formData : {},
				success: (res: any) => {
					resolve(res.data);
				},
				fail: (err: any) => {
					reject(err);
				},
			});
		});
	},

	// 下载文件
	download(url: string, filePath: string, config?: any) {
		return new Promise((resolve, reject) => {
			uni.downloadFile({
				url,
				filePath,
				success: (res: any) => {
					resolve(res.tempFilePath);
				},
				fail: (err: any) => {
					reject(err);
				},
			});
		});
	},
};

export default request;

/* 使用示例

import request from './request';

// 发送GET请求
request.get('/user', { id: 123 }).then((res) => {
  console.log(res);
});

// 发送POST请求
request.post('/user', { name: 'Alice', age: 18 }).then((res) => {
  console.log(res);
});

// 上传文件
request.upload('/file/upload', filePath, 'file', { name: 'file' }).then((res) => {
  console.log(res);
});

// 下载文件
request.download('/file/download', filePath).then((res) => {
  console.log(res);
});

 */