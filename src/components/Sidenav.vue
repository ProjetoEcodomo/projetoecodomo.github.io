<template>
  <div class="sidenav">
    <img src="@/assets/logo.png" class="logo"/>
    <div class="nav">
      <router-link to="/"><img src="@/assets/home.png" class="icon">HOME</router-link>
      <router-link to='/cupulas'><img src="@/assets/reichstag-dome.png" class="icon">CÚPULAS</router-link>
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
  padding: 0 2px 5px 2px;
  transition: .5s;
}

.nav a:hover{
  background-color: whitesmoke;
  color: grey;
  transition: .5s;
}


@media screen and (max-width: 490px) {
  .sidenav{width: 10%}
  .nav a{font-size: 0}
  .icon {width: 100%}
}
@media screen and (max-width: 710) {

}

</style>
