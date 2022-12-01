
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Breadcrumbs, Link } from '@mui/material';

// const create: CSS.Properties = {
//     float: 'left',
//     padding: '40px',
//     textAlign: 'left',
//     justifyContent: 'left',
//     alignItems: 'left'

// }

// const link: CSS.Properties = {
//     color: 'orange',
//     fontSize: '12px',
//     alignItems: 'left'
// }

// function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
//     event.preventDefault();
//     console.info('You clicked a breadcrumb.');
//   }

export default function CreateBook(){
    return (
        // <div role="presentation" onClick={handleClick}>
        <div>
            <Breadcrumbs separator=">" aria-label="breadcrumb" sx={{ marginTop: 2, marginLeft: 4 }}>
              <Link color="black" fontSize={25} fontWeight={10} underline="hover" href="/TeknoyArchive/Create">
                  Teknoy Archives
              </Link>
              <Link color="orange" fontSize={25} fontWeight={10} underline="hover" href="/">
                  Create Review
              </Link>
          </Breadcrumbs> 
    <div>
        {/* <div className="create" style={create}> */}
        <div>
            <Box
            component="form"
            sx={{'& > :not(style)': { m: 1, width: '25ch'}}}
            noValidate
            autoComplete="off"
            >
            Enter Book Title
            <TextField id="outlined-basic" label="Enter Book TItle" variant="outlined" color='success'/><br></br>
            Enter Author
            <TextField id="outlined-basic" label="Enter Author" variant="outlined" color='success'/><br></br>
            Enter Published Date
            <TextField id="outlined-basic" label="Enter Published Date" variant="outlined" color='success'/>
            <Box component="span" sx={{ p: 10, border: '1px dashed grey', textAlign:'right', marginLeft:'10rem' }}>
            <Button>Upload/Drag the photo here</Button>
            </Box><br></br>
            Enter Genre
            <TextField id="outlined-basic" label="Enter Genre" variant="outlined" color='success'/> <br></br>
            Enter Synopsis
            <TextField id="outlined-basic" label="Enter Synopsis" variant="outlined" color='success'/> <br></br>
            </Box>
            <Button sx={{ width: 150, height: 50, marginLeft: 4, marginRight: 4}} variant="contained">Add Book</Button> 
            </div>

    </div>
    </div>
    )
}