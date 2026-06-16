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
        Когда любовные отношения отпадают
      </h1>

      <div class="flex items-center gap-4 text-amber-400/70 mb-12">
        <span class="font-medium">Moreh ha_Tzedek</span>
        <span class="w-px h-4 bg-amber-400/30"></span>
        <span>Отношения</span>
      </div>

      <div class="prose prose-invert prose-amber max-w-none text-gray-200 leading-relaxed text-[17.5px]">
        <p>Наконец-то я пришёл к такому состоянию или такому выводу, что любовные отношения на каком-то жизненном этапе могут отпасть. Они помогают вам совершать личностные трансформации на определённом промежутке времени.</p>
        <p>До того момента, пока последняя токсичная ситуация в отношениях не поставит окончательную точку в вашей любовной истории. Потому что вы завершили трансформацию и стали целостным человеком.</p>
        <p>Вы приняли всю свою жизнь и все предыдущие отношения как неотъемлемую часть себя. Вам уже не нужны ни разговоры, ни любовь, ни скандалы. Вы сыты по горло. У вас начинается свой собственный одиночный личностный рост.</p>
        <p>Вы понимаете, что реализуете свои мечты и свою миссию в жизни прежде всего для себя, а не для кого-то другого. Это здоровый эгоизм и любовь к себе.</p>
        <p>И даже сексуальную энергию вы начинаете сублимировать в духовную, творческую и созидательную — и становитесь, без преувеличения, со-творцом этой Вселенной.</p>
        <p>Я думаю, это зрелая позиция. Если вам сорок два, пора задуматься о своей настоящей роли в жизни и перестать обращать внимание на внешние раздражители.</p>
        <p>Отбросьте чувство вины за то, что, например, не дадите этому миру детей. Вы уникальны в том, для чего на самом деле были рождены. Вы уже целостная личность.</p>
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