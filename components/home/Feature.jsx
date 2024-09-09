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
  }
];

function FeatureSection() {
  return (
    <section className="flex flex-col pr-2.5 pl-8 mt-9 w-full max-md:pl-5 max-md:max-w-full">
      <img loading="lazy" src="/images/feature/Hero.png" alt="Mental Health Support" className="object-contain rounded-3xl aspect-[1.62] max-md:mr-2.5 max-md:max-w-full" />
      <h2 className="self-center mt-14 text-2xl font-bold text-black max-md:mt-10 max-md:max-w-full">
        Personalized Mental Health Support
      </h2>
      <p className="self-center mt-5 text-lg text-black rotate-[0.003950622913826471rad] max-md:max-w-full">
        Receive tailored AI response to support your mental well-being
      </p>
      {features.map((feature, index) => (
        <FeatureItem key={index} {...feature} reverse={index % 2 !== 0} />
      ))}
    </section>
  );
}

export default FeatureSection;