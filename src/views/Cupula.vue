<template>
  <generic-view :title="cupulaInfo.name">
    <div class="buttons">
      <router-link :to="`/cupulas/${cupulaId}`">
        <Button class="dados" label="DADOS"/>
      </router-link>
      <router-link :to="`/cupulas/${cupulaId}/sobre`">
        <Button class="dados" label="SOBRE"/>
      </router-link>
    </div>
    <router-view/>
  </generic-view>
</template>

<script>
import GenericView from '@/views/GenericView.vue';
import Button from '@/components/Button.vue';

export default {
  data() {
    return {
      cupulaId: '',
      cupulaInfo: {},
    };
  },
  components: {
    GenericView,
    Button,
  },
  created() {
    const loader = this.$loading.show();
    this.cupulaId = this.$route.params.id;
    this.getInfo()
      .then(() => {
        loader.hide();
      })
      .catch(() => {
        loader.hide();
      });
  },
  methods: {
    getInfo() {
      return this.$http.get(`/cupulas/${this.cupulaId}`)
        .then((data) => {
          this.cupulaInfo = data.data;
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

.router-link-exact-active .dados {
  background-color: #366A2A;
  color: white;
}

@media screen and (min-width: 320px) and (max-width: 800px) {
  .buttons {
    position: unset;
    margin: 10px 15px 25px;
  }
}
</style>
