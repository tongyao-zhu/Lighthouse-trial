<template>
  <highcharts :options="options" ref="histogram-chart" class="histogram"></highcharts>
</template>

<script>
import HighchartsVue from 'highcharts-vue';
import loadHistogram from 'highcharts/modules/histogram-bellcurve';
import Highcharts from 'highcharts';

loadHistogram(Highcharts);

const data = {
  title: {
    text: 'Starting Salary of Graduates',
  },
  xAxis: {
    title: {
      text: 'Histogram',
    },
  },


  yAxis: [{
    title: { text: 'Data' },
  }, {
    title: { text: 'Histogram' },
    opposite: true,
  }],

  plotOptions: {
    histogram: {
      color: '#6495ED',
      // binWidth: 0.1,
      baseSeries: 's1',

    },
  },

  series: [{
    type: 'histogram',
    name: 'Starting Salary',
    id: 's1',
    data: [4400, 4400, 4400, 4500, 4700, 4300, 4400, 4500, 4500, 4500, 4100, 4100, 4200, 4500, 4500,
      4099, 4000, 4000, 4100, 5100, 5000, 5070, 5500, 5000, 5000, 5200, 5300, 4800, 4500, 4500,
      4200, 4400, 4500, 4500, 4700, 4900, 4700, 4600, 4500, 4500, 4400, 4400, 4005, 4500, 4600],
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
