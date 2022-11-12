import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header({ children }) {
    return (
        <>
            <div className={cx('wrapper')}>{children}</div>
        </>
    );
}

export default Header;
