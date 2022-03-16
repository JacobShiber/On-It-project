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
                        <div className='news'>
                        <div className="newsCard">
                            <img src={update.userImg} alt="adminPicture" />
                            <div>
                                <h3>{update.userName}</h3>
                                <h4>{update.role}</h4>
                                <h4>{update.school}</h4>
                            </div>
                            <div>
                                <h5>{update.createdAt.split('T')[0]}</h5>
                                </div>
                            </div>
                            <br/>
                            <hr/>
                        <p className='DataInCard'>{update.data}</p>
                        </div>
                    )
                }
            </div>
    )
}

export default NewsUser;