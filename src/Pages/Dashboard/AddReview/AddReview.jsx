import { Box, Button, Container, Grid, Link, Paper, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { useStyles } from './AddReviewStyle';


const AddReview = () => {

    const [review,setReview] = useState({})
    const classes = useStyles();

    /*
    * submit review data by form
    */

   const handlReviewInput = (e) => {
       const field = e.target.name;
       const value = e.target.value;
       const newFormnData = { ...review };
       newFormnData[field] = value;
       setReview(newFormnData)
   }

   const handleReviewSubmit = (e) => {

       ///addTeam;
       console.log("service Info",review)

       e.preventDefault();

       fetch("https://powerful-peak-13797.herokuapp.com/reviews", {
       method: "POST",
       headers: {
           "content-type": "application/json",
       },
       body: JSON.stringify(review),
       })
       .then((res) => res.json())
       .then((result) => {
           if (result.insertedId) {
           alert('review added',result.insertedId)
           }
       });
   }

    return (
        <>
            <Typography style={{margin:'20px 0'}} variant='h3'>
                Add Review
            </Typography>
            <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid item>
                <Box className={classes.serviceForm} >
                    <form onSubmit={handleReviewSubmit}>
                        <TextField
                        onChange={handlReviewInput}
                        defaultValue=""
                        name='name' 
                        style={{width:'75%' }} 
                        id='name' label='Name' 
                        type='text' 
                        variant='standard' />

<TextField
                        onChange={handlReviewInput}
                        defaultValue=""
                        name='profession' 
                        style={{width:'75%' }} 
                        id='profession' label='Profession' 
                        type='text' 
                        variant='standard' />

                        <TextField
                        onChange={handlReviewInput}
                        defaultValue=""
                        name='rating' 
                        style={{width:'75%' }} 
                        id='rating' label='Rating' 
                        type='text' 
                        variant='standard' />

                        <TextField
                        onChange={handlReviewInput}
                        defaultValue=""
                        name='feedback' 
                        style={{width:'75%' }} 
                        id='feedback' label='Feedback' 
                        type='text'
                        variant='standard' multiline maxRows={4} />

                        <TextField
                        onChange={handlReviewInput} 
                        name='image' 
                        style={{width:'75%'}} id='image' 
                        label='Image URL' 
                        type='text'
                        variant='standard' />

                        <Button 
                        style={{width:'75%',marginTop:20 }} 
                        type='submit'
                        variant='contained' 
                        color="primary">Submit</Button>
                    </form>
                </Box>
            </Grid>
            </Grid>
            
        </>
    );
};

export default AddReview;