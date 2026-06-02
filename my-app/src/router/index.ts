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
    },
    {
  path: '/articles',
  name: 'articles',
  component: () => import('@/views/ArticlesView.vue')
    },

// ==================== ОТДЕЛЬНЫЕ СТАТЬИ ====================

{
  path: '/articles/samaya-opasnaya-bolezn-v-mire',
  name: 'samaya-opasnaya-bolezn-v-mire',
  component: () => import('@/views/articles/SamayaOpasnayaBoleznView.vue')
},

{
  path: '/articles/odna-iz-glavnyh-problem-sovremennogo-obschestva',
  name: 'odna-iz-glavnyh-problem-sovremennogo-obschestva',
  component: () => import('@/views/articles/OdnaIzGlavnyhProblemView.vue')
},

{
  path: '/articles/kak-vliyaet-progress-na-zdorove-cheloveka',
  name: 'kak-vliyaet-progress-na-zdorove-cheloveka',
  component: () => import('@/views/articles/KakVliyaetProgressNaZdoroveView.vue')
},

{
  path: '/articles/ot-chego-zavisit-vash-lichnostnyy-rost',
  name: 'ot-chego-zavisit-vash-lichnostnyy-rost',
  component: () => import('@/views/articles/OtChegoZavisitLichnostnyyRostView.vue')
},

{
  path: '/articles/byt-horoshim-horosho-ili-ploho',
  name: 'byt-horoshim-horosho-ili-ploho',
  component: () => import('@/views/articles/BytHoroshimHoroshoIliPlohoView.vue')
},

{
  path: '/articles/moya-duhovnaya-realizaciya',
  name: 'moya-duhovnaya-realizaciya',
  component: () => import('@/views/articles/MoyaDuhovnayaRealizaciyaView.vue')
},

{
  path: '/articles/v-chem-vasha-unikalnost',
  name: 'v-chem-vasha-unikalnost',
  component: () => import('@/views/articles/VChemVashaUnikalnostView.vue')
} 
  ]
})

export default router