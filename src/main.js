// import Vue from 'vue';
import Vue from 'vue/dist/vue.js';
import VueRouter from 'vue-router';
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import 'vue-draggable-resizable/dist/VueDraggableResizable.css'



import App from './App.vue';
import {router} from './Router';
import VueResource from 'vue-resource';

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(ViewUI);
Vue.config.productionTip = false;



new Vue({
  render: h => h(App),
  router,
}).$mount('#app');
