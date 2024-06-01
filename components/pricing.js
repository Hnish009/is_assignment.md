import React from 'react';

const Pricing = ({ pricing }) => (
  <section id="pricing">
    <h2>Pricing</h2>
    {pricing.map(plan => (
      <div className="pricing-plan" key={plan.plan}>
        <h3>{plan.plan}</h3>
        <p>{plan.price}</p>
        <ul>
          {plan.features.map(feature => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </div>
    ))}
  </section>
);

export default Pricing;
