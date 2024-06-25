import React, { useEffect, useState } from 'react'
import { AiOutlineCloudServer } from "react-icons/ai";
import { FaServer } from "react-icons/fa";
import { FiMonitor } from "react-icons/fi";
import { FaServicestack } from "react-icons/fa";
import { FaUsersGear } from "react-icons/fa6";

import chesa1 from '../image/chesa1.png'
import sl from '../image/sl.png'
import viscan from '../image/viscan.png'
import chesa2 from '../image/chesa2.png'


export default function AddSection() {

    const [scrollReached, setScrollReached] = useState(false);

    const handleScroll = () => {
        const boxes = document.querySelectorAll('.box');
        boxes.forEach(box => {
            if (window.scrollY >= 80) {
                box.classList.add('boxUptranlate');
            } else {
                box.classList.remove('boxUptranlate');
            }
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);




    useEffect(() => {
        const handleScr = () => {
            if (window.scrollY >= 100 && !scrollReached) {
                setScrollReached(true);
            }
        };

        window.addEventListener('scroll', handleScr);

        return () => {
            window.removeEventListener('scroll', handleScr);
        };
    }, [scrollReached]);



    useEffect(() => {
        if (scrollReached) {
            let valeDisplays = document.querySelectorAll('.num');
            let interval = 5000;

            valeDisplays.forEach((valeDisplay) => {
                let startValue = 0;
                let endValue = parseInt(valeDisplay.getAttribute("data-value"));
                let duration = Math.floor(interval / endValue);
                let counter = setInterval(() => {
                    startValue += 1;
                    valeDisplay.textContent = startValue;
                    if (startValue === endValue) {
                        clearInterval(counter);
                    }
                }, duration);
            });
        }
    }, [scrollReached]);
















    return (
        <div>
            <div className="addBody">
                <div className="addsConatiner">

                    <div className="addsTranformBox">
                        <div className="box">
                            <div className="boxCon">
                                <div className="iconss">
                                    <AiOutlineCloudServer />
                                </div>
                                <p>Cloud Service</p>

                            </div>
                            <div className="sdow">
                                <div className="ddow-con">
                                    <div className="iconss sdow-ic">
                                        <AiOutlineCloudServer />
                                    </div>
                                    <p>Cloud Service</p>
                                </div>
                            </div>
                        </div>
                        <div className="box">
                            <div className="boxCon">
                                <div className="iconss">
                                    <FaUsersGear />
                                </div>
                                <p>IT Asset Management</p>

                            </div>
                            <div className="sdow">
                                <div className="ddow-con">
                                    <div className="iconss sdow-ic">
                                        <FaUsersGear />
                                    </div>
                                    <p>IT Asset Management</p>
                                </div>
                            </div>

                        </div>
                        <div className="box">
                            <div className="boxCon">
                                <div className="iconss">
                                    <FaServer />
                                </div>
                                <p>IT Hardware</p>
                            </div>

                            <div className="sdow">
                                <div className="ddow-con">
                                    <div className="iconss sdow-ic">
                                        <FaServer />
                                    </div>
                                    <p>IT Hardware</p>
                                </div>
                            </div>

                        </div>
                        <div className="box">
                            <div className="boxCon">
                                <div className="iconss">
                                    <FaServicestack />
                                </div>
                                <p>IT Managed Services</p>
                            </div>

                            <div className="sdow">
                                <div className="ddow-con">
                                    <div className="iconss sdow-ic">
                                        <FaServicestack />
                                    </div>
                                    <p>IT Managed Services</p>
                                </div>
                            </div>

                        </div>
                        <div className="box">
                            <div className="boxCon">
                                <div className="iconss">
                                    <FiMonitor />
                                </div>
                                <p>IT Asset Management</p>

                            </div>

                            <div className="sdow">
                                <div className="ddow-con">
                                    <div className="iconss sdow-ic">
                                        <FiMonitor />
                                    </div>
                                    <p>IT Asset Management</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="addsMovements">

                        <div className="Customber">
                            <h2 >Join over + <span className='num' data-value='500'>000</span> happy clients! </h2>
                        </div>

                        <div className="company-add">

                            <div className="addCompany-Box">
                                <div className="imgdivv">
                                    <img src={chesa1} className='addimg'></img>
                                </div>

                                <div className="imgdivv">
                                    <img src={sl} className='addimg'></img>
                                </div>

                                <div className="imgdivv">
                                    <img src={chesa2} className='addimg'></img>
                                </div>

                                <div className="imgdivv">
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
