import React, { useEffect } from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import girl from '../image/girltab.jpg'
import h2hor from '../image/h2hor.png'
import h1ver from '../image/h1ver.png'
import { useNavigate } from 'react-router-dom';


export default function About() {

    const navigation=useNavigate()

    const handleScroll = () => {
        const boxes = document.querySelectorAll('.boxup');
        boxes.forEach(box => {
            if (window.scrollY >= 700) {
                box.classList.add('AboutboxUpTranlate');
            } else {
                box.classList.remove('AboutboxUpTranlate');
            }
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


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
            <div className="about-body">
                <div className="about-container">
                    <div className="about-section1 boxup">
                        <div className="imgBox">
                            <img src={girl}></img>
                        </div>
                        <div className="mov1">
                          <img src={h2hor}></img>
                        </div>
                    </div>

                    <div className="about-section2 boxup">
                        <div className="abot-data">
                            <div className="buttonDiv"><p>About Our Company ~</p></div>
                            
                            <h1>Best <span>Custom IT</span> Solution Provider</h1>
                            <p>Niyan IT Solutions specializes in providing Custom IT solutions as per the business requirement. We believe in partnering with our Clients to optimize and enhance the IT infrastructure.</p>
                            <hr />

                            <button onClick={()=>{navigation('/About'); handleNavLinkClick();}} className='submitbut redm'>READ MORE <FaArrowRightLong /> </button>
                        </div>
                        <div className="mov2">
                          <img src={h1ver}></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
