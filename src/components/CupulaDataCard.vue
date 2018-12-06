<template>
  <b-card class="card text-right">
    <img v-if="img" class="img" :src="img" alt="Icon">
    <div class="content">
      <p class="card-title">{{ title }}</p>
      <h1 class="card-value">{{ value }}</h1>
    </div>
  </b-card>
</template>

<script>
export default {
  props: {
    title: String,
    value: String,
    img: String,
  },
};
</script>

<style scoped>
.card {
  font-family: 'Roboto';
  margin: 10px;
  color: #707070;
}

.content {
  float: right;
  margin: 0;
}

.card-title {
  font-size: .9em;
  margin: 0;
  text-transform: uppercase;
}

.card-value {
  margin: 0;
  font-weight: 900;
  font-size: 1.8em;
}

.img {
  width: 60px;
  float: left;
}

@media screen and (min-width: 320px) and (max-width: 800px) {
  .content {
    float: none;
    margin-top: 10px;
  }

  .img {
    width: 70px;
    margin: auto;
    display: block;
  }

  .card-value {
    font-size: 1.6em;
  }
}

@media screen and (min-width: 1025px) {
  .card-value {
    font-size: 1.9em;
  }
}
</style>
