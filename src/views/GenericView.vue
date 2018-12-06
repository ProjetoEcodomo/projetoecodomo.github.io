<template>
  <div class="container">
    <h1 class="title">{{ title }}</h1>
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
  padding: 40px 20px 0;
  color: #4B5C40;
}

.slot p {
  text-align: justify;
  color: #606060;
  font-size: 16px;
}

.line {
  margin: 30px 15px 25px;
}

@media screen and (max-width: 720px) {
  .container {
    padding: 0;
  }

  .title {
    padding: 43px 15px 0;
  }

  .slot img {
    width: 250px;
  }

  .line {
    margin: 20px 15px 25px;
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
</style>
