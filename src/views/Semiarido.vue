<template>
  <GenericView title="Semiárido">
    <div class="content">
      <h2>MUDANÇAS CLIMÁTICAS</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris ut eros sodales, efficitur ligula eu, feugiat lectus.
        Sed viverra orci quis elit bibendum imperdiet.
        Quisque est mauris, dapibus sed ultrices ut, feugiat eu magna. Curabitur non vehicula metus.
        Maecenas feugiat, libero et euismod malesuada,
        felis sapien ultrices tortor, sit amet ultricies tellus metus id orci.
        Vivamus congue commodo semper.
        Quisque consectetur lectus at molestie laoreet.
        Aliquam sit amet nisl egestas, mattis ligula eu, luctus est.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Nulla imperdiet tortor a dui molestie interdum.
        Proin elementum tellus ac felis elementum, hendrerit porttitor mi facilisis.
        Maecenas nec ligula rutrum nisi malesuada elementum.</p>
      <b class="quote">"Lorem Ipsum has been the industry’s standard
        dummy text ever since the 1500s,
         when an unknown printer.”</b>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris ut eros sodales, efficitur ligula eu, feugiat lectus.
        Sed viverra orci quis elit bibendum imperdiet.
        Quisque est mauris, dapibus sed ultrices ut, feugiat eu magna. Curabitur non vehicula metus.
        Maecenas feugiat, libero et euismod malesuada,
        felis sapien ultrices tortor, si
        margin-bottom: 20px;t amet ultricies tellus metus id orci.
        Vivamus congue commodo semper.
        Quisque consectetur lectus at molestie laoreet.
        Aliquam sit amet nisl egestas, mattis ligula eu, luctus est.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Nulla imperdiet tortor a dui molestie interdum.
        Proin elementum tellus ac felis elementum, hendrerit porttitor mi facilisis.
        Maecenas nec ligula rutrum nisi malesuada elementum.</p>
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
