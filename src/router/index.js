import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/PlayerView.vue'

const routes = [
  {
    path: '/',
    name: 'Player',
    component: Home
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
