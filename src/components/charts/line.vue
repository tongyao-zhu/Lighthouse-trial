<template>
  <highcharts :options="options" ref="line-chart" class="line"></highcharts>
</template>

<script>
import HighchartsVue from 'highcharts-vue';


const data = {
  chart: {
    type: 'line',
  },
  title: {
    text: 'Number of interns',
  },

  subtitle: {
    text: 'Source: NUS data lake',
  },
  xAxis: {
    categories: ['2014', '2015', '2016', '2017', '2018'],
  },
  yAxis: {
    title: {
      text: 'Number of Interns',
    },
  },
  plotOptions: {
    line: {
      dataLabels: {
        enabled: true,
      },
      enableMouseTracking: false,
    },
  },
  series: [{
    name: 'Number',
    data: [20, 30, 40, 10, 5],
  }],
};

export default {
  components: {
    HighchartsVue,
  },
  data() {
    return {
      options: data,
    };
  },
};
</script>

<style scoped>
.line{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
}
</style>
