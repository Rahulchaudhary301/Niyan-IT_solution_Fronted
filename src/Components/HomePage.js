import React from 'react'
import Hero from './Hero'
import AddSection from './AddSection'
import About from './About'
import ServiceHeading from './ServiceHeading'
import Services from './Services'

export default function HomePage() {
    return (
        <div>
             <Hero/>
             <AddSection/>
             <About/>
             <ServiceHeading/>
             <Services/>
        </div>
    )
}
