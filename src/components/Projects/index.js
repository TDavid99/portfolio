import React, { useState } from "react";
import { capitalizeFirstLetter } from "../../assets/utils/helpers";
import firstImage from "../../assets/img/apps/notetaker.png";
import secondImage from "../../assets/img/apps/Screenshot (427).png";
import thirdImage from "../../assets/img/apps/Screenshot (430).png";
import fourthImage from "../../assets/img/apps/Screenshot (326).png";
import fiveImage from "../../assets/img/apps/Screenshot (428).png";
import sixImage from "../../assets/img/apps/Screenshot (429).png";


function Projects() {
  const [portfolioPages] = useState([
    {
      name: "Projects",
    },
  ]);
  const [currentPage] = useState(portfolioPages[0]);
  const [projects] = useState([
    {
      image: firstImage,
      source: "Note Taker",
      name: "Note Taker",
      repo: "https://github.com/TDavid99/note-taker",
      link: " https://note-takerlol.herokuapp.com/",
    },
    {
      image: secondImage,
      source: "Password Generator",
      name: "Password Generator",
      repo: "https://github.com/TDavid99/password-generator",
      link: "https://github.com/TDavid99/password-generator#httpstdavid99githubiopassword-generator",
    },
    {
      image: thirdImage,
      source: "Weather on the go",
      name: "Weather on the go",
      repo: "https://github.com/CalebFunderburk/On-The-Go",
      link: "https://calebfunderburk.github.io/On-The-Go/",
    },
    {
      image: fourthImage,
      source: "Team Profile Generator",
      name: "Team profile generator",
      repo: "https://github.com/TDavid99/Team-proflie-generator",
      link: "https://drive.google.com/file/d/1xkti61clAEcvFH9_YghxJWcg_i9Dx0YT/view",
    },
    {
      image: fiveImage,
      source: "Tech Blog",
      name: "Tech Blog",
      repo: "https://github.com/TDavid99/tech-blog",
      link: "https://afternoon-falls-50697.herokuapp.com/",
    },
    {
      image: sixImage,
      source: "wishagram",
      name: "Wishagram",
      repo: "https://github.com/pseudoDjnn/Wishagram",
      link: "https://glacial-mesa-81435.herokuapp.com/",
    },
  ]);

  return (
    <section className="p-0 bg-dark">
      <div className="container-fluid p-0">
        <h1 className="text-cemter padding">
          {capitalizeFirstLetter(currentPage.name)}
        </h1>
        <hr className="my-3" />
        <div className="row">
          {projects.map((item, i) => (
            <div className="col-lg-4 col-sm-6 bg-dark" key={1}>
              <div className="project-container">
                <img
                  src={item.image}
                  alt={item.source}
                  className="img-fluid"
                  style={{ width: "100%" }}
                />
                <div className="project-container-text">
                  <div className="project-container-text-topic">
                    {
                      <a
                        href={item.repo}
                        className="project-category text-faded"
                      >
                        {" "}
                        Github Repo
                      </a>
                    }
                    &nbsp;
                    {
                      <a
                        href={item.link}
                        className="project-category text-faded"
                      >
                        {item.name}
                      </a>
                    }
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Projects;
