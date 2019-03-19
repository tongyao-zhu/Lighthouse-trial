<template src="./trajectory-position.html"></template>
<style src="./trajectory-position.scss" lang="scss"></style>

<script>
import Pie from '@/components/charts/pie.vue';
import Bar from '@/components/charts/bar.vue';
import Lines from '@/components/charts/line';

export default{
	name: 'trajectory-position',
	components:{
		Lines,
		Pie,
		Bar,
	},
};
</script>