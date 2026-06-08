<template>
  <div class="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0a0514] via-[#120a24] to-[#1a0f2e] py-20 px-6">
    
    <div class="absolute inset-0 z-0">
      <div class="stars"></div>
      <div class="absolute top-1/4 left-10 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-1/3 right-10 w-[500px] h-[500px] bg-amber-700/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </div>

    <div class="relative z-10 max-w-6xl mx-auto">
      <h1 class="text-5xl md:text-7xl text-center font-serif tracking-wider text-amber-300 mb-16 drop-shadow-[0_0_15px_rgba(251,191,36,0.3)]">
        Мои услуги
        <span class="block w-28 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mt-4"></span>
      </h1>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
        
        <div 
          v-for="(service, key) in service_data" 
          :key="key"
          class="group relative bg-black/40 backdrop-blur-md border border-amber-400/20 rounded-3xl overflow-hidden hover:border-amber-400/40 transition-all duration-500 hover:-translate-y-2 flex flex-col"
        >
          <!-- Контент карточки -->
          <div class="p-8 pb-6 flex-1">
            <h3 class="text-2xl font-serif text-amber-200 mb-5 leading-tight">
              {{ service.name }}
            </h3>
            <div class="text-gray-200 leading-relaxed text-[15.5px]" v-html="service.text"></div>
          </div>

          <!-- === КНОПКИ === -->
          <div class="p-8 pt-0 mt-auto">
            <div class="flex flex-col gap-3">
              <!-- Кнопка 1 — Telegram бот -->
              <a 
                href="https://t.me/morehtarobot" 
                target="_blank"
                class="flex items-center justify-center gap-2 bg-[#229ED9] hover:bg-[#1a8ad4] text-white font-medium py-4 px-6 rounded-2xl transition-all active:scale-95 shadow-lg"
              >
                ✉️ Заказать в Telegram боте
              </a>

              <!-- Кнопка 2 — Messenger Max -->
              <a 
                href="https://max.ru/join/JJZcVOL9ZKmGh2Z1ppcpXnjri-tF39_r4_IuRCmDECs" 
                target="_blank"
                class="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-violet-700 hover:from-purple-700 hover:to-violet-800 text-white font-medium py-4 px-6 rounded-2xl transition-all active:scale-95"
              >
                💬 Написать в Messenger Max
              </a>
            </div>
          </div>

          <div class="h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
        </div>
      </div>

      <div class="text-center mt-16 text-amber-400/60 text-sm tracking-widest font-mono">
        “Истинное знание приходит через прямой опыт”<br>
        — Древняя мудрость
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const service_data = ref({
  love: { name: "❤️ Расклады на любовь и отношения", text: "Самое востребованное направление.<br><br>Я помогу понять чувства вашего человека, увидеть перспективы отношений, разобраться в причинах проблем.<br><br><b>Цена:</b> от 3500 ₽ до 7500 ₽" },
  future: { name: "🔮 Общий прогноз на будущее", text: "Большой расклад (Кельтский Крест). Показывает ближайшие месяцы или год.<br><br><b>Цена:</b> 4500 ₽ / 9000–12000 ₽" },
  express: { name: "⚡ Экспресс-расклад «Да/Нет + совет»", text: "Быстрый ответ на вопрос + рекомендация.<br><br><b>Цена:</b> 1500–2500 ₽" },
  career: { name: "💼 Карьера и финансовый поток", text: "Помогаю понять направление, стоит ли менять работу, как улучшить доход.<br><br><b>Цена:</b> 4000–8000 ₽" },
  karma: { name: "🌌 Кармические связи и прошлые жизни", text: "Анализ кармических уроков и влияния прошлого.<br><br><b>Цена:</b> 6000–15000 ₽" },
  premium: { name: "🌟 Глубокая личная консультация (60–90 мин)", text: "Самый полный формат. Zoom или голос + запись.<br><br><b>Цена:</b> 12000–25000 ₽" },
  packages: { name: "📦 Пакеты сопровождения", text: "• «Три шага» — 29000 ₽<br>• «Месяц поддержки» — 45000–55000 ₽<br>• «Трансформация за 3 месяца» — 120000 ₽" },
  combo: { name: "🔮 Комбинированные консультации", text: "Таро + астрология + матрица судьбы + чистка<br><br><b>Цена:</b> 15000–28000 ₽" }
})
</script>

<style scoped>
@reference "tailwindcss";

.stars {
  position: absolute; top: 0; left: 0; width: 100%; height: 100%;
  pointer-events: none;
  background-image: radial-gradient(2px 2px at 20px 30px, #fff, rgba(0,0,0,0)), radial-gradient(1px 1px at 60px 70px, #fde047, rgba(0,0,0,0)), radial-gradient(1px 1px at 100px 150px, #fff, rgba(0,0,0,0)), radial-gradient(3px 3px at 200px 250px, #c084fc, rgba(0,0,0,0)), radial-gradient(2px 2px at 350px 400px, #fde047, rgba(0,0,0,0)), radial-gradient(1px 1px at 500px 100px, #fff, rgba(0,0,0,0)), radial-gradient(2px 2px at 700px 550px, #c084fc, rgba(0,0,0,0)), radial-gradient(1px 1px at 850px 200px, #fff, rgba(0,0,0,0)), radial-gradient(2px 2px at 1000px 600px, #fde047, rgba(0,0,0,0)), radial-gradient(3px 3px at 1200px 300px, #a78bfa, rgba(0,0,0,0));
  background-repeat: no-repeat;
  opacity: 0.55;
  animation: twinkle 5s ease-in-out infinite alternate;
}

@keyframes twinkle { 0% { opacity: 0.35; } 100% { opacity: 0.75; } }
</style>