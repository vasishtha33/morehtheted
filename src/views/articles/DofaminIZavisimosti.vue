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
        Дофамин и зависимости
      </h1>

      <div class="flex items-center gap-4 text-amber-400/70 mb-12">
        <span class="font-medium">Moreh ha_Tzedek</span>
        <span class="w-px h-4 bg-amber-400/30"></span>
        <span>Здоровье</span>
      </div>

      <div class="prose prose-invert prose-amber max-w-none text-gray-200 leading-relaxed text-[17.5px]">
        <p>Здесь на картинке слева — люди, которые не зависят от тех веществ, от которых зависят люди справа: кокаин, метамфетамин, алкоголь, героин.</p>
        
        <!-- Изображение -->
        <div class="my-10">
          <img src="@/attachments/pic_26.jpg" alt="Дофаминовые рецепторы при зависимости" class="w-full rounded-2xl shadow-2xl border border-amber-400/20">
        </div>

        <p>По сути, она обнаружила, что в мозге здоровых испытуемых наблюдалась высокая передача дофамина, что на картинке обозначено более тёмным цветом. В мозге людей, которые употребляли эти вещества в зависимости (то есть часто и хронически), практически не наблюдалось дофамина. Другими словами, эти люди находятся в хроническом дефиците дофамина. У них норма передачи дофамина значительно ниже среднестатистической.</p>
        
        <p>Поэтому можно сделать вывод, что эти люди постоянно находятся в депрессивных состояниях и выживают лишь благодаря своим зависимостям от веществ.</p>
        
        <p>Если вы понимаете, что находитесь в какой-то зависимости, никогда не стесняйтесь попросить помощи у квалифицированных специалистов — они вам обязательно помогут. В наше время жизнь и так очень коротка. А сделать в ней нужно успеть многое. У каждого человека есть духовно-нравственный долг, который нужно постараться успеть отдать.</p>
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