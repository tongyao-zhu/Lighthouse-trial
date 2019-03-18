import Vue from 'vue';
import Vuetify from 'vuetify';
import VueFire from 'vuefire';
import BootstrapVue from 'bootstrap-vue';
import 'vuetify/dist/vuetify.min.css';
import HighchartsVue from 'highcharts-vue';
import App from './app/app';
import router from './app/router/router';
import './styles/main.scss';

Vue.config.productionTip = process.env.NODE_ENV === 'production';

Vue.use(BootstrapVue);
Vue.use(Vuetify);
Vue.use(VueFire);
Vue.use(HighchartsVue);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
