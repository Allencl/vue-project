import VueRouter from 'vue-router';

// import HomePage from './homeDrag/index.vue';   // 首页
// import RegisterPage from './components/Register.vue';
// import LargeScreenPage from './largeScreen/index.vue';   // 大屏
import LargeScreenPage2 from './home3/index.vue';   // 大屏
// import TinymcePage from './tinymce/index.vue';   // 富文本 编辑器
// import DragLayout from './dragLayout/index.vue';   // 自定义 拖拽布局


// import Page from './board/index1.vue';
// import Board1 from './board/index1.vue';
// import Board2 from './board/index2.vue';


// import MessagePage from './message/index.vue';
// D:\code\vue-project\src\board\index1.vue

import TableEditPage from './table/index.vue';   // 可编辑 table



const routes = [
  // { path: '/', component: RegisterPage },   // 注册页面
  { path: '/', component: TableEditPage },   // home 页面





]

export const router = new VueRouter({
  routes
});


