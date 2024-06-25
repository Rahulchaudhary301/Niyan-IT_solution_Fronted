import React from 'react'
import cloud from '../image/cloud.png'
import img1 from '../image/img1.png'
import img2 from '../image/img2.png'
import CarreerData from './CarreerData'
import plane from '../image/plane.png'


export default function Carrier() {

 

    return (
        <div>
            <div className="careerBody">
                <div className="career-container">
                    <div className="career-data">
                        <p>CAREER AT NIYAN IT SOLUTION</p>
                        <h1>Be a part of something great</h1>
                        {/* <div className="buttt">
                            <button className='submitbut buu'>See opne role</button>
                        </div> */}
                    </div>
                    <div className="first-box">
                        <img src={img1}></img>
                    </div>
                    <div className="second-box">
                        <img className='im' src={img2}></img>
                    </div>
                    <div className="third-box">
                        <img className='im' src={img1}></img>
                    </div>

                    <div className="img-boxx">
                        <img className='im' src={cloud}></img>
                    </div>

                    <div className="img-boxxx">
                        <img src={cloud}></img>
                    </div>

                    <div className="forth-box">
                        <img className='im' src={img2}></img>
                    </div>
                    <div className="fifth-box">
                        <img className='im' src={img1}></img>
                    </div>
                    <div className="six-box">
                        <img className='im' src={img2}></img>
                    </div>
                    <div className="seven-box">
                        <img className='im' src={img1}></img>
                    </div>

                    {/* <div className="plane">
                        <img className='im' src={plane}></img>
                    </div> */}


                </div>
            </div>

            <CarreerData/>
        </div>
    )
}
