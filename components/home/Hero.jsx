import React from 'react';
import Link from 'next/link';

function Hero() {
    return (
        <section id='#hero' className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center animate-fadeIn">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                        Student Mental Health Support
                        <br className="hidden lg:inline-block" />
                        Tailored to Your Needs
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        Connect with ZENMe for personalized AI-based mental health support tailored to students' needs.
                        Start your journey with us today and receive guidance designed just for you.
                    </p>
                    <div className="flex justify-center">
                        <Link href="/quiz">
                            <button className="inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded text-lg">
                                Get Started!
                            </button>
                        </Link>
                        <Link href="/learn-more">
                            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                                Learn More
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 animate-fadeIn">
                    <img
                        className="object-cover object-center rounded"
                        alt="hero"
                        src="/images/feature/Hero.png"
                    />
                </div>
            </div>
        </section>
    );
}

export default Hero;
