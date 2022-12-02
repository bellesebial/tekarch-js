import * as React from 'react';
import './background.css';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import NavBar from './NavBar';
import {Link} from 'react-router-dom';

function TbrList() {
  return (
       <><NavBar />
    <div className='background'>
       <div>
       
      <Card sx={{ textAlign: 'left', width: 300, height: 310, 
            marginLeft: 4, marginRight: 4, marginBottom: '2rem', 
            backgroundColor: 'white', color: 'black'  }}>
      <CardMedia 
        component="img"
        alt="green iguana"
        height="140"
        image="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/contemporary-fiction-night-time-book-cover-design-template-1be47835c3058eb42211574e0c4ed8bf_screen.jpg?ts=1637012564"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Title
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Author | Published
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Synopsis
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="Medium">Update</Button>
        <Button size="Medium">Delete</Button>
      </CardActions>
    </Card>
    </div>  
      <Fab sx={{ width: 100, height: 100}} color="primary" aria-label="add">
        <AddIcon />
        <Link to="/createbook" style={{textDecoration:'inherit', color: 'orange'}}></Link> <br></br>
      </Fab>
      </div></>

  );
}

export default TbrList;
