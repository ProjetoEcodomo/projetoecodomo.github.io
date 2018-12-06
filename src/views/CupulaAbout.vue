<template>
  <GenericView>
    <div class="content">
      <h2>UMBU</h2>
      <p>{{description}}</p>
      <img src="https://www.destaquenoticias.com.br/wp-content/uploads/2016/12/umbu1-915x480.jpg" class="pics">
    </div>
    <hr>
    <div class="contact">
        <p class="question">Quer conhecer a cúpula?<br>
        <span class="bold">Entre em contato</span></p>
        <p class="getcontact"> Responsável: Arnaldo César<br>
        Contato: (81) 9.9999-9999<br>
        E-mail: arnaldo@cesar.com</p>
    </div>

  </GenericView>
</template>

<script>
import GenericView from '@/views/GenericView.vue';

export default {
  components: {
    GenericView,
  },
  data() {
    return {
      description: 'O fruto é pequeno e arredondado, de casca lisa ou com pequenos pelos, que lhe conferem uma textura levemente aveludada. Com cheiro doce e sabor agradável, levemente azedo, o umbu tem a coloração verde-amarelada. Grande parte da sua composição é aquosa e possui consideráveis propriedades nutricionais, sendo rico em vitamina C. É muito apreciado para consumo humano in natura ou beneficiado, na produção de polpas de fruta, sorvete, geleias e doces. Vale salientar que o fruto maduro dura no máximo dois ou três dias, o que dificulta o consumo in natura. O fruto e a folha do umbuzeiro também são utilizados na alimentação animal.',
    };
  },
};
</script>

<style>
.umbuslide {
  width: 800px;
  align-content: center;
}

hr {
  width: 95%;
  margin-top: 40px;
}

.contact {
  width: 90%;
  margin: auto;
}

.contact .question {
  float: left;
}

.contact .question .bold {
  font-weight: bold;
}

.contact .getcontact {
  float: right;
  text-align: right !important;
}

.content .pics  {
  position: relative;
  width: 80% !important;
  display: block;
  margin: 0 auto;
  border-radius: 3px;
}


</style>
