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
  // New state to track selected option for the current question
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    shuffleQuestions();
  }, []);

  useEffect(() => {
    if (onShowResultChange) {
      onShowResultChange(showResult);
    }
  }, [showResult, onShowResultChange]);

  // Modified shuffleQuestions to reset selectedOption
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
    setSelectedOption(null); // Reset selected option
  };

  const handleAnswer = (trait, optionIndex) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = trait; // Update or set answer for current question
    setAnswers(newAnswers);
    setSelectedOption(optionIndex); // Store the selected option index
    if (currentQuestionIndex < shuffledQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      // Clear selected option for the next question
      setSelectedOption(null);
    } else {
      setShowResult(true);
      calculateResult(newAnswers);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      // Restore selected option for the previous question
      const previousAnswer = answers[currentQuestionIndex - 1];
      const previousQuestion = shuffledQuestions[currentQuestionIndex - 1];
      const selectedIndex = previousQuestion.options.findIndex(
        (option) => option.trait === previousAnswer
      );
      setSelectedOption(selectedIndex !== -1 ? selectedIndex : null);
    }
  };

  const handleNext = () => {
    // Check if the current question has an answer
    if (!answers[currentQuestionIndex]) {
      return; // Do nothing if the current question is unanswered
    }

    if (currentQuestionIndex < shuffledQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      // Restore selected option for the next question
      const nextAnswer = answers[currentQuestionIndex + 1];
      const nextQuestion = shuffledQuestions[currentQuestionIndex + 1];
      const selectedIndex = nextQuestion.options.findIndex(
        (option) => option.trait === nextAnswer
      );
      setSelectedOption(selectedIndex !== -1 ? selectedIndex : null);
    } else {
      // Check if all questions have been answered
      if (
        answers.length === shuffledQuestions.length &&
        answers.every((answer) => answer)
      ) {
        setShowResult(true);
        calculateResult(answers);
      }
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
      if (answer) {
        counts[answer] = (counts[answer] || 0) + 1;
      }
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
                    onClick={() => handleAnswer(option.trait, index)}
                    className={`m-2 ${
                      selectedOption === index ? "bg-success text-white" : ""
                    }`} // Highlight selected button
                    style={{
                      backgroundColor:
                        selectedOption === index ? "#28a745" : "",
                      borderColor: selectedOption === index ? "#28a745" : "",
                    }} // Optional: Inline style for better control
                  >
                    {option.text}
                  </Button>
                )
              )}
            </Form>
            <div className="mt-3">
              <Button
                variant="outline-secondary"
                onClick={handlePrevious}
                disabled={currentQuestionIndex === 0}
                className="m-2"
              >
                Quay lại
              </Button>
              <Button
                variant="outline-secondary"
                onClick={handleNext}
                disabled={
                  currentQuestionIndex === shuffledQuestions.length - 1 &&
                  !answers[currentQuestionIndex]
                }
                className="m-2"
              >
                Tiếp theo
              </Button>
            </div>
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
