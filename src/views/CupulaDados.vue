<template>
  <div>
    <p class="label">Ambiente</p>
    <b-card-group deck class="cards">
      <card title="Temperatura"
            value="25ºC"
            img="https://i.ibb.co/TPWT3zK/thermometer.png"/>
      <card title="Umidade"
            value="20%"
            img="https://i.ibb.co/N1mYZY1/humidity.png"/>
      <card title="Luminosidade"
            value="25klm"
            img="https://i.ibb.co/LvVK5X6/luminosity.png"/>
    </b-card-group>

    <p class="label">Solo</p>
    <b-card-group deck class="cards">
      <card title="Temperatura"
            value="21ºC"
            img="https://i.ibb.co/TPWT3zK/thermometer.png"/>
      <card title="Umidade"
            value="12%"
            img="https://i.ibb.co/N1mYZY1/humidity.png"/>
      <card/>
    </b-card-group>
  </div>
</template>

<script>
import Card from '@/components/Card.vue';

export default {
  components: {
    Card,
  },
};
</script>

<style scoped>
.cards {
  margin-top: 30px;
}

.label {
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
