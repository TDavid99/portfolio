import React from "react";
import  linkedin  from "../../assets/img/apps/linkedin.png" ;

import githubmark from "../../assets/img/apps/github-mark-white1.png"

function footer() {
    const icons = [
        {
            name:'fab fa-github',
            link:'https://github.com/TDavid99',
            icon: githubmark
        },
        {
            name: 'fab fa-linkedin',
            link: 'https://www.linkedin.com/in/david-townsend-8a7989244/',
            icon: linkedin
        },
    ]
    return (
        <section>
            <footer className=''>
                <div className='row'>
                    <div className=' text-center -white bg-dark'>
                        {icons.map(icon => (
                            <a href={icon.link} key={icon.name} target="_blank" rel='noopener noreferrer'>
                                <img src={icon.icon} alt=""/>
                                </a>
                        ))}
                    </div>
                </div>
            </footer>
        </section>
    );
}

export default footer;
