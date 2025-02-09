import React, { useState } from 'react';

const ArticleCard = ({ article }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Carte de l'article */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden transition duration-300 hover:scale-105 h-full flex flex-col">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-56 object-cover"
        />
        <div className="p-6 flex flex-col flex-grow">
          <h2 className="text-xl font-semibold text-gray-800">{article.title}</h2>
          <h3 className="text-lg text-gray-600">{article.subtitle}</h3>
          <p className="text-gray-700 line-clamp-3 my-3">{article.content}</p>

          {/* Conteneur auteur + date + bouton */}
          <div className="flex items-center justify-between mt-auto border-t pt-4 w-full">
            <p className="text-gray-500 text-sm">
              Publié par <span className="font-medium">{article.author}</span> le{" "}
              {new Date(article.createdAt).toLocaleDateString()}
            </p>
            <button
              onClick={() => setIsOpen(true)}
              className="px-5 py-2 bg-blue-600 text-white rounded-lg text-lg font-medium hover:bg-blue-700 transition duration-300 transform hover:scale-105"
            >
              En savoir plus &rarr;
            </button>
          </div>
        </div>
      </div>

      {/* Modal pour afficher l'article en détail */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white w-11/12 md:w-3/4 lg:w-1/2 p-6 rounded-lg shadow-xl relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 bg-gray-300 hover:bg-gray-400 rounded-full w-8 h-8 flex items-center justify-center"
            >
              ✕
            </button>

            <img
              src={article.image}
              alt={article.title}
              className="w-full h-60 object-cover rounded-lg"
            />
            <h2 className="text-2xl font-bold text-gray-800 mt-4">{article.title}</h2>
            <h3 className="text-lg text-gray-600">{article.subtitle}</h3>
            <p className="text-gray-700 text-lg">{article.content}</p>
            <p className="text-gray-500 text-sm my-3">
              Publié par <span className="font-medium">{article.author}</span> le{" "}
              {new Date(article.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ArticleCard;
