<template src='basic-information.html'></template>
<style src='basic-information.scss'></style>
<script>
export default {
  name: 'BasicInformation',
  props: {
    section: {
      required: true,
    },
  },
  data() {
    return {
      internship_position: {
        position_title: 'Software Engineer',
        position_start: 'May 2019',
        position_end: 'Aug 2019',
        position_description: 'In this project, you will be working with other engineers to facilitate the development of Google Drive. Detailed job description can be found here: https://www.google.com',
        position_icon_link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/800px-Google_%22G%22_Logo.svg.png',
      }
    };
  },
};

</script>
