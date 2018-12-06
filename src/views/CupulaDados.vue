<template>
  <div class="container">
    <p class="label">Ambiente</p>
    <b-card-group deck class="cards">
      <card title="Temperatura"
            :value="`${data.temperature_env}°C`"
            img="https://i.ibb.co/TPWT3zK/thermometer.png"/>
      <card title="Umidade"
            :value="`${data.humidity_env}%`"
            img="https://i.ibb.co/N1mYZY1/humidity.png"/>
      <card title="Luminosidade"
            :value="`${data.luminosity}lm`"
            img="https://i.ibb.co/LvVK5X6/luminosity.png"/>
    </b-card-group>

    <p class="label">Solo</p>
    <b-card-group deck class="cards">
      <card title="Temperatura"
            :value="`${data.temperature_soil}°C`"
            img="https://i.ibb.co/TPWT3zK/thermometer.png"/>
      <card title="Umidade"
            :value="`${data.humidity_soil}%`"
            img="https://i.ibb.co/N1mYZY1/humidity.png"/>
    </b-card-group>
  </div>
</template>

<script>
import Card from '@/components/Card.vue';

export default {
  data() {
    return {
      data: {},
    };
  },
  components: {
    Card,
  },
  created() {
    const loader = this.$loading.show();
    this.cupulaId = this.$route.params.id;
    this.getData()
      .then(() => {
        loader.hide();
      })
      .catch(() => {
        loader.hide();
      });
  },
  methods: {
    getData() {
      return this.$http.get(`/cupulas/${this.cupulaId}/data`)
        .then((response) => {
          this.data = response.data;
        }).catch(err => err);
    },
  },
};
</script>

<style scoped>
.label {
  font-family: 'Roboto';
  text-align: left;
  text-transform: uppercase;
  color: #4B5C40;
  font-size: 14px;
  margin-bottom: 0;
}

@media screen and (max-width: 768px) {
  .label {
    text-align: center;
  }
}
</style>
