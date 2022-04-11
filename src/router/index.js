import { createRouter, createWebHistory } from 'vue-router'
//import Vue from 'vue'
import Home from '@/views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/list',
    name: 'NewList',
    component: () => import('@/views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

//Vue.use(Router)

//export default new Router ({
  //mode: 'history',
  //routes: [
    //{
      //path: '/',
      //component: Home
    //},
    //{
      //path: '/list',
      //component: () => import('@/views/AboutView.vue')
    //}
  //]
//})
