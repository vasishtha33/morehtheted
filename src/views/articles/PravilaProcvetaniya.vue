<template>
  <div class="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0a0514] via-[#120a24] to-[#1a0f2e] py-20 px-6">
    <div class="absolute inset-0 z-0">
      <div class="stars"></div>
    </div>

    <div class="relative z-10 max-w-3xl mx-auto">
      <router-link to="/articles" class="inline-flex items-center gap-2 text-amber-400/70 hover:text-amber-400 mb-8 transition-colors">
        ← Назад к статьям
      </router-link>

      <h1 class="text-4xl md:text-5xl font-serif leading-tight text-amber-200 mb-8">
        Правила процветания
      </h1>

      <div class="flex items-center gap-4 text-amber-400/70 mb-12">
        <span class="font-medium">Moreh ha_Tzedek</span>
        <span class="w-px h-4 bg-amber-400/30"></span>
        <span>Развитие</span>
      </div>

      <div class="prose prose-invert prose-amber max-w-none text-gray-200 leading-relaxed text-[17.5px]">
        <p>За последнее время я выработал для себя несколько правил, которых я хотел бы придерживаться, чтобы моя жизнь стремилась к процветанию.</p>
        
        <p>Поменьше разговоров с токсично настроенными по отношению ко мне людьми. Общество, в котором я нахожусь, сильно влияет на моё ментальное состояние, и моё настроение на весь день во многом зависит от этого. Поэтому держать границы с людьми, которые плохо влияют на твоё эмоционально-ментальное пространство, — это нормально и даже полезно.</p>
        
        <p>В течение дня нужно сделать какое-то важное дело (или дела), которое я откладываю, — что-то такое, после выполнения чего я получу свою порцию дофамина на день. Блуд и просмотр порно я исключаю из этого списка как негативные зависимости для получения дофамина.</p>
        
        <p>Вернуться к своему любимому спорту, а именно — к плаванию в бассейне. Плавание развивает все мышцы тела. Вода успокаивает и омолаживает организм. А ритмичное дыхание при плавании даёт мне лёгкое, заряженное энергией и работоспособное на весь день тело.</p>
        
        <p>Попытаться найти или сделать что-то новое для своего саморазвития и личностного роста.</p>
        
        <p>Делиться с людьми позитивным опытом. И, если нужно, разделять с ними их негативный опыт. Этому меня научил друг, который намного младше меня. А именно: исцеление происходит не только через рассказы о позитивном опыте, но и через разделение с кем-то его негативного опыта. Исцеление через сострадание. Исцеление через безусловную любовь.</p>
        
        <p>Если понял цель своей жизни и свой путь — придерживаться его, как бы трудно ни приходилось в жизни, чтобы достичь этой цели.</p>
      </div>

      <div class="mt-16 pt-8 border-t border-amber-400/10 text-center text-amber-400/50 text-sm">
        Moreh ha_Tzedek
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