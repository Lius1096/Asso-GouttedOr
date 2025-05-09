import React from 'react';
import { FaLaptopCode, FaBullhorn, FaStoreAlt, FaPen } from 'react-icons/fa'; // Icônes illustratives

const Services = () => {
  const services = [
    {
      icon: <FaLaptopCode className="text-4xl text-blue-500" />,
      title: 'Développement Web',
      description: 'Création de sites web modernes et réactifs. De la conception à la mise en ligne, je vous aide à atteindre vos objectifs numériques.',
    },
    {
      icon: <FaBullhorn className="text-4xl text-yellow-500" />,
      title: 'Stratégie Numérique',
      description: 'Conseil en stratégie numérique pour améliorer votre visibilité en ligne et maximiser votre ROI avec des solutions sur mesure.',
    },
    {
      icon: <FaStoreAlt className="text-4xl text-green-500" />,
      title: 'Création de Sites E-commerce',
      description: 'Mise en place de boutiques en ligne robustes et sécurisées, avec des fonctionnalités avancées pour optimiser l’expérience d’achat de vos clients.',
    },
    {
      icon: <FaPen className="text-4xl text-red-500" />,
      title: 'Rédaction de Contenus',
      description: 'Rédaction de contenus de qualité, adaptés à votre audience et optimisés pour le SEO. J’écris des articles, des blogs et des pages d’atterrissage.',
    },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-gray-800">Mes Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300 ease-in-out">
              <div className="text-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
