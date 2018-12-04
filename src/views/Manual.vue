<template>
  <GenericView title="Manual">
    <div class="content">
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        It has survived not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged.
        It was popularised in the 1960s with the release of Letraset sheets containing.
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      <Button label="PDF - Arduino"/>
      <Button label="GitHub" @click.native="goLink('https://github.com/GrupoMandacaru')"/>
    </div>
  </GenericView>
</template>

<script>
import GenericView from '@/views/GenericView.vue';
import Button from '@/components/Button.vue';

export default {
  components: {
    GenericView,
    Button,
  },
  methods: {
    goLink(url) {
      window.open(url, '_blank');
    },
  },
};
</script>

<style>
.content {
  margin: 0px 20px;
}
</style>
