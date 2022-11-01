import './Club.scss';
import sportClub from '../../../resources/img/main_page/sport_club.png';

const Club = () => {
    
    
    return (
        <section className="club">
            <div className="container">
                <div className="club__img" data-aos="zoom-in-down" data-aos-offset="200" data-aos-duration="1000">
                    <img src={sportClub} alt="sport_club"/>
                </div>
                <div className="club__info" data-aos="zoom-in-down" data-aos-offset="200" data-aos-duration="1000">
                    <h2>Теннисный клуб</h2>
                    <p>
                        Школа большого тенниса — это не просто место, куда приходят заниматься. Это клуб настоящих энтузиастов тенниса, где вы сможете знакомиться, общаться, дружить, отдыхать. <br/><br/>
                        Мы в равной мере высоко оцениваем необходимость физического и профессионального совершенствования, психологического комфорта и возможности приятно провести время.                
                    </p>
                    <h3>Наши преимущества</h3>
                    <ul>
                        <li>Формируем группы строго по уровню подготовки</li>
                        <li> Ваши занятия в случае пропуска восстанавливаются</li>
                        <li> Ракетки и мячи предоставляются бесплатно</li>
                        <li> Удобная система оплаты</li>
                    </ul>
                </div>
            </div>
        </section>

    )
} 

export default Club;