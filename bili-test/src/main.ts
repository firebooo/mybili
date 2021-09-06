import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import Vuecookies from 'vue-cookies'
//导入B站字体库
import '@/assets/styles/type.css'
//导入element-ui的样式
import 'element-plus/lib/theme-chalk/index.css'
//导入全局样式
import '@/assets/styles/base.scss'
//导入iconfont字体
import '@/assets/styles/iconfont.css'
//引入axios包
import axios from 'axios';

const app = createApp(App);

app.config.globalProperties.$axios=axios
app.config.globalProperties.$cookies=Vuecookies
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

app.use(store).use(router).use(ElementPlus).mount('#app')