import React from 'react';
import Product from './Product';


const Mainproduct = ({search}) => {
  return (
    <div>
    <div className='main'>
    <h2>Product Grid</h2>
    </div>
    <Product search={search}/>
    </div>
  )
}
export  default Mainproduct
