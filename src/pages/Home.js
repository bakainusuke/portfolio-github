import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import projectData from "../data/projectData.json"; // Import JSON data

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

  // Handle next and previous project navigation
  const handleNextProject = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === projectData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevProject = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === 0 ? projectData.length - 1 : prevIndex - 1
    );
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
          <button className="project-button" onClick={() => navigate("/projects")}>
            Go to Projects
          </button>
        </header>
        
        {/* Project Carousel */}
        <div className="carousel">
          <button className="carousel-button left" onClick={handlePrevProject}>{"<"}</button>
          <div className="project-card">
            <h3 className="project-title">{projectData[currentProjectIndex].title}</h3>
            <p className="project-brief">{projectData[currentProjectIndex].brief}</p>
            <div className="project-image">
              <div className="placeholder-image">Image Placeholder</div>
            </div>
          </div>
          <button className="carousel-button right" onClick={handleNextProject}>{">"}</button>
        </div>
      </section>

      {/* Hobbies Section */}
      <section className="section hobbies-section" ref={hobbiesRef}>
        <div className="title-large">Hobbies</div>
        <div className="hobbies-container">
          <p>This is the hobbies section. Add hobbies details here.</p>
        </div>
      </section>
    </div>
  );
}

export default Home;