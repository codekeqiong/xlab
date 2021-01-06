/*
 * @Description: axios
 */
// import axios, { AxiosResponse } from 'axios';
// import { UserStorage } from '@/utils/user-storage';
// import { AxiosRequestConfig } from 'axios';
// import { message } from 'antd';
// import { BASE_URL, NO_AUTH_CODE, BASE_NAME } from '@/constants';
// import qs from 'qs';
// import { meth } from '@/utils/util';

// let proxy = process.env.NODE_ENV === 'development' ? process.env.REACT_APP_PROXY : '';

// export const axiosInstance = axios.create({
//   baseURL: `${process.env.REACT_APP_API}${proxy}`,
// });

// axiosInstance.interceptors.request.use(async function (config) {
//   config.headers = {
//     'Content-Type': config.headers['Content-Type'] || 'application/x-www-form-urlencoded'
//   };
//   return config;
// });

// axiosInstance.interceptors.response.use(function <T>(res: AxiosResponse<T | any>) {
//   return new Promise((resolve, reject) => {
//     if (res.data['code'] === NO_AUTH_CODE && res.data['msg'] === 'No Login') {
//       message.error(res.data['msg']);
//       UserStorage.logout();
//       return window.location.assign('/' + BASE_NAME + '/login');
//     } else if (res.data['code'] !== 0) {
//       message.error(res.data['msg']);
//       throw {
//         message: res.data['msg'],
//         code: res.data['code'],
//       };
//     }
//     return resolve(res);
//   });
// });

// export const axios_Json = {
//   async post<T>(url: string, data?: any, config?: AxiosRequestConfig | undefined) {
//     return axiosInstance.post<IResponseData<T>>(url, data, config).then(data => {
//       return data.data;
//     });
//   },
// };

// export const request = {
//   async get<T>(url: string, config?: AxiosRequestConfig) {
//     return axiosInstance.get<IResponseData<T>>(url, config).then(data => {
//       return data.data;
//     });
//   },
//   async post<T>(url: string, data?: any, config?: AxiosRequestConfig | undefined) {
//     return axiosInstance.post<IResponseData<T>>(url, qs.stringify(data), config).then(data => {
//       return data.data;
//     });
//   },
//   async upload<T>(url: string, data?: any, config?: AxiosRequestConfig | undefined) {
//     // axios.create({ headers: { 'Content-Type': 'multipart/form-data' } });
//     return axiosInstance.post<IResponseData<T>>(url, meth.fromData(data), config).then(data => {
//       return data.data;
//     });
//   },
// };

// export interface IResponseData<T> {
//   code: number;
//   msg: string;
//   data: T;
// }
