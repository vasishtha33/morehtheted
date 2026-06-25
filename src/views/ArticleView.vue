<template>
  <div class="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0a0514] via-[#120a24] to-[#1a0f2e] py-20 px-6">
    <div class="absolute inset-0 z-0">
      <div class="stars"></div>
    </div>

    <div class="relative z-10 max-w-3xl mx-auto" v-if="article">
      <router-link to="/articles" class="inline-flex items-center gap-2 text-amber-400/70 hover:text-amber-400 mb-8 transition-colors">
        ← Назад к статьям
      </router-link>

      <h1 class="text-4xl md:text-5xl font-serif leading-tight text-amber-200 mb-8">
        {{ article.title }}
      </h1>

      <div class="flex items-center gap-4 text-amber-400/70 mb-12">
        <span class="font-medium">Moreh ha_Tzedek</span>
        <span class="w-px h-4 bg-amber-400/30"></span>
        <span>{{ article.category }}</span>
        <span class="w-px h-4 bg-amber-400/30"></span>
        <span>{{ article.readTime }}</span>
      </div>

      <div class="prose prose-invert prose-amber max-w-none text-gray-200 leading-relaxed text-[17.5px]">
        <p v-for="(paragraph, i) in formattedContent" :key="i" v-html="paragraph"></p>
      </div>

      <div class="mt-16 pt-8 border-t border-amber-400/10 text-center text-amber-400/50 text-sm">
        Moreh ha_Tzedek
      </div>
    </div>

    <div v-else class="relative z-10 text-center text-amber-400/70 py-32">
      <p class="text-2xl">Статья не найдена</p>
      <p class="mt-4">Slug: {{ route.params.slug }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { articlesData } from '@/data/articles'

const route = useRoute()
const article = ref<any>(null)

const formattedContent = computed(() => {
  if (!article.value?.content) return []
  return article.value.content.split('\n\n')
})

// Реагируем на изменение slug
watch(() => route.params.slug, (newSlug) => {
  if (newSlug) {
    article.value = articlesData.find(a => a.slug === newSlug)
  }
}, { immediate: true })
</script>

<style scoped>
@reference "tailwindcss";

.stars {
  position: absolute; top: 0; left: 0; width: 100%; height: 100%;
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