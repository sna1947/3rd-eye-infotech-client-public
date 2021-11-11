import { Button, Container, Grid, TextField } from '@mui/material';
import login from '../../../images/login.jpg'
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';


const Login = () => {
    const [loginData, setLoginData] = useState({});

    const handelOnChange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field, value);
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    
    };
    
    const handleLoginSubmit = e => {
        alert('hello')
        e.preventDefault();
    };


    return (
        <Container>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12} md={6} sx={{mt:15}}>
                    <Typography variant="h4" component="h2">Login</Typography>;

                    <form onSubmit={handleLoginSubmit}>

                        <TextField sx={{m:2 , width:'70%'}}
                            id="standard-basic"
                            label="Your Email"
                            name= 'email'
                            onChange={handelOnChange}
                            variant="standard"/> 
                            
                            <br/>

                        <TextField sx={{ width:'70%'}}
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            name='password'
                            onChange={handelOnChange}
                            variant="standard" />
                            <br/>
                        <Button type='submit' sx={{m:2 , width:'70%'}} variant="contained">Login</Button>

                        <NavLink style={{textDecoration:'none'}} to='register'>
                        <Button variant="text">New User?? Please Register</Button>
                        </NavLink>
                    </form>

                </Grid>

                <Grid item xs={6}>
                    <img style={{ width: '100%' }} src={login} alt='' />
                </Grid>

            </Grid>
        </Container>


    );
};

export default Login;