import Button from '@mui/material/Button';
import FingerprintIcon from '@mui/icons-material/Fingerprint';


const table = {
    border: '1px solid',
    borderCollapse: 'collapse',
    marginTop: '40px',
    marginLeft: '40px'
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
    return (
        <header>

        <div>
            <table style={table}>
                <tr>
                    <td style={title}><FingerprintIcon fontSize='large'/> User Information </td>
                </tr>


                <tr>
                    <td style={rows}>Username</td>
                    <td style={rows}>Hotdog21</td>
                </tr>

                <tr>
                    <td style={rows}>Program</td>
                    <td style={rows}>BSIT</td>
                </tr>

                <tr >
                    <td style={rows}>Year</td>
                    <td style={rows}>4</td>
                </tr>

                <tr>
                    <td style={rows}>First Name</td>
                    <td style={rows}>Brent</td>
                </tr>

                <tr>
                    <td style={rows}>Last Name</td>
                    <td style={rows}>Faiyaz</td>
                </tr>
                
            </table>
        </div>

        
        <div className='buttons'>
        <Button sx={{backgroundColor: 'rgb(255, 113, 47)', margin: '4px'}} variant="contained" >Change Password</Button>
        <br></br>
        <Button sx={{backgroundColor: 'rgb(255, 113, 47)', margin: '4px'}} variant="contained" >Delete Account</Button>
        </div>
        
        </header>
    )
}