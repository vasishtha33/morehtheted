<template>
  <div class="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0a0514] via-[#120a24] to-[#1a0f2e] py-20 px-6">
    <!-- Фоновые звезды -->
    <div class="absolute inset-0 z-0">
      <div class="stars"></div>
    </div>

    <div class="relative z-10 max-w-6xl mx-auto">
      <h1 class="text-5xl md:text-6xl font-serif text-center text-amber-200 mb-6 tracking-wider drop-shadow-[0_0_15px_rgba(251,191,36,0.4)]">
        Гадание на Таро
      </h1>
      <p class="text-center text-amber-400/70 text-xl mb-16 max-w-2xl mx-auto">
        Выберите направление, которое вас интересует
      </p>

      <div class="grid md:grid-cols-2 gap-8 lg:gap-10">
        
        <!-- 1. Чистки -->
        <a href="https://www.youtube.com/watch?v=m1e7pMaUklQ&list=PLfo9hQ4_WGNejy1151J4cxoEcj_MfnA4W&index=1" 
           target="_blank" 
           class="group block">
          <div class="relative overflow-hidden rounded-3xl border border-amber-400/20 hover:border-amber-400/60 transition-all duration-500 h-full">
            <img src="@/attachments/111.jpg" 
                 alt="Чистки" 
                 class="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110">
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
            <div class="absolute bottom-8 left-8 right-8">
              <span class="inline-block px-5 py-1.5 bg-amber-400 text-black text-sm font-medium rounded-full mb-3">Чистки</span>
              <p class="text-2xl font-serif text-white leading-tight">Энергетические чистки</p>
            </div>
          </div>
        </a>

        <!-- 2. Родовые расклады -->
        <a href="https://www.youtube.com/watch?v=XGIjbaajC3s&list=PLfo9hQ4_WGNeyXbn3pl3BjqUp3xlVeXLI" 
           target="_blank" 
           class="group block">
          <div class="relative overflow-hidden rounded-3xl border border-amber-400/20 hover:border-amber-400/60 transition-all duration-500 h-full">
            <img src="@/attachments/222.jpg" 
                 alt="Родовые расклады" 
                 class="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110">
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
            <div class="absolute bottom-8 left-8 right-8">
              <span class="inline-block px-5 py-1.5 bg-amber-400 text-black text-sm font-medium rounded-full mb-3">Родовые</span>
              <p class="text-2xl font-serif text-white leading-tight">Родовые расклады</p>
            </div>
          </div>
        </a>

        <!-- 3. Готовые расклады -->
        <a href="https://www.youtube.com/watch?v=EcyOZvD_cIc&list=PLfo9hQ4_WGNePNb9SO9nlfGa5MveBgDbd" 
           target="_blank" 
           class="group block">
          <div class="relative overflow-hidden rounded-3xl border border-amber-400/20 hover:border-amber-400/60 transition-all duration-500 h-full">
            <img src="@/attachments/333.jpg" 
                 alt="Готовые расклады" 
                 class="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110">
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
            <div class="absolute bottom-8 left-8 right-8">
              <span class="inline-block px-5 py-1.5 bg-amber-400 text-black text-sm font-medium rounded-full mb-3">Расклады</span>
              <p class="text-2xl font-serif text-white leading-tight">Готовые расклады</p>
            </div>
          </div>
        </a>

        <!-- 4. FoolMoon -->
        <a href="https://www.youtube.com/watch?v=1idSqXpffpI&list=PLfo9hQ4_WGNcW5tzISDjB3Wi4KqR4MjSP" 
           target="_blank" 
           class="group block">
          <div class="relative overflow-hidden rounded-3xl border border-amber-400/20 hover:border-amber-400/60 transition-all duration-500 h-full">
            <img src="@/attachments/444.jpg" 
                 alt="FoolMoon" 
                 class="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110">
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
            <div class="absolute bottom-8 left-8 right-8">
              <span class="inline-block px-5 py-1.5 bg-amber-400 text-black text-sm font-medium rounded-full mb-3">FoolMoon</span>
              <p class="text-2xl font-serif text-white leading-tight">FoolMoon Расклады</p>
            </div>
          </div>
        </a>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
@reference "tailwindcss";

.stars {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background-image: 
    radial-gradient(1px 1px at 30px 50px, #fff, transparent),
    radial-gradient(2px 2px at 150px 200px, #c4b5fd, transparent),
    radial-gradient(1px 1px at 400px 80px, #fff, transparent),
    radial-gradient(2px 2px at 700px 350px, #fcd34d, transparent);
  background-repeat: repeat;
  opacity: 0.25;
  animation: twinkle 8s infinite alternate;
}

@keyframes twinkle {
  0% { opacity: 0.2; }
  100% { opacity: 0.35; }
}
</style>