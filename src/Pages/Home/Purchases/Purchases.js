import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img from '../../../images/buy.jpg'
import useAuth from '../../../Hooks/useAuth';

const Purchases = () => {
    const { user } = useAuth();
    const initialInfo = {name:user.displayName, email:user.email, name:user.productName, address:'', phone:''}
    const [orders, setOrders] = useState(initialInfo);

    // handel on change======================================
    const handelOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newOrders = { ...orders };
        newOrders[field] = value;
        console.log(newOrders)
        setOrders(newOrders);
    };
    const handlePurchasesSubmit = e => {
        e.preventDefault();
        alert('submited')

        //OrderData send to Server=====================
        fetch('https://mighty-island-81125.herokuapp.com/orders', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(orders)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setOrders(data)
            })

    };
    return (
        <Container sx={{ mt: 7, display: 'flex' }}>
            <Grid item xs={6} md={6} sx={{ mt: 7 }}>
                <img style={{ width: '100%', mt: 20 }} src={img} alt='' />
            </Grid>

            <Grid item xs={12} md={6} sx={{ mt: 2 }}>
                <Typography variant="h4" component="h2">Coustomer Information</Typography>;

                <form onSubmit={handlePurchasesSubmit} >
                    <TextField sx={{ width: '70%', m: 1 }}
                        id="standard-basic"
                        // label="Your Name"
                        label={user.displayName}
                        name='name'
                        onBlur={handelOnBlur}
                        variant="filled"
                    />
                    <br />
                    <TextField sx={{ m: 1, width: '70%' }}
                        id="standard-basic"
                        // label="Your Email"
                        label={user.email}
                        name='email'
                        type='email'
                        onBlur={handelOnBlur}
                        variant="filled"

                    /> <br />
                    <TextField sx={{ width: '70%', m: 1 }}
                        id="standard-basic"
                        label="Product Name"
                        // label={user.name}
                        name='productName'
                        onBlur={handelOnBlur}
                        variant="filled"
                    />
                    <br />
                    <TextField sx={{ width: '70%', m: 1 }}
                        id="standard-basic"
                        label="Address"
                        name='Address'
                        onBlur={handelOnBlur}
                        variant="filled"
                    />
                    <br />

                    <TextField sx={{ width: '70%', m: 1 }}
                        id="standard-basic"
                        label="Phone Number"
                        name='Phone'
                        onBlur={handelOnBlur}
                        variant="filled"
                    />
                    <br />
                    <Link to='/products' style={{ textDecoration: 'none', color: 'white' }} ><Button sx={{ bgcolor: '#ffeb3b', m: 1 }}>Go Back</Button></Link>

                    <Button type='submit' sx={{ bgcolor: '#ffeb3b', m: 1 }}>Order Confirm</Button>

                    {/* <Link to='/CommingSoon' style={{ textDecoration: 'none', color: 'white' }} ></Link> */}
                </form>

            </Grid>
        </Container>
    );
};

export default Purchases;