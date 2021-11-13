import { Button,  Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';


const ProductDetails = () => {
    const { productid } = useParams();
    const [product, setProduct] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/products/${productid}`
        console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [product])

    return (


        <Container sx={{ display:'flex', p:5}}>
           
                <Grid item xs={12} md={6}>
                    <img style={{width:'60%'}} src={product.img} alt='' />
                </Grid>

                <Grid item xs={12} md={6}>

                    
                        <Typography gutterBottom variant="h5" component="div">
                            name: {product.name}
                        </Typography>
                        <Typography variant="body2" color="text.primary">
                            price: {product.price}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            warranty: {product.warranty}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Description: {product.description}
                        </Typography>
                        <Link to ='/products'  style={{textDecoration:'none',color:'white'}} ><Button  sx={{bgcolor:'#ffeb3b', m:1}}>Go Back</Button></Link>

                        <Link to ='/purchases'  style={{textDecoration:'none',color:'white'}} ><Button  sx={{bgcolor:'#ffeb3b', m:1}}>Buy Now</Button></Link>
                   
                </Grid>
               
            </Container>
             
    );
};

export default ProductDetails;