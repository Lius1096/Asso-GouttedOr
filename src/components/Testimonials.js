import React, { useState } from 'react';

// Exemple de données pour les témoignages
const testimonials = [
  {
    name: 'Jean Dupont',
    role: 'CEO, CompanyX',
    photo: 'https://randomuser.me/api/portraits/men/1.jpg',
    text: 'Julius a développé notre site web et a livré un produit final au-delà de nos attentes. Sa réactivité et ses compétences en développement sont exceptionnelles.',
  },
  {
    name: 'Marie Durand',
    role: 'CTO, TechCorp',
    photo: 'https://randomuser.me/api/portraits/women/2.jpg',
    text: 'Travailler avec Julius a été un véritable plaisir. Son expertise en React et Node.js a grandement contribué au succès de notre projet. Je recommande vivement.',
  },
  {
    name: 'Alexandre Lemoine',
    role: 'Mentor',
    photo: 'https://randomuser.me/api/portraits/men/3.jpg',
    text: 'Julius est un développeur passionné, toujours à la recherche de solutions innovantes. Son professionnalisme et son engagement sont remarquables.',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-gray-800">Témoignages</h2>
        <div className="flex justify-center items-center mb-8">
          <button
            onClick={prevTestimonial}
            className="text-2xl text-gray-600 hover:text-gray-800 transition duration-300 mx-4"
          >
            &#8592;
          </button>
          <div className="bg-white shadow-xl rounded-lg p-8 max-w-lg mx-4">
            <img
              src={testimonials[currentIndex].photo}
              alt={testimonials[currentIndex].name}
              className="w-20 h-20 rounded-full mx-auto mb-4"
            />
            <p className="text-lg italic text-gray-600 mb-4">
              "{testimonials[currentIndex].text}"
            </p>
            <h4 className="text-xl font-semibold text-gray-800">
              {testimonials[currentIndex].name}
            </h4>
            <p className="text-sm text-gray-500">{testimonials[currentIndex].role}</p>
          </div>
          <button
            onClick={nextTestimonial}
            className="text-2xl text-gray-600 hover:text-gray-800 transition duration-300 mx-4"
          >
            &#8594;
          </button>
        </div>
        {/* Optionnel : Affichage de tous les témoignages en grille */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
              <img
                src={testimonial.photo}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
              <p className="text-lg italic text-gray-600 mb-4">
                "{testimonial.text}"
              </p>
              <h4 className="text-xl font-semibold text-gray-800">{testimonial.name}</h4>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
