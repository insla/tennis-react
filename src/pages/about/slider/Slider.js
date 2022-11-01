import './Slider.scss';
import { useState } from 'react';

const Slider = () => {
    const [activeSlide, setActiveSlide] = useState('3')

    const handleClick = (event) => {
        setActiveSlide(event.currentTarget.id)
    }

    return (
        <section className="slider">
            <div className="container">
                <h2 className="title title_centr">Фото кортов</h2>
            </div>
            <div className="slider__wrapper">
                <div 
                    id='1' 
                    onClick={handleClick} 
                    className={`slider__slide slider__slide_1 ${activeSlide === '1' ? 'slider__slide_active' : ''}`}>
                    <h3>Грунт</h3>
                </div>
                <div 
                    id='2' 
                    onClick={handleClick} 
                    className={`slider__slide slider__slide_2 ${activeSlide === '2' ? 'slider__slide_active' : ''}`}>
                    <h3>Трава</h3>
                </div>
                <div 
                    id='3' 
                    onClick={handleClick} 
                    className={`slider__slide slider__slide_3 ${activeSlide === '3' ? 'slider__slide_active' : ''}`}>
                    <h3>Hard</h3>
                </div>
            </div> 
        </section>
    )
}

export default Slider;

