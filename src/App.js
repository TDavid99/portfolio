import React, {useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Pages from './components/Pages';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [portfolioPages] = useState([
    {name: "about Me"},
    {name: "portfolio"},
    {name: "contact"},
  ]);

  const [currentPage, setCurrentPage] = useState(portfolioPages[0]);

  return (
    <div>
      <Header>
        <Nav portfolioPages={portfolioPages} setCurrentPage={setCurrentPage} currentPage={currentPage}></Nav>
      </Header>
      <main>
        <Pages currentPage={currentPage}></Pages>
      </main>
      <Footer/>
    </div>
  );
}

export default App;