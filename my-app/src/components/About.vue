<template>
  <!-- Главный контейнер с мистическим фоном -->
  <div class="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0a0514] via-[#120a24] to-[#1a0f2e] py-20 px-6">
    
    <!-- ✨ Декоративные фоновые слои -->
    <div class="absolute inset-0 z-0">
      <div class="stars"></div>
      <div class="absolute top-1/3 left-0 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-20 right-0 w-80 h-80 bg-amber-700/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div class="absolute top-10 right-10 w-64 h-64 border border-amber-400/10 rounded-full opacity-20"></div>
      <div class="absolute bottom-10 left-10 w-96 h-96 border border-purple-500/10 rounded-full opacity-30"></div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-amber-400/5 rounded-full"></div>
    </div>

    <div class="relative z-10 max-w-5xl mx-auto">
      
      <h1 class="text-5xl md:text-7xl text-center font-serif tracking-wider text-amber-300 mb-16 drop-shadow-[0_0_15px_rgba(251,191,36,0.3)]">
        Обо мне
        <span class="block w-24 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mt-4"></span>
      </h1>

      <div class="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
        
        <!-- Левая колонка – ФОТО me.jpg -->
        <div class="flex justify-center md:justify-end sticky top-24 self-start">
          <div class="relative group">
            <div class="absolute -inset-2 bg-gradient-to-r from-amber-400/30 to-purple-600/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div class="relative">
              <img 
                src="@/assets/images/me.jpg" 
                alt="Учитель мудрости" 
                class="relative w-80 h-80 md:w-96 md:h-96 object-cover rounded-3xl shadow-2xl border border-amber-400/40 z-10"
              >
              <div class="absolute -top-4 -right-4 text-amber-300/60 text-4xl">☽</div>
              <div class="absolute -bottom-4 -left-4 text-amber-300/60 text-3xl rotate-12">∞</div>
            </div>
          </div>
        </div>

        <!-- Правая колонка – ТЕКСТ -->
        <div class="space-y-7 text-[17px] leading-relaxed text-gray-200 backdrop-blur-sm bg-black/20 p-6 rounded-2xl border border-white/5 shadow-xl text-justify">
          
          <!-- ПЕРВЫЙ АБЗАЦ: "учитель мудрости" -->
          <p class="first-letter:text-5xl first-letter:font-serif first-letter:text-amber-400 first-letter:mr-2 first-letter:float-left">
            Я — учитель мудрости, продолжающий древнюю линию преемственности.
          </p>

          <!-- Абзац с парампарой + фото vasishtha.jpg (правильный путь) -->
          <div class="flex flex-col lg:flex-row gap-6 my-4">
            <div class="flex-1 text-justify">
              <p>Моя духовная парампара восходит к <span class="text-amber-400 font-medium glow">Махариши Васиштхе</span> (санскр. वसिष्ठ, IAST: Vasiṣṭha) — одному из Семи Божественных Риши, наставнику Господа Рамы. Через эту линию передаётся знание о мироздании, энергии и этике.</p>
            </div>
            <div class="flex-1 flex justify-center">
              <div class="relative max-w-[260px] w-full aspect-square group">
                <div class="absolute -inset-2 bg-gradient-to-tr from-amber-400/20 to-purple-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition duration-500"></div>
                <div class="relative bg-black/40 backdrop-blur-sm rounded-2xl p-2 border border-amber-400/30 h-full">
                  <img src="@/assets/images/vasishtha.jpg" alt="Махариши Васиштха" class="w-full h-full object-contain rounded-xl">
                </div>
              </div>
            </div>
          </div>

          <p>
            В этой же линии я чувствую глубокую связь с <span class="text-amber-400 font-medium glow">Море ха-Цедек</span> (Учителем Праведности) — духовным наставником ессеев, которого часто отождествляют с библейским Мелхиседеком.
          </p>

          <h2 class="text-3xl font-serif text-amber-400 pt-4 flex items-center gap-2">
            <span class="text-2xl">✦</span> Мой путь <span class="text-2xl">✦</span>
          </h2>
          
          <p>
            После окончания <span class="font-medium text-amber-300">Самарского государственного университета имени академика С.П. Королёва</span> я уехал в Индию, где провёл более двух с половиной лет, погружаясь в шиваитский и буддийский тантризм.
          </p>

          <p>
            Жил в небольших горных ашрамах, обошёл множество мест силы Индии, встречался со многими йогами и святыми. Полгода путешествовал по Гималаям Непала, включая пещеру Миларепы. Также работал в местах силы острова Цейлон (Шри-Ланка), связанных с учением Будды.
          </p>

          <p>
            Вот уже более <span class="text-amber-400 font-semibold text-xl">пятнадцати лет</span> я регулярно практикую и углубляю эти знания.
          </p>

          <h2 class="text-3xl font-serif text-amber-400 pt-4 flex items-center gap-2">
            <span class="text-2xl">⚝</span> Моя миссия <span class="text-2xl">⚝</span>
          </h2>
          
          <p>
            На пороге перехода в <span class="text-amber-300">Эру Водолея</span> (примерно 2040–2060 годы) я объединяю древние духовные традиции с современным пониманием мира — метафизикой, этикой и точными науками, чтобы дать людям практические инструменты для духовного развития в эпоху больших перемен.
          </p>

          <!-- Фото star.jpg после миссии (правильный путь) -->
          <div class="my-8">
            <div class="relative max-w-md mx-auto md:max-w-2xl aspect-video group">
              <div class="absolute -inset-3 bg-gradient-to-r from-amber-400/20 to-purple-600/20 rounded-xl blur-xl group-hover:blur-2xl transition duration-500"></div>
              <div class="relative bg-black/40 backdrop-blur-sm rounded-xl p-2 border border-amber-400/30 h-full">
                <img src="@/assets/images/star.jpg" alt="Сияние миссии" class="w-full h-full object-cover rounded-lg">
              </div>
            </div>
          </div>

          <div class="text-center pt-6 text-amber-400/60 text-xs tracking-widest font-mono border-t border-amber-400/20">
            “Как вверху, так и внизу” — Tabula Smaragdina
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// никакой логики не требуется
</script>

<style scoped>
/* Звёздное небо */
.stars {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  background-image: 
    radial-gradient(2px 2px at 20px 30px, #fff, rgba(0,0,0,0)),
    radial-gradient(1px 1px at 60px 70px, #fde047, rgba(0,0,0,0)),
    radial-gradient(1px 1px at 100px 150px, #fff, rgba(0,0,0,0)),
    radial-gradient(3px 3px at 200px 250px, #c084fc, rgba(0,0,0,0)),
    radial-gradient(2px 2px at 350px 400px, #fde047, rgba(0,0,0,0)),
    radial-gradient(1px 1px at 500px 100px, #fff, rgba(0,0,0,0)),
    radial-gradient(2px 2px at 700px 550px, #c084fc, rgba(0,0,0,0)),
    radial-gradient(1px 1px at 850px 200px, #fff, rgba(0,0,0,0)),
    radial-gradient(2px 2px at 1000px 600px, #fde047, rgba(0,0,0,0)),
    radial-gradient(3px 3px at 1200px 300px, #a78bfa, rgba(0,0,0,0));
  background-repeat: no-repeat;
  opacity: 0.6;
  animation: twinkle 4s ease-in-out infinite alternate;
}

@keyframes twinkle {
  0% { opacity: 0.3; }
  100% { opacity: 1; }
}

.glow {
  text-shadow: 0 0 5px rgba(251, 191, 36, 0.5);
}

.delay-1000 {
  animation-delay: 1s;
}
</style>