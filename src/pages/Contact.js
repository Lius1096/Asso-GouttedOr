import ContactForm from "../components/ContactForm";

const ContactPage = () => {
  return (
    <section className="container mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Nous Contacter</h1>
      <p className="text-center text-gray-600 mb-10">
        Vous avez une question ou une demande ? Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
      </p>

      <div className="flex flex-col md:flex-row gap-12">
        {/* Infos de contact */}
        <div className="md:w-1/3 bg-gray-100 p-8 rounded-lg shadow-lg flex flex-col space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Nos Coordonnées</h2>
          <div className="space-y-3 text-gray-700">
            <p><strong>Email :</strong> <a href="mailto:contact@exemple.com" className="hover:text-blue-500">contact@exemple.com</a></p>
            <p><strong>Téléphone :</strong> <a href="tel:+33123456789" className="hover:text-blue-500">+33 1 23 45 67 89</a></p>
            <p><strong>Adresse :</strong> 123 Rue des Développeurs, Paris, France</p>
          </div>
        </div>

        {/* Formulaire de contact */}
        <div className="md:w-2/3 bg-white p-8 rounded-lg shadow-lg">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
