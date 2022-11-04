import './ErrorMessage.scss';
import img from './error.gif';

const ErrorMessage = () => {
    return (
        <img className='error-message error-message_page404' src={img} alt="error"/>
    )
}

export default ErrorMessage;