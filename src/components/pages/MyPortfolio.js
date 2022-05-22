import React, { useEffect, useState } from "react";

const MyPortfolio = () => {
  const [projects, getProjects] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/projects")
      .then((res) => res.json())
      .then((data) => getProjects(data));
  }, []);

  return (
    <div className="my-24">
      <h1 className="text-center text-5xl">About Me</h1>
      <h3 className="text-center text-3xl my-5">My Projects</h3>
      <div className="overflow-x-auto my-5">
        <table className="table table-zebra w-50 mx-auto">
          <thead>
            <tr>
              <th>Name</th>
              <th className="text-center">Live Link</th>
            </tr>
          </thead>
          <tbody>
            {projects
              ? projects.map((project) => (
                  <tr key={project._id}>
                    <td>{project.projectName}</td>
                    <td>
                      <a
                        href={project.liveLink}
                        rel="noreferrer"
                        target="_blank"
                        className="underline text-primary hover:no-underline"
                      >
                        {project.liveLink}
                      </a>
                    </td>
                  </tr>
                ))
              : "Loading..."}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPortfolio;
