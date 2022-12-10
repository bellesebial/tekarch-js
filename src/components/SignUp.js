import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './user.css';
import {Link, useNavigate} from 'react-router-dom';
import { useState } from 'react';


export default function SignUp(){

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [program, setProgram] = useState('')
    const [year, setYear] = useState('')
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')

    let history = useNavigate();

    const handleSubmit =(e) => {
        e.preventDefault();
        const account={username,password,program,year,firstname,lastname}
        console.log(account)
        fetch("http://localhost:8080/user/postUser",{
          method: "POST",
          headers: {"Content-Type":"application/json"},
          body:JSON.stringify(account)
        }).then(()=>{
          console.log("added")
          alert([username]+" successfully added")
          history("/");
        })
        
    }


    return (
        <div className='main'>
            <div className='signsub'>
        <Box
      component="form"
      sx={{'& > :not(style)': { m: 1, width: '25ch'}}}
      noValidate
      autoComplete="off"
    >
        <TextField id="outlined-basic" label="Username" variant="outlined" color='success' value={username} onChange={(e)=>setUsername(e.target.value)}/> <br></br>
        <TextField id="outlined-basic" label="Password" variant="outlined" type="password" color='success' value={password} onChange={(e)=>setPassword(e.target.value)}/> <br></br>
        <TextField id="outlined-basic" label="Program" variant="outlined" color='success' value={program} onChange={(e)=>setProgram(e.target.value)}/> <br></br>
        <TextField id="outlined-basic" label="Year" variant="outlined" color='success' type="number" value={year} onChange={(e)=>setYear(e.target.value)}/> <br></br>
        <TextField id="outlined-basic" label="First Name" variant="outlined" color='success' value={firstname} onChange={(e)=>setFirstname(e.target.value)}/> <br></br>
        <TextField id="outlined-basic" label="Last Name" variant="outlined" color='success' value={lastname} onChange={(e)=>setLastname(e.target.value)}/> <br></br> <br></br>
        
        <Link to="/" style={{textDecoration:'inherit'}}><Button variant="contained" style={{backgroundColor: 'rgb(255, 113, 47)', width:'200px'}} onClick={(e)=>handleSubmit(e)}>Sign Up</Button>
        </Link>

        </Box>
        </div>
        </div>
    )
}