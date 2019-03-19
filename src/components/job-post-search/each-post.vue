<template>
  <div style='background-color:rgb(227,234,245)'>
    <img v-bind:src="position.logo_url" v-bind:alt="position.position_name"
    align="left"
    style='height:70px;width:70px'
    v-bind:title="position.position_name">
    <b style='font-size:100%'>
      {{position.position_name}}</b>
    <br />
    <p style='color:rgb(118,113,113)'>
      {{position.position_location}}</p>
    <p style='font-size:80%;color:rgb(118,113,113)'>
      {{position.company_name}}</p>
  </div>
</template>
<script>
export default {
  name: 'EachPost',
  props: {
    position: {
      type: Object,
      required: true,
    },
  },
};

</script>
