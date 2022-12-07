import Navbar from "./NavBar";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';

const box = {
    marginTop: '100px'
}

export default function ChangePass (){
    return (
       <div>
        <Navbar />

        <div>
         <Box
            style={box}
           component="form"
           sx={{'& > :not(style)': { m: 1, width: '25ch'}, justifyContent: 'center', marginTop: '-40px'}}
           noValidate
           autoComplete="off"
         >
             <TextField id="outlined-basic" label="Old Password" variant="outlined" color='success'/> <br></br>
             <TextField id="outlined-basic" label="New Password" variant="outlined" color='success' /> <br></br>
             <br></br>
             <Link to = "/" style={{textDecoration:'inherit'}}> <Button sx={{backgroundColor: 'rgb(255, 113, 47)', width:'200px'}} variant="contained">Change Password</Button>
        </Link> 

             </Box>
             </div>
       </div>
    )
}