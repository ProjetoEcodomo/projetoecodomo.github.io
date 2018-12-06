<template>
  <GenericView title="Semiárido">
    <div class="content">
      <h2>MUDANÇAS CLIMÁTICAS</h2>
      <p>As mudanças climáticas não só trazem vulnerabilidades.
        Elas também geram oportunidades para o sertanejo e para a Caatinga,
        desde que quando o ser humano despertar para a sua preservação como
        indutora de prosperidade social e ambiental integrada.
        Para isso, é preciso que sejam adaptadas práticas socioeconômicas,
        como a agricultura familiar.</p>
      <b class="quote">"Os projetos e serviços socioambientais em sintonia com as mudanças
        climáticas precisam ser ampliados no Semiárido,
        região de clima seco e que já se verifica o aumento da temperatura em várias cidades”</b>
      <p>A frase acima é de Francis Lacerda, coordenadora do projeto Ecolume.
        O conceito da Ecolume potencializa a implantação de uma agricultura familiar
        sustentável de baixo carbono no Sertão, aquela capaz de reduzir
        a emissão de gases de efeito estufa através da produção de energia renovável.
        Também absolve, através das plantas, o CO² já disperso na atmosfera.
        E ainda oportuniza a produção de alimentos provenientes do plantio de
        culturas de plantas nativas e adaptadas ao clima local.
        E isso potencializa outros benefícios socioambientais,
        como uma melhor qualidade do ciclo hidrológico e a reeducação
        relativa ao uso da água. "Se o semiárido convive historicamente com pouca chuva,
        solo seco e com altas temperaturas, que aumentarão,
        é indispensável tirar proveito desse cenário. E isso é possível quando
        se transforma a abundante radiação solar do semiárido,
        sendo ela vital para “irrigação” das plantas, através da sua
        transformação em energia elétrica através do painel fotovoltaico para captar e
        bombear água", diz Francis.</p>
    </div>
  </GenericView>
</template>

<script>
import GenericView from '@/views/GenericView.vue';

export default {
  components: {
    GenericView,
  },
};
</script>

<style>
.quote{
  font-size: 25px;
  color: #606060;
}
.content p {
  margin-top: 1rem;
}
</style>
