import { Card, CardMedia, Grid, Typography, Stack, Breadcrumbs, Rating, Link, Box } from '@mui/material';
import NavBar from './NavBar';
import './style.css';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default function ReviewPage() {
    const [review, setReview] = useState([]);
    const [rating, setRating] = useState('');   
    const [list,setList]=useState([])

    useEffect(() => {
        loadReviews();
        loadLists();
    },[]);

    const loadReviews = async () => {
        const resultR = await axios.get("http://localhost:8080/review/getAllReview");
        setReview(resultR.data);
      };
    
    const loadLists = async () => {
     const resultB = await axios.get("http://localhost:8080/tbr/getAllBook");
     setList(resultB.data);
    };

  return (
    <><NavBar />
    <div>
         <Breadcrumbs separator=">" aria-label="breadcrumb" sx={{ marginTop: 4, marginLeft: 8 }}>
          <Link color="orange" fontSize={23} fontWeight={10} underline="hover" href="/reviewpage">User's Review</Link>
          </Breadcrumbs>
    </div>
    <div>
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 4, md: 3 }}>
    <Typography variant="h5" component="a"
                    sx={{ mr: 2, display:{xs:'flex',md:'flex'}, fontFamily: 'inherit', fontWeight: 40, fontSize: 25, color: '', marginLeft: 19, marginTop: 4}}>
                  Book Cover</Typography>
    <Typography variant="h5" component="a"
                      sx={{ mr: 2, display:{xs:'flex',md:'flex'}, fontFamily: 'inherit', fontWeight: 40, fontSize: 25, color: '', marginLeft: 14, marginTop: 4}}>
                    Title </Typography>
     <Typography variant="h5" component="a"
                    sx={{ mr: 2, display:{xs:'flex',md:'flex'}, fontFamily: 'inherit', fontWeight: 40, fontSize: 25, color: '', marginLeft: 21, marginTop: 4}}>
                  Author</Typography>
    <Typography variant="h5" component="a"
                      sx={{ mr: 2, display:{xs:'flex',md:'flex'}, fontFamily: 'inherit', fontWeight: 40, fontSize: 25, color: '', marginLeft: 19.5, marginTop: 4}}>
                  Rating</Typography>
    <Typography variant="h5" component="a"
                      sx={{ mr: 2, display:{xs:'flex',md:'flex'}, fontFamily: 'inherit', fontWeight: 40, fontSize: 25, color: '', marginLeft: 18, marginTop: 4}}>
                  Review</Typography>
    </Grid>
    {list.map((list) => (
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 4, md: 3 }}>
              <Grid item xs={2.5}>
                  <Card sx={{ width: 200, marginLeft: 12, marginBottom: '1rem', marginTop: 5, backgroundColor: 'white', color: 'black' }}>
                      <CardMedia
                            image="/images/uglylove.jpeg"
                          component="img"
                          height="250"
                          alt="book cover" />
                  </Card>
              </Grid>
              <Grid item xs={2}>
                  <Typography component="div" variant="h5" sx={{marginTop:5, color:"grey"}}>{list.title}</Typography>
              </Grid>
              <Grid item xs={2}>
                  <Typography component="div" variant="h5" sx={{marginTop:5, color:"grey"}}>{list.author}</Typography>
              </Grid>
              <Grid item xs={2}>
                  <br/> <br/>
                  {review.map((review) => (
                  <Rating name="simple-controlled" value={review.rating} onChange={(e)=>setRating(e.target.value)}></Rating>
                  ))}
              </Grid>
              <Grid item xs={2}>
                  <br />
                  <br />
                  {review.map((review) => (
                  <Box marginTop="10" color="grey">{review.review}</Box>
                  ))}
                  <br/>
                  <Link color="orange" fontSize={20} fontWeight={12} underline="hover" href="/writeareview">Write a Review</Link>
                  <br/>
                    <Link color="orange" fontSize={20} fontWeight={12} underline="hover" href="/updateareview">Update a Review</Link>
              </Grid>
          </Grid>
          ))}
        </div></>
    );
}