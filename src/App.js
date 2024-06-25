
import './App.css';
import ContactsUs from './Components/ContactsUs';
import Footer from './Components/Footer';
import HomePage from './Components/HomePage';
import LastFooter from './Components/LastFooter';
import NavBar from './Components/NavBar';
import { FaArrowUp } from "react-icons/fa";

import { Routes, Route, Router, BrowserRouter, Link } from 'react-router-dom'
import ServiceData from './Components/ServiceData';
import TechExpert from './Components/TechExpert';
import AboutUs from './Components/AboutUs';
import Carrier from './Components/Carrier';
import { useEffect, useState } from 'react';

function App() {

  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/ContactUs' element={<ContactsUs />} />
          <Route path='/Service' element={<ServiceData />} />
          <Route path='/About' element={<AboutUs />} />
          <Route path='/Carrier' element={<Carrier />} />
        </Routes>
        <TechExpert/>
        <Footer />
        
        {
        (
          showButton &&  <div onClick={scrollToTop} className="smallbar"><FaArrowUp className='forward'/> </div>
        )
       }
        <LastFooter />
      </BrowserRouter>



    </>
  );
}

export default App;
