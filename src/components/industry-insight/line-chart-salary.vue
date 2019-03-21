<template>
  <highcharts :options="options" ref="line-chart" class="line"></highcharts>
</template>

<script>
import HighchartsVue from 'highcharts-vue';
// import Highcharts from 'highcharts';


const data = {
  chart: {
    type: 'line',
  },
  title: {
    text: 'Starting Salary over the years',
  },

  subtitle: {
    text: 'Source: NUS data lake',
  },
  xAxis: {
    categories: ['2014', '2015', '2016', '2017', '2018'],
  },
  yAxis: {
    title: {
      text: 'Starting Salary',
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
    name: 'Average',
    data: [4300, 4500, 4900, 4800, 5200],
    color: '#00008B',
  }, {
    name: 'Median',
    data: [4400, 4500, 5000, 5100, 5200],
    color: '#FF8C00',
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
