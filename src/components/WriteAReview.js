import * as React from 'react';
import { Box, Breadcrumbs, Button, Card, CardContent, CardMedia, Grid, Stack, TextField, Typography, Rating} from '@mui/material';
import {Link, useNavigate} from 'react-router-dom';
import NavBar from './NavBar';
import { useState } from 'react';

export default function WriteAReview() {

  const [review, setReview] = useState('')
  const [rating, setRating] = useState('')

  let history = useNavigate();

  const handleSubmit =(e) => {
    e.preventDefault();
    const rev={review, rating}
    console.log(rev)
    fetch("http://localhost:8080/review/postReview",{
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body:JSON.stringify(rev)
    }).then(()=>{
      console.log("added")
      alert("Review successfully added")
      history("/");
    })
    
}

  return (
    <><NavBar />
        <div>
        <Breadcrumbs separator=">" aria-label="breadcrumb" sx={{ marginTop: 2, marginLeft: 4 }}>
        <Link to="/reviewpage" style={{ fontSize: 20, color: 'inherit' }} >User's Review</Link>,
        <Link to="/writeareview" style={{ fontSize: 20, color: 'orange' }} >Write a Review</Link>          
        </Breadcrumbs>
        <div>
          <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 4, md: 3 }}>
              <Grid item xs={5}>
                  <Card sx={{ textAlign: 'center', width: 200, marginLeft: 15, marginBottom: '1rem', marginTop: '2rem', backgroundColor: 'white', color: 'black' }}>
                      <Box>
                          <CardMedia component="img" height="250" sx={{ width: 200 }}
                            image="/images/uglylove.jpeg"
                            alt="book cover" />
                      </Box>
                      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                          <CardContent sx={{ flex: '1 auto' }}>
                              <Typography component="div" variant="h5"> Ugly Love
                              </Typography>
                              <Typography variant="subtitle1" color="black" component="div"> Colleen Hover
                              </Typography>
                          </CardContent>

                      </Box>
                  </Card>
                  <Typography sx={{ display: 'center', marginLeft: 15, alignItems: 'center', fontSize: 20 }}>Rating:
                      &nbsp;
                      <Rating name="simple-controlled" value={rating} onChange={(e)=>setRating(e.target.value)}/>
                  </Typography>
              </Grid>
              <Grid item xs={2} sx={{ marginTop: 5 }}>
<<<<<<< Updated upstream
                  <Typography  variant="h6" sx={{ display: 'center', alignContent: 'left' }}>What did you think?</Typography>
=======
                  <Typography  variant="h5" sx={{ display: 'center', alignContent: 'left' }}>What did you think?</Typography>
>>>>>>> Stashed changes
                  <Box sx={{ display: 'left', flexDirection: 'row' }}>
                      <TextField variant="outlined" multiline rows={9} sx={{ width: 600 }} value={review} onChange={(e)=>setReview(e.target.value)} />
                  </Box>
                  <Stack spacing={2} direction="row" sx={{ marginTop: '1rem' }}>
                      <Button variant="contained" sx={{ backgroundColor: 'orange' }} onClick={(e)=>handleSubmit(e)}>POST</Button>
                  </Stack>
              </Grid>
          </Grid></div></div></>
  );
}