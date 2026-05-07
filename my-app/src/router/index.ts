import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',               // 👈 главная страница
      name: 'home',
      component: () => import('@/components/About.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/components/About.vue')
    }
  ]
})

export default router