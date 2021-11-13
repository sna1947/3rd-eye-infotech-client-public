import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';


const BuyNow = () => {
    return (
        <div>
            <Link to ='/home'  style={{textDecoration:'none',color:'white',}} ><Button  sx={{bgcolor:'#ffeb3b', m:1, }}>Go to Home</Button></Link>
           
        </div>
    );
};

export default BuyNow;