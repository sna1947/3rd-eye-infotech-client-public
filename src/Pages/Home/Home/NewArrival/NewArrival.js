
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import img1 from '../../../../images/new arriva/img1.jpg'
import img2 from '../../../../images/new arriva/img2.jpg'
import img3 from '../../../../images/new arriva/img3.jpg'
import img4 from '../../../../images/new arriva/img4.jpg'
import img5 from '../../../../images/new arriva/img5.jpg'
import img6 from '../../../../images/new arriva/img6.jpg'
import { Container, Divider, Grid } from '@mui/material';


const NewArrival = () => {
    return (
        <div >
<h1>New Arrival</h1>

            <Divider />
            <Container sx={{m:2}}>
            <Grid  sx={{ml:3}} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

                <Grid item xs={4}>
                <Card sx={{ maxWidth: 345 }}>
                <CardMedia sx={{ width: '60%', justifyContent: 'center', alignItems: 'center' }}
                component="img"
                height="140"
                image={img1}
                alt="green iguana"
                />
                <CardContent>

                <Typography variant="body2" color="text.secondary">
                Day & Night Vision Secureye Number Plate Recognition AHD Camera, For Home And Office, CMOS
                </Typography>
                </CardContent>
                <CardActions>
                <Button size="small">Learn More</Button>
                </CardActions>
                </Card>
                </Grid>

                <Grid item xs={4}>
                <Card sx={{ maxWidth: 345 }}>
                <CardMedia sx={{ width: '60%', justifyContent: 'center', alignItems: 'center' }}
                component="img"
                height="140"
                image={img2}
                alt="green iguana"
                />
                <CardContent>

                <Typography variant="body2" color="text.secondary">
                Day & Night Vision Secureye Number Plate Recognition AHD Camera, For Home And Office, CMOS
                </Typography>
                </CardContent>
                <CardActions>
                <Button size="small">Learn More</Button>
                </CardActions>
                </Card>
                </Grid>

                <Grid item xs={4}>
                <Card sx={{ maxWidth: 345 }}>
                <CardMedia sx={{ width: '60%', justifyContent: 'center', alignItems: 'center' }}
                component="img"
                height="140"
                image={img3}
                alt="green iguana"
                />
                <CardContent>

                <Typography variant="body2" color="text.secondary">
                Day & Night Vision Secureye Number Plate Recognition AHD Camera, For Home And Office, CMOS
                </Typography>
                </CardContent>
                <CardActions>
                <Button size="small">Learn More</Button>
                </CardActions>
                </Card>
            </Grid>






            

                <Grid item xs={4}>
                <Card sx={{ maxWidth: 345 }}>
                <CardMedia sx={{ width: '60%', justifyContent: 'center', alignItems: 'center' }}
                component="img"
                height="140"
                image={img4}
                alt="green iguana"
                />
                <CardContent>

                <Typography variant="body2" color="text.secondary">
                Day & Night Vision Secureye Number Plate Recognition AHD Camera, For Home And Office, CMOS
                </Typography>
                </CardContent>
                <CardActions>
                <Button size="small">Learn More</Button>
                </CardActions>
                </Card>
                </Grid>

                <Grid item xs={4}>
                <Card sx={{ maxWidth: 345 }}>
                <CardMedia sx={{ width: '60%', justifyContent: 'center', alignItems: 'center' }}
                component="img"
                height="140"
                image={img6}
                alt="green iguana"
                />
                <CardContent>

                <Typography variant="body2" color="text.secondary">
                Day & Night Vision Secureye Number Plate Recognition AHD Camera, For Home And Office, CMOS
                </Typography>
                </CardContent>
                <CardActions>
                <Button size="small">Learn More</Button>
                </CardActions>
                </Card>
                </Grid>

                <Grid item xs={4}>
                <Card sx={{ maxWidth: 345 }}>
                <CardMedia sx={{ width: '60%', justifyContent: 'center', alignItems: 'center' }}
                component="img"
                height="140"
                image={img1}
                alt="green iguana"
                />
                <CardContent>

                <Typography variant="body2" color="text.secondary">
                Day & Night Vision Secureye Number Plate Recognition AHD Camera, For Home And Office, CMOS
                </Typography>
                </CardContent>
                <CardActions>
                <Button size="small">Learn More</Button>
                </CardActions>
                </Card>
                </Grid>

                </Grid> 
                </Container>
            
        </div>
            
        




    );
};

export default NewArrival;