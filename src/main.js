import Vue from 'vue';
import ViewUI from 'view-design'

import i18n from '@/locale'

import App from './App.vue';
import router from './router';
import store from './store';


import './index.less'
import 'view-design/dist/styles/iview.css'


Vue.config.productionTip = false;

Vue.use(ViewUI)

new Vue({
  router,
  i18n,
  store,
  render: h => h(App),
}).$mount('#app');
