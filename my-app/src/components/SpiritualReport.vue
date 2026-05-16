<template>
  <div class="bg-black/40 backdrop-blur-xl border border-amber-400/20 rounded-3xl p-8 md:p-10 space-y-12">
    
    <!-- Шапка -->
    <div class="text-center border-b border-amber-400/20 pb-8">
      <h2 class="text-4xl md:text-5xl font-serif text-amber-300 tracking-wide">
        {{ result.name }}
      </h2>
      <p class="text-amber-400 mt-3 text-xl">{{ result.birthDate }}</p>
      <p class="text-amber-400/70 mt-1">{{ result.moonSign }}</p>
    </div>

    <!-- Основные показатели -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="text-center bg-black/30 rounded-2xl p-6 border border-amber-400/10">
        <p class="text-amber-400/60 text-sm uppercase tracking-widest">Путь Души</p>
        <p class="text-6xl font-light text-amber-300 mt-2">{{ result.lifePathNumber }}</p>
        <p class="text-xl text-amber-200 mt-1">{{ result.mainArcana }}</p>
      </div>

      <div class="text-center bg-black/30 rounded-2xl p-6 border border-amber-400/10">
        <p class="text-amber-400/60 text-sm uppercase tracking-widest">Текущий этап</p>
        <p class="text-amber-300 font-medium text-lg leading-tight mt-3">
          {{ result.currentStage }}
        </p>
      </div>

      <div class="text-center bg-black/30 rounded-2xl p-6 border border-amber-400/10">
        <p class="text-amber-400/60 text-sm uppercase tracking-widest">Алхимия Души</p>
        <p class="text-amber-200 text-lg mt-3">{{ result.alchemicalStage }}</p>
      </div>
    </div>

    <!-- Три Круга Шани -->
    <div>
      <h3 class="text-3xl font-serif text-amber-300 mb-10 text-center">
        Три Круга Шани — Твой Духовный Путь
      </h3>
      
      <div class="space-y-12">
        <div v-for="(cycle, index) in result.cycles" 
             :key="cycle.cycle"
             class="relative border-l-2 border-amber-400/30 pl-8">
          
          <!-- Номер круга -->
          <div class="absolute -left-3 -top-1 w-7 h-7 rounded-full bg-[#0a0514] border-2 border-amber-400 flex items-center justify-center text-amber-300 font-bold text-lg">
            {{ cycle.cycle }}
          </div>

          <h4 class="text-2xl text-amber-100 mb-1">{{ cycle.age }}</h4>
          <p class="text-amber-400/90 mb-5">{{ cycle.period }}</p>

          <!-- Стадия алхимии -->
          <div class="inline-flex items-center gap-2 mb-5">
            <span class="px-5 py-1.5 bg-amber-400/10 text-amber-300 text-sm rounded-2xl border border-amber-400/30">
              {{ cycle.stage }}
            </span>
          </div>

          <!-- Аркан и архетип -->
          <p class="text-amber-200 text-[17px] mb-6">
            {{ cycle.arcana }} — <span class="italic">{{ cycle.archetype }}</span>
          </p>

          <!-- Описание -->
          <div class="text-gray-300 leading-relaxed text-[15.5px]">
            {{ getCycleDescription(cycle.cycle) }}
          </div>
        </div>
      </div>
    </div>

    <!-- Духовное послание -->
    <div class="bg-gradient-to-br from-amber-400/10 via-purple-600/10 to-black/40 border border-amber-400/30 rounded-3xl p-10 text-center">
      <div class="text-amber-400/70 text-sm uppercase tracking-widest mb-3">Послание Высшего Я</div>
      <p class="italic text-lg leading-relaxed text-amber-100">
        {{ result.message }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { SpiritualResult } from '@/types/astrology'

defineProps<{
  result: SpiritualResult
}>()

const getCycleDescription = (cycleNumber: number): string => {
  if (cycleNumber === 1) {
    return 'Первый круг Шани — это период Обжига (Calcination). Сатурн проверяет фундамент вашей души. Через ограничения, трудности в семье, здоровье или материальном положении формируется характер и внутренняя дисциплина. Это время, когда душа учится терпению и ответственности. Главный урок — принятие ограничений как учителя.'
  }
  if (cycleNumber === 2) {
    return 'Второй круг — самый важный и тяжёлый. Это Nigredo — Чёрная работа алхимии. Всё старое, ложное и ненужное разрушается. Происходит глубокий кризис личности, отношений, карьеры и самоидентификации. Здесь Сатурн заставляет встретиться со своей Тенью. Цель — умереть для старой версии себя и родиться заново.'
  }
  if (cycleNumber === 3) {
    return 'Третий круг Шани — это Rubedo, Красная работа. Время мудрости, завершения и передачи опыта. Если предыдущие уроки были пройдены осознанно, здесь человек становится настоящим Мастером и Учителем. Сатурн даёт признание и внутренний мир. Главная задача — подвести итог жизни и оставить светлый след.'
  }
  return ''
}
</script>