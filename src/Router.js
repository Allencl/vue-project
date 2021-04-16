import VueRouter from 'vue-router';

// import HomePage from './homeDrag/index.vue';   // 首页
// import RegisterPage from './components/Register.vue';
// import LargeScreenPage from './largeScreen/index.vue';   // 大屏
// import LargeScreenPage2 from './home2/index.vue';   // 大屏
// import TinymcePage from './tinymce/index.vue';   // 富文本 编辑器
// import DragLayout from './dragLayout/index.vue';   // 自定义 拖拽布局


import Page from './board/index1.vue';
// import MessagePage from './message/index.vue';

const routes = [
  // { path: '/', component: RegisterPage },   // 注册页面
  { path: '/', component: Page },   // home 页面

]

export const router = new VueRouter({
  routes
});


