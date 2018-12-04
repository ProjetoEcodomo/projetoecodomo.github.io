<template>
  <div class="container">
    <h1>{{title}}</h1>
    <hr>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
  },
};
</script>

<style>
.container h1{
  margin: 50px 0px 8px 0px;
  color: #4B5C40;
}
.container p{
  text-align: justify;
  color: #606060;
  font-size: 16px;
}
.container hr{
  margin: 26px 0px;
}
</style>
