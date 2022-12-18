import React from 'react';
import About from '../About';
import Projects from '../Projects';
import Contact from '../Contact';

function Pages({currentPage}) {
    const showpage = () => {
        switch (currentPage.name) {
            case 'about Me' :
                return <About Me/>
                case 'portfolio':
                    return <Projects/>
                    case 'contact':
                        return <Contact/>
                        default:
                            return <About/> 
        }
    }
    return (
       <div>{showpage()}</div>
    );
}



// function pages() {
//     return (
//         <div> This is pages...</div>
        
        // )
    // }
    export default Pages;
