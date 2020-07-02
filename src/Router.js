import VueRouter from 'vue-router';

import RegisterPage from './components/Register.vue';
import HomePage from './home/home.vue';   // 首页
import LargeScreenPage from './largeScreen/home.vue';   // 大屏



const routes = [
  // { path: '/', component: RegisterPage },   // 注册页面
  { path: '/', component: HomePage },   // home 页面
]

export const router = new VueRouter({
  routes
});


