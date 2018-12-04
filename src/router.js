import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import ListaDeCupulas from './views/ListaDeCupulas.vue';
import Manual from './views/Manual.vue';
import Sobre from './views/Sobre.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/cupulas',
      name: 'cupulas',
      component: ListaDeCupulas,
    },
    {
      path: '/manual',
      name: 'manual',
      component: Manual,
    },
    {
      path: '/sobre',
      name: 'sobre',
      component: Sobre,
    },
  ],
});
