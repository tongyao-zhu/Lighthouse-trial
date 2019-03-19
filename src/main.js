import Vue from 'vue';
import HighchartsVue from 'highcharts-vue';
import BootstrapVue from 'bootstrap-vue';
import App from './app/app';
import router from './app/router/router';
// import Highcharts from 'highcharts';
import './styles/main.scss';

Vue.config.productionTip = process.env.NODE_ENV === 'production';

Vue.use(BootstrapVue);
Vue.use(HighchartsVue);
// Vue.use(Highcharts);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
