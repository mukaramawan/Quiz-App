import React, {
  PropsWithChildren,
  useState,
  createContext,
  useContext,
  useEffect,
} from "react";
import questions from "../assets/questions";
import { question } from "../assets/Types";

type quizContext = {
  question?: question;
  questionIndex: number;
  onNext: () => void;
  selectedOption?: string;
  setSelectedOption: (option: string) => void;
  score: number;
  totalQuestions: number;
  bestScore: number;
};

const quizContext = createContext<quizContext>({
  questionIndex: 0,
  onNext: () => {},
  setSelectedOption: () => {},
  score: 0,
  totalQuestions: 0,
  bestScore: 0,
});

export default function QuizProvider({ children }: PropsWithChildren) {
  const [questionIndex, setQuestionIndex] = useState(0);
  const question = questions[questionIndex];

  const [selectedOption, setSelectedOption] = useState<string>();
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const isFinish = questionIndex >= questions.length;

  useEffect(() => {
    if (isFinish && score > bestScore) {
      setBestScore(score);
    }
  }, [isFinish]);

  const reStart = () => {
    setQuestionIndex(0);
    setSelectedOption("");
    setScore(0);
  };

  function onNext() {
    if (isFinish) {
      reStart();
      return;
    }

    if (selectedOption == question?.correctAnswer) {
      setScore((score) => score + 1);
    }
    setQuestionIndex((currentIndex) => currentIndex + 1);
  }

  return (
    <quizContext.Provider
      value={{
        question,
        questionIndex,
        onNext,
        selectedOption,
        setSelectedOption,
        score,
        totalQuestions: questions.length,
        bestScore,
      }}
    >
      {children}
    </quizContext.Provider>
  );
}

export const useQuizContext = () => {
  return useContext(quizContext);
};
