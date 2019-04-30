import Vue from 'vue';
import Router from 'vue-router';

import Dashboard from './views/Dashboard.vue'
import Browse from './views/Browse.vue';
import Profile from './views/Profile.vue';
import Home from './views/Home.vue'

Vue.use(Router);

const routes = [
    {
      path: './dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: './browse',
      name: 'browse',
      component: Browse
    },
    {
      path: './profile',
      name: 'profile',
      component: Profile
    },
    {
      path: './',
      name: 'home',
      component: Home
    }
  ];
  
export default new Router({
  routes,
  mode: 'history',
  base: __dirname,
});