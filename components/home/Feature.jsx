import React from 'react';
import FeatureItem from './FeatureItem';

const features = [
  {
    title: "Personalized AI Responses",
    description: "Engage in confidential conversations with ZENMe, knowing that your privacy and mental well-being are our top priorities.",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/cc1c1f02f643048111476ebdf5b00f6a9773deff1149e2a2a0d642e842793aa6?placeholderIfAbsent=true&apiKey=53833057d7ee44b4a2660248a893a554",
    imageAlt: "Personalized AI Responses illustration"
  },
  {
    title: "24/7 Support",
    description: "With ZENMe, you have access to support and responses round the clock, ensuring you're never alone in your mental health journey.",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/4f461519b2dab28307d86ff3f3133b3b0598ad0f8bf0508bdc4abef0d65253a3?placeholderIfAbsent=true&apiKey=53833057d7ee44b4a2660248a893a554",
    imageAlt: "24/7 Support illustration"
  },
  {
    title: "Confidential Conversations",
    description: "Engage in confidential conversations with ZENMe knowing that your privacy and mental well-being are our top priorities.",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/eae20acc09c959fca33fee1f04488fb634681c76e4dcdf54177950f79e31a7b6?placeholderIfAbsent=true&apiKey=53833057d7ee44b4a2660248a893a554",
    imageAlt: "Confidential Conversations illustration"
  }
];

function FeatureSection() {
  return (
    <section className="flex flex-col bg-zinc-300 pr-2.5 pl-8 mt-9 w-full max-md:pl-5 max-md:max-w-full">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/630686354942bcb5624780df30ca96563e529f309b88b24ccce968874654c3e2?placeholderIfAbsent=true&apiKey=53833057d7ee44b4a2660248a893a554" alt="Mental Health Support" className="object-contain w-full rounded-3xl aspect-[1.62] max-md:mr-2.5 max-md:max-w-full" />
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