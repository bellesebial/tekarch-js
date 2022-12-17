import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import './popup.css';
import { Box } from '@mui/system';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function DeleteAcc(props){

    const {userID} = useParams();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
        await axios.delete(`localhost:8080/user/deleteUser/${userID}`)
        console.log("Success")
        }catch{
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
           justifyContent: 'center', marginTop: '80px',
            marginLeft: '-300px'}}
           noValidate
           autoComplete="off"
         >
                <h3 className='text'>Are you sure you want to delete your account?
                This action cannot be undone.
                </h3>
            <br></br>
            <input type="submit" className='popchange' onChange={(e)=>handleSubmit(e)}>Confirm</input>
                </Box>
         {props.children}
         </div>
         </div>
    ) : "";
}