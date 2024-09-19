'use client';

import React, { useState } from "react";
import { FiAlertCircle, FiCheck, FiMail, FiUser } from "react-icons/fi";

const PricingPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      // Here you would typically send the form data to your backend
      alert("Thank you for your message. We'll get back to you soon!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Pricing
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            Experience our service for free during the beta phase
          </p>
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-x-8">
          <div className="pt-12 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
            <div className="lg:self-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                <span className="block">Beta Version</span>
                <span className="block text-indigo-600">Free Access</span>
              </h2>
              <p className="mt-4 text-lg leading-6 text-gray-500">
                We are excited to offer you free access to our beta version. Your feedback is invaluable as we refine and improve our service.
              </p>
              <ul className="mt-8 space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <FiCheck className="h-6 w-6 text-green-500" aria-hidden="true" />
                  </div>
                  <p className="ml-3 text-base text-gray-700">Full access to all features</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <FiCheck className="h-6 w-6 text-green-500" aria-hidden="true" />
                  </div>
                  <p className="ml-3 text-base text-gray-700">Priority support during beta</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <FiAlertCircle className="h-6 w-6 text-yellow-500" aria-hidden="true" />
                  </div>
                  <p className="ml-3 text-base text-gray-700">May experience occasional bugs or downtime</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-12 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20 lg:flex lg:flex-col lg:justify-center bg-indigo-50">
            <div className="max-w-lg mx-auto lg:max-w-none">
              <h3 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">Why Is It Free ?</h3>
              <p className="mt-4 text-lg text-gray-500">
                We believe in creating value for our users. By offering free access during our beta phase, we aim to:
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex">
                  <FiCheck className="flex-shrink-0 h-6 w-6 text-indigo-500" aria-hidden="true" />
                  <span className="ml-3 text-gray-500">Gather valuable user feedback</span>
                </li>
                <li className="flex">
                  <FiCheck className="flex-shrink-0 h-6 w-6 text-indigo-500" aria-hidden="true" />
                  <span className="ml-3 text-gray-500">Improve and refine our features</span>
                </li>
                <li className="flex">
                  <FiCheck className="flex-shrink-0 h-6 w-6 text-indigo-500" aria-hidden="true" />
                  <span className="ml-3 text-gray-500">Build a community of early adopters</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="px-6 py-12 sm:px-12 lg:px-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Contact Us
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Have questions or feedback? We would love to hear from you!
            </p>
            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiUser className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className={`block w-full pl-10 sm:text-sm rounded-md p-3 ${errors.name ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500'}`}
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiMail className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className={`block w-full pl-10 sm:text-sm rounded-md p-3 ${errors.email ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500'}`}
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                  Subject
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    className={`shadow-sm block w-full sm:text-sm rounded-md p-3 ${errors.subject ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500'}`}
                    placeholder="What is this about?"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
                {errors.subject && <p className="mt-2 text-sm text-red-600">{errors.subject}</p>}
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className={`shadow-sm block w-full sm:text-sm rounded-md p-3 ${errors.message ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500'}`}
                    placeholder="Your message here..."
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                {errors.message && <p className="mt-2 text-sm text-red-600">{errors.message}</p>}
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
