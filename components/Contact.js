import React from 'react';

const Contact = () => (
  <section id="contact" className="py-20 bg-white text-center">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-purple-600">Contact Us</h2>
      <form className="max-w-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <input type="text" placeholder="Your Name" className="p-3 rounded border border-gray-300" />
          <input type="email" placeholder="Your Email" className="p-3 rounded border border-gray-300" />
        </div>
        <textarea placeholder="Your Message" className="w-full p-3 rounded border border-gray-300 mb-6"></textarea>
        <button type="submit" className="bg-purple-600 text-white py-3 px-6 rounded-full hover:bg-purple-700 transition duration-300">
          Send Message
        </button>
      </form>
    </div>
  </section>
);

export default Contact;
