import React, { useState } from 'react';
import logo from '../asset/logok.jpeg'; // Assurez-vous que le chemin est correct
import SearchBar from "./SearchBar"; // Importation de la barre de recherche

const Home = () => {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [showTopButton, setShowTopButton] = useState(false);

  const [activeMenu, setActiveMenu] = useState(null); // État pour contrôler quel sous-menu est actif
  const [activeSubMenu, setActiveSubMenu] = useState(null); // État pour contrôler quel sous-sous-menu est actif

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  const toggleSubMenu = (subMenu) => {
    setActiveSubMenu(activeSubMenu === subMenu ? null : subMenu);
  };

  // Fonction pour retourner en haut de la page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className={`bg-primary text-white py-4 shadow-lg sticky top-0 z-50 transition-transform duration-300 ${isVisible ? 'transform translate-y-0' : 'transform -translate-y-full'}`}>
        <div className="container mx-auto flex justify-between items-center">
          <div className="bg-white rounded-full p-1 shadow-md">
            <img src={logo} alt="KETE" className="h-10 w-10 rounded-full" />
          </div>

          <nav>
            <ul className="flex space-x-6">
              <li className="relative">
              <a
                  href="/"
                  className="text-white font-medium hover:text-gray-100 transition"
                >
                  Accueil
                </a>
                
              </li>
              <li className="relative">
                <a
                  href="#"
                  className="text-white font-medium hover:text-gray-100 transition"
                  onClick={() => toggleMenu('articles')}
                >
                  Actualités
                </a>
                {activeMenu === 'articles' && (
                  <ul className="absolute left-0 mt-2 bg-white text-black shadow-md rounded-lg w-48">
                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Sous-élément 1</a></li>
                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Sous-élément 2</a></li>
                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Sous-élément 3</a></li>
                  </ul>
                )}
              </li>

              <li className="relative">
                <a
                  href="#"
                  className="text-white font-medium hover:text-gray-100 transition"
                  onClick={() => toggleMenu('actualites')}
                >
                  Articles
                </a>
                {activeMenu === 'actualites' && (
                  <ul className="absolute left-0 mt-2 bg-white text-black shadow-md rounded-lg w-48">
                    <li><a href="/article" className="block px-4 py-2 hover:bg-gray-200">Articles d’actualités</a></li>
                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Reportages</a></li>
                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Lundi en archives</a></li>
                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Portraits du mois</a></li>
                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Pas de planète B</a></li>
                  </ul>
                )}
              </li>

              <li className="relative">
                <a
                  href="#"
                  className="text-white font-medium hover:text-gray-100 transition"
                  onClick={() => toggleMenu('webradio')}
                >
                  Webradio
                </a>
                {activeMenu === 'webradio' && (
                  <ul className="absolute left-0 mt-2 bg-white text-black shadow-md rounded-lg w-48">
                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Playlists</a></li>
                  </ul>
                )}
              </li>

              <li className="relative">
                <a
                  href="#"
                  className="text-white font-medium hover:text-gray-100 transition"
                  onClick={() => toggleMenu('memoire')}
                >
                  Mémoire du quartier
                </a>
                {activeMenu === 'memoire' && (
                  <ul className="absolute left-0 mt-2 bg-white text-black shadow-md rounded-lg w-48">
                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Fonds d’archives</a></li>
                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Actualités passées</a></li>
                  </ul>
                )}
              </li>

              <li className="relative">
                <a
                  href="#"
                  className="text-white font-medium hover:text-gray-100 transition"
                  onClick={() => toggleMenu('vie')}
                >
                  Vie associative
                </a>
                {activeMenu === 'vie' && (
                  <ul className="absolute left-0 mt-2 bg-white text-black shadow-md rounded-lg w-48">
                    <li className="relative">
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-200"
                        onClick={() => toggleSubMenu('salleSaintBruno')}
                      >
                        Salle Saint Bruno
                      </a>
                      {activeSubMenu === 'salleSaintBruno' && (
                        <ul className="absolute left-0 mt-2 bg-white text-black shadow-md rounded-lg w-48">
                          <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Description de l’asso</a></li>
                          <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">FPH</a></li>
                        </ul>
                      )}
                    </li>
                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Annuaire</a></li>
                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Carte des assos</a></li>
                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Offre d’emploi / bénévolat / service civique</a></li>
                  </ul>
                )}
              </li>

              <li className="relative">
              <a
                  href="/admin/register"
                  className="text-white font-medium hover:text-gray-100 transition"
                >
                  S'authentifier 
                </a>
                
              </li>
              <li >
             
                  <SearchBar /> 
              
                
              </li>

            </ul>
          </nav>
        </div>
      </header>

      {/* Bouton "Retour en haut" */}
      {showTopButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 bg-accent text-white p-3 rounded-full shadow-lg hover:bg-accent-dark transition"
        >
          ↑
        </button>
      )}
       
    </>
  );
};

export default Home;
