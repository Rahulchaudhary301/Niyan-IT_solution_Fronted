import React, { useEffect } from 'react'

export default function ServiceHeading() {

    const handleScroll = () => {
        const boxes = document.querySelectorAll('.service-data');
        boxes.forEach(box => {
            if (window.scrollY >= 1100) {
                box.classList.add('serviceUptranlate');
            } else {
                box.classList.remove('serviceUptranlate');
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
            <div className="serviceHeding-body">
                <div className="service-data">
                    <div className="servive-head">
                        <p>~ Our Awesome Services ~</p>
                    </div>
                    
                    <h1>We Are <span>Dedicated</span> To Serve You All Time.</h1>
                </div>
            </div>
        </div>
    )
}
