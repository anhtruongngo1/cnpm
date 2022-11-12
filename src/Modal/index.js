import classNames from 'classnames/bind';
import styles from './Modal.module.scss';

const cx = classNames.bind(styles);

function Modal({ children, onClose }) {
    return (
        <>
            <div onClick={onClose} className={cx('wrapper')}>
                {children}
                <span>X</span>
            </div>
        </>
    );
}

export default Modal;
