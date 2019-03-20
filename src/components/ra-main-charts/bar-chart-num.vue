<template>
  <highcharts :options="options" ref="bar-chart" class="bar"></highcharts>
</template>

<script>
import HighchartsVue from 'highcharts-vue';
// import Highcharts from 'highcharts';

const data = {
  chart: {
    type: 'bar',
  },
  title: {
    text: 'Number of RAs by Major',
  },
  subtitle: {
    text: 'in the past 5 years',
  },
  xAxis: {
    type: 'category',
    labels: {
      rotation: -45,
      style: {
        fontSize: '13px',
        fontFamily: 'Verdana, sans-serif',
      },
    },
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Number of people',
    },
  },
  legend: {
    enabled: false,
  },
  tooltip: {
    pointFormat: 'Number of people: <b>{point.y:.1f} </b>',
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0,
      color: '#FFC300',
    },
  },
  series: [{
    name: 'Population',
    data: [
      ['Life Sci', 50],
      ['Comp Sci', 25],
      ['Civil Eng', 20],
      ['Material Sci', 15],
      ['Psychology', 15],
      ['Economics', 15],
      ['Chemical Eng', 12],
      ['Info Systems', 10],
      ['Biz Analytics', 5],
    ],
    dataLabels: {
      enabled: true,
      rotation: -90,
      color: '#000080',
      align: 'right',
      format: '{point.y:.0f}', // one decimal
      y: 10, // 10 pixels down from the top
      style: {
        fontSize: '10px',
        fontFamily: 'Verdana, sans-serif',
      },
    },
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
.bar {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 60%;
}
</style>
