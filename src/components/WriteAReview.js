import * as React from 'react';
import { Box, Breadcrumbs, Grid, Stack, TextField, Typography, Rating, Link} from '@mui/material';
import { useNavigate} from 'react-router-dom';
import NavBar from './NavBar';
import { useState, useEffect } from 'react';
import './style.css';
import axios from 'axios';

export default function WriteAReview() {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [review, setReview] = useState('')
  const [rating, setRating] = useState('')

  let history = useNavigate();

  const handleSubmit =(e) => {
    e.preventDefault();
    const rev={title,author,review, rating}
    console.log(rev)
    fetch("http://localhost:8080/review/postReview",{
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body:JSON.stringify(rev)
    }).then(()=>{
      console.log("added")
      alert("Review successfully added")
      history("/reviewpage");
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
              <Box
      marginTop={9} marginLeft={-15}
      component="form"
      sx={{'& > :not(style)': { m: 1, width: '25ch'}}}
      noValidate
      autoComplete="off"
    >
        </Box>
                  <Typography sx={{ display: 'center', marginLeft: 15, alignItems: 'center', fontSize: 20, marginBottom:3}}>Title:
                      &nbsp; &nbsp; &nbsp; &nbsp;
                      <TextField id="outlined-basic" variant="outlined"
                      value={title} onChange={(e)=>setTitle(e.target.value)}/>
                  </Typography>
                  <Typography sx={{ display: 'center', marginLeft: 15, alignItems: 'center', fontSize: 20, marginBottom:3}}>Author:
                      &nbsp; &nbsp;
                      <TextField id="outlined-basic" variant="outlined"
                      value={author} onChange={(e)=>setAuthor(e.target.value)}/>                  
                      </Typography>
                  <Typography sx={{ display: 'center', marginLeft: 15, alignItems: 'center', fontSize: 20, marginBottom:3}}>Rating:
                      &nbsp; &nbsp;
                      <Rating name="simple-controlled" value={rating} onChange={(e)=>setRating(e.target.value)}/>
                  </Typography>
              </Grid>
              <Grid item xs={2} sx={{ marginTop: 5 }}>
                  <Typography  variant="h6" sx={{ display: 'center', alignContent: 'left' }}>What did you think?</Typography>
                  <Box sx={{ display: 'left', flexDirection: 'row' }}>
                      <TextField variant="outlined" multiline rows={8} sx={{ width: 600 }} value={review} onChange={(e)=>setReview(e.target.value)} />
                  </Box>
                  <Stack spacing={2} direction="row" sx={{ marginTop: '1rem' }}>
                  <Link to={'/reviewpage'}><input className="btn" type="submit" name="btnPost" label="btnPost" value="POST" onClick={(e)=>handleSubmit(e)}/></Link>
                  </Stack>
              </Grid>
          </Grid></div></div></>
  );
}