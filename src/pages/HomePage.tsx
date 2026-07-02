import { BrainCircuit } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

const HomePage = () => {
  return (
    <main className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 text-white">
      <div className="flex flex-col items-center text-center max-w-md">
        <motion.span
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-700 shadow-lg shadow-purple-900/30"
        >
          <BrainCircuit size={30} className="text-purple-100" />
        </motion.span>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.15, ease: "easeOut" }}
          className="text-4xl font-semibold tracking-wide"
        >
          Quiz
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.25, ease: "easeOut" }}
          className="mt-3 text-purple-300 text-base leading-relaxed"
        >
           Explore and share quizzes. Test your knowledge or challenge
          others.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.35, ease: "easeOut" }}
        >
          <Link
            to="/quizzes"
            className="mt-8 flex items-center gap-2 rounded-xl bg-purple-700 px-6 py-3 text-sm font-medium text-purple-100 transition-all hover:bg-purple-600 hover:shadow-lg hover:shadow-purple-900/30"
          >
            Let's start
          </Link>
        </motion.div>
      </div>
    </main>
  );
};

export default HomePage;
