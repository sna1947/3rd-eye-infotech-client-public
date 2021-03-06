import { Star } from '@mui/icons-material';
import { Button, Card, CardActions, CardContent, CardMedia, Rating, Typography } from '@mui/material';
import {  Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';


const Product = (props) => {
    const {img, productName, price, warranty,description, _id } = props.product;
    console.log(props)


    return (

        <Box sx={{bgcolor:'#ECEBD2'}}>
            <Card sx={{ maxWidth: 260, m: 1, }}>
                <CardMedia
                    sx={{ width: 250, mt:1,p:1 }}
                    component="img"
                    alt="green iguana"
                    height="230"
                    image={img}
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        Name: {productName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Price: {price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Warranty: {warranty}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Description: {description.slice(0, 100)}
                    </Typography>
                </CardContent>
                <CardActions>
                </CardActions>
                {/* <Link to='/productsdetails' <Button size="small">Learn More</Button> </Link> */}

                {/* reting==================== */}
                <Rating 
                initialRating={Star}
                emptySymbol= 'far fa-star '
                fullSymbol='fas fa-star'
                readOnly
                ></Rating> <br/>

                <Link to = {`/product/${_id}`} style={{textDecoration:'none',color:'white'}} ><Button  sx={{bgcolor:'#ffeb3b', m:1}}>Learn More</Button></Link>
            </Card>
        </Box>

    

    );
};

export default Product;