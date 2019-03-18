<template src='./each-project.html'></template>
<style src='./each-project.scss' lang='scss'></style>


<script>
export default {
  name: 'EachProject',
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
  methods:{
  	sendMail:function(){
  		var str1='mailto:';
  		var str2=this.project.contract;
  		print(str1.concat(st2));
  		return str1.concat(str2);
  	},
  },
};

</script>

