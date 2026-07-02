import { useQuizStore } from "@store";
import { useEffect } from "react";
import { motion } from "motion/react";
import { EmptyStateUI, ErrorStateUI, LoadingUI, QuizCard } from "@components";

const QuizListPage = () => {
  const { quizzes, loading, error, fetchQuizzes } = useQuizStore();

  useEffect(() => {
    fetchQuizzes();
  }, [fetchQuizzes]);

  return (
    <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-6 md:px-6 lg:px-8">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="mb-8 flex items-center justify-between"
      >
        <div>
          <h1 className="text-2xl font-semibold text-white md:text-3xl">
            Quizzes
          </h1>

          <p className="mt-1 text-sm text-purple-300">
            Choose a quiz and start playing
          </p>
        </div>

        <span className="rounded-xl border border-purple-800 bg-purple-900/40 px-3 py-2 text-sm text-purple-200">
          {quizzes.length} quizzes
        </span>
      </motion.div>

      {loading && <LoadingUI />}

      {!loading && error && (
        <ErrorStateUI
          title="Failed to load quizzes"
          error={error}
          onRetry={fetchQuizzes}
        />
      )}

      {!loading && !error && quizzes.length === 0 && <EmptyStateUI />}

      {!loading && !error && quizzes.length > 0 && (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {quizzes.map((quiz, index) => (
            <motion.div
              key={quiz.id}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.3,
                delay: index * 0.05,
              }}
            >
              <QuizCard quiz={quiz} />
            </motion.div>
          ))}
        </div>
      )}
    </main>
  );
};

export default QuizListPage;
