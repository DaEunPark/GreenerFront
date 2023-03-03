<template>
  <div class='mostViewProd'>
    <h3>{{title}}</h3>
    <div></div>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  }
}
</script>

<style scoped>
  .mostViewProd {
    width:1200px;
    height:400px;
    margin: 30px auto 50px;
    background-color:bisque;
  }
  h3 {
    text-align: left;
  }
  .goods {
    display: inline-block;
  }
  img {
    display: block;
    margin: 0 20px;
    float: left;
  }
</style>
