import './Coach.scss';
import useServices from '../../../services/Services';
import { useState, useEffect } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import arrowLeft from '../../../resources/icons/arrow_left.png';
import arrowRight from '../../../resources/icons/arrow_right.png';
import ErrorMessage from '../../../components/errorMessage/ErrorMessage';
import Spinner from '../../../components/spinner/Spinner';

const Coach = () => {
    const [coach, setCoach] = useState([]) 

    const { getLocalData, clearError, loading, error } = useServices();

    useEffect(() => {
        requestCoach('coach')
    }, [])

    const requestCoach = (address) => {
        clearError()
        getLocalData(address)
            .then(data => setCoach(data))
    }

    const renderCoach = () => {
        return (
            coach.map((item, i) => (
                <Slide index={i} key={item.id}>
                    <div className='coach__align-items'>
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
                </Slide>
            ))
        )
        
    }


    const spinner = loading ? <Spinner/> : null; 
    const errorMessage = error ? <ErrorMessage/> : null;
    const items = renderCoach()

    return (
        <section className="coach">
            <div className="container">
                <h2 className="title title_centr">Тренерский состав</h2>
                {spinner}
                {errorMessage}
                
                <CarouselProvider
                    naturalSlideHeight={125} 
                    naturalSlideWidth={100} 
                    totalSlides={6} 
                    isPlaying={true}
                    interval={2000}
                    infinite={true} 
                    lockOnWindowScroll={true}
                    isIntrinsicHeight={true} 
                    visibleSlides={3} 
                    currentSlide={1}>
                        <Slider>
                            {items}
                        </Slider>
                        <ButtonBack className='coach__button-left'><img src={arrowLeft} alt="arrowLeft" /></ButtonBack>
                        <ButtonNext className='coach__button-right'><img src={arrowRight} alt="arrowRight" /></ButtonNext>
                        <DotGroup ></DotGroup>
                </CarouselProvider>
            </div>
        </section>
    )
}

export default Coach;

