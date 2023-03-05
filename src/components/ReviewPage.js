import { Grid, Typography, Breadcrumbs, Rating, Link, Box, Button } from '@mui/material';
import NavBar from './NavBar';
import './style.css';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import DeleteIcon from '@mui/icons-material/Delete';

export default function ReviewPage() {
    const [review, setReview] = useState([]);
    const [rating, setRating] = useState('');   

    useEffect(() => {
        loadReviews();
    },[]);

    const loadReviews = async () => {
        const result = await axios.get("http://localhost:8080/review/getAllReview");
        setReview(result.data);
      };
    
      const deleteReview=async(reviewID)=>{
        await axios.delete(`http://localhost:8080/review/deleteReview/${reviewID}`)
        loadReviews()
        alert("Review deleted.")
      }

  return (
    <><NavBar />
    <div>
         <Breadcrumbs separator=">" aria-label="breadcrumb" sx={{ marginTop: 4, marginLeft: 8 }}>
          <Link color="orange" fontSize={23} fontWeight={10} underline="hover" href="/reviewpage">User's Review</Link>
          </Breadcrumbs>
    </div>
    <div>
    <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 4, md: 0.1 }} sx={{marginTop:2}}>
    <Typography variant="h5" component="a"
                      sx={{mr: 2, display:{xs:'flex',md:'flex'}, fontFamily: 'inherit', fontWeight: 40, fontSize: 25, color: '', marginLeft: 16, marginTop: 4}}>
                    Book Title </Typography>
     <Typography variant="h5" component="a"
                    sx={{ mr: 2, display:{xs:'flex',md:'flex'}, fontFamily: 'inherit', fontWeight: 40, fontSize: 25, color: '', marginLeft: 19, marginTop: 4}}>
                  Author</Typography>
    <Typography variant="h5" component="a"
                      sx={{ mr: 2, display:{xs:'flex',md:'flex'}, fontFamily: 'inherit', fontWeight: 40, fontSize: 25, color: '', marginLeft: 13, marginTop: 4}}>
                  Rating</Typography>
    <Typography variant="h5" component="a"
                      sx={{ mr: 2, display:{xs:'flex',md:'flex'}, fontFamily: 'inherit', fontWeight: 40, fontSize: 25, color: '', marginLeft: 16, marginTop: 4}}>
                  Review</Typography>
                  <Button className='dlt' variant="contained" href="/writeareview" style={{backgroundColor:'#ff712f', height:45, width:184, marginLeft:100, marginTop:25}}>Add a Book Review</Button>
    </Grid>
    {review.map((review) => (
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 3, md: 2 }}>
              <Grid item xs={3.2}>
                  <Typography component="div" variant="h6" sx={{marginTop:5, color:"grey"}}>{review.title}</Typography>
              </Grid>
              <Grid item xs={1.1}>
                  <Typography component="div" variant="h6" sx={{marginTop:5, color:"grey"}}>{review.author}</Typography>
              </Grid>
              <Grid item xs={2.1}>
                  <br/> <br/>
                  <Rating name="read-only" value={review.rating} readOnly></Rating>
              </Grid>
              <Grid item xs={1.5}>
                  <br />
                  <br />
                  <Box marginTop="10" color="grey"><Typography sx={{fontSize:18}}>{review.review}</Typography></Box>
              </Grid>
              <Grid item xs={1.7}>
                <DeleteIcon className='dlt' sx={{marginTop:4, marginLeft:13, fontSize:28, color:'orange'}} onClick={()=>deleteReview(review.reviewID)} />
              </Grid>
          </Grid>
          ))}
        </div></>
    );
}