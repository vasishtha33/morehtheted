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
        Самая опасная болезнь в мире
      </h1>

      <div class="flex items-center gap-4 text-amber-400/70 mb-12">
        <span class="font-medium">Moreh ha_Tzedek</span>
        <span class="w-px h-4 bg-amber-400/30"></span>
        <span>Духовное здоровье</span>
      </div>

      <div class="prose prose-invert prose-amber max-w-none text-gray-200 leading-relaxed text-[17.5px]">
        <p>Самая опасная болезнь в мире — это депрессия. Трудно заставить себя что-то делать, когда каждый день тебя триггерят твои собственные эмоции.</p>
        <p>Ведь именно на эмоциях мы совершаем безумные поступки, которые потом, чуть позже, портят нам настроение. Портят на день, а может, и на неделю.</p>
        <p>И ты просто сидишь и смотришь в одну точку. Думаешь, что, наверное, алкоголь спасёт, заглушит на некоторое время это состояние. Или наркотики. Мы спускаемся всё ниже, и нам уже просто не хочется жить.</p>
        <p>Нейромедиатор серотонин уже не обеспечивает нам сбалансированную работу эмоций. Вы знали, что серотонина больше вырабатывается в нашем кишечнике, чем в головном мозге?</p>
        <p>Важно заставлять себя делать физические упражнения, которые способствуют выделению этого нейромедиатора. В интернете есть множество практик и советов по естественной выработке серотонина. Главное — не делать это искусственно с помощью наркотиков, алкоголя или даже порнографии.</p>
        <p>Порнография заставляет нас постоянно заниматься мастурбацией, потому что оргазм даёт мощный выброс дофамина — гормона удовольствия. И нам хочется всё больше и больше. В итоге мы становимся теми же наркоманами, только наркотиком теперь выступает порнография.</p>
        <p>В конечном итоге происходит истощение дофамина. Это уже хроническая психическая болезнь. Именно это я и называю самой опасной болезнью — депрессией.</p>
        <p>Я могу бесконечно писать об этой опасности. Но хочу сказать только одно: если вы заметили, что катитесь вниз, вы не должны бояться попросить у кого-нибудь помощи.</p>
        <p>Вам нужно признать, что вы в дерьме и вам действительно нужна помощь. Гордость необходимо отбросить. Позвоните квалифицированному специалисту, который сможет вам помочь. Это очень важно. Не думайте, что вы достаточно сильны, чтобы справиться с депрессией самостоятельно.</p>
        <p>Относитесь к своим силам скептически. Отбросьте всё: гордость, положение в обществе, статус. Возьмите телефон. Примите тот факт, что вам нужна помощь. И что вам нужен человек, который вам поможет. Звоните.</p>
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