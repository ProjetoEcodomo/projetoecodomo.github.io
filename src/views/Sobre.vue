<template>
  <GenericView title="Sobre">
    <div class="content">
      <h2>PROJETO ECODOMO</h2>
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
      <h3>CESAR SCHOOL</h3>
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
      <h3>L.O.U.CO</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris ut eros sodales, efficitur ligula eu, feugiat lectus.
        Sed viverra orci quis elit bibendum imperdiet.
        Quisque est mauris, dapibus sed ultrices ut, feugiat eu magna. Curabitur non vehicula metus.
        Maecenas feugiat, libero et euismod malesuada, felis sapien ultrices tortor,
        sit amet ultricies tellus metus id orci.
        Vivamus congue commodo semper.
        Quisque consectetur lectus at molestie laoreet.
        Aliquam sit amet nisl egestas, mattis ligula eu, luctus est.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Nulla imperdiet tortor a dui molestie interdum.
        Proin elementum tellus ac felis elementum, hendrerit porttitor mi facilisis.
        Maecenas nec ligula rutrum nisi malesuada elementum.</p>
      <img src="http://i67.tinypic.com/25oxh0z.jpg" class="photo"/>
      <h3>PROJETO ECOLUME</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris ut eros sodales, efficitur ligula eu, feugiat lectus.
        Sed viverra orci quis elit bibendum imperdiet.
        Quisque est mauris, dapibus sed ultrices ut, feugiat eu magna. Curabitur non vehicula metus.
        Maecenas feugiat, libero et euismod malesuada, felis sapien ultrices tortor,
        sit amet ultricies tellus metus id orci.
        Vivamus congue commodo semper.
        Quisque consectetur lectus at molestie laoreet.
        Aliquam sit amet nisl egestas, mattis ligula eu, luctus est.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Nulla imperdiet tortor a dui molestie interdum.
        Proin elementum tellus ac felis elementum, hendrerit porttitor mi facilisis.
        Maecenas nec ligula rutrum nisi malesuada elementum.</p>
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
