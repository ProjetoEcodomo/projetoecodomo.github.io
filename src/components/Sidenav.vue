<template>
  <div class="sidenav">
    <img src="@/assets/small-icon.png" class="small-logo">
    <img src="@/assets/logo.png" class="logo"/>
    <hr>
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

.small-logo {
  width: 0;
  padding: 0;
  transition: .5s;
}

.logo {
  width: 100%;
  padding: 10px 5px 10% 10px;
  transition: .5s;

}

.nav{
  display: block;
  padding-top: 0;
}

.nav a{
  display: block;
  color:#4b5c40;
  text-decoration: none;
  font-size: 90%;
  text-align: left;
  transition: .5s;
  margin: 2% 0 0 2%;

}

.icon {
  width: 30%;
  transition: .5s;
  margin: 2% 10% 2% 2%;
}

.nav a:hover{
  /*background-color: whitesmoke;*/
  color: black;
  transition: .5s;
  /*border-radius: 10px 10px 10px 10px;*/

}

@media screen and (max-width: 938px) {
  .nav a{font-size: 60%}
  .nav {display: flex}
  .icon {width: 20% }
}

@media screen and (max-width: 498px) {
  .sidenav{width: 10%}
  .nav a{font-size: 0;
        margin: 10%}
  .logo {width: 0;
        float: left;}
  .small-logo {width: 100%}
  .icon {width: 100%;
        margin: 0%}
  .nav a:hover{opacity: 0.6}

}

</style>
