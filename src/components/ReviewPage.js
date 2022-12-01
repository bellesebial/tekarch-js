import * as React from 'react';
import { Card, CardMedia, Grid, Typography, Stack, Breadcrumbs, Rating } from '@mui/material';
import Link from '@mui/material/Link';

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }

export default function ReviewPage() {
    const [value, setValue] = React.useState(2);
    const breadcrumbs = [
        <Link underline="hover" key="1" color="orange" href="/" variant="h5" onClick={handleClick}>User's Review</Link>,
      ];
  return (
    <><Stack spacing={2} sx={{ marginLeft: 10, marginTop: 5 }}>
          <Breadcrumbs
              aria-label="breadcrumb"
          >
              {breadcrumbs}
          </Breadcrumbs>
      </Stack>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 4, md: 3 }}>
              <Grid item xs={2.5}>
                  <Typography
                      variant="h4"
                      component="a"
                      sx={{
                          mr: 2,
                          display: { xs: 'flex', md: 'flex' },
                          fontFamily: 'inherit',
                          fontWeight: 40,
                          fontSize: 25,
                          color: '',
                          marginLeft: 15,
                          marginTop: 4
                      }}
                  >Book Cover
                  </Typography>
                  <Card sx={{ width: 200, marginLeft: 12, marginBottom: '1rem', marginTop: 5, backgroundColor: 'white', color: 'black' }}>
                      <CardMedia
                          component="img"
                          height="250"
                          alt="book cover" />
                  </Card>
              </Grid>
              <Grid item xs={2}>
                  <Typography
                      variant="h4"
                      component="a"
                      sx={{
                          mr: 2,
                          display: { xs: 'flex', md: 'flex' },
                          fontFamily: 'inherit',
                          fontWeight: 40,
                          fontSize: 25,
                          color: '',
                          marginLeft: 8.5,
                          marginTop: 4
                      }}
                  >Title
                  </Typography>
              </Grid>
              <Grid item xs={2}>
                  <Typography
                      variant="h4"
                      component="a"
                      sx={{
                          mr: 2,
                          display: { xs: 'flex', md: 'flex' },
                          fontFamily: 'inherit',
                          fontWeight: 40,
                          fontSize: 25,
                          color: '',
                          marginLeft: 8.5,
                          marginTop: 4
                      }}
                  >Author
                  </Typography>
              </Grid>
              <Grid item xs={2}>
                  <Typography
                      variant="h4"
                      component="a"
                      sx={{
                          mr: 2,
                          display: { xs: 'flex', md: 'flex' },
                          fontFamily: 'inherit',
                          fontWeight: 40,
                          fontSize: 25,
                          color: '',
                          marginLeft: 8.5,
                          marginTop: 4
                      }}
                  >Rating
                  </Typography>
                  <Rating sx={{marginTop:5}}
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                    setValue(newValue);
                    }}/>
              </Grid>
              <Grid item xs={2}>
                  <Typography
                      variant="h4"
                      component="a"
                      sx={{
                          mr: 2,
                          display: { xs: 'flex', md: 'flex' },
                          fontFamily: 'inherit',
                          fontWeight: 40,
                          fontSize: 25,
                          color: '',
                          marginLeft: 8.5,
                          marginTop: 4,
                          marginBotton: '10rem'
                      }}
                  >Review
                  </Typography>
                  <br />
                  <br />
                  <Link sx={{ fontSize: 20, color: 'orange' }}>Write a Review</Link> <br />
                  <Link sx={{ fontSize: 20, color: 'orange' }}>Update a Review</Link>
              </Grid>
          </Grid></>
  );
}