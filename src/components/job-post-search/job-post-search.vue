<template src="job-post-search.html"></template>

<style></style>
<script>
import eachPost from './each-post';

export default {
  name: 'JobPostSearch',
  components: {
    eachPost,
  },
  data() {
    return {
      positions: [

        {
          "position_token": "88b69a350549efb3604bdf5a8439db4fd5fa7e1f5ccf11768e34e92e38eb151c",
          "position_location": 'Singapore',
          "logo_url": "https://img.icons8.com/color/96/000000/organization.png",
          "position_name": "Software Engineer",
          "company_name": "Google"
        },
        {
          "position_token": "asdfsfsabjislfjdilwfjeoajskdlf1o23213123442031203ajskdjfkaslkdd",
          "position_location": 'Singapore',
          "logo_url": "https://img.icons8.com/color/96/000000/organization.png",
          "position_name": "Software Engineer Internship",
          "company_name": "JP Morgan"
        },
        {
          "position_token": "asdfsfsabjislfjdilwfjeoajskdlf1o23213123442031203ajskdjfkaslkdd",
          "position_location": 'Singapore',
          "logo_url": "https://img.icons8.com/color/96/000000/organization.png",
          "position_name": "Technology Engineer",
          "company_name": "Goldman Sachs"
        },
      ],
    };
  },
};
</script>