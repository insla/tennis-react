import img from './error.gif';

const ErrorMessage = () => {
    return (
        <img src={img} alt="error" style={{margin: '0 auto', height: '350px', objectFit: 'contain'}}/>
    )
}

export default ErrorMessage;