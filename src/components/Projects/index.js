import React,{useState} from 'react';
import { capitalizeFirstLetter } from '../../assets/utils/helpers';

function Projects ()  {
    const [portfolioPages ]= useState([
      {
        name:'projects'
      }
    ]);
    const [currentPage]= useState(portfolioPages[0]);
    const [projects] = useState([

      {
        image: require('../../assets/img/apps/').default,
        source: notes,
        name: 'Note Taker',
        repo: 'https://github.com/TDavid99/note-taker',
        link: ' https://note-takerlol.herokuapp.com/',
      },
      {
            image: require('../../assets/img/apps/').default,
            source: password,
            name: 'Password Generator',
            repo: 'https://github.com/TDavid99/password-generator',
            link: 'https://github.com/TDavid99/password-generator#httpstdavid99githubiopassword-generator',
          },
          {
            image: require('../../assets/img/apps/').default,
            source: weather,
            name: 'Weather on the go',
            repo: 'https://github.com/CalebFunderburk/On-The-Go',
            link: 'https://calebfunderburk.github.io/On-The-Go/',
          },
          {
            image: require('../../assets/img/apps/').default,
            source: '',
            name: '',
            repo: '',
            link: '',
          },
          {
            image: require('../../assets/img/apps/').default,
            source: tech,
            name: 'Tech Blog',
            repo: 'https://github.com/TDavid99/tech-blog',
            link: 'https://afternoon-falls-50697.herokuapp.com/',
          },
          {
            image: require('../../assets/img/apps/').default,
            source: wishagram,
            name: 'Wishagram',
            repo: 'https://github.com/pseudoDjnn/Wishagram',
            link: 'https://glacial-mesa-81435.herokuapp.com/',
          },
        ]);
      
        return(
          <section className='p-0 bg-light'>
            <div className='container-fluid p-0'>
              <h1 className='text-end padding'> {capitalizeFirstLette(currentPage.name)}</h1>
              <hr className='my-3'/> 
              <div className='row'>
                {projects.map((item, i) => (
                  <div className='col-lg-4 col-sm-6' key={1}>
                    <div className='project-container'>
                      <img src={item.img}alt={item.source}className='img-fluid'
                      style={{width:"80%"}}/>
                     <div className='project-container-text'>
                      <div className='project-container-text-topic'>
                        {(<p className='project-name' {...item.})}
                      </div>
                      </div> 
                ))}
              </div>
            </div>
          </section>
        )
        

export default Projects;
