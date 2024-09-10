'use client';

import { useEffect, useState } from 'react';
import Link from "next/link";
import GaugeChart from 'react-gauge-chart';
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

  // Function to calculate stress percentage
  const calculateStressPercentage = (questions, answers) => {
    let totalScore = 0;
    let maxScore = 0;

    questions.forEach((question, index) => {
      const answer = answers[index];

      // Only calculate the score if the answer is provided
      if (answer) {
        const response = question.response.find(r => r.text === answer);

        if (response) {
          totalScore += response.score;
        }

        maxScore += Math.max(...question.response.map(r => r.score));
      }
    });

    // Prevent division by zero if no questions are answered
    if (maxScore === 0) return 0;

    const percentage = (totalScore / maxScore) * 100;
    return percentage.toFixed(2); // Return percentage as a string with 2 decimal places
  };


  // Check if all questions are unanswered (all mainScore values are null)
  const noAnswers = responses.every(response => response.mainScore === null);

  // Calculate stress percentage if at least one question is answered
  const answers = results.map(result => result.mainResponse);
  const stressPercentage = !noAnswers ? calculateStressPercentage(selectedQuizQuestions, answers) : 0;

  // Store results and stress percentage in session storage
  useEffect(() => {
    sessionStorage.setItem('quizResults', JSON.stringify(results));
    sessionStorage.setItem('stressPercentage', stressPercentage);

    // Store a default suggestion if no questions are answered
    const defaultSuggestion = "What are you feeling right now? Let's talk about it.";
    if (noAnswers) {
      sessionStorage.setItem('suggestion', defaultSuggestion);
    } else if (suggestions) {
      sessionStorage.setItem('suggestion', suggestions);
    }
  }, [results, stressPercentage, noAnswers, suggestions]);

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
      if (!noAnswers) {
        await fetchSummary(); // Fetch summary if there are answers
      }
    };

    getSummaryAndSuggestions();
  }, [noAnswers]);

  // Fetch suggestions when summary is updated
  useEffect(() => {
    if (summary) {
      fetchSuggestions(summary); // Fetch suggestions based on summary
    }
  }, [summary]);

  return (
    <div className="mt-8 p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Your Results</h2>

      {/* If no answers were provided, show custom message */}
      {noAnswers ? (
        <div className="text-center">
          <p className="text-red-500 font-semibold mb-4">
            We cannot provide suggestions based on empty answers. Please talk with our bot for further discussion.
          </p>
          <p className="text-blue-500 font-semibold mb-4">
            Please express your feelings or tell me why you are here!
          </p>
        </div>
      ) : (
        <>
          {/* Stress Gauge Chart */}
          <div className="flex justify-center mb-2">
            <div className="w-72 h-auto">
              <GaugeChart
                id="gauge-chart2"
                nrOfLevels={20}
                percent={stressPercentage / 100} // Convert percentage to decimal
                needleColor="#FF0000"
                textColor="#000000"
                colors={["#00FF00", "#FFFF00", "#FF0000"]}
              />
            </div>
          </div>

          {/* Print User's condition */}
          <div className="mb-4 text-center">
            {stressPercentage <= 25 && <p className="text-green-500 font-semibold">You are doing great! Keep it up!</p>}
            {stressPercentage > 25 && stressPercentage <= 50 && <p className="text-yellow-500 font-semibold">You are doing okay. Take care of yourself!</p>}
            {stressPercentage > 50 && <p className="text-red-500 font-semibold">You might need some help. Please seek professional advice.</p>}
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
        </>
      )}

      {/* Bot Container */}
      <div className="static sm:end bottom-5 flex items-end m-4 justify-end">
        <p className='flex text-2xl font-semibold max-sm:text-base'>Talk with our bot here...</p>
        <Link href='/new-chat' className='flex ml-2'>
          <img
            src="/images/hi-bot.gif"
            alt="Your GIF"
            className="w-16 h-16 rounded-full shadow-lg object-cover"
          />
          <h3 className="text-sm font-semibold text-gray-500">Talk with me</h3>
        </Link>
      </div>
    </div>
  );
};

export default ResultsComponent;
