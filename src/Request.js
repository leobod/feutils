import axios from 'axios';
/**
 * TODO 需要进一步处理
 * 生成http请求工具
 * @param baseURL
 */
const createRequestor = function (baseURL) {
    const service = axios.create({
        baseURL: baseURL,
        withCredentials: false,
        timeout: 5000 // request timeout
    });
    service.interceptors.request.use((config) => {
        // 请求参数拦截,预处理
        console.log(config);
        return config;
    }, (err) => {
        // 请求失败
        console.log(err);
    });
    service.interceptors.response.use((response) => {
        // 响应拦截,预处理
        console.log(response.data);
    }, (err) => {
        // 响应失败
        console.log(err);
    });
    return service;
};
export { createRequestor };
