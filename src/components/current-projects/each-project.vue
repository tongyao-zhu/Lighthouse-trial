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
};

</script>
