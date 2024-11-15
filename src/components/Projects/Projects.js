import React from "react";
import "./Projects.css";
import ProjectsData from "./ProjectsData/ProjectData";

function Projects() {
  return (
    <div className="projects-section " id="projects">
      <div className="container">
        <div className="row">
          <h2 className="mb-4">My Projects</h2>
          {ProjectsData &&
            ProjectsData.map((projectData) => {
              return (
                <div className="col-md-6 col-sm-6 " key={projectData.id}>
                  <div className="project-box">
                    <div>
                      <img
                        src={projectData.imageURL}
                        alt="is here"
                        className="img-fluid"
                      />
                    </div>
                    <h4>{projectData.name}</h4>

                    <p>{projectData.Description}</p>

                    <a target="blank" href={projectData.link}>
                      <button className="btn btn-light text-dark">View</button>
                    </a>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Projects;
