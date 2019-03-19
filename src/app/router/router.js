import About from '@/components/about/about';
import Contact from '@/components/contact/contact';
import SearchBar from '@/components/search-bar/search-bar';
import Vue from 'vue';
import Router from 'vue-router';
import RecentPublications from '@/components/recent-publications/recent-publications';
import JobPostSearch from '@/components/job-post-search/job-post-search';
import Modal from '@/components/modal/modal';
import CurrentProjects from '@/components/current-projects/current-projects';
import BasicInformation from '@/components/basic-information/basic-information'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: CurrentProjects,
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
    {
      path:'/BasicInformation',
      name:'BasicInformation',
      component: BasicInformation,
    },

  ],
});
