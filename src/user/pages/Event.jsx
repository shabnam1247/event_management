import React, { useState } from "react";
import "../components/Event.css";
import Header from "../components/Header";

const eventsData = [
  {
    id: 1,
    title: "Tech Symposium 2025",
    date: "2025-11-05",
    venue: "Auditorium Block A",
    category: "Upcoming",
    image: "/images/techsymposium.jpg",
    description: "A national-level tech fest showcasing innovation and research.",
  },
  {
    id: 2,
    title: "Cultural Fest",
    date: "2025-11-12",
    venue: "Open Stage",
    category: "Upcoming",
    image: "/images/culturalfest.jpg",
    description: "Dance, music, and cultural events from all departments.",
  },
  {
    id: 3,
    title: "Sports Meet",
    date: "2025-09-22",
    venue: "College Ground",
    category: "Past",
    image: "/images/sports.jpg",
    description: "Annual inter-departmental sports competition.",
  },
];

const EventPage = () => {
  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredEvents = eventsData.filter((event) => {
    const matchesCategory = filter === "All" || event.category === filter;
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Header/>

      <section className="events-grid">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <div key={event.id} className="event-card">
              <img src={event.image} alt={event.title} />
              <div className="event-info">
                <h3>{event.title}</h3>
                <p className="date">📅 {event.date}</p>
                <p className="venue">📍 {event.venue}</p>
                <p className="desc">{event.description}</p>
                <button className="register-btn">View more</button>
              </div>
            </div>
          ))
        ) : (
          <p className="no-events">No events found.</p>
        )}
      </section>
    </>
  );
};

export default EventPage;
