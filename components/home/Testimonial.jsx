'use client';

import React, { useState, useEffect } from 'react';

// Testimonial Data (can be controlled from here)
const testimonials = [
  {
    quote: "ZENMe has been a game-changer for me. It's like having a supportive friend who understands my struggles.",
    name: "Audrey Hall",
    title: "Student",
    image: "/images/testimonial/testimonial-1.png"
  },
  {
    quote: "I've never felt more supported in my mental health journey. ZENMe is the best tool I've found.",
    name: "John Doe",
    title: "Graduate",
    image: "/images/testimonial/testimonial-1.png"
  },
  {
    quote: "Using ZENMe has helped me manage my anxiety. It’s like having a personal therapist 24/7.",
    name: "Jane Smith",
    title: "University Student",
    image: "/images/testimonial/testimonial-1.png"
  }
];

function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);  // Track the current testimonial

  // Automatically cycle through testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // 1 second interval

    return () => clearInterval(interval);  // Cleanup interval on component unmount
  }, []);

  const { quote, name, title, image } = testimonials[current];

  return (
    <section id='testimonial' className="text-gray-600 body-font bg-orange-400">
      <div className="container px-5 py-12 mx-auto">
        <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
          <p className="leading-relaxed text-lg text-white">
            &quot;{quote}&quot;
          </p>
          <span className="inline-block h-1 w-10 rounded bg-white mt-8 mb-6"></span>
          <div className="flex justify-center items-center">
            <div className="flex-shrink-0 w-12 h-12">
              <img
                className="rounded-full object-cover"
                src={image}
                alt={name}
              />
            </div>
            <div className="ml-4 text-left">
              <h2 className="text-white font-medium title-font tracking-wider text-sm">{name}</h2>
              <p className="text-gray-200">{title}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialCarousel;
