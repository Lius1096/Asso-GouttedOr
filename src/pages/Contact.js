import ContactForm from "../components/ContactForm";
import logo from '../asset/logok.jpeg';
const ContactPage = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 py-16 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center text-gray-800 mb-6">Nous Contacter</h1>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Une question, une demande ? Remplissez le formulaire ci-dessous, nous vous répondrons rapidement.
        </p>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Infos de contact */}
          <div className="md:w-1/3 bg-white bg-opacity-80 backdrop-blur-sm p-8 rounded-2xl shadow-xl text-center">
  
<img src={logo} alt="KETE" className="h-32 w-32 rounded-full" />
          
  <h2 className="text-2xl py-5 font-bold text-gray-800 mb-4">Nos Coordonnées</h2>
  <div className="space-y-2 text-gray-700 text-base leading-relaxed text-left">
    <p >
      <strong >Email :</strong>{" "}
      <a href="mailto:contact@kete.fr" className="text-blue-600 hover:underline">
        contact@kete.fr
      </a>
    </p>
    <p>
      <strong>Téléphone :</strong>{" "}
      <a href="tel:+33665244031" className="text-blue-600 hover:underline">
        +33 6 65 24 40 31
      </a>
    </p>
    <p>
      <strong>Adresse :</strong><br />
      2 Rue Léonhard Euler<br />
      Créteil, France
    </p>
  </div>
</div>


          {/* Formulaire de contact */}
          <div className="md:w-2/3 bg-white bg-opacity-90 backdrop-blur-lg p-8 rounded-3xl shadow-xl">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
