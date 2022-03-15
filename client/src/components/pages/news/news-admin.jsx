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
                        <div className="newsCard">
                            <img src={update.userImg} alt="adminPicture" />
                            <div>
                                <h2>{update.userName}</h2>
                                <h4>{update.role}</h4>
                                <h3>{update.school}</h3>
                            </div>
                            <div>
                                <h5>{update.createdAt.split('T')[0]}</h5>
                                <p>{update.data}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
export default NewsAdmin;