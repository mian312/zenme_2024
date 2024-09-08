import React from 'react';

function FeatureItem({ title, description, imageSrc, imageAlt, reverse }) {
  return (
    <div className={`mt-16 p-5 max-md:mt-10 max-md:max-w-full ${reverse ? 'flex-row-reverse' : ''}`}>
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <img loading="lazy" src={imageSrc} alt={imageAlt} className="object-contain grow w-full rounded-3xl aspect-[1.56] max-md:mt-1.5" />
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col mt-4 text-black max-md:mt-6">
            <h3 className="px-3.5 pt-2.5 pb-5 max-w-full text-3xl font-bold w-[359px] max-md:pr-5">
              {title}
            </h3>
            <p className="px-1 pt-3.5 pb-8 max-w-full text-base w-[379px] max-md:pr-5 max-md:ml-2">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureItem;