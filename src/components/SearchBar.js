import React, { useState, useEffect } from "react";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query.trim() !== "") {
      fetch(`https://api.example.com/search?q=${query}`)
        .then((response) => response.json())
        .then((data) => setResults(data.results))
        .catch((error) =>
          console.error("Erreur lors de la récupération des données", error)
        );
    } else {
      setResults([]);
    }
  }, [query]);

  return (
    <div className="relative w-64 mx-auto">
      <input
        type="text"
        placeholder="Rechercher..."
        className="w-full p-2.5 border rounded-md text-black bg-white focus:ring-2 focus:ring-blue-400"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {results.length > 0 && (
        <ul className="absolute left-0 w-full bg-white border rounded-md mt-1 shadow-lg">
          {results.map((item, index) => (
            <li key={index} className="p-2 hover:bg-gray-100 cursor-pointer">
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
