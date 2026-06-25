<template>
  <div class="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0a0514] via-[#120a24] to-[#1a0f2e] py-20 px-6">
    <div class="absolute inset-0 z-0">
      <div class="stars"></div>
    </div>

    <div class="relative z-10 max-w-4xl mx-auto">
      <h1 class="text-5xl md:text-6xl font-serif text-center text-amber-200 mb-8 tracking-wider">
        Дополнительные материалы
      </h1>
      <p class="text-center text-amber-400/70 text-xl mb-16">Книги и труды Moreh ha_Tzedek</p>

      <!-- Карточка книги -->
      <div class="max-w-2xl mx-auto bg-black/40 backdrop-blur-md border border-amber-400/20 rounded-3xl overflow-hidden">
        <a href="https://www.litres.ru/book/justin-moreyl/bibliya-samaya-krasivaya-kniga-na-zemle-71577715/" 
           target="_blank"
           class="block group">
          <img 
            src="@/attachments/book_avatar.jpg" 
            alt="Библия - самая красивая книга на Земле"
            class="w-full h-auto transition-transform duration-700 group-hover:scale-105"
          >
        </a>

        <div class="p-10">
          <h2 class="text-3xl font-serif text-amber-100 mb-6">
            Библия — самая красивая книга на Земле
          </h2>
          <p class="text-amber-400/70 mb-8">с комментариями Moreh ha_Tzedek</p>

          <div class="prose prose-invert prose-amber max-w-none text-gray-200 leading-relaxed">
            <p class="text-lg">Произведение, где величие души и тайны божественного откровения сливаются в гармонию, подобно мелодии небесной симфонии. Каждая её страница — словно жемчужина, что хранит свет истины, прошедшей сквозь века и согретой теплом миллионов сердец.</p>
            
            <p class="text-lg">Простые и проникновенные комментарии раскрывают глубокий смысл библейских текстов, делая их понятными каждому — от мудреца, ищущего откровения, до ребёнка, с трепетом прикасающегося к вечным истинам.</p>
            
            <p class="text-lg">Иллюстрации оживляют библейские события с такой яркостью, что кажется, будто сама история оживает перед глазами, перенося читателя в священные мгновения прошлого.</p>
            
            <p class="text-lg">Эта книга — путеводная звезда, освещающая путь от сомнений к вере, от отчаяния к надежде, вдохновляющая, утешающая и дарующая покой каждому, кто ищет истину и смысл.</p>
          </div>

          <div class="mt-12">
            <a href="https://www.litres.ru/book/justin-moreyl/bibliya-samaya-krasivaya-kniga-na-zemle-71577715/" 
               target="_blank"
               class="inline-block w-full md:w-auto text-center px-10 py-5 bg-amber-400 hover:bg-amber-300 text-black font-medium text-lg rounded-2xl transition-all duration-300">
              Купить на ЛитРес за 199 ₽
            </a>
          </div>
        </div>
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