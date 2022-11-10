import './Courts.scss';
import ground from '../../../resources/img/main_page/ground.png';
import grass from '../../../resources/img/main_page/grass.jpg';
import hard from '../../../resources/img/main_page/hard.png';

const Courts = () => {
    return (
        <section className="courts">
            <div className="container">
                <div className="courts__wrapper">
                    <div className="courts__item" data-aos="zoom-in-down" data-aos-delay="100" data-aos-duration="1000">
                        <img className="courts__img" src={ground} alt="ground"/>
                        <p>5 летних <br/> грунтовых кортов</p>
                    </div>
                    <div className="courts__item" data-aos="zoom-in-down" data-aos-delay="200" data-aos-duration="1000">
                        <img className="courts__img" src={grass} alt="grass"/>
                        <p>3 корта с травяным покрытием</p>
                    </div>
                    <div className="courts__item" data-aos="zoom-in-down" data-aos-delay="300" data-aos-duration="1000">
                        <img className="courts__img" src={hard} alt="hard"/>
                        <p>6 кортов с покрытием <br/> “Хард”</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Courts;