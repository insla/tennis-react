import './News.scss';
import { useEffect, useState } from 'react';
import useServices from '../../services/Services';
import Spinner from '../../components/spinner/Spinner';

const News = () => {
    const [news, setNews] = useState({});
    const { getNews, loading, error } = useServices();

    useEffect(() => {
        getNews().then(data => setNews(data))
    }, [])

    const renderNews = (data) => {
        data.map(item => console.log(item))
    }

    let listNews = null

    if(news.length > 0) {
        listNews = renderNews(news)
    }

    console.log(listNews)


    // const spinner = loading ? <Spinner/> : renderNews(news);
    // const listNews = renderNews(news);
    // const spinner = loading ? <Spinner/> : null; 

    return (
        <section className="news">
            <div className="container">
                <div className="news__wrapper">
                    {/* {spinner} */}
                    {/* {listNews} */}
                    <div className="news__wrapper-item">
                        <img src="img/news/news-reg.jpg" alt="img"/>
                        <p>22 июля 2022 года</p>
                        <h3>
                            Consequat consequat augue quis urna arcu scelerisque ac montes, sed. Arcu orci quam lectus orci in.
                        </h3>
                        <button className="button button_small">Подробнее</button>
                    </div>
                </div>
                <button className="button">Еще</button>
            </div>
        </section>
    )
}

export default News;