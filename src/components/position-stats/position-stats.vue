<template src="./position-stats.html"></template>
<style src="./position-stats.scss" lang="scss"></style>

<script>
import Pie from '@/components/charts/pie';
import Lines from '@/components/charts/line';
import Bar from '@/components/charts/bar';


export default{
  name: 'position-stats',
  components: {
    Lines,
    Pie,
    Bar,
  },
  data() {
    return {
      number: 170,
    };
  },
};
</script>
