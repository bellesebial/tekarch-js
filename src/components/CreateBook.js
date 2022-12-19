import './background.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Breadcrumbs, Grid, Link } from '@mui/material';
import NavBar from './NavBar';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';


const Create = {
    float: 'center',
    padding: '40px',
    textAlign: 'left',
    justifyContent: 'left',
    alignItems: 'left'

}

export default function CreateBook() {

    let navigate = useNavigate()

    const [image, setImage] = useState('')
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [published, setPublished] = useState('')
    const [genre, setGenre] = useState('')
    const [synopsis, setSynopsis] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        const book = { image, title, author, published, genre, synopsis }
        console.log(book)
        fetch("http://localhost:8080/tbr/postBook", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(book)
        }).then(() => {
            console.log("updated")
            alert([title] + " successfully updated")
            navigate("/tbrlist");
        })
    }

    return (
        <><NavBar />
            <div>
                <Breadcrumbs separator=">" aria-label="breadcrumb" sx={{ marginTop: 2, marginLeft: 4 }}>
                    <Link color="black" fontSize={25} fontWeight={10} underline="hover" href="/tbrlist">
                        Teknoy Archives
                    </Link>
                    <Link color="orange" fontSize={25} fontWeight={10} underline="hover">
                        Create Review
                    </Link>
                </Breadcrumbs>
                <div>
                    <div className="create" style={Create}>
                        <Box
                            component="form"
                            sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                            noValidate
                            autoComplete="off"
                        />
                        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                            <div>

                                
                                    <Grid item xs={2}container rowSpacing={0} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
                                        <h4>Enter Book Title</h4>
                                
                                        <TextField id="outlined-basic" variant="outlined" color='success' sx={{ marginLeft: '2rem'}} 
                                            value={title} onChange={(e) => setTitle(e.target.value)} required />
                                    </Grid><br/>
                                    <Grid item xs={2} container rowSpacing={0} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
                                        <h4>Enter Author</h4>

                                        <TextField id="outlined-basic" variant="outlined" color='success' sx={{ marginLeft: '3rem'}} 
                                            value={author} onChange={(e) => setAuthor(e.target.value)} required />
                                    </Grid><br/>
                                    <Box component="span" sx={{ p: 10, border: '1px dashed grey', textAlign: 'right', marginLeft: '30rem', marginTop: '10rem' }}
                                        value={image} onChange={(e) => setImage(e.target.value)} required>
                                        <Button >Upload/Drag the photo here</Button>
                                    </Box>
                                    <Grid item xs={2} container rowSpacing={0} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
                                        <h4>Enter Date Published</h4>
                                
                                        <TextField id="outlined-basic" variant="outlined" color='success' sx={{ marginLeft: '1rem'}}
                                            value={published} onChange={(e) => setPublished(e.target.value)} required />
                                    </Grid><br/>
                                    <Grid item xs={2} container rowSpacing={0} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
                                        <h4>Enter Book Genre</h4>
                          
                                        <TextField id="outlined-basic" variant="outlined" color='success' sx={{ marginLeft: '2rem'}}
                                            value={genre} onChange={(e) => setGenre(e.target.value)} required />
                                    </Grid><br/>
                                    <Grid item xs={2} container rowSpacing={0} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
                                        <h4>Enter Synopsis</h4>
                                
                                        <TextField id="outlined-basic" variant="outlined" color='success' sx={{ marginLeft: '2rem'}}
                                            value={synopsis} onChange={(e) => setSynopsis(e.target.value)} required />
                                    </Grid>

                                <Link to="/tbrlist" style={{ textDecoration: 'inherit' }}>
                                    <Button variant="contained" sx={{ width: 150, height: 50, marginLeft: 4, marginRight: 4, marginTop: 3, marginBottom: 3 }}
                                        onClick={(e) => handleSubmit(e)}>Add Book</Button>
                                </Link>
                                <Button sx={{ width: 150, height: 50, marginLeft: 4, marginRight: 4 }} variant="contained" href="/tbrlist">Cancel</Button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}









