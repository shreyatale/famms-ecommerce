import React from 'react'
import "../Style/Customer.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Customer = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nav:true,
        loop:true
        // autoplay:true
    };
  return (
    <div>

 <div className='customer'>
    <h1>Customer's Testimonial</h1>
    <div className='customer1'>
    <Slider {...settings} >
    <div>
    <div className='customerimg'><img src="https://themewagon.github.io/famms/images/client.jpg" alt="" /></div>
    <div className='customer2'><h5>Anna Trevor</h5>
    <h6>Customer</h6>
    <p>Dignissimos reprehenderit repellendus nobis error quibusdam? Atque animi sint unde quis reprehenderit, et, perspiciatis, debitis totam est deserunt eius officiis ipsum ducimus ad labore modi voluptatibus accusantium sapiente nam! Quaerat.</p>
    </div>
    </div>
    <div className='customer2'><div className='customerimg'><img src="https://themewagon.github.io/famms/images/client.jpg" alt="" /></div>
    <div><h5>Anna Trevor</h5>
    <h6>Customer</h6>
    <p>Dignissimos reprehenderit repellendus nobis error quibusdam? Atque animi sint unde quis reprehenderit, et, perspiciatis, debitis totam est deserunt eius officiis ipsum ducimus ad labore modi voluptatibus accusantium sapiente nam! Quaerat.</p>
    </div></div>
    <div className='customer2'><div className='customerimg'><img src="https://themewagon.github.io/famms/images/client.jpg" alt="" /></div>
    <div><h5>Anna Trevor</h5>
    <h6>Customer</h6>
    <p>Dignissimos reprehenderit repellendus nobis error quibusdam? Atque animi sint unde quis reprehenderit, et, perspiciatis, debitis totam est deserunt eius officiis ipsum ducimus ad labore modi voluptatibus accusantium sapiente nam! Quaerat.</p>
    </div></div>
    </Slider>
    </div>
    </div>
    </div>
  )
}

export default Customer