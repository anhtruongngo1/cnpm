import classNames from 'classnames/bind';
import styles from './Modal.module.scss';

const cx = classNames.bind(styles);

function Modal({ children, onClose }) {
    return (
        <>
            <div className={cx('wrapper')}>
                {children}
                <span className={cx('close')} onClick={onClose}>
                    X
                </span>
            </div>
        </>
    );
}

export default Modal;
