<template>
  <div class="container">
    <h1 class="title">{{title}}</h1>
    <hr>
    <slot class="slot"></slot>
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
.title {
  margin: 50px 0px 8px 0px;
  color: #4B5C40;
}

.slot {
  margin: 0px 5px;
  text-align: justify;
  color: #606060;
}

hr {
  margin-bottom: 30px;
}
</style>
