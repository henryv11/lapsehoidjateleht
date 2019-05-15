import Vue from 'vue';
import App from './App.vue';
import router from '../../router';
import '../../bootstrap.js';
import '../../icons.js';
import '../../data.js';

import axios from 'axios'
import VueAxios from 'vue-axios'
 
Vue.use(VueAxios, axios)

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');