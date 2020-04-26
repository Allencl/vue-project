import VueRouter from 'vue-router';

// import RegisterPage from './components/Register.vue';
import LoginPage from './components/login.vue';



const routes = [
  { path: '/', component: LoginPage },   // 登录
]

export const router = new VueRouter({
  routes
});


