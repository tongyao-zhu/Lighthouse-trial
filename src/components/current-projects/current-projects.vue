<template src="./current-projects.html"></template>
<style src="./current-projects.scss"></style>
<script>
import eachProject from './each-project';

export default {
  name: 'CurrentProjects',
  components: {
    eachProject,
  },
  data() {
    return {
      projects: [

        {
          title: 'Crowd-based Innovation: a modern approach',
          description: 'New generation distributed computing systems often consist of co-operating components, and make use of object middleware technology. Due to their requirements, it is usually not acceptable to cause major interruptions in the service provided by these systems.',
          requirments: ['Good programming skills', 'Excellent communication skills'],
          period: 'Jun, 2019 - Dec, 2019',
          contact: 'John@u.nus.edu'
        },

        {
          title: 'Crowdfunding and Entrepreneurial Learning',
          description: 'The proposed architecture should minimise the requirements on the application layer. it is usually not acceptable to cause major interruptions in the service provided by these systems.',
          requirments: ['Good programming skills', 'Excellent communication skills'],
          period: 'Jun, 2019 - Dec, 2019',
          contact: 'John@u.nus.edu'
        },

        {
          title: 'Blockchain Governance and Consensus Mechanisms',
          description: 'The objective of this assignment is to define an architecture and sign of middleware support for reconfiguring CORBA-based distributed systems at run-time',
          requirments: ['Good programming skills', 'Excellent communication skills'],
          period: 'Jun, 2019 - Dec, 2019',
          contact: 'John@u.nus.edu'
        },
      ],
    };
  },
};

</script>
