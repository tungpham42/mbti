import React, { useState, useEffect } from "react";
import Question from "./Question";
import Result from "./Result";
import { Button } from "react-bootstrap";
import questions from "../data/questions"; // Import the questions array

function MBTIForm() {
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [randomizedQuestions, setRandomizedQuestions] = useState([]);

  const handleAnswer = (id, value) => {
    setAnswers((prevAnswers) => ({ ...prevAnswers, [id]: value }));
  };

  const handleSubmit = () => {
    if (Object.keys(answers).length === questions.length) {
      setShowResult(true);
    } else {
      alert("Vui lòng trả lời tất cả câu hỏi!");
    }
  };

  useEffect(() => {
    // Function to shuffle the questions array
    const shuffleArray = (array) => {
      const shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    };

    // Randomize questions when the component mounts
    setRandomizedQuestions(shuffleArray(questions));
  }, []);

  return (
    <>
      {!showResult ? (
        <>
          {randomizedQuestions.map((q, index) => (
            <Question
              key={q.id}
              id={q.id}
              question={`${index + 1}. ${q.question}`} // Show question number
              options={q.options}
              onAnswer={handleAnswer}
            />
          ))}
          <Button onClick={handleSubmit}>Nộp</Button>
        </>
      ) : (
        <Result answers={answers} />
      )}
    </>
  );
}

export default MBTIForm;
