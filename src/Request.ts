import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

/**
 * TODO 需要进一步处理
 * 生成http请求工具
 * @param baseURL
 */
const createRequestor = function (baseURL) {
  const service = axios.create({
    baseURL: baseURL, // url = base url + request url
    withCredentials: false, // send cookies when cross-domain requests
    timeout: 5000 // request timeout
  })

  service.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      // 请求参数拦截,预处理
      console.log(config)
      return config
    },
    (err) => {
      // 请求失败
      console.log(err)
    }
  )

  service.interceptors.response.use(
    (response: AxiosResponse) => {
      // 响应拦截,预处理
      console.log(response.data)
    },
    (err) => {
      // 响应失败
      console.log(err)
    }
  )
  return service
}

const createRequestPrefix = ($req, prefix) => {
  return {
    get: (controller) => (data) => $req({ url: `/${prefix}/${controller}`, params: data }),
    post: (controller) => (data) => $req({ url: `/${prefix}/${controller}`, method: 'post', data })
  }
}

export { createRequestor, createRequestPrefix }
