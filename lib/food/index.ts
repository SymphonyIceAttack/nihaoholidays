import type { LanguageType } from "@/lib/translations/config";
import {
  festivals as enFestivals,
  foodData as enFoodData,
} from "@/lib/translations/en/food-data";
import type {
  FoodDataCollection,
  FoodDetail,
  FoodFestival,
  FoodFestivalCollection,
} from "@/lib/translations/schema/food-data";

type FoodDataGetter = (lang: LanguageType) => FoodDataCollection;

const foodDataGetters: Record<LanguageType, FoodDataGetter> = {
  en: () => enFoodData,
};

export function getFoodData(lang: LanguageType = "en"): FoodDataCollection {
  const getter = foodDataGetters[lang];
  if (getter) {
    return getter(lang);
  }
  return enFoodData;
}

export function getFoodDetail(
  id: string,
  lang: LanguageType = "en",
): FoodDetail | undefined {
  const data = getFoodData(lang);
  return data[id];
}

// Default foodData export for backward compatibility (object form)
const defaultFoodData: FoodDataCollection = enFoodData;
export { defaultFoodData as foodData };

// Also export as array for components that need array iteration
const foodDataArray: FoodDetail[] = Object.values(enFoodData);
export { foodDataArray as foodDataList };

export const festivals: FoodFestivalCollection = enFestivals;

export type {
  FoodDetail,
  FoodDataCollection,
  FoodFestival,
  FoodFestivalCollection,
};
