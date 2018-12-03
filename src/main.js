import Vue from 'vue';
import axios from 'axios';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'vueperslides/dist/vueperslides.min.css';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import App from './App.vue';
import router from './router';

const axiosInstance = axios.create({
  baseURL: 'https://ecodomo-api.herokuapp.com/',
});

Vue.config.productionTip = false;

Vue.prototype.$http = axiosInstance;

Vue.use(BootstrapVue);

Vue.use(Loading, {
  color: 'green',
}, {
  // slots
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
