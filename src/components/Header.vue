<template>
  <header class="sticky top-0 z-50 bg-[#0a0514]/90 backdrop-blur-md border-b border-amber-400/30 shadow-lg">
    <div class="container mx-auto px-4 py-3 md:py-4 flex justify-between items-center">
      
      <!-- Логотип + Название -->
      <router-link to="/" class="flex items-center gap-5 md:gap-6 group">
        <img 
          src="@/assets/images/avatar_3.jpg" 
          alt="Звезда" 
          class="w-12 h-12 md:w-14 md:h-14 object-cover rounded-full shadow-md border border-amber-400/40 group-hover:scale-105 transition-transform duration-300"
        >
        <span class="text-xl md:text-3xl font-serif text-amber-400 tracking-wider drop-shadow-[0_0_8px_rgba(251,191,36,0.5)] group-hover:drop-shadow-[0_0_12px_rgba(251,191,36,0.7)] transition-all">
          Moreh ha_Tzedek
        </span>
      </router-link>

      <!-- Десктопное меню -->
      <nav class="hidden lg:flex space-x-6 xl:space-x-8 text-sm xl:text-base font-medium">
        <router-link to="/" class="nav-link">Обо мне</router-link>
        <router-link to="/services" class="nav-link">Услуги</router-link>
        <span class="nav-link-disabled">Йога-Васиштха</span>
        
        <!-- Разблокировано -->
        <router-link to="/tarot" class="nav-link">Гадание на таро</router-link>
        
        <span class="nav-link-disabled">Гадание на рунах</span>
        
        <router-link to="/astrotaro" class="nav-link">Астротаро</router-link>
        
        <span class="nav-link-disabled">Ритуальные Чистки</span>
        <span class="nav-link-disabled">Финансовый Гороскоп</span>
        
        <router-link to="/library" class="nav-link">Моя библиотека</router-link>
        <router-link to="/articles" class="nav-link">Статьи</router-link>
        
        <span class="nav-link-disabled">Доп. материалы</span>
        
        <router-link to="/contacts" class="nav-link">Мои контакты</router-link>
      </nav>

      <!-- Кнопка гамбургера -->
      <button @click="toggleMenu" class="lg:hidden text-amber-400 focus:outline-none z-50">
        <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Мобильное меню -->
    <div v-show="isMenuOpen" class="lg:hidden bg-black/90 backdrop-blur-md border-t border-amber-400/20 py-4 px-4 shadow-2xl">
      <nav class="flex flex-col space-y-3 text-base">
        <router-link @click="closeMenu" to="/" class="nav-link-mobile">Обо мне</router-link>
        <span @click="closeMenu" class="nav-link-mobile-disabled">Йога-Васиштха</span>
        
        <!-- Разблокировано -->
        <router-link @click="closeMenu" to="/tarot" class="nav-link-mobile">Гадание на таро</router-link>
        
        <span @click="closeMenu" class="nav-link-mobile-disabled">Гадание на рунах</span>
        
        <router-link @click="closeMenu" to="/astrotaro" class="nav-link-mobile">Астротаро</router-link>
        
        <span @click="closeMenu" class="nav-link-mobile-disabled">Ритуальные Чистки</span>
        <span @click="closeMenu" class="nav-link-mobile-disabled">Финансовый Гороскоп</span>
        
        <router-link @click="closeMenu" to="/library" class="nav-link-mobile">Моя библиотека</router-link>
        <router-link @click="closeMenu" to="/articles" class="nav-link-mobile">Статьи</router-link>
        
        <span @click="closeMenu" class="nav-link-mobile-disabled">Доп. материалы</span>
        
        <router-link @click="closeMenu" to="/contacts" class="nav-link-mobile">Мои контакты</router-link>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isMenuOpen = ref(false)

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

function closeMenu() {
  isMenuOpen.value = false
}
</script>

<style scoped>
@reference "tailwindcss";

.nav-link {
  @apply relative text-gray-200 hover:text-amber-400 transition-colors duration-300 
         after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 
         after:bg-amber-400 after:transition-all after:duration-300 hover:after:w-full cursor-pointer;
}

.nav-link-disabled {
  @apply text-gray-500 cursor-not-allowed select-none relative;
}

.nav-link-mobile {
  @apply block py-2 px-3 text-gray-200 hover:text-amber-400 hover:bg-white/5 rounded-lg transition-all duration-200 cursor-pointer;
}

.nav-link-mobile-disabled {
  @apply block py-2 px-3 text-gray-500 cursor-not-allowed select-none;
}

.router-link-active {
  @apply text-amber-400 after:w-full;
}
</style>