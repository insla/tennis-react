import './Assist.scss';
import children from '../../../resources/img/assist/children.jpg';
import personal from '../../../resources/img/assist/personal.jpg';
import group from '../../../resources/img/assist/group.jpg';

const Assist = () => {
    return (
        <section className="assist">
            <div className="container">
                <h2 className="title">Услуги</h2>
            </div>
            <div className="assist__wrapper">
                <div className="assist__card">
                    <div className="assist__title">
                        <img src={children} alt="children" className="assist__img"/>
                        <p>Тренировки для детей</p>    
                    </div>

                    <div className="assist__info">
                        <p className="assist__description">Кто только делает свой первый шаг в мир тенниса</p>
                        <button className="button">Подробнее</button>
                    </div>
                    
                    <div className="assist__gradient-overlay"></div>
                    <div className="assist__color-overlay"></div>    
                </div>

                <div className="assist__card assist__card_mg">
                    <div className="assist__title">
                        <img src={personal} alt="personal" className="assist__img"/>
                        <p>Персональные тренировки</p>    
                    </div>

                    <div className="assist__info">
                        <p className="assist__description">Индивидуальный подход и мотивация на успех</p>
                        <button className="button">Подробнее</button>
                    </div>

                    <div className="assist__gradient-overlay"></div>
                    <div className="assist__color-overlay"></div>    
                </div>

                <div className="assist__card">
                    <div className="assist__title">
                        <img src={group} alt="group" className="assist__img"/>
                        <p>Групповые тренировки</p>    
                    </div>

                    <div className="assist__info">
                        <p className="assist__description">Занятия в мини-группах разного уровня подготовки</p>
                        <button className="button">Подробнее</button>
                    </div>

                    <div className="assist__gradient-overlay"></div>
                    <div className="assist__color-overlay"></div>    
                </div>
            </div>
        </section>
    )
}

export default Assist;