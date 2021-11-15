import { Divider, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Banner from '../Banner/Banner';
import Footer from '../../Shared/Footer/Footer';
import NewArrival from './NewArrival/NewArrival';
import HomeProducts from '../HomeProducts/HomeProducts';

const Home = () => {
const [reviews, setReviews] = useState([]);

useEffect(()=>{
fetch('https://mighty-island-81125.herokuapp.com/reviews')
.then(res => res.json())
.then(data => setReviews(data))

},[])


    return (
       
        <Grid container spacing={2} >
            
            <Banner></Banner>
            <Grid item xs={9} sm={9} md={9}>
                <Products></Products>
                {/* <HomeProducts></HomeProducts> */}
                
            </Grid>


            <Grid item xs={2} sm={2} md={2}>
                

                <h4> Users All Reviews: {reviews.length}</h4>
                <Divider/>
                <ul>
                    {
                        reviews.map(review=><li>{review.review}</li>)
                    }
                </ul>

            </Grid>
            <NewArrival></NewArrival>
            <Footer></Footer>
        </Grid>
    );
};

export default Home;