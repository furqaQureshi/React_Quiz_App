import React, { useState, useRef } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Quiz() {
  const [showResults, setShowResults] = useState(false);
  const [current, setcurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [question, setQuestion] = useState([]);
  const [selected, setSelected] = useState(false);

  function shuffle(arr) {
    return arr.sort(() => Math.random() - 0.5);
  }

  const optionClicked = (option) => {
    setSelected(true);
    setIsClicked(option.id);
    setAnswers([
      ...answers,
      {
        id: option.id,
        isCorrect: option.isCorrect,
      },
    ]);
    if (option.isCorrect) {
      setScore(score + 1);
    }
  };

  useEffect(() => {
    let arr = [
      {
        id: 1,
        number: "Question 1/4",
        question: "What is a Capital of France",
        option: shuffle([
          {
            id: 1,
            questionId: 1,
            text: "New york",
            isCorrect: false,
          },
          {
            id: 2,
            questionId: 1,
            text: "London",
            isCorrect: false,
          },
          {
            id: 3,
            text: "Paris",
            isCorrect: true,
          },
          {
            id: 4,
            text: "Dublin",
            isCorrect: false,
          },
        ])
      },
      {
        id: 2,
        number: "Question 2/4",
        question: "What is a CEO Tesla",
        option: shuffle([
          { id: 5, text: "Elon Musk", isCorrect: true },
          { id: 6, text: "Bill Gates", isCorrect: false },
          { id: 7, text: "jeffy Bezors", isCorrect: false },
          { id: 8, text: "Tony stark", isCorrect: false },
        ]),
      },
      {
        id: 3,
        number: "Question 3/4",
        question: "The iPhone was created by which company",
        option: shuffle([
          { id: 9, text: "Apple", isCorrect: true },
          { id: 10, text: "Intel", isCorrect: false },
          { id: 11, text: "Amazone", isCorrect: false },
          { id: 12, text: "MicroSoft", isCorrect: false },
        ]),
      },
      {
        id: 4,
        number: "Question 4/4",
        question: "How Many Harry Porty books are there",
        option: shuffle([
          { id: 13, text: "1", isCorrect: false },
          { id: 14, text: "4", isCorrect: false },
          { id: 15, text: "6", isCorrect: false },
          { id: 16, text: "7", isCorrect: true },
        ]),
      },
    ];
    let newArr = shuffle(arr);
    setQuestion(newArr);
  }, []);

  const next = () => {
    setIsClicked(false);
    if (selected) {
      setSelected(false);
    } else {
      setAnswers([
        ...answers,
        {
          id: undefined,
          isCorrect: undefined,
        },
      ]);
    }
    if (current + 1 < question.length) {
      setcurrent(current + 1);
    } else {
      setShowResults(true);
    }
  };
  return (
    <div>
      <div className="container">
        <div className="Quiz_Box">
          {showResults ? (
            <div className="quiz-number">
              <h1 className="text-center"> Quiz Result</h1>
              <div>
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <td>Total Question</td>
                      <td>
                        <span className="total-question">
                          {question.length}
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>Attempt</td>
                      <td>
                        <span className="total-attempt">{score}</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Correct</td>
                      <td>
                        <span className="total-correct">{score}</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Wrong</td>
                      <td>
                        <span className="total-wrong">
                          {question.length - score}
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>Percentage</td>
                      <td>
                        <span className="percentage">
                          {(score / question.length) * 100}.00%
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>Your Total Score</td>
                      <td>
                        <span className="total-score">
                          {score} / {question.length}
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="container text-center">
                  <Link to="/" className="btn mt-2 mx-2">
                    Try Again
                  </Link>
                  <Link to="/" className="btn mt-2 mx-3">
                    Go To Home
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <>
              <div className="quiz-text">
                <h5>
                  Question: {current + 1} / {question.length}
                </h5>
              </div>
              <hr />
              <h3 className="lead">Q.{question[current]?.question}</h3>
              <div className="option">
                {question[current] && 
                  (question[current].option).map((options, i) => {
                    return (
                      <>
                        <div key={i}>
                          <div className="option-left mt-2">
                            <div>
                              {" "}
                              <p
                                className={
                                  isClicked == options.id
                                    ? options.isCorrect
                                      ? "correct"
                                      : "incorrect"
                                    : ""
                                }
                                style={{
                                  backgroundColor:
                                    isClicked && options.isCorrect && "green",
                                  color:
                                    isClicked && options.isCorrect && "white",
                                }}
                                onClick={() =>
                                  !isClicked && optionClicked(options)
                                }
                              >
                                {options.text}
                              </p>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })}
                <button type="button" className="btn" onClick={next}>
                  Next
                </button>
                <hr />
                <div className="box-error">
                  <div className="box">
                    {question.map((q, i) => {
                      return (
                        <>
                          <div
                            key={i}
                            style={{
                              backgroundColor:
                                answers[i] === undefined
                                  ? "gray"
                                  : answers[i]?.isCorrect
                                  ? "green"
                                  : "red",
                            }}
                            className={
                              answers[i] === undefined
                                ? "gray"
                                : answers[i]?.isCorrect
                                ? "correct-images"
                                : "incorrect-images"
                            }
                          ></div>
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Quiz;
