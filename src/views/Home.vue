<template>
  <div class="slides">
    <vueper-slides :arrows="false" fade autoplay :touchable="false"
    :slide-ratio="0.3" fixed-height="100vh" speed="6000">
      <vueper-slide
      v-for="(slide, i) in slides"
      :key="i"
      :image="slide.image"
      :title="slide.title"
      :content="slide.content"></vueper-slide>
    </vueper-slides>
  </div>
</template>

<style>
.container-fluid {
  padding: 0;
}

.vueperslide__content-wrapper {
  width: 60%;
}

.vueperslide__title {
  font-family: 'Roboto';
  font-weight: 100;
  font-size: 25px;
  color: #C7C7C7;
}

.vueperslide__content {
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 40px;
  line-height: 50px;
  color: #C7C7C7;
}

.vueperslides__bullet{
  margin: 30px 5px;
}

@media screen and (min-width: 320px) and (max-width: 720px) {
  .vueperslide__title {
    font-size: 15px;
  }
  .vueperslide__content {
    font-size: 20px;
    line-height: 20px;
  }
}

@media screen and (max-width: 1024px) {
  .vueperslide__title {
    font-size: 20px;
  }
  .vueperslide__content {
    font-size: 30px;
    line-height: 30px;
  }
}
</style>


<script>
import { VueperSlides, VueperSlide } from 'vueperslides';

export default {
  name: 'home',
  components: {
    VueperSlides,
    VueperSlide,
  },
  data() {
    return {
      slides: [
        {
          title: 'Você sabia?',
          content: 'Entre 1980 e 2005, a temperatura máxima no estado Pernambuco subiu 3 graus Celsius.',
          image: 'https://i.ibb.co/hf4wh0V/banner2-min.png',
        },
        {
          title: 'Você sabia?',
          content: 'O replantio de espécies nativas da Caatinha auxilia na manutenção do ciclo hidrológico local.',
          image: 'https://i.ibb.co/9nzGZs6/slide2-min.png',
        },
      ],
    };
  },
};
</script>
