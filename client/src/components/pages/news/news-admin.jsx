import React, { useEffect, useState, useContext } from 'react'
import { LoadingContext } from '../../../context/loading/loading-context';
import { UsersContext } from '../../../context/users-context/users-context';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { GetAllNews, PostNews, DeleteNews } from '../../../services/newsUser/newsUser.service';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 410,
    borderRadius: "5px" ,
    // bgcolor: 'background.paper',
    color: "white",
    border: '3px solid purple',
    boxShadow: 24,
    p: 4,
  };

const NewsAdmin = () => {

    const [open, setOpen] = useState(false);
    let {loading,setLoading} = useContext(LoadingContext);
    let { user } = useContext(UsersContext);
    user = JSON.parse(localStorage.getItem('user'));
    const [news, setNews] = useState([]);
    const [update, setUpdate] = useState({});
    const [postId, setPostId] = useState('');

    const sortPosts = (array) => {
     return array.reverse();
    }

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
        .then(()=> 
        GetAllNews()
            .then((res) => res.json())
            .then(result => {
                sortPosts(result);
                setNews(result);
            }))
    }

    return (
        
        <>{loading ? <img src='https://cdn.dribbble.com/users/2646511/screenshots/15115496/media/f2ffddfadda5505334e601f8eb09596e.gif' 
        className='gifLoading' alt="gifLoading" />:
        <div>
            <div className="newsInputs">
                    <input type="text" placeholder="Whats on your mind" onChange={(e) => { addNews(e.target.value) }} />
                    <button  onClick={postNewUpdate}>Submit</button>
            </div>
            <div className="newsContainer">
                {
                    news.map((update , index) =>
                        <div key={index} className='news'>
                            <div className="newsCard">
                                {user.firstName == update.userName ? <button onClick={() => deleteNews(update._id)}>Delete</button> : null}
                                <div> <img src={update.userImg} alt="adminPicture" />

                                    <h3>{update.userName}</h3>
                                    <p>{update.role}</p>
                                    <p>{update.school}</p>
                                </div>
                                <div>
                                    <h4 className='datePost'>{update.createdAt.split('T')[0]}</h4>
                                    <br />
                                    <h2>{update.data}</h2>
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
           <div style={{display:"flex" , justifyContent:"space-around" , marginTop:"5%"}}>
           <p style={{cursor:"pointer"}} onClick={confirmDelete}>&#9989;</p>
           <p style={{cursor:"pointer"}} onClick={() => {setOpen(!open)}}>&#10060;</p>
           </div>
          </Typography>
        </Box>
      </Modal>
        </div>
   }</> )
}
export default NewsAdmin;