// import About from '@/components/about/about';
// import Contact from '@/components/contact/contact';
import Home from '@/components/home/home';
// import Company from '@/components/company/company';
// import Header from '@/components/header/header';
// import Pie from '@/components/charts/pie.vue';
// import Line from '@/components/charts/line';
// import Bar from '@/components/charts/bar.vue';
// import Wordcloud from '@/components/charts/word-cloud.vue';
// import Area from '@/components/charts/area.vue';

import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },

    /* {
      path: '/about',
      name: 'about',
      component: About,
    },

    /* {
      path: '/company',
      name: 'company',
      component: Company,
    }, */

    /* {
      path: '/contact',
      name: 'contact',
      component: Contact,
    }, */
  ],
});
