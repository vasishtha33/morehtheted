export interface BirthForm {
  name: string;
  day: string;
  month: string;
  year: string;
  time: string;
  country: string;
  city: string;
  selectedCity?: string;
  customCity?: string;
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
  cycles: Array<{ /* ... */ }>;
  // === НОВЫЕ ПОЛЯ ===
  zodiacSign: string;
  fixedStar: string;
  fixedStarPurpose: string;
}