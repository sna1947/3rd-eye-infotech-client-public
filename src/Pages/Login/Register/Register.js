import React from 'react';
import { Button, Container, Grid, TextField } from '@mui/material';
import register from '../../../images/register.jpg'
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';



const Register = () => {
    const [registerData, setRegisterData] = useState({});
    const {registerUser} = useAuth();


    const handelOnChange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newRegisterData = {...registerData};
        newRegisterData[field] = value;
        console.log(newRegisterData)
        setRegisterData(newRegisterData);
    
    };
    
    const handleRegisterSubmit = e => {
        e.preventDefault();
        if(registerData.password !== registerData.password2){
            alert('Your password missmass, pls try again');
            return; 
        }
        registerUser(registerData.email, registerData.password);
        
    };

    return (
        <Container>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12} md={6} sx={{mt:2}}>
                    <Typography variant="h4" component="h2">Please Register</Typography>;

                    <form onSubmit={handleRegisterSubmit}>

                    {/* <TextField sx={{ width:'70%', m:1}}
                            id="filled-password-input"
                            label="Your Name"
                            type="name"
                            name='name'
                            onChange={handelOnChange}
                            autoComplete="current-password"
                            variant="filled"
                        />
                        <br/> */}

                        <TextField sx={{m:1 , width:'70%'}}
                            id="standard-basic"
                            label="Your Email"
                            name= 'email'
                            type= 'email'
                            onChange={handelOnChange}
                            variant="filled"

                        /> <br/>
                        

                        <TextField sx={{ width:'70%', m:1}}
                            id="standard-basic"
                            label="Password"
                            type="password"
                            name='password'
                            onChange={handelOnChange}
                            autoComplete="current-password"
                            variant="filled"
                        />
                        <br/>
                        <TextField sx={{ width:'70%'}}
                            id="standard-basic"
                            label=" Re Enter your Password"
                            type="password"
                            name='password2'
                            onChange={handelOnChange}
                            autoComplete="current-password"
                            variant="filled"
                        />
                        <br/>
                        <Button type='submit' sx={{m:2 , width:'70%'}} variant="contained">Register</Button>
                        <NavLink style={{textDecoration:'none'}} to='login'>

                        <Button variant="text">Already Register?? Please Login</Button>
                        </NavLink>
                    </form>

                </Grid>

                <Grid item xs={6}>
                    <img style={{ width: '100%',mt:'10' }} src={register} alt='' />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Register;