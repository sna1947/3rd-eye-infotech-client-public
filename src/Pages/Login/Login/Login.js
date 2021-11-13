import { Alert, AlertTitle, Button, CircularProgress, Container, Grid, TextField } from '@mui/material';
import login from '../../../images/login.jpg'
import Typography from '@mui/material/Typography';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';

// login sec=======================================
const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser,signInWithGoogle, isLoding, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();


    // handel on change =============================
    const handelOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field, value);
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);

    };

    // handel login submit ===========================
    const handleLoginSubmit = e => {
        e.preventDefault();
        loginUser(loginData.email, loginData.password, location, history);
    };

    const handleGoogleSignIn = () =>{
        signInWithGoogle(location, history);

    }


    return (
        <Container>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12} md={6} sx={{ mt: 15 }}>
                    <Typography variant="h4" component="h2">Login</Typography>;

                    {!isLoding && <form onSubmit={handleLoginSubmit}>

                        <TextField sx={{ m: 2, width: '70%' }}
                            id="standard-basic"
                            label="Your Email"
                            name='email'
                            onChange={handelOnChange}
                            variant="standard" />

                        <br />

                        <TextField sx={{ width: '70%' }}
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            name='password'
                            onChange={handelOnChange}
                            variant="standard" />
                        <br />
                        <Button type='submit' sx={{ m: 2, width: '70%' }} variant="contained">Login</Button>
                        
                        <Button onClick={handleGoogleSignIn} type='submit' sx={{ m: 2, width: '70%' }} variant="contained">Google SignIn</Button>

                        <NavLink style={{ textDecoration: 'none' }} to='register'>
                            <Button  variant="text">New User?? Please Register</Button>
                        </NavLink>
                    </form>}
                    {/* condition section=================================== */}
                    {isLoding && <CircularProgress color="secondary" />}

                    {user?.email && <Alert severity="success">
                        <AlertTitle>Success</AlertTitle>
                        Wellcome you are Logiedin
                    </Alert>}

                    {authError && <Alert severity="error">
                        <AlertTitle>Error</AlertTitle>
                        {authError}
                    </Alert>}

                </Grid>

                <Grid item xs={6}>
                    <img style={{ width: '100%' }} src={login} alt='' />
                </Grid>

            </Grid>
        </Container>


    );
};

export default Login;