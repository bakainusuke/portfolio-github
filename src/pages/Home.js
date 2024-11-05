import React, { useEffect, useRef } from "react";
import "./Home.css";

function Home() {
  const introRef = useRef(null);
  const projectRef = useRef(null);
  const hobbiesRef = useRef(null);

  // Function to toggle 'visible' class based on element visibility
  const toggleVisibleClass = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");  // Add when section is in view
      } else {
        entry.target.classList.remove("visible"); // Remove when section goes out of view
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(toggleVisibleClass, { threshold: 0.1 });
    
    // Observe each section
    observer.observe(introRef.current);
    observer.observe(projectRef.current);
    observer.observe(hobbiesRef.current);

    return () => observer.disconnect();
  }, []);

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
        <div className="title-large">Projects</div>
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