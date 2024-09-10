import React from 'react';
import FeatureItem from './FeatureItem';

const features = [
  {
    title: "Personalized AI Responses",
    description: "Engage in confidential conversations with ZENMe, knowing that your privacy and mental well-being are our top priorities.",
    imageSrc: "/images/feature/feature-1.png",
    imageAlt: "Personalized AI Responses illustration"
  },
  {
    title: "24/7 Support",
    description: "With ZENMe, you have access to support and responses round the clock, ensuring you're never alone in your mental health journey.",
    imageSrc: "/images/feature/feature-2.png",
    imageAlt: "24/7 Support illustration"
  },
  {
    title: "Confidential Conversations",
    description: "Engage in confidential conversations with ZENMe knowing that your privacy and mental well-being are our top priorities.",
    imageSrc: "/images/feature/feature-3.png",
    imageAlt: "Confidential Conversations illustration"
  }
];

function FeatureSection() {
  return (
    <section id='feature' className="text-gray-600 body-font">
      {/* <h1 className="sm:text-3xl text-4xl font-bold title-font text-gray-900 mb-4 text-center">
        Features
      </h1> */}
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {features.map((feature, index) => (
            <FeatureItem key={index} index={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;
