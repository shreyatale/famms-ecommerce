import React from 'react';
import '../Style/Header.css'
import { useEffect, useState } from "react"
import Badge from '@mui/material/Badge';
import { Link, useNavigate } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import { useDispatch, useSelector } from 'react-redux'

import { put, dec,remove } from '../Redux/Action/Actions'
import { styled } from '@mui/material/styles';

import FormControlLabel from '@mui/material/FormControlLabel';
import Switch, { SwitchProps } from '@mui/material/Switch';






const Heander = ({ cheak, change, search, setsearch }) => {
const [price, setprice] = useState(0)
const getdata = useSelector((state) => state.Reducers.carts)
  const dispatch = useDispatch()
  const navigete=useNavigate() 
const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
function del(id) {
    dispatch(remove(id))
    navigete("/")
  }

  function total() {
    let price = 0

    getdata.map(function (val) {
      price = val.price * val.quantity + price
    })
    setprice(price)
  }

  useEffect(() => {
    total()
  }, [total])

  function send(a){
    dispatch(put(a))
   }

function desc(b){
    dispatch(dec(b))
   
}
const [click ,setclick]=useState(false)
const handleClicks =()=> setclick(!click)

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
    width: 32,
    height: 32,
    '&::before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff',
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
    borderRadius: 20 / 2,
  },
}));


  return (
    <div className="header">
    <div className="heander1">
      <div className="famms">
        <i className="fa-solid fa-glasses"></i>
      <Link to="/"><h1 className='famms1' >F<span style={{ color: "orangred" }}>a</span>mms</h1></Link>
      </div>
      <ul className={click ? "nav active" :"nav"}>
       
        <div className='nav-1'>
          <li><Link to="/">HOME</Link></li>
          <li className='pages1'><Link to="">PAGES</Link>
            <ul className="pages">
              <li><Link to="/About">About</Link></li>
              <li><Link to="/Testimonail">Testiomonial</Link></li>
            </ul>
          </li>
          <li><Link to="/Mainproduct">PRODUCTS</Link></li>
          <li><Link to="/Blog">BLOG</Link></li>
          <li><Link to="/content">CONTACT</Link></li>
       <div className='search'>
       <input type="search"  placeholder='search your product' value={search} onChange={(e)=>setsearch(e.target.value)}/>
       </div>
     <div className="toogle" >
    
          <FormControlLabel
            control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked checked={cheak} onChange={change} />}
          
          />  

      </div>

      <div className='cart'>
        <Badge badgeContent={getdata.length} color="primary">
          <i id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            className="fa-solid fa-cart-shopping" ></i>
        </Badge>
      </div>
      </div>
      </ul>
      <div className="humburger" onClick={handleClicks}>
      {click ? (<i className='fa-solid fa-xmark'></i>):(<i class="fa-solid fa-bars"></i>)}
      </div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {
          getdata.length ?
            <div className='shop1'>
              <h4>Your's carts</h4>
              {
                getdata.map(function (val) {
                  return (
                    <div>
                      <div className='inform'>
                        <div className='roimg'>
                          <Link to={`/cartdetails/${val.id}`} onClick={handleClose}>
                            <img src={val.pimg} alt="" /></Link>
                        </div>
                        <div className="roproduct">
                          <p>{val.clothe}</p>
                          <p>prices:-{val.price}</p>
                          <p>color:-{val.pcolor}</p>
                          <div className="quantityinc1">Quantity:-
                            <p onClick={val.quantity <= 1 ? () => del(val.id) : () => desc(val)}>-</p>
                            <h4>{val.quantity}</h4>
                            <p onClick={() => send(val)}>+</p>
                          </div>
                        </div>
                        <div >
                          <i className="fa-solid fa-trash" style={{cursor:'pointer'}} onClick={() => del(val.id)}></i>

                        </div>
                      </div>



                    </div>

                  )

                })
              }
              <div className='total'>
                <h5>Total {price}</h5>
              </div>
            </div>
            :
            <div className='shop'>
              <i onClick={handleClose} className="fa-solid fa-xmark"></i>
              <img src="https://th.bing.com/th/id/OIP.PBlHoun81WbGuNrHpyTOGAHaHa?w=200&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
              <h4>Card is empty</h4>
            </div>
        }




      </Menu>
    </div>
    </div>
  )
}

export default Heander