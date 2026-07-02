import type { OTDBApiQuestion, Question } from "@features/quiz/types";
import { v4 as uuid } from "uuid";

function decode(text: string): string {
  try {
    return decodeURIComponent(text);
  } catch {
    return text;
  }
}

function mapApiQuestion(q: OTDBApiQuestion): Question {
  return {
    id: uuid(),
    type: q.type,
    difficulty: q.difficulty,
    category: decode(q.category),
    question: decode(q.question),
    correctAnswer: decode(q.correct_answer),
    incorrectAnswers: q.incorrect_answers.map(decode),
  };
}

export default mapApiQuestion;
