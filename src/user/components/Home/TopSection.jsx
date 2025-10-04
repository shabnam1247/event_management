import React, { useState, useEffect } from "react";
import {
  Calendar,
  Users,
  Trophy,
  GraduationCap,
  ArrowRight,
  Play
} from "lucide-react";
import "../../components/Home.css"; 
const TopSection = ({ onGetStarted }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const featuredEvents = [
    {
      id: 1,
      title: "Annual Tech Symposium 2024",
      date: "Oct 15, 2024",
      time: "10:00 AM",
      location: "Main Auditorium",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400",
      category: "Technical",
      participants: 500,
      description:
        "Join industry experts and innovators for a day of cutting-edge technology discussions."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredEvents.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [featuredEvents.length]);

  return (
    <div className="home">
      {/* Navbar */}
      

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>
            Transform Your <span>College Events</span>
          </h1>
          <p>
            The most comprehensive platform for organizing, managing, and
            participating in college events.
          </p>
          <div className="hero-buttons">
            <button onClick={onGetStarted} className="btn-primary">
              Start Managing Events <ArrowRight className="icon" />
            </button>
            <button className="btn-secondary">
              <Play className="icon" /> Watch Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TopSection;


