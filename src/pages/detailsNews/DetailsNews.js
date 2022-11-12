import './DetailsNews.scss';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useServices from '../../services/Services';
import Spinner from '../../components/spinner/Spinner';
import ErrorMessage from '../../components/errorMessage/ErrorMessage';
import ErrorBoundary from '../../components/errorBoundary/ErrorBoundary';
import { Link } from 'react-router-dom';

const DetailsNews = () => {
    const [detailsNews, setDetailsNews] = useState(null);
    const { id } = useParams();
    const { getDetailsNews, clearError, loading, error} = useServices();

    useEffect(() => {
        requestDetailsNews(id)
    }, [id])

    const requestDetailsNews = (id) => {
        clearError()
        getDetailsNews(id).then(dataNews => setDetailsNews(dataNews))
    }

    const renderDetailsNews = () => {
        return (
            <article className='details-news details-news__article'>
                <h2 className="title title_centr">{detailsNews?.seo.title}</h2>
                {
                    detailsNews && <img src={`${detailsNews?.mainMedia.article.url}&operations=fit(500:)&w=1200&quality=100`} 
                    alt={detailsNews?.seo.title}/>
                }
                
                <div className="details-news__wrapper">

                    {
                        detailsNews?.body
                            .filter(item => item.type === 'editor_block')
                            .map((item, i) => {
                                return ( <p key={i}>{item.data.content.slice(3, -4)}</p> )
                            })
                    }

                </div>
            </article>
        )
    } 

    const items = renderDetailsNews();
    const spinner = loading ? <Spinner/> : null; 
    const errorMessage = error ? <ErrorMessage/> : null;
    console.log(items)
    return (
        <section className="details-news">
            <div className="container">
                <ErrorBoundary>
                    {items}
                    {spinner}
                    {errorMessage}

                    {detailsNews?.seo.title ? 
                        <Link to='/news' className="button">Назад</Link>
                        : null
                    }
                    
                </ErrorBoundary>
            </div>
        </section>
    )
}

export default DetailsNews;