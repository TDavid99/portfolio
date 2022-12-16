import React, { useState } from "react";
import { capitalizeFirstLetter } from "../../assets/utils/helpers";
import resume from '../../assets/img/';

function Resume () {
    const [portfolioPages] = useState([
        {
            name: 'resume'
        }
    ]);
    const [currentPage] = useState(portfolioPages[0]);
    return (
        <section className="bg-dark">
            <div className="container"></div>
        </section>
    )
}