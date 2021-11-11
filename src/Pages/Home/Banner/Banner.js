import { Grid, Typography } from '@mui/material';
import React from 'react';
import banner from '../../../images/banner.png'

const Banner = () => {
    return (
        <Grid  container spacing={2}>
            <Grid item xs={8}>
               <img style={{width:'100%'}} src={banner} alt="" />
            </Grid>
            <Grid item xs={4} sx={{mt:5}}>
            <Typography variant="h4" component="h2">
                THE PRIMIUM CHOICE OF SECURITY <br/>
                SECURITY <br/>
                NOW COMES WITH<br/>
                Warranty
            </Typography>;
                
            </Grid>
            
        </Grid>
    );
};

export default Banner;