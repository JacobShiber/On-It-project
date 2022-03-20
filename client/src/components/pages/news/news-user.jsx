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
        <div className = "newsContainer">
                {
                    news.map(update =>
                        <div className='news'>
                        <div className="newsCard">
                           <div> <img src={update.userImg} alt="Picture" />
                            
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
    )
}

export default NewsUser;