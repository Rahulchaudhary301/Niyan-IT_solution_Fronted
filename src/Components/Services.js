import React, { useEffect } from 'react'
import { AiOutlineCloudServer } from "react-icons/ai";
import { FaServer } from "react-icons/fa";
import { FiMonitor } from "react-icons/fi";
import { FaServicestack } from "react-icons/fa";
import { FaUsersGear } from "react-icons/fa6";

import chesa1 from '../image/chesa1.png'
import sl from '../image/sl.png'
import viscan from '../image/viscan.png'
import chesa2 from '../image/chesa2.png'

export default function Services() {

    const handleScroll = () => {
        const boxes = document.querySelectorAll('.serviceContiner-card');
        const boxe = document.querySelectorAll('.section22-data');
        boxes.forEach(box => {
            if (window.scrollY >= 1500) {
                box.classList.add('serviceContiner-card-uptralate');
            } else {
                box.classList.remove('serviceContiner-card-uptralate');
            }
        });

        boxe.forEach(box => {
            if (window.scrollY >= 1850) {
                box.classList.add('serviceContiner2-card-uptralate');
            } else {
                box.classList.remove('serviceContiner2-card-uptralate');
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
            <div className="serviceBody">
                <div className="service-section1">
                    <div className="service-Container">
                        <div className="serviceContiner-card">
                            <div className="serviceContiner-card_data">
                                <div className="logo">
                                    <AiOutlineCloudServer className='iccc' />
                                </div>
                                <h2>Cloud Service </h2>

                                <p>We help to Store, ship ,set up, and manage employee computers-100% remotely.</p>
                                <h4>Learn More</h4>
                            </div>
                        </div>

                        <div className="serviceContiner-card">
                            <div className="serviceContiner-card_data">
                                <div className="logo">
                                    <FaServer className='iccc' />
                                </div>
                                <h2>IT Hardware </h2>

                                <p>We help to Store, ship ,set up, and manage employee computers-100% remotely.</p>
                                <h4>Learn More</h4>
                            </div>

                        </div>

                        <div className="serviceContiner-card">

                            <div className="serviceContiner-card_data">
                                <div className="logo">
                                    <FaServicestack className='iccc' />
                                </div>
                                <h2>IT Managed Services </h2>

                                <p>We help to Store, ship ,set up, and manage employee computers-100% remotely.</p>
                                <h4>Learn More</h4>
                            </div>

                        </div>

                        <div className="serviceContiner-card">

                            <div className="serviceContiner-card_data">
                                <div className="logo">
                                    <FaUsersGear className='iccc' />
                                </div>
                                <h2>IT Asset Management </h2>

                                <p>We help to Store, ship ,set up, and manage employee computers-100% remotely.</p>
                                <h4>Learn More</h4>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="service-section2">
                    <div className="section22-data">
                        <h1>Niyan IT Solutions <span>Partners</span></h1>
                        <p>Niyan IT Solutions partners with premier OEM and solution provider in security, networking, cloud services, and computer hardware.</p>
                        <div className="company-add ckk">

                            <div className="addCompany-Box cnn">
                                <div className="imgdivv iv">
                                    <img src={chesa1} className='addimg'></img>
                                </div>

                                <div className="imgdivv iv">
                                    <img src={sl} className='addimg'></img>
                                </div>

                                <div className="imgdivv iv">
                                    <img src={chesa2} className='addimg'></img>
                                </div>

                                <div className="imgdivv iv">
                                    <img src={viscan} className='addimg'></img>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
