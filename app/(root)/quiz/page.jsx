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
    <section
      className={`text-gray-600 h-full body-font ${selectedQuiz ? 'bg-cover' : ''} overflow-hidden`}
      style={{
        backgroundImage: selectedQuiz
          ? "url('/images/quiz/question.png')" // Background image after selecting a quiz
          : "none", // No background image before selecting a quiz
      }}
    >
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center justify-center"> {/* Modified: Added justify-center class */}
        {/* Image before selecting quiz */}
        {!selectedQuiz && (
          <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <img alt="feature" className="object-cover object-center" src="/images/quiz/select.png" />
          </div>
        )}

        {/* Quiz Options Section */}
        <div className="flex flex-wrap lg:py-6 lg:w-1/2 lg:pl-12 text-left">
          {!selectedQuiz ? (
            <>
              <div className="mb-10 lg:items-start items-center">
                <div className="flex-grow">
                  <h1 className="text-gray-900 text-lg title-font font-medium mb-3">Tell us why you are exactly here</h1>
                  <p className="leading-relaxed text-base">Please select the type of problem you would like to talk about.</p>

                  {/* Quiz Type Buttons */}
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    {quizTypes.map((quiz) => (
                      <button
                        key={quiz.value}
                        className="px-4 py-2 bg-sky-500 text-white rounded hover:bg-sky-700"
                        onClick={() => setSelectedQuiz(quiz)}
                      >
                        {quiz.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="bg-white shadow-lg rounded-lg p-8 mx-auto">
              <div className="flex-grow">
                <p className="leading-relaxed text-base text-center font-serif">Answer the following questions to help us understand your condition better.</p>
              </div>
              {/* Render QuizComponent */}
              <QuizComponent selectedQuiz={selectedQuiz.value} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default QuizPage;
