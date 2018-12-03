<template>
  <div class="container">
    <p class="label">Recife</p>
    <b-card-group deck>
      <div v-for="(cupula, index) in cupulas" :key="index">
        <cupula-item :name="cupula.name" :img="cupula.img"></cupula-item>
      </div>
    </b-card-group>
  </div>
</template>

<script>
import CupulaItem from '@/components/CupulaItem.vue';

export default {
  components: {
    CupulaItem,
  },
  data() {
    return {
      cupulas: [],
    };
  },
  created() {
    const loader = this.$loading.show();
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
      return this.$http.get('/cupulas')
        .then((data) => {
          this.cupulas = data.data;
        }).catch(err => err);
    },
  },
};
</script>

<style>
.label {
  text-align: left;
  text-transform: uppercase;
  color: #4B5C40;
  font-size: 12px;
  margin-bottom: 5px;
}

@media screen and (max-width: 768px) {
  .label {
    text-align: center;
  }
}
</style>
