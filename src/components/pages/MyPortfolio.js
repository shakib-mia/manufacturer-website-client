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
      <div className="overflow-x-auto my-5">
        <img
          src="https://scontent.fcgp7-1.fna.fbcdn.net/v/t1.6435-9/132192317_743153366300514_6691279611866987971_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=174925&_nc_eui2=AeEUriUEJhah8LumJJrwR6DHJlMbSlboxqUmUxtKVujGpVdUk9SVDFQvK1TkWIpabOLEX0-LUm0e3PJD7PFMGQCD&_nc_ohc=mYi-UoechokAX_nLQaD&_nc_ht=scontent.fcgp7-1.fna&oh=00_AT96PFGu58paAYSx4ulTVc2b1I-MLjKONY38tIJspszrVw&oe=62B055A2"
          className="mx-auto rounded-full w-80"
          alt="userImage"
        />
        <table className="table table-zebra w-50 mx-auto">
          <tbody>
            <tr>
              <th>Name:</th>
              <td>Md. Shakib Mia</td>
            </tr>
            <tr>
              <th>Email:</th>
              <td>
                <a href="mailto:smdshakibmia2001@gmail.com">
                  smdshakibmia2001@gmail.com
                </a>
              </td>
            </tr>
            <tr>
              <th>Educational Background</th>
              <td>
                <table>
                  <tr>
                    <th>Heading</th>
                    <th>Year</th>
                    <th>Institution</th>
                  </tr>

                  <tr>
                    <td>Honors</td>
                    <td>2020 - Present</td>
                    <td>University of Chittagong</td>
                  </tr>
                  <tr>
                    <td>HSC</td>
                    <td>2019</td>
                    <td>BEPZA Public School and College,Chittagong</td>
                  </tr>
                  <tr>
                    <td>SSC</td>
                    <td>2017</td>
                    <td>Patenga Islamia Fazil (Degree) Madrasah</td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <th>Technologies/Skills</th>
              <td>
                <ul class="list-disc">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>Bootstrap (CSS Framework)</li>
                  <li>TailwindCSS (CSS Framework)</li>
                  <li>ReactJS (JavaScript Framework)</li>
                  <li>Firebase (Authentiation System)</li>
                  <li>Mongodb (Database System)</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
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
