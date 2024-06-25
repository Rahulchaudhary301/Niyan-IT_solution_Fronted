import React from 'react'
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import Logo from '../image/Logo.png'
import { useNavigate } from 'react-router-dom';


export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      };
 
 const navigation=useNavigate()

    return (
        <div>
            <div className="footerBody">
                <div className="footerContainer">
                    <div className="footersection1">
                        <img src={Logo}></img>
                        <hr/>
                        <p><span>Niyan IT Solutions</span> Specializes in providing custom IT solutions for every business.</p>
                        <button onClick={() => {navigation('/About'); scrollToTop()}} className='submitbut butsum'>ABOUT US</button>
                    </div>


                    <div className="footersection2">
                        <h1>Newsletter</h1>
                        <hr/>
                        <input placeholder='Your Email Address'></input>
                        <button className='subscribe submitbut subc'> SUBSCRIBE</button>
                    </div>


                    <div className="footersection3">
                        <h1>Official info</h1>
                        <hr/>
                        <div className="telDIv">
                            <IoCall className='call'/>
                            <p>+91 9741510789</p>
                        </div>
                         
                        <div className="telDIv">
                            <IoCall className='call' />
                            <p>+91 9741510789</p>
                        </div>
                         
                        <div className="telDIv">
                            <FaLocationDot className='locatonIcon' />
                            <p> 2nd floor, No, Royal Arcade, 60, 17th Cross Road, Sector 6, HSR Layout Bengaluru, Karnataka-560102</p>
                        </div>

                       
                        
                    </div>




                    <div className="footersection4">
                        <h1>Follow us</h1>
                        <hr/>

                        <div className="socialIcon">
                        {/* <a href="mailto:info.thejsfoods@gmail.com"> <MdEmail className='rotateIcon' /></a>   */}
                            <MdEmail  className='rotateIcon' />
                            <BsTwitterX className='rotateIcon'/>
                            <FaLinkedin className='rotateIcon'/>
                            <FaSquareInstagram className='rotateIcon'/>
                            <FaFacebookSquare className='rotateIcon'/>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
