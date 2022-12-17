import React from 'react';
import wishagram from './../../assets/img/apps/screenshot(429).png';
import tech from './../../assets/img/apps/screenshot(428).png'; 
import password from './../../assets/img/apps/screenshot(427).png';
import weather from './../../assets/img/apps/screenshot(430).png' ;
import notes from './../../assets/img/apps/screenshot().png';


const Projects =() => {
    const portfolioPages = [
        {
            id: 1,
            src: notes,
            name: 'Note Taker',
            link: 'https://github.com/TDavid99/note-taker',
            deploy: ' https://note-takerlol.herokuapp.com/',
          },
          {
            id: 2,
            src: password,
            name: 'Password Generator',
            repo: 'https://github.com/TDavid99/password-generator',
            link: 'https://github.com/TDavid99/password-generator#httpstdavid99githubiopassword-generator',
          },
          {
            id: 3,
            source: weather,
            name: 'Weather on the go',
            repo: 'https://github.com/CalebFunderburk/On-The-Go',
            deploy: 'https://calebfunderburk.github.io/On-The-Go/',
          },
          {
            id: 4,
            src: '',
            name: '',
            repo: '',
            link: '',
          },
          {
            id: 5,
            src: tech,
            name: 'Tech Blog',
            repo: 'https://github.com/TDavid99/tech-blog',
            link: 'https://afternoon-falls-50697.herokuapp.com/',
          },
          {
            id: 6,
            src: wishagram,
            Name: 'Wishagram',
            repo: 'https://github.com/pseudoDjnn/Wishagram',
            deploy: 'https://glacial-mesa-81435.herokuapp.com/',
          },
        ];
        return (
            <div>
                
            </div>
        )
    );
}
    


export default Projects; 
