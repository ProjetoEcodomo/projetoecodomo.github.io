<template>
  <div class="wrapper">
    <sidenav class="sidenav"/>
    <div class="main-content">
      <div class="container-fluid">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>

import Sidenav from './components/Sidenav.vue';

export default {
  name: 'app',
  components: {
    Sidenav,
  },
};
</script>


<style>
@import url('https://fonts.googleapis.com/css?family=Roboto');

#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #5E6C54;
  display: block;
}

.sidenav {
  width: 19%;
  transition: .2s;
  z-index: 2;
  position: fixed;
  overflow-x: hidden;
}

.main-content {
  margin-left: 19%;
  transition: .2s;
}

.container-fluid {
  padding: 0;
}

@media screen and (max-width: 480px) {
  .sidenav{width: 15%}
  .main-content{margin-left: 15%}
}

</style>
