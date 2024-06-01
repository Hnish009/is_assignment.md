import React from 'react';

const Testimonials = ({ testimonials }) => (
  <section id="testimonials">
    <h2>Testimonials</h2>
    {testimonials.map(testimonial => (
      <div className="testimonial" key={testimonial.name}>
        <img src={testimonial.avatar} alt={testimonial.name} />
        <p>{testimonial.feedback}</p>
        <p>- {testimonial.name}</p>
      </div>
    ))}
  </section>
);

export default Testimonials;
