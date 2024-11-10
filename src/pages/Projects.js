import React, { useEffect, useRef } from 'react';
import './Projects.css';
import projectData from '../data/projectData.json'; // Import project data from JSON

function Projects() {
    const sectionsRef = useRef([]);

    useEffect(() => {
        const handleIntersect = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('project-page-section-visible');
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersect, { threshold: 0.1 });
        
        sectionsRef.current.forEach((section) => {
            if (section) observer.observe(section);
        });

        // Cleanup on component unmount
        return () => observer.disconnect();
    }, []);

    return (
        <div className="projects-page-container">
            {projectData.map((project, index) => (
                <div
                    key={index}
                    className="project-page-section"
                    ref={(el) => (sectionsRef.current[index] = el)}
                >
                    <div className="project-page-card">
                        <img
                            src={`${process.env.PUBLIC_URL}/data/${project.image}`}  // Images are in the public/data folder
                            alt={project.title}
                            className="project-page-image"
                        />
                        <div className="project-page-info">
                            <div className="project-page-title">{project.title}</div>
                            <div className="project-page-brief">{project.brief}</div>
                        </div>
                        <div className="project-page-description">
                            {project.description}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Projects;