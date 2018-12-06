<template>
  <div class="sidenav">
    <router-link to="/">
      <img src="@/assets/small-icon.png" class="small-logo">
      <img src="@/assets/logo.png" class="logo"/>
    </router-link>
    <hr>
    <div class="nav">
      <router-link to="/">
        <img src="@/assets/home.png" class="icon">
          INÍCIO
      </router-link>
      <router-link to='/cupulas'>
        <img src="@/assets/reichstag-dome.png" class="icon">
          CÚPULAS
      </router-link>
      <router-link to="/semiarido">
        <img src="@/assets/catus.png" class="icon">
          SEMIÁRIDO
      </router-link>
      <router-link to="/sobre">
        <img src="@/assets/info.png" class="icon">
          SOBRE
      </router-link>
      <router-link to="/manual">
        <img src="@/assets/book.png" class="icon">
          TUTORIAL
      </router-link>
      <p class="copyright">
        Ecodomo- 2018<br>© Todos os direitos reservados.
      </p>
    </div>
  </div>
</template>

<style scoped>
.sidenav {
  left: 0;
  position: fixed;
  height: 100%;
  background-color: #c5d8a3;
  transition: .5s;
  padding: 0 2% 2% 2%;
}

.small-logo {
  width: 0;
  padding: 0;
  transition: .5s;
}

.logo {
  width: 90%;
  display: block;
  margin: auto;
  transition: .5s;

}

.nav {
  display: block;
  margin-top: 40px;
}

.nav a {
  display: block;
  color:#4b5c40;
  text-decoration: none;
  font-size: 90%;
  text-align: left;
  transition: .5s;
  margin: 10% 0 0 10%;
}

.icon {
  width: 45px;
  transition: .5s;
  margin: 0% 10% 8% 2%;
}

.nav a:hover {
  color: black;
  transition: .5s;
}

.copyright {
  color:#4b5c40;
  margin-top: 30px;
  font-size: 12px;
  text-align: center;
}

@media screen and (max-width: 1005px) {
  .nav a { font-size: 50% }
  .nav { margin: 0% }
  .icon { width: 20% }
  .sidenav { padding: 4% 2% 2% 2%; }
}

@media screen and (max-width: 498px) {
  .nav { margin-top: 0 }

  .nav a {
    font-size: 0;
    margin: 10%;
  }

  .logo {
    width: 0;
    float: left;
  }

  .small-logo { width: 100% }

  .icon {
    width: 100%;
    margin: 50% 0% 0% 0%;
  }

  .nav a:hover,
  .nav a:active { opacity: 0.3 }
}
</style>
