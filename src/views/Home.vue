<template>
  <div class="slides">
    <vueper-slides :arrows="false" fade autoplay :touchable="false"
    :slide-ratio="0.3" fixed-height="100vh">
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
.vueperslide__content-wrapper {
  width: 60%;
}

.vueperslide__title {
  font-family: 'Roboto', sans-serif;
  font-weight: 100;
  font-size: 30px;
  color: #C7C7C7;
}

.vueperslide__content {
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 45px;
  line-height: 50px;
  color: #C7C7C7;
}

.vueperslides__bullet{
  margin: 0.8em 8.05px;
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
          image: 'https://lh4.googleusercontent.com/wO0lxyluCQ1T0-6vb9jwCJ9tD7P94zdmK2gImTUxsx3kXc8eiTgeQeQyb9APWZF1h1iuK8ocG1_gqHkc7WP1=w1366-h662-rw',
        },
        {
          title: 'Você sabia?',
          content: 'O replantio de espécies nativas da Caatinha auxilia na manutenção do ciclo hidrológico local.',
          image: 'https://lh5.googleusercontent.com/CcFVL7ydpXvnaIJV8iGh25Ii_ux7EyVzf-seg8D1IxO99AeJzGPuNEWgejTbZO6i2YodaLe8OjMAXWpmmpsA=w1366-h662-rw',
        },
      ],
    };
  },
};
</script>
