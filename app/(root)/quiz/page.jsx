'use client';

import { useState } from 'react';
import QuizComponent from '@/components/quiz/QuizComponent';

const quizTypes = [
  { label: 'Depression', value: 'depressionQuestions' },
  { label: 'Anxiety', value: 'anxietyQuestions' },
  { label: 'PTSD', value: 'ptsdQuestions' },
  { label: 'Schizophrenia', value: 'schQuestions' },
  { label: 'Addiction', value: 'addictionQuestions' },
  { label: 'Other', value: 'otherQuestions' },
];

const QuizPage = () => {
  const [selectedQuiz, setSelectedQuiz] = useState(null);

  const handleQuizChange = (e) => {
    setSelectedQuiz(e.target.value);
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-100">
      {selectedQuiz ? (
        <div className="mb-6 p-4 bg-white rounded-lg shadow-md">
          About your <strong>{selectedQuiz.label}</strong> problem.
        </div>
      ) : (
        <div className="space-y-4">
          <h1 className="text-2xl text-center font-bold mb-6">Tell us why you are exactly here</h1>
          <div className="grid grid-cols-2 gap-4">
            {quizTypes.map((quiz) => (
              <button
                key={quiz.value}
                className="px-4 py-2 bg-sky-500 text-white rounded hover:bg-sky-700"
                onClick={() => setSelectedQuiz(quiz)}
              >
                <label key={quiz.value} className="flex items-center">
                  <input
                    type="radio"
                    name="quiz"
                    value={quiz.value}
                    onChange={handleQuizChange}
                  />
                  <span className="ml-2">{quiz.label}</span>
                </label>
              </button>
            ))}
          </div>
        </div>
      )}

      {selectedQuiz && <QuizComponent selectedQuiz={selectedQuiz.value} />}
    </div>
  );
}

export default QuizPage;