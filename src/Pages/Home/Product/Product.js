import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { bgcolor, Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';


const Product = (props) => {
    const {img, name, price, warranty,description, _id } = props.product;
    console.log(props)


    return (

        <Box sx={{bgcolor:'gray'}}>
            <Card sx={{ maxWidth: 245, m: 3, }}>
                <CardMedia
                    sx={{ width: 250,justifyContent: 'center' }}
                    component="img"
                    alt="green iguana"
                    height="180"
                    image={img}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        name: {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        price: {price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        warranty: {warranty}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Description: {description.slice(0, 100)}
                    </Typography>
                </CardContent>
                <CardActions>
                </CardActions>
                {/* <Link to='/productsdetails' <Button size="small">Learn More</Button> </Link> */}
                <Link to = {`/product/${_id}`} style={{textDecoration:'none',color:'white'}} ><Button  sx={{bgcolor:'#ffeb3b', m:1}}>Learn More</Button></Link>
            </Card>
        </Box>



    );
};

export default Product;