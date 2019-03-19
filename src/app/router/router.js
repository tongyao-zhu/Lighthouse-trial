import About from '@/components/about/about';
import Contact from '@/components/contact/contact';
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
import SearchBar from '@/components/search-bar/search-bar';
import Vue from 'vue';
import Router from 'vue-router';
import RecentPublications from '@/components/recent-publications/recent-publications';
import JobPostSearch from '@/components/job-post-search/job-post-search';
import Modal from '@components/modal/modal';


Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
<<<<<<< HEAD
    {
      path: '/',
      name: 'home',
      component: RecentPublications,
    },
    
    {
=======
    {
      path: '/',
      name: 'home',
      component: SearchBar,
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
    {
>>>>>>> c01b5d12852c9883ef1f7dd2aeb2c946215167b8
      path: '/jobPostSearch',
      name: 'jobPostSearch',
      component: JobPostSearch,
    },

  ],
});
