import Vue from 'vue';
import Vuetify from 'vuetify';
import VueFire from 'vuefire';
import BootstrapVue from 'bootstrap-vue';
<<<<<<< HEAD
import HighchartsVue from 'highcharts-vue';
import Highcharts from 'highcharts';
import exportingInit from 'highcharts/modules/exporting';
=======
import 'vuetify/dist/vuetify.min.css';
import HighchartsVue from 'highcharts-vue';
>>>>>>> c01b5d12852c9883ef1f7dd2aeb2c946215167b8
import App from './app/app';
import router from './app/router/router';
import './styles/main.scss';


exportingInit(Highcharts);

Vue.config.productionTip = process.env.NODE_ENV === 'production';

Vue.use(BootstrapVue);
<<<<<<< HEAD
Vue.use(HighchartsVue);
Vue.use(Highcharts);
=======
Vue.use(Vuetify);
Vue.use(VueFire);
Vue.use(HighchartsVue);
>>>>>>> c01b5d12852c9883ef1f7dd2aeb2c946215167b8

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
