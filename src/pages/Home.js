/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import projectData from "../data/projectData.json"; // Import project data from JSON

function Home() {
  const introRef = useRef(null);
  const projectRef = useRef(null);
  const hobbiesRef = useRef(null);
  const navigate = useNavigate();
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const toggleVisibleClass = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(toggleVisibleClass, { threshold: 0.1 });
    observer.observe(introRef.current);
    observer.observe(projectRef.current);
    observer.observe(hobbiesRef.current);

    return () => observer.disconnect();
  }, []);

  const handleNextProject = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projectData.length);
  };

  const handlePrevProject = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === 0 ? projectData.length - 1 : prevIndex - 1
    );
  };

    const handleProjectButtonClick = () => {
    navigate("/projects");
  };

  return (
    <div className="home-container">
      {/* Intro Section */}
      <section className="section intro-section" ref={introRef}>
        <div className="section-content-responsive">
          <header className="welcome-header row">
            <h1 className="title-large">Huy Do</h1>
            <div className="subtitle">
              <p>Bachelor of Computer Science</p>
            </div>
          </header>
        </div>
        <div className="self-intro">
          <p>This is a short self-introduction text. Replace this with your own content.</p>
        </div>
      </section>

      {/* Project Section */}
      <section className="section project-section" ref={projectRef}>
        <header className="project-header row">
          <h2 className="title-large">Projects</h2>
          <button className="project-button" onClick={handleProjectButtonClick}>
            Go to Projects
          </button>
        </header>
        <div>
        <div
          className="project-card"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/data/${projectData[currentProjectIndex].image})`
          }}
        >
          <div className="project-content"  key={currentProjectIndex}>
            <h3 className="project-title">{projectData[currentProjectIndex].title}</h3>
            <p className="project-brief">{projectData[currentProjectIndex].brief}</p>
          </div>
          
        </div>
        <div className="project-controls">
          <button onClick={handlePrevProject} className="project-nav-button">←</button>
          <button onClick={handleNextProject} className="project-nav-button">→</button>
        </div>
        </div>
        
      </section>

      {/* Hobbies Section */}
      <section className="section hobbies-section" ref={hobbiesRef}>
        <div className="title-large">Hobbies</div>
        <div className="hobbies-container">
          <div className="hobbies-music">
            <h3 className="title-music">Music</h3>
            <p className="music-brief">Laufey is one of my favorite artists. Her music brings a deep, elegent vibe to my life.</p>

            <iframe
            className="spotify-iframe"
            src="https://open.spotify.com/embed/album/1hmlhl74JfLyUqmqtCwvFb?utm_source=generator"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            ></iframe>

          </div>
        
        </div>
        
      </section>
    </div>
  );
}

export default Home;