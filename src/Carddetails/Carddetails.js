import React, { useEffect, useState } from 'react'
import "./Carddetails.css"
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { put, dec,remove } from '../Redux/Action/Actions'
const Carddetails = () => {
    const [data, setdata] = useState([])
    console.log(data)
    const getdata = useSelector((state) => state.Reducers.carts)
    const dispatch=useDispatch()
    const navigete=useNavigate() 
    const { id } = useParams()

    function compare() {
        const camparedata = getdata.filter((val) => { return val.id == id })
        setdata(camparedata)
    }
    useEffect(() => {
        compare()
    }, [id])

    function send(a){
        dispatch(put(a))
       }

    function desc(b){
        dispatch(dec(b))
       
    }

    function del(id) {
        dispatch(remove(id))
        navigete("/")
      }


      function buy(){
     navigete("/buy")
      }
    return (
        <div className='cardetails11'>

            {
                data.map(function (val) {
                    return (
                        <div className='cardetails' >
                            <div className='cardetails1' key={val.id}>
                                <img src={val.pimg} alt="" />
                            </div>
                            <div className='cardetails2'>
                                <h1>{val.pname}</h1>
                                <h4>MRP {val.price}</h4>
                                <h4>Color:- {val.pcolor}</h4>
                                <h4>Quantity:- {val.quantity}</h4>
                                <h2>Total {val.price * val.quantity}</h2>
                                <div className="quantityinc">
                                <button  onClick={val.quantity <=1 ? () => del(val.id) :()=>desc(val)}>-</button>
                                <span>{val.quantity}</span>
                                <button onClick={()=>send(val)}>+</button>
                                </div>
                                <button style={{background:"orangered", width:120}} onClick={buy}>Buy</button>
                            </div>
                            </div>
                    )
                })
            }
        </div>
    )
}

export default Carddetails