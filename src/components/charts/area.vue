<template>
  <highcharts :options="options" ref="area-chart" class="area"></highcharts>
</template>

<script>
import HighchartsVue from 'highcharts-vue';

const data = {
  chart: {
    type: 'area',
  },
  title: {
    text: 'Opening Positions by different Majors',
  },
  subtitle: {
    text: 'Sources: NUS Datalake',
  },
  xAxis: {
    allowDecimals: false,
    labels: {
      formatter() {
        return this.value; // clean, unformatted number for year
      },
    },
  },
  yAxis: {
    title: {
      text: 'Number',
    },
    labels: {
      formatter() {
        return this.value / 1000;
      },
    },
  },
  tooltip: {
    pointFormat: '{series.name} had stockpiled <b>{point.y:,.0f}</b><br/>warheads in {point.x}',
  },
  plotOptions: {
    area: {
      pointStart: 1980,
      marker: {
        enabled: false,
        symbol: 'circle',
        radius: 2,
        states: {
          hover: {
            enabled: true,
          },
        },
      },
    },
  },
  series: [{
    name: 'CS',
    data: [
      null, null, 6, 11, 32, 110, 235,
      369, 640, 1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468,
      20434, 24126, 27387, 29459, 31056, 31982, 32040, 31233, 29224, 27342,
      26662, 26956, 27912, 28999, 28965, 27826, 25579, 25722, 24826, 24605,
      24304, 23464, 23708, 24099, 24357, 24237, 24401, 24344, 23586, 22380,
    ],
  }, {
    name: 'BA',
    data: [null, null, null, null, null, null, null, null, null, null,
      5, 25, 50, 120, 150, 200, 426, 660, 869, 1060,
      1605, 2471, 3322, 4238, 5221, 6129, 7089, 8339, 9399, 10538,
      11643, 13092, 14478, 15915, 17385, 19055, 21205, 23044, 25393, 27935,
      30062, 32049, 10000, 21000, 37000, 20000, 25000, 13000, 11000, 10000,
    ],
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
.area{
  display:block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
}

</style>
