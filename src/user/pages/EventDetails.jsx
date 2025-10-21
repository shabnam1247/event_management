import React from "react";
import "../components/EventDetails.css"
export default function EventPage() {
  const event = {
    title: "Tech Innovators Summit 2025",
    date: "November 15, 2025",
    location: "TechPark Auditorium, Bangalore",
    description:
      "Join the biggest technology event of the year where industry leaders, innovators, and developers come together to share ideas, launch projects, and explore the future of AI and software development.",
    image:
      "https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=1600&q=80",
    schedule: [
      { time: "09:00 AM", activity: "Opening Ceremony" },
      { time: "10:00 AM", activity: "Keynote by Elon Dsouza" },
      { time: "11:30 AM", activity: "Panel: Future of AI" },
      { time: "01:00 PM", activity: "Networking Lunch" },
      { time: "02:30 PM", activity: "Tech Demos & Startup Pitches" },
      { time: "04:00 PM", activity: "Closing Remarks" },
    ],
    speakers: [
      {
        name: "Elon Dsouza",
        title: "CEO, FutureTech Labs",
        img: "https://randomuser.me/api/portraits/men/32.jpg",
      },
      {
        name: "Dr. Riya Nair",
        title: "AI Researcher, DeepVision",
        img: "https://randomuser.me/api/portraits/women/65.jpg",
      },
      {
        name: "Arjun Patel",
        title: "CTO, InnovateX",
        img: "https://randomuser.me/api/portraits/men/44.jpg",
      },
    ],
  };

  return (
    <div className="event-page">
      <div className="event-hero" style={{ backgroundImage: `url(${event.image})` }}>
        <div className="overlay">
          <h1 className="event-title">{event.title}</h1>
          <p className="event-info">
            📅 {event.date} | 📍 {event.location}
          </p>
          <button className="register-btn">Register Now</button>
        </div>
      </div>

      <div className="event-details">
        <section className="event-section">
          <h2>About the Event</h2>
          <p>{event.description}</p>
        </section>

        <section className="event-section">
          <h2>Speakers</h2>
          <div className="speakers-grid">
            {event.speakers.map((speaker, index) => (
              <div className="speaker-card" key={index}>
                <img src={speaker.img} alt={speaker.name} />
                <h3>{speaker.name}</h3>
                <p>{speaker.title}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="event-section">
          <h2>Schedule</h2>
          <div className="schedule-list">
            {event.schedule.map((item, index) => (
              <div className="schedule-item" key={index}>
                <span className="time">{item.time}</span>
                <span className="activity">{item.activity}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
