import React, { useEffect, useState } from 'react';
import api from '../services/api';

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleProjects, setVisibleProjects] = useState(6);  // Afficher initialement 6 projets

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

  const handleShowMore = () => {
    setVisibleProjects((prev) => prev + 6); // Afficher 6 projets de plus à chaque clic
  };

  const handleShowLess = () => {
    setVisibleProjects((prev) => (prev > 6 ? prev - 6 : 6)); // Réduire à 6 projets minimum
  };

  if (loading) {
    return <div className="text-center py-10 text-gray-600">Chargement des projets...</div>;
  }

  return (
    <section id="portfolio" className="py-16 px-4 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">Mon Portfolio</h2>
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, visibleProjects).map((project) => (
            <div key={project._id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">
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
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-accent font-medium hover:underline">
                    Voir le projet →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Voir plus ou moins de projets */}
        <div className="text-center mt-8">
          {visibleProjects < projects.length ? (
            <button
              onClick={handleShowMore}
              className="text-primary font-semibold hover:underline"
            >
              Voir plus de projets
            </button>
          ) : (
            <button
              onClick={handleShowLess}
              className="text-primary font-semibold hover:underline"
            >
              Voir moins de projets
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
