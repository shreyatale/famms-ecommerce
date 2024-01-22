import React, { useState } from 'react'
import Arrivals from './Arrivals'
import Footer from './Footer'
import "../Style/Content.css"
const Content = () => {
  const [Content,setCotent]=useState({names:"", email:"", product:"", message:""})
  const handlechange = (e)=>{
    const name =e.target.name;
    const value =e.target.value;
    setCotent({...Content, [name]:value})
  }
  const handlsumbit = (e)=>{
    e.preventDefault()
    console.log(Content)
  }
  return (
    <div>
    <div className="main">
    <h2>CONTACT.US</h2>
    </div>
    <form method='get' onSubmit={handlsumbit} autoComplete='off'>
    <div className="userdata" >
    <input type="text" placeholder='Enter Your Full Name' name='names' onChange={handlechange} value={Content.names}/><br />
    <input type="email" placeholder='Enter Your Email Address' name='email' onChange={handlechange} value={Content.email}/><br />
    <input type="text" placeholder='Enter Product' name='product' onChange={handlechange} value={Content.product}/><br />
    <input type="text" placeholder='Enter Your Message' name='message' onChange={handlechange} value={Content.message}/><br />
    <button >Submit</button>
    </div></form>
    <div><Arrivals/></div>
    <div><Footer/></div>
    </div>
  )
}

export default Content