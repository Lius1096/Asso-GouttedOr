// import React, { useEffect, useState } from 'react';
// import { FaTools, FaComments, FaClock, FaHandshake } from 'react-icons/fa'; // Importation des icônes

// const MesValeurs = () => {
//   const valeurs = [
//     {
//       icon: <FaTools />,
//       title: 'Innovation',
//       description: 'Toujours à la recherche de nouvelles idées pour résoudre les problèmes de manière créative.',
//     },
//     {
//       icon: <FaComments />,
//       title: 'Communication',
//       description: 'La transparence et la communication ouverte sont au cœur de mon approche avec mes clients.',
//     },
//     {
//       icon: <FaClock />,
//       title: 'Fiabilité',
//       description: 'Je m’engage à fournir des résultats de haute qualité dans les délais impartis.',
//     },
//     {
//       icon: <FaHandshake />,
//       title: 'Collaboration',
//       description: 'Je travaille main dans la main avec mes clients pour atteindre leurs objectifs.',
//     },
//   ];

//   const [visible, setVisible] = useState(Array(valeurs.length).fill(false));

//   useEffect(() => {
//     const handleScroll = () => {
//       const newVisibility = valeurs.map((_, index) => {
//         const element = document.getElementById(`valeur-${index}`);
//         if (element) {
//           const rect = element.getBoundingClientRect();
//           return rect.top <= window.innerHeight && rect.bottom >= 0;
//         }
//         return false;
//       });
//       setVisible(newVisibility);
//     };

//     window.addEventListener('scroll', handleScroll);
//     handleScroll(); // Initial check when the component mounts

//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [valeurs]);

//   return (
//     <section className="bg-gradient-to-r from-[#0F172A] via-[#3B82F6] to-[#06B6D4] py-16">
//       <div className="text-center text-white">
//         <h2 className="text-3xl md:text-4xl font-semibold mb-8">Mes Valeurs</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {valeurs.map((valeur, index) => (
//             <div
//               key={index}
//               id={`valeur-${index}`}
//               className={`transform transition-all duration-700 ease-in-out ${
//                 visible[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
//               } bg-white text-[#0F172A] p-6 rounded-lg shadow-lg text-center`}
//             >
//               <div className="text-5xl mb-4">{valeur.icon}</div>
//               <h3 className="text-xl font-semibold">{valeur.title}</h3>
//               <p className="mt-2 text-sm">{valeur.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MesValeurs;

import { FaBullseye, FaLightbulb } from "react-icons/fa";
import { MdExplore } from "react-icons/md";

const About = () => {
  return (
    <section className="bg-white py-16 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
          À propos de moi
        </h2>

        <div className="space-y-8">

          {/* Parcours */}
          <div className="flex items-start gap-4">
            <FaBullseye className="w-8 h-8 text-blue-600 mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Parcours</h3>
              <p className="text-gray-700">
                Je suis Sofiane, développeur Full Stack passionné. J’ai travaillé sur divers projets, de plateformes e-commerce à des outils de gestion sur mesure, en plaçant toujours l’expérience utilisateur et la sécurité au centre.
              </p>
            </div>
          </div>

          {/* Valeurs */}
          <div className="flex items-start gap-4">
            <FaLightbulb className="w-8 h-8 text-yellow-500 mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Mes valeurs</h3>
              <p className="text-gray-700">
                Écoute, rigueur, adaptabilité. Je crois en une technologie utile et humaine, conçue avec passion et exigence.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="flex items-start gap-4">
            <MdExplore className="w-8 h-8 text-green-600 mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Ma mission</h3>
              <p className="text-gray-700">
                Accompagner les projets ambitieux en leur offrant des solutions web performantes, évolutives et sécurisées. Transformer les idées en résultats concrets.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
