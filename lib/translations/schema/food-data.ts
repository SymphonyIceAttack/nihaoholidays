import { z } from "zod";

// Food item schema
export const foodItemSchema = z.object({
  id: z.string(),
  category: z.string(),
  festivalKey: z.string(),
  color: z.string(),
  emoji: z.string(),
  tags: z.array(z.string()),
});

// Translatable food content schema
export const foodContentSchema = z.object({
  name: z.string(),
  pinyin: z.string(),
  english: z.string(),
  festival: z.string(),
  description: z.string(),
  story: z.string(),
  meaning: z.string(),
  history: z.string(),
  regional: z.string(),
  pronunciation: z.string(),
  when: z.string(),
  withWhom: z.string(),
  ordering: z.string(),
  tips: z.array(z.string()),
  variations: z.array(z.string()),
  taboo: z.array(z.string()),
  related: z.string(),
});

// Complete food detail schema
export const foodDetailSchema = z.object({
  ...foodItemSchema.shape,
  ...foodContentSchema.shape,
});

// Festival schema for food page
export const foodFestivalSchema = z.object({
  key: z.string(),
  name: z.string(),
  emoji: z.string(),
  link: z.string(),
});

// Food data collection schema
export const foodDataCollectionSchema = z.record(z.string(), foodDetailSchema);

// Festival collection schema
export const foodFestivalCollectionSchema = z.array(foodFestivalSchema);

// Type exports
export type FoodItem = z.infer<typeof foodItemSchema>;
export type FoodContent = z.infer<typeof foodContentSchema>;
export type FoodDetail = z.infer<typeof foodDetailSchema>;
export type FoodFestival = z.infer<typeof foodFestivalSchema>;
export type FoodDataCollection = z.infer<typeof foodDataCollectionSchema>;
export type FoodFestivalCollection = z.infer<
  typeof foodFestivalCollectionSchema
>;
