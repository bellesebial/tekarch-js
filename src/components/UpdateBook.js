import './background.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Breadcrumbs, Link, Grid } from '@mui/material';
import NavBar from './NavBar';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';


const Update = {
    float: 'center',
    padding: '40px',
    textAlign: 'left',
    justifyContent: 'left',
    alignItems: 'left'

}

export default function UpdateBook() {

    let navigate = useNavigate()

    const {id}=useParams

    const [list, setList] = useState({
        image: "",
        title: "",
        author: "",
        published: "",
        genre: "",
        synopsis: ""
    })

    const { image, title, author, published, genre, synopsis } = list

    const onInputChange = (e) => {
        setList({ ...list, [e.target.name]: e.target.value })
    };

    useEffect(()=>{
        loadList();
    }, [])

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/tbr/putBook/${id}`, list)
        navigate("/")
    };

    const loadList = async () =>{
        const result=await axios.get(`http://localhost:8080/tbr/putBook/${id}`)
        setList(result.data)
    };

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
                        <form onSubmit={(e) => onSubmit(e)}>
                            <Box
                                component="form"
                                sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                                noValidate
                                autoComplete="off"
                            />
                                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                                    <div className="mb-3">
                                        <label>Enter Book Title</label><br />
                                        {/* <input type="text" name="title" label="Enter Title" placeholder='Enter Book Title' value={title} onChange={(e)=>setTitle(e.target.value)} /><br/> */}
                                        <input type={"text"} className="form-control" placeholder="Enter Book Title" name="title" value={title} onChange={(e) => onInputChange(e)} /><br></br>

                                        <Box component="span" sx={{ p: 10, border: '1px dashed grey', textAlign:'right', marginLeft:'15rem', marginTop:'15rem' }} value={image} >
                                        <Button >Upload/Drag the photo here</Button>
                                        </Box><br></br>

                                        <label>Enter Author</label><br />
                                        {/* <input type="text" name="author" label="Enter Author" placeholder='Enter Author' value={author} onChange={(e)=>setAuthor(e.target.value)}/><br/> */}
                                        <input type={"text"} className="form-control" placeholder="Enter Author" name="author" value={author} onChange={(e) => onInputChange(e)} /><br></br>

                                        <label>Enter Published Date</label><br />
                                        {/* <input type="text" name="date" label="Enter Published Date" placeholder='Enter Published Date' value={published} onChange={(e)=>setPublished(e.target.value)}/><br/> */}
                                        <input type={"text"} className="form-control" placeholder="Enter Published Date" name="published" value={published} onChange={(e) => onInputChange(e)} /><br></br>

                                        <label>Enter Genre</label><br />
                                        {/* <input type="text" name="genre" label="Enter Genre" placeholder='Enter Genre' value={genre} onChange={(e)=>setGenre(e.target.value)}/><br/> */}
                                        <input type={"text"} className="form-control" placeholder="Enter Genre" name="genre" value={genre} onChange={(e) => onInputChange(e)} /><br></br>

                                        <label>Enter Synopsis</label><br />
                                        {/* <input type="text" name="synopsis" label="Enter Synopsis" placeholder='Enter Synopsis' value={synopsis} onChange={(e)=>setSynopsis(e.target.value)}/><br/> */}
                                        <input type={"text"} className="form-control" placeholder="Enter Synopsis" name="synopsis" value={synopsis} onChange={(e) => onInputChange(e)} /><br></br><br></br>


                                        <Button sx={{ width: 150, height: 50, marginLeft: 4, marginRight: 4 }} variant="contained" href="/tbrlist">Update Book</Button>
                                        <Button sx={{ width: 150, height: 50, marginLeft: 4, marginRight: 4 }} variant="contained" href="/tbrlist">Cancel</Button>

                                    </div>
                                </div>
                        </form>
                    </div>
                </div>
            </div>
            </>
    )
}





