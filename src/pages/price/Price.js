import './Price.scss';
import getResource from '../../services/Services';
import { useState, useEffect } from 'react';

const Price = () => {
    const [cardPrice, setCardPrice] = useState([])

    useEffect(() => {
        getResource('http://localhost:3001/price')
            .then(data => setCardPrice(data))
    }, [])

    

    

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
                    <div className="price__plan">

                        <div className="price__head">
                            <h3><span className="price__symbol">&#8381;</span>5000</h3>
                            <h4>60 минут</h4>
                        </div>
        
                        <h3 className="price__subtitle">ИНДИВИДУАЛЬНОЕ ЗАНЯТИЕ</h3>
        
                        <ul className="price__items">
                            <li>РАЗОВОЕ ПОСЕЩЕНИЕ</li>
                            <li>1 КЛИЕНТ — 1 ТРЕНЕР</li>
                            <li>РАКЕТКА БЕСПЛАТНО</li>
                        </ul>
                        
                        <div className="price__line"></div>
                        <button className="button button__price">Записаться</button>
                    </div>
                    <div className="price__plan">
        
                        <div className="price__head">
                            <h3><span className="price__symbol">&#8381;</span>5000</h3>
                            <h4>60 минут</h4>
                        </div>
        
                        <h3 className="price__subtitle">СПЛИТ ЗАНЯТИЕ</h3>
        
                        <ul className="price__items">
                            <li>РАЗОВОЕ ПОСЕЩЕНИЕ</li>
                            <li>2 КЛИЕНТ — 1 ТРЕНЕР</li>
                            <li>РАКЕТКА БЕСПЛАТНО</li>
                        </ul>
                        
                        <div className="price__line"></div>
                        <button className="button button__price">Записаться</button>
                    </div>
                    <div className="price__plan">
        
                        <div className="price__head">
                            <h3><span className="price__symbol">&#8381;</span>18000</h3>
                            <h4>ОТ 4-ЕХ ЗАНЯТЙ</h4>
                        </div>
        
                        <h3 className="price__subtitle">АБОНЕМЕНТ</h3>
        
                        <ul className="price__items">
                            <li>ОДНО ЗАНЯТИЕ 60 МИНУТ</li>
                            <li>ИНДИВИДУАЛЬНЫЙ ПОДХОД</li>
                            <li>РАКЕТКА БЕСПЛАТНО</li>
                        </ul>
                        
                        <div className="price__line"></div>
                        <button className="button button__price">Записаться</button>
                    </div>
                </div>

                <div className="price__title">ГРУППОВЫЕ ЗАНЯТИЯ
                    <p>02</p>
                </div>

                <div className="price__wrapper">
                    <div className="price__plan">

                        <div className="price__head">
                            <h3><span className="price__symbol">&#8381;</span>1500</h3>
                            <h4>60 минут</h4>
                        </div>
        
                        <h3 className="price__subtitle">РАЗОВОЕ ПОСЕЩЕНИЕ</h3>
        
                        <ul className="price__items">
                            <li>ЗАНЯТИЕ В ГРУППЕ</li>
                            <li>ПЕРВАЯ ТРЕНИРОВКА 1000 ₽</li>
                            <li>РАКЕТКА БЕСПЛАТНО</li>
                        </ul>
                        
                        <div className="price__line"></div>
                        <button className="button button__price">Записаться</button>
                    </div>
                    <div className="price__plan price__plan_mg">
        
                        <div className="price__head">
                            <h3><span className="price__symbol">&#8381;</span>6000</h3>
                            <h4>ОТ 4-ЕХ ЗАНЯТЙ</h4>
                        </div>
        
                        <h3 className="price__subtitle">АБОНЕМЕНТ</h3>
        
                        <ul className="price__items">
                            <li>ОДНО ЗАНЯТИЕ 60 МИН</li>
                            <li>ГРУППА ДО 4-Х ЧЕЛОВЕК</li>
                            <li>РАКЕТКА БЕСПЛАТНО</li>
                        </ul>
                        
                        <div className="price__line"></div>
                        <button className="button button__price">Записаться</button>
                    </div>
                </div>

                <div className="price__title">ЗАНЯТИЯ С ДЕТЬМИ
                    <p>03</p>
                </div>

                <div className="price__wrapper">
                    <div className="price__plan">

                        <div className="price__head">
                            <h3><span className="price__symbol">&#8381;</span>3000</h3>
                            <h4>60 минут</h4>
                        </div>
        
                        <h3 className="price__subtitle">ИНДИВИДУАЛЬНОЕ ЗАНЯТИЕ</h3>
        
                        <ul className="price__items">
                            <li>РАЗОВОЕ ПОСЕЩЕНИЕ</li>
                            <li>1 РЕБЕНОК — 1 ТРЕНЕР</li>
                            <li>РАКЕТКА БЕСПЛАТНО</li>
                        </ul>
                        
                        <div className="price__line"></div>
                        <button className="button button__price">Записаться</button>
                    </div>
                    <div className="price__plan price__plan_mg">
        
                        <div className="price__head">
                            <h3><span className="price__symbol">&#8381;</span>1000</h3>
                            <h4>60 минут</h4>
                        </div>
        
                        <h3 className="price__subtitle">РАЗОВОЕ ПОСЕЩЕНИЕ</h3>
        
                        <ul className="price__items">
                            <li>ЗАНЯТИЕ В ГРУППЕ</li>
                            <li>ГРУППА ИЗ 4-ЕХ ЧЕЛОВЕК</li>
                            <li>РАКЕТКА БЕСПЛАТНО</li>
                        </ul>
                        
                        <div className="price__line"></div>
                        <button className="button button__price">Записаться</button>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Price;