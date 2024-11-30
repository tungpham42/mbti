import React, { useState, useEffect } from "react";
import { Button, Form, Container, Card } from "react-bootstrap";
import questions from "./data/questions";
import mbtiResults from "./data/mbtiResults";

// Function to shuffle the questions array using Fisher-Yates algorithm
const shuffleArray = (array) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const MBTITest = () => {
  const [answers, setAnswers] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [mbtiType, setMbtiType] = useState("");
  const [shuffledQuestions, setShuffledQuestions] = useState([]);

  // Shuffle questions when the component mounts
  useEffect(() => {
    setShuffledQuestions(shuffleArray(questions));
  }, []);

  // Handles the selection of an answer and moves to the next question
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

  // Calculate the MBTI result based on answers
  const calculateResult = (answers) => {
    // Count the frequency of each trait for the four personality dimensions
    const counts = {
      E: 0,
      I: 0, // Extraversion vs. Introversion
      S: 0,
      N: 0, // Sensing vs. Intuition
      T: 0,
      F: 0, // Thinking vs. Feeling
      J: 0,
      P: 0, // Judging vs. Perceiving
    };

    answers.forEach((answer) => {
      counts[answer] = (counts[answer] || 0) + 1;
    });

    // Determine each personality dimension based on counts
    const personalityType = [
      counts.E > counts.I ? "E" : "I", // Extraversion vs. Introversion
      counts.S > counts.N ? "S" : "N", // Sensing vs. Intuition
      counts.T > counts.F ? "T" : "F", // Thinking vs. Feeling
      counts.J > counts.P ? "J" : "P", // Judging vs. Perceiving
    ].join("");

    // Find the result that matches the calculated type
    const result = mbtiResults.find(
      (result) => result.type === personalityType
    );
    setMbtiType(result);
  };

  return (
    <Container className="mt-4">
      {!showResult ? (
        <Card>
          <Card.Body className="text-center">
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
          </Card.Body>
        </Card>
      )}
    </Container>
  );
};

export default MBTITest;
