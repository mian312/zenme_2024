'use client';

import { useState, useEffect } from 'react';


/**
 * Renders a question component with response options.
 *
 * @param {Object} props - The component props.
 * @param {string} props.question - The question to be displayed.
 * @param {Array<Object>} props.responseOptions - The response options for the question.
 * @param {Function} props.onResponse - The callback function to be called when a response is selected.
 * @param {Object} props.initialResponse - The initial response object containing mainScore and frequencyScore.
 * @param {number|null} props.initialResponse.mainScore - The initial main score value.
 * @param {number|null} props.initialResponse.frequencyScore - The initial frequency score value.
 * @returns {JSX.Element} The rendered QuestionComponent.
 */
const QuestionComponent = ({ question, responseOptions, onResponse, initialResponse }) => {
  const [selectedOption, setSelectedOption] = useState(
    initialResponse.mainScore ?? null // Using nullish coalescing to differentiate between 0 and null
  );
  const [frequencyScore, setFrequencyScore] = useState(
    initialResponse.frequencyScore ?? null // Similar logic for frequency score
  );

  // Reset the state when the question or initialResponse changes
  useEffect(() => {
    setSelectedOption(initialResponse.mainScore ?? null);
    setFrequencyScore(initialResponse.frequencyScore ?? null);
  }, [question, initialResponse]);

  // Notify parent of the current response
  useEffect(() => {
    onResponse({
      mainScore: selectedOption,
      frequencyScore: frequencyScore ?? 0, // Ensure we send 0 if no frequency score is selected
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedOption, frequencyScore]);

  /**
   * Handles the change of the selected option.
   *
   * @param {Object} option - The selected option object.
   * @param {number} option.score - The score of the selected option.
   */
  const handleOptionChange = (option) => {
    setSelectedOption(option.score);
    setFrequencyScore(null);
    onResponse({ mainScore: option.score, frequencyScore: null });
  };

  return (
    <div className="mb-6 p-4 bg-white rounded-lg shadow-md">
      <h3 className="text-lg font-medium mb-2">{question}</h3>
      <div className="space-y-2">
        {responseOptions.map((option, idx) => (
          <label key={idx} className="block">
            <input
              type="radio"
              name={question}
              value={option.text}
              checked={selectedOption === option?.score}
              onChange={() => handleOptionChange(option)}
              className="mr-2"
            />
            {option.text}
          </label>
        ))}
      </div>
    </div>
  );
};

export default QuestionComponent;
