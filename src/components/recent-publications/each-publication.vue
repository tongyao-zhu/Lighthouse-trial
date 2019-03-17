<template>
	<div> 
  <img src="../../assets/publication-icon.png" alt="Recent Publication" style="width:36px;height:36px" align = 'left'>
  <i>{{description}}</i><br/><br/>
   </div> 

</template>


<script> 

export default{
	name: 'Each Publication',
	props: {
		description: {
		type: String,
		required: true


		}
	}		
}

</script>
