import React from 'react';

const Hero = ({ headline, subheadline, ctaButtons }) => (
  <header className="hero">
    <h1>{headline}</h1>
    <p>{subheadline}</p>
    <div className="cta-buttons">
      {ctaButtons.map(button => (
        <button key={button.text} onClick={() => window.location.href = button.link}>
          {button.text}
        </button>
      ))}
    </div>
  </header>
);

export default Hero;
