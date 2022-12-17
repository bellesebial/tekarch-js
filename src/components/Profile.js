import FingerprintIcon from '@mui/icons-material/Fingerprint';
import NavBar from './NavBar';
import ChangePass from './ChangePass';
import { useEffect, useState } from 'react'
import './popup.css';
import DeleteAcc from './DeleteAcc';
import {Link, useParams} from 'react-router-dom';
import axios from 'axios';



const table = {
    border: '1px solid',
    borderCollapse: 'collapse',
    marginTop: '400px',
    marginLeft: '0px',
    color: 'black'
}

const rows = {
    border: '1px solid',
    textAlign: 'left',
    padding: '4px',
    borderColor: 'orange'
}

const title = {
    fontSize: '50px',
    columnSpan: 'all',
    fontWeight: 'bold',
    color: 'orange'
}


export default function SignUp(){
const [btn, setBtn] = useState(false);
const [del, setDel] = useState(false);
const[accounts,setAccount] = useState([]);

 

  useEffect(() => {
    loadUser();
  }, []);

const who = sessionStorage.getItem('usernamesess');

const loadUser = async () => {
    try{
      const result = await axios.get(`http://localhost:8080/user/userlogin?username=${who}`);
      setAccount(result.data);
    }
    catch(e){
        console.log("Error");
    }
}


const logout = () => {
    sessionStorage.removeItem('usernamesess')
}

    return (

        <div className='navbar'>
        <NavBar />

        <div className='table'>
            <table style={table}>
                <thead>
                <tr>
                    <td style={title} className='tabletitle'><FingerprintIcon fontSize='large'/> User Information </td>
                </tr>


                <tr>
                    <td style={rows}>Username</td>
                    <td style={rows}>{accounts.username}</td>
                </tr>

                <tr>
                    <td style={rows}>Program</td>
                    <td style={rows}>{accounts.program}</td>
                </tr>

                <tr >
                    <td style={rows}>Year</td>
                    <td style={rows}>{accounts.year}</td>
                </tr>

                <tr>
                    <td style={rows}>First Name</td>
                    <td style={rows}>{accounts.firstname}</td>
                </tr>

                <tr>
                    <td style={rows}>Last Name</td>
                    <td style={rows}>{accounts.lastname}</td>
                </tr>
                </thead>
            </table>
            </div>
            <br></br>

        <div className='buttons'>
        <button onClick={() => setBtn(true)} className='change'>Change Password</button>
        <ChangePass trigger={btn} setTrigger={setBtn}>
        </ChangePass>

        
        <br></br>
        <button onClick={() => setDel(true)} className='change'>Delete Account</button>
        <DeleteAcc trigger={del} setTrigger={setDel}/>

        <Link to = "/"><button className='change' onClick={logout}>Log Out</button></Link>

        </div>
        </div>
    )
}