import React, { useEffect } from 'react'
import contactimg from '../image/seviceimg.jpg'
import itHard from '../image/ithardwar.gif'
import itGeafic from '../image/grafic.gif'
import itWeb from '../image/webdev.gif'
import itRecr from '../image/itrec.gif'
import itInfra from '../image/itinfra.gif'
import itDegital from '../image/digital.gif'



import { AiOutlineCloudServer } from "react-icons/ai";
import { FaServer } from "react-icons/fa";
import { FiMonitor } from "react-icons/fi";
import { FaServicestack } from "react-icons/fa";
import { FaUsersGear } from "react-icons/fa6";
import { SiCodesignal } from "react-icons/si";
import { GiDigitalTrace } from "react-icons/gi";
import { useNavigate } from 'react-router-dom'

import { FaArrowRight } from "react-icons/fa";


export default function ServiceData() {



    const handleScroll = () => {
        const boxes = document.querySelectorAll('.serve-card');
        boxes.forEach(box => {
            if (window.scrollY >= 350) {
                box.classList.add('upward-Card1');
            } else {
                box.classList.remove('upward-Card1');
            }

            if (window.scrollY >= 350) {
                box.classList.add('upward-Card2');
            } else {
                box.classList.remove('upward-Card2');
            }

            if (window.scrollY >= 350) {
                box.classList.add('upward-Card3');
            } else {
                box.classList.remove('upward-Card3');
            }



            if (window.scrollY >= 500) {
                box.classList.add('upward-Card4');
            } else {
                box.classList.remove('upward-Card4');
            }

            if (window.scrollY >= 500) {
                box.classList.add('upward-Card5');
            } else {
                box.classList.remove('upward-Card5');
            }

            if (window.scrollY >= 500) {
                box.classList.add('upward-Card6');
            } else {
                box.classList.remove('upward-Card6');
            }







        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const navigation = useNavigate()



    return (
        <div>
            <div className="ser-body">
                <div className="ser-container">
                    <div className="ser-section11">
                        <div className="ser-img-box">
                            <img src={contactimg}></img>
                        </div>

                        <div className="ser-head">
                            <h1>Services</h1>
                            <p><span onClick={() => navigation('/')} className='hb'>Home</span> <FaArrowRight /> Services</p>
                        </div>
                    </div>

                    <div className="ser-data-divss">
                        <div className="service-datass">
                            <h3>Our Services</h3>
                            <h1>We provide the necessary services to you</h1>
                        </div>
                    </div>

                    <div className="ser-card-body">
                        <div className="ser-card-container">


                            <div className="serve-card cardss1">
                                <div className="serve-card-img-box">
                                    <img src={itHard}></img>
                                </div>
                                <div className="upper-card-div">
                                    <div className="card-logo">
                                        <FaServer className='serIconss' />
                                    </div>
                                    <h2>IT Resource Supply</h2>
                                </div>

                                <div className="ser-hover-data">
                                    <div className="contdata">
                                        <h1>IT Resource Supply</h1>
                                        <p>We supply brand-new and Refurbished Desktops, Laptops, Monitors, Printers, Memory, Storage Devices, Servers, Switches & Routers, etc…</p>
                                        {/* <button className='submitbut readmobut'>Read more</button> */}
                                    </div>
                                </div>
                            </div>

                            <div className="serve-card cardss2">
                                <div className="serve-card-img-box">
                                    <img src={itDegital}></img>
                                </div>
                                <div className="upper-card-div">
                                    <div className="card-logo">
                                        <GiDigitalTrace className='serIconss' />
                                    </div>
                                    <h2>Digital Marketing</h2>
                                </div>

                                <div className="ser-hover-data">
                                    <div className="contdata">
                                        <h1>Digital Marketing</h1>
                                        <p>Search Engine Optimization (SEO), Search Engine Marketing (SEM), Content Marketing, Social Media Marketing (SMM), Email Marketing, YouTube Marketing, etc. </p>
                                        {/* <button className='submitbut readmobut'>Read more</button> */}
                                    </div>
                                </div>
                            </div>

                            <div className="serve-card cardss3">
                                <div className="serve-card-img-box">
                                    <img src={itGeafic}></img>
                                </div>
                                <div className="upper-card-div">
                                    <div className="card-logo">
                                        <SiCodesignal className='serIconss' />
                                    </div>
                                    <h2>Graphic Designing</h2>
                                </div>

                                <div className="ser-hover-data">
                                    <div className="contdata">
                                        <h1>Graphic Designing</h1>
                                        <p>We help to create visually appealing work that conveys a message. The elements and principles of graphic design include  line, color, shape, space, texture, typography, scale, dominance and emphasis, and balance.</p>
                                        {/* <button className='submitbut readmobut'>Read more</button> */}
                                    </div>
                                </div>
                            </div>



                            <div className="serve-card cardss4">
                                <div className="serve-card-img-box">
                                    <img src={itWeb}></img>
                                </div>
                                <div className="upper-card-div">
                                    <div className="card-logo">
                                        <FiMonitor className='serIconss' />
                                    </div>
                                    <h2>Web Development</h2>
                                </div>

                                <div className="ser-hover-data">
                                    <div className="contdata">
                                        <h1>Web Development</h1>
                                        <p>Website Designing, Front-end Development, Back-end Development, and sometimes Server Management and Database Administration.</p>
                                        {/* <button className='submitbut readmobut readn'>Read more</button> */}
                                    </div>
                                </div>
                            </div>

                            <div className="serve-card cardss5">
                                <div className="serve-card-img-box">
                                    <img src={itRecr}></img>
                                </div>
                                <div className="upper-card-div">
                                    <div className="card-logo">
                                        <FaUsersGear className='serIconss' />
                                    </div>
                                    <h2>IT Recruitment And Outsourcing</h2>
                                </div>

                                <div className="ser-hover-data">
                                    <div className="contdata">
                                        <h1>IT Recruitment And Outsourcing</h1>
                                        <p>We helps companies in hiring qualified candidates for open IT positions and we do outsourcing for IT solutions.</p>
                                        {/* <button className='submitbut readmobut'>Read more</button> */}
                                    </div>
                                </div>
                            </div>

                            <div className="serve-card cardss6">
                                <div className="serve-card-img-box">
                                    <img src={itInfra}></img>
                                </div>
                                <div className="upper-card-div">
                                    <div className="card-logo">
                                        <FaServicestack className='serIconss' />
                                    </div>
                                    <h2>IT Infrastructure Management</h2>
                                </div>

                                <div className="ser-hover-data">
                                    <div className="contdata">
                                        <h1>IT Infrastructure Management</h1>
                                        <p>Desktop Administration, Network Operations, System Administration, Database Administration, Security, and Compliance.</p>
                                        {/* <button className='submitbut readmobut'>Read more</button> */}
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}
