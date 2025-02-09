import React, { useState, useEffect, useRef } from 'react';

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
      image: 'https://via.placeholder.com/1500x500/ff5733', // Rouge
      title: 'KETE Consulting',
      description: 'Développeur web passionné par la création d’expériences numériques modernes.',
    },
    {
      image: 'https://via.placeholder.com/1500x500/33c1ff', // Bleu
      title: 'Services de Développement',
      description: 'Nous fournissons des solutions web sur mesure pour répondre à vos besoins spécifiques.',
    },
    {
      image: 'https://via.placeholder.com/1500x500/75ff33', // Vert
      title: 'Innovations Technologiques',
      description: 'Nous explorons les dernières technologies pour vous offrir les meilleures solutions.',
    },
    {
      image: 'https://via.placeholder.com/1500x500/ff33a8', // Rose
      title: 'Web Design Moderne',
      description: 'Nos designs sont modernes, intuitifs et parfaitement adaptés à vos besoins.',
    },
  ];

  const totalSlides = slides.length;
  const containerRef = useRef(null);

  // Fonction pour changer de slide automatiquement toutes les 2 secondes
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 2000); // Changer de slide toutes les 2 secondes

    return () => clearInterval(intervalId); // Nettoyage lors du démontage du composant
  }, []);

  // Fonction pour changer de slide lorsqu'un point est cliqué
  const handleSlideChange = (index) => {
    setCurrentIndex(index);
  };

  // Gérer l'animation de transition pour les indices
  const handleTransitionEnd = () => {
    if (currentIndex === totalSlides) {
      setCurrentIndex(0); // Revenir au premier slide sans transition visible
    }
  };

  return (
    <section id="hero" className="relative bg-primary text-white py-32">
      <div className="container mx-auto text-center">
        <div className="overflow-hidden relative" ref={containerRef}>
          <div
            className="flex transition-transform duration-1000 ease-in-out"
            style={{
              transform: `translateX(-${(currentIndex) * 100}%)`, // Déplacement circulaire
            }}
            onTransitionEnd={handleTransitionEnd} // Gérer la fin de la transition pour remettre l'index
          >
            {/* Affichage des slides avec un slide cloné à la fin */}
            {[...slides, slides[0]].map((slide, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '500px',
                  position: 'relative',
                  borderRadius: '8px',
                }}
              >
                <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
                <div className="absolute inset-0 flex items-center justify-center text-center px-4">
                  <div className="relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">{slide.title}</h2>
                    <p className="text-xl mb-8">{slide.description}</p>
                    <a
                      href="#portfolio"
                      className="bg-accent text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-opacity-80 transition"
                    >
                      Voir mon travail
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Indicateurs de slide (points) */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <div
                key={index}
                onClick={() => handleSlideChange(index)}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === index ? 'bg-white' : 'bg-gray-500'
                }`}
              ></div>
            ))}
          </div>
        </div>

        {/* Boutons de navigation */}
        <button
          onClick={() => handleSlideChange((currentIndex - 1 + slides.length) % slides.length)}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black text-white p-3 rounded-full"
        >
          ‹
        </button>
        <button
          onClick={() => handleSlideChange((currentIndex + 1) % slides.length)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black text-white p-3 rounded-full"
        >
          ›
        </button>
      </div>
    </section>
  );
};

export default Hero;
