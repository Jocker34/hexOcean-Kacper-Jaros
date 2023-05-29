import axios, { AxiosInstance } from 'axios';
import { API } from '../helpers/constants';

const axiosInstance: AxiosInstance = axios.create({
	baseURL: API,
	headers: {
		'Content-Type': 'application/json',
	},
});

export { axiosInstance };