<template src="./trajectory-position.html"></template>
<style src="./trajectory-position.scss" lang="scss"></style>

<script>
import Pie from '@/components/charts/pie';
import Lines from '@/components/charts/line';
import Wordcloud from '@/components/charts/word-cloud';


export default{
  name: 'trajectory-position',
  components: {
    Lines,
    Pie,
    Wordcloud,
  },
  data() {
    return {
      number: 170,
    };
  },
};
</script>
