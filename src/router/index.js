import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../pages/HomePage.vue'
import WeatherPage from '../pages/WeatherPage.vue'
import Tugas from '../pages/Tugas.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/weather', component: WeatherPage },
  { path: '/tugas', component: Tugas }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
