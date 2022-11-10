import './News.scss';
import { useEffect, useState } from 'react';
import useServices from '../../services/Services';
import Spinner from '../../components/spinner/Spinner';
import ErrorBoundary from '../../components/errorBoundary/ErrorBoundary';
import ErrorMessage from '../../components/errorMessage/ErrorMessage';
import { Link } from 'react-router-dom';

const News = () => {
    const [news, setNews] = useState([]);
    const [newListLoading, setNewListLoading] = useState(false);
    const [page, setPage] = useState(1)

    const { getNews, clearError, loading, error } = useServices();

    useEffect(() => {
        requestNews(page, true)
    }, [])

    const requestNews = (page, initial) => {
        clearError()
        initial ? setNewListLoading(false) : setNewListLoading(true)

        getNews(page).then(newsLoading)
    }
    
    const newsLoading = (newsNextPage) => {
        setNews([...news, ...newsNextPage])
        setPage(page + 1)
        setNewListLoading(false)
    }

    const renderNews = (arr) => {
        return (
            arr.map(item => (
                <div key={item.id} className="news__wrapper-item">
                    <img src={item.img} alt={item.title}/>
                    <p>{item.time}</p>
                    <h3>{item.title}</h3>
                    <Link to={`/news/${item.id}`}>
                        <button className="button button_small">Подробнее</button>
                    </Link>
                </div>
            ))
        )
    }

    const listNews = renderNews(news);
    const spinner = loading ? <Spinner/> : null; 
    const errorMessage = error ? <ErrorMessage/> : null;

    return (
        <section className="news">
            <div className="container">
                <ErrorBoundary>
                    <div className="news__wrapper">
                        {spinner}
                        {listNews}
                        {errorMessage}
                    </div>
                    {listNews.length > 0 ? 
                    
                        <button 
                            onClick={() => requestNews(page)} 
                            disabled={newListLoading}
                            className="button">Еще
                        </button> : null
                    }
                </ErrorBoundary>
            </div>
        </section>
    )
}

export default News;