import './user.css';
import {Link, useNavigate} from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';




export default function Welcome (){


  let history = useNavigate();

  const[accounts,setAccount] = useState([]);
  const[accountlogin,setAccountlogin] = useState({
    username:"",
    password:""
  });
  const{username,password}=accountlogin
  const onInputChange=(e)=>{
    setAccountlogin({ ...accountlogin,[e.target.name]: e.target.value});
  };

  sessionStorage.setItem('usernamesess', accountlogin.username)


  const onSubmit=async(e)=>{
    e.preventDefault();
    try{
      const result = await axios.get(`http://localhost:8080/user/userlogin?username=${username}`);
      setAccount(result.data);
      console.log('usernamesess')
      if((result.data)!=null){
        
        if((result.data.password)==[password]){
          history(`./dashboard`);
        }else{alert("Incorrect Username or Password");}
      }else{alert("User " + [username]+ " does not exist!");}
      
    }catch(e){
      console.log("User " + [username]+ " does not exist!");
    }
  }



   return (
   <div className='main'>
    <div className='sub'>
            <div className="welcome"> <h1>Welcome back Teknoy!</h1>
            </div>

      
        <div className='inputs'>
        <input type="text"
        name="username"
        label="Username"
        placeholder='Enter Username'
        value={username}
        onChange={(e)=>onInputChange(e)}/>
        
        <br/>
        <br></br>
        
        
        <input type="password"
        name="password" 
        label="Password"
        placeholder='Enter Password'
        value={password}
        onChange={(e)=>onInputChange(e)}/><br/>
        </div>

        
<br></br>

      <div className='welcomebuttons'>

        
        <Link to={'/dashboard'}>
        <input className="btn1" type="submit" name="btnLogin" label="btnLogin" value="Login" onClick={(e)=>onSubmit(e)}/>
        </Link><br/>
<br></br>

        <Link to="/signup" style={{textDecoration:'inherit', color: 'orange'}}>New Here? Sign Up Now</Link> <br></br>
        
        </div>
            </div>
        </div>

   )
}


