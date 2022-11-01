import './Group.scss';
import groupPage from '../../resources/img/grpup/group-page.jpg';

const Group = () => {
    return (
        <section className="group">
            <div className="container">
                <h2 className="title title_centr">ГРУППОВЫЕ ТРЕНИРОВКИ</h2>
                <img src={groupPage} alt="personal"/>
                <p>
                    Мы — ваша возможность научиться играть в теннис при любых исходных данных! Принимаем в группы и новичков, и любителей, и профессионалов.
                    <br/><br/>
                    Возможно, вы ранее никогда не держали в руках ракетку или же имеете небольшой опыт в этом деле – это не столь важно: мы в любом случае берем на себя все заботы по обучению теннису взрослых.
                    <br/><br/>
                    Во взрослые группы мы записываем с 15 лет (для детей действуют отдельные условия). Вы можете тренироваться индивидуально с тренером, в группе (обычно до 4 человек) либо сформировать команду из ваших друзей или членов семьи (это очень скрепляет отношения!). Также мы собираем мини-группы для парных занятий.
                </p>
                <ul>
                    <li>
                        Вы платите только за тренировки. Все оплаченные, но неиспользованные занятия не сгорают - вы можете согласовать удобную дату и время для переноса.
                    </li>
                    <li>
                        Мы не акцентируем внимание на эффекте похудения, улучшении рельефа мышц (как делают другие школы тенниса), так как это закономерный процесс. Наша основная задача – предоставить вам высококачественное обучение теннису, а все остальное (например, касающееся фигуры) – придет к вам само.
                    </li>
                    <li>
                        Гибкий график. Выбирайте удобное время для своих занятий. Включительно с выходными днями.
                    </li>
                </ul>
                <h3>КАК ПРОХОДЯТ ТРЕНИРОВКИ</h3>
                <p>
                    Мы тестируем вас, оценивая ваши возможности. Мы не просим вас демонстрировать все ваши навыки – будет достаточно того, что вы нам расскажете, на каком уровне находится ваша «дружба» с теннисом.
                    <br/><br/>
                    Подбирается удобный график и формируется группа. Примерно 2-4 раза в неделю, но возможны и внесения изменений (по вашему желанию).
                    <br/><br/>
                    Вы наслаждаетесь эффективностью занятий, удивляя друзей, близких, партнеров своими навыками!
                </p>
                <button className="button">Записаться</button>
            </div>
        </section>
    )
}

export default Group;