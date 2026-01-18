import { z } from "zod";

export const quizSchema = z.object({
  "quiz.backToFestival": z.string(),
  "quiz.quizComplete": z.string(),
  "quiz.quizResults": z.string(),
  "quiz.takeQuiz": z.string(),
  "quiz.perfectScore": z.string(),
  "quiz.excellent": z.string(),
  "quiz.goodJob": z.string(),
  "quiz.keepLearning": z.string(),
  "quiz.scoreDetail": z.string(),
  "quiz.greatJob": z.string(),
  "quiz.reviewMore": z.string(),
  "quiz.tryAgain": z.string(),
  "quiz.studyMore": z.string(),
  "quiz.quizTitle": z.string(),
  "quiz.testKnowledge": z.string(),
  "quiz.learningAs": z.string(),
  "quiz.progress": z.string(),
  "quiz.questionOf": z.string(),
  "quiz.correct": z.string(),
  "quiz.notCorrect": z.string(),
  "quiz.nextQuestion": z.string(),
  "quiz.seeResults": z.string(),
});

export type QuizSchema = z.infer<typeof quizSchema>;
