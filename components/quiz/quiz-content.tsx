"use client";

import {
  CheckCircle2,
  Lightbulb,
  RefreshCw,
  Sparkles,
  XCircle,
} from "lucide-react";
import Link from "next/link";
import { Suspense, useState } from "react";
import { Button } from "@/components/ui/button";
import { translate } from "@/lib/translations";
import { festivalData } from "@/lib/translations/en/festival-data";
import { cn } from "@/lib/utils";

interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  category: "history" | "customs" | "food" | "etiquette";
  userType?: "tourist" | "student" | "worker";
}

interface QuizContentProps {
  lang: "en";
  festivalId: string;
}

interface QuizContentInnerProps {
  lang: "en";
  festivalId: string;
}

function QuizContentInner({ lang, festivalId }: QuizContentInnerProps) {
  const t = (key: string, params?: Record<string, string>) =>
    translate(key, lang, params);

  const currentFestival = festivalData[festivalId] || festivalData.spring;
  const basicInfo = currentFestival.basicInfo;

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [answers, setAnswers] = useState<number[]>([]);

  const baseQuestions: QuizQuestion[] = [
    {
      id: 1,
      question: `When is ${basicInfo.name} typically celebrated?`,
      options: [basicInfo.date, "January 1st", "December 25th", "March 15th"],
      correctIndex: 0,
      explanation: `${basicInfo.name} is celebrated on ${basicInfo.lunarDate}.`,
      category: "history",
    },
    {
      id: 2,
      question: `What is the lunar date of ${basicInfo.name}?`,
      options: [
        basicInfo.lunarDate,
        "15th day of 8th lunar month",
        "1st day of 1st lunar month",
        "5th day of 5th lunar month",
      ],
      correctIndex: 0,
      explanation: `${basicInfo.name} falls on ${basicInfo.lunarDate}.`,
      category: "history",
    },
    {
      id: 3,
      question: `Which of the following is a traditional custom for ${basicInfo.name}?`,
      options: [
        basicInfo.customs[0] || "Decorating with lights",
        "Exchanging gifts on Valentine's Day",
        "Eating turkey on Thanksgiving",
        "Trick-or-treating on Halloween",
      ],
      correctIndex: 0,
      explanation: `${basicInfo.customs[0] || "This is a traditional custom for the festival"}.`,
      category: "customs",
    },
    {
      id: 4,
      question: `What should you avoid doing during ${basicInfo.name}?`,
      options: [
        basicInfo.taboo?.[0] || "Breaking things",
        "Eating delicious food",
        "Spending time with family",
        "Wearing new clothes",
      ],
      correctIndex: 0,
      explanation: `${basicInfo.taboo?.[0] || "This is something to avoid during the festival"}.`,
      category: "etiquette",
    },
    {
      id: 5,
      question: `What is a traditional food for ${basicInfo.name}?`,
      options: [
        currentFestival.foods[0]?.name || "Traditional dumplings",
        "Thanksgiving turkey",
        "Christmas ham",
        "Easter eggs",
      ],
      correctIndex: 0,
      explanation: `${currentFestival.foods[0]?.name || "This is a traditional food for the festival"}: ${currentFestival.foods[0]?.meaning || ""}`,
      category: "food",
    },
  ];

  const quizQuestions = baseQuestions;

  const handleAnswerSelect = (index: number) => {
    if (showExplanation) return;
    setSelectedAnswer(index);
    setShowExplanation(true);
    if (index === quizQuestions[currentQuestion].correctIndex) {
      setScore(score + 1);
    }
    setAnswers([...answers, index]);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setQuizCompleted(false);
    setAnswers([]);
  };

  const getScoreMessage = () => {
    const percentage = (score / quizQuestions.length) * 100;
    if (percentage === 100)
      return {
        message: t("quiz.perfectScore"),
        emoji: "🏆",
        color: "text-amber-500",
      };
    if (percentage >= 80)
      return {
        message: t("quiz.excellent"),
        emoji: "🌟",
        color: "text-emerald-500",
      };
    if (percentage >= 60)
      return {
        message: t("quiz.goodJob"),
        emoji: "👍",
        color: "text-blue-500",
      };
    return {
      message: t("quiz.keepLearning"),
      emoji: "📚",
      color: "text-rose-500",
    };
  };

  if (quizCompleted) {
    const result = getScoreMessage();
    return (
      <div className="min-h-screen bg-gradient-to-b from-emerald-50/50 via-background to-background">
        <main className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <span className="text-7xl mb-4 block animate-in fade-in slide-in-from-bottom-4">
              {basicInfo.emoji}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3 animate-in fade-in slide-in-from-bottom-4 duration-500">
              {basicInfo.name} - {t("quiz.quizResults")}
            </h1>
          </div>

          <div className="max-w-xl mx-auto">
            <div className="bg-gradient-to-r from-emerald-100/80 to-teal-100/80 dark:from-emerald-900/30 dark:to-teal-900/20 border border-emerald-200 dark:border-emerald-800 rounded-2xl p-8 md:p-12 text-center">
              <div className="text-6xl mb-4">{result.emoji}</div>
              <h2 className={cn("text-3xl font-bold mb-2", result.color)}>
                {result.message}
              </h2>
              <div className="text-6xl font-bold text-foreground mb-4">
                {score}{" "}
                <span className="text-2xl text-muted-foreground">
                  / {quizQuestions.length}
                </span>
              </div>
              <p className="text-muted-foreground mb-6">
                {t("quiz.scoreDetail", {
                  score: String(score),
                  total: String(quizQuestions.length),
                })}
                {score >= 4 ? t("quiz.greatJob") : t("quiz.reviewMore")}
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  size="lg"
                  variant="outline"
                  onClick={handleRestartQuiz}
                  className="flex-1"
                >
                  <RefreshCw className="h-4 w-4 mr-2" />
                  {t("quiz.tryAgain")}
                </Button>
                <Button
                  size="lg"
                  asChild
                  className="flex-1 bg-rose-600 hover:bg-rose-700 text-white shadow-lg shadow-rose-600/20"
                >
                  <Link href={`/${lang}/culture/${festivalId}`}>
                    <Lightbulb className="h-4 w-4 mr-2" />
                    {t("quiz.studyMore")}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  const question = quizQuestions[currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50/50 via-background to-background">
      <main className="container mx-auto px-4 py-8">
        {/* Quiz Header */}
        <div className="text-center mb-12">
          <span className="text-7xl mb-4 block animate-in fade-in slide-in-from-bottom-4">
            {basicInfo.emoji}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {basicInfo.name} {t("quiz.takeQuiz")}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100">
            {t("quiz.testKnowledge")}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="flex justify-between text-sm text-muted-foreground mb-2">
            <span>{t("quiz.progress")}</span>
            <span>
              {Math.round((currentQuestion / quizQuestions.length) * 100)}%
            </span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-rose-500 to-purple-500 transition-all duration-500"
              style={{
                width: `${(currentQuestion / quizQuestions.length) * 100}%`,
              }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="bg-card rounded-2xl p-8 border shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-medium">
                {question.category.charAt(0).toUpperCase() +
                  question.category.slice(1)}
              </span>
            </div>

            <h2 className="text-xl font-semibold text-foreground mb-6">
              {question.question}
            </h2>

            <div className="space-y-3">
              {question.options.map((option, index) => {
                const isSelected = selectedAnswer === index;
                const isCorrect = index === question.correctIndex;
                const showResult = showExplanation;

                return (
                  <button
                    key={index}
                    type="button"
                    onClick={() => handleAnswerSelect(index)}
                    disabled={showExplanation}
                    className={cn(
                      "w-full p-4 rounded-xl border-2 text-left transition-all duration-300",
                      "hover:shadow-md hover:-translate-y-0.5",
                      !showResult &&
                        "hover:border-rose-300 dark:hover:border-rose-700",
                      showResult &&
                        isCorrect &&
                        "border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20",
                      showResult &&
                        isSelected &&
                        !isCorrect &&
                        "border-red-500 bg-red-50 dark:bg-red-900/20",
                      !showResult &&
                        isSelected &&
                        "border-rose-500 bg-rose-50 dark:bg-rose-900/20",
                      !showResult &&
                        !isSelected &&
                        "border-border bg-background",
                    )}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{option}</span>
                      {showResult && isCorrect && (
                        <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                      )}
                      {showResult && isSelected && !isCorrect && (
                        <XCircle className="h-5 w-5 text-red-500" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {showExplanation && (
              <div className="mt-6 p-4 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 animate-in fade-in slide-in-from-top-2">
                <div className="flex items-start gap-3">
                  <Lightbulb className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">
                      {selectedAnswer === question.correctIndex
                        ? t("quiz.correct")
                        : t("quiz.notCorrect")}
                    </h4>
                    <p className="text-blue-600 dark:text-blue-400 text-sm">
                      {question.explanation}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Next Button */}
        {showExplanation && (
          <div className="max-w-2xl mx-auto text-center animate-in fade-in slide-in-from-bottom-4">
            <Button
              size="lg"
              onClick={handleNextQuestion}
              className="bg-rose-600 hover:bg-rose-700 text-white shadow-lg shadow-rose-600/20"
            >
              {currentQuestion < quizQuestions.length - 1
                ? t("quiz.nextQuestion")
                : t("quiz.seeResults")}
              <Sparkles className="h-4 w-4 ml-2" />
            </Button>
          </div>
        )}
      </main>
    </div>
  );
}

function QuizContentSkeleton() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50/50 via-background to-background">
      <header className="border-b bg-white/60 dark:bg-zinc-900/60 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="h-4 w-24 bg-muted rounded animate-pulse" />
            <div className="h-4 w-32 bg-muted rounded animate-pulse" />
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="h-32 w-32 mx-auto bg-muted rounded-full animate-pulse mb-4" />
          <div className="h-8 w-64 mx-auto bg-muted rounded animate-pulse mb-3" />
          <div className="h-6 w-96 mx-auto bg-muted rounded animate-pulse" />
        </div>
        <div className="max-w-2xl mx-auto">
          <div className="bg-card rounded-2xl p-8 border">
            <div className="h-6 w-32 bg-muted rounded animate-pulse mb-6" />
            <div className="h-8 w-full bg-muted rounded animate-pulse mb-6" />
            <div className="space-y-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-16 bg-muted rounded-xl animate-pulse"
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export function QuizContent({ lang, festivalId }: QuizContentProps) {
  return (
    <Suspense fallback={<QuizContentSkeleton />}>
      <QuizContentInner lang={lang} festivalId={festivalId} />
    </Suspense>
  );
}
