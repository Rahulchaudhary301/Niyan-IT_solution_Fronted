import React, { useEffect } from 'react'
import aboutimg from '../image/bg-testimonial1.jpg'
import baner from '../image/banner1.jpg'
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

import sqareimg from '../image/h2hor.png'
import rectimg from '../image/h1ver.png'

import { FaUsersGear } from "react-icons/fa6";

export default function AboutUs() {
    const navigation = useNavigate()




    const handleScroll = () => {
        const boxes = document.querySelectorAll('.value-card-data');
        boxes.forEach(box => {
            if (window.scrollY >= 950) {
                box.classList.add('showAboutuss11');
            } else {
                box.classList.remove('showAboutuss11');
            }

            if (window.scrollY >= 950) {
                box.classList.add('showAboutuss22');
            } else {
                box.classList.remove('showAboutuss22');
            }

            if (window.scrollY >= 950) {
                box.classList.add('showAboutuss33');
            } else {
                box.classList.remove('showAboutuss33');
            }

        });




    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

















    return (
        <div>
            <div className="aboutUs-body">
                <div className="abutUs-container">
                    <div className="imgBoxAbout">
                        <img src={aboutimg}></img>
                    </div>

                    <div className="AboutUs-headdd">
                        <h1>About Us</h1>
                        <p><span onClick={() => navigation('/')} className='hb'>Home</span> <FaArrowRight /> Services</p>
                    </div>
                </div>

                <div className="customit-body">
                    <div className="customit-continer">
                        <div className="costomit-section1">
                            <div className="costomit-section1-data">
                                <p className='pbh'>About Us</p>
                                <h1>Best <span>Custom IT</span> Solutions Provider</h1>
                                <p className='qw' >Niyan IT Solutions specializes in providing Custom IT solutions as per the business requirement. We believe in partnering with our Clients to optimize and enhance the IT infrastructure.</p>

                            </div>

                            <div className="squre-degine">
                                <img src={sqareimg}></img>
                            </div>
                        </div>


                        <div className="costomit-section2">
                            <div className="costomit-section2-data">
                                <div className="circledata">

                                </div>

                                <div className="costomit-section2-img">
                                    <img src={baner}></img>
                                </div>

                                <div className="custom-logo">
                                    <h1>We deliver best solution</h1>
                                    {/* <p>We deliver best solution</p> */}
                                </div>

                                <div className="deliver-box">
                                    <div className="logoboxxx">
                                        <FaUsersGear className='bnb' />
                                    </div>
                                    <div className="deliver-content">
                                        <h3>We provides best services and optimised solution.</h3>
                                        <p>We adapt our delivery to the way your work, whether as an external provider.</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

                <div className="ourValue-body">
                    <div className="ourValur-container">
                        <div className="ourVale-data">
                            <p>We provide a wide range of benefits for businesses, including:</p>
                            <h1>Our<span > Value</span></h1>
                        </div>

                    </div>

                    <div className="valueCard-body">
                        <div className="value-card">
                            <div className="value-card-data aboutusss1">
                                <div className="cardss-datta">
                                    <h2>Increased Efficiency</h2>
                                    <p>I help businesses improve their IT infrastructure and processes, which can lead to increased efficiency and productivity.</p>
                                </div>

                                <div className="value-card-datayyy">
                                    <h2>Increased Efficiency</h2>
                                    <p className='valepp'>I help businesses improve their IT infrastructure and processes, which can lead to increased efficiency and productivity.</p>
                                </div>
                            </div>

                            <div className="value-card-data aboutusss2">
                                <div className="cardss-datta">
                                    <h2>Cost Savings</h2>
                                    <p>Outsourcing IT management can save businesses money by reducing the need for expensive in-house IT staff.</p>
                                </div>

                                <div className="value-card-datayyy">
                                    <h2>Cost Savings</h2>
                                    <p className='valepp'>Outsourcing IT management can save businesses money by reducing the need for expensive in-house IT staff.</p>
                                </div>
                            </div>

                            <div className="value-card-data aboutusss3">
                                <div className="cardss-datta">
                                    <h2>Scalability</h2>
                                    <p>Can be scaled up or down as needed, allowing businesses to adapt to changing needs and growth.</p>
                                </div>

                                <div className="value-card-datayyy">
                                    <h2>Scalability</h2>
                                    <p className='valepp'>Can be scaled up or down as needed, allowing businesses to adapt to changing needs and growth.</p>
                                </div>
                            </div>

                            <div className="value-card-data aboutusss4">
                                <div className="cardss-datta">
                                    <h2>Security</h2>
                                    <p>Help businesses with cybersecurity measures and compliance requirements to protect sensitive data and networks.</p>
                                </div>

                                <div className="value-card-datayyy">
                                    <h2>Security</h2>
                                    <p className='valepp'>Help businesses with cybersecurity measures and compliance requirements to protect sensitive data and networks.</p>
                                </div>
                            </div>

                            <div className="value-card-data aboutusss5">
                                <div className="cardss-datta">
                                    <h2>Expertise</h2>
                                    <p>Our team of experts with specialized knowledge and experience, providing businesses with access to a wide range of skills and capabilities.</p>
                                </div>

                                <div className="value-card-datayyy">
                                    <h2>Expertise</h2>
                                    <p className='valepp'>Our team of experts with specialized knowledge and experience, providing businesses with access to a wide range of skills and capabilities.</p>
                                </div>
                            </div>

                            <div className="value-card-data aboutusss6">
                                <div className="cardss-datta">
                                    <h2>Business Continuity</h2>
                                    <p>Help businesses maintain continuity in case of an unexpected event, such as a natural disaster or cyber attack, ensuring that operations can continue as normal.</p>
                                </div>

                                <div className="value-card-datayyy">
                                    <h2>Business Continuity</h2>
                                    <p className='valepp'>Help businesses maintain continuity in case of an unexpected event, such as a natural disaster or cyber attack, ensuring that operations can continue as normal.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
