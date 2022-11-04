import './FormData.scss';
import {Formik, Field, ErrorMessage, Form} from 'formik';
import * as Yup from 'yup';

const FormData = () => {
    const phoneRegExp = /^(\+7|8)(\(\d{3}\)|\d{3})\d{7}$/

    return(
        <Formik
            initialValues={{
                name: '',
                surname: '',
                number: '',
                email: '',
                text: ''
            }}  
            validationSchema = {Yup.object({
                name: Yup.string ()
                    .min(2, 'Минимум два символа!')
                    .required('Обязательное поле!'),
                surname: Yup.string ()
                    .min(2, 'Минимум два символа!'),
                number: Yup.string()
                    .matches(phoneRegExp, 'Номер телефона невалидный'),
                    // .moreThan(5, 'Не мение пяти!')
                    // .required('Обязательное поле!'),
                email: Yup.string ()
                    .email('Неправильный email адрес!')
                    .required('Обязательное поле!'),
                text: Yup.string ()
                    .min(5, 'Минимум 5 символов для заполнения!'),
            })} 
            onSubmit = {value => console.log(JSON.stringify(value, null, 2))}
            >
            <Form className="form-data" action="#">
                <h3 className="form-data__subtitle">Введите контактные данные</h3>
                <div className="form-data__input form-data__input_mg">
                    <Field 
                        type="text"     
                        placeholder="Ваше имя" 
                        name="name" 
                        id="name"
                        as="input">
                    </Field>
                    <ErrorMessage className='error' name = 'name' component = 'div'/>
                </div>
                <div className="form-data__input">
                    <Field 
                        type="text" 
                        placeholder="Ваша фамилия" 
                        name="surname" 
                        id="surname"
                        as="input">
                    </Field>
                    <ErrorMessage className='error' name = 'surname' component = 'div'/>
                </div>
                <div className="form-data__number">
                    <Field 
                        type="number" 
                        placeholder="Ваш телефон" 
                        name="number" 
                        id="number"
                        as="input">
                    </Field>
                    <ErrorMessage className='error' name = 'number' component = 'div'/>
                </div>
                <div className="form-data__email">
                    <Field
                        type="email"    
                        placeholder="Ваша почта" 
                        name="email" 
                        id="email"
                        as="input">
                    </Field>
                    <ErrorMessage className='error' name = 'email' component = 'div'/>
                </div>
                <div className="form-data__text">
                    <Field
                        placeholder="Ваше сообщение" 
                        name="text" 
                        id="text" 
                        as="textarea">
                    </Field>
                    <ErrorMessage className='error' name = 'text' component = 'div'/>
                </div>
                <button className="button" type='submit'>Отправить</button>
            </Form>
        </Formik>
    )
}

export default FormData;