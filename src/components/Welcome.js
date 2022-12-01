import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './user.css';
import {Link} from 'react-router-dom';


export default function Welcome (){
   return (
   <div className='main'>
    <div className='sub'>
            <div className="welcome"> <h1>Welcome back Teknoy!</h1>
            </div>

    <Box
    className='box'
      component="form"
      sx={{'& > :not(style)': { m: 1, width: '25ch'}, justifyContent: 'center', marginTop: '-40px'}}
      noValidate
      autoComplete="off"
    >
        <TextField id="outlined-basic" label="Username" variant="outlined" color='success'/> <br></br>
        <TextField id="outlined-basic" label="Password" variant="outlined" color='success' /> <br></br> <br></br>
        
        <Link to="/" style={{textDecoration:'inherit', color:'orange'}} > Forgot Password?</Link>
        <Link to="/signup" style={{textDecoration:'inherit', color: 'orange'}}>Sign Up Here</Link> <br></br>
        <br></br>
        <Link to = "/dashboard" style={{textDecoration:'inherit'}}> <Button sx={{backgroundColor: 'rgb(255, 113, 47)', width:'120px'}} variant="contained">Log In</Button>
        </Link> 
        
                </Box>
            </div>
        </div>

   )
}