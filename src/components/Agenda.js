import React, { useState, useEffect } from 'react';

const fetchEvents = async (year, month) => {
  const events = [
    { id: 1, date: '2025-02-10', title: 'Réunion avec le client', description: 'Discuter des besoins du projet.' },
    { id: 2, date: '2025-02-15', title: 'Développement de nouvelles fonctionnalités', description: 'Travail sur l\'implémentation des nouvelles fonctionnalités.' },
    { id: 3, date: '2025-02-20', title: 'Lancement du projet', description: 'Lancement officiel du projet.' },
    { id: 4, date: '2025-03-01', title: 'Réunion stratégique', description: 'Réunion pour discuter des objectifs pour le mois prochain.' },
  ];
  
  return events.filter(event => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() === year && eventDate.getMonth() === month;
  });
};

const Agenda = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showAllDays, setShowAllDays] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const eventsData = await fetchEvents(currentDate.getFullYear(), currentDate.getMonth());
      setEvents(eventsData);
      setLoading(false);
    };
    fetchData();
  }, [currentDate]);

  const getEventsForDate = (date) => {
    return events.find(event => new Date(event.date).getDate() === date);
  };

  const handleChangeMonth = (direction) => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + direction)));
    setShowAllDays(false);
  };

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  const closeModal = () => {
    setSelectedEvent(null);
  };

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const startDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
  const previousMonthDays = startDay === 0 ? 6 : startDay - 1;

  return (
    <section className="container mx-auto py-8">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold mb-4">Agenda</h2>
        <button onClick={() => handleChangeMonth(-1)} className="px-4 py-2 mr-4 bg-gray-800 text-white rounded">Précédent</button>
        <span className="text-2xl font-bold">{currentDate.toLocaleString('fr-FR', { month: 'long', year: 'numeric' })}</span>
        <button onClick={() => handleChangeMonth(1)} className="px-4 py-2 ml-4 bg-gray-800 text-white rounded">Suivant</button>
      </div>

      {loading ? (
        <div className="text-center text-gray-500">Chargement des événements...</div>
      ) : (
        <>
          <div className="grid grid-cols-7 gap-4">
            {["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"].map(day => (
              <div key={day} className="text-center font-bold">{day}</div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-4">
            {[...Array(previousMonthDays)].map((_, index) => (
              <div key={`prev-${index}`} className="h-24"></div>
            ))}
            {[...Array(daysInMonth)].slice(0, showAllDays ? daysInMonth : 14).map((_, day) => {
              const currentDay = day + 1;
              const eventForDay = getEventsForDate(currentDay);
              return (
                <div key={currentDay} className="relative h-24 bg-white border p-2 rounded-lg shadow-md flex flex-col items-center justify-center">
                  <span className="font-semibold">{currentDay}</span>
                  {eventForDay && (
                    <div
                      className="w-3 h-3 bg-blue-600 rounded-full mt-1 cursor-pointer"
                      onClick={() => handleEventClick(eventForDay)}
                    ></div>
                  )}
                </div>
              );
            })}
          </div>
          
          <div className="text-center mt-4">
            <button 
              className="px-4 py-2 bg-blue-600 text-white rounded" 
              onClick={() => setShowAllDays(!showAllDays)}
            >
              {showAllDays ? 'Voir moins' : 'Voir plus'}
            </button>
          </div>
        </>
      )}

      {selectedEvent && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center" onClick={closeModal}>
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-xl font-bold">{selectedEvent.title}</h3>
            <p className="text-gray-700">{selectedEvent.description}</p>
            <button className="mt-4 px-4 py-2 bg-red-600 text-white rounded" onClick={closeModal}>Fermer</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Agenda;
