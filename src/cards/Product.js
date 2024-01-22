import React, { useState } from 'react'
import "../Style/Product.css"
import Carddata from '../Carddata'
import { useDispatch, useSelector } from 'react-redux'
import { put} from '../Redux/Action/Actions'
import Footer from './Footer'
const Product = ({search}) => {
    const [data, setdata]=useState(Carddata)
    
   const getdata=useSelector((state)=>state.Reducers.carts)
   console.log(getdata)
   const dispatch=useDispatch()
  
const [nofile, setfile]=useState(6)
const slice=data.slice(0,nofile)

   function send(a){
    dispatch(put(a))
   }
function visible(){
  setfile(nofile + nofile)
}



 let serachproduct = slice.filter((val)=>val.pcolor.toLowerCase().includes(search))

  return (
    <div>
   <div className='product11'>
   <h3>Our <span>product</span></h3></div>
    <div className="product1-1">
    <div className="product"  id='product'>
  
    {
      serachproduct.map( function (val){
        return(
            <div key={val.id}  className='product1'>
            <div className="images" >
          <img src={val.pimg} alt="" />
           <div>
            <h1>{val.clothe}</h1>
            <h2>MRP {val.price}</h2>
            <h4>Color:- {val.pcolor}</h4>
            </div>
            <button onClick={()=>send(val)} className='add'>Add to card</button>
            <button >Buy</button>
            </div>
            </div>
            )
          })}
        
          </div>
         
          <button className='more' onClick={visible } >View All Products</button>
          </div>
        
        <div>
        <Footer/>
        </div>
    </div>
    )
  }

export default Product