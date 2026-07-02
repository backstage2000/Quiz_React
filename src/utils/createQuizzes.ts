import type { Question, Quiz } from "@features/quiz/types";
import { chunkArray } from "./chunkArray";

function createQuizzesFromQuestions(
  questions: Question[],
  quizSize = 10,
): Quiz[] {
  const chunks = chunkArray(questions, quizSize);

  return chunks.map((chunk, index) => ({
    id: `quiz-${index + 1}`,
    title: `Quiz ${index + 1}`,
    questions: chunk,
  }));
}

export default createQuizzesFromQuestions;
