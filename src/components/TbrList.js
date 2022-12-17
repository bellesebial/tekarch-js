import React, {useEffect, useState } from 'react';
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
import TextField from '@mui/material/TextField';
import axios from "axios";
import { Link, useParams } from 'react-router-dom';

export default function TbrList() {

const [list,setList]=useState([])

const {id}=useParams()

useEffect(() => {
  loadLists();
}, [])

const loadLists = async () => {
  const result = await axios.get("http://localhost:8080/tbr/getAllBook");
  setList(result.data);
};

// const updateList=async(id)=>{
//   await axios.put(`http://localhost:8080/tbr/putBook/${id}`)
//   loadLists()
// }

const deleteList=async(id)=>{
  await axios.delete(`http://localhost:8080/tbr/deleteBook/${id}`)
  loadLists()
}

  return (
       <><NavBar />
    <div className='background'>
    <div className="search">
        <TextField id="outlined-basic" variant="outlined" fullWidth label="Search"/>
    </div>
    <div>
      {list.map((list) => (

      <Card className='card' sx={{ textAlign: 'left', width: 300, height: 310, 
            marginLeft: 4, marginRight: 4, marginBottom: '2rem', marginTop: '0%',
            backgroundColor: 'white', color: 'black'  }}>
      <CardMedia 
        component="img"
        alt="/"
        height="145"
        image="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/contemporary-fiction-night-time-book-cover-design-template-1be47835c3058eb42211574e0c4ed8bf_screen.jpg?ts=1637012564"
      />

        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {list.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {list.author} | {list.published}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {list.genre}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {list.synopsis}
        </Typography>

        <CardActions>
        <Button size="Medium" 
        href="/updatebook" 
        // to={`/updatebook/${list.id}`}
        // onClick={()=>updateList(list.id)}
        >Update</Button>
        <Button size="Medium" onClick={()=>deleteList(list.id)}>Delete</Button>
      </CardActions>

      </CardContent>
    </Card>
      ))}
    </div>  
      <Fab sx={{ width: 100, height: 100}} color="primary" aria-label="add" href="/createbook">
        <AddIcon class='fab'/>
      </Fab>
      </div></>

  );
}

