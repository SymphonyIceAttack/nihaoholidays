import { z } from "zod";

export const homeSchema = z.object({
  // Hero Section
  "hero.badge": z.string(),
  "hero.heading": z.string(),
  "hero.heading.highlight": z.string(),
  "hero.subtitle": z.string(),
  "hero.feature.tools": z.string(),
  "hero.feature.expressions": z.string(),
  "hero.feature.etiquette": z.string(),
  "hero.cta": z.string(),

  // Upcoming Festivals
  "upcoming.title": z.string(),
  "upcoming.subtitle": z.string(),
  "upcoming.subscribe": z.string(),
  "upcoming.comingSoon": z.string(),
  "upcoming.daysLeft": z.string(),

  // Subscribe page
  "subscribe.title": z.string(),
  "subscribe.description": z.string(),
  "subscribe.why.title": z.string(),
  "subscribe.why.benefits": z.array(z.string()),
  "subscribe.daysUntil": z.string(),

  // User Type Selector
  "userType.label": z.string(),
  "userType.customScenario": z.string(),
  "userType.tourist.label": z.string(),
  "userType.tourist.description": z.string(),
  "userType.tourist.scenario": z.string(),
  "userType.student.label": z.string(),
  "userType.student.description": z.string(),
  "userType.student.scenario": z.string(),
  "userType.worker.label": z.string(),
  "userType.worker.description": z.string(),
  "userType.worker.scenario": z.string(),

  // Festival Filters
  "filters.title": z.string(),
  "filters.theme.all": z.string(),
  "filters.theme.family": z.string(),
  "filters.theme.food": z.string(),
  "filters.theme.romance": z.string(),
  "filters.difficulty.all": z.string(),
  "filters.difficulty.beginner": z.string(),
  "filters.difficulty.intermediate": z.string(),

  // Quick Start
  "quickStart.badge": z.string(),
  "quickStart.title": z.string(),
  "quickStart.subtitle": z.string(),
  "quickStart.step1.title": z.string(),
  "quickStart.step1.description": z.string(),
  "quickStart.step1.time": z.string(),
  "quickStart.step2.title": z.string(),
  "quickStart.step2.description": z.string(),
  "quickStart.step2.time": z.string(),
  "quickStart.step3.title": z.string(),
  "quickStart.step3.description": z.string(),
  "quickStart.step3.time": z.string(),
  "quickStart.cta": z.string(),

  // Featured Tools
  "tools.badge": z.string(),
  "tools.title": z.string(),
  "tools.subtitle": z.string(),
  "tools.viewAll": z.string(),
  "tools.applicable": z.string(),
  "tool.menuBuilder.title": z.string(),
  "tool.menuBuilder.description": z.string(),
  "tool.menuBuilder.badge": z.string(),
  "tool.greetingGenerator.title": z.string(),
  "tool.greetingGenerator.description": z.string(),
  "tool.greetingGenerator.badge": z.string(),
  "tool.giftGuide.title": z.string(),
  "tool.giftGuide.description": z.string(),
  "tool.cityGuide.title": z.string(),
  "tool.cityGuide.description": z.string(),
  "tool.cityGuide.badge": z.string(),

  // Food Preview
  "food.badge": z.string(),
  "food.title": z.string(),
  "food.subtitle": z.string(),
  "food.explore": z.string(),
  "food.tags.mustTry": z.string(),
  "food.tags.meaningful": z.string(),
  "food.tags.dessert": z.string(),
  "food.tags.sweetSalty": z.string(),
  "food.tags.giftIdea": z.string(),

  // Stats Banner
  "stats.users": z.string(),
  "stats.festivals": z.string(),
  "stats.tools": z.string(),
  "stats.countries": z.string(),

  // Value Proposition
  "value.badge": z.string(),
  "value.title": z.string(),
  "value.subtitle": z.string(),
  "feature.taskDriven.title": z.string(),
  "feature.taskDriven.description": z.string(),
  "feature.depth.title": z.string(),
  "feature.depth.description": z.string(),
  "feature.customized.title": z.string(),
  "feature.customized.description": z.string(),
  "feature.dataDriven.title": z.string(),
  "feature.dataDriven.description": z.string(),
});

export type HomeSchema = z.infer<typeof homeSchema>;
