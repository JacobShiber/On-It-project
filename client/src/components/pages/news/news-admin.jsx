import React, { useEffect, useState, useContext } from 'react'
import {UsersContext} from '../../../context/users-context/users-context';

import { GetAllNews, PostNews } from '../../../services/newsUser/newsUser.service';

const NewsAdmin = () => {
    const {user} = useContext(UsersContext);
    const [news, setNews] = useState([]);
    const[update, setUpdate] = useState({});

    useEffect(() => {
        GetAllNews()
            .then((res) => res.json())
            .then(result => setNews(result))
            .catch((error) => console.log({ error: "the method get isnt work" }));
    }, [])

    const addNews = (dataValue) => {
        setUpdate({
            userName : user.firstName,
            userImg: user.img,
            data: dataValue,
            role : user.role,
            school: user.school
        })
    }
    return (
        <div>
            <div className="newsInputs">
                <input type="text" placeholder="Whats on your mind" onChange={(e) => {addNews(e.target.value)}} />
                <button onClick ={() => {PostNews(update)}}>Submit</button>
            </div>
            <div>
                {
                    news.map(update => 
                        <div>
                            <h1>{update.userName}</h1>
                            <p>{update.data}</p>
                        </div>
                     )
                }
            </div>
        </div>
    )
}
export default NewsAdmin;