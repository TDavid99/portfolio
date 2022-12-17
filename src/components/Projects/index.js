import React from 'react';
import wishagram from '../../assets/img/apps/Screenshot (429).png';
import tech from '../../assets/img/apps/Screenshot (428).png'; 
import password from '../../assets/img/apps/Screenshot (427).png';
import weather from '../../assets/img/apps/Screenshot (430).png' ;
import notes from '../../assets/img/apps/notetaker.png';

const Projects =() => {
    const portfolioPages = [
        {
            id: 1,
            source: notes,
            name: 'Note Taker',
            repo: 'https://github.com/TDavid99/note-taker',
            link: ' https://note-takerlol.herokuapp.com/',
          },
          {
            id: 2,
            source: password,
            name: 'Password Generator',
            repo: 'https://github.com/TDavid99/password-generator',
            link: 'https://github.com/TDavid99/password-generator#httpstdavid99githubiopassword-generator',
          },
          {
            id: 3,
            source: weather,
            name: 'Weather on the go',
            repo: 'https://github.com/CalebFunderburk/On-The-Go',
            link: 'https://calebfunderburk.github.io/On-The-Go/',
          },
          {
            id: 4,
            source: '',
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
            source: wishagram,
            name: 'Wishagram',
            repo: 'https://github.com/pseudoDjnn/Wishagram',
            link: 'https://glacial-mesa-81435.herokuapp.com/',
          },
        ];
        return (
            <div
            name="portfolio"
            className="bg-gradient-from-neutral-800 via-zinc-700 to-neutral-900 w-full md:h-screen"
          >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
              <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4">
                  Portfolio Projects
                </p>
                <p className="py-8">
                 projects for my 2022 portfolio.
                </p>
              </div>
      
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                {portfolioPages.map(({ id, source, name, link, repo }) => (
                  <div key={id} className="shadow-md shadow-slate-600 rounded-lg">
                    <img
                      src={source}
                      alt="demo"
                      className="rounded-md duration-700 hover:scale-105"
                    />
                    <div className="flex items-center justify-center">
                      <a
                        href={repo}
                        className="w-1/2 px-6 py-2 m-4 duration-300 hover:scale-105"
                      >
                        {name}
                      </a>
                      <a
                        href={link}
                        className="w-1/2 px-6 py-2 m-4 duration-300 hover:scale-105"
                      >
                        Deployment
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      };
                


export default Projects; 
