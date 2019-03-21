<template>
  <highcharts :options="options" ref="bar-chart" class="bar"></highcharts>
</template>

<script>
import HighchartsVue from 'highcharts-vue';

const data = {
  chart: {
    type: 'column',
  },
  title: {
    text: 'Nationality',
  },
  subtitle: {
    text: 'Source: NUS datalake',
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
      ['China', 24.2],
      ['Singapore', 20.8],
      ['India', 14.9],
      ['Thailand', 13.7],
      ['Malaysia', 13.1],
      ['Indonesia', 12.7],
      ['Hong Kong', 12.4],
      ['Russia', 12.2],
      ['Brazil', 12.0],
      ['Mexico', 11.7],
      ['Kenya', 11.5],
    ],
    dataLabels: {
      enabled: true,
      rotation: -90,
      color: '#FFFFFF',
      align: 'right',
      format: '{point.y:.1f}', // one decimal
      y: 10, // 10 pixels down from the top
      style: {
        fontSize: '13px',
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
  width: 100%;
}
</style>
