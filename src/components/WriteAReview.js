import * as React from 'react';
import Link from '@mui/material/Link';
import { Box, Breadcrumbs, Button, Card, CardContent, CardMedia, Grid, Stack, TextField, Typography, Rating } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function WriteAReview() {
  const [value, setValue] = React.useState(2);
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/" variant="h5" onClick={handleClick}>User's Review</Link>,
    <Link underline="hover" key="1" color="orange" href="/" variant="h5" onClick={handleClick}>Write A Review</Link>
  ];

  return (
    <><Stack spacing={2} sx={{ marginLeft: 10, marginTop: 5 }}>
          <Breadcrumbs
              separator={<NavigateNextIcon fontSize="medium" />}
              aria-label="breadcrumb"
          >
              {breadcrumbs}
          </Breadcrumbs>
      </Stack>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 4, md: 3 }}>
              <Grid item xs={5}>
                  <Card sx={{ textAlign: 'center', width: 200, marginLeft: 15, marginBottom: '1rem', marginTop: '2rem', backgroundColor: 'white', color: 'black' }}>
                      <Box>
                          <CardMedia component="img" height="250" sx={{ width: 200 }}
                              image="/"
                              alt="book cover" />
                      </Box>
                      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                          <CardContent sx={{ flex: '1 auto' }}>
                              <Typography component="div" variant="h5">
                              </Typography>
                              <Typography variant="subtitle1" color="black" component="div">
                              </Typography>
                          </CardContent>

                      </Box>
                  </Card>
                  <Typography sx={{ display: 'center', marginLeft: 15, alignItems: 'center', fontSize: 20 }}>Rating:
                      &nbsp;
                      <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                        setValue(newValue); }}/>
                  </Typography>
              </Grid>
              <Grid item xs={2} sx={{marginTop:5}}>
                      <Typography sx={{ display: 'center', alignContent: 'left' }}>What did you think?</Typography>
                      <Box sx={{ display: 'left', flexDirection: 'row' }}>
                          <TextField variant="outlined" multiline rows={9} sx={{ width: 600 }} />
                      </Box>
                      <Stack spacing={2} direction="row" sx={{ marginTop: '1rem' }}>
                          <Button variant="contained" sx={{ backgroundColor: 'orange' }}>POST</Button>
                      </Stack>
              </Grid>
          </Grid></>
  );
}