<template src='./each-project.html'></template>
<style src='./each-project.scss' lang='scss'></style>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>

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

