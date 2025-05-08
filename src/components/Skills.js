import React, { useState } from 'react';
import { FaJsSquare, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJava, FaDocker, FaGit, FaGithub } from 'react-icons/fa'; // Icônes des compétences

const skills = {
  languages: [
    {
      icon: <FaJsSquare className="text-4xl text-yellow-500" />,
      title: 'JavaScript',
      level: 85,
    },
    {
      icon: <FaReact className="text-4xl text-cyan-400" />,
      title: 'React',
      level: 90,
    },
    {
      icon: <FaNodeJs className="text-4xl text-green-500" />,
      title: 'Node.js',
      level: 80,
    },
    {
      icon: <FaHtml5 className="text-4xl text-orange-500" />,
      title: 'HTML5',
      level: 95,
    },
    {
      icon: <FaCss3Alt className="text-4xl text-blue-500" />,
      title: 'CSS3',
      level: 90,
    },
    {
      icon: <FaJava className="text-4xl text-red-500" />,
      title: 'Java',
      level: 75,
    },
    {
      icon: <FaReact className="text-4xl text-gray-800" />,
      title: 'Spring Boot',
      level: 80,
    },
  ],
  tools: [
    {
      icon: <FaDocker className="text-4xl text-blue-500" />,
      title: 'Docker',
    },
    {
      icon: <FaGit className="text-4xl text-orange-500" />,
      title: 'Git',
    },
    {
      icon: <FaGithub className="text-4xl text-black" />,
      title: 'GitHub',
    },
  ],
  ciCdAndCloud: [
    {
      title: 'CI/CD',
      description: 'J’utilise des outils tels que Jenkins, GitLab CI pour automatiser les tests et le déploiement.',
    },
    {
      title: 'Cloud',
      description: 'Expérience avec AWS, Google Cloud et Azure pour déployer des applications évolutives.',
    },
  ],
  databases: [
    {
      title: 'MySQL',
      description: 'Bases de données relationnelles, utilisation dans des projets de gestion de données complexes.',
    },
    {
      title: 'MongoDB',
      description: 'Bases de données NoSQL pour gérer des volumes massifs de données non structurées.',
    },
  ],
};

const Skills = () => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => setShowMore(!showMore);

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-gray-800">Mes Compétences</h2>
        {/* Langages */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Langages de Programmation</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {skills.languages.map((skill, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
              >
                <div className="text-center mb-4">{skill.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{skill.title}</h3>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                  <div
                    className="bg-blue-500 h-2.5 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-600">{skill.level}%</p>
              </div>
            ))}
          </div>
        </div>

        {/* Outils */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Outils</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {skills.tools.map((tool, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
              >
                <div className="text-center mb-4">{tool.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{tool.title}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* CI/CD & Cloud */}
        {showMore && (
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">CI/CD & Cloud</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              {skills.ciCdAndCloud.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
                >
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bases de données */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Bases de Données</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {skills.databases.map((db, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{db.title}</h3>
                <p className="text-sm text-gray-600">{db.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bouton "Afficher plus" */}
        <div className="mt-8">
          <button
            onClick={handleShowMore}
            className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition"
          >
            {showMore ? 'Afficher moins' : 'Afficher plus'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Skills;
