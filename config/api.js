const http = uni.$u.http

// post请求，获取菜单
export const postFuncAPI = (params, config = {}) => http.post('/post', params, config)

// get请求，获取菜单，注意：get请求的配置等，都在第二个参数中，详见前面解释
export const getFuncAPI = (data) => http.get('/get', data)