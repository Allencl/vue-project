import VueRouter from 'vue-router';

import RegisterPage from './components/Register.vue';
import HomePage from './home.vue';


const routes = [
  // { path: '/', component: RegisterPage },   // 注册页面
  { path: '/', component: HomePage },   // home 页面
]

export const router = new VueRouter({
  routes
});


