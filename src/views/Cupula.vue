<template>
  <generic-view :title="cupulaInfo.name">
    <cupula-dados></cupula-dados>
  </generic-view>
</template>

<script>
import GenericView from '@/views/GenericView.vue';
import CupulaDados from '@/views/CupulaDados.vue';

export default {
  data() {
    return {
      cupulaId: '',
      cupulaInfo: {},
      cupulaData: {},
    };
  },
  components: {
    GenericView,
    CupulaDados,
  },
  created() {
    const loader = this.$loading.show();
    this.cupulaId = this.$route.params.id;
    this.getInfo();
    this.getData()
      .then(() => {
        loader.hide();
      })
      .catch(() => {
        loader.hide();
      });
  },
  methods: {
    getInfo() {
      this.$http.get(`/cupulas/${this.cupulaId}`)
        .then((data) => {
          this.cupulaInfo = data.data;
        }).catch(err => err);
    },
    getData() {
      return this.$http.get(`/cupulas/${this.cupulaId}/data`)
        .then((data) => {
          this.cupulaData = data.data;
        }).catch(err => err);
    },
  },
};
</script>
