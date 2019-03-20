<template src="./ra-main-charts.html"></template>
<style src="./ra-main-charts.scss" lang="scss"></style>

<script>
import BarChartNum from '@/components/ra-main-charts/bar-chart-num';
import BarChartAccp from '@/components/ra-main-charts/bar-chart-accp';
import BoxPlot from '@/components/ra-main-charts/box-plot';
import AreaChart from '@/components/ra-main-charts/area-chart';

export default {
  name: 'MainChart',
  components: {
    BarChartNum,
    BarChartAccp,
    BoxPlot,
    AreaChart,
  },
};


</script>
