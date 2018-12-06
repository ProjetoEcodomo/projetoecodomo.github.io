<template>
  <GenericView title="Tutorial">
    <div class="content">
      <p>Caso lhe interesse criar um protótipo, os links abaixo oferecem fontes
         tanto para construção do hardware, quanto implementação do software.
         Disponibilizamos um manual em PDF para o hardware e o repositório com os
         códigos do projeto open-source no Github.
        <br><br>
         Obs: Caso nunca tenha trabalhado com arduino, não hesite em abrir o manual,
         ele é um bom material de iniciação! =)
      </p>
      <Button label="Hardware" @click.native="goLink('https://drive.google.com/file/d/12-7uLcJP-VyHiSwyGIChJBFUjAL8xokz/view?usp=sharing')"/>
      <Button label="Software" @click.native="goLink('https://github.com/ProjetoEcodomo')"/>
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
