import './Modal.scss';

const Modal = ({title, active, setActive, children}) => {
    return (
        <div className={active ? 'modal modal_active' : 'modal'} onClick={() => setActive(false)}>
            <div className={active ? 'modal__content modal__content_active' : 'modal__content'} onClick={e => e.stopPropagation()}>
                <h2 className='modal__title'>{title}</h2>
                {children}
            </div>
        </div>
    )
}

export default Modal;