<template>
  <header class="sticky top-0 z-50 bg-[#0a0514]/90 backdrop-blur-md border-b border-amber-400/30 shadow-lg">
    <div class="container mx-auto px-4 py-3 md:py-4 flex justify-between items-center">
      
      <!-- Логотип + Название -->
      <router-link to="/" class="flex items-center gap-5 md:gap-6 group">
        <!-- Картинка-логотип: увеличенная в полтора раза -->
        <img 
          src="@/assets/images/star.jpg" 
          alt="Звезда" 
          class="w-10 h-10 md:w-14 md:h-14 object-cover rounded-full shadow-md border border-amber-400/40 group-hover:scale-105 transition-transform duration-300"
        >
        <!-- Текст -->
        <span class="text-xl md:text-3xl font-serif text-amber-400 tracking-wider drop-shadow-[0_0_8px_rgba(251,191,36,0.5)] group-hover:drop-shadow-[0_0_12px_rgba(251,191,36,0.7)] transition-all">
          Moreh Tedeh
        </span>
      </router-link>

      <!-- Десктопное меню (скрыто на мобильных) -->
      <nav class="hidden lg:flex space-x-6 xl:space-x-8 text-sm xl:text-base font-medium">
        <router-link to="/" class="nav-link">Обо мне</router-link>
        <router-link to="/yoga-vasishtha" class="nav-link">Йога-Васиштха</router-link>
        <router-link to="/tarot" class="nav-link">Гадание на таро</router-link>
        <router-link to="/runes" class="nav-link">Гадание на рунах</router-link>
        <router-link to="/ritual-cleaning" class="nav-link">Ритуальные Чистки</router-link>
        <router-link to="/financial-horoscope" class="nav-link">Финансовый Гороскоп</router-link>
        <router-link to="/library" class="nav-link">Моя библиотека</router-link>
        <router-link to="/additional-materials" class="nav-link">Доп. материалы</router-link>
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
        <router-link @click="closeMenu" to="/yoga-vasishtha" class="nav-link-mobile">Йога-Васиштха</router-link>
        <router-link @click="closeMenu" to="/tarot" class="nav-link-mobile">Гадание на таро</router-link>
        <router-link @click="closeMenu" to="/runes" class="nav-link-mobile">Гадание на рунах</router-link>
        <router-link @click="closeMenu" to="/ritual-cleaning" class="nav-link-mobile">Ритуальные Чистки</router-link>
        <router-link @click="closeMenu" to="/financial-horoscope" class="nav-link-mobile">Финансовый Гороскоп</router-link>
        <router-link @click="closeMenu" to="/library" class="nav-link-mobile">Моя библиотека</router-link>
        <router-link @click="closeMenu" to="/additional-materials" class="nav-link-mobile">Дополнительные материалы</router-link>
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
  @apply relative text-gray-200 hover:text-amber-400 transition-colors duration-300 after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-amber-400 after:transition-all after:duration-300 hover:after:w-full;
}

.nav-link-mobile {
  @apply block py-2 px-3 text-gray-200 hover:text-amber-400 hover:bg-white/5 rounded-lg transition-all duration-200;
}

.router-link-active {
  @apply text-amber-400 after:w-full;
}

.nav-link-mobile.router-link-active {
  @apply bg-amber-400/10 text-amber-400;
}
</style>