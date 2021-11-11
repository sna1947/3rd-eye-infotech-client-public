import { Grid } from '@mui/material';
import React from 'react';
import Products from '../Products/Products';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
       
        <Grid container spacing={2} >
            
            <Banner></Banner>
            <Grid item xs={10} sm={10} md={10}>
                <Products></Products>
            </Grid>

            <Grid item xs={2} sm={2} md={2}>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <div>
                       
                        <TextField
                            // label="Size"
                            id="standard-size-normal"
                            defaultValue="Normal"
                            variant="standard"
                        />
                    </div>
                </Box>
            </Grid>
            
        </Grid>
    );
};

export default Home;