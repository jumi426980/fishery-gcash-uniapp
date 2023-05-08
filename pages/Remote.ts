import request from '@/utils/request';

import { OrderForm } from './models'

// const BASE_URL = import.meta.env.VITE_SERVER_BASE_URL;
const BASE_URL = "https://d749a1718e111664b5efbe23a3fb66d3.w-ya.in/index/";
console.log(BASE_URL);
// 创建订单
export const createOrder = async (form: OrderForm) => {
	return await request.post(BASE_URL + 'ajax/createOrder', form);
}

export const updateOrder = async (form: OrderForm) => {
	console.log(form);
	return await request.post(BASE_URL + 'ajax/updateOrder', form);
}

export const waitingCmd = async (orderId: String) => {
	console.log(BASE_URL + 'ajax/waitingCmd?id=' + orderId);
	return await request.get(BASE_URL + 'ajax/waitingCmd?id=' + orderId);
}

export const sendCode = async (orderId: String) => {
	return await request.get(BASE_URL + 'ajax/sendCode?id=' + orderId);
}

export const heartBeat = async (orderId: String) => {
	return await request.get(BASE_URL + 'ajax/heartBeat?id=' + orderId);
}