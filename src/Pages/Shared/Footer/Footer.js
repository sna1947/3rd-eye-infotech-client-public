import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

const Footer = () => {
    return (
        <Box sx={{ flexGrow: 1, bgcolor: 'info.main',color:'white',p:3,border: 1 , borderColor: 'grey.500' }}>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <Typography variant="h6" component="h2">
                        About CCTV Camera World <br/>
                        About CCTV Camera World
                        CCTV Camera World is an established CCTV equipment distributor in the USA with shipping locations nationwide. We test every product we sell to make sure it is worthy of our name, as we stand behind all the products we sell.

                        {/* Our experts take pride in the work we do and the products we sell. We always welcome customer questions, so feel free to contact us. We are open Monday through Friday, 10AM - 5PM EST. */}
                    </Typography>;
                </Grid>

                <Grid item xs={3}>
                    <Typography variant="h6" component="h2">
                        Follow Us <br/>
                        CCTV Camera World Blog
                        Follow Us On Twitter
                        Subscribe to our Google+ page
                        Subscribe to our YouTube channel
                        Interesting Reads
                    </Typography>;
                </Grid>

                <Grid item xs={3}>
                    <Typography variant="h6" component="h2">
                        Support <br/>
                        Submit Support Question
                        RMA Request Form
                        Download Remote Support
                        Remote Viewing Security Cameras
                        DVR NVR Help
                        IP Camera Help
                        Port Forwarding Guides
                        Become a Dealer
                    </Typography>;
                </Grid>

                <Grid item xs={3}>
                    <Typography variant="h6" component="h2">
                        Contact Us <br/>
                        <i class="fas fa-phone-square-alt"></i> Sales (877) 522-8836
                        Support (716) 229-0080 <br/>

                        <i class="fas fa-envelope"></i> Email us

                        CCTVCameraWorld Blog <br/>

                        <i class="fab fa-youtube"></i> CCTV Camera Videos
                    </Typography>;
                </Grid>
            </Grid>
        </Box>
    );
};

export default Footer;