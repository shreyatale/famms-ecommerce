import React from 'react'
import '../Style/Home.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {useDispatch} from "react-redux"
import { put } from '../Redux/Action/Actions'
import  { useState } from "react"
import Carddata from '../Carddata'
import About from './About';
import Shop from './Shop';
import Customer from './Customer';
import Product from './Product';
import Mainproduct from './Mainproduct';
const Home = ({search}) => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nav:false,
        loop:true
        
    };
    const dispatch=useDispatch()
    const [data, setdata]=useState(Carddata)
   function send(a){
    dispatch(put(a))
   }
    return (
        <div>
            <div className="sliders">
                <Slider {...settings} >
                    <div className='slider1'>
                        <div className='slider11'>
                            <h1 >Sale 20% Off</h1>
                            <h2>On Everything</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae ipsa ea atque eveniet accusamus autem rerum a sunt molestias sit?</p>
                            <button >Shop Now</button>
                        </div>
                    </div>
                    <div className='slider1'>
                        <div className='slider11'>
                        <h1 >Sale 20% Off</h1>
                            <h2>On Everything</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae ipsa ea atque eveniet accusamus autem rerum a sunt molestias sit?</p>
                            <button >Shop Now</button>
                        </div>
                    </div>
                    <div className='slider1'>
                        <div className='slider11'><h1 >Sale 20% Off</h1>
                        <h2>On Everything</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae ipsa ea atque eveniet accusamus autem rerum a sunt molestias sit?</p>
                        <button >Shop Now</button></div>
                    </div>
                </Slider></div>
                <div>
              <Shop/>
                </div><br /><br /><br /> <br />
     <Product search={search}/>
        
            <div className='subscribe'>
            <div className="subscribe1">
            <h1>Subscribe To Get Discount Offers</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, ad!</p>
            <input type="email" placeholder='Enter Your Email'/><br />
            <button>SUBSCRIBE</button>
            </div>
            </div>
            <div> <Customer/></div>
             <div className="homefooter">
             <div>
             <i className="fa-solid fa-glasses"></i>
             <h1>F<span color='orangered'>a</span>mms</h1>
             <h4>ADDRESS:</h4><p>28 White tower, Street Name New York City, USA</p>
             <h4>TELEPHONE:</h4><p>+91 987 654 3210</p>
             <h4>EMAIL:</h4><p>layra@gmail.com</p>
             </div>
             <div>
             <h4>MENU</h4>
             <p>Home</p>
             <p>About</p>
             <p>Services</p>
             <p>Testimonial</p>
             <p>Blog</p>
             <p>Contact</p>
             </div>
             <div>
             <h4>ACCOUNT</h4>
             <p>Account</p>
             <p>Checkout</p>
             <p>Login</p>
             <p>Register</p>
             <p>Shopping</p>
             <p>Widget</p>
             </div>
             <div className='Newslerrer'>
             <h4>NEWSLERRER</h4>
             <p>Subscribe by our newsletter and get update protidin.</p>
             <input type="text" placeholder='Enter' /><button>Subscribe</button>
             </div>
             
             </div>    
    </div>
    )
}

export default Home