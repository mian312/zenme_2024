'use client';

import { useState } from 'react';
import questionBank from '@/utils/questionBank';
import QuestionComponent from './QuestionComponent';
import ResultsComponent from './ResultsComponent';

/**
 * Quiz Component
 * @param {Object} selectedQuiz - The selected quiz object
 * @returns {JSX.Element} - The Quiz Component
 */
const QuizComponent = ({ selectedQuiz }) => {
  const questions = questionBank[selectedQuiz];

  // Initialize responses to null (unanswered state)
  const [responses, setResponses] = useState(
    new Array(questions.length).fill({ mainScore: null })
  );

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResults, setShowResults] = useState(false);

  /**
   * Handle the response for a question
   * @param {number} index - The index of the question
   * @param {Object} response - The response object
   */
  const handleResponse = (index, response) => {
    const newResponses = [...responses];
    newResponses[index] = response; // Update only the current question's response
    setResponses(newResponses);
  };

  /**
   * Handle the next question
   */
  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true); // Show results when finished
    }
  };

  /**
   * Handle going back to the previous question
   */
  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  return (
    <div className="mt-8 w-2/3">

      {!showResults ? (
        <>
          <h2 className="text-xl font-semibold mb-4">Answer the Questions</h2>
          <QuestionComponent
            question={questions[currentQuestion].question}
            responseOptions={questions[currentQuestion].response}
            onResponse={(response) => handleResponse(currentQuestion, response)}
            initialResponse={responses[currentQuestion]} // Pass the initial response for the current question
          />

          <div className="mt-4 flex justify-between">
            <button
              onClick={handleBack}
              className={`px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700 ${currentQuestion === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={currentQuestion === 0}
            >
              Back
            </button>
            <button
              onClick={handleNext}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
            >
              {currentQuestion < questions.length - 1 ? 'Next' : 'Submit'}
            </button>
          </div>
        </>
      ) : (
        <ResultsComponent responses={responses} quiz={selectedQuiz} />
      )}
    </div>
  );
};

export default QuizComponent;
