import { useQuizStore } from "@store";
import { BrainCircuit, LayoutGrid, Smile } from "lucide-react";
import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const showLucky = pathname === "/quizzes";

  const { fetchQuizzes, quizzes } = useQuizStore();

  useEffect(() => {
    if (quizzes.length === 0) {
      fetchQuizzes();
    }
  }, [quizzes.length, fetchQuizzes]);

  const handleLucky = () => {
    if (quizzes.length === 0) return;

    const randomIndex = Math.floor(Math.random() * quizzes.length);
    navigate(`/quizzes/quiz-${randomIndex + 1}`);
  };

  const linkBase =
    "flex items-center gap-2 rounded-xl px-4 py-2 text-sm transition-all";

  const active = "bg-purple-800 text-white shadow-md";
  const inactive = "text-purple-200 hover:bg-purple-900/60 hover:text-white";

  return (
    <header className="sticky top-0 z-50 h-16 border-b border-purple-900/40 bg-purple-950/95 backdrop-blur">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-700 shadow-lg shadow-purple-900/30">
            <BrainCircuit size={18} className="text-purple-100" />
          </span>

          <div className="hidden sm:block">
            <h1 className="text-[17px] font-semibold text-white">Quiz</h1>
            <p className="text-xs text-purple-300">Quiz dashboard</p>
          </div>
        </Link>

        <nav className="flex items-center gap-2">
          <Link
            to="/"
            className={`${linkBase} ${pathname === "/" ? active : inactive}`}
          >
            HOME
          </Link>

          <Link
            to="/quizzes"
            className={`${linkBase} ${
              pathname === "/quizzes" ? active : inactive
            }`}
          >
            <LayoutGrid size={16} />
            <span>Quizzes</span>
          </Link>
        </nav>

        <div className="flex w-[120px] justify-end">
          <button
            type="button"
            onClick={handleLucky}
            disabled={quizzes.length === 0}
            className={`flex items-center gap-2 rounded-xl bg-purple-700 px-4 py-2 text-sm font-medium text-purple-100 transition-all hover:bg-purple-600 hover:shadow-lg hover:shadow-purple-900/30
              ${showLucky ? "opacity-100" : "pointer-events-none opacity-0"}
              ${quizzes.length === 0 ? "cursor-not-allowed opacity-50" : ""}
            `}
          >
            <Smile size={16} />
            <span>I'm lucky</span>
          </button>
        </div>
      </div>
    </header>
  );
}
