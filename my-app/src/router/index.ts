// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/components/About.vue')
    },
    // Добавим заглушки для остальных пунктов меню (позже создадите компоненты)
    {
      path: '/yoga-vasishtha',
      name: 'yoga-vasishtha',
      component: () => import('@/views/YogaVasishtha.vue') // создадите позже
    },
    {
      path: '/tarot',
      name: 'tarot',
      component: () => import('@/views/Tarot.vue')
    },
    {
      path: '/runes',
      name: 'runes',
      component: () => import('@/views/Runes.vue')
    },
    {
      path: '/ritual-cleaning',
      name: 'ritual-cleaning',
      component: () => import('@/views/RitualCleaning.vue')
    },
    {
      path: '/financial-horoscope',
      name: 'financial-horoscope',
      component: () => import('@/views/FinancialHoroscope.vue')
    },
    {
      path: '/library',
      name: 'library',
      component: () => import('@/views/Library.vue')
    },
    {
      path: '/additional-materials',
      name: 'additional-materials',
      component: () => import('@/views/AdditionalMaterials.vue')
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: () => import('@/views/Contacts.vue')
    },
    {
      path: '/astrotaro',
      name: 'AstroTaro',
      component: () => import('@/views/AstroTaro.vue')   // или About.vue стиль
    },
     {
      path: '/report',
      name: 'SpiritualReport',
      component: () => import('@/components/SpiritualReport.vue')   // или About.vue стиль
    },
    {
  path: '/contacts',
  name: 'contacts',
  component: () => import('@/views/ContactsView.vue')
    },
    {
  path: '/library',
  name: 'library',
  component: () => import('@/views/LibraryView.vue')
}
  ]
})

export default router