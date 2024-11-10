import React, { useEffect } from 'react';
import './Projects.css';
import projectData from '../data/projectData.json'; // Import project data from JSON

function Projects() {
    // useEffect(() => {
    //     const handleScroll = () => {
    //         const sections = document.querySelectorAll('.project-page-section');
    //         sections.forEach(section => {
    //             const rect = section.getBoundingClientRect();
    //             if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
    //                 section.classList.add('project-page-section-visible');
    //             }
    //         });
    //     };

        
    //     handleScroll();

        
    //     window.addEventListener('scroll', handleScroll);

    //     // Cleanup on component unmount
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);

    return (
        <div className="projects-page-container">
            {projectData.map((project, index) => (
                <div key={index} className="project-page-section">
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