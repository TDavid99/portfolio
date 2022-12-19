import React, { useState } from "react";
import { capitalizeFirstLetter } from "../../assets/utils/helpers";
import Profilepic from "../../assets/img/apps/profilepic.JPG";


function About() {
  const [portfolioPages] = useState([
    {
      name: "How about me",
    },
  ]);

  const [currentPage] = useState(portfolioPages[0]);
  return (
    <div className="masthead text-center text-primary d-flex bg-light">
      <div className="container my-auto">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <h1>{capitalizeFirstLetter(currentPage.name)}</h1>
            <hr />
            <p>
              Meeting me is like ordering 10 chickens wings and getting 11.
              Before start my full stack web journey I was about in construction
              building sandhills community college newest addition "Foundation
              Hall". Having the discipline to learn several frontend and backend
              applications and languages has change the way I think and manage my time.
              In postive way moving foward with my fullstack journey. I enjoy being able to access my work on 
              the go. 
            </p>
          </div>
        </div>
      </div>
    <figure className = 'profile-image'>
    <img src = {Profilepic} alt = 'david Townsend'/>
    </figure>

    </div>
  );
}

export default About;
