import React, { useEffect, useState, useContext } from 'react'
import { LoadingContext } from '../../../context/loading/loading-context';
import { UsersContext } from '../../../context/users-context/users-context';

import { GetAllNews, PostNews, DeleteNews } from '../../../services/newsUser/newsUser.service';

const NewsAdmin = () => {
    let {loading,setLoading} = useContext(LoadingContext);
    let { user } = useContext(UsersContext);
    user = JSON.parse(localStorage.getItem('user'));
    const [news, setNews] = useState([]);
    const [update, setUpdate] = useState({});

    useEffect(() => {
  setLoading(true);
        GetAllNews()
            .then((res) => res.json())
            .then(result => setNews(result))
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
        let result = window.confirm(`Are you sure you want to delete this?`);
        if (result == true) {
            DeleteNews(idValue).then(() => window.location.reload());
        }
        else{
            return null;
        };
    }

    return (
        
        <>{loading ? <img src='https://cdn.dribbble.com/users/2646511/screenshots/15115496/media/f2ffddfadda5505334e601f8eb09596e.gif' 
        className='gifLoading' alt="gifLoading" />:
        <div>
            <div className="newsInputs">
                <form>
                    <input type="text" placeholder="Whats on your mind" onChange={(e) => { addNews(e.target.value) }} />
                    <button type="submit" onClick={() => { PostNews(update) }}>Submit</button>
                </form>
            </div>
            <div className="newsContainer">
                {
                    news.map(update =>
                        <div className='news'>
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
        </div>
   }</> )
}
export default NewsAdmin;