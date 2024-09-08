import React from 'react';

function Testimonial() {
  return (
    <section className="flex z-10 flex-col px-7 pt-16 pb-9 mt-24 w-full bg-orange-400 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <blockquote className="text-3xl text-center font-bold text-white max-md:max-w-full">
        "ZENMe has been a game-changer for me.
        <br />
        It's like having a supportive friend who understands
        <br />
        my struggles."
      </blockquote>
      <div className="flex gap-1.5 self-center ml-5 max-w-full w-[206px] max-md:mt-10">
        <div className="flex flex-col justify-center items-center px-0.5 w-10 h-10 bg-zinc-300 rounded-[30px]">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d36fb1c3637549d455a0d50b16343f985a8fd9375301242655a4e55037532cdd?placeholderIfAbsent=true&apiKey=53833057d7ee44b4a2660248a893a554" alt="Audrey Hall" className="object-contain rounded-full aspect-square w-[46px]" />
        </div>
        <cite className="grow shrink my-auto text-2xl text-white w-[142px]">
          Audrey Hall
        </cite>
      </div>
    </section>
  );
}

export default Testimonial;