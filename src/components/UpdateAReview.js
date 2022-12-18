import * as React from 'react';
import { Box, Breadcrumbs, Button, Card, CardContent, CardMedia, Grid, Stack, TextField, Typography, Rating, Link} from '@mui/material';
import NavBar from './NavBar';
import './style.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

export default function WriteAReview() {
  const [rating, setRating] = useState('');
  const [review, setReview] = useState([]);

  const {reviewID}=useParams()

  useEffect(() => {
    loadReviews();
  }, []);

const who = sessionStorage.getItem('reviewID');

const loadReviews = async () => {
    const result = await axios.get("http://localhost:8080/review/getAllReview");
    setReview(result.data);
  };

  let history = useNavigate();

  const handleSubmit =(e) => {
    e.preventDefault();
    const rev={review, rating}
    console.log(rev)
    fetch("http://localhost:8080/review/putReview",{
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body:JSON.stringify(rev)
    }).then(()=>{
      console.log("updated")
      alert("Review successfully updated")
      history("/");
    })  
}

  const deleteReview=async(reviewID)=>{
    await axios.delete(`http://localhost:8080/review/deleteReview/${reviewID}`)
    loadReviews()
  }

  return (
    <><NavBar />
     <div>
            <Breadcrumbs separator=">" aria-label="breadcrumb" sx={{ marginTop: 4, marginLeft: 8 }}>
            <Link color="black" fontSize={23} fontWeight={10} underline="hover" href="/reviewpage">User's Review</Link>
            <Link color="orange" fontSize={23} fontWeight={10} underline="hover" href="/writeareview">Update a Review</Link>
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
                              <Typography component="div" variant="h5">Ugly Love
                              </Typography>
                              <Typography variant="subtitle1" color="black" component="div">Colleen Hover
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
                      <TextField variant="outlined" multiline rows={9} sx={{ width: 600 }}>{review.review}</TextField>
                  </Box>
                  <Stack spacing={2} direction="row" sx={{ marginTop: '1rem' }}>
                  <Link to={'/reviewpage'}><input className="btn" type="submit" name="btnPost" label="btnPost" value="SAVE" onClick={(e)=>handleSubmit(e)}/></Link>
                  <Link to={'/reviewpage'}><input className="btn" type="submit" name="btnPost" label="btnPost" value="DELETE" to="/reviewpage" onClick={()=>deleteReview(review.reviewID)}/></Link>
                    </Stack>
              </Grid>
          </Grid>
          </div></div></>
  );
}