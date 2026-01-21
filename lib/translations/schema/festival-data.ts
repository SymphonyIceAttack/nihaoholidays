import { z } from "zod";

// User type data schema - per festival
export const userTypeLabelSchema = z.object({
  tourist: z.string(),
  student: z.string(),
  worker: z.string(),
});

export const userTypeDescriptionSchema = z.object({
  tourist: z.string(),
  student: z.string(),
  worker: z.string(),
});

export const userTypeFocusSchema = z.object({
  tourist: z.array(z.string()),
  student: z.array(z.string()),
  worker: z.array(z.string()),
});

export const userTypeDataSchema = z.object({
  label: userTypeLabelSchema,
  description: userTypeDescriptionSchema,
  focusContent: userTypeFocusSchema,
  icon: z.object({
    tourist: z.string(),
    student: z.string(),
    worker: z.string(),
  }),
  color: z.object({
    tourist: z.string(),
    student: z.string(),
    worker: z.string(),
  }),
  backgroundColor: z.object({
    tourist: z.string(),
    student: z.string(),
    worker: z.string(),
  }),
});

// Festival basic info schema
export const festivalBasicInfoSchema = z.object({
  name: z.string(),
  emoji: z.string(),
  date: z.string(),
  lunarDate: z.string(),
  description: z.string(),
  history: z.string(),
  customs: z.array(z.string()),
  taboo: z.array(z.string()).optional(),
});

// Expression schema
export const expressionSchema = z.object({
  chinese: z.string(),
  pinyin: z.string(),
  english: z.string(),
  scenario: z.string(),
  userType: z.enum(["tourist", "student", "worker"]).optional(),
});

// Food schema
export const foodSchema = z.object({
  name: z.string(),
  emoji: z.string(),
  meaning: z.string(),
  description: z.string(),
  howToOrder: z.string().optional(),
});

// Gift schema
export const giftSchema = z.object({
  name: z.string(),
  emoji: z.string(),
  suitability: z.string(),
  note: z.string(),
});

// Tool schema
export const toolSchema = z.object({
  name: z.string(),
  description: z.string(),
  badge: z.string().optional(),
});

// Scenario schema
export const scenarioSchema = z.object({
  title: z.string(),
  content: z.string(),
  phrases: z.array(
    z.object({
      chinese: z.string(),
      pinyin: z.string(),
      english: z.string(),
    }),
  ),
});

// Complete festival data schema
export const festivalDataItemSchema = z.object({
  basicInfo: festivalBasicInfoSchema,
  expressions: z.array(expressionSchema),
  foods: z.array(foodSchema),
  gifts: z.array(giftSchema),
  tools: z.array(toolSchema),
  scenarios: z
    .object({
      tourist: z.array(scenarioSchema).optional(),
      student: z.array(scenarioSchema).optional(),
      worker: z.array(scenarioSchema).optional(),
    })
    .optional(),
});

// Complete festival data collection schema
export const festivalDataCollectionSchema = z.record(
  z.string(),
  festivalDataItemSchema,
);

// User type data collection schema
export const userTypeDataCollectionSchema = z.record(
  z.string(),
  userTypeDataSchema,
);

// Quiz question schema
export const quizQuestionSchema = z.object({
  id: z.number(),
  questionKey: z.string(),
  options: z.array(z.string()),
  correctIndex: z.number(),
  explanationKey: z.string(),
  category: z.enum(["history", "customs", "food", "etiquette"]),
});

export type UserTypeLabel = z.infer<typeof userTypeLabelSchema>;
export type UserTypeDescription = z.infer<typeof userTypeDescriptionSchema>;
export type UserTypeFocus = z.infer<typeof userTypeFocusSchema>;
export type UserTypeData = z.infer<typeof userTypeDataSchema>;
export type FestivalBasicInfo = z.infer<typeof festivalBasicInfoSchema>;
export type Expression = z.infer<typeof expressionSchema>;
export type Food = z.infer<typeof foodSchema>;
export type Gift = z.infer<typeof giftSchema>;
export type Tool = z.infer<typeof toolSchema>;
export type Scenario = z.infer<typeof scenarioSchema>;
export type FestivalDataItem = z.infer<typeof festivalDataItemSchema>;
export type FestivalDataCollection = z.infer<
  typeof festivalDataCollectionSchema
>;
export type UserTypeDataCollection = z.infer<
  typeof userTypeDataCollectionSchema
>;
export type QuizQuestion = z.infer<typeof quizQuestionSchema>;
export type QuizQuestionCollection = Record<string, QuizQuestion[]>;
