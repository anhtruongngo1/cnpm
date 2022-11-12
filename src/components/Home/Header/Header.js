import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCartPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import logo from '../../../assets/logo/logo.jpg';
import Modal from '~/Modal';

const cx = classNames.bind(styles);

function Header({ children }) {
    const [showInput, setShowInput] = useState(false);

    return (
        <>
            <div className={cx('wrapper')}>
                <div className={cx('top')}>
                    <span>ĐOM-ĐÓM@QODEINTERACTIVE.COM / +663 155 9852</span>
                    <span>OPEN FROM 9AM TO 5PM – CLOSED ON WEEKENDS</span>
                </div>
                <div className={cx('inner')}>
                    <div className={cx('inner-start')}>
                        <div className={cx('logo')}>
                            <img src={logo}></img>
                        </div>
                        <Link to="./">Home</Link>
                        <Link to="./shop">Shop</Link>
                        <Link to="./about">About</Link>
                        <Link to="./blog">Blog</Link>
                    </div>
                    <div className={cx('inner-end')}>
                        {showInput && (
                            <Modal onClose={() => setShowInput(false)}>
                                <div
                                    className={cx('search')}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                    }}
                                >
                                    <input type="text" placeholder="Search..."></input>
                                    <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                                </div>
                            </Modal>
                        )}
                        <a onClick={() => setShowInput(true)}>
                            Search <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
                        </a>
                        <Tippy content={'Giỏ hàng'} placement="bottom">
                            <a className={cx('cart')} to="./shop">
                                Cart <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>
                                <span>4</span>
                            </a>
                        </Tippy>
                        <Link to="./auth/login">
                            Login <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
