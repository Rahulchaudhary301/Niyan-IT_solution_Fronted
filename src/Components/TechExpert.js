import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function TechExpert() {

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      };
 
 const navigation=useNavigate()

    return (
        <div>
            <div className="techExpert">
                <div className="techContainer">
                    <div className="techInfo">
                        <h1>Looking for the Best IT Business Solutions ?</h1>
                        <p>As a technical expert , We will help to organize.</p>
                    </div>

                    <div className="techButton">
                        <button onClick={() => {navigation('/contactUs'); scrollToTop()}} className='submitbut getqu' >Get a Quote</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
