import React, { useEffect, useState, useContext } from 'react'
import { UsersContext } from '../../../context/users-context/users-context';

import { GetAllNews, PostNews } from '../../../services/newsUser/newsUser.service';

const NewsAdmin = () => {
    let { user } = useContext(UsersContext);
    user = JSON.parse(localStorage.getItem('user'));
    const [news, setNews] = useState([]);
    const [update, setUpdate] = useState({});

    useEffect(() => {
        GetAllNews()
            .then((res) => res.json())
            .then(result => setNews(result))
            .catch((error) => console.log({ error: "the method get isnt work" }));
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

    return (
        <div>
            <div className="newsInputs">
                <form>
                    <input type="text" placeholder="Whats on your mind" onChange={(e) => { addNews(e.target.value) }} />
                    <button type="submit" onClick={() => { PostNews(update) }}>Submit</button>
                </form>
            </div>
            <div className = "newsContainer">
                {
                    news.map(update =>
                        <div className='news'>
                        <div className="newsCard">
                           <div> <img src={update.userImg} alt="adminPicture" />
                            
                                <h3>{update.userName}</h3>
                                <p>{update.role}</p>
                                <p>{update.school}</p>
                            </div>
                            <div>
                                <h4 className='datePost'>{update.createdAt.split('T')[0]}</h4>
                                <br/>
                                <h2>{update.data}</h2>
                            </div>
                            </div>
                            <br/>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
export default NewsAdmin;