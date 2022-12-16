import React from 'react';
import About from '../About';
import Portfolio from '../Projects';
import Contact from '../Contact';

function Pages({currentPage}) {
    const showpage = () => {
        switch (currentPage.name) {
            case 'about Me' :
                return <About Me/>
                case 'portfolio':
                    return <Portfolio/>
                    case 'contact':
                        return <Contact/>
                        default:
                            return <About/> 
        }
    };
    return (
        showpage()
    );
}



function Pages() {
    return (
        <div> This is pages...</div>
        
        )
    }
    export default Pages;
