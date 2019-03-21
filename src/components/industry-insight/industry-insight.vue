<template src="./industry-insight.html"></template>
<!-- <script src="https://code.highcharts.com/modules/histogram-bellcurve.js"></script> -->

<script>
import PieChartGender from '@/components/industry-insight/pie-chart-gender';
import PieChartFaculty from '@/components/industry-insight/pie-chart-faculty';
import PieChartYear from '@/components/industry-insight/pie-chart-year';
import LineChartNum from '@/components/industry-insight/line-chart-num';
import BarChartNa from '@/components/industry-insight/bar-chart-nationality';
import LineChartSalary from '@/components/industry-insight/line-chart-salary';
// import LineSalaryDist from '@/components/industry-insight/line-salary-dist';

export default {
  name: 'MainChart',
  components: {
    PieChartGender,
    PieChartFaculty,
    PieChartYear,
    LineChartNum,
    BarChartNa,
    LineChartSalary,
  },
};


</script>
