import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './user.css';
import {Link} from 'react-router-dom';


export default function SignUp(){
    return (
        <div className='main'>
            <div className='signsub'>
        <Box
      component="form"
      sx={{'& > :not(style)': { m: 1, width: '25ch'}}}
      noValidate
      autoComplete="off"
    >
        <TextField id="outlined-basic" label="Username" variant="outlined" color='success'/> <br></br>
        <TextField id="outlined-basic" label="Password" variant="outlined" color='success'/> <br></br>
        <TextField id="outlined-basic" label="Program" variant="outlined" color='success'/> <br></br>
        <TextField id="outlined-basic" label="Year" variant="outlined" color='success'/> <br></br>
        <TextField id="outlined-basic" label="First Name" variant="outlined" color='success'/> <br></br>
        <TextField id="outlined-basic" label="Last Name" variant="outlined" color='success'/> <br></br> <br></br>
        
        <Link to="/" style={{textDecoration:'inherit'}}><Button variant="contained" style={{backgroundColor: 'rgb(255, 113, 47)', width:'200px'}}>Sign Up</Button>
        </Link>

        </Box>
        </div>
        </div>
    )
}