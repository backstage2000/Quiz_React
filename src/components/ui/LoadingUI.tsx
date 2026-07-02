import { Spinner } from "flowbite-react";

const LoadingUI = () => (
  <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-purple-900/40 bg-purple-950/40 py-20">
    <Spinner color="purple" size="xl" aria-label="Loading quizzes" />
    <p className="text-sm text-purple-300">Loading quizzes...</p>
  </div>
);

export default LoadingUI;
