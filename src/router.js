import Vue from 'vue';
import Router from 'vue-router';

import Dashboard from './views/Dashboard.vue'
import Browse from './views/Browse.vue';
import Profile from './views/Profile.vue';
import Home from './views/Home.vue'
import OwnerDashboard from './views/OwnerDashboard.vue'

Vue.use(Router);

const routes = [
    {
      path: '/dashboard/:openTab',
      name: 'dashboard',
      props: true,
      component: Dashboard
    },
    {
      path: '/browse',
      name: 'browse',
      component: Browse
    },
    {
      path: '/profile/:sitterId',
      name: 'profile',
      props: true,
      component: Profile
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/ownerdashboard',
      name: 'ownerdashboard',
      component: OwnerDashboard
    }
  ];
  
export default new Router({
  base:"/~heviir/kasutajaliidesed/prax4/",
  routes
});