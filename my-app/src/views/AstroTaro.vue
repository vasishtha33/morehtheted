<template>
  <div class="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0a0514] via-[#120a24] to-[#1a0f2e] py-12 px-4 md:py-20">
    
    <!-- Фоновые элементы -->
    <div class="absolute inset-0 z-0 stars"></div>
    <div class="absolute top-1/4 left-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
    <div class="absolute bottom-1/4 right-10 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>

    <div class="relative z-10 max-w-6xl mx-auto">
      
      <!-- Заголовок -->
      <div class="text-center mb-12 md:mb-16">
        <h1 class="text-5xl md:text-6xl lg:text-7xl font-serif tracking-wider text-amber-300">Астротаро</h1>
        <p class="mt-4 text-amber-400/70 text-lg md:text-xl">Три круга Шани • Путь Дурака • Алхимия Души</p>
      </div>

      <div class="grid lg:grid-cols-12 gap-10 lg:gap-12">
        
        <!-- Левая колонка — Форма -->
        <div class="lg:col-span-5 space-y-8">
          
          <div class="bg-black/40 backdrop-blur-xl border border-amber-400/20 rounded-3xl p-8 md:p-10 shadow-2xl">
            <h2 class="text-3xl font-serif text-amber-300 mb-8 text-center">Данные рождения</h2>
            
            <form @submit.prevent="handleCalculate" class="space-y-6">
              
              <div>
                <label class="block text-amber-400/80 mb-1.5">Имя <span class="text-red-400">*</span></label>
                <input 
                  v-model="form.name" 
                  type="text" 
                  @input="validateName"
                  placeholder="Введите имя на русском языке"
                  class="w-full bg-black/70 border rounded-2xl px-6 py-4 text-white focus:border-amber-400 outline-none transition-colors"
                  :class="{ 'border-red-500': errors.name }"
                >
                <p v-if="errors.name" class="text-red-400 text-sm mt-1">{{ errors.name }}</p>
              </div>

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
                    class="w-full bg-black/70 border rounded-2xl px-6 py-4 text-white focus:border-amber-400 outline-none">
                    <option value="">Месяц</option>
                    <option v-for="m in 12" :key="m" :value="m">{{ m.toString().padStart(2, '0') }}</option>
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

              <div>
                <label class="block text-amber-400/80 mb-1.5">Время рождения <span class="text-red-400">*</span></label>
                <input v-model="form.time" type="time" @input="validateTime"
                  class="w-full bg-black/70 border rounded-2xl px-6 py-4 text-white focus:border-amber-400 outline-none"
                  :class="{ 'border-red-500': errors.time }">
                <p v-if="errors.time" class="text-red-400 text-sm mt-1">{{ errors.time }}</p>
              </div>

              <div>
                <label class="block text-amber-400/80 mb-1.5">Страна</label>
                <input v-model="form.country" type="text" value="Россия" readonly
                  class="w-full bg-black/70 border border-amber-400/30 rounded-2xl px-6 py-4 text-white">
              </div>

              <!-- Города -->
              <div class="space-y-5">
                <div>
                  <label class="block text-amber-400/80 mb-1.5">Город из списка</label>
                  <select v-model="form.selectedCity" @change="onCitySelect"
                    class="w-full bg-black/70 border rounded-2xl px-6 py-4 text-white focus:border-amber-400 outline-none"
                    :disabled="citiesLoading">
                    <option value="">— Выберите город —</option>
                    <option v-for="city in cities" :key="city" :value="city">
                      {{ city }}
                    </option>
                  </select>
                  <p v-if="citiesError" class="text-red-400 text-sm mt-1">{{ citiesError }}</p>
                  <p v-else-if="citiesLoading" class="text-amber-400/70 text-sm mt-1">Загрузка городов...</p>
                </div>

              </div>

              <button style="cursor: pointer;" type="submit" :disabled="loading || !isFormValid"
                class="w-full mt-8 py-5 rounded-2xl bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-bold text-xl transition-all shadow-lg hover:brightness-110 disabled:opacity-60">
                {{ loading ? 'Расчёт...' : 'Рассчитать Духовный Путь' }}
              </button>
            </form>
          </div>

          <!-- Как это работает -->
          <div class="bg-black/40 backdrop-blur-xl border border-amber-400/20 rounded-3xl p-8 md:p-10">
            <h3 class="text-2xl font-serif text-amber-300 mb-6">Как это работает?</h3>
            <p class="text-gray-300 text-[15px] leading-relaxed">
              Анализируем дату и время рождения через призму Таро, циклов Сатурна (Шани) и алхимической трансформации души.
            </p>
          </div>
        </div>

        <!-- Правая колонка — Результат -->
        <div class="lg:col-span-7">
          <SpiritualReport v-if="result" :result="result" />
          <div v-else class="min-h-[520px] flex items-center justify-center text-center border border-dashed border-amber-400/20 rounded-3xl">
            <p class="text-amber-400/40 text-xl max-w-xs">
              Заполните форму и нажмите кнопку,<br>чтобы узнать свой духовный путь
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useAstroTaroStore } from '@/stores/astrotaro'
import SpiritualReport from '@/components/SpiritualReport.vue'

const store = useAstroTaroStore()

// Реактивные данные из Pinia
const form = store.form
const result = computed(() => store.result)
const loading = computed(() => store.loading)
const cities = computed(() => store.cities)
const citiesLoading = computed(() => store.citiesLoading)
const citiesError = computed(() => store.citiesError)

const errors = ref({
  name: '',
  day: '',
  month: '',
  year: '',
  time: '',
  city: ''
})

// ====================== ВАЛИДАЦИЯ ======================
const validateName = () => {
  const name = (form.name || '').trim()
  
  if (name.length < 2) {
    errors.value.name = 'Имя должно содержать минимум 2 символа'
    return
  }

  // Проверка только на русские буквы, пробелы и дефис
  const russianRegex = /^[а-яА-ЯёЁ\s-]+$/;
  if (!russianRegex.test(name)) {
    errors.value.name = 'Имя должно быть написано только на русском языке'
  } else {
    errors.value.name = ''
  }
}

const validateDay = () => {
  const day = parseInt(form.day || '0')
  errors.value.day = (day >= 1 && day <= 31) ? '' : 'День от 1 до 31'
}

const validateMonth = () => {
  const month = parseInt(form.month || '0')
  errors.value.month = (month >= 1 && month <= 12) ? '' : 'Месяц от 1 до 12'
}

const validateYear = () => {
  const year = parseInt(form.year || '0')
  errors.value.year = (year >= 1900 && year <= 2100) ? '' : 'Год от 1900 до 2100'
}

const validateTime = () => {
  errors.value.time = form.time ? '' : 'Укажите время рождения'
}

const validateCity = () => {
  const hasCity = !!(form.selectedCity || (form.customCity || '').trim())
  errors.value.city = hasCity ? '' : 'Выберите город из списка или введите вручную'
}

const onCitySelect = () => {
  if (form.selectedCity) {
    form.customCity = ''
  }
  validateCity()
}

const isFormValid = computed(() => 
  !Object.values(errors.value).some(e => e !== '')
)

// ====================== РАСЧЁТ ======================
const handleCalculate = () => {
  validateName()
  validateDay()
  validateMonth()
  validateYear()
  validateTime()
  validateCity()

  if (isFormValid.value) {
    const finalCity = form.selectedCity || (form.customCity || '').trim() || ''
    
    store.calculate({
      ...form,
      city: finalCity
    })
  }
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

@keyframes twinkle {
  from { opacity: 0.35; }
  to { opacity: 0.6; }
}
</style>