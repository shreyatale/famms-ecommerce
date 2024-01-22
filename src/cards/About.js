import React from 'react'
import "../Style/Shop.css"
import Arrivals from './Arrivals'
import Footer from './Footer'
import Shop from './Shop'
const About = () => {
    return (
        <div>
            <div className="main">
                <h2>ABOUT.US</h2>
            </div>
            <div> <Shop/></div>
          <div><Arrivals /></div>
           <div><Footer /></div> 
            
        </div>
    )
}

export default About