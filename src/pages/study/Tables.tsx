/* eslint-disable prefer-const */
import React, { useEffect, useState } from "react";
import { Answer, JsonError, Table } from "../../types";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getTables } from "../../api/tables";
import { setTables, setTableScore } from "../../features/tableSlice";

type Props = {
  title?: string;
};
const Tables = ({ title = "Table" }: Props) => {
  const dispatch = useAppDispatch();
  const { url } = useAppSelector((state) => state.app);
  const { tables, tableScore } = useAppSelector((state) => state.table);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<Table>({
    alias: "",
    name: "",
  });
  const [showAnswer, setShowAnswer] = useState<boolean>(false);

  useEffect(() => {
    getTables(url)
      .then((resp) => {
        const j = resp.data;
        if (j.error === 0) {
          dispatch(setTables(j.tables));
        }
      })
      .catch((err: JsonError) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    if (tables.length > 0) {
      const randomAnswers = getRandomAnswers(tables);
      setAnswers(randomAnswers);
    }
  }, [tables]);

  // get random field
  const getQuestion = (arr: Answer[]): Table => {
    const randomIdx = Math.floor(Math.random() * arr.length);
    return arr[randomIdx].answer;
  };

  // get random answers (4)
  const getRandomAnswers = (arr: Table[]): Answer[] => {
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
    const newAnswers = getRandomAnswers(tables);
    setAnswers(newAnswers);
  };

  const showCorrectAnswer = (
    e: React.MouseEvent<HTMLDivElement>,
    answer: Answer
  ) => {
    if (answer.answer.name === currentQuestion.name) {
      dispatch(setTableScore(tableScore + 1));
      e.currentTarget.classList.add("bg-emerald-500");
    } else {
      e.currentTarget.classList.add("bg-orange-500");
    }
    setShowAnswer(true);
  };

  return (
    <div className="flex flex-col items-center justify-center h-full w-full ">
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="flex justify-between gap-8 w-1/2 px-1 mb-4">
          <h1 className="text-2xl font-bold text-white">{title}</h1>
          <h1 className="text-2xl font-bold text-white">
            Score: {tableScore}
          </h1>
        </div>
        <div className="bg-slate-50 rounded-lg shadow-lg p-4 w-1/2">
          <div className="mb-4 font-semibold border-b border-b-black text-center">
            Table: {currentQuestion ? currentQuestion.name : "Loading..."}
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
                <p className="font-medium">{answer.letter}</p>
                <p>{answer.answer.alias}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center mt-4 gap-4">
            <button className="btn-themeBlue px-10" onClick={nextQuestion}>
              Next Table
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tables;
