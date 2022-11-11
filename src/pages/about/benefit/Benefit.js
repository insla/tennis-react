import './Benefit.scss';
import benefit_1 from '../../../resources/img/about/benefit-1.jpg';
import benefit_2 from '../../../resources/img/about/benefit-2.jpg';
import benefit_3 from '../../../resources/img/about/benefit-3.jpg';
import { Link } from 'react-router-dom';

const Benefit = () => {
    return (
        <section className="benefit">
            <div className="container">
                <div className="benefit__wrapper">
                    <div className="benefit__item">
                        <div className="benefit__description" data-aos="flip-left" data-aos-duration="500" data-aos-delay="350" data-aos-offset="200">
                            <p>01</p>
                            <h3>Школа большого тенниса для любителей тенниса</h3>
                            <div className="benefit__text">Школа тенниса TennisTeam была основана в 2013 году и была задумана, как школа для любителей, которые выбрали для себя большой теннис в качестве хобби. Кто-то из наших учеников занимался большим теннисом в детстве, а во взрослом возрасте решил продолжить. Кто-то ни разу не брал ракетку в руки и захотел попробовать большой теннис в качестве альтернативы скучному фитнесу. Так или иначе, всегда было и есть много желающих играть в теннис по вечерам после работы и в выходные. </div>
                        </div>
                        <div className="benefit__img" data-aos="flip-left" data-aos-duration="500" data-aos-delay="200" data-aos-offset="200">
                            <img src={benefit_1} alt="img1"/>
                        </div>
                    </div>

                    <div className="benefit__item">
                        <div className="benefit__img" data-aos="flip-left" data-aos-duration="500" data-aos-delay="200" data-aos-offset="200">
                            <img src={benefit_2} alt="img2"/>
                        </div>
                        <div className="benefit__description benefit__description_right" data-aos="flip-left" data-aos-duration="500" data-aos-delay="350" data-aos-offset="200">
                            <p>02</p>
                            <h3>Мы стараемся сделать теннис доступным!</h3>
                            <div className="benefit__text">
                                Теннис - совсем не дешевый вид спорта, и не каждый человек может себе позволить самостоятельно арендовать корты и платить за индивидуальные занятия с тренером. Так появился очень популярный сейчас групповой формат тренировок для взрослых. Так как количество учеников школы довольно велико мы можем формировать группы, отталкиваясь от уровня подготовки каждого участника. Таким образом опытные игроки играют в группах с опытными игроками, а начинающие теннисисты - с начинающими. Расходы на оплату услуг тренера и аренду корта делятся между всеми участниками группы, поэтому занятия теннисом становятся доступнее. 
                            </div>
                        </div>
                    </div>
                    
                    <div className="benefit__item">
                        <div className="benefit__description" data-aos="flip-left" data-aos-duration="500" data-aos-delay="350" data-aos-offset="200">
                            <p>03</p>
                            <h3>Тренировки в Москве и теннисные кэмпы за рубежом</h3>
                            <div className="benefit__text">Одним из направлений деятельности теннисной школы являются теннисные сборы, так называемые теннисные кэмпы для любителей. Большой компанией (от 20 человек и более) мы выезжаем за рубеж, где тренируемся, проводим видео - разборы техники, а в свободное от тренировок время посещаем местные достопримечательности.</div>
                        </div>
                        <div className="benefit__img" data-aos="flip-left" data-aos-duration="500" data-aos-delay="200" data-aos-offset="200">
                            <img src={benefit_3} alt="img3"/>
                        </div>
                    </div>
                    <Link to='/contacts'>
                        <button className="button">Записаться</button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Benefit;