import './Coach.scss';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// import getResource from '../../../services/Services';
import useGetData from '../../../hooks/GetData';
import { useState, useEffect } from 'react';
import arrowLeft from '../../../resources/icons/arrow_left.png';
import arrowRight from '../../../resources/icons/arrow_right.png';



const Coach = () => {
    const [coach, setCoach] = useState([]) 

    const { getResource } = useGetData();

    useEffect(() => {
        getResource('http://localhost:3001/coach')
            .then(data => setCoach(data))
    }, [])

    const renderCoach = coach.map(item => {
        return (
            <div key={item.id}>
                <div className="coach__wrapper">
                    <div className="coach__img">
                        <img src={item.img}  alt={item.altImg}/>
                    </div>
                    <div className="coach__text">
                        <p className="coach__name">{item.name}</p>
                        <p className="coach__description">{item.description}</p>
                    </div>
                </div>
            </div>
        )
    })

    const LeftNavButton = (props) => {
        const {onClick} = props

        return (
            <button
                type="button"
                className='slick-prev slick-arrow'
                onClick={onClick}
            >
                <img src={arrowLeft} alt="arrow_left"/>
            </button>
        );
    }

    const RightNavButton = (props) => {
        const {onClick} = props

        return (
            <button
                type="button"
                className="slick-next slick-arrow"
                onClick={onClick}
            >
                <img src={arrowRight} alt="arrow_right"/>
            </button>
        );
    }

    const settings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        autoplay: false,
        autoplaySpeed: 1500,
        prevArrow: <LeftNavButton/>,
        nextArrow: <RightNavButton/>,
        responsive: [{
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            }
        }]
    }    

    return (
        <section className="coach">
            <div className="container">
                <h2 className="title title_centr">Тренерский состав</h2>
                <Slider {...settings}>
                    {renderCoach}
                </Slider>
            </div>
        </section>
    )
}

export default Coach;

