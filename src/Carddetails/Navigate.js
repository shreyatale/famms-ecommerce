import React from 'react'
import Alert from '@mui/material/Alert';
import { Link } from 'react-router-dom';

const Navigate = () => {
   
  return (
    <div>
    <Link  to="/buy">
    <Alert severity="success" color="info">
   Oder is successfully completed!
  </Alert></Link>
    </div>
  )
}

export default Navigate