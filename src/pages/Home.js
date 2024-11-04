import React, { useEffect, useRef } from "react";
import "./Home.css";

function Home() {
  const introRef = useRef(null);
  const projectRef = useRef(null);
  const hobbiesRef = useRef(null);

  // Function to add 'visible' class when elements are in viewport
  const addVisibleClass = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // Stop observing once visible
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(addVisibleClass, { threshold: 0.1 });
    
    // Observe each section
    observer.observe(introRef.current);
    observer.observe(projectRef.current);
    observer.observe(hobbiesRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="home-container">
      {/* Intro Section */}
      <div className="section intro-section" ref={introRef}>
        <div className="title-large">HUY DO</div>
        <div className="subtitle">Bachelor of Computer Science</div>
        <div className="self-intro">This is a short self-introduction text. Replace this with your own content.</div>
      </div>
      

      {/* Project Section */}
      <div className="section project-section" ref={projectRef}>
        <div className="title-large">Projects</div>
        <div className="project-container">
          {/* Replace with actual project content */}
          <p>This is the project section. Add project details here.</p>
        </div>
      </div>

      {/* Hobbies Section */}
      <div className="section hobbies-section" ref={hobbiesRef}>
        <div className="title-large">Hobbies</div>
        <div className="hobbies-container">
          {/* Replace with actual hobbies content */}
          <p>This is the hobbies section. Add hobbies details here.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;