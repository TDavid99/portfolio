import React, { useState } from "react";
import { capitalizeFirstLetter } from "../../assets/utils/helpers";

function Resume () {
    const [portfolioPages] = useState([
        {
            name: 'resume'
        }
    ]);
    const [currentPage] = useState(portfolioPages[0]);
    return (
        <section className="bg-dark">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 mx-auto text-dark mb-4">
                        <h1 className="text-center mt-5">{capitalizeFirstLetter(currentPage.name)}</h1>
                        <hr className="light my-4"/>
                        <p className="text-center">
                            Upload my <a href="https://my.indeed.com/p/davidt-p68cxbh" className='text-faded dark-link' download>resume</a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Resume; 