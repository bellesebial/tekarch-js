import './background.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Breadcrumbs, Link, Grid } from '@mui/material';
import NavBar from './NavBar';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Create Register User Form

const Create = {
    float: 'left',
    padding: '40px',
    textAlign: 'left',
    justifyContent: 'left',
    alignItems: 'left'

}

export default function CreateBook(){

    let navigate=useNavigate()

    const [list,setList]=useState({
        image:"",
        title:"",
        author:"",
        published:"",
        genre:"",
        synopsis:""
    })

    const{image, title, author, published, genre, synopsis}=list

    // const onInputChange=(e)=>{
    //     setList({...list, [e.target.name]:e.target.value})
    // }

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/tbr/postBook",list)
        navigate("/")
    };

    return (
        <><NavBar />
        <div>
            <Breadcrumbs separator=">" aria-label="breadcrumb" sx={{ marginTop: 2, marginLeft: 4 }}>
              <Link color="black" fontSize={25} fontWeight={10} underline="hover" href="/tbrlist">
                  Teknoy Archives
              </Link>
              <Link color="orange" fontSize={25} fontWeight={10} underline="hover">
                  Create Review
              </Link>
          </Breadcrumbs> 
    <div>
        <div className="create" style={Create}>

            <form onSubmit={(e) => onSubmit(e)}>
            <Box
            component="form"
            sx={{'& > :not(style)': { m: 1, width: '25ch'}}}
            noValidate
            autoComplete="off"
            >
            Enter Book Title &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <TextField id="outlined-basic" label="Enter Book TItle" variant="outlined" color='success' value={title} /><br></br>
            {/* <input type={"text"} className="form-control" placeholder="Enter Book Title" name="title" value={title} onChange={(e)=>onInputChange(e)}/> */}

            Enter Author &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <TextField id="outlined-basic" label="Enter Author" variant="outlined" color='success' value={author} /><br></br>
            {/* <input type={"text"} className="form-control" placeholder="Enter Author" name="author" value={title} onChange={(e)=>onInputChange(e)}/> */}

            Enter Published Date &nbsp;
            <TextField id="outlined-basic" label="Enter Published Date" variant="outlined" color='success' value={published} />
            {/* <input type={"text"} className="form-control" placeholder="Enter Published Date" name="date" value={title} onChange={(e)=>onInputChange(e)}/> */}

            <Box component="span" sx={{ p: 10, border: '1px dashed grey', textAlign:'right', marginLeft:'10rem' }} value={image} >
            <Button >Upload/Drag the photo here</Button>
            </Box><br></br>

            Enter Genre &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <TextField id="outlined-basic" label="Enter Genre" variant="outlined" color='success' value={genre} /> <br></br>
            {/* <input type={"text"} className="form-control" placeholder="Enter Genre" name="genre" value={title} onChange={(e)=>onInputChange(e)}/> */}

            Enter Synopsis 
            <Grid item xs={2} sx={{marginTop:5}}  >
                      <Box sx={{ display: 'left', flexDirection: 'row' }}>
                          <TextField variant="outlined" multiline rows={9} sx={{ width: 600 }} value={synopsis}/>
                          {/* <input type={"text"} className="form-control" placeholder="Enter Synopsis" name="synopsis" value={title} onChange={(e)=>onInputChange(e)}/> */}
                      </Box>
              </Grid>
            </Box>
            <Button sx={{ width: 150, height: 50, marginLeft: 4, marginRight: 4}} variant="contained" href="/tbrlist">Add Book</Button> 
            <Button sx={{ width: 150, height: 50, marginLeft: 4, marginRight: 4}} variant="contained" href="/tbrlist">Cancel</Button>
            </form>
            </div>

    </div>
    </div></>
    )
}