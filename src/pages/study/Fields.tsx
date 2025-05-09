import { useAppDispatch, useAppSelector } from "../../hooks";
import { setFields } from "../../features/fieldSlice";
import React, { useEffect, useState } from "react";
import { getFields } from "../../api/fields";
import { Field, JsonError, Answer } from "../../types";

type Props = {
  title?: string;
};
const Fields = ({ title = "Fields" }: Props) => {
  const { url } = useAppSelector((state) => state.app);
  const { fields } = useAppSelector((state) => state.field);
  const dispatch = useAppDispatch();
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<Field>({
    alias: "",
    name: "",
  });
  const [showAnswer, setShowAnswer] = useState<boolean>(false);

  useEffect(() => {
    getFields(url)
      .then((resp) => {
        const j = resp.data;
        if (j.error === 0) {
          dispatch(setFields(j.distinct));
        }
      })
      .catch((err: JsonError) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    if (fields.length > 0) {
      const randomAnswers = getRandomAnswers(fields);
      setAnswers(randomAnswers);
    }
  }, [fields]);

  // get random field
  const getQuestion = (arr: Answer[]): Field => {
    const randomIdx = Math.floor(Math.random() * arr.length);
    return arr[randomIdx].answer;
  };

  // get random answers (4)
  const getRandomAnswers = (arr: Field[]): Answer[] => {
    let newAnswers: Answer[] = [];

    for (let i = 0; i < 4; i++) {
      const idx = Math.floor(Math.random() * arr.length);
      newAnswers.push({
        letter: String.fromCharCode(65 + i),
        answer: arr[idx],
      });
    }
    setCurrentQuestion(getQuestion(newAnswers));
    return newAnswers;
  };

  const nextQuestion = () => {
    setShowAnswer(false);
    const newAnswers = getRandomAnswers(fields);
    setAnswers(newAnswers);
  };

  const showCorrectAnswer = (
    e: React.MouseEvent<HTMLDivElement>,
    answer: Answer
  ) => {
    if (answer.answer.name === currentQuestion.name) {
      e.currentTarget.classList.add("bg-emerald-500");
    } else {
      e.currentTarget.classList.add("bg-orange-500");
    }
    setShowAnswer(true);
  };

  return (
    <div className="flex flex-col items-center justify-center h-full w-full ">
      <div className="w-full h-full flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-white mb-8">{title}</h1>
        <div className="bg-slate-50 rounded-lg shadow-lg p-4 w-1/2">
          <div className="mb-4 font-semibold border-b border-b-black text-center">
            Field: {currentQuestion ? currentQuestion.name : "Loading..."}
          </div>
          <div className="grid grid-cols-2 gap-4">
            {answers.map((answer, i) => (
              <div
                key={`answer_${i}`}
                className={`flex flex-col items-center rounded-lg shadow-md py-1 hover:shadow-xl cursor-pointer transition-all duration-200 ${
                  showAnswer && currentQuestion.alias === answer.answer.alias
                    ? "bg-emerald-500"
                    : "bg-white"
                }`}
                onClick={(e) => showCorrectAnswer(e, answer)}
              >
                <p className="underline">{answer.letter}</p>
                <p>{answer.answer.alias}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center mt-4 gap-4">
            <button className="btn-themeBlue px-10" onClick={nextQuestion}>
              Next Field
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fields;
