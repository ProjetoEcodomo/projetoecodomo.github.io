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

<style scoped>
.container h1 {
  margin: 50px 0px 8px 0px;
  color: #4B5C40;
}

.container p {
  margin: 0px 5px;
  text-align: justify;
  color: #606060;
}

hr {
  margin-bottom: 30px;
}
</style>
