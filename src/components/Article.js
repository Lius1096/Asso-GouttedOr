import React, { useEffect, useState } from 'react';
import { fetchArticles } from '../services/articleService';
import ArticleCard from './ArticleCard';

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getArticles = async () => {
      try {
        const data = await fetchArticles();
        setArticles(data);
      } catch (error) {
        console.error("Erreur lors de la récupération des articles :", error);
      } finally {
        setLoading(false);
      }
    };

    getArticles();
  }, []);

  if (loading) {
    return <p className="text-center text-gray-600">Chargement des articles...</p>;
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Nos Articles</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <ArticleCard key={article._id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default ArticlesList;
