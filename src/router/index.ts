// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: () => import('@/components/About.vue') },

    { path: '/yoga-vasishtha', component: () => import('@/views/YogaVasishtha.vue') },
    { path: '/tarot', component: () => import('@/views/TarotView.vue') },
    { path: '/runes', component: () => import('@/views/Runes.vue') },
    { path: '/ritual-cleaning', component: () => import('@/views/RitualCleaning.vue') },
    { path: '/financial-horoscope', component: () => import('@/views/FinancialHoroscope.vue') },
    { path: '/library', component: () => import('@/views/LibraryView.vue') },
    { path: '/additional-materials', component: () => import('@/views/AdditionalMaterialsView.vue') },
    { path: '/contacts', component: () => import('@/views/ContactsView.vue') },
    { path: '/astrotaro', component: () => import('@/views/AstroTaro.vue') },
    { path: '/report', component: () => import('@/components/SpiritualReport.vue') },
    { path: '/services', component: () => import('@/views/Servises.vue') },

    // Список статей
    {
      path: '/articles',
      name: 'articles',
      component: () => import('@/views/ArticlesView.vue')
    },

    // ==================== ОТДЕЛЬНЫЕ СТАТЬИ ====================
    {
      path: '/articles/samaya-opasnaya-bolezn-v-mire',
      name: 'SamayaOpasnayaBolezn',
      component: () => import('@/views/articles/SamayaOpasnayaBoleznView.vue')
    },
    {
      path: '/articles/odna-iz-glavnyh-problem-sovremennogo-obschestva',
      name: 'OdnaIzGlavnyhProblem',
      component: () => import('@/views/articles/OdnaIzGlavnyhProblemView.vue')
    },
    {
      path: '/articles/kak-vliyaet-progress-na-zdorove-cheloveka',
      name: 'KakVliyaetProgress',
      component: () => import('@/views/articles/KakVliyaetProgressNaZdoroveView.vue')
    },
    {
      path: '/articles/ot-chego-zavisit-vash-lichnostnyy-rost',
      name: 'OtChegoZavisitLichnostnyyRost',
      component: () => import('@/views/articles/OtChegoZavisitLichnostnyyRostView.vue')
    },
    {
      path: '/articles/byt-horoshim-horosho-ili-ploho',
      name: 'BytHoroshim',
      component: () => import('@/views/articles/BytHoroshimHoroshoIliPlohoView.vue')
    },
    {
      path: '/articles/moya-duhovnaya-realizaciya',
      name: 'MoyaDuhovnayaRealizaciya',
      component: () => import('@/views/articles/MoyaDuhovnayaRealizaciyaView.vue')
    },
    {
      path: '/articles/v-chem-vasha-unikalnost',
      name: 'VChemVashaUnikalnost',
      component: () => import('@/views/articles/VChemVashaUnikalnostView.vue')
    },
    {
      path: '/articles/travma-detstva',
      name: 'TravmaDetstva',
      component: () => import('@/views/articles/TravmaDetstvaView.vue')
    },
    {
      path: '/articles/kto-ya',
      name: 'KtoYa',
      component: () => import('@/views/articles/KtoYaView.vue')
    },
    {
      path: '/articles/lyubovnye-otnosheniya',
      name: 'LyubovnyeOtnosheniya',
      component: () => import('@/views/articles/LyubovnyeOtnosheniyaView.vue')
    },
    {
      path: '/articles/styd-i-vina',
      name: 'StydIVina',
      component: () => import('@/views/articles/StydIVinaView.vue')
    },
    {
      path: '/articles/ne-igrayu-s-chuvstvami',
      name: 'NeIgrayuSChuvstvami',
      component: () => import('@/views/articles/NeIgrayuSChuvstvamiView.vue')
    },

    // === НОВЫЕ СТАТЬИ ===
    {
      path: '/articles/o-chuvstve-viny',
      name: 'OChuvstveViny',
      component: () => import('@/views/articles/OChuvstveViny.vue')
    },
    {
      path: '/articles/dofamin-i-zavisimosti',
      name: 'DofaminIZavisimosti',
      component: () => import('@/views/articles/DofaminIZavisimosti.vue')
    },
    {
      path: '/articles/pravila-procvetaniya',
      name: 'PravilaProcvetaniya',
      component: () => import('@/views/articles/PravilaProcvetaniya.vue')
    },
    {
      path: '/articles/horoshee-nastroenie-s-utra',
      name: 'HorosheeNastroenieSUtra',
      component: () => import('@/views/articles/HorosheeNastroeniesUtra.vue')
    },
    {
      path: '/tarot',
      name: 'Tarot',
      component: () => import('@/views/TarotView.vue')
    },
    {
  path: '/additional-materials',
  name: 'additional-materials',
  component: () => import('@/views/AdditionalMaterialsView.vue')
    },
  ]
})

export default router