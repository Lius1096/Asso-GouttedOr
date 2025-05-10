import React from 'react';
import { downloadQuote } from '../services/projectService';

const DownloadQuoteButton = ({ fileName }) => {
  const handleDownload = async () => {
    try {
      await downloadQuote(fileName);
    } catch (error) {
      alert("Échec du téléchargement du devis.");
    }
  };

  return (
    <button
      onClick={handleDownload}
      className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded shadow"
    >
      Télécharger le devis
    </button>
  );
};

export default DownloadQuoteButton;
