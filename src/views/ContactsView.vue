<template>
  <div class="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0a0514] via-[#120a24] to-[#1a0f2e] py-20 px-6">
    
    <!-- Фоновые мистические элементы -->
    <div class="absolute inset-0 z-0">
      <div class="stars"></div>
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-amber-400/10 rounded-full"></div>
    </div>

    <div class="relative z-10 max-w-4xl mx-auto">
      
      <h1 class="text-5xl md:text-7xl text-center font-serif tracking-wider text-amber-300 mb-6 drop-shadow-[0_0_15px_rgba(251,191,36,0.4)]">
        Мои Контакты
        <span class="block w-32 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mt-6"></span>
      </h1>

      <p class="text-center text-amber-400/70 text-lg mb-16 max-w-2xl mx-auto">
        Связаться со мной можно через любой удобный канал
      </p>

      <div class="grid md:grid-cols-2 gap-8">
        
        <!-- Telegram -->
        <a href="https://t.me/moreh_ha_tzedek" target="_blank"
           class="group bg-black/40 backdrop-blur-md border border-amber-400/30 hover:border-amber-400/60 rounded-3xl p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-amber-500/10 flex flex-col items-center text-center">
          <div class="w-20 h-20 mb-6 text-[#229ED9]">
            <!-- Telegram SVG -->
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 11.944 0zm4.962 8.1-1.74 8.2c-.13.59-.48.73-.97.45l-2.64-1.95-1.27.97c-.14.1-.26.2-.53.2l.19-2.7 4.92-4.7c.22-.2-.05-.3-.34-.1L8.3 13.4l-2.6-.8c-.55-.17-.56-.55.13-.82l10.2-3.93c.43-.16.85.24.65.8z"/>
            </svg>
          </div>
          <h3 class="text-2xl font-serif text-amber-300 mb-2">Telegram</h3>
          <p class="text-amber-400 font-medium">@moreh_ha_tzedek</p>
          <p class="text-sm text-gray-400 mt-4 group-hover:text-amber-400/80 transition-colors">Быстрый ответ • Личный чат</p>
        </a>

        <!-- Max Messenger -->
        <a href="https://max.ru/join/JJZcVOL9ZKmGh2Z1ppcpXnjri-tF39_r4_IuRCmDECs" target="_blank"
           class="group bg-black/40 backdrop-blur-md border border-amber-400/30 hover:border-amber-400/60 rounded-3xl p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-amber-500/10 flex flex-col items-center text-center">
          <div class="w-20 h-20 mb-6 text-emerald-400">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2 2 2 0 01-2-2 2 2 0 012-2 2 2 0 01-2-2 2 2 0 012-2 2 2 0 01-2-2 2 2 0 012-2z" />
            </svg>
          </div>
          <h3 class="text-2xl font-serif text-amber-300 mb-2">Макс Мессенджер</h3>
          <p class="text-amber-400/90">Пригласительная ссылка</p>
          <p class="text-xs text-gray-500 mt-6">Быстрый и удобный канал связи</p>
        </a>

        <!-- Email -->
        <a href="mailto:moreylspirit@gmail.com"
           class="group bg-black/40 backdrop-blur-md border border-amber-400/30 hover:border-amber-400/60 rounded-3xl p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-amber-500/10 flex flex-col items-center text-center">
          <div class="w-20 h-20 mb-6 text-amber-400">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7" d="M3 8l7.89 5.26a2.01 2.01 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2" />
            </svg>
          </div>
          <h3 class="text-2xl font-serif text-amber-300 mb-2">Email</h3>
          <p class="text-amber-400 font-medium break-all">moreylspirit@gmail.com</p>
        </a>

        <!-- VK -->
        <a href="https://vk.com/moreh_ha_tzedek" target="_blank"
           class="group bg-black/40 backdrop-blur-md border border-amber-400/30 hover:border-amber-400/60 rounded-3xl p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-amber-500/10 flex flex-col items-center text-center">
          <div class="w-20 h-20 mb-6 text-blue-400">
            <span class="text-5xl">VK</span>
          </div>
          <h3 class="text-2xl font-serif text-amber-300 mb-2">Группа ВКонтакте</h3>
          <p class="text-amber-400">moreh_ha_tzedek</p>
        </a>

        <!-- YouTube -->
        <a href="https://www.youtube.com/@morehhatzedek" target="_blank"
           class="group col-span-1 md:col-span-2 bg-black/40 backdrop-blur-md border border-amber-400/30 hover:border-amber-400/60 rounded-3xl p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-amber-500/10 flex flex-col items-center text-center">
          <div class="w-20 h-20 mb-6 text-red-500">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.3 3.5 12 3.5 12 3.5s-7.3 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c2.1.6 9.4.6 9.4.6s7.3 0 9.4-.6a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8z"/>
              <path fill="#fff" d="M10 15.5v-7l6 3.5-6 3.5z"/>
            </svg>
          </div>
          <h3 class="text-2xl font-serif text-amber-300 mb-2">YouTube канал</h3>
          <p class="text-amber-400">@morehhatzedek</p>
        </a>

      </div>

      <div class="text-center mt-16 text-amber-400/40 text-sm tracking-widest font-mono">
        Moreh ha_Tzedek — духовное сопровождение
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Нет логики
</script>

<style scoped>
@reference "tailwindcss";

.stars {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  background-image: 
    radial-gradient(2px 2px at 30px 40px, #fff, transparent),
    radial-gradient(1px 1px at 80px 90px, #facc15, transparent),
    radial-gradient(2px 2px at 150px 200px, #c4b5fd, transparent),
    radial-gradient(1px 1px at 300px 350px, #fff, transparent),
    radial-gradient(3px 3px at 450px 100px, #ddd6fe, transparent);
  background-repeat: repeat;
  opacity: 0.5;
  animation: twinkle 6s ease-in-out infinite alternate;
}

@keyframes twinkle {
  0% { opacity: 0.4; }
  100% { opacity: 0.75; }
}

.delay-700 {
  animation-delay: 700ms;
}
</style>