import './ModalContent.scss';
import { Formik, Field, ErrorMessage, Form} from 'formik';
import * as Yup from 'yup';
import MaskedInput from 'react-text-mask';

const ModalContent = ({setFormSent, setActive}) => {
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

    return (
        <Formik
            initialValues={{
                name: '',
                phone: ''
            }}
            validationSchema = {Yup.object({
                name: Yup.string ()
                    .min(2, 'Минимум два символа!')
                    .required('Обязательное поле!'),
                phone: Yup.string()
                    .required('Обязательное поле!')
                    .transform(value => value.replace(/[^\d]/g, ''))
                    .min(11, 'Введите номер полностью!'),
            })} 
            onSubmit = {(value, {resetForm}) => {
                console.log(JSON.stringify(value, null, 2))
                resetForm({ values: ''})
                setFormSent(true)

                setTimeout(() => {
                    setActive(false)
                }, 3000)

                setTimeout(() => {
                    setFormSent(false)
                }, 4000)
            }}
            >
            <Form
                className="modal-content" 
                action="#" 
                noValidate>
                    <Field 
                        className="modal-content__input"
                        type="text"     
                        placeholder="Ваше имя" 
                        name="name" 
                        id="name"
                        as="input">
                    </Field>
                    <ErrorMessage className='modal-content__error' name = 'name' component = 'div'/>
                    <Field 
                        name="phone">
                        {({ field }) =>(
                            <MaskedInput
                                {...field}
                                className="modal-content__number"
                                mask={ phoneNumberMask }
                                as="input"
                                id="phone"
                                type="text"
                                placeholder="Ваш телефон">
                            </MaskedInput>
                        )}
                    </Field>
                    <ErrorMessage className='modal-content__error' name = 'phone' component = 'div'/>
                <button className="button button_align-left button_modal" type='submit'>Отправить</button>
            </Form>
        </Formik>
    )
}

export default ModalContent;