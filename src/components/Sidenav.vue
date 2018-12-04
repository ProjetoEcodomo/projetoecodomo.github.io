<template>
  <div class="sidenav">
    <img src="@/assets/logo.png" class="logo"/>
    <div class="nav">
      <router-link to="/"><img src="@/assets/home.png" class="icon">HOME</router-link>
      <router-link to='/cupulas'><img src="@/assets/reichstag-dome.png" class="icon">CÚPULAS</router-link>
      <router-link to="/semiarido"><img src="@/assets/catus.png" class="icon">SEMIÁRIDO</router-link>
      <a href="#"><img src="@/assets/info.png" class="icon">SOBRE</a>
      <a href="#"><img src="@/assets/book.png" class="icon">MANUAL</a>
    </div>
  </div>
</template>

<style>

.sidenav{
  left: 0;
  position: fixed;
  height: 100%;
  background-color: #c5d8a3;
  transition: .5s;
  padding: 2% 2% 2% 2%;
}

.logo {
  width: 100%;
  padding: 10px 5px 10% 10px;
  border-bottom: 1px solid #4b5c40;
}

.nav{
  display: block;
  padding-top: 10px;
}

.nav a{
  display: block;
  color:#4b5c40;
  text-decoration: none;
  font-size: 90%;
  text-align: left;
  transition: .5s;

}

.icon {
  width: 20%;
  padding: 2px 2px 5px 2px;
  transition: .5s;
}

.nav a:hover{
  /*background-color: whitesmoke;*/
  color: black;
  transition: .5s;
  /*border-radius: 10px 10px 10px 10px;*/

}


@media screen and (max-width: 491px) {
  .sidenav{width: 10%}
  .nav a{font-size: 0}
  .icon {width: 100%}
  .nav a:hover{background-color: #E6FFDE;
              border-radius: 5px;}

}
@media screen and (max-width: 584) {
}

</style>
