import React, { useState, useEffect } from 'react';
import logo from '../asset/logok.jpeg';

const Home = () => {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [showTopButton, setShowTopButton] = useState(false);

  const [isOpen, setIsOpen] = useState(false); // Pour le menu "Mon compte"

  // Scroll detection pour bouton "retour en haut"
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      // Cacher/montrer le header
      if (scrollTop > lastScrollTop) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);

      // Montrer le bouton retour haut
      setShowTopButton(scrollTop > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    // Implémente ta logique de déconnexion ici
    console.log('Utilisateur déconnecté');
    // Par exemple, remove token + rediriger :
    // localStorage.removeItem('token');
    // window.location.href = '/';
  };

  return (
    <>
      <header className={`bg-primary text-white py-4 shadow-lg sticky top-0 z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="container mx-auto flex justify-between items-center">
          <div className="">
            <img src={logo} alt="KETE" className="h-32 w-32 rounded-full" />
          </div>

          <nav>
            <ul className="flex space-x-6 relative">
              <li>
                <a href="/" className="text-white font-medium hover:text-gray-100 transition">Accueil</a>
              </li>

              <li>
                <a href="/admin/register" className="text-white font-medium hover:text-gray-100 transition">S'authentifier</a>
              </li>

              <li className="relative">
                <button
                  onClick={toggleMenu}
                  className="text-white font-medium hover:text-gray-100 transition focus:outline-none"
                >
                  Mon compte
                </button>

                {isOpen && (
                  <ul className="absolute right-0 mt-2 w-48 bg-white text-black shadow-lg rounded-lg z-20 text-sm">
                    <li>
                      <a href="/register" className="block px-4 py-2 hover:bg-gray-100 transition">S'inscrire</a>
                    </li>
                    <li>
                      <a href="/login" className="block px-4 py-2 hover:bg-gray-100 transition">Se connecter</a>
                    </li>
                    <li>
                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-2 hover:bg-gray-100 transition"
                      >
                        Se déconnecter
                      </button>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </header>

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
