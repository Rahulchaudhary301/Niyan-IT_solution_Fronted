import React from 'react'
import hero from '../image/hero.jpg'
import hero1 from '../image/hero1.jpg'
import hero2 from '../image/hero2.jpg'
import contentBg from '../image/h2-bg-slider1-overlay.png'
import { useNavigate } from 'react-router-dom'

export default function Hero() {

    const navigation = useNavigate()


    setInterval(() => {
        let nextButton = document.querySelector(".carousel-control-next");
        if (nextButton) {
            nextButton.click()
        }
    }, 10000);


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
        <div className='bbb'>
            <div id="carouselExampleCaptions" class="carousel slide">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={hero1} class="d-block w-100" alt="..." />

                    </div>
                    <div class="carousel-item">
                        <img src={hero2} class="d-block w-100" alt="..." />

                    </div>
                    <div class="carousel-item">
                        <img src={hero} class="d-block w-100" alt="..." />

                    </div>
                </div>

                <button class="carousel-control-prev nex" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>

                <div className="hover-conetent-hero">
                    <div className="imh-hero-box">
                        <img src={contentBg}></img>
                    </div>
                    <div className="hero-content-data">
                        <div className="hero-content-data-text">
                            <div className="head-hero-content-data">
                                <p>Welcome to Niyan IT Solutions ~</p>
                            </div>
                            <h1>See Our IT Managed Services</h1>
                            <div className="tex-hero">
                              <p>IT HelpDesk, Annual Maintenance Contract, Resource Management, Mac Environment, Linux Enterprise, Services, Backup & Recovery</p>
                            </div>
                            <button onClick={()=>{navigation('/About');handleNavLinkClick();}} className='submitbut redm abc'>About Us</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
