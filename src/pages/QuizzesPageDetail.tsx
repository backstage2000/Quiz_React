import { useEffect, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuizStore } from "@store";
import { toast } from "sonner";
import { EmptyStateUI, ErrorStateUI, LoadingUI } from "@components";
import { shuffle } from "@utils";

export default function QuizPlayPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    quizzes,
    loading,
    fetchQuizzes,
    currentIndex,
    selectedAnswer,
    score,
    error,
    setSelectedAnswer,
    setCurrentIndex,
    incrementScore,
    resetQuiz,
    startedAt,
  } = useQuizStore();

  useEffect(() => {
    if (quizzes.length === 0) {
      fetchQuizzes();
    }
  }, [quizzes.length, fetchQuizzes]);

  useEffect(() => {
    resetQuiz();
  }, [id, resetQuiz]);

  const quiz = useMemo(() => quizzes.find((q) => q.id === id), [quizzes, id]);

  const currentQuestion = quiz?.questions[currentIndex];

  const answers = useMemo(() => {
    if (!currentQuestion) return [];
    return shuffle([
      ...currentQuestion.incorrectAnswers.map((a) => ({
        text: a,
        isCorrect: false,
      })),
      { text: currentQuestion.correctAnswer, isCorrect: true },
    ]);
  }, [currentQuestion]);

  function handleAnswer(text: string) {
    setSelectedAnswer(text);
  }

  function handleNext() {
    if (!selectedAnswer || !quiz || !currentQuestion) return;

    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;

    if (isCorrect) {
      incrementScore();
      toast.success("🎉 That's correct!");
    } else {
      toast.error(
        `Incorrect. The correct answer is: ${currentQuestion.correctAnswer}`,
      );
    }

    const isLast = currentIndex === quiz.questions.length - 1;

    if (isLast) {
      const finalScore = isCorrect ? score + 1 : score;
      const timeTakenMs = startedAt ? Date.now() - startedAt : 0;

      navigate("/quizzes/finish", {
        state: {
          score: finalScore,
          correctAnswers: finalScore,
          total: quiz.questions.length,
          timeTakenMs,
        },
      });
      return;
    }

    setCurrentIndex(currentIndex + 1);
    setSelectedAnswer(null);
  }
  if (loading) {
    <LoadingUI />;
  }

  if (error) {
    <ErrorStateUI
      title="Failed to load Question"
      error={error}
      onRetry={fetchQuizzes}
    />;
  }

  if (!quiz || !currentQuestion) {
    return <EmptyStateUI />;
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-10 text-white">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">{quiz.title}</h1>
        <p className="text-sm text-purple-300 mt-1">
          Question {currentIndex + 1} / {quiz.questions.length}
        </p>
      </div>

      <div className="rounded-2xl border border-purple-900/40 bg-purple-950/40 p-6">
        <h2 className="text-lg font-medium mb-5">{currentQuestion.question}</h2>

        <div className="space-y-3">
          {answers.map((answer, idx) => {
            const isSelected = selectedAnswer === answer.text;
            return (
              <button
                key={idx}
                onClick={() => handleAnswer(answer.text)}
                className={`
                  w-full rounded-xl px-4 py-3 text-left transition border
                  ${
                    isSelected
                      ? "bg-purple-700/40 border-purple-500 text-white"
                      : "bg-purple-900/20 border-transparent hover:bg-purple-800/30"
                  }
                `}
              >
                {answer.text}
              </button>
            );
          })}
        </div>

        <button
          onClick={handleNext}
          disabled={!selectedAnswer}
          className="mt-6 w-full rounded-xl bg-purple-600 py-3 font-medium disabled:opacity-50"
        >
          Next
        </button>
      </div>

      <p className="mt-4 text-sm text-purple-300">Score: {score}</p>
    </main>
  );
}
