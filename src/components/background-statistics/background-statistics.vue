<template src="./background-statistics.html"></template>
<style src="./background-statistics.scss" lang="scss"></style>

<script>
import PieChartGender from '@/components/background-statistics/pie-chart-gender';
import PieChartFaculty from '@/components/background-statistics/pie-chart-faculty';
import PieChartYear from '@/components/background-statistics/pie-chart-year';
import PieChartMajor from '@/components/background-statistics/pie-chart-major';
import BarChartRace from '@/components/background-statistics/bar-chart-race';
import BarChartNationality from '@/components/background-statistics/bar-chart-nationality';
import WordCloudModule from '@/components/background-statistics/word-cloud-module';
import HistogramCAP from '@/components/background-statistics/histogram-cap';

export default {
  name: 'Backgroud Statistics',
  components: {
    PieChartGender,
    PieChartFaculty,
    PieChartYear,
    PieChartMajor,
    BarChartRace,
    BarChartNationality,
    WordCloudModule,
    HistogramCAP,
  },
  data() {
    return {
      totalNum: 70,
    };
  },
};


</script>
