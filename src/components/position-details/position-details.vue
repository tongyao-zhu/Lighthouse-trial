<template src="./position-details.html"></template>
<style src="./position-details.scss" lang="scss"></style>

<script>
import BarChart from '@/components/charts/bar';
import AreaChart from '@/components/charts/area';
import HorizontalBarChart from '@/components/charts/horizontal-bar';
import Boxplot from '@/components/charts/boxplot';

export default {
  name: 'PositionDetails',
  components: {
    BarChart,
    AreaChart,
    HorizontalBarChart,
    Boxplot,
  },
};


</script>
