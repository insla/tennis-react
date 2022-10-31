import './Slider.scss';
import { useState } from 'react';

const Slider = () => {

    

    return (
        <section className="slider">
            <div className="container">
                <h2 className="title title_centr">Фото кортов</h2>
            </div>
            <div className="slider__wrapper">
                <div className='slider__slide slider__slide_1'>
                    <h3>Грунт</h3>
                </div>
                <div className="slider__slide slider__slide_2">
                    <h3>Трава</h3>
                </div>
                <div className="slider__slide slider__slide_3 slider__slide_active">
                    <h3>Hard</h3>
                </div>
            </div> 
        </section>
    )
}

export default Slider;

