import { create } from "zustand";
import type { Quiz } from "@features/quiz/types";
import { getQuizzes } from "@features/quiz/services";

type QuizStore = {
  quizzes: Quiz[];
  loading: boolean;
  error: string | null;

  fetchQuizzes: () => Promise<void>;

  currentIndex: number;
  selectedAnswer: string | null;
  score: number;
  startedAt: number | null;

  setSelectedAnswer: (answer: string | null) => void;
  setCurrentIndex: (index: number) => void;
  incrementScore: () => void;
  resetQuiz: () => void;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const useQuizStore = create<QuizStore>((set, _) => ({
  quizzes: [],
  loading: false,
  error: null,

  fetchQuizzes: async () => {
    set({ loading: true, error: null });

    try {
      const quizzes = await getQuizzes();

      set({ quizzes, loading: false });
    } catch (err) {
      set({
        error: err instanceof Error ? err.message : "Failed to load quizzes",
        loading: false,
      });
    }
  },

  currentIndex: 0,
  selectedAnswer: null,
  score: 0,
  startedAt: null,

  setSelectedAnswer: (answer) => set({ selectedAnswer: answer }),
  setCurrentIndex: (index) => set({ currentIndex: index }),
  incrementScore: () => set((state) => ({ score: state.score + 1 })),

  resetQuiz: () =>
    set({
      currentIndex: 0,
      selectedAnswer: null,
      score: 0,
      startedAt: Date.now(),
    }),
}));


export default useQuizStore;