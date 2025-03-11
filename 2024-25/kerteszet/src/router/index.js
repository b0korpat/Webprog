import { createRouter, createWebHistory } from 'vue-router'
import Novenyek from '../views/Novenyek.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Novenyek,
    },
    {
      path: '/uj-noveny',
      name: 'uj-noveny',
      component: () => import('../views/ujNoveny.vue'),
    }
  ],
})

export default router
