<template>
  <div class="relative min-h-screen bg-gradient-to-br from-[#0a0514] via-[#120a24] to-[#1a0f2e] flex items-center justify-center py-20 px-6">
    <div class="text-center">
      <h1 class="text-7xl font-serif text-amber-300 mb-6">404</h1>
      <p class="text-2xl text-amber-400/80 mb-8">Страница не найдена</p>
      <router-link 
        to="/"
        class="inline-block px-8 py-4 bg-amber-400 text-black rounded-full font-medium hover:bg-amber-300 transition-colors"
      >
        Вернуться на главную
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>