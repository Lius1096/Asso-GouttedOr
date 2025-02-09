import React, { useState, useEffect } from "react";
import axios from "axios";

const ManageArticle = () => {
  const [articles, setArticles] = useState([]);
  const [newArticle, setNewArticle] = useState({
    title: "",
    subtitle: "",
    content: "",
    author: "",
    imageFile: null,
  });
  const [editingArticle, setEditingArticle] = useState(null);
  const [message, setMessage] = useState({ type: "", text: "" });

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/articles");
      setArticles(response.data);
    } catch (error) {
      setMessage({ type: "error", text: "Erreur lors de la récupération des articles" });
      console.error("Erreur lors de la récupération des articles", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewArticle({ ...newArticle, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setNewArticle({ ...newArticle, imageFile: file });
    } else {
      setMessage({ type: "error", text: "Veuillez télécharger une image valide." });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", newArticle.title);
    formData.append("subtitle", newArticle.subtitle);
    formData.append("content", newArticle.content);
    formData.append("author", newArticle.author);
    if (newArticle.imageFile) {
      formData.append("image", newArticle.imageFile);
    }

    try {
      if (editingArticle) {
        await axios.put(`http://localhost:5000/api/articles/${editingArticle._id}`, formData);
        showMessage("success", "Article mis à jour avec succès !");
      } else {
        await axios.post("http://localhost:5000/api/articles", formData);
        showMessage("success", "Article ajouté avec succès !");
      }
      setNewArticle({ title: "", subtitle: "", content: "", author: "", imageFile: null });
      setEditingArticle(null);
      fetchArticles();
    } catch (error) {
      showMessage("error", "Erreur lors de l'ajout de l'article");
      console.error("Erreur lors de l'ajout de l'article", error);
    }
  };

  const showMessage = (type, text) => {
    setMessage({ type, text });
    setTimeout(() => setMessage({ type: "", text: "" }), 3000);
  };

  const handleEdit = (article) => {
    setEditingArticle(article);
    setNewArticle(article);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/articles/${id}`);
      fetchArticles();
      showMessage("success", "Article supprimé avec succès !");
    } catch (error) {
      showMessage("error", "Erreur lors de la suppression de l'article");
      console.error("Erreur lors de la suppression de l'article", error);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Gestion des articles</h2>

      {/* Panel de message */}
      {message.text && (
        <div className={`p-4 mb-4 ${message.type === "success" ? "bg-green-500 text-white" : "bg-red-500 text-white"} rounded`}>
          {message.text}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          value={newArticle.title}
          onChange={handleInputChange}
          placeholder="Titre"
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="subtitle"
          value={newArticle.subtitle}
          onChange={handleInputChange}
          placeholder="Sous-titre"
          className="w-full p-2 border rounded"
        />
        <textarea
          name="content"
          value={newArticle.content}
          onChange={handleInputChange}
          placeholder="Contenu"
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="author"
          value={newArticle.author}
          onChange={handleInputChange}
          placeholder="Auteur"
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="file"
          onChange={handleFileChange}
          className="w-full p-2 border rounded"
        />
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
          {editingArticle ? "Modifier" : "Ajouter"} l'article
        </button>
      </form>

      <ul className="mt-6 space-y-4">
        {articles.map((article) => (
          <li key={article._id} className="p-4 border rounded flex justify-between items-center">
            <div>
              <h3 className="font-bold">{article.title}</h3>
              <p>{article.subtitle}</p>
              <p className="text-sm text-gray-600">{article.author}</p>
            </div>
            <div>
              <button
                onClick={() => handleEdit(article)}
                className="px-4 py-2 bg-yellow-500 text-white rounded mr-2"
              >
                Modifier
              </button>
              <button
                onClick={() => handleDelete(article._id)}
                className="px-4 py-2 bg-red-500 text-white rounded"
              >
                Supprimer
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageArticle;
