<template>
  <div class="container">
    <p class="label">Ambiente</p>
    <b-card-group deck class="cards">
      <card title="Temperatura"
            :value="`${data.temperature_env}°C`"
            :img="temp_icon"
            v-if="data.temperature_env"/>
      <card title="Umidade"
            :value="`${data.humidity_env}%`"
            :img="humidity_icon"
            v-if="data.humidity_env"/>
      <card title="Luminosidade"
            :value="`${data.luminosity}lm`"
            :img="luminosity_icon"
            v-if="data.luminosity"/>
    </b-card-group>

    <p class="label">Solo</p>
    <b-card-group deck class="cards">
      <card title="Temperatura"
            :value="`${data.temperature_soil}°C`"
            :img="temp_icon"
            v-if="data.temperature_soil"/>
      <card title="Umidade"
            :value="`${data.humidity_soil}%`"
            :img="humidity_icon"
            v-if="data.humidity_soil"/>
    </b-card-group>
    <charts v-if="requestDone" :data="data"/>
    <div class="row">
      <div class="col"><charts v-if="requestDone" :data="data"/> </div>
      <div class="col"><charts v-if="requestDone" :data="data"/></div>
    </div>
  </div>
</template>

<script>
import Card from '@/components/CupulaDataCard.vue';
import Charts from '@/components/Charts.vue';

export default {
  data() {
    return {
      requestDone: false,
      data: {},
      temp_icon: 'https://i.ibb.co/TPWT3zK/thermometer.png',
      humidity_icon: 'https://i.ibb.co/N1mYZY1/humidity.png',
      luminosity_icon: 'https://i.ibb.co/LvVK5X6/luminosity.png',
    };
  },
  components: {
    Card,
    Charts,
  },
  beforeMount() {
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
          this.requestDone = true;
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
