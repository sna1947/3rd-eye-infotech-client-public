import { CardContent, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ProductDetails = () => {
const {productid} = useParams();
const [product, setProduct] = useState([]);
useEffect(()=>{
    const url = `http://localhost:5000/products/${productid}`
    console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => setProduct(data))
},[product])

    return (

        
        <Box sx={{ width: '100%' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                    <img src={product.img} alt=''/>
                </Grid>

                <Grid item xs={6}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        name: {product.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        price: {product.price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        warranty: {product.warranty}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Description: {product.description}
                    </Typography>
                </CardContent>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ProductDetails;