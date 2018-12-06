<template>
  <generic-view :title="cupulaInfo.name">
    <div class="buttons">
      <router-link :to="`/cupulas/${cupulaId}`">
        <Button class="dados" label="DADOS"/>
      </router-link>
      <Button label="SOBRE"/>
    </div>
    <cupula-dados :data="cupulaData"></cupula-dados>
  </generic-view>
</template>

<script>
import GenericView from '@/views/GenericView.vue';
import CupulaDados from '@/views/CupulaDados.vue';
import Button from '@/components/Button.vue';


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
    Button,
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

<style>
.buttons {
  position: absolute;
  top: 34px;
  right: 11px;
}

.router-link-active .dados {
  background-color: #366A2A;
  color: white;
}

@media screen and (min-width: 320px) and (max-width: 800px) {
  .buttons {
    position: unset;
    margin: 0 60px 33px;
  }
}
</style>
