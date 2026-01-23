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

  // Double Ninth Festival
  "double_ninth.name": z.string(),
  "double_ninth.date": z.string(),
  "double_ninth.lunarDate": z.string(),
  "double_ninth.description": z.string(),
  "double_ninth.history": z.string(),
  "double_ninth.customs": z.array(z.string()),

  // Winter Solstice
  "winter_solstice.name": z.string(),
  "winter_solstice.date": z.string(),
  "winter_solstice.lunarDate": z.string(),
  "winter_solstice.description": z.string(),
  "winter_solstice.history": z.string(),
  "winter_solstice.customs": z.array(z.string()),

  // Laba Festival
  "laba.name": z.string(),
  "laba.date": z.string(),
  "laba.lunarDate": z.string(),
  "laba.description": z.string(),
  "laba.history": z.string(),
  "laba.customs": z.array(z.string()),

  // Dragon Head Festival (Longtaitou)
  "longtaitou.name": z.string(),
  "longtaitou.date": z.string(),
  "longtaitou.lunarDate": z.string(),
  "longtaitou.description": z.string(),
  "longtaitou.history": z.string(),
  "longtaitou.customs": z.array(z.string()),

  // Shangsi Festival
  "shangsi.name": z.string(),
  "shangsi.date": z.string(),
  "shangsi.lunarDate": z.string(),
  "shangsi.description": z.string(),
  "shangsi.history": z.string(),
  "shangsi.customs": z.array(z.string()),

  // New Year's Eve
  "new_years_eve.name": z.string(),
  "new_years_eve.date": z.string(),
  "new_years_eve.lunarDate": z.string(),
  "new_years_eve.description": z.string(),
  "new_years_eve.history": z.string(),
  "new_years_eve.customs": z.array(z.string()),

  // Cold Food Festival
  "cold_food.name": z.string(),
  "cold_food.date": z.string(),
  "cold_food.lunarDate": z.string(),
  "cold_food.description": z.string(),
  "cold_food.history": z.string(),
  "cold_food.customs": z.array(z.string()),

  // Ghost Festival
  "ghost.name": z.string(),
  "ghost.date": z.string(),
  "ghost.lunarDate": z.string(),
  "ghost.description": z.string(),
  "ghost.history": z.string(),
  "ghost.customs": z.array(z.string()),

  // Human Day (Renri)
  "renri.name": z.string(),
  "renri.date": z.string(),
  "renri.lunarDate": z.string(),
  "renri.description": z.string(),
  "renri.history": z.string(),
  "renri.customs": z.array(z.string()),

  // God of Wealth Festival
  "wealth_god.name": z.string(),
  "wealth_god.date": z.string(),
  "wealth_god.lunarDate": z.string(),
  "wealth_god.description": z.string(),
  "wealth_god.history": z.string(),
  "wealth_god.customs": z.array(z.string()),

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
  "double_ninth.learn.subtitle": z.string(),
  "winter_solstice.learn.subtitle": z.string(),
  "laba.learn.subtitle": z.string(),
  "longtaitou.learn.subtitle": z.string(),
  "shangsi.learn.subtitle": z.string(),
  "new_years_eve.learn.subtitle": z.string(),
  "cold_food.learn.subtitle": z.string(),
  "ghost.learn.subtitle": z.string(),
  "renri.learn.subtitle": z.string(),
  "wealth_god.learn.subtitle": z.string(),

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

  // Quiz Double Ninth Festival questions
  "quiz.double_ninth.q1": z.string(),
  "quiz.double_ninth.q1.explain": z.string(),
  "quiz.double_ninth.q2": z.string(),
  "quiz.double_ninth.q2.explain": z.string(),
  "quiz.double_ninth.q3": z.string(),
  "quiz.double_ninth.q3.explain": z.string(),
  "quiz.double_ninth.q4": z.string(),
  "quiz.double_ninth.q4.explain": z.string(),
  "quiz.double_ninth.q5": z.string(),
  "quiz.double_ninth.q5.explain": z.string(),

  // Quiz Winter Solstice questions
  "quiz.winter_solstice.q1": z.string(),
  "quiz.winter_solstice.q1.explain": z.string(),
  "quiz.winter_solstice.q2": z.string(),
  "quiz.winter_solstice.q2.explain": z.string(),
  "quiz.winter_solstice.q3": z.string(),
  "quiz.winter_solstice.q3.explain": z.string(),
  "quiz.winter_solstice.q4": z.string(),
  "quiz.winter_solstice.q4.explain": z.string(),
  "quiz.winter_solstice.q5": z.string(),
  "quiz.winter_solstice.q5.explain": z.string(),

  // Quiz Laba Festival questions
  "quiz.laba.q1": z.string(),
  "quiz.laba.q1.explain": z.string(),
  "quiz.laba.q2": z.string(),
  "quiz.laba.q2.explain": z.string(),
  "quiz.laba.q3": z.string(),
  "quiz.laba.q3.explain": z.string(),
  "quiz.laba.q4": z.string(),
  "quiz.laba.q4.explain": z.string(),
  "quiz.laba.q5": z.string(),
  "quiz.laba.q5.explain": z.string(),

  // Quiz Longtaitou Festival questions
  "quiz.longtaitou.q1": z.string(),
  "quiz.longtaitou.q1.explain": z.string(),
  "quiz.longtaitou.q2": z.string(),
  "quiz.longtaitou.q2.explain": z.string(),
  "quiz.longtaitou.q3": z.string(),
  "quiz.longtaitou.q3.explain": z.string(),
  "quiz.longtaitou.q4": z.string(),
  "quiz.longtaitou.q4.explain": z.string(),
  "quiz.longtaitou.q5": z.string(),
  "quiz.longtaitou.q5.explain": z.string(),

  // Quiz Shangsi Festival questions
  "quiz.shangsi.q1": z.string(),
  "quiz.shangsi.q1.explain": z.string(),
  "quiz.shangsi.q2": z.string(),
  "quiz.shangsi.q2.explain": z.string(),
  "quiz.shangsi.q3": z.string(),
  "quiz.shangsi.q3.explain": z.string(),
  "quiz.shangsi.q4": z.string(),
  "quiz.shangsi.q4.explain": z.string(),
  "quiz.shangsi.q5": z.string(),
  "quiz.shangsi.q5.explain": z.string(),

  // Quiz New Year's Eve questions
  "quiz.new_years_eve.q1": z.string(),
  "quiz.new_years_eve.q1.explain": z.string(),
  "quiz.new_years_eve.q2": z.string(),
  "quiz.new_years_eve.q2.explain": z.string(),
  "quiz.new_years_eve.q3": z.string(),
  "quiz.new_years_eve.q3.explain": z.string(),
  "quiz.new_years_eve.q4": z.string(),
  "quiz.new_years_eve.q4.explain": z.string(),
  "quiz.new_years_eve.q5": z.string(),
  "quiz.new_years_eve.q5.explain": z.string(),

  // Quiz Cold Food Festival questions
  "quiz.cold_food.q1": z.string(),
  "quiz.cold_food.q1.explain": z.string(),
  "quiz.cold_food.q2": z.string(),
  "quiz.cold_food.q2.explain": z.string(),
  "quiz.cold_food.q3": z.string(),
  "quiz.cold_food.q3.explain": z.string(),
  "quiz.cold_food.q4": z.string(),
  "quiz.cold_food.q4.explain": z.string(),
  "quiz.cold_food.q5": z.string(),
  "quiz.cold_food.q5.explain": z.string(),

  // Quiz Ghost Festival questions
  "quiz.ghost.q1": z.string(),
  "quiz.ghost.q1.explain": z.string(),
  "quiz.ghost.q2": z.string(),
  "quiz.ghost.q2.explain": z.string(),
  "quiz.ghost.q3": z.string(),
  "quiz.ghost.q3.explain": z.string(),
  "quiz.ghost.q4": z.string(),
  "quiz.ghost.q4.explain": z.string(),
  "quiz.ghost.q5": z.string(),
  "quiz.ghost.q5.explain": z.string(),

  // Quiz Renri (Human Day) questions
  "quiz.renri.q1": z.string(),
  "quiz.renri.q1.explain": z.string(),
  "quiz.renri.q2": z.string(),
  "quiz.renri.q2.explain": z.string(),
  "quiz.renri.q3": z.string(),
  "quiz.renri.q3.explain": z.string(),
  "quiz.renri.q4": z.string(),
  "quiz.renri.q4.explain": z.string(),
  "quiz.renri.q5": z.string(),
  "quiz.renri.q5.explain": z.string(),

  // Quiz Wealth God Festival questions
  "quiz.wealth_god.q1": z.string(),
  "quiz.wealth_god.q1.explain": z.string(),
  "quiz.wealth_god.q2": z.string(),
  "quiz.wealth_god.q2.explain": z.string(),
  "quiz.wealth_god.q3": z.string(),
  "quiz.wealth_god.q3.explain": z.string(),
  "quiz.wealth_god.q4": z.string(),
  "quiz.wealth_god.q4.explain": z.string(),
  "quiz.wealth_god.q5": z.string(),
  "quiz.wealth_god.q5.explain": z.string(),
});

export type FestivalSchema = z.infer<typeof festivalSchema>;
