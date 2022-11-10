import './Contacts.scss';
import FormData from '../../components/formData/FormData';

const Contacts = () => {

    return (
        <section className="contacts">
            <div className="container">
                <h2 className="title title_centr">Записаться на тренировку</h2>
                <div className="contacts__info">
                    <div className="contacts__items">
                        <div className="contacts__address">
                            <h3>Адрес</h3>
                            <a href="#">Теннисный клуб Sunrise, ул. Бутлерова 9, Санкт-Петербург</a>
                        </div>
                        <div className="contacts__social">
                            <div className="contacts__telephone">
                                <h3>Телефон</h3>
                                <a href="#">+7 (199) 232 22 22</a>
                            </div>
                            <div className="contacts__telegram">
                                <h3>Телеграм</h3>
                                <a href="#">@sunrise_tennis</a>
                            </div>
                        </div>
                    </div>
                    <div className="contacts__description">
                        Теннисный клуб «Sunrise» приглашает всех желающих на тренировки по теннису. Мы профессионально подходим к обучению, с нами вы научитесь играть в кратчайшие сроки!
                    </div>
                </div>
                <div className="contacts__wrapper">
                    <div className="contacts__map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d73843.50401522542!2d30.31952057653842!3d59.96000416194652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469633a65b1044c7%3A0xb0a5856e7220f1f5!2z0YPQuy4g0JHRg9GC0LvQtdGA0L7QstCwLCA5LCDQodCw0L3QutGCLdCf0LXRgtC10YDQsdGD0YDQsywg0KDQvtGB0YHQuNGPLCAxOTUyMjA!5e0!3m2!1sru!2s!4v1665136701256!5m2!1sru!2s" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='map'></iframe>
                    </div>
                    <FormData/>
                </div>
            </div>
        </section>
    )
}

export default Contacts;