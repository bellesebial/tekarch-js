import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './user.css';
import {Link, useNavigate} from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';


export default function Welcome (){

  let history = useNavigate();

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const[accounts,setAccount] = useState([])

  const onSubmit=async(e)=>{
    e.preventDefault();
    const account={username,password}
    try{
      const result = await axios.get(`http://localhost:8080/user/userlogin?username=${username}`);
      setAccount(result.data);
      console.log((result.data))
      if((result.data)!=null){
        
        if((result.data.password)==[password]){
          history(`./CustomerHP/${account.username}`);
        }else{alert("Incorrect Password");}
      }else{alert("ID Number" + [username]+ "does not exist!");}
      
    }catch(e){
      console.log("ID Number" + [username]+ "does not exist!");
    }
  }

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
        <TextField id="outlined-basic"
        label="Username"
        variant="outlined"
        color='success'
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        required
        /> 
        <br></br>


        <TextField id="outlined-basic"
        label="Password"
        type="password"
        variant="outlined"
        color='success'
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        required
        /> 
        <br></br> <br></br>
        
        
        <Link to="/signup" style={{textDecoration:'inherit', color: 'orange'}}>Sign Up Here</Link> <br></br>
        <br></br>
        <Link to = {"/dashboard"} style={{textDecoration:'inherit'}}> <Button sx={{backgroundColor: 'rgb(255, 113, 47)', width:'120px'}} variant="contained"
        onClick={(e)=>onsubmit(e)}
        >Log In</Button>
        </Link> 
        
                </Box>
            </div>
        </div>

   )
}