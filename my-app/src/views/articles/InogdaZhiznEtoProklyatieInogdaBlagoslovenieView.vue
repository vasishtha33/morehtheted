<template>
  <div class="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0a0514] via-[#120a24] to-[#1a0f2e] py-20 px-6">
    
    <!-- Фоновые декоративные элементы -->
    <div class="absolute inset-0 z-0">
      <div class="stars"></div>
      <div class="absolute top-1/4 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-1/3 right-10 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-700"></div>
    </div>

    <div class="relative z-10 max-w-3xl mx-auto">
      
      <router-link to="/articles" class="inline-flex items-center gap-2 text-amber-400/70 hover:text-amber-400 mb-8 transition-colors">
        ← Назад к статьям
      </router-link>

      <h1 class="text-4xl md:text-5xl font-serif leading-tight text-amber-200 mb-8">
        Иногда жизнь — это проклятие, иногда — благословение
      </h1>

      <div class="flex items-center gap-4 text-amber-400/70 mb-12">
        <span class="font-medium">Moreh ha_Tzedek</span>
        <span class="w-px h-4 bg-amber-400/30"></span>
        <span>Размышления</span>
      </div>

      <div class="prose prose-invert prose-amber max-w-none text-gray-200 leading-relaxed text-[17.5px]">
        <p>Мне просто немного повезло.</p>
        <p>Возможно, я инфантильный. Возможно, я так и остался в своём 2007 году. Я заметил, что время идёт циклами. Одно поколение сменяет другое.</p>
        
        <p>Моё проклятие в том, что мои родители в детстве, воспитывая меня своими методами, сделали меня таким, какой я есть сейчас. Я не могу найти общего языка со взрослыми людьми, не умею делать серьёзные вещи вроде бизнеса. Я вообще не понимаю их языка. О чём они говорят? Политика? Кем я должен быть? Взрослые вообще дают выбор?</p>
        
        <p>Но есть и моё благословение. Я заметил, что всё время тянусь к новым поколениям, и они тянутся ко мне. Хотя я уже давно должен был водить своих детей в школу, работать в большой компании и постоянно думать о благополучии своём и своей семьи.</p>
        
        <p>Самое главное, что я вынес из своего опыта: дети и подростки почти всегда правы. Именно они многому меня научили. Я не учился у взрослых — я учился у тех, кто действительно меня ценил. У подростков чистая душа. Душа знает, что нужно делать, и не теряет время зря.</p>
        
        <p>Жизнь дана нам для наслаждения, чувств, эмоций, любви, общения и совместного времяпрепровождения. Когда в кармане нет ни рубля, но деньги каким-то чудом появляются на тусовки, клубы и выпивку. Новые друзья множатся с каждым днём.</p>
        
        <p>Младшее поколение научило меня, что жизнь дана для постоянной радости, потому что душа хочет танцевать в этом теле.</p>
        
        <p>А взрослые — это полная противоположность. Они заигрались. Для них жизнь — это война и постоянное измерение силы.</p>
        
        <p>Итак, если новое поколение всегда даёт жизнь, то старшее — приносит смерть.</p>
        
        <p>И я не знаю, кого благодарить за то, что остался на всю жизнь в новом поколении.</p>
      </div>

      <div class="mt-16 pt-8 border-t border-amber-400/10 text-center text-amber-400/50 text-sm">
        Moreh ha_Tzedek
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Нет логики
</script>

<style scoped>
@reference "tailwindcss";

.stars {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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

.delay-700 {
  animation-delay: 700ms;
}
</style>