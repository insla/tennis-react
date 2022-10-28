import './Coach.scss';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import coach_1 from '../../../resources/img/coach/coach_1.jpg';
import coach_2 from '../../../resources/img/coach/coach_2.jpg';
import coach_3 from '../../../resources/img/coach/coach_3.jpg';
import coach_4 from '../../../resources/img/coach/coach_4.jpg';
import coach_5 from '../../../resources/img/coach/coach_5.jpg';
import coach_6 from '../../../resources/img/coach/coach_6.jpg';
import arrowLeft from '../../../resources/icons/arrow_left.png';
import arrowRight from '../../../resources/icons/arrow_right.png';



const Coach = () => {

    function LeftNavButton(props) {
        const {className, style, onClick} = props

        return (
            <button
                className='slick-prev slick-arrow'
                // style={{...style, display: 'block'}}
                onClick={onClick}
            >
                <img src={arrowLeft} alt="arrow_left"/>
            </button>
        );
    }

    function RightNavButton(props) {
        const {className, style, onClick} = props

        return (
            <button
                type="button"
                className="slick-next slick-arrow"
                // style={{...style, display: 'block'}}
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
        // nextArrow: '<button type="button" className="slick-next"><img src="icons/arrow_right.png"></button>',
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
        <section class="coach">
            <div class="container">
                <h2 class="title title_centr">Тренерский состав</h2>
                <Slider {...settings}>

                        <div>
                            <div class="coach__wrapper">
                                <div class="coach__img">
                                    <img src={coach_1} alt="coach_1"/>
                                </div>
                                <div class="coach__text">
                                    <p class="coach__name">Pulvinar Aliquam</p>
                                    <p class="coach__description">Arcu elit massa amet turpis vel consequat pellentesque sit.</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="coach__wrapper">
                                <div class="coach__img">
                                    <img src={coach_2} alt="coach_2"/>
                                </div>
                                <div class="coach__text">
                                    <p class="coach__name">Pretium odio</p>
                                    <p class="coach__description">Bibendum aliquam volutpat nisl a duis in nisi. In sed commodo lorem morbi quis.</p>
                                </div>
                            </div>    
                        </div>
                        <div>
                            <div class="coach__wrapper">
                                <div class="coach__img">
                                    <img src={coach_3} alt="coach_3"/>
                                </div>
                                <div class="coach__text">
                                    <p class="coach__name">Aliquet Consectetur</p>
                                    <p class="coach__description">Id sapien sed nibh fermentum massa posuere ipsum. Diam in.</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="coach__wrapper">
                                <div class="coach__img">
                                    <img src={coach_4} alt="coach_4"/>
                                </div>
                                <div class="coach__text">
                                    <p class="coach__name">Blandit Augue</p>
                                    <p class="coach__description">Scelerisque accumsan pretium justo, vitae elit. Dolor semper morbi sit auctor vel diam eros.</p>
                                </div>
                            </div>    
                        </div>
                        <div>
                            <div class="coach__wrapper">
                                <div class="coach__img">
                                    <img src={coach_5} alt="coach_5"/>
                                </div>
                                <div class="coach__text">
                                    <p class="coach__name">Lorem Lacus</p>
                                    <p class="coach__description">Adipiscing amet, viverra dignissim egestas. Sed nibh egestas venenatis faucibus.</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="coach__wrapper">
                                <div class="coach__img">
                                    <img src={coach_6} alt="coach_6"/>
                                </div>
                                <div class="coach__text">
                                    <p class="coach__name">Sed Erat</p>
                                    <p class="coach__description">Quis ullamcorper pretium lacus risus tellus dolor etiam.</p>
                                </div>
                            </div>
                        </div>


                </Slider>
            </div>
        </section>
    )
}

export default Coach;