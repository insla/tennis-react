import './Price.scss';
import useServices from '../../services/Services';
import { useState, useEffect } from 'react';
import Spinner from '../../components/spinner/Spinner';
import ErrorMessage from '../../components/errorMessage/ErrorMessage';
import ErrorBoundary from '../../components/errorBoundary/ErrorBoundary';
import { Link } from 'react-router-dom';

const Price = () => {
    const [cardPricePersonal, setCardPricePersonal] = useState([]);
    const [cardPriceGroup, setCardPriceGroup] = useState([]);
    const [cardPriceKids, setCardPriceKids] = useState([]);
    const [filterCard, setFilterCard] = useState(0);

    const { getLocalData, clearError, error, loading } = useServices();

    useEffect(() => {
        requestPrice('pricePersonal', setCardPricePersonal)
        requestPrice('priceGroup', setCardPriceGroup)
        requestPrice('priceKids', setCardPriceKids)
    }, [])

    const requestPrice = (address, state) => {
        clearError()
        getLocalData(address).then(data => state(data))
    }

    const renderContent = (data) => {
        return (
            data.map(item => (
                <div key={item.id} className="price__plan">
    
                    <div className="price__head">
                        <h3><span className="price__symbol">&#8381;</span>{item.price}</h3>
                        <h4>{item.time}</h4>
                    </div>
    
                    <h3 className="price__subtitle">{item.title}</h3>
    
                    <ul className="price__items">
                        <li>{item.description.string_1}</li>
                        <li>{item.description.string_2}</li>
                        <li>{item.description.string_3}</li>
                    </ul>
                    
                    <div className="price__line"></div>
                    <Link to='/contacts' className="button button_price">Записаться</Link>
                </div>
            ))
        )
    } 

    const spinner = loading ? <Spinner/> : null; 
    const errorMessage = error ? <ErrorMessage/> : null;
    const pricePersonal = renderContent(cardPricePersonal);
    const priceGroup = renderContent(cardPriceGroup);
    const priceKids = renderContent(cardPriceKids);

    return (
        <section className="price">
            <div className="container">
                <ErrorBoundary>
                    <div className="price__title-and-search">
                        
                        <div className="price__wrapper-for-search">
                            <button 
                                className="price__button" 
                                onClick={() => setFilterCard(filterCard !== 1 ? 1 : 0)}
                                style={filterCard === 1 ? {border: "3px solid #000"} : null}>
                                ИНДИВИДУАЛЬНЫЕ 
                            </button>
                            <button 
                                className="price__button price__button_mg" 
                                onClick={() => setFilterCard(filterCard !== 2 ? 2 : 0)}
                                style={filterCard === 2 ? {border: "3px solid #000"} : null}>
                                ГРУППОВЫЕ
                            </button>
                            <button 
                                className="price__button" 
                                onClick={() => setFilterCard(filterCard !== 3 ? 3 : 0)}
                                style={filterCard === 3 ? {border: "3px solid #000"} : null}>
                                ДЕТИ
                            </button>
                        </div>
                        
                    </div>

                    {filterCard === 0 || filterCard === 1 ? 
                        <div className="price__title-and-card">
                            <div>
                                <div className="price__title">ИНДИВИДУАЛЬНЫЕ ЗАНЯТИЯ
                                    <p>01</p>
                                </div>
                            </div>

                            <div className="price__wrapper">
                                {pricePersonal}
                                {spinner}
                                {errorMessage}
                            </div>
                        </div> : null
                    }

                    {filterCard === 0 || filterCard === 2 ? 
                        <div className="price__title-and-card">
                            <div className="price__title">ГРУППОВЫЕ ЗАНЯТИЯ
                                <p>02</p>
                            </div>

                            <div className="price__wrapper">
                                {priceGroup}
                                {spinner}
                                {errorMessage}
                            </div>
                        </div> : null
                    }

                    {filterCard === 0 || filterCard === 3 ? 
                        <div className="price__title-and-card">
                            <div className="price__title">ЗАНЯТИЯ С ДЕТЬМИ
                                <p>03</p>
                            </div>

                            <div className="price__wrapper">
                                {priceKids}
                                {spinner}
                                {errorMessage}
                            </div>    
                        </div> : null
                    }
                </ErrorBoundary> 
            </div>
        </section>
    )
}

export default Price;