import './Page404.scss';
import ErrorMessage from '../../components/errorMessage/ErrorMessage';
import { Link } from 'react-router-dom';

const Page404 = () => {
    return (
        <div className='not-found'>
            <ErrorMessage className='not-found__img'/>
            <p>Page not found</p>
            <Link to='/'>Back to main page</Link>
        </div>
    )
}

export default Page404;