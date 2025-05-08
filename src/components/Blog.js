import React from 'react';

const blogPosts = [
  {
    id: 1,
    title: "Optimiser le SEO d'un site React",
    date: "05 Mai 2025",
    description: "Découvrez comment améliorer le référencement naturel (SEO) de vos applications React grâce à des techniques modernes et des outils simples.",
    image: "https://source.unsplash.com/featured/?seo,code",
    link: "#",
  },
  {
    id: 2,
    title: "Comprendre l’architecture REST vs GraphQL",
    date: "20 Avril 2025",
    description: "Une comparaison claire entre les API REST et GraphQL pour mieux choisir selon vos besoins en développement web.",
    image: "https://source.unsplash.com/featured/?graphql,api",
    link: "#",
  },
  {
    id: 3,
    title: "Déployer un projet Node.js avec Docker",
    date: "15 Avril 2025",
    description: "Un guide complet étape par étape pour containeriser et déployer une application Node.js avec Docker.",
    image: "https://source.unsplash.com/featured/?docker,server",
    link: "#",
  },
];

const Blog = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4 text-gray-800">Blog & Ressources</h2>
        <p className="text-gray-600 mb-10">
          Explore mes articles pour apprendre, comprendre ou approfondir certains sujets techniques.
        </p>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6 text-left">
                <h3 className="text-2xl font-semibold mb-2 text-gray-800">{post.title}</h3>
                <p className="text-sm text-gray-400 mb-2">{post.date}</p>
                <p className="text-gray-600 mb-4">{post.description}</p>
                <a
                  href={post.link}
                  className="inline-block text-blue-600 hover:underline font-medium"
                >
                  Lire l'article →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
