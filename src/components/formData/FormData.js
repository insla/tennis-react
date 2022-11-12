import './FormData.scss';
import {Formik, Field, ErrorMessage, Form} from 'formik';
import * as Yup from 'yup';
import MaskedInput from 'react-text-mask';

const FormData = () => {

    const phoneNumberMask = [
        "+",
        "7",
        " ",
        "(",
        /[1-9]/,
        /\d/,
        /\d/,
        ")",
        " ",
        /\d/,
        /\d/,
        /\d/,
        "-",
        /\d/,
        /\d/,
        /\d/,
        /\d/
    ];
    
    return(
        <Formik
            initialValues={{
                name: '',
                surname: '',
                phone: '',
                email: '',
                text: ''
            }}
            validationSchema = {Yup.object({
                name: Yup.string ()
                    .min(2, 'Минимум два символа!')
                    .required('Обязательное поле!'),
                surname: Yup.string ()
                    .min(2, 'Минимум два символа!'),
                phone: Yup.string()
                    .required('Обязательное поле!')
                    .transform(value => value.replace(/[^\d]/g, ''))
                    .min(11, 'Введите номер полностью!'),
                    
                email: Yup.string ()
                    .email('Неправильный email адрес!')
                    .required('Обязательное поле!'),
                text: Yup.string ()
                    .min(5, 'Минимум 5 символов для заполнения!'),
            })} 
            onSubmit = {(value, {resetForm}) => {
                console.log(JSON.stringify(value, null, 2))
                resetForm({ value : ''})
            }}
            >
            <Form className="form-data" action="#" noValidate>
                <h3 className="form-data__subtitle">Введите контактные данные</h3>
                <div className="form-data__input form-data__input_mg">
                    <Field 
                        type="text"     
                        placeholder="Ваше имя" 
                        name="name" 
                        id="name"
                        as="input">
                    </Field>
                    <ErrorMessage className='form-data__error' name = 'name' component = 'div'/>
                </div>
                <div className="form-data__input">
                    <Field 
                        type="text" 
                        placeholder="Ваша фамилия" 
                        name="surname" 
                        id="surname"
                        as="input">
                    </Field>
                    <ErrorMessage className='form-data__error' name = 'surname' component = 'div'/>
                </div>
                <div className="form-data__number">
                    <Field 
                        name="phone">
                        {({ field }) =>(
                            <MaskedInput
                                {...field}
                                mask={ phoneNumberMask }
                                as="input"
                                id="phone"
                                type="text"
                                placeholder="Ваш телефон">
                            </MaskedInput>
                        )}
                    </Field>
                    <ErrorMessage className='form-data__error' name = 'phone' component = 'div'/>
                </div>
                <div className="form-data__email">
                    <Field
                        type="email"    
                        placeholder="Ваша почта" 
                        name="email" 
                        id="email"
                        as="input">
                    </Field>
                    <ErrorMessage className='form-data__error' name = 'email' component = 'div'/>
                </div>
                <div className="form-data__text">
                    <Field
                        placeholder="Ваше сообщение" 
                        name="text" 
                        id="text" 
                        as="textarea">
                    </Field>
                    <ErrorMessage className='form-data__error' name = 'text' component = 'div'/>
                </div>
                <button className="button button_align-left" type='submit'>Отправить</button>
            </Form>
        </Formik>
    )
}

export default FormData;

