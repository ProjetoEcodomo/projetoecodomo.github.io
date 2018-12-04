<template>
  <div class="container">
    <h1 class="title">{{title}}</h1>
    <hr class="line">
    <div class="slot">
      <slot></slot>
    </div>
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
.slot p {
  text-align: justify;
  color: #606060;
  font-size: 16px;
}
.line {
  margin: 26px 0px;
}
@media screen and (max-width: 720px) {
  .title {
    margin: 50px 0px 3px 10px;
  }
  .slot img{
    width: 250px;
  }
}
@media screen and (min-width: 720px) and (max-width: 1024px) {
  .slot img {
    width: 650px;
  }
}
@media screen and (min-width: 1024px) and (max-width: 1200px) {
  .slot img {
    width: 900px;
  }
}

hr {
  margin-bottom: 30px;
}
</style>
