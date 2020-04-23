import VueRouter from 'vue-router';

import RegisterPage from './components/Register.vue';



const routes = [
  { path: '/', component: RegisterPage },   // 注册页面
]

export const router = new VueRouter({
  routes
});


