import { useState } from "react";
import { sendContactMessage } from "../services/apiContact";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(false);
    setError("");
    setLoading(true);

    try {
      console.log("Envoi du formulaire :", formData);
      const res = await sendContactMessage(formData);
      console.log("Réponse du serveur :", res);
      setSubmitted(true);
      // Réinitialiser le formulaire après envoi
      setFormData({ name: "", subject: "", email: "", message: "" });
    } catch (err) {
      console.error("Erreur lors de l’envoi :", err);
      setError("Une erreur est survenue lors de l’envoi du message.");
    } finally {
      setLoading(false);
    }
  };


  return (
    <section className="container mx-auto py-10 px-6 max-w-lg">
      <h2 className="text-3xl font-bold text-center mb-6">Contactez-nous</h2>
      {submitted && (
        <p className="text-green-600 text-center mb-4">
          Votre message a été envoyé avec succès !
        </p>

      )}


      {error && (
        <p className="text-red-600 text-center mb-4">{error}</p>
      )}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6"
      >
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Nom</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">objet</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition ${loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
        >
          Envoyer
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
