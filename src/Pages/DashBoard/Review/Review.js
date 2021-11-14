import { Divider } from '@mui/material';
import React, { useRef } from 'react';

const Review = () => {
const nameRef = useRef();
const emailRef = useRef();
const reviewCommantRef =useRef();

    const handleReviewSubmit = e =>{
        e.preventDefault()
        const name =nameRef.current.value;
        const email =emailRef.current.value;
        const review =reviewCommantRef.current.value;

        const newUser = {name, email, review};

        fetch('http://localhost:5000/reviews',{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(newUser)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.insertedId){
                alert('reviews submited')
                e.target.reset()
            }
        })
    }
    return (
        <div>
            <h2>Write Your Review</h2>
            <Divider/>
            <form  onSubmit={handleReviewSubmit}>
                <input style={{width:'30%',m:'12'}} type="name" ref={nameRef} placeholder='Name'/> <br/>
                <input style={{width:'30%',m:'12'}} type="email" name='' id='' ref={emailRef} placeholder ="email" /> <br/>
                <input style={{width:'30%',m:'12'}} type="review"  ref={reviewCommantRef} placeholder='Write your Review' /> <br/>
                <input type="submit" value='Submit' />

            </form>
        </div>
    );
};

export default Review;