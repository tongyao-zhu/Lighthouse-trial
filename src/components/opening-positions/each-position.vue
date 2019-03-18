<template>
  <div>
    <i class="far fa-address-book"></i>
    align='left'
    class = 'position-icon'>
    <i>{{description}}</i>
  </div>
</template>

<script>
export default {
  name: 'eachPosition',
  props: {
    title: {
      type: String,
      required: true,
    }
  }
};
</script>
