import React from "react";
import "../styles/Projects.css"; // reuse your existing CSS

const achievements = [
  {
    title: "2nd Prize Chess Competition",
    organization: "Bharathidasan University",
    year: 2025,
    icon: "🏆",
    image: "/Assets/wheatherAppThumbnail.png", // optional: add certificate image URL
  },
  {
    title: "LEO Club President",
    organization: "Mookambigai College of Engineering",
    year: 2025,
    icon: "🦁",
    image: "/Assets/wheatherAppThumbnail.png",
  },
  {
    title: "Blood Donation Campaign",
    organization: "Mookambigai College of Engineering",
    year: 2025,
    icon: "🩸",
    image: "/Assets/wheatherAppThumbnail.png",
  },
];

const certificates = [
  {
    title: "Coding Competition Certificate",
    organization: "XYZ College",
    year: 2024,
    icon: "📜",
    image: "/Assets/wheatherAppThumbnail.png", // optional thumbnail
  },
  {
    title: "Hackathon Winner Certificate",
    organization: "ABC Organization",
    year: 2024,
    icon: "📜",
    image: "/Assets/wheatherAppThumbnail.png",
  },
];

const Certificates = () => {
  return (
    <section id="achievements" className="projects-section">
      <h2 className="section-title block">Achievements & Certificates</h2>

      <div className="project-grid">
        {/* Achievements */}
        {achievements.map((item, index) => (
          <div key={index} className="project-card">
            <div className="achievement-icon">{item.icon}</div>
            <div className="project-content">
              <h3 className="project-title">{item.title}</h3>
              <p className="project-description">{item.organization}</p>
              <span className="tech-badge">Year: {item.year}</span>
            </div>
          </div>
        ))}

        {/* Certificates */}
        {certificates.map((item, index) => (
          <div key={index} className="project-card">
            {item.image && (
              <img
                src={item.image}
                alt={item.title}
                className="project-image"
              />
            )}
            <div className="project-content">
              <div className="achievement-icon">{item.icon}</div>
              <h3 className="project-title">{item.title}</h3>
              <p className="project-description">{item.organization}</p>
              <span className="tech-badge">Year: {item.year}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
