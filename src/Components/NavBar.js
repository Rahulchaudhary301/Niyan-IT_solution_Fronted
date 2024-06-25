import React, { useEffect } from 'react'
import Aara1 from '../image/Aara1.png'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../image/logoo.png'



export default function NavBar() {

    const handleScroll = () => {
        // const Headboxes = document.querySelectorAll('.product-head-container');
        const boxes1 = document.querySelectorAll('.nab-body');
        // const boxes2 = document.querySelectorAll('.mm');
        // const boxes3 = document.querySelectorAll('.sec3');
        // const boxes4 = document.querySelectorAll('.sec4');


        boxes1.forEach(box => {

            if (window.scrollY >= 100) {
                box.classList.remove('up-nav-body');
                box.classList.add('dark-nav-body');
            } else if (window.scrollY >= 10) {
                box.classList.add('up-nav-body');
                box.classList.remove('dark-nav-body');
            } else {
                box.classList.remove('up-nav-body', 'dark-nav-body');
            }
        });



    };



    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navigation=useNavigate()

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const handleNavLinkClick = () => {
        scrollToTop();
    };

    return (
        <div>
            <div className="nab-body">
                <div className="nav-container">
                    <div onClick={()=>navigation('/')} className="logo">
                     <img src={logo}></img>
                    </div>

                    <div className="menu">
                      <ul>
                        <li><Link className='textnone' to='/' activeClassName="active" onClick={handleNavLinkClick} >HOME</Link></li>
                        <li><Link className='textnone' to='/About' activeClassName="active" onClick={handleNavLinkClick}>ABOUT</Link></li>
                        <li><Link className='textnone' to='/Service' activeClassName="active" onClick={handleNavLinkClick}>OUR SERVICES</Link></li>
                        <li><Link className='textnone' to='/contactUs' activeClassName="active" onClick={handleNavLinkClick}>CONTACT</Link></li>
                        <li><Link className='textnone' to='/Carrier' activeClassName="active" onClick={handleNavLinkClick}>CAREERS</Link></li>
                      </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}
