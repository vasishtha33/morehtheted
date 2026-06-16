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
        Я не играю на чувствах
      </h1>

      <div class="flex items-center gap-4 text-amber-400/70 mb-12">
        <span class="font-medium">Moreh ha_Tzedek</span>
        <span class="w-px h-4 bg-amber-400/30"></span>
        <span>Отношения</span>
      </div>

      <div class="prose prose-invert prose-amber max-w-none text-gray-200 leading-relaxed text-[17.5px]">
        <p>Многие люди думают, что я с ними играю. Что я могу на это сказать?</p>
        <p>Я сам перенёс столько внутренней боли за всю свою жизнь, что играть с кем-то на его чувствах для меня просто неприемлемо. Это всё равно что быть моральным уродом, который убивает человека словами.</p>
        <p>Я уже давно тот человек, который не считает, что жизнь — это игра. Жизнь — это школа, которая делает вас человеком с чувством сострадания к другим людям.</p>
        <p>Поэтому, если вы научились состраданию, вы никогда в жизни не будете играть ни с кем, тем более на чувствах. Вы будете тем человеком, который ищет способы помочь людям, которым меньше повезло, чем вам.</p>
        <p>Но если другие люди решили поиграть на ваших чувствах, не соревнуйтесь с ними. Ваше безразличие к этой игре даст им полное поражение.</p>
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