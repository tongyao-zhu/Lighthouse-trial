<template src="./search-bar.html"></template>
<style src="./search-bar.scss" lang="scss"></style>

<script>
import firebase from 'firebase';

const db = firebase
  .initializeApp({
    databaseURL: 'https://bt3103-lighthouse.firebaseio.com/',
  })
  .database();

export default {
  name: 'SearchBar',
  props: {
    subtitle: {
      default: 'Search for Company',
    },
    tablename: {
      default: 'company',
    },
  },
  data() {
    return {
      check: this.charts,
      input: null,
      colors: [
        'teal',
        'red',
        'brown',
        'blue',
      ],
      data: [
        {
          company_id: '1',
          name: 'Google',
          image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/150px-Google_%22G%22_Logo.svg.png',
        },
        {
          company_id: '2',
          name: 'Amazon',
        },
        {
          company_id: '3',
          name: 'Facebook',
        },
        {
          company_id: '4',
          name: 'DRW',
        },
      ],
    };
  },
  firebase: {
    charts: {
      source: db.ref('charts'),
      asObject: true,
    },
  },
};
</script>
