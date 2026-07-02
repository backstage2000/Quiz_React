import { useEffect, useState } from "react";

import type { Quiz } from "../types";
import { getQuizzes } from "../services";

function useQuizzes() {
  const [data, setData] = useState<Quiz[]>([]);

  useEffect(() => {
    async function load() {
      const quizzes = await getQuizzes();
      setData(quizzes);
    }

    load();
  }, []);

  return { data };
}

export default useQuizzes;
