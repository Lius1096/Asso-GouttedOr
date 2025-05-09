// components/QuoteDownload.js
const QuoteDownload = ({ filename }) => {
    const handleDownload = () => {
      const url = `/api/download/${filename}`;
      window.open(url, "_blank");
    };
  
    return (
      <div className="mt-4 text-center">
        <button
          onClick={handleDownload}
          className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
        >
          Télécharger le devis PDF
        </button>
      </div>
    );
  };
  
  export default QuoteDownload;
  