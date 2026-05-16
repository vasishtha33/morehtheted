<template>
  <div class="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0a0514] via-[#120a24] to-[#1a0f2e] py-12 px-4 md:py-20">
    
    <!-- Фон -->
    <div class="absolute inset-0 z-0 stars"></div>
    <div class="absolute top-1/4 left-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
    <div class="absolute bottom-1/4 right-10 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>

    <div class="relative z-10 max-w-6xl mx-auto">
      <div class="text-center mb-12 md:mb-16">
        <h1 class="text-5xl md:text-6xl lg:text-7xl font-serif tracking-wider text-amber-300 drop-shadow-[0_0_20px_rgba(251,191,36,0.4)]">
          Астротаро
        </h1>
        <p class="mt-4 text-amber-400/70 text-lg md:text-xl tracking-wide">
          Три круга Шани • Путь Дурака • Алхимия Души
        </p>
      </div>

      <div class="grid lg:grid-cols-12 gap-10 lg:gap-12">
        
        <!-- Форма -->
        <div class="lg:col-span-5">
          <div class="bg-black/40 backdrop-blur-xl border border-amber-400/20 rounded-3xl p-8 md:p-10 shadow-2xl">
            <h2 class="text-3xl font-serif text-amber-300 mb-8 text-center">Данные рождения</h2>

            <form @submit.prevent="handleCalculate" class="space-y-6">
              <!-- Имя -->
              <div>
                <label class="block text-amber-400/80 mb-1.5">Имя <span class="text-red-400">*</span></label>
                <input v-model="form.name" type="text" @input="validateName"
                  class="w-full bg-black/70 border rounded-2xl px-6 py-4 text-white focus:border-amber-400 outline-none transition-all"
                  :class="{ 'border-red-500': errors.name }">
                <p v-if="errors.name" class="text-red-400 text-sm mt-1">{{ errors.name }}</p>
              </div>

              <!-- Дата рождения -->
              <div class="grid grid-cols-3 gap-4">
                <div>
                  <label class="block text-amber-400/80 mb-1.5">День <span class="text-red-400">*</span></label>
                  <input v-model="form.day" type="number" min="1" max="31" @input="validateDay"
                    class="w-full bg-black/70 border rounded-2xl px-6 py-4 text-white focus:border-amber-400 outline-none"
                    :class="{ 'border-red-500': errors.day }">
                  <p v-if="errors.day" class="text-red-400 text-sm mt-1">{{ errors.day }}</p>
                </div>
                <div>
                  <label class="block text-amber-400/80 mb-1.5">Месяц <span class="text-red-400">*</span></label>
                  <select v-model="form.month" @change="validateMonth"
                    class="w-full bg-black/70 border rounded-2xl px-6 py-4 text-white focus:border-amber-400 outline-none"
                    :class="{ 'border-red-500': errors.month }">
                    <option value="">Месяц</option>
                    <option v-for="m in 12" :key="m" :value="m">{{ m.toString().padStart(2,'0') }}</option>
                  </select>
                  <p v-if="errors.month" class="text-red-400 text-sm mt-1">{{ errors.month }}</p>
                </div>
                <div>
                  <label class="block text-amber-400/80 mb-1.5">Год <span class="text-red-400">*</span></label>
                  <input v-model="form.year" type="number" min="1900" max="2100" @input="validateYear"
                    class="w-full bg-black/70 border rounded-2xl px-6 py-4 text-white focus:border-amber-400 outline-none"
                    :class="{ 'border-red-500': errors.year }">
                  <p v-if="errors.year" class="text-red-400 text-sm mt-1">{{ errors.year }}</p>
                </div>
              </div>

              <!-- Время -->
              <div>
                <label class="block text-amber-400/80 mb-1.5">Время рождения <span class="text-red-400">*</span></label>
                <input v-model="form.time" type="time" @input="validateTime"
                  class="w-full bg-black/70 border rounded-2xl px-6 py-4 text-white focus:border-amber-400 outline-none"
                  :class="{ 'border-red-500': errors.time }">
                <p v-if="errors.time" class="text-red-400 text-sm mt-1">{{ errors.time }}</p>
              </div>

              <!-- Страна и Город -->
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label class="block text-amber-400/80 mb-1.5">Страна <span class="text-red-400">*</span></label>
                  <input v-model="form.country" type="text" @input="validateCountry"
                    class="w-full bg-black/70 border rounded-2xl px-6 py-4 text-white focus:border-amber-400 outline-none"
                    :class="{ 'border-red-500': errors.country }">
                  <p v-if="errors.country" class="text-red-400 text-sm mt-1">{{ errors.country }}</p>
                </div>
                <div>
                  <label class="block text-amber-400/80 mb-1.5">Город <span class="text-red-400">*</span></label>
                  <input v-model="form.city" type="text" @input="validateCity"
                    class="w-full bg-black/70 border rounded-2xl px-6 py-4 text-white focus:border-amber-400 outline-none"
                    :class="{ 'border-red-500': errors.city }">
                  <p v-if="errors.city" class="text-red-400 text-sm mt-1">{{ errors.city }}</p>
                </div>
              </div>

              <button type="submit" :disabled="loading || !isFormValid"
                class="w-full mt-8 py-5 rounded-2xl bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-black font-bold text-xl transition-all shadow-lg shadow-amber-400/50 disabled:opacity-60">
                {{ loading ? 'Расчёт кармического пути...' : 'Рассчитать Духовный Путь' }}
              </button>
            </form>
          </div>
        </div>

        <!-- Результат -->
        <div class="lg:col-span-7">
          <SpiritualReport v-if="result" :result="result" />
          <div v-else class="h-full min-h-[500px] flex items-center justify-center text-center border border-dashed border-amber-400/20 rounded-3xl">
            <div class="text-amber-400/40 text-xl max-w-xs">
              Заполните данные и нажмите кнопку
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useAstroTaroStore } from '@/stores/astrotaro'
import SpiritualReport from '@/components/SpiritualReport.vue'   // ← Исправленный импорт

const store = useAstroTaroStore()

const form = store.form
const result = computed(() => store.result)
const loading = computed(() => store.loading)

const errors = ref({
  name: '', day: '', month: '', year: '', time: '', country: '', city: ''
})

const validateName = () => { errors.value.name = form.name.trim() ? '' : 'Имя обязательно' }
const validateDay = () => { errors.value.day = (parseInt(form.day) >= 1 && parseInt(form.day) <= 31) ? '' : 'День от 1 до 31' }
const validateMonth = () => { errors.value.month = (parseInt(form.month) >= 1 && parseInt(form.month) <= 12) ? '' : 'Месяц от 1 до 12' }
const validateYear = () => { errors.value.year = (parseInt(form.year) >= 1900 && parseInt(form.year) <= 2100) ? '' : 'Год от 1900 до 2100' }
const validateTime = () => { errors.value.time = form.time ? '' : 'Укажите время' }
const validateCountry = () => { errors.value.country = form.country.trim() ? '' : 'Укажите страну' }
const validateCity = () => { errors.value.city = form.city.trim() ? '' : 'Укажите город' }

const isFormValid = computed(() => 
  !Object.values(errors.value).some(e => e !== '') &&
  form.name && form.day && form.month && form.year && form.time && form.city
)

const handleCalculate = () => {
  validateName()
  validateDay()
  validateMonth()
  validateYear()
  validateTime()
  validateCountry()
  validateCity()

  if (!isFormValid.value) return
  store.calculate(form)
}
</script>

<style scoped>
@reference "tailwindcss";

.stars {
  position: absolute;
  inset: 0;
  background-image: 
    radial-gradient(2px 2px at 20px 30px, #fff, transparent),
    radial-gradient(1px 1px at 90px 120px, #c4b5fd, transparent),
    radial-gradient(2px 2px at 200px 250px, #fcd34d, transparent),
    radial-gradient(1px 1px at 400px 80px, #fff, transparent),
    radial-gradient(2px 2px at 650px 450px, #a78bfa, transparent);
  background-size: 400px 400px;
  opacity: 0.45;
  animation: twinkle 10s infinite alternate;
}

@keyframes twinkle { from { opacity: 0.35; } to { opacity: 0.6; } }
</style>