import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Home.css";

function Home() {
  const introRef = useRef(null);
  const projectRef = useRef(null);
  const hobbiesRef = useRef(null);
  const navigate = useNavigate(); // Initialize navigate function

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

  // Function to handle button click and navigate to /projects
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
        <div className="project-container">
          <p>This is the project section. Add project details here.</p>
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