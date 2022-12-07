import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const cards = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '40px'
}


export default function AboutUs() {
  return (
    <div style={cards}>
        <div>
    <Card sx={{ width: '240px', height: '380px', marginRight: '40px'}}>
        <br></br>
      <CardMedia
        component="img"
        image="eloisa.jpg"
        alt="eloisa"
      />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Eloisa Marie Desucatan
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Full Stack Developer
        </Typography>
      </CardContent>

    </Card>
    </div>
        <div>
        <Card sx={{ width: '240px', height: '380px', marginRight: '40px' }}>
        <br></br>
      <CardMedia
        component="img"
        image="belle.png"
        alt="belle"
      />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Belle Hannah Sebial
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Full Stack Developer
        </Typography>
      </CardContent>
      </Card>
        </div>
        <div>
        <Card sx={{ width: '240px', height:'380px', marginRight: '40px' }}>
        <br></br>
      <CardMedia
        component="img"
        height="240"
        image="joann.jpg"
        alt="joann"
      />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Joann Alfante
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Full Stack Developer
        </Typography>
      </CardContent>
      </Card>
        </div>
    </div>
    
  );
}
