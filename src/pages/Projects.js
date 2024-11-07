import React, { useState } from "react";
import "./Projects.css";
import projectData from "../data/projectData.json"; // Assuming the data is stored in projectData.json

const Projects = () => {
  const [visible, setVisible] = useState([]);

  const toggleVisibleClass = (index) => {
    setVisible((prevVisible) =>
      prevVisible.includes(index)
        ? prevVisible.filter((item) => item !== index)
        : [...prevVisible, index]
    );
  };

  return (
    <div className="projects-container">
      {projectData.map((project, index) => (
        <div
          key={index}
          className={`project-section ${visible.includes(index) ? "visible" : ""}`}
          onClick={() => toggleVisibleClass(index)}
        >
          <div className="project-card">
            <img
              className="project-image"
              src={`./images/${project.image}`} // Assuming images are in the 'images' folder
              alt={project.title}
            />
            <div className="project-info">
              <h2 className="project-title">{project.title}</h2>
              <p className="project-brief">{project.brief}</p>
            </div>
          </div>

          <div className={`project-description ${visible.includes(index) ? "show" : ""}`}>
            <p>{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;