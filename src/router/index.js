import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/ar',
    name: 'AR',
    component: () => import('../views/AR.vue')
  },
  {
    path: '/product/:productId',
    name: 'Product',
    component: () => import('../views/Product.vue')
  },
  {
    path: '/donate',
    name: 'Donate',
    component: () => import('../views/Donate.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
