import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { formatTime } from "@utils";
import { EmptyStateUI } from "@components";

type FinishState = {
  score: number;
  correctAnswers: number;
  total: number;
  timeTakenMs: number;
};

export default function QuizFinishPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const state = location.state as FinishState | null;

  const [loadingResults, setLoadingResults] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingResults(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  const percentage = useMemo(() => {
    if (!state || state.total === 0) return 0;
    return Math.round((state.correctAnswers / state.total) * 100);
  }, [state]);

  if (!state) {
    return <EmptyStateUI />;
  }

  if (loadingResults) {
    return (
      <main className="flex min-h-screen items-center justify-center px-4 text-white">
        <div className="text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "linear",
            }}
            className="mx-auto mb-6 h-16 w-16 rounded-full border-4 border-purple-700 border-t-purple-300"
          />

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-semibold"
          >
            Calculating Results...
          </motion.h2>

          <motion.p
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{
              repeat: Infinity,
              duration: 1.4,
            }}
            className="mt-3 text-purple-300"
          >
            Please wait a moment.
          </motion.p>
        </div>
      </main>
    );
  }

  const { score, correctAnswers, total, timeTakenMs } = state;

  return (
    <motion.main
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mx-auto max-w-3xl px-4 py-10 text-white"
    >
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-semibold">🎉 Quiz Complete!</h1>

        <p className="mt-2 text-sm text-purple-300">Here's how you did</p>
      </div>

      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          delay: 0.2,
          duration: 0.4,
        }}
        className="rounded-2xl border border-purple-900/40 bg-purple-950/40 p-8"
      >
        <div className="mb-8 flex justify-center">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 180,
              damping: 12,
            }}
            className="relative flex h-36 w-36 items-center justify-center rounded-full border-4 border-purple-600/50 bg-purple-900/30"
          >
            <div className="text-center">
              <div className="text-3xl font-bold">{percentage}%</div>

              <div className="mt-1 text-xs text-purple-300">Score</div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="rounded-xl border border-purple-900/40 bg-purple-900/20 p-4 text-center"
          >
            <div className="text-2xl font-semibold">{score}</div>

            <div className="mt-1 text-xs text-purple-300">Points</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="rounded-xl border border-purple-900/40 bg-purple-900/20 p-4 text-center"
          >
            <div className="text-2xl font-semibold">
              {correctAnswers}/{total}
            </div>

            <div className="mt-1 text-xs text-purple-300">Correct</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="rounded-xl border border-purple-900/40 bg-purple-900/20 p-4 text-center"
          >
            <div className="text-2xl font-semibold">
              {formatTime(timeTakenMs)}
            </div>

            <div className="mt-1 text-xs text-purple-300">Time</div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-8 flex gap-3"
        >
          <button
            onClick={() => navigate("/")}
            className="flex-1 rounded-xl border border-purple-700/50 bg-purple-900/20 py-3 font-medium transition hover:bg-purple-800/30"
          >
            Back to Quizzes
          </button>

          <button
            onClick={() => navigate(-1)}
            className="flex-1 rounded-xl bg-purple-600 py-3 font-medium transition hover:bg-purple-500"
          >
            Try Again
          </button>
        </motion.div>
      </motion.div>
    </motion.main>
  );
}
