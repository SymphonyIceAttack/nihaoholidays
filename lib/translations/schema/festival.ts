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

  // Festival learn page subtitles
  "spring.learn.subtitle": z.string(),
  "lantern.learn.subtitle": z.string(),
  "mid_autumn.learn.subtitle": z.string(),
  "dragon_boat.learn.subtitle": z.string(),
  "qingming.learn.subtitle": z.string(),
  "qixi.learn.subtitle": z.string(),

  // Difficulty levels
  "difficulty.beginner": z.string(),
  "difficulty.intermediate": z.string(),
  "difficulty.advanced": z.string(),

  // Tools count
  "tools.count": z.string(),

  // Footer
  "footer.noAccount": z.string(),
  "footer.noRegistration": z.string(),
  "footer.startImmediately": z.string(),

  // Learn page
  "learn.chooseFestival": z.string(),
  "learn.readyToLearn": z.string(),
  "learn.startJourney": z.string(),
  "learn.learning": z.string(),
  "learn.clickStart": z.string(),
  "learn.selectFestival": z.string(),
  "learn.fiveMinutes": z.string(),
  "learn.readyLearn": z.string(),
  "learn.getExpressions": z.string(),
  "learn.startNow": z.string(),
  "learn.viewDetails": z.string(),
  "learn.whatLearn": z.string(),
  "learn.comprehensive": z.string(),
  "learn.expressions": z.string(),
  "learn.expressions.desc": z.string(),
  "learn.foodGuide": z.string(),
  "learn.foodGuide.desc": z.string(),
  "learn.etiquette": z.string(),
  "learn.etiquette.desc": z.string(),
  "learn.practice": z.string(),
  "learn.practice.desc": z.string(),
  "learn.noAccount": z.string(),
  "learn.noRegistration": z.string(),
  "learn.startImmediately": z.string(),
  "learn.step.choose": z.string(),
  "learn.step.expressions": z.string(),
  "learn.step.practice": z.string(),

  // Quiz Spring Festival questions
  "quiz.spring.q1": z.string(),
  "quiz.spring.q1.explain": z.string(),
  "quiz.spring.q2": z.string(),
  "quiz.spring.q2.explain": z.string(),
  "quiz.spring.q3": z.string(),
  "quiz.spring.q3.explain": z.string(),
  "quiz.spring.q4": z.string(),
  "quiz.spring.q4.explain": z.string(),
  "quiz.spring.q5": z.string(),
  "quiz.spring.q5.explain": z.string(),

  // Quiz Lantern Festival questions
  "quiz.lantern.q1": z.string(),
  "quiz.lantern.q1.explain": z.string(),
  "quiz.lantern.q2": z.string(),
  "quiz.lantern.q2.explain": z.string(),
  "quiz.lantern.q3": z.string(),
  "quiz.lantern.q3.explain": z.string(),
  "quiz.lantern.q4": z.string(),
  "quiz.lantern.q4.explain": z.string(),
  "quiz.lantern.q5": z.string(),
  "quiz.lantern.q5.explain": z.string(),

  // Quiz Mid-Autumn Festival questions
  "quiz.mid_autumn.q1": z.string(),
  "quiz.mid_autumn.q1.explain": z.string(),
  "quiz.mid_autumn.q2": z.string(),
  "quiz.mid_autumn.q2.explain": z.string(),
  "quiz.mid_autumn.q3": z.string(),
  "quiz.mid_autumn.q3.explain": z.string(),
  "quiz.mid_autumn.q4": z.string(),
  "quiz.mid_autumn.q4.explain": z.string(),
  "quiz.mid_autumn.q5": z.string(),
  "quiz.mid_autumn.q5.explain": z.string(),

  // Quiz Dragon Boat Festival questions
  "quiz.dragon_boat.q1": z.string(),
  "quiz.dragon_boat.q1.explain": z.string(),
  "quiz.dragon_boat.q2": z.string(),
  "quiz.dragon_boat.q2.explain": z.string(),
  "quiz.dragon_boat.q3": z.string(),
  "quiz.dragon_boat.q3.explain": z.string(),
  "quiz.dragon_boat.q4": z.string(),
  "quiz.dragon_boat.q4.explain": z.string(),
  "quiz.dragon_boat.q5": z.string(),
  "quiz.dragon_boat.q5.explain": z.string(),

  // Quiz Qingming Festival questions
  "quiz.qingming.q1": z.string(),
  "quiz.qingming.q1.explain": z.string(),
  "quiz.qingming.q2": z.string(),
  "quiz.qingming.q2.explain": z.string(),
  "quiz.qingming.q3": z.string(),
  "quiz.qingming.q3.explain": z.string(),
  "quiz.qingming.q4": z.string(),
  "quiz.qingming.q4.explain": z.string(),
  "quiz.qingming.q5": z.string(),
  "quiz.qingming.q5.explain": z.string(),

  // Quiz Qixi Festival questions
  "quiz.qixi.q1": z.string(),
  "quiz.qixi.q1.explain": z.string(),
  "quiz.qixi.q2": z.string(),
  "quiz.qixi.q2.explain": z.string(),
  "quiz.qixi.q3": z.string(),
  "quiz.qixi.q3.explain": z.string(),
  "quiz.qixi.q4": z.string(),
  "quiz.qixi.q4.explain": z.string(),
  "quiz.qixi.q5": z.string(),
  "quiz.qixi.q5.explain": z.string(),
});

export type FestivalSchema = z.infer<typeof festivalSchema>;
