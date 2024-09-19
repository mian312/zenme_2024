'use client';

import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const AboutPage = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqData = [
    {
      question: "What is ZENMe?",
      answer: "ZENMe is a stress detection and management app that uses various inputs, such as user data and self-assessments, to identify stress levels. It offers personalized suggestions to help users manage and reduce stress effectively."
    },
    {
      question: "How does ZENMe detect stress?",
      answer: "ZENMe currently detects stress by analyzing user-provided data like mood tracking and responses to self-assessment tools. We are also planning to incorporate voice analysis and video/image (facial expression) recognition to enhance accuracy in detecting stress levels."
    },
    {
      question: "What kind of suggestions does ZENMe provide?",
      answer: "The app offers a variety of stress management techniques, including mindfulness exercises, breathing techniques, lifestyle changes, and guided relaxation activities based on your specific needs."
    },
    {
      question: "Can I track my stress over time with ZENMe?",
      answer: "Yes! ZENMe offers tools for tracking your stress levels over time. You can view your stress history, patterns, and trends to better understand how different factors affect your mental well-being."
    },
    {
      question: "Does ZENMe provide personalized stress management?",
      answer: "Yes, ZENMe tailors its recommendations based on the data you provide, such as your stress levels, lifestyle, and preferences. This ensures the suggestions are relevant to your individual needs."
    },
    {
      question: "How does ZENMe protect my privacy?",
      answer: "ZENMe takes privacy seriously. Your data is encrypted and stored securely, and we comply with data protection laws to ensure your information remains confidential."
    },
    {
      question: "Do I need any special devices or equipment to use ZENMe?",
      answer: "No, ZENMe does not require any special devices. The app operates through self-assessment tools and manual inputs to detect stress and provide recommendations."
    },
    {
      question: "Is ZENMe free to use?",
      answer: "Currently, ZENMe is free to use with basic features available. A premium version with advanced features like personalized coaching and deeper insights will be available soon."
    },
    {
      question: "How accurate is ZENMe in detecting stress?",
      answer: "ZENMe uses scientifically-backed self-assessment tools and user data to detect stress. The upcoming voice and facial expression recognition features will enhance the accuracy and provide deeper insights."
    },
    {
      question: "Can ZENMe integrate with other apps or services?",
      answer: "ZENMe will not be integrating with any other third-party software or applications. We are focused on providing a complete in-app experience for detecting and managing stress."
    },
    {
      question: "How often should I use ZENMe to see results?",
      answer: "For best results, we recommend using ZENMe daily to track your stress and follow its personalized recommendations. Regular use helps identify stress patterns and manage them effectively."
    },
    {
      question: "Can ZENMe be used for clinical or medical purposes?",
      answer: "ZENMe is designed for stress management and wellness. It is not intended to diagnose or treat medical conditions. If you are experiencing severe stress or mental health issues, please consult a healthcare professional."
    }
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="mb-16 lg:flex lg:items-center lg:space-x-12">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h1 className="text-4xl font-bold text-gray-900 mb-6 animate-fadeIn">Discover Inner Peace with Zenme</h1>
            <p className="text-lg text-gray-700 mb-6 animate-slideInFromLeft">
              ZENMe is an innovative stress detection and management app designed to help users identify and alleviate stress through personalized insights and techniques. Utilizing a combination of user data, mood tracking, and self-assessment tools, ZENMe provides a comprehensive understanding of your stress levels.
            </p>
            <p className="text-lg text-gray-700 animate-slideInFromLeft">
              Whether you are seeking to manage everyday stress or simply looking for a moment of calm, ZENMe is here to support you on your journey to better mental health. Please remember, while ZENMe is a valuable tool for wellness, it is not a substitute for professional medical advice or treatment.
            </p>
          </div>
          <div className="lg:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1518199266791-5375a83190b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="Zenme App"
              className="w-full h-auto rounded-lg shadow-lg animate-fadeIn"
            />
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl text-center font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {faqData.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-4">
                <button
                  className="flex justify-between items-centertext-left w-full"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                  {openFAQ === index ? (
                    <FiChevronUp className="text-gray-500" />
                  ) : (
                    <FiChevronDown className="text-gray-500" />
                  )}
                </button>
                {openFAQ === index && (
                  <p className="mt-2 text-gray-700 animate-slideDown">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
