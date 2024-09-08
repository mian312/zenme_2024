import React from 'react';
import Link from 'next/link';

function Hero() {
    return (
        <section className="flex flex-col pr-8 pl-1.5 mt-3.5 w-full text-base font-bold text-black max-md:pr-5 max-md:max-w-full">
            <h2 className="self-center px-6 py-2 text-4xl rounded-3xl bg-zinc-300 max-md:px-5 max-md:max-w-full">
                Student Mental Health Support
            </h2>
            <p className="mt-5 ml-6 text-center max-md:max-w-full">
                Connect with ZENMe for personalized AI-based mental health support tailored to students needs.
                <br />
                Start your journey with us...
            </p>
            <Link href="/quiz" className='self-center mx-auto'>
                <button className="px-4 py-3 mt-3 w-32 max-w-full text-white bg-orange-500 rounded-3xl bg-blend-darken shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
                    Get Started!
                </button>
            </Link>
        </section>
    );
}

export default Hero;