import React, { useEffect, useState, useContext } from 'react'
import { LoadingContext } from '../../../context/loading/loading-context';
import { UsersContext } from '../../../context/users-context/users-context';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



import { GetAllNews, PostNews, DeleteNews } from '../../../services/newsUser/newsUser.service';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 410,
    borderRadius: "5px",
    bgcolor: "rgb(0,0,0,0.7)",
    color: "white",
    border: '3px solid white',
    boxShadow: 24,
    p: 4,
};

export const sortPosts = (array) => {
    return array.reverse();
}

const NewsAdmin = () => {

    const [open, setOpen] = useState(false);
    let { loading, setLoading } = useContext(LoadingContext);
    let { user } = useContext(UsersContext);
    user = JSON.parse(localStorage.getItem('user'));
    const [news, setNews] = useState([]);
    const [update, setUpdate] = useState({});
    const [postId, setPostId] = useState('');



    useEffect(() => {
        setLoading(true);
        GetAllNews()
            .then((res) => res.json())
            .then(result => {
                sortPosts(result);
                setNews(result);
            })
            .catch((error) => console.log({ error: "the method get isnt work" }))
            .finally(() => setLoading(false))

    }, [])

    const addNews = (dataValue) => {
        setUpdate({
            userName: user.firstName,
            userImg: user.img,
            data: dataValue,
            role: user.role,
            school: user.school
        })
    }

    const deleteNews = (idValue) => {
        setOpen(!open);
        setPostId(idValue);
    }

    const confirmDelete = () => {
        DeleteNews(postId).then(() =>
            GetAllNews()
                .then((res) => res.json())
                .then(result => {
                    sortPosts(result);
                    setNews(result);
                }));
        setOpen(!open);
    }

    const postNewUpdate = () => {
        PostNews(update)
            .then(() =>
                GetAllNews()
                    .then((res) => res.json())
                    .then(result => {
                        sortPosts(result);
                        setNews(result);
                    }))
    }
    return (
        <>{loading ? <img src='https://flevix.com/wp-content/uploads/2019/07/Curve-Loading.gif'
            className='gifLoading' alt="gifLoading" /> :
            <div>
                <div className="newsInputs">
                    <input type="text" placeholder="Whats on your mind" onChange={(e) => { addNews(e.target.value) }} />
                    <button onClick={postNewUpdate}>Submit</button>
                </div>
                <div className="newsContainer">
                    {
                        news.map((update, index) =>
                            <div key={index} className='news'>
                                <div className="newsCard">
                                    {user.firstName == update.userName ?
                                        <Box className = 'optionsButton' sx={{ minWidth: 120, marginRight: "95%" }}>
                                            <FormControl >
                                                <InputLabel id="demo-simple-select-label">&#8285;</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={"More Options"}
                                                    label="Options"
                                                    onChange={"handleChange"}
                                                    className = "selectInput"
                                                >
                                                    <MenuItem value={10} onClick ={() => deleteNews(update._id)}>Delete</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Box>

                                        : null}
                                    <div className="postDetails">
                                        <img src={update.userImg} alt="Picture" />
                                        <div>
                                            <h3>{update.userName}</h3>
                                            <p>{update.role} at {update.school}</p>
                                        </div>
                                    </div>
                                    <div >
                                        <h4 className='datePost'>{update.createdAt.split('T')[0]}</h4>
                                        <br />
                                        <h3>{update.data}</h3>
                                    </div>
                                </div>
                                <br />
                            </div>
                        )
                    }
                </div>
                <Modal
                    open={open}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            <p>Are you sure you want to delete ? </p>
                            <div style={{ display: "flex", justifyContent: "space-around", marginTop: "5%" }}>
                                <p style={{ cursor: "pointer" }} onClick={confirmDelete}>&#9989;</p>
                                <p style={{ cursor: "pointer" }} onClick={() => { setOpen(!open) }}>&#10060;</p>
                            </div>
                        </Typography>
                    </Box>
                </Modal>
            </div>
        }</>)
}
export default NewsAdmin;