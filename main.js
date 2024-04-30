
import Vue from 'vue'
import App from './App'

import uView from '@/uni_modules/uview-ui'
Vue.use(uView)


Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})

// 引入请求封装，将app参数传递到配置中
require('@/config/request.js')(app) 
app.$mount()

