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
    city: ''
  });

  const result = ref<SpiritualResult | null>(null);
  const loading = ref(false);

  // Нумерология: Число Жизненного Пути
  const calculateLifePathNumber = (d: number, m: number, y: number): number => {
    let sum = d + m + y;
    while (sum > 9) {
      sum = sum.toString().split('').reduce((acc, digit) => acc + Number(digit), 0);
    }
    return sum === 0 ? 9 : sum; // 9 вместо 0
  };

  // Соответствие Аркану Таро
  const getTarotArcana = (number: number): string => {
    const map: Record<number, string> = {
      1: 'Маг (I)', 2: 'Верховная Жрица (II)', 3: 'Императрица (III)',
      4: 'Император (IV)', 5: 'Иерофант (V)', 6: 'Влюблённые (VI)',
      7: 'Колесница (VII)', 8: 'Сила (VIII)', 9: 'Отшельник (IX)',
      10: 'Колесо Фортуны (X)', 11: 'Справедливость (XI)', 
      12: 'Повешенный (XII)', 13: 'Смерть (XIII)', 14: 'Умеренность (XIV)',
      15: 'Дьявол (XV)', 16: 'Башня (XVI)', 17: 'Звезда (XVII)',
      18: 'Луна (XVIII)', 19: 'Солнце (XIX)', 20: 'Суд (XX)',
      21: 'Мир (XXI)', 22: 'Дурак (0)'
    };
    return map[number] || 'Дурак (0)';
  };

  // Универсальный расчёт трёх кругов Шани (приближённый)
  const calculateShaniCycles = (year: number) => {
    const currentYear = new Date().getFullYear();
    const age = currentYear - year;

    const firstStart = year + 5;
    const firstEnd = year + 13;

    const secondStart = year + 30 + 5;   // примерно 35–37 лет
    const secondEnd = year + 30 + 13;    // примерно 43–45 лет

    const thirdStart = year + 60 + 5;    // примерно 65–67 лет
    const thirdEnd = year + 60 + 13;     // примерно 73–75 лет

    return [
      {
        cycle: 1,
        period: `${firstStart}–${firstEnd}`,
        age: "Детство / Формирование",
        stage: "Calcination (Обжиг)",
        arcana: "Смерть (XIII)",
        archetype: "Ранний Сенекс"
      },
      {
        cycle: 2,
        period: `${secondStart}–${secondEnd}`,
        age: "Зрелость (Главный кризис)",
        stage: "Nigredo (Чёрная работа)",
        arcana: "Башня (XVI) → Умеренность (XIV)",
        archetype: "Тень + Сенекс"
      },
      {
        cycle: 3,
        period: `${thirdStart}–${thirdEnd}`,
        age: "Поздняя зрелость",
        stage: "Rubedo (Просветление)",
        arcana: "Солнце (XIX) / Мир (XXI)",
        archetype: "Мудрец / Самость"
      }
    ];
  };

  const calculate = async (data: BirthForm) => {
    loading.value = true;

    const day = parseInt(data.day);
    const month = parseInt(data.month);
    const year = parseInt(data.year);

    const lifePath = calculateLifePathNumber(day, month, year);
    const mainArcana = getTarotArcana(lifePath);
    const cycles = calculateShaniCycles(year);

    const currentYear = new Date().getFullYear();
    const age = currentYear - year;

    let currentCycleText = 'Второй круг Сатурна';
    let currentStageText = 'Трансформация (Nigredo)';

    if (age < 20) {
      currentCycleText = 'Первый круг Сатурна';
      currentStageText = 'Формирование';
    } else if (age > 55) {
      currentCycleText = 'Третий круг Сатурна (или приближение)';
      currentStageText = 'Мудрость и завершение';
    }

    result.value = {
      name: data.name.trim() || 'Путник',
      birthDate: `${day.toString().padStart(2, '0')}.${month.toString().padStart(2, '0')}.${year}`,
      moonSign: 'Определяется по Луне (Janma Rashi)',
      lifePathNumber: lifePath,
      mainArcana,
      currentShaniCycle: currentCycleText,
      currentStage: currentStageText,
      alchemicalStage: age > 35 && age < 50 ? 'Nigredo → Albedo' : 'Nigredo',
      jungArchetype: 'Сенекс (Мудрый Старец) / Интеграция Тени',
      message: `Ваша душа проходит через важные кармические уроки Сатурна. Сейчас вы ${currentStageText.toLowerCase()}.`,
      cycles
    };

    loading.value = false;
  };

  return {
    form,
    result,
    loading,
    calculate
  };
});