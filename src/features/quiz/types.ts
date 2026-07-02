export type Quiz = {
  id: string;
  title: string;
  questions: Question[];
};

export type OTDBApiQuestion = {
  category: string;
  type: "multiple" | "boolean";
  difficulty: "easy" | "medium" | "hard";
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};
export type OTDBResponse = {
  response_code: number;
  results: OTDBApiQuestion[];
};

export type Question = {
  id: string;
  type: "multiple" | "boolean";
  difficulty: "easy" | "medium" | "hard";
  category: string;
  question: string;
  correctAnswer: string;
  incorrectAnswers: string[];
};
