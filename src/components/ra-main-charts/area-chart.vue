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
    text: 'Opening RA Positions by different Majors',
  },
  subtitle: {
    text: 'in the past 5 years',
  },
  xAxis: {
    title: {
      text: 'Major',
    },
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
        return this.value;
      },
    },
  },
  tooltip: {
    pointFormat: '{series.name} had <b>{point.y:,.0f}</b> RAs <br/> in {point.x}',
  },
  plotOptions: {
    area: {
      pointStart: 2014,
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
    name: 'Life Science',
    data: [
      6, 11, 20, 30, 24,
    ],
  }, {
    name: 'Computer Science',
    data: [
      5, 7, 10, 9, 12,
    ],
  }, {
    name: 'Civil Engineering',
    data: [
      4, 7, 4, 5, 8,
    ],
  }, {
    name: 'Material Science',
    data: [
      6, 11, 8, 9, 7,
    ],
  }, {
    name: 'Psychology',
    data: [
      10, 6, 4, 7, 9,
    ],
  }, {
    name: 'Economics',
    data: [
      8, 7, 6, 5, 7,
    ],
  }, {
    name: 'Chemical Engineering',
    data: [
      2, 8, 3, 6, 4,
    ],
  }, {
    name: 'Information Systems',
    data: [
      3, 1, 4, 6, 7,
    ],
  }, {
    name: 'Business Analytics',
    data: [
      1, 0, 2, 2, 3,
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
  width: 60%;
}

</style>
