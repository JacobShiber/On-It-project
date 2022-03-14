import React, { useEffect, useState, useContext } from 'react'
import {UsersContext} from '../../../context/users-context/users-context';

import { GetAllNews } from '../../../services/newsUser/newsUser.service';


const NewsUser =() => {
    let {user} = useContext(UsersContext);
    user = JSON.parse(localStorage.getItem('user'));
    const [news, setNews] = useState([]);

    useEffect(() => {
        GetAllNews()
            .then((res) => res.json())
            .then(result => setNews(result))
            .catch((error) => console.log({ error: "the method get isnt work" }));
    }, [])

    return(
        <div>
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
    )
}

export default NewsUser;