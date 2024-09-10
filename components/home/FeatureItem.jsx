import React from 'react';

function FeatureItem({ title, description, imageSrc, imageAlt, index }) {
  return (
    <div
      className={`p-4 md:w-1/3 animate-slideIn opacity-0`}
      style={{ animationDelay: `${index * 0.2}s` }}  // Delay each item by 0.2s
    >
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
        <img
          loading="lazy"
          className="lg:h-48 md:h-36 w-full object-cover object-center"
          src={imageSrc}
          alt={imageAlt}
        />
        <div className="p-6">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
            FEATURE
          </h2>
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            {title}
          </h1>
          <p className="leading-relaxed mb-3">
            {description}
          </p>
          <div className="flex items-center flex-wrap">
            <a className="text-indigo-500 inline-flex items-center">
              Learn More
              <svg
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureItem;
