import { Link } from "react-router-dom";
import { Play, ListChecks } from "lucide-react";
import type { Quiz } from "@features/quiz/types";

type Props = {
  quiz: Quiz;
};

const iconColors = [
  "bg-purple-800 text-purple-100",
  "bg-fuchsia-900 text-fuchsia-200",
  "bg-violet-900 text-violet-200",
  "bg-indigo-900 text-indigo-200",
];

export default function QuizCard({ quiz }: Props) {
  const color = iconColors[Number(quiz.id.split("-")[1]) % iconColors.length];

  return (
    <article className="rounded-3xl border border-purple-900/40 bg-purple-950/70 p-5 shadow-lg backdrop-blur">
      <div className="mb-6 flex items-center gap-4">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-2xl ${color}`}
        >
          <ListChecks size={20} />
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white">{quiz.title}</h2>

          <p className="text-sm text-purple-300">
            {quiz.questions.length} questions
          </p>
        </div>
      </div>

      <Link
        to={`/quizzes/${quiz.id}`}
        className="flex items-center justify-center gap-2 rounded-xl bg-purple-600 px-4 py-3 font-medium text-white transition hover:bg-purple-500"
      >
        <Play size={18} />
        Play
      </Link>
    </article>
  );
}
