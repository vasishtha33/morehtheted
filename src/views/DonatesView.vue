<template>
  <div class="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0a0514] via-[#120a24] to-[#1a0f2e] py-20 px-6">
    <div class="absolute inset-0 z-0">
      <div class="stars"></div>
    </div>

    <div class="relative z-10 max-w-3xl mx-auto text-center">
      <h1 class="text-5xl md:text-6xl font-serif text-amber-200 mb-6">Поддержать меня</h1>
      <p class="text-amber-400/80 text-xl mb-12">Донат на покушать ❤️</p>

      <!-- Картинка -->
      <div class="mb-12">
        <img 
          src="@/attachments/cards.jpg" 
          alt="Донаты" 
          class="w-full max-w-md mx-auto rounded-3xl shadow-2xl border border-amber-400/30"
        >
      </div>

      <div class="space-y-8 max-w-md mx-auto">
        
        <!-- Тинькофф -->
        <div class="bg-black/40 backdrop-blur-md border border-amber-400/20 rounded-3xl p-8">
          <p class="text-amber-400 mb-4 font-medium">Тинькофф карта</p>
          <div class="flex items-center justify-between bg-[#0a0514] rounded-2xl px-6 py-4 text-lg font-mono text-amber-100 group">
            <span id="tinkoff" class="select-all">2200702096503318</span>
            <button 
              @click="copyToClipboard('tinkoff', 'Тинькофф')"
              class="text-amber-400 hover:text-amber-300 transition-all duration-200 p-2 rounded-xl hover:bg-amber-400/10">
              <span class="text-xl">📋</span>
            </button>
          </div>
        </div>

        <!-- Альфа-Банк -->
        <div class="bg-black/40 backdrop-blur-md border border-amber-400/20 rounded-3xl p-8">
          <p class="text-amber-400 mb-4 font-medium">Альфа-Банк карта</p>
          <div class="flex items-center justify-between bg-[#0a0514] rounded-2xl px-6 py-4 text-lg font-mono text-amber-100 group">
            <span id="alfa" class="select-all">2200153656848604</span>
            <button 
              @click="copyToClipboard('alfa', 'Альфа-Банк')"
              class="text-amber-400 hover:text-amber-300 transition-all duration-200 p-2 rounded-xl hover:bg-amber-400/10">
              <span class="text-xl">📋</span>
            </button>
          </div>
        </div>

      </div>

      <!-- Благодарность -->
      <div class="mt-16 max-w-2xl mx-auto">
        <p class="text-2xl text-amber-300 leading-relaxed">
          Спасибо каждому, кто поддерживает меня ❤️<br>
          Ваша помощь помогает мне продолжать делиться знаниями и создавать новые материалы.
        </p>
        <p class="mt-8 text-amber-400/70 text-lg">
          Даже маленький донат — это уже большая поддержка ✨
        </p>
      </div>
    </div>

    <!-- Кастомный Toast -->
    <div v-if="toast.show" 
         class="fixed bottom-8 left-1/2 -translate-x-1/2 bg-amber-400 text-black px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 z-50 transition-all duration-300">
      <span class="text-2xl">✅</span>
      <span class="font-medium">{{ toast.message }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const toast = ref({
  show: false,
  message: ''
})

const showToast = (message: string) => {
  toast.value.message = message
  toast.value.show = true
  
  setTimeout(() => {
    toast.value.show = false
  }, 2500)
}

const copyToClipboard = (id: string, bank: string) => {
  const element = document.getElementById(id)
  if (element) {
    navigator.clipboard.writeText(element.innerText).then(() => {
      showToast(`${bank} — номер карты скопирован ✅`)
    }).catch(() => {
      showToast('Не удалось скопировать')
    })
  }
}
</script>

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

/* Улучшенная иконка копирования */
button {
  transition: all 0.2s ease;
}

button:hover {
  transform: scale(1.15);
}
</style>