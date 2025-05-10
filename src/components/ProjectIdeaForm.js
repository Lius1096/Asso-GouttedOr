// import { useState } from "react";
// import { submitProjectIdea } from "../services/apiProjectIdeas";

// const ProjectIdeaForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     projectType: "",
//     description: "",
//     deadline: "",
//     budget: "",
//     additionalInfo: "",
//   });

//   const [success, setSuccess] = useState(false);
//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setSuccess(false);
//     setError("");

//     try {
//       await submitProjectIdea(formData);
//       setSuccess(true);
//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         projectType: "",
//         description: "",
//         deadline: "",
//         budget: "",
//         additionalInfo: "",
//       });
//     } catch (err) {
//       setError("Erreur lors de l'envoi du formulaire.");
//     }
//   };

//   return (
//     <section className="max-w-2xl mx-auto px-4 py-8">
//       <h2 className="text-2xl font-bold mb-6 text-center">Soumettez votre idée de projet</h2>

//       {success && <p className="text-green-600 mb-4">Votre idée a été envoyée avec succès !</p>}
//       {error && <p className="text-red-600 mb-4">{error}</p>}

//       <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 shadow rounded-lg">
//         <input
//           type="text"
//           name="name"
//           placeholder="Votre nom"
//           value={formData.name}
//           onChange={handleChange}
//           required
//           className="w-full p-3 border rounded"
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Votre email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//           className="w-full p-3 border rounded"
//         />
//         <input
//           type="tel"
//           name="phone"
//           placeholder="Votre numéro de téléphone (facultatif)"
//           value={formData.phone}
//           onChange={handleChange}
//           className="w-full p-3 border rounded"
//         />
//         <select
//           name="projectType"
//           value={formData.projectType}
//           onChange={handleChange}
//           required
//           className="w-full p-3 border rounded"
//         >
//           <option value="">Sélectionnez un type de projet</option>
//           <option value="Site vitrine">Site vitrine</option>
//           <option value="E-commerce">E-commerce</option>
//           <option value="Blog">Blog</option>
//           <option value="Portfolio">Portfolio</option>
//           <option value="Autre">Autre</option>
//         </select>
//         <textarea
//           name="description"
//           placeholder="Décrivez votre projet"
//           value={formData.description}
//           onChange={handleChange}
//           rows="4"
//           required
//           className="w-full p-3 border rounded"
//         />
//         <input
//           type="date"
//           name="deadline"
//           placeholder="Date limite souhaitée (facultatif)"
//           value={formData.deadline}
//           onChange={handleChange}
//           className="w-full p-3 border rounded"
//         />
//         <select
//           name="budget"
//           value={formData.budget}
//           onChange={handleChange}
//           className="w-full p-3 border rounded"
//         >
//           <option value="">Sélectionnez un budget (facultatif)</option>
//           <option value="<500€">&lt;500€</option>
//           <option value="500-1000€">500-1000€</option>
//           <option value="1000-3000€">1000-3000€</option>
//           <option value=">3000€">&gt;3000€</option>
//         </select>
//         <textarea
//           name="additionalInfo"
//           placeholder="Informations supplémentaires (facultatif)"
//           value={formData.additionalInfo}
//           onChange={handleChange}
//           rows="4"
//           className="w-full p-3 border rounded"
//         />
//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700"
//         >
//           Envoyer
//         </button>

//   {success && fileName && (
//   <a
//   href={`/download/${fileName}`}
//   download
//   className="block mt-4 bg-green-600 text-white text-center py-3 rounded hover:bg-green-700"
// >
//   Télécharger le devis
// </a>

// )}

//       </form>
//     </section>
//   );
// };

// export default ProjectIdeaForm;


import { useState } from "react";
import { submitProjectIdea } from "../services/apiProjectIdeas";
import DownloadQuoteButton from "./DownloadQuoteButton";

const ProjectIdeaForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    description: "",
    deadline: "",
    budget: "",
    additionalInfo: "",
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [fileName, setFileName] = useState(""); // <-- stocker le nom du devis

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(false);
    setError("");
    setFileName("");

    try {
      const res = await submitProjectIdea(formData);
      setSuccess(true);
      setFileName(res.fileName); // <-- récupère le nom du devis
      setFormData({
        name: "",
        email: "",
        phone: "",
        projectType: "",
        description: "",
        deadline: "",
        budget: "",
        additionalInfo: "",
      });
    } catch (err) {
      console.error(err);
      setError("Erreur lors de l'envoi du formulaire.");
    }
  };

  return (
    <section className="max-w-2xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Soumettez votre idée de projet</h2>

      {success && <p className="text-green-600 mb-4">Votre idée a été envoyée avec succès !</p>}
      {error && <p className="text-red-600 mb-4">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 shadow rounded-lg">
        <input
          type="text"
          name="name"
          placeholder="Votre nom"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Votre email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Votre numéro de téléphone (facultatif)"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-3 border rounded"
        />
        <select
          name="projectType"
          value={formData.projectType}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded"
        >
          <option value="">Sélectionnez un type de projet</option>
          <option value="Site vitrine">Site vitrine</option>
          <option value="E-commerce">E-commerce</option>
          <option value="Blog">Blog</option>
          <option value="Portfolio">Portfolio</option>
          <option value="Autre">Autre</option>
        </select>
        <textarea
          name="description"
          placeholder="Décrivez votre projet"
          value={formData.description}
          onChange={handleChange}
          rows="4"
          required
          className="w-full p-3 border rounded"
        />
        <input
          type="date"
          name="deadline"
          value={formData.deadline}
          onChange={handleChange}
          className="w-full p-3 border rounded"
        />
        <select
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          className="w-full p-3 border rounded"
        >
          <option value="">Sélectionnez un budget (facultatif)</option>
          <option value="<500€">&lt;500€</option>
          <option value="500-1000€">500-1000€</option>
          <option value="1000-3000€">1000-3000€</option>
          <option value=">3000€">&gt;3000€</option>
        </select>
        <textarea
          name="additionalInfo"
          placeholder="Informations supplémentaires (facultatif)"
          value={formData.additionalInfo}
          onChange={handleChange}
          rows="4"
          className="w-full p-3 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700"
        >
          Envoyer
        </button>

        {success && fileName && <DownloadQuoteButton fileName={fileName} />}

      </form>
    </section>
  );
};

export default ProjectIdeaForm;
