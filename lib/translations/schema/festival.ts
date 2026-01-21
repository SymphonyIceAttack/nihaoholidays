import { z } from "zod";

export const festivalSchema = z.object({
  // General
  "festival.backToLearn": z.string(),
  "festival.learning": z.string(),
  "festival.yourPath": z.string(),
  "festival.focusAreas": z.string(),
  "festival.history": z.string(),
  "festival.history.description": z.string(),

  // Tabs
  "festival.tab.expressions": z.string(),
  "festival.tab.foods": z.string(),
  "festival.tab.etiquette": z.string(),
  "festival.tab.tools": z.string(),
  "festival.expressions.count": z.string(),
  "festival.foods.count": z.string(),

  // Expressions
  "festival.essentialPhrases": z.string(),
  "festival.tryAudio": z.string(),

  // Foods
  "festival.traditionalFoods": z.string(),
  "festival.meaning": z.string(),
  "festival.howToOrder": z.string(),
  "festival.food.description": z.string(),
  "festival.food.meaning": z.string(),

  // Etiquette
  "festival.etiquette.do": z.string(),
  "festival.etiquette.do.description": z.string(),
  "festival.etiquette.avoid": z.string(),
  "festival.etiquette.avoid.description": z.string(),
  "festival.etiquette.gifts": z.string(),
  "festival.etiquette.gifts.description": z.string(),
  "festival.etiquette.note": z.string(),
  "festival.etiquette.suitable": z.string(),

  // Tools
  "festival.tools.title": z.string(),
  "festival.tools.description": z.string(),
  "festival.tools.try": z.string(),

  // Continue
  "festival.continue": z.string(),
  "festival.startOver": z.string(),
  "festival.continueJourney": z.string(),
  "festival.exploreAbout": z.string(),
  "festival.culturalOverview": z.string(),
  "festival.culturalOverview.desc": z.string(),
  "festival.interactiveQuiz": z.string(),
  "festival.quiz.desc": z.string(),
  "festival.takeQuiz": z.string(),
  "festival.exploreFestivals": z.string(),
  "festival.discoverFestivals": z.string(),
  "festival.browse": z.string(),

  // User types
  "festival.user.tourist": z.string(),
  "festival.user.tourist.description": z.string(),
  "festival.user.tourist.focus": z.array(z.string()),
  "festival.user.student": z.string(),
  "festival.user.student.description": z.string(),
  "festival.user.student.focus": z.array(z.string()),
  "festival.user.worker": z.string(),
  "festival.user.worker.description": z.string(),
  "festival.user.worker.focus": z.array(z.string()),

  // Common expressions
  "expression.happy": z.string(),
  "expression.greeting": z.string(),
  "expression.formal": z.string(),
  "expression.informal": z.string(),
  "expression.wish": z.string(),

  // Spring Festival
  "spring.name": z.string(),
  "spring.date": z.string(),
  "spring.lunarDate": z.string(),
  "spring.description": z.string(),
  "spring.history": z.string(),
  "spring.customs": z.array(z.string()),
  "spring.taboo": z.array(z.string()),

  // Lantern Festival
  "lantern.name": z.string(),
  "lantern.date": z.string(),
  "lantern.lunarDate": z.string(),
  "lantern.description": z.string(),
  "lantern.history": z.string(),
  "lantern.customs": z.array(z.string()),

  // Mid-Autumn Festival
  "mid_autumn.name": z.string(),
  "mid_autumn.date": z.string(),
  "mid_autumn.lunarDate": z.string(),
  "mid_autumn.description": z.string(),
  "mid_autumn.history": z.string(),
  "mid_autumn.customs": z.array(z.string()),
  "mid_autumn.taboo": z.array(z.string()),

  // Dragon Boat Festival
  "dragon_boat.name": z.string(),
  "dragon_boat.date": z.string(),
  "dragon_boat.lunarDate": z.string(),
  "dragon_boat.description": z.string(),
  "dragon_boat.history": z.string(),
  "dragon_boat.customs": z.array(z.string()),

  // Qingming Festival
  "qingming.name": z.string(),
  "qingming.date": z.string(),
  "qingming.description": z.string(),
  "qingming.history": z.string(),
  "qingming.customs": z.array(z.string()),

  // Qixi Festival
  "qixi.name": z.string(),
  "qixi.date": z.string(),
  "qixi.lunarDate": z.string(),
  "qixi.description": z.string(),
  "qixi.history": z.string(),
  "qixi.customs": z.array(z.string()),

  // Foods
  "food.fish": z.string(),
  "food.fish.meaning": z.string(),
  "food.fish.order": z.string(),
  "food.dumplings": z.string(),
  "food.dumplings.meaning": z.string(),
  "food.noodles": z.string(),
  "food.noodles.meaning": z.string(),
  "food.tangyuan": z.string(),
  "food.tangyuan.meaning": z.string(),
  "food.mooncake": z.string(),
  "food.mooncake.meaning": z.string(),
  "food.zongzi": z.string(),
  "food.zongzi.meaning": z.string(),
  "food.qingtuan": z.string(),
  "food.qingtuan.meaning": z.string(),
  "food.qiaoguo": z.string(),
  "food.qiaoguo.meaning": z.string(),

  // Footer
  "footer.noAccount": z.string(),
  "footer.noRegistration": z.string(),
  "footer.startImmediately": z.string(),
});

export type FestivalSchema = z.infer<typeof festivalSchema>;
