import React, { useEffect, useState } from 'react';
import api from '../services/api'; // Assurez-vous que l'API est correctement configurée

const AdminManageProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newProject, setNewProject] = useState({
    title: '',
    description: '',
    image: '',
    technologies: '',
    link: '',
  });

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await api.get('/api/projects');
        setProjects(response.data);
      } catch (error) {
        console.error('Erreur lors du chargement des projets:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProject({ ...newProject, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/api/projects', newProject);
      setNewProject({
        title: '',
        description: '',
        image: '',
        technologies: '',
        link: '',
      });
      alert('Projet ajouté avec succès');
    } catch (error) {
      console.error('Erreur lors de l\'ajout du projet:', error);
      alert('Erreur lors de l\'ajout du projet');
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/api/projects/${id}`);
      setProjects(projects.filter((project) => project._id !== id));
      alert('Projet supprimé avec succès');
    } catch (error) {
      console.error('Erreur lors de la suppression du projet:', error);
      alert('Erreur lors de la suppression du projet');
    }
  };

  const handleEdit = async (id, updatedProject) => {
    try {
      await api.put(`/api/projects/${id}`, updatedProject);
      setProjects(
        projects.map((project) => (project._id === id ? updatedProject : project))
      );
      alert('Projet mis à jour avec succès');
    } catch (error) {
      console.error('Erreur lors de la mise à jour du projet:', error);
      alert('Erreur lors de la mise à jour du projet');
    }
  };

  if (loading) {
    return <div className="text-center py-10 text-gray-600">Chargement des projets...</div>;
  }

  return (
    <section id="admin-manage-projects" className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">Gestion des Projets</h2>

        {/* Formulaire pour ajouter un projet */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Ajouter un Nouveau Projet</h3>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-6 mb-4 sm:grid-cols-1 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700">Titre</label>
                <input
                  type="text"
                  name="title"
                  value={newProject.title}
                  onChange={handleInputChange}
                  required
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <input
                  type="text"
                  name="description"
                  value={newProject.description}
                  onChange={handleInputChange}
                  required
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Image URL</label>
                <input
                  type="text"
                  name="image"
                  value={newProject.image}
                  onChange={handleInputChange}
                  required
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Technologies</label>
                <input
                  type="text"
                  name="technologies"
                  value={newProject.technologies}
                  onChange={handleInputChange}
                  required
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Lien du Projet</label>
                <input
                  type="text"
                  name="link"
                  value={newProject.link}
                  onChange={handleInputChange}
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </div>
            </div>
            <button type="submit" className="text-white bg-primary py-2 px-6 rounded-md">
              Ajouter le Projet
            </button>
          </form>
        </div>

        {/* Liste des projets */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Projets Existants</h3>
          <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div key={project._id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                  <p className="text-gray-600 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="bg-primary text-white text-xs px-2 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between mt-4">
                    <button
                      onClick={() => handleDelete(project._id)}
                      className="text-red-600 font-medium hover:underline"
                    >
                      Supprimer
                    </button>
                    <button
                      onClick={() =>
                        handleEdit(project._id, {
                          ...project,
                          title: 'Titre modifié', // Exemple de modification
                        })
                      }
                      className="text-blue-600 font-medium hover:underline"
                    >
                      Modifier
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminManageProjects;
