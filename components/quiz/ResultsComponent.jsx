'use client';

import { useEffect, useState } from 'react';
import Link from "next/link";
import questionBank from '@/utils/questionBank'; // Import the question bank

/**
 * Renders the results of the quiz based on the user's responses.
 * Calls the API to generate a summary and displays the results.
 * @param {Object[]} responses - The array of user's responses.
 * @param {string} quiz - The quiz type (e.g., 'depressionQuestions').
 * @returns {JSX.Element} - The JSX element representing the results component.
 */
const ResultsComponent = ({ responses, quiz }) => {
  const [summary, setSummary] = useState(null); // Store API summary
  const [suggestions, setSuggestions] = useState(null); // Store API suggestions
  const [loading, setLoading] = useState(false); // Loading state for API
  const [error, setError] = useState(null); // Error state
  const totalScore = responses.reduce((acc, response) => acc + response.mainScore, 0); // Calculate total score

  // Get the selected quiz questions from the questionBank using the quiz type string
  const selectedQuizQuestions = questionBank[quiz];

  // Extract questions and answers from responses
  const results = responses.map((response, index) => {
    const question = selectedQuizQuestions[index].question;
    const mainResponse = selectedQuizQuestions[index].response.find(
      (option) => option.score === response.mainScore
    )?.text;

    let frequencyResponse = null;
    if (response.frequencyScore) {
      frequencyResponse = selectedQuizQuestions[index].response.find(
        (option) => option.score === response.frequencyScore
      )?.text;
    }

    return {
      question,
      mainResponse,
      frequencyResponse,
    };
  });

  // Store results in session storage
  useEffect(() => {
    sessionStorage.setItem('quizResults', JSON.stringify(results));
  }, [results]);

  // Fetch Summary
  const fetchSummary = async () => {
    setLoading(true); // Start loading
    setError(null); // Reset any previous errors
    try {
      const response = await fetch('/api/llm/summary', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ results }), // Send results to the API
      });

      if (!response.ok) {
        throw new Error('Failed to fetch summary');
      }

      const data = await response.json();
      setSummary(data.content); // Set the summary returned by the API
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  // Fetch Suggestions based on Summary
  const fetchSuggestions = async (summaryContent) => {
    setLoading(true); // Start loading
    setError(null); // Reset any previous errors
    try {
      const response = await fetch('/api/llm/suggestion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ summary: summaryContent }), // Send summary to the API
      });

      if (!response.ok) {
        throw new Error('Failed to fetch suggestions');
      }

      const data = await response.json();
      setSuggestions(data.content); // Set the suggestions returned by the API
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  // Use Effect to handle fetching summary and suggestions
  useEffect(() => {
    const getSummaryAndSuggestions = async () => {
      await fetchSummary(); // Fetch summary first
    };

    getSummaryAndSuggestions();
  }, []);

  // Fetch suggestions when summary is updated
  useEffect(() => {
    if (summary) {
      fetchSuggestions(summary); // Fetch suggestions based on summary
    }
  }, [summary]);

  // Store suggestions in session storage
  useEffect(() => {
    sessionStorage.setItem('suggestion', suggestions);
  }, [suggestions]);

  return (
    <div className="mt-8 p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Your Results</h2>
      {/* Print User's condition */}
      <div className="mb-4">
      {totalScore <= 10 && <p className="text-green-500 font-semibold">You are doing great! Keep it up!</p>}
      {totalScore > 10 && totalScore <= 20 && <p className="text-yellow-500 font-semibold">You are doing okay. Take care of yourself!</p>}
      {totalScore > 20 && <p className="text-red-500 font-semibold">You might need some help. Please seek professional advice.</p>}
      </div>
      

      {/* Loading, Error, and Summary States */}
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}

      {suggestions && (
        <div className="mt-8 p-4 bg-blue-100 rounded">
          <h3 className="text-lg font-semibold">Suggestions</h3>
          <p>{suggestions}</p>
        </div>
      )}

      {/* Bot Container */}
      {suggestions && <div className="static sm:end bottom-5 flex items-end m-4 justify-end">
        <p className='flex text-2xl font-semibold max-sm:text-base'>Talk with our bot here...</p>
        <Link href='/new-chat' className='flex ml-2'>
          <img
            src="/images/hi-bot.gif"
            alt="Your GIF"
            className="w-16 h-16 rounded-full shadow-lg object-cover"
          />
          <h3 className="text-sm font-semibold text-gray-500">Let's talk</h3>
        </Link>
      </div>}

    </div>
  );
};

export default ResultsComponent;
