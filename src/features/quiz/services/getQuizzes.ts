import type { Quiz } from "@features/quiz/types";
import { createQuizzesFromQuestions } from "@utils";
import getQuestions from "./getQuestions";
import { mapApiQuestion } from "@utils";

async function getQuizzes(): Promise<Quiz[]> {
  const rawQuestions = await getQuestions(100);

  const questions = rawQuestions.map(mapApiQuestion);

  const quizzes = createQuizzesFromQuestions(questions, 10);

  return quizzes;
}

export default getQuizzes;
