<template>
  <div class="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0a0514] via-[#120a24] to-[#1a0f2e] py-20 px-6">
    
    <!-- Фоновые элементы -->
    <div class="absolute inset-0 z-0">
      <div class="stars"></div>
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </div>

    <div class="relative z-10 max-w-5xl mx-auto">
      
      <h1 class="text-5xl md:text-7xl text-center font-serif tracking-wider text-amber-300 mb-6 drop-shadow-[0_0_15px_rgba(251,191,36,0.4)]">
        Моя библиотека
        <span class="block w-32 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mt-6"></span>
      </h1>

      <p class="text-center text-amber-400/70 text-lg mb-16 max-w-2xl mx-auto">
        Духовные и эзотерические труды, созданные в традиции Moreh ha_Tzedek
      </p>

      <!-- Книга -->
      <div class="max-w-4xl mx-auto">
        <div class="bg-black/40 backdrop-blur-md border border-amber-400/30 rounded-3xl overflow-hidden">
          
          <div class="grid md:grid-cols-2 gap-10 p-8 md:p-12 items-center">
            
            <!-- Обложка книги -->
            <div class="flex justify-center">
              <div class="relative group">
                <div class="absolute -inset-4 bg-gradient-to-br from-amber-400/30 via-purple-500/20 to-transparent rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700"></div>
                <img 
                  src="@/assets/images/cover.jpg" 
                  alt="Гадальные карты Таро: Эзотерическое учение"
                  class="relative w-full max-w-[320px] md:max-w-md rounded-2xl shadow-2xl border border-amber-400/50 transition-transform duration-500 group-hover:scale-105"
                >
              </div>
            </div>

            <!-- Информация о книге -->
            <div class="space-y-6 text-gray-200">
              <div>
                <h2 class="text-3xl md:text-4xl font-serif text-amber-300 leading-tight">
                  Гадальные карты Таро:<br>
                  <span class="text-amber-400">Эзотерическое учение</span>
                </h2>
                <p class="text-amber-400/80 mt-2">Moreh ha_Tzedek</p>
              </div>

              <p class="text-lg leading-relaxed">
                Полный курс эзотерического понимания Таро. Глубокое погружение в символизм, энергетику и духовное значение Старших и Младших Арканов.
              </p>

              <div class="pt-4">
                <a 
                  href="https://www.youtube.com/watch?v=MrBsoCscg1Y&list=PLfo9hQ4_WGNeOrRiSnI60Ve00zmgcBauy" 
                  target="_blank"
                  class="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-black font-medium px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg shadow-amber-500/30"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5.14v14l11-7z"/>
                  </svg>
                  Смотреть полный плейлист
                </a>
              </div>

              <div class="text-sm text-amber-400/60 pt-6 border-t border-amber-400/20">
                Видеокурс • Полная серия уроков • Глубокое эзотерическое толкование
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Дополнительный текст снизу -->
      <div class="mt-16 text-center text-amber-400/50 text-sm tracking-widest font-mono max-w-2xl mx-auto">
        Библиотека будет пополняться новыми работами.<br>
        Следите за обновлениями в Telegram и YouTube.
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
    radial-gradient(1px 1px at 120px 80px, #facc15, transparent),
    radial-gradient(2px 2px at 250px 180px, #c4b5fd, transparent),
    radial-gradient(1px 1px at 450px 300px, #fff, transparent);
  background-repeat: repeat;
  opacity: 0.45;
  animation: twinkle 8s ease-in-out infinite alternate;
}

@keyframes twinkle {
  0% { opacity: 0.35; }
  100% { opacity: 0.7; }
}

.delay-1000 {
  animation-delay: 1000ms;
}
</style>