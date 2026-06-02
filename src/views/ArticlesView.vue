<template>
  <div class="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0a0514] via-[#120a24] to-[#1a0f2e] py-20 px-6">
    
    <!-- Фоновые декоративные элементы -->
    <div class="absolute inset-0 z-0">
      <div class="stars"></div>
      <div class="absolute top-1/4 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-1/3 right-10 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-700"></div>
    </div>

    <div class="relative z-10 max-w-5xl mx-auto">
      
      <!-- Заголовок страницы -->
      <h1 class="text-5xl md:text-6xl text-center font-serif tracking-wider text-amber-300 mb-6 drop-shadow-[0_0_15px_rgba(251,191,36,0.4)]">
        Статьи
      </h1>
      <p class="text-center text-amber-400/70 text-lg mb-16">Мудрость и размышления от Moreh ha_Tzedek</p>

      <!-- Сетка статей -->
      <div class="grid md:grid-cols-2 gap-8 lg:gap-10">
        
        <!-- Статья 1 -->
        <router-link to="/articles/samaya-opasnaya-bolezn-v-mire" class="article-card group">
          <div class="relative h-full bg-black/40 backdrop-blur-md border border-amber-400/20 rounded-3xl p-8 hover:border-amber-400/50 transition-all duration-500 overflow-hidden">
            <div class="absolute top-6 right-6 text-amber-400/30 text-5xl">✦</div>
            
            <h2 class="text-2xl font-serif text-amber-100 group-hover:text-amber-300 transition-colors leading-tight mb-6">
              Самая опасная болезнь в мире
            </h2>
            
            <div class="flex items-center gap-3 text-sm text-amber-400/70 mb-6">
              <span class="font-medium">Moreh ha_Tzedek</span>
              <span class="w-1 h-1 bg-amber-400/50 rounded-full"></span>
              <span>Мудрость</span>
            </div>
            
            <p class="text-gray-300 line-clamp-4 leading-relaxed">
              В современном мире самая опасная болезнь — даже не рак и не сердечные заболевания. 
              Это болезнь, которую почти никто не замечает...
            </p>
            
            <div class="mt-8 pt-6 border-t border-amber-400/10 text-xs tracking-widest text-amber-400/60 flex justify-between items-center">
              <span>Читать →</span>
              <span>8 мин</span>
            </div>
          </div>
        </router-link>

        <!-- Статья 2 -->
        <router-link to="/articles/odna-iz-glavnyh-problem-sovremennogo-obschestva" class="article-card group">
          <div class="relative h-full bg-black/40 backdrop-blur-md border border-amber-400/20 rounded-3xl p-8 hover:border-amber-400/50 transition-all duration-500 overflow-hidden">
            <div class="absolute top-6 right-6 text-amber-400/30 text-5xl">✦</div>
            
            <h2 class="text-2xl font-serif text-amber-100 group-hover:text-amber-300 transition-colors leading-tight mb-6">
              Одна из главных проблем современного общества
            </h2>
            
            <div class="flex items-center gap-3 text-sm text-amber-400/70 mb-6">
              <span class="font-medium">Moreh ha_Tzedek</span>
              <span class="w-1 h-1 bg-amber-400/50 rounded-full"></span>
              <span>Общество</span>
            </div>
            
            <p class="text-gray-300 line-clamp-4 leading-relaxed">
              Мы потеряли связь с самым важным. И эта потеря стоит дороже, чем кажется...
            </p>
            
            <div class="mt-8 pt-6 border-t border-amber-400/10 text-xs tracking-widest text-amber-400/60 flex justify-between items-center">
              <span>Читать →</span>
              <span>11 мин</span>
            </div>
          </div>
        </router-link>

        <!-- Статья 3 -->
        <router-link to="/articles/kak-vliyaet-progress-na-zdorove-cheloveka" class="article-card group">
          <div class="relative h-full bg-black/40 backdrop-blur-md border border-amber-400/20 rounded-3xl p-8 hover:border-amber-400/50 transition-all duration-500 overflow-hidden">
            <div class="absolute top-6 right-6 text-amber-400/30 text-5xl">✦</div>
            
            <h2 class="text-2xl font-serif text-amber-100 group-hover:text-amber-300 transition-colors leading-tight mb-6">
              Как влияет прогресс на здоровье человека
            </h2>
            
            <div class="flex items-center gap-3 text-sm text-amber-400/70 mb-6">
              <span class="font-medium">Moreh ha_Tzedek</span>
              <span class="w-1 h-1 bg-amber-400/50 rounded-full"></span>
              <span>Здоровье</span>
            </div>
            
            <p class="text-gray-300 line-clamp-4 leading-relaxed">
              Технологии развиваются быстрее, чем мы успеваем адаптироваться. Что это значит для нашего тела и духа?
            </p>
            
            <div class="mt-8 pt-6 border-t border-amber-400/10 text-xs tracking-widest text-amber-400/60 flex justify-between items-center">
              <span>Читать →</span>
              <span>9 мин</span>
            </div>
          </div>
        </router-link>

        <!-- Статья 4 -->
        <router-link to="/articles/ot-chego-zavisit-vash-lichnostnyy-rost" class="article-card group">
          <div class="relative h-full bg-black/40 backdrop-blur-md border border-amber-400/20 rounded-3xl p-8 hover:border-amber-400/50 transition-all duration-500 overflow-hidden">
            <div class="absolute top-6 right-6 text-amber-400/30 text-5xl">✦</div>
            
            <h2 class="text-2xl font-serif text-amber-100 group-hover:text-amber-300 transition-colors leading-tight mb-6">
              От чего зависит ваш личностный рост
            </h2>
            
            <div class="flex items-center gap-3 text-sm text-amber-400/70 mb-6">
              <span class="font-medium">Moreh ha_Tzedek</span>
              <span class="w-1 h-1 bg-amber-400/50 rounded-full"></span>
              <span>Развитие</span>
            </div>
            
            <p class="text-gray-300 line-clamp-4 leading-relaxed">
              Истинный рост начинается не с внешних действий, а с внутреннего состояния...
            </p>
            
            <div class="mt-8 pt-6 border-t border-amber-400/10 text-xs tracking-widest text-amber-400/60 flex justify-between items-center">
              <span>Читать →</span>
              <span>10 мин</span>
            </div>
          </div>
        </router-link>

        <!-- Статья 5 -->
        <router-link to="/articles/byt-horoshim-horosho-ili-ploho" class="article-card group">
          <div class="relative h-full bg-black/40 backdrop-blur-md border border-amber-400/20 rounded-3xl p-8 hover:border-amber-400/50 transition-all duration-500 overflow-hidden">
            <div class="absolute top-6 right-6 text-amber-400/30 text-5xl">✦</div>
            
            <h2 class="text-2xl font-serif text-amber-100 group-hover:text-amber-300 transition-colors leading-tight mb-6">
              Быть «хорошим» хорошо или плохо?
            </h2>
            
            <div class="flex items-center gap-3 text-sm text-amber-400/70 mb-6">
              <span class="font-medium">Moreh ha_Tzedek</span>
              <span class="w-1 h-1 bg-amber-400/50 rounded-full"></span>
              <span>Этика</span>
            </div>
            
            <p class="text-gray-300 line-clamp-4 leading-relaxed">
              Почему стремление быть «хорошим» для всех может быть опасной ловушкой...
            </p>
            
            <div class="mt-8 pt-6 border-t border-amber-400/10 text-xs tracking-widest text-amber-400/60 flex justify-between items-center">
              <span>Читать →</span>
              <span>7 мин</span>
            </div>
          </div>
        </router-link>

        <!-- Статья 6 -->
        <router-link to="/articles/moya-duhovnaya-realizaciya" class="article-card group">
          <div class="relative h-full bg-black/40 backdrop-blur-md border border-amber-400/20 rounded-3xl p-8 hover:border-amber-400/50 transition-all duration-500 overflow-hidden">
            <div class="absolute top-6 right-6 text-amber-400/30 text-5xl">✦</div>
            
            <h2 class="text-2xl font-serif text-amber-100 group-hover:text-amber-300 transition-colors leading-tight mb-6">
              Моя духовная реализация
            </h2>
            
            <div class="flex items-center gap-3 text-sm text-amber-400/70 mb-6">
              <span class="font-medium">Moreh ha_Tzedek</span>
              <span class="w-1 h-1 bg-amber-400/50 rounded-full"></span>
              <span>Путь</span>
            </div>
            
            <p class="text-gray-300 line-clamp-4 leading-relaxed">
              Личный опыт прохождения пути от интеллектуального понимания до глубокой реализации...
            </p>
            
            <div class="mt-8 pt-6 border-t border-amber-400/10 text-xs tracking-widest text-amber-400/60 flex justify-between items-center">
              <span>Читать →</span>
              <span>12 мин</span>
            </div>
          </div>
        </router-link>

        <!-- Статья 7 -->
        <router-link to="/articles/v-chem-vasha-unikalnost" class="article-card group">
          <div class="relative h-full bg-black/40 backdrop-blur-md border border-amber-400/20 rounded-3xl p-8 hover:border-amber-400/50 transition-all duration-500 overflow-hidden">
            <div class="absolute top-6 right-6 text-amber-400/30 text-5xl">✦</div>
            
            <h2 class="text-2xl font-serif text-amber-100 group-hover:text-amber-300 transition-colors leading-tight mb-6">
              В чём ваша уникальность?
            </h2>
            
            <div class="flex items-center gap-3 text-sm text-amber-400/70 mb-6">
              <span class="font-medium">Moreh ha_Tzedek</span>
              <span class="w-1 h-1 bg-amber-400/50 rounded-full"></span>
              <span>Самопознание</span>
            </div>
            
            <p class="text-gray-300 line-clamp-4 leading-relaxed">
              Каждый человек несёт в себе уникальный божественный отпечаток. Как его распознать?
            </p>
            
            <div class="mt-8 pt-6 border-t border-amber-400/10 text-xs tracking-widest text-amber-400/60 flex justify-between items-center">
              <span>Читать →</span>
              <span>8 мин</span>
            </div>
          </div>
        </router-link>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Нет логики
</script>

<style scoped>
@reference "tailwindcss";

.article-card {
  display: block;
  height: 100%;
  transition: transform 0.4s ease;
}

.article-card:hover {
  transform: translateY(-8px);
}

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