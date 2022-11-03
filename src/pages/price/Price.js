import './Price.scss';
// import getResource from '../../services/Services';
import useServices from '../../services/Services';
import { useState, useEffect } from 'react';
import Spinner from '../../components/spinner/Spinner';
import ErrorMessage from '../../components/errorMessage/ErrorMessage';
import ErrorBoundary from '../../components/errorBoundary/ErrorBoundary';

const Price = () => {
    const [cardPricePersonal, setCardPricePersonal] = useState([]);
    const [cardPriceGroup, setCardPriceGroup] = useState([]);
    const [cardPriceKids, setCardPriceKids] = useState([]);

    const { getResource, error, loading } = useServices();

    useEffect(() => {
        const test = (path, state) => {
            getResource(`http://localhost:3001/${path}`)
                .then(data => state(data))
        }

        test('pricePersonal' ,setCardPricePersonal)
        test('priceGroup' ,setCardPriceGroup)
        test('priceKids' ,setCardPriceKids)
    }, [])

    
    const renderContent = (data) => {
        return (
            data.map(item => {
                return (
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
                        <button className="button button__price">Записаться</button>
                    </div>
                )
            })
        )
    } 

    // const pricePersonal = loading ? <Spinner/> : renderContent(cardPricePersonal);
    // const priceGroup = loading ? <Spinner/> : renderContent(cardPriceGroup);
    // const priceKids = loading ? <Spinner/> : renderContent(cardPriceKids);

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
                        <div>
                            <div className="price__title">ИНДИВИДУАЛЬНЫЕ ЗАНЯТИЯ
                                <p>01</p>
                            </div>
                        </div>
                        <div className="price__wrapper-for-search">
                            <button className="price__button">ИНДИВИДУАЛЬНЫЕ </button>
                            <button className="price__button price__button_mg">ГРУППОВЫЕ</button>
                            <button className="price__button">ДЕТИ</button>
                        </div>
                        
                    </div>

                    <div className="price__wrapper">
                        {pricePersonal}
                        {spinner}
                        {errorMessage}
                    </div>

                    <div className="price__title">ГРУППОВЫЕ ЗАНЯТИЯ
                        <p>02</p>
                    </div>

                    <div className="price__wrapper">
                        {priceGroup}
                        {spinner}
                        {errorMessage}
                    </div>

                    <div className="price__title">ЗАНЯТИЯ С ДЕТЬМИ
                        <p>03</p>
                    </div>

                    <div className="price__wrapper">
                        {priceKids}
                        {spinner}
                        {errorMessage}
                    </div>  
                </ErrorBoundary> 
            </div>
        </section>
    )
}

export default Price;