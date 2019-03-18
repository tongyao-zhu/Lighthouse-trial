import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import App from './app/app';
import router from './app/router/router';
importimport Vue from 'vue';
import HighchartsVue from 'highcharts-vue';
import './styles/main.scss';

Vue.config.productionTip = process.env.NODE_ENV === 'production';

Vue.use(BootstrapVue);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
