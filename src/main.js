import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import HighchartsVue from 'highcharts-vue';
import Highcharts from 'highcharts';
import exportingInit from 'highcharts/modules/exporting';
import App from './app/app';
import router from './app/router/router';
import './styles/main.scss';


exportingInit(Highcharts);

Vue.config.productionTip = process.env.NODE_ENV === 'production';

Vue.use(BootstrapVue);
Vue.use(HighchartsVue);
Vue.use(Highcharts);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
