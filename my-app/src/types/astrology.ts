export interface BirthForm {
  name: string;
  day: string;
  month: string;
  year: string;
  time: string;
  country: string;
  city: string;
  selectedCity?: string;   // для выпадающего списка
  customCity?: string;     // если ввели вручную
}

export interface SpiritualResult {
  name: string;
  birthDate: string;
  moonSign: string;
  lifePathNumber: number;
  mainArcana: string;
  currentShaniCycle: string;
  currentStage: string;
  alchemicalStage: string;
  jungArchetype: string;
  message: string;
  cycles: Array<{
    cycle: number;
    period: string;
    age: string;
    stage: string;
    arcana: string;
    archetype: string;
  }>;
}