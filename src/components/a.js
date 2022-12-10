import React, {useEffect, useState} from 'react';
import {Link, useNavigate, useParams, userNavigate} from 'react-router-dom';
import axios from 'axios';


function EditPerformer() {

    let history = useNavigate();
    
    const{venueID}=useParams()
    const[create_venue, setCreate_venue] = useState({
      venue_name:"",
      capacity:""
    })
    const{venue_name,capacity}=create_venue
    
    const onInputChange=(e)=>{
      setCreate_venue({ ...create_venue,[e.target.name]: e.target.value});
    };
  
    useEffect(()=>{
      loadVenues();
    },[]);
    const onSubmit=async(e)=>{
      e.preventDefault();
      await axios.put(`http://localhost:8081/venue/putVenue/${venueID}`,create_venue)
      // alert([venue_name]+" successfully added")
      console.log({create_venue})

      history("/Venue");
    }


  
    const loadVenues=async()=>{
      const result = await axios.get(`http://localhost:8081/venue/getVenue/${venueID}`);
      setCreate_venue(result.data);
    }

  return(
    <header className='App-header'>
    <div className="App">
      <div className='card'>
      <div className='form'>
      <h1 style={{fontFamily:'Poppins', textAlign: 'left', marginLeft: '2rem'}}>Update Venue</h1>
        <label>Venue</label><br/>
        <input type="text" name="venue_name" label="vname" placeholder={venue_name} value={venue_name} onChange={(e)=>onInputChange(e)}/><br/>
        <label>Capacity</label><br/>
        <input type="text" name="capacity" label="vtype" placeholder={capacity} value={capacity}onChange={(e)=>onInputChange(e)}/><br/>
        <input style={{position:"relative", left: "45%"}} className="btnAdd" type="submit" name="btnUpdateVen" label="btnUpdateVen" value="Update Venue" onClick={(e)=>onSubmit(e)}/><br/>
      </div>
      </div>
      </div>
    </header>  


        
)
}

export default EditPerformer;