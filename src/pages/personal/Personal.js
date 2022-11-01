import './Personal.scss';
import personalPage from '../../resources/img/personal/personal-page.jpg';

const Personal = () => {
    return (
        <section className="personal">
            <div className="container">
                <h2 className="title title_centr">Персональные тренировки</h2>
                <img src={personalPage} alt="personal"/>
                <p>
                    Если Вы желаете заниматься индивидуально, мы рады предложить Вам команду высококвалифицированных тренеров. Они научат играть в теннис с нуля взрослых и детей. Будут замечательным спарринг- партнёром как для любителей, так и для профессионалов.
                    <br/><br/>
                    Отправьте нам заявку, указав обязательно свои имя и телефон. Мы перезвоним и ответим Вам на все интересующие вопросы.
                </p>
                <button className="button">Записаться</button>
            </div>
        </section>
    )
}

export default Personal;