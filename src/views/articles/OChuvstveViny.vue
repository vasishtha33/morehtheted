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
        О чувстве вины
      </h1>

      <div class="flex items-center gap-4 text-amber-400/70 mb-12">
        <span class="font-medium">Moreh ha_Tzedek</span>
        <span class="w-px h-4 bg-amber-400/30"></span>
        <span>Самопознание</span>
      </div>

      <div class="prose prose-invert prose-amber max-w-none text-gray-200 leading-relaxed text-[17.5px]">
        <p>Если оно у вас присутствует, если вы испытываете чувство вины по отношению к какому-то человеку, вам необходимо отбросить это чувство. Вы никому ничего в этой жизни не должны. Вы должны только себе.</p>
        
        <p>Поэтому если кто-то вас триггерит тем, что обещал/обещала, но не выполнил обещание, — это проблема того человека, который пытается привить вам чувство вины за то, что вы ему не должны. Человек, который требует чего-то от вас, просто обманул сам себя.</p>
        
        <p>Причина того, что вы не смогли сдержать обещание, кроется в нём самом. Были какие-то обстоятельства, которые заставили вас усомниться в этом человеке. Токсичное общение с его стороны, возможно, он видел в вас выгодный «куш», но упустил его в своё время — и поезд ушёл. Все проблемы, которые человек проецирует на вас, — не что иное, как его собственная тень и триггеры, которыми он сам себе забивает мозг.</p>
        
        <p>В таких случаях не стоит обращать внимания на подобных людей. Это нечестный тип людей, нечестный тип отношений: токсичный, завистливый, обиженный. Этому человеку в первую очередь нужно разобраться со своей головой.</p>
        
        <p>А уже потом понять, почему не сработал тот план, который он вынашивал в своей больной голове, и почему теперь он оказался на самом дне и подсознательно хватается за вас как за спасательный круг.</p>
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