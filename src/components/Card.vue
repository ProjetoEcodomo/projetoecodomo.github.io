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
  margin: 0 10px;
}

.card-title {
  font-size: .9em;
  margin: 0;
  text-transform: uppercase;
}

.card-value {
  margin: 0;
  font-weight: 900;
  font-size: 3.5em;
}

.img {
  margin-top: 8px;
  width: 75px;
  float: left;
}
</style>
