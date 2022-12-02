
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Breadcrumbs, Link, Grid } from '@mui/material';
import NavBar from './NavBar';

const Update = {
    float: 'left',
    padding: '40px',
    textAlign: 'left',
    justifyContent: 'left',
    alignItems: 'left'

}

export default function CreateBook(){
    return (
        <><NavBar />
        {/* <div role="presentation" onClick={handleClick}> */}
        <div>
            <Breadcrumbs separator=">" aria-label="breadcrumb" sx={{ marginTop: 2, marginLeft: 4 }}>
              <Link color="black" fontSize={25} fontWeight={10} underline="hover" href="/tbrlist">
                  Teknoy Archives
              </Link>
              <Link color="orange" fontSize={25} fontWeight={10} underline="hover" href="/">
                  Update Review
              </Link>
          </Breadcrumbs> 
    <div>
        <div className="create" style={Update}>

            <Box
            component="form"
            sx={{'& > :not(style)': { m: 1, width: '25ch'}}}
            noValidate
            autoComplete="off"
            >
            Enter Book Title &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <TextField id="outlined-basic" label="Enter Book TItle" variant="outlined" color='success'/><br></br>
            Enter Author &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <TextField id="outlined-basic" label="Enter Author" variant="outlined" color='success'/><br></br>
            Enter Published Date &nbsp;
            <TextField id="outlined-basic" label="Enter Published Date" variant="outlined" color='success'/>
            <Box component="span" sx={{ p: 10, border: '1px dashed grey', textAlign:'right', marginLeft:'10rem' }}>
            <Button>Upload/Drag the photo here</Button>
            </Box><br></br>
            Enter Genre &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <TextField id="outlined-basic" label="Enter Genre" variant="outlined" color='success'/> <br></br>
            Enter Synopsis
            <Grid item xs={2} sx={{marginTop:5}}>
                      <Box sx={{ display: 'left', flexDirection: 'row' }}>
                          <TextField variant="outlined" multiline rows={9} sx={{ width: 600 }} />
                      </Box>
              </Grid>
            </Box>
            <Button sx={{ width: 150, height: 50, marginLeft: 4, marginRight: 4}} variant="contained" href="/tbrlist">Update Book</Button>
            <Button sx={{ width: 150, height: 50, marginLeft: 4, marginRight: 4}} variant="contained" href="/tbrlist">Cancel</Button> 
        </div>

    </div>
    </div></>
    )
}