import React from 'react';

const Testimonials = ({ testimonials }) => (
  <section id="testimonials" className="py-20 bg-white text-center">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-pink-600">Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {testimonials.map((testimonial, index) => (
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg" key={index}>
            <img src={testimonial.avatar} alt={testimonial.name} className="w-16 h-16 rounded-full mx-auto mb-4" />
            <p className="italic mb-4">"{testimonial.feedback}"</p>
            <p className="font-semibold">- {testimonial.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
