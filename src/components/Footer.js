const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-6 mt-10">
        <div className="container mx-auto text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Goutte d'Or. Tous droits réservés.</p>
          <div className="flex justify-center space-x-4 mt-3">
            <a href="#" className="hover:text-gray-400">Mentions légales</a>
            <a href="#" className="hover:text-gray-400">Politique de confidentialité</a>
            <a href="/contact" className="hover:text-gray-400">Contact</a> {/* Lien vers la page Contact */}
          </div>
        </div>
      </footer>
    );
};
  
export default Footer;
