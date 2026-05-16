import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { BirthForm, SpiritualResult } from '@/types/astrology';

export const useAstroTaroStore = defineStore('astrotaro', () => {
  const form = ref<BirthForm>({
    name: '',
    day: '',
    month: '',
    year: '',
    time: '',
    country: 'Россия',
    city: '',
    selectedCity: '',
    customCity: ''
  });

  const result = ref<SpiritualResult | null>(null);
  const loading = ref(false);
  
  // Города
  const cities = ref<string[]>([]);
  const citiesLoading = ref(false);
  const citiesError = ref<string | null>(null);

  // ==================== ЗАГРУЗКА ГОРОДОВ ====================
  const fetchRussianCities = async () => {
    citiesLoading.value = true;
    citiesError.value = null;

    try {
      const response = await fetch(
        'https://raw.githubusercontent.com/pensnarik/russian-cities/master/russian-cities.json'
      );

      if (!response.ok) throw new Error('Failed to fetch');

      const data = await response.json();

      cities.value = data
        .map((item: any) => item.name)
        .filter(Boolean)
        .sort();
    } catch (err) {
      console.error('Ошибка загрузки городов:', err);
      citiesError.value = 'Не удалось загрузить список городов. Вводите вручную.';
      
      cities.value = [
        "Москва", "Санкт-Петербург", "Новосибирск", "Екатеринбург", "Казань",
        "Нижний Новгород", "Челябинск", "Самара", "Омск", "Ростов-на-Дону",
        "Уфа", "Красноярск", "Пермь", "Воронеж", "Волгоград", "Краснодар"
      ];
    } finally {
      citiesLoading.value = false;
    }
  };

  // ==================== РАСЧЁТЫ ====================
  const calculateLifePathNumber = (d: number, m: number, y: number): number => {
    let sum = d + m + y;
    while (sum > 9) {
      sum = sum.toString().split('').reduce((acc, n) => acc + Number(n), 0);
    }
    return sum === 0 ? 9 : sum;
  };

  const getTarotArcana = (num: number): string => {
    const map: Record<number, string> = {
      1: 'Маг (I)', 2: 'Верховная Жрица (II)', 3: 'Императрица (III)',
      4: 'Император (IV)', 5: 'Иерофант (V)', 6: 'Влюблённые (VI)',
      7: 'Колесница (VII)', 8: 'Сила (VIII)', 9: 'Отшельник (IX)',
      10: 'Колесо Фортуны (X)', 11: 'Справедливость (XI)', 12: 'Повешенный (XII)',
      13: 'Смерть (XIII)', 14: 'Умеренность (XIV)', 15: 'Дьявол (XV)',
      16: 'Башня (XVI)', 17: 'Звезда (XVII)', 18: 'Луна (XVIII)',
      19: 'Солнце (XIX)', 20: 'Суд (XX)', 21: 'Мир (XXI)', 22: 'Дурак (0)'
    };
    return map[num] || 'Дурак (0)';
  };

  const calculateShaniCycles = (birthYear: number) => [
    { cycle: 1, period: `${birthYear + 5}–${birthYear + 13}`, age: "Детство и Формирование", stage: "Calcination — Обжиг", arcana: "Смерть (XIII) / Повешенный (XII)", archetype: "Ранний Сенекс" },
    { cycle: 2, period: `${birthYear + 35}–${birthYear + 45}`, age: "Зрелость — Главный Кризис", stage: "Nigredo — Чёрная работа", arcana: "Башня (XVI) → Умеренность (XIV)", archetype: "Тень + Сенекс" },
    { cycle: 3, period: `${birthYear + 65}–${birthYear + 75}`, age: "Мудрость и Завершение", stage: "Rubedo — Просветление", arcana: "Солнце (XIX) / Мир (XXI)", archetype: "Мудрец / Самость" }
  ];

  const calculate = async (data: BirthForm) => {
    if (!data) {
      console.error("Данные для расчёта не переданы");
      return;
    }

    loading.value = true;

    try {
      const day = parseInt(data.day || '0');
      const month = parseInt(data.month || '0');
      const year = parseInt(data.year || '0');
      const age = new Date().getFullYear() - year;

      const lifePath = calculateLifePathNumber(day, month, year);

      let currentStage = 'Трансформация';
      if (age < 18) currentStage = 'Первая трансформация (Формирование)';
      else if (age < 35) currentStage = 'Переход во взрослую жизнь';
      else if (age < 52) currentStage = 'Второй круг Шани — Главный кризис и трансформация';
      else if (age < 65) currentStage = 'Интеграция опыта';
      else currentStage = 'Третий круг Шани — Мудрость и завершение';

      result.value = {
        name: data.name?.trim() || 'Путник',
        birthDate: `${day.toString().padStart(2, '0')}.${month.toString().padStart(2, '0')}.${year}`,
        moonSign: 'Определяется по Луне',
        lifePathNumber: lifePath,
        mainArcana: getTarotArcana(lifePath),
        currentShaniCycle: 'Активный цикл',
        currentStage,
        alchemicalStage: age > 30 && age < 52 ? 'Nigredo → Albedo' : age >= 65 ? 'Rubedo' : 'Nigredo',
        jungArchetype: age > 35 ? 'Сенекс + Интеграция Тени' : 'Формирование характера',
        message: `Вы сейчас находитесь на этапе: ${currentStage}`,
        cycles: calculateShaniCycles(year)
      };
    } catch (err) {
      console.error("Ошибка при расчёте:", err);
    } finally {
      loading.value = false;
    }
  };

  // Загружаем города при инициализации
  fetchRussianCities();

  return {
    form,
    result,
    loading,
    cities,
    citiesLoading,
    citiesError,
    calculate,
    fetchRussianCities
  };
});