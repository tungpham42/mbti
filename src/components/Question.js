import React from "react";
import { Form } from "react-bootstrap";
import "./Question.css";

function Question({ question, options, onAnswer, id }) {
  const handleChange = (e) => {
    const selectedOption = options.find(
      (option) => option.text === e.target.value
    );
    onAnswer(id, selectedOption.trait); // Pass the trait value instead of the text
  };

  return (
    <div className="mb-4">
      <h5>{question}</h5>
      <Form>
        {options.map((option, index) => {
          const optionId = `option-${id}-${index}`; // Unique id for each option
          return (
            <Form.Check
              className="radio-pointer"
              type="radio"
              label={option.text} // Use option.text to display the label
              name={`question-${id}`}
              value={option.text} // Use option.text as the value
              key={index}
              id={optionId} // Assign unique id to each Form.Check
              onChange={handleChange}
            />
          );
        })}
      </Form>
    </div>
  );
}

export default Question;
