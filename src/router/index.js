import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Day from '../views/Day.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/day-:number',
    component: Day,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
