import Vue from 'vue'
import VueRouter from 'vue-router'
import State from '@/views/State.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'State',
    component: State
  },
  {
    path: '/getters',
    name: 'Getters',
    component: () => import('@/views/Getters.vue')
  },
  {
    path: '/mutations',
    name: 'Mutations',
    component: () => import('@/views/Mutations.vue')
  },
  {
    path: '/actions',
    name: 'Actions',
    component: () => import('@/views/Actions.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
