import React from 'react';

const Hero = ({ headline, subheadline, ctaButtons }) => (
  <header className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-20 text-center">
    <div className="container mx-auto px-6">
      <h1 className="text-5xl md:text-7xl font-extrabold mb-4">{headline}</h1>
      <p className="text-2xl md:text-3xl mb-8">{subheadline}</p>
      <div className="flex justify-center space-x-4">
        {ctaButtons.map(button => (
          <a 
            key={button.text}
            href={button.link}
            className="bg-white text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-3 px-6 rounded-full transition duration-300"
          >
            {button.text}
          </a>
        ))}
      </div>
    </div>
  </header>
);

export default Hero;
