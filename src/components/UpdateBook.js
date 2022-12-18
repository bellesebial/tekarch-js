import './background.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Breadcrumbs, Link} from '@mui/material';
import NavBar from './NavBar';
import {useState } from 'react';
import TextField from '@mui/material/TextField';
import { useNavigate} from 'react-router-dom';


const Update = {
    float: 'center',
    padding: '40px',
    textAlign: 'left',
    justifyContent: 'left',
    alignItems: 'left'

}

export default function UpdateBook() {

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
        fetch("http://localhost:8080/tbr/putBook/{id}", {
            method: "PUT",
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
                        Update Review
                    </Link>
                </Breadcrumbs>
                <div>
                    <div className="create" style={Update}>
                        <Box
                            component="form"
                            sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                            noValidate
                            autoComplete="off"
                        />
                        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                            <div>

                                <h4>Enter Book Title</h4><br />
                                <TextField id="outlined-basic" label="Enter Book Title" variant="outlined" color='success'
                                    value={title} onChange={(e) => setTitle(e.target.value)} required /> <br /><br />

                                <h4>Enter Author</h4><br />
                                <TextField id="outlined-basic" label="Enter Author" variant="outlined" color='success'
                                    value={author} onChange={(e) => setAuthor(e.target.value)} required /><br/>

                                <Box component="span" sx={{ p: 10, border: '1px dashed grey', textAlign: 'right', marginLeft: '20rem', marginTop: '10rem' }} value={image}>
                                    <Button >Upload/Drag the photo here</Button>
                                </Box>

                                <h4>Enter Date Published</h4><br />
                                <TextField id="outlined-basic" label="Enter Date Published" variant="outlined" color='success'
                                    value={published} onChange={(e) => setPublished(e.target.value)} required /> <br /><br />

                                <h4>Enter Book Genre</h4><br />
                                <TextField id="outlined-basic" label="Enter Book Genre" variant="outlined" color='success'
                                    value={genre} onChange={(e) => setGenre(e.target.value)} required /> <br /><br />

                                <h4>Enter Synopsis</h4><br />
                                <TextField id="outlined-basic" label="Enter Synopsis" variant="outlined" color='success'
                                    value={synopsis} onChange={(e) => setSynopsis(e.target.value)} required /> <br /><br />


                                <Link to="/tbrlist" style={{ textDecoration: 'inherit' }}>
                                    <Button variant="contained" sx={{ width: 150, height: 50, marginLeft: 4, marginRight: 4, marginTop: 3, marginBottom: 3 }} onClick={(e) => handleSubmit(e)}>Update Book</Button>
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





