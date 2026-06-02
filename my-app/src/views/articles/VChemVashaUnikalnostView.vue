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
        В чём ваша уникальность?
      </h1>

      <div class="flex items-center gap-4 text-amber-400/70 mb-12">
        <span class="font-medium">Moreh ha_Tzedek</span>
        <span class="w-px h-4 bg-amber-400/30"></span>
        <span>Самопознание</span>
      </div>

      <div class="prose prose-invert prose-amber max-w-none text-gray-200 leading-relaxed text-[17.5px]">
        <p>Не нужно быть большим социальным психологом, чтобы понять, что все психологические травмы тянутся из нашего детства. Чем больше в детстве вас унижали, оскорбляли, наказывали, принижали ваше значение в жизни, вашу самооценку, ставили под сомнение ваши таланты, тем более психически неуравновешенным человеком вы вырастаете.</p>
        <p>Но это не повод печалиться. Да, ваша жизнь может быть очень трудной. В некоторых случаях — чрезвычайно трудной. Однако чем больше вы проходите эти трудности, тем более уникальным человеком вы становитесь.</p>
        <p>Ваша индивидуальность и вы как личность видите этот мир под другим углом. У вас есть свои лайфхаки, вы поняли в этой жизни больше, чем остальные. Вы более ранимы и чувствительны к миру, более расположены к творчеству и созиданию. Для вас мир — это не место для войны, а место для искусства. Вы видите истинный смысл существования.</p>
        <p>Вы можете помогать другим людям морально и психологически. Многие из вас способны исцелять людей духовными энергиями. Ваша жизнь — это не просто рождение, взросление, семья, увядание и смерть. Ваша жизнь — это миссия, наполненная любовью и состраданием к людям.</p>
        <p>И это был ваш осознанный выбор — прийти именно в такую жизнь, которая вам досталась.</p>
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
.stars { /* тот же код */ }
</style>