const references = [
    {
      name: "Claire Dupont",
      title: "CEO chez WebInnov",
      image: "../asset/dev.png",
      quote: "Sofiane est un développeur fiable et proactif. Sa rigueur et sa réactivité ont été précieuses pour notre projet.",
    },
    {
      name: "Marc Lefèvre",
      title: "CTO chez DevCorp",
      image: "/images/marc.jpg",
      quote: "Une excellente collaboration avec Sofiane. Il comprend vite les enjeux techniques et propose des solutions efficaces.",
    },
    {
      name: "Partenaire X",
      title: "Partenaire officiel",
      image: "/images/partner-logo.png",
      quote: "Un partenariat fluide et professionnel. Sofiane s’adapte rapidement aux environnements d’équipe variés.",
    },
  ];
  
  const References = () => {
    return (
      <section className="bg-gray-50 py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Références Professionnelles
          </h2>
  
          <div className="grid md:grid-cols-3 gap-8">
            {references.map((ref, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md text-center hover:shadow-lg transition"
              >
                <img
                  src={ref.image}
                  alt={ref.name}
                  className="w-20 h-20 mx-auto rounded-full object-cover mb-4"
                />
                <p className="italic text-gray-600 mb-4">"{ref.quote}"</p>
                <h3 className="text-lg font-semibold text-gray-800">{ref.name}</h3>
                <p className="text-sm text-gray-500">{ref.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default References;
  