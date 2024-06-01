import React from 'react';

const Pricing = ({ pricing }) => (
  <section id="pricing" className="py-20 bg-gray-50 text-center">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-blue-600">Pricing</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {pricing.map((plan, index) => (
          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300" key={index}>
            <h3 className="text-2xl font-semibold mb-4 text-purple-600">{plan.plan}</h3>
            <p className="text-3xl font-bold mb-4 text-pink-600">{plan.price}</p>
            <ul className="mb-4 text-gray-600">
              {plan.features.map((feature, i) => (
                <li key={i} className="mb-2">{feature}</li>
              ))}
            </ul>
            <button className="bg-blue-600 text-white py-3 px-6 rounded-full hover:bg-blue-700 transition duration-300">
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Pricing;
