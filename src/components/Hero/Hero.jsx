import React from 'react';
import Card from './Card';

function Hero() {
return ( <section className="bg-gradient-to-br from-[#020617] via-[#0F172A] to-[#134E4A] md:rounded-bl-[200px] lg:rounded-bl-[299px] shadow-shd"> <div className="flex flex-col lg:flex-row justify-center items-center px-4 lg:px-0">

```
    <div className="text-white mt-10 lg:mt-20 lg:mb-0 text-center lg:text-center lg:ml-20">

      <div className="text-3xl sm:text-4xl lg:text-5xl mb-4 font-rocaThI">
        Your Personal
      </div>

      <div className="text-4xl sm:text-5xl lg:text-6xl mb-8 font-rocaThI">
        <span className="text-[#14B8A6]">
          AI Wellness
        </span>{' '}
        Companion
      </div>

      <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
        Discover a smarter approach to mental wellness.
        Access self-care resources, personalized guidance,
        and supportive tools designed to help you thrive.
      </p>

      <div className="flex flex-wrap justify-center gap-4 mb-10">

        <button
          className="px-6 py-3 text-lg bg-[#14B8A6] text-white rounded-full hover:scale-105 transition duration-300"
        >
          Try AI Companion
        </button>

        <button
          className="px-6 py-3 text-lg border-2 border-white text-white rounded-full hover:bg-white hover:text-black transition duration-300"
        >
          Explore Resources
        </button>

      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-8">

        <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm">
          🌱 Self Growth
        </div>

        <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm">
          🧠 Wellness Insights
        </div>

        <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm">
          💬 Community Support
        </div>

      </div>

    </div>

    <div className="w-[329px] mr-0 md:mr-16 pb-20 sm:pt-6 sm:mx-auto md:max-w-[90%] lg:w-auto">
      <Card />
    </div>

  </div>
</section>
```

);
}

export default Hero;
