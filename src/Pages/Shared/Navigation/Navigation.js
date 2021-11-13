import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Navigation = () => {
  const {user, logOut} = useAuth();
    return (
        <Box sx={{ flexGrow: 1 , mb:2}}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            3RD EYE INFOTECH
          </Typography>

          <Link to='/home'style={{textDecoration:'none',color:'white'}}><Button color="inherit">Home</Button></Link>
          {/* <Link to='/productdetails'style={{textDecoration:'none',color:'white'}}><Button color="inherit">Products Details</Button></Link> */}
          <Link to='/products'style={{textDecoration:'none',color:'white'}}><Button color="inherit">Products</Button></Link>

          <Link to='register'style={{textDecoration:'none',color:'white'}}> <Button color="inherit">Register</Button></Link>
          
          {
            user?.email? 
            <Box>
              <Link to='/dashboard'style={{textDecoration:'none',color:'white'}} ><Button  color="inherit">Dash Board</Button></Link>
              
               <Button style={{textDecoration:'none',color:'white'}} onClick={logOut}  color="inherit">Logout</Button>
            </Box>
           
              : 
            <Link to='/login'style={{textDecoration:'none',color:'white'}} ><Button  color="inherit">Login</Button></Link>
          }
          
         
          
          
        </Toolbar>
      </AppBar>
    </Box>
    );
};

export default Navigation;