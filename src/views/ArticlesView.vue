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
        
        <router-link 
          v-for="article in paginatedArticles" 
          :key="article.slug" 
          :to="`/articles/${article.slug}`" 
          class="article-card group"
        >
          <div class="relative h-full bg-black/40 backdrop-blur-md border border-amber-400/20 rounded-3xl p-8 hover:border-amber-400/50 transition-all duration-500 overflow-hidden">
            <div class="absolute top-6 right-6 text-amber-400/30 text-5xl">✦</div>
            
            <h2 class="text-2xl font-serif text-amber-100 group-hover:text-amber-300 transition-colors leading-tight mb-6">
              {{ article.title }}
            </h2>
            
            <div class="flex items-center gap-3 text-sm text-amber-400/70 mb-6">
              <span class="font-medium">Moreh ha_Tzedek</span>
              <span class="w-1 h-1 bg-amber-400/50 rounded-full"></span>
              <span>{{ article.category }}</span>
            </div>
            
            <p class="text-gray-300 line-clamp-4 leading-relaxed">
              {{ article.excerpt }}
            </p>
            
            <div class="mt-8 pt-6 border-t border-amber-400/10 text-xs tracking-widest text-amber-400/60 flex justify-between items-center">
              <span>Читать →</span>
              <span>{{ article.readTime }}</span>
            </div>
          </div>
        </router-link>

      </div>

      <!-- Пагинация -->
      <div v-if="totalPages > 1" class="flex justify-center items-center gap-4 mt-16">
        <button 
          @click="prevPage" 
          :disabled="currentPage === 1"
          class="px-6 py-3 border border-amber-400/30 hover:border-amber-400 text-amber-400/70 hover:text-amber-400 rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
        >
          ← Предыдущая
        </button>
        
        <div class="flex items-center gap-2">
          <span 
            v-for="page in totalPages" 
            :key="page"
            @click="goToPage(page)"
            :class="[
              'w-10 h-10 flex items-center justify-center rounded-full cursor-pointer transition-all text-sm font-medium',
              currentPage === page 
                ? 'bg-amber-400 text-black' 
                : 'border border-amber-400/30 hover:border-amber-400 text-amber-400/70 hover:text-amber-400'
            ]"
          >
            {{ page }}
          </span>
        </div>

        <button 
          @click="nextPage" 
          :disabled="currentPage === totalPages"
          class="px-6 py-3 border border-amber-400/30 hover:border-amber-400 text-amber-400/70 hover:text-amber-400 rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
        >
          Следующая →
        </button>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const articles = ref([
  {
    slug: 'travma-detstva',
    title: 'Травма детства',
    excerpt: 'У многих людей есть очень большая травма на подсознательном уровне. Это травма детства...',
    category: 'Самопознание',
    readTime: '11 мин'
  },
  {
    slug: 'samaya-opasnaya-bolezn-v-mire',
    title: 'Самая опасная болезнь в мире',
    excerpt: 'В современном мире самая опасная болезнь — даже не рак и не сердечные заболевания...',
    category: 'Мудрость',
    readTime: '8 мин'
  },
  {
    slug: 'odna-iz-glavnyh-problem-sovremennogo-obschestva',
    title: 'Одна из главных проблем современного общества',
    excerpt: 'Мы потеряли связь с самым важным. И эта потеря стоит дороже, чем кажется...',
    category: 'Общество',
    readTime: '11 мин'
  },
  {
    slug: 'kak-vliyaet-progress-na-zdorove-cheloveka',
    title: 'Как влияет прогресс на здоровье человека',
    excerpt: 'Технологии развиваются быстрее, чем мы успеваем адаптироваться...',
    category: 'Здоровье',
    readTime: '9 мин'
  },
  {
    slug: 'ot-chego-zavisit-vash-lichnostnyy-rost',
    title: 'От чего зависит ваш личностный рост',
    excerpt: 'Истинный рост начинается не с внешних действий, а с внутреннего состояния...',
    category: 'Развитие',
    readTime: '10 мин'
  },
  {
    slug: 'byt-horoshim-horosho-ili-ploho',
    title: 'Быть хорошим человеком',
    excerpt: 'Вы очень хороший человек. Вы многое делаете в ущерб себе. Боитесь сказать «нет»...',
    category: 'Самопознание',
    readTime: '9 мин'
  },
  {
    slug: 'moya-duhovnaya-realizaciya',
    title: 'Моя духовная реализация',
    excerpt: 'Личный опыт прохождения пути от интеллектуального понимания до глубокой реализации...',
    category: 'Путь',
    readTime: '12 мин'
  },
  {
    slug: 'v-chem-vasha-unikalnost',
    title: 'В чём ваша уникальность?',
    excerpt: 'Каждый человек несёт в себе уникальный божественный отпечаток...',
    category: 'Самопознание',
    readTime: '8 мин'
  },
  {
    slug: 'kto-ya',
    title: 'Кто я?',
    excerpt: 'Человек без имени. Вездесущий воздух, вдыхающий аромат прекрасных цветов...',
    category: 'Поэзия',
    readTime: '6 мин'
  },
  {
    slug: 'lyubovnye-otnosheniya',
    title: 'Когда любовные отношения отпадают',
    excerpt: 'Наконец-то я пришёл к такому состоянию, что любовные отношения могут отпасть...',
    category: 'Отношения',
    readTime: '9 мин'
  },
  {
    slug: 'styd-i-vina',
    title: 'Стыд и вина',
    excerpt: 'Вы очень хороший человек. Вы многое делаете в ущерб себе. Боитесь сказать «нет»...',
    category: 'Самопознание',
    readTime: '10 мин'
  },
  {
    slug: 'ne-igrayu-s-chuvstvami',
    title: 'Я не играю на чувствах',
    excerpt: 'Многие люди думают, что я с ними играю. Что я могу на это сказать?...',
    category: 'Отношения',
    readTime: '8 мин'
  }
])

const ITEMS_PER_PAGE = 4
const currentPage = ref(1)

const totalPages = computed(() => Math.ceil(articles.value.length / ITEMS_PER_PAGE))

const paginatedArticles = computed(() => {
  const start = (currentPage.value - 1) * ITEMS_PER_PAGE
  return articles.value.slice(start, start + ITEMS_PER_PAGE)
})

const nextPage = () => {
  if (currentPage.value < totalPages.value) currentPage.value++
}

const prevPage = () => {
  if (currentPage.value > 1) currentPage.value--
}

const goToPage = (page: number) => {
  currentPage.value = page
}
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

.delay-700 {
  animation-delay: 700ms;
}
</style>