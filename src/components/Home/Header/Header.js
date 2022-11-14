import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCartPlus, faSearch, faSpinner, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import TippyHeadless from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import logo from '../../../assets/logo/logo.jpg';
import Modal from '~/Modal';
import Popper from '~/components/GlobalStyles/Popper';

const cx = classNames.bind(styles);

function Header({ children }) {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showInput, setShowInput] = useState(false);
    const [scrollY, setScrollY] = useState(window.scrollY);

    const ref_Header = useRef();

    // useEffect(() => {
    //     window.onscroll = () => {
    //         window.scrollY < 140
    //             ? (ref_Header.current.style.transform = 'translateY(0)')
    //             : (ref_Header.current.style.transform = 'translateY(-130px)');

    //         setScrollY(window.scrollY);
    //     };
    // }, [scrollY]);

    return (
        <>
            <div ref={ref_Header} className={cx('wrapper')}>
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
                                <TippyHeadless
                                    render={(attrs) => (
                                        <div className={cx('search-result')} tabIndex="-1">
                                            <Popper>
                                                <h1 className={cx('title')}>Kết quả tìm kiếm</h1>
                                                <div className={cx('result-item')}>
                                                    <img
                                                        src={
                                                            'https://anphat.com.vn/media/product/33299_e_dra_transformer_black.jpg'
                                                        }
                                                    ></img>
                                                    <span className={cx('name')}>Bàn gaming E-Dra</span>
                                                    <span className={cx('price')}>
                                                        {new Intl.NumberFormat('vi-VN', {
                                                            style: 'currency',
                                                            currency: 'VND',
                                                        }).format(3099000)}
                                                    </span>
                                                </div>
                                            </Popper>
                                        </div>
                                    )}
                                    visible={searchResult.length > 0}
                                    placement="bottom-start"
                                    interactive
                                >
                                    <div
                                        className={cx('search')}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                        }}
                                    >
                                        <input
                                            value={searchValue}
                                            onChange={(e) => {
                                                if (e.target.value === ' ') return;
                                                setSearchValue(e.target.value);
                                                setSearchResult([1, 2]);
                                                if (e.target.value === '') setSearchResult([]);
                                            }}
                                            type="text"
                                            placeholder="Search..."
                                        ></input>
                                        {searchValue && (
                                            <FontAwesomeIcon
                                                className={cx('spinner')}
                                                icon={faSpinner}
                                            ></FontAwesomeIcon>
                                        )}
                                        <FontAwesomeIcon
                                            className={cx('search-icon')}
                                            icon={faSearch}
                                        ></FontAwesomeIcon>
                                    </div>
                                </TippyHeadless>
                            </Modal>
                        )}

                        <Tippy content="Tìm kiếm" placement="bottom">
                            <a onClick={() => setShowInput(true)}>
                                Search <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
                            </a>
                        </Tippy>

                        <TippyHeadless
                            // visible
                            placement="bottom"
                            interactive
                            offset={[0, 20]}
                            render={(attrs) => (
                                <div className={cx('wrapper-cart')}>
                                    <div className={cx('cart-list')} tabIndex="-1">
                                        <Popper>
                                            <h1 className={cx('cart-title')}>Sản phẩm đã thêm</h1>
                                            <div className={cx('cart-item')}>
                                                <img
                                                    className={cx('cart-image')}
                                                    src={
                                                        'https://anphat.com.vn/media/product/33299_e_dra_transformer_black.jpg'
                                                    }
                                                ></img>
                                                <span className={cx('cart-name')}>Bàn gaming E-Dra</span>
                                                <span className={cx('cart-price')}>
                                                    {new Intl.NumberFormat('vi-VN', {
                                                        style: 'currency',
                                                        currency: 'VND',
                                                    }).format(3099000)}
                                                </span>
                                            </div>
                                        </Popper>
                                    </div>
                                </div>
                            )}
                        >
                            <a count="4" className={cx('cart')} to="./shop">
                                Cart <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>
                            </a>
                        </TippyHeadless>

                        <Tippy content={'Đăng nhập'} placement="bottom">
                            <Link to="./auth/login">
                                Login <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                            </Link>
                        </Tippy>
                    </div>
                </div>
            </div>
            {/* {scrollY > 140 && (
                <button className={cx('btn-scrollTop')}>
                    <FontAwesomeIcon icon={faArrowUp}></FontAwesomeIcon>
                </button>
            )} */}
        </>
    );
}

export default Header;
