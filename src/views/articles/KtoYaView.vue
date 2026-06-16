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
        Кто я?
      </h1>

      <div class="flex items-center gap-4 text-amber-400/70 mb-12">
        <span class="font-medium">Moreh ha_Tzedek</span>
        <span class="w-px h-4 bg-amber-400/30"></span>
        <span>Поэзия</span>
      </div>

      <div class="prose prose-invert prose-amber max-w-none text-gray-200 leading-relaxed text-[17.5px]">
        <p>Человек без имени. Вездесущий воздух, вдыхающий аромат прекрасных цветов. Вечный ребенок, танцующий под звуки вселенной.</p>
        <p>Шрам на моей шее напоминает, как страстно мы любили друг друга. Твоя душа — бескрайний океан блаженства. Я тонул в твоих объятиях.</p>
        <p>Желтые листья кружились вихрем, как живые золотые украшения на тебе. Одинокие скамейки на пляже, на которых ночью мы наслаждались друг другом, и только полная луна видела наши обнажённые тела.</p>
        <p>Хотел бы я быть ночным мотыльком или бабочкой. Летать и подглядывать в окна людей. Не ходить на работу, не думать о школе. Быть свободным, как свободна безусловная любовь, распятая на кресте.</p>
        <p>Я видел радугу над жёлтым полем подсолнухов. Жизнь улыбалась мне тогда, и я улыбался в ответ.</p>
        <p>Ещё тридцать девять лет перед тем, как я растворюсь в пространстве. В этом свете, который светит из темноты, нарушая все законы физики. Ещё тридцать девять лет.</p>
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