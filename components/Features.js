import React from 'react';

const Features = ({ features }) => (
  <section id="features" className="py-20 bg-gray-50 text-center">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-blue-600">Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {features.map((feature, index) => (
          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300" key={index}>
            <img src={feature.icon} alt={feature.title} className="w-20 h-20 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-purple-600">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
