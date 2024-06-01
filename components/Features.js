import React from 'react';

const Features = ({ features }) => (
  <section id="features">
    <h2>Features</h2>
    {features.map(feature => (
      <div className="feature" key={feature.title}>
        <img src={feature.icon} alt={feature.title} />
        <div>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      </div>
    ))}
  </section>
);

export default Features;
