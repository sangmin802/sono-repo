import axios, {
	type AxiosResponse,
	type InternalAxiosRequestConfig
} from 'axios';

import { API_KEY, API_URL } from '@/constants';

const axiosInstance = axios.create({
	baseURL: API_URL as string
});

axiosInstance.interceptors.request.use(
	(config: InternalAxiosRequestConfig) => {
		config.headers.set('accept', 'application/json');
		config.headers.set('authorization', `bearer ${API_KEY}`);

		return config;
	},
	(error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
	(response: AxiosResponse) => response,
	(error: unknown) => Promise.reject(error)
);

export default axiosInstance;
