import About from '@/components/about/about';
import Contact from '@/components/contact/contact';
import Home from '@/components/home/home';
import Vue from 'vue';
import Router from 'vue-router';
import RecentPublications from '@/components/recent-publications/recent-publications';
import JobPostSearch from '@/components/job-post-search/job-post-search';

Vue.use(Router);

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
    {
      path: '/jobPostSearch',
      name: 'jobPostSearch',
      component: JobPostSearch,
    },
  ],
});
