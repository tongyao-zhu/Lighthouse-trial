import About from '@/components/about/about';
import Contact from '@/components/contact/contact';
// import About from '@/components/about/about';
// import Contact from '@/components/contact/contact';
import Home from '@/components/home/home';
// import Company from '@/components/company/company';
// import Header from '@/components/header/header';
// import Pie from '@/components/charts/pie.vue';
import Line from '@/components/charts/line.vue';
// import Bar from '@/components/charts/bar.vue';
// import Wordcloud from '@/components/charts/word-cloud.vue';
// import Area from '@/components/charts/area.vue';
import SearchBar from '@/components/search-bar/search-bar';
import IndustryExplorer from '@/components/industry-explorer/industry-explorer';
import Vue from 'vue';
import Router from 'vue-router';
import RecentPublications from '@/components/recent-publications/recent-publications';
import JobPostSearch from '@/components/job-post-search/job-post-search';
import Modal from '@/components/modal/modal';
import CurrentProjects from '@/components/current-projects/current-projects';
import PositionDetails from '@/components/position-details/position-details';
import BasicInformation from '@/components/basic-information/basic-information';
import TrejectoryPosition from '@/components/trajectory-position/trajectory-position';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [

    {
      path: '/',
      name: 'home',
      component: IndustryExplorer,
    },
    {
      path: '/about',
      name: 'about',
      component: TrejectoryPosition,
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
    {
      path: '/JobPostSearch',
      name: 'JobPostSearch',
      component: JobPostSearch,
    },
    {

      path: '/RecentPublications',
      name: 'RecentPublications',
      component: RecentPublications,
    },
    {
      path: '/BasicInformationInternship',
      name: 'BasicInformationInternship',
      component: BasicInformation,
      props: {
        section: 'Internship',
      },
    },
    {
      path: '/BasicInformationResearch',
      name: 'BasicInformationResearch',
      component: BasicInformation,
      props: {
        section: 'Research',
      },
    },
    {
      path: '/BasicInformationTeaching',
      name: 'BasicInformationTeaching',
      component: BasicInformation,
      props: {
        section: 'Teaching',
      },
    },
    {
      path: '/searchBar',
      name: 'searchBar',
      component: SearchBar,
    },
    {
      path: '/positionDetails',
      name: 'positionDetails',
      component: PositionDetails,
    },
  ],
});
