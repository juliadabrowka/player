import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/PlayerView.vue'
import SongList from '../views/SongListView.vue'

const routes = [
  {
    path: '/',
    name: 'Player',
    component: Home
  },
  {
    path: '/songlist',
    name: 'Song List',
    component: SongList
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
