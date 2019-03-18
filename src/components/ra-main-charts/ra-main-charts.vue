<template src="./ra-main-charts.html"></template>
<style src="./ra-main-charts.scss" lang="scss"></style>

<script>
import BarChart from '@/components/ra-main-bar-chart/ra-main-bar-chart'
import HighchartsVue from 'highcharts-vue';
import Highcharts from "highcharts";

export default {
  name: 'OpeningPositions',
  components: {
    BarChart,
  },
};


</script>
