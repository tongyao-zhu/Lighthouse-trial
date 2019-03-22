<template src="./industry-insight.html"></template>
<style src="./industry-insight.scss" lang="scss"></style>

<script>
import PieChartGender from '@/components/industry-insight/pie-chart-gender';
import PieChartFaculty from '@/components/industry-insight/pie-chart-faculty';
import PieChartYear from '@/components/industry-insight/pie-chart-year';
import LineChartNum from '@/components/industry-insight/line-chart-num';
import BarChartNa from '@/components/industry-insight/bar-chart-nationality';
import LineChartSalary from '@/components/industry-insight/line-chart-salary';
import HistogramSalary from '@/components/industry-insight/histogram-salary';

export default {
  name: 'MainChart',
  components: {
    PieChartGender,
    PieChartFaculty,
    PieChartYear,
    LineChartNum,
    BarChartNa,
    LineChartSalary,
    HistogramSalary,
  },
  data() {
    return {
      totalNum: 552,
    };
  },
};


</script>
