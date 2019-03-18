import About from '@/components/about/about';
import Contact from '@/components/contact/contact';
import Home from '@/components/home/home';
import Vue from 'vue';
import Vuetify from 'vuetify';
import Router from 'vue-router';

Vue.use(Router);
Vue.use(Vuetify);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
  ],
});
