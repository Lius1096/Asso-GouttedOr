

import React, { useState, useEffect, useRef } from 'react';
import moiImage from '../asset/moi.png';
import freelanceImage from '../asset/freelance.png';
import entreprenariatImage from '../asset/entrepreuneriat.png';
import cloudDevopsImage from '../asset/devops.png';
import iaImage from '../asset/ia.png';

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typingText, setTypingText] = useState('');
  const fullText = "Développeur Full Stack, Front-End & Back-End";

  const slides = [
    {
      image: moiImage,
      type: 'intro',
      buttonText: 'En savoir plus',
      buttonLink: '/about', // Adjust the link for the "intro" slide
    },
    {
      image: freelanceImage,
      title: 'Freelance engagé',
      description: 'Je mets mon expertise au service des indépendants, startups, et entreprises ambitieuses pour créer des solutions web performantes qui répondent aux défis d’aujourd’hui et de demain.',
      buttonText: 'Voir mes projets',
      buttonLink: '/portfolio', // Adjust the link for this slide
    },
    {
      image: entreprenariatImage,
      title: 'Entrepreneuriat Tech',
      description: 'J’accompagne les entrepreneurs dans la transformation digitale de leurs idées en solutions concrètes. Du prototype à la mise en production, je vous guide dans chaque étape.',
      buttonText: 'Découvrir l\'entrepreneuriat',
      buttonLink: '/entrepreneur', // Adjust the link for this slide
    },
    {
      image: cloudDevopsImage,
      title: 'Cloud & DevOps',
      description: 'Je conçois des architectures modernes pour des déploiements rapides et scalables. Le cloud et DevOps sont au cœur des solutions que je propose pour garantir une infrastructure fiable et évolutive.',
      buttonText: 'Explorer les solutions Cloud',
      buttonLink: '/cloud-devops', // Adjust the link for this slide
    },
    {
      image: iaImage,
      title: 'Intelligence Artificielle',
      description: 'L’intégration d’outils d’intelligence artificielle permet d’automatiser des processus, optimiser la performance et offrir des expériences utilisateurs intelligentes et personnalisées.',
      buttonText: 'Voir l\'IA en action',
      buttonLink: '/ai', // Adjust the link for this slide
    },
  ];

  const totalSlides = slides.length;
  const containerRef = useRef(null);

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      setTypingText((prev) => prev + fullText.charAt(i));
      i++;
      if (i === fullText.length) clearInterval(typingInterval);
    }, 70);
    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  const handleSlideChange = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section id="hero" className="relative bg-primary text-white">
      <div className="overflow-hidden" ref={containerRef}>
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full flex-shrink-0 h-screen relative">
              <img
                src={slide.image}
                alt={slide.title || 'Hero image'}
                className="max-w-full max-h-full object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-end px-64">
                <div className="text-left max-w-xl space-y-6 text-white p-6 rounded-xl">
                  {slide.type === 'intro' ? (
                    <>
                      <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-accent shadow-lg">
                        <img src={moiImage} alt="Julius DJOSSOU" className="w-full h-full object-cover" />
                      </div>
                      <h1 className="text-4xl md:text-5xl font-bold text-white">Julius DJOSSOU</h1>
                      <h2 className="text-xl md:text-2xl font-mono text-accent h-8">{typingText}</h2>
                      <p className="text-lg md:text-xl text-white font-light">
                      CEO de <strong className="text-blue-500">KETAVERSE</strong>. Je crée des solutions digitales modernes, performantes et sécurisées pour faire briller vos idées sur le web.
                      </p>
                      <div>
                        <a
                          href={slide.buttonLink}
                          className="inline-block bg-accent text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition"
                        >
                          {slide.buttonText}
                        </a>
                      </div>
                    </>
                  ) : (
                    <>
                      <h2 className="text-3xl md:text-4xl font-bold animate-slideUp">{slide.title}</h2>
                      <p className="text-lg md:text-xl font-light animate-fadeIn delay-300">{slide.description}</p>
                      <div>
                        <a
                          href={slide.buttonLink}
                          className="inline-block bg-accent text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition"
                        >
                          {slide.buttonText}
                        </a>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {slides.map((_, index) => (
            <div
              key={index}
              onClick={() => handleSlideChange(index)}
              className={`w-3 h-3 rounded-full cursor-pointer ${currentIndex === index ? 'bg-white' : 'bg-gray-400'}`}
            ></div>
          ))}
        </div>

        <button
          onClick={() => handleSlideChange((currentIndex - 1 + slides.length) % slides.length)}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-40 text-white p-3 rounded-full hover:bg-opacity-70 z-10"
        >
          ‹
        </button>
        <button
          onClick={() => handleSlideChange((currentIndex + 1) % slides.length)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-40 text-white p-3 rounded-full hover:bg-opacity-70 z-10"
        >
          ›
        </button>
      </div>
    </section>
  );
};

export default Hero;
