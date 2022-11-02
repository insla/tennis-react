import './Price.scss';
import getResource from '../../services/Services';
import { useState, useEffect } from 'react';
import Spinner from '../../components/spinner/Spinner';

const Price = () => {
    const [cardPrice, setCardPrice] = useState([]);

    useEffect(() => {
        getResource('http://localhost:3001/price')
        .then(data => setCardPrice(data))
    }, [])
    console.log(cardPrice[0].length)
    // console.log(Object.keys(cardPrice[0]).length)

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

    const pricePersonal = cardPrice.length === 0 ? <Spinner/> : renderContent(cardPrice[0].personal);
    const priceGroup = cardPrice.length === 0 ? <Spinner/> : renderContent(cardPrice[1].group);
    const priceKids = cardPrice.length === 0 ? <Spinner/> : renderContent(cardPrice[2].kids);



    return (
        <section className="price">
            <div className="container">
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
                </div>

                <div className="price__title">ГРУППОВЫЕ ЗАНЯТИЯ
                    <p>02</p>
                </div>

                <div className="price__wrapper">
                    {priceGroup}
                </div>

                <div className="price__title">ЗАНЯТИЯ С ДЕТЬМИ
                    <p>03</p>
                </div>

                <div className="price__wrapper">
                    {priceKids}
                </div>
            </div>
        </section>

    )
}

export default Price;