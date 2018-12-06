<template>
  <GenericView title="Sobre">
    <div class="content">
      <h2>PROJETO ECODOMO</h2>
      <p>Em meio a situação climática e social do semiárido, surge o Projeto Ecolume -
        projeto de pesquisa baseado no modelo de economia circular com agricultura de baixo
        carbono, e que busca a sinergia entre as seguranças hídrica, energética e alimentar da
        região. Nas palavras de Francis Lacerda, coordenadora do projeto:
        “O conceito Ecolume visa apresentar provas materiais de que é possível plantar água,
        “comer Caatinga, e irrigá-la com o sol”.
        <br><br>
        O projeto se baseia no modelo agro voltaico,
        e uma das ideias é a construção de cúpulas geodésicas com sistemas de captação de água
        da chuva, onde haverá o cultivo de mudas de espécies nativas da Caatinga, que deverão
        ser replantadas em seu habitat natural. A educação foi o meio escolhido pelo Ecolume
        para chegar nos agricultores, por isso as cúpulas serão construídas em escolas e universidades.
        O projeto hoje está em execução no Serviço de Tecnologia Alternativa (SERTA) de Ibimirim,
        lá os alunos são ensinados a trabalhar com esse sistema para que possam atuar na transformação
        das circunstâncias econômicas, sociais, ambientais, culturais e políticas, na promoção do
        desenvolvimento sustentável com foco no campo, disseminando esse conhecimento para suas famílias
        e toda a comunidade.
        <br><br>
        Dentro desse contexto, o desafio proposto para o L.O.U.Co e sua equipe
        foi implementar IoT (Internet of Things) no projeto, para monitorar e compartilhar dados
        e indicadores. Nas primeiras semanas, nos adiantamos na definição do problema, que enunciamos
        da seguinte forma: “A falta de monitoramento acarreta a perda de dados vitais ao plantio”,
        no entanto, com um aprofundamento nas pesquisas, constatamos que estabelecer um sistema de
        monitoramento não é o desafio maior imediato, pois existe um viés educativo e a intenção de fazer
        uma sala de situação dentro do Instituto Agronômico de Pernambuco (IPA). Por conta disso, decidimos
        que iríamos desenvolver uma plataforma que fosse educativa e engajasse os jovens inseridos na
        realidade do semi-árido com o conceito Ecolume para solucionar o seguinte problema: “Como podemos
        fazer essa implementação com o foco em pessoas, de forma que eduque e engaje com o conceito
        Ecolume e ao mesmo tempo seja facilmente replicável?" Mas após estruturarmos o cronograma,
        constatamos que esse problema seria inviável de ser solucionado para o período de tempo e
        ferramentas disponíveis, então nós nos reunimos com as partes interessadas do projeto e
        alinhamos que nossa solução obteria dados e os exibiria em uma interface adequada a pesquisadores
        e pessoas interessadas em mudanças climáticas e/ou agricultura no semi-árido, deixando para o
        Ecolume executar a parte educativa utilizando esses dados coletados.</p>
      <img src="http://i67.tinypic.com/25oxh0z.jpg" class="photo"/>
      <iframe width="1020" height="500" src="https://www.youtube.com/embed/GekEpxacBBg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
.content h2 {
  color: #4B5C40;
  font-size: 30px;
}

.content h3 {
  color: #4B5C40;
  font-size: 20px;
}

.content {
  margin: 0px 30px;
}

.photo {
  width: 80%;
  display: block;
  margin: 0 auto 20px;
}

iframe {
  width: 80%;
  display: block;
  margin: 0 auto 60px;
}

@media screen and (max-width: 720px) {
  iframe {
    width: 250px;
    height: 150px;
  }
}
@media screen and (min-width: 720px) and (max-width: 1024px){
  iframe {
    width: 650px;
    height: 300px;
  }
}
@media screen and (min-width: 1024px) and (max-width: 1200px){
  iframe {
    width: 900px;
    height: 360px;
  }
}
</style>
