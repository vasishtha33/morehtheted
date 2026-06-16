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
        Стыд и вина
      </h1>

      <div class="flex items-center gap-4 text-amber-400/70 mb-12">
        <span class="font-medium">Moreh ha_Tzedek</span>
        <span class="w-px h-4 bg-amber-400/30"></span>
        <span>Самопознание</span>
      </div>

      <div class="prose prose-invert prose-amber max-w-none text-gray-200 leading-relaxed text-[17.5px]">
        <p>Вы очень хороший человек. Вы многое делаете в ущерб себе. Боитесь сказать «нет». Боитесь осудить кого-то, кто несправедливо с вами поступил.</p>
        <p>Вы запутались в этом пространстве. По утрам у вас беспричинное чувство стыда. А вечером вы не можете спокойно расслабиться из-за стрессовых ситуаций, которые принёс вам прошедший день.</p>
        <p>Прошлое давит вам на сердце, на вашу душу, на ваше настоящее естество. Обычно в такие моменты друзья, знакомые, люди вдруг отворачиваются от вас. Ваша личность обесценивается, и приходит обида.</p>
        <p>Стыдиться себя — это первооснова всех психических отклонений. Бог выгнал Адама и Еву из рая, как только они познали, что такое стыд.</p>
        <p>А теперь ты, человек, которому стыдно за себя, — просто обними себя.</p>
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