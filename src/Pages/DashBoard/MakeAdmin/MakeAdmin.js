import { Alert, AlertTitle, Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
const [email, setEmail] = useState('');
const [adminSuccess, setAdminSuccess] = useState(false);

const handleOnBlur =e=>{
    setEmail(e.target.value);
}
    const handleAdminSubmit =e=>{
        e.preventDefault();
        const user= {email};
        fetch('http://localhost:5000/users/admin',{
            method:'PUT',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.modifiedCount){
                console.log(data);
                setAdminSuccess(true);
                // setEmail('');
                
            }
            
            // setEmail(data)
        })

    }

    return (
        <div>
            <h1>Make An Admin</h1>
            <form  onSubmit={handleAdminSubmit}>
            <TextField  
            sx={{width:'30%'}}
            label="email"
            email='email'
            type='email'
            onBlur={handleOnBlur}
             variant="standard" /><br/>
            <Button sx={{m:2}} type='submit' variant='contained'>Make Admin</Button>
            </form>
            {adminSuccess && <Alert severity="success">
                        <AlertTitle>Success</AlertTitle>
                        Wellcome you are Admin Now
                    </Alert>}
        </div>
    );
};

export default MakeAdmin;