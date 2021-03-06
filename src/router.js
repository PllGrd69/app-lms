import Vue from 'vue';
import Router from 'vue-router';
import Person from './components/Person.vue';
import Ping from './components/Ping.vue';
import HelloWorld from './components/HelloWorld.vue'


Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/ping',
      name: 'Ping',
      component: Ping,
    },
    {
      path: '/persons',
      name: 'Person',
      component: Person,
    },

  ],
});
