import React from 'react';
import { Alert, AlertTitle, Button, CircularProgress, Container, Grid, TextField } from '@mui/material';
import register from '../../../images/register.jpg'
import Typography from '@mui/material/Typography';
import { NavLink,useHistory } from 'react-router-dom';
import { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';


// Register section============================================
const Register = () => {
    const [registerData, setRegisterData] = useState({});
    const { registerUser, isLoding, user, authError } = useAuth();
    const history = useHistory();

    // handel on change======================================
    const handelOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newRegisterData = { ...registerData };
        newRegisterData[field] = value;
        console.log(newRegisterData)
        setRegisterData(newRegisterData);

    };
    // registration submit========================================
    const handleRegisterSubmit = e => {
        e.preventDefault();
        if (registerData.password !== registerData.password2) {
            alert('Your password missmass, pls try again');
            return;
        }
        registerUser(registerData.email, registerData.password, registerData.name, history);

    };

    return (
        <Container>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12} md={6} sx={{ mt: 2 }}>
                    <Typography variant="h4" component="h2">Please Register</Typography>;

                    {!isLoding && <form onSubmit={handleRegisterSubmit}>

                        <TextField sx={{ width:'70%', m:1}}
                            id="standard-basic"
                            label="Your Name"
                            name='name'
                            onBlur={handelOnBlur}
                            variant="filled"
                        />
                        <br/>

                        <TextField sx={{ m: 1, width: '70%' }}
                            id="standard-basic"
                            label="Your Email"
                            name='email'
                            type='email'
                            onBlur={handelOnBlur}
                            variant="filled"

                        /> <br />


                        <TextField sx={{ width: '70%', m: 1 }}
                            id="standard-basic"
                            label="Password"
                            type="password"
                            name='password'
                            onBlur={handelOnBlur}
                            autoComplete="current-password"
                            variant="filled"
                        />
                        <br />
                        <TextField sx={{ width: '70%' }}
                            id="standard-basic"
                            label=" Re Enter your Password"
                            type="password"
                            name='password2'
                            onBlur={handelOnBlur}
                            autoComplete="current-password"
                            variant="filled"
                        />
                        <br />
                        <Button type='submit' sx={{ m: 2, width: '70%' }} variant="contained">Register</Button>
                        <NavLink style={{ textDecoration: 'none' }} to='login'>

                            <Button variant="text">Already Register?? Please Login</Button>
                        </NavLink>
                    </form>}
                    {/* condition section=================================== */}
                    {isLoding && <CircularProgress color="secondary" />}

                    {user?.email && <Alert severity="success">
                        <AlertTitle>Success</AlertTitle>
                        Wellcome you are Aded
                    </Alert>}

                    {authError && <Alert severity="error">
                        <AlertTitle>Error</AlertTitle>
                        {authError}
                    </Alert>}

                </Grid>

                <Grid item xs={6}>
                    <img style={{ width: '100%', mt: '10' }} src={register} alt='' />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Register;