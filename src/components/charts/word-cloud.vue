<template>
  <highcharts :options="options" ref="word-cloud-chart" class="word-cloud"></highcharts>
</template>

<script>
import HighchartsVue from 'highcharts-vue';
import Highcharts from 'highcharts';
import loadWordcloud from 'highcharts/modules/wordcloud';

loadWordcloud(Highcharts);


const cloud = {
  series: [{
    type: 'wordcloud',
    data: [{
        	name: 'UCLA',
        	weight: 2 },
    {
        	name: 'NUS',
        	weight: 5,
    },
    {
        	name: 'NTU',
        	weight: 4,
    },
    {
        	name: 'SMU',
        	weight: 2,
    },
    {
        	name: 'THU',
        	weight: 3,
    },
    {
        	name: 'PKU',
        	weight: 1,
    },
    {
        	name: 'MIT',
        	weight: 3,
    },
    {
        	name: 'CMU',
        	weight: 6,
    },
    {
        	name: 'NYU',
        	weight: 3,
    }],
    name: 'Occurrences',
  }],
  title: {
    text: 'Postgraduate Universities',
  },
  subtitle: {
    	text: 'Source: NUS Data Lake',
  },
};

export default {
  components: {
    HighchartsVue,
  },
  data() {
    return {
      options: cloud,
    };
  },
};
</script>

<style scoped>
.word-cloud{
	display: block;
	margin-left: auto;
	margin-right: auto;
}
</style>
