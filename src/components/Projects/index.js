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
      
        
        

export default Projects;
