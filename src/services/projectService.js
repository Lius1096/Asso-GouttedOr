import api from './api';

export const downloadQuote = async (fileName) => {
  try {
    const response = await api.get(`/api/project-ideas/download/${fileName}`, {
      responseType: 'blob',
    });

    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', fileName);
    document.body.appendChild(link);
    link.click();
    link.remove();
  } catch (error) {
    console.error("Erreur lors du téléchargement du devis :", error);
    throw error;
  }
};
