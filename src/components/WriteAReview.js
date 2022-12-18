import * as React from 'react';
import { Box, Breadcrumbs, Card, CardContent, CardMedia, Grid, Stack, TextField, Typography, Rating, Link} from '@mui/material';
import { useNavigate} from 'react-router-dom';
import NavBar from './NavBar';
import { useState, useEffect } from 'react';
import './style.css';
import axios from 'axios';

export default function WriteAReview() {
  const [review, setReview] = useState('')
  const [rating, setRating] = useState('')

  let history = useNavigate();

  useEffect(() => {
    loadReviews();
},[]);

const loadReviews = async () => {
  const result = await axios.get("http://localhost:8080/review/getAllReview");
  setReview(result.data);
};

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
        <Breadcrumbs separator=">" aria-label="breadcrumb" sx={{ marginTop: 4, marginLeft: 8 }}>
        <Link color="black" fontSize={23} fontWeight={10} underline="hover" href="/reviewpage">User's Review</Link>
        <Link color="orange" fontSize={23} fontWeight={10} underline="hover" href="/writeareview">Write a Review</Link>
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
                      <Rating name="simple-controlled" value={review.rating} onChange={(e)=>setRating(e.target.value)}/>
                  </Typography>
              </Grid>
              <Grid item xs={2} sx={{ marginTop: 5 }}>
                  <Typography  variant="h6" sx={{ display: 'center', alignContent: 'left' }}>What did you think?</Typography>
                  <Box sx={{ display: 'left', flexDirection: 'row' }}>
                      <TextField variant="outlined" multiline rows={9} sx={{ width: 600 }} value={review.review} onChange={(e)=>setReview(e.target.value)} />
                  </Box>
                  <Stack spacing={2} direction="row" sx={{ marginTop: '1rem' }}>
                  <Link to={'/reviewpage'}><input className="btn" type="submit" name="btnPost" label="btnPost" value="POST" onClick={(e)=>handleSubmit(e)}/></Link>
                  </Stack>
              </Grid>
          </Grid></div></div></>
  );
}