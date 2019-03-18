<template src="./opening-postions.html"></template>
<style src="./opening-positions.scss" lang="scss"></style>
<script>

import eachPosition from './each-position';

export default {
  name: 'OpeningPositions',
  components:{
    eachPosition
  },

  data(){
    return{
      positions:[
        "Data Centre Technician Internship",
        "Financial Analyst, Media Incentives",
        "Global Marketing Analyst, Media Lab",
        "Operations Specialist, Google People Service",
        "Software Engineer, Front End Development"
      ]
    }
  }
};
</script>
