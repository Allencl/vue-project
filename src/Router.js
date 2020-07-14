import VueRouter from 'vue-router';

import HomePage from './homeDrag/index.vue';   // 首页

// import RegisterPage from './components/Register.vue';
// import LargeScreenPage from './largeScreen/index.vue';   // 大屏
// import LargeScreenPage2 from './largeScreen/index2.vue';   // 大屏


const routes = [
  // { path: '/', component: RegisterPage },   // 注册页面
  { path: '/', component: HomePage },   // home 页面

]

export const router = new VueRouter({
  routes
});


