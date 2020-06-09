import Vue from 'vue'
import VueRouter from 'vue-router'
import Clients from '../views/Clients.vue'
import ClientView from '../views/Client.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Clients',
    component: Clients
  },
  {
    path: '/clients/:clientId',
    name: 'ClientView',
    component: ClientView
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
