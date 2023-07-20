import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/PostDetail/:idx',
    name: 'PostDetail',
    component: () =>
      import(/* webpackChunkName: 'about' */ '../views/PostDetail.vue')
  },
  {
    path: '/PostEdit/:idx',
    name: 'PostEdit',
    component: () =>
      import(/* webpackChunkName: 'about' */'../views/PostEdit.vue')
  },
  {
    path: '/PostWrite',
    name: 'PostWrite',
    component: () =>
      import(/* webpackChunkName: 'about' */ '../views/PostWrite.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
