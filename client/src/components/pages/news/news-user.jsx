import React, { useEffect, useState, useContext } from 'react'
import { UsersContext } from '../../../context/users-context/users-context';
import { GetAllNews } from '../../../services/newsUser/newsUser.service';
import { LoadingContext } from '../../../context/loading/loading-context';
import {sortPosts} from './news-admin';
import Aos from "aos" ;
import "aos/dist/aos.css" ;


const NewsUser = () => {
    let { loading, setLoading } = useContext(LoadingContext);
    let { user } = useContext(UsersContext);
    user = JSON.parse(localStorage.getItem('user'));
    const [news, setNews] = useState([]);

    useEffect(() => {
        Aos.init({
        useClassNames : true ,
        duration:2000 ,
    });
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

    return (
        <>{loading ? <img src='https://static.wixstatic.com/media/f2773f_a97a7c76b5ba4075bb095745a72b53c3~mv2.gif' className='gifLoading' alt="gifLoading" /> :
            <div className="newsContainer">
                {
                    news.map((update , index) =>
                        <div className='news'>
                            <div data-aos="fade-left" className="newsCard">
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
        }</>)
}

export default NewsUser;