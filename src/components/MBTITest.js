import React, { useState, useEffect } from "react";
import { Button, Form, Container, Card } from "react-bootstrap";
import questions from "../data/questions";
import mbtiResults from "../data/mbtiResults";
import types from "../data/types";
import mbtiCognitiveFunctions from "../data/mbtiCognitiveFunctions";
import mbtiCognitiveFunctionsDetails from "../data/mbtiCognitiveFunctionsDetails";

// Function to shuffle an array using Fisher-Yates algorithm
const shuffleArray = (array) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const MBTITest = ({ onShowResultChange }) => {
  const [answers, setAnswers] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [mbtiType, setMbtiType] = useState("");
  const [typeDescription, setTypeDescription] = useState("");
  const [cognitiveFunctions, setCognitiveFunctions] = useState({});
  const [shuffledQuestions, setShuffledQuestions] = useState([]);

  useEffect(() => {
    shuffleQuestions();
  }, []);

  useEffect(() => {
    if (onShowResultChange) {
      onShowResultChange(showResult);
    }
  }, [showResult, onShowResultChange]);

  const shuffleQuestions = () => {
    const shuffled = shuffleArray(questions);
    const shuffledWithOptions = shuffled.map((question) => ({
      ...question,
      options: shuffleArray(question.options),
    }));
    setShuffledQuestions(shuffledWithOptions);
    setAnswers([]);
    setCurrentQuestionIndex(0);
    setShowResult(false);
  };

  const handleAnswer = (trait) => {
    const newAnswers = [...answers, trait];
    setAnswers(newAnswers);
    if (currentQuestionIndex < shuffledQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResult(true);
      calculateResult(newAnswers);
    }
  };

  const calculateResult = (answers) => {
    const counts = {
      E: 0,
      I: 0,
      S: 0,
      N: 0,
      T: 0,
      F: 0,
      J: 0,
      P: 0,
    };

    answers.forEach((answer) => {
      counts[answer] = (counts[answer] || 0) + 1;
    });

    const personalityType = [
      counts.E > counts.I ? "E" : "I",
      counts.S > counts.N ? "S" : "N",
      counts.T > counts.F ? "T" : "F",
      counts.J > counts.P ? "J" : "P",
    ].join("");

    const result = mbtiResults.find(
      (result) => result.type === personalityType
    );

    const typeDesc = personalityType
      .split("")
      .map((trait) => types.find((t) => t.type === trait)?.description)
      .join("\n");

    // Add cognitive functions to the result
    const functions = mbtiCognitiveFunctions[personalityType];

    const cognitiveDetails = {
      "Chức năng nhận thức chính": functions
        ? mbtiCognitiveFunctionsDetails.find(
            (f) => f.type === functions.Primary
          )
        : null,
      "Chức năng nhận thức phụ": functions
        ? mbtiCognitiveFunctionsDetails.find(
            (f) => f.type === functions.Auxiliary
          )
        : null,
      "Chức năng nhận thức thứ ba": functions
        ? mbtiCognitiveFunctionsDetails.find(
            (f) => f.type === functions.Tertiary
          )
        : null,
      "Chức năng nhận thức kém": functions
        ? mbtiCognitiveFunctionsDetails.find(
            (f) => f.type === functions.Inferior
          )
        : null,
    };

    setMbtiType(result);
    setTypeDescription(typeDesc);
    setCognitiveFunctions(cognitiveDetails);
  };

  return (
    <Container className="mt-4">
      {!showResult ? (
        <Card>
          <Card.Body className="text-center">
            <p className="text-muted mb-2">
              Câu hỏi {currentQuestionIndex + 1} / {shuffledQuestions.length}
            </p>
            <h3>{shuffledQuestions[currentQuestionIndex]?.question}</h3>
            <Form>
              {shuffledQuestions[currentQuestionIndex]?.options.map(
                (option, index) => (
                  <Button
                    key={index}
                    variant="primary"
                    onClick={() => handleAnswer(option.trait)}
                    className="m-2"
                  >
                    {option.text}
                  </Button>
                )
              )}
            </Form>
          </Card.Body>
        </Card>
      ) : (
        <Card>
          <Card.Body>
            <h3>{mbtiType.type}</h3>
            <p>
              <strong>{mbtiType.shortTerm}</strong>
            </p>
            <p>{mbtiType.description}</p>
            <p>
              <strong>Tính cách:</strong> {mbtiType.trait}
            </p>
            <p>
              <strong>Điểm mạnh:</strong> {mbtiType.pros}
            </p>
            <p>
              <strong>Điểm yếu:</strong> {mbtiType.cons}
            </p>
            <hr />
            <p>
              <strong>Mô tả chi tiết:</strong>
            </p>
            <ul>
              {typeDescription.split("\n").map((line, index) => (
                <li key={index}>{line}</li>
              ))}
            </ul>
            <hr />
            <h4>Chức năng nhận thức:</h4>
            <ul>
              {Object.entries(cognitiveFunctions).map(
                ([key, functionDetail], index) =>
                  functionDetail && (
                    <li key={index}>
                      <strong>{key}:</strong>{" "}
                      <em>
                        {functionDetail.type} - {functionDetail.short}
                      </em>
                      <br />
                      <strong>Mô tả:</strong> {functionDetail.description}
                      <br />
                      <strong>Đặc điểm chung:</strong>{" "}
                      {functionDetail.character}
                    </li>
                  )
              )}
            </ul>
          </Card.Body>
        </Card>
      )}

      <div className="text-center mt-4">
        <Button variant="secondary" onClick={shuffleQuestions}>
          Làm lại
        </Button>
      </div>
    </Container>
  );
};

export default MBTITest;
