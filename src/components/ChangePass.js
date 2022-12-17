import React from 'react';
import './popup.css';
import Box from '@mui/material/Box';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


export default function ChangePass (props){

  const {userID} = useParams(); 
  const who = sessionStorage.getItem('usernamesess');
  const[accounts,setAccount] = useState([]);
  const [newpass, setNewpass] = useState({
    password: ""
  });

  const {password} = newpass;

  const loadUser = async (e) => {
    const result = await axios.get(`http://localhost:8080/user/userlogin?username=${who}`);
    setAccount(result.data);
  }

  const onInputChange=(e)=>{
    setNewpass({ ...newpass,[e.target.name]: e.target.value});
  };

  useEffect(() => {
    loadUser();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      await axios.put(`https:localhost:8080/user/putUser/userID=${accounts.userID}`,newpass);
      alert("Password Change Successful!")
    }
    catch(e){
        console.log("Error");
    }
}

    return (props.trigger)?(
       <div className="popup">
        <div className="popupinner">
             <button className="closebtn"
             onClick={() => props.setTrigger(false)}
             >
                <HighlightOffIcon/> </button>

            <Box
          component="form"
           sx={{'& > :not(style)': { m: 1, width: '25ch'},
           justifyContent: 'center', marginTop: '70px',
            marginLeft: '-300px'}}
           noValidate
           autoComplete="off"
         >

         <input type="password"
        name="newpw"
        label="newpw"
        placeholder='Enter New Password'
        onChange={(e)=>onInputChange(e)}
        />

        <br></br>

        <button className='popchange' onClick={(e)=>handleSubmit(e)}>Change Password</button>

             </Box>

             {props.children}
             </div>
       </div>
    ) : "";
}