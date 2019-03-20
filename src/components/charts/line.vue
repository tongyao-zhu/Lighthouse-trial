<template>
  <highcharts :options="options" ref="line-chart" class="line"></highcharts>
</template>


<style scoped>
.line{
	display: block;
	margin-left: auto;
	margin-right: auto;
  width: 100%;
}
</style>


<script>
import HighchartsVue from 'highcharts-vue';

const data = {
  title: {
    text: 'Opening Positions',
  },
  subtitle: {
    text: 'Source: NUS Datalake',
  },
  yAxis: {
    title: {
      text: 'Number of positions',
    },
  },
  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle',
  },
  plotOptions: {
    series: {
      label: {
        connectorAllowed: false,
      },
      pointStart: 2012,
    },
  },
  series: [{
    name: 'Positions',
    data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175],
  }],
  responsive: {
    rules: [{
      condition: {
        maxWidth: 500,
      },
      chartOptions: {
        legend: {
          layout: 'horizontal',
          align: 'center',
          verticalAlign: 'bottom',
        },
      },
    }],
  },
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
