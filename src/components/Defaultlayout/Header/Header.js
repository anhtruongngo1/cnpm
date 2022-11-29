import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { useEffect, useRef, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCartPlus, faSearch, faSpinner, faClose } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import TippyHeadless from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import axios from 'axios';
import swal from 'sweetalert';
import 'tippy.js/dist/tippy.css';
import logo from '../../../assets/logo/logo.jpg';
import Modal from '~/Modal';
import { CartCountContext } from '../../Page/ShopPage';
import useDebounce from '~/components/Hooks/useDebounce';
import Popper from '~/components/GlobalStyles/Popper';
import { useNavigate } from 'react-router-dom';


const cx = classNames.bind(styles);

function Header() {
    const navigate = useNavigate();

    const [hideResult, setHideResule] = useState(true);
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showInput, setShowInput] = useState(false);
    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(false);

    const ref_Header = useRef();

    const cartCount = useContext(CartCountContext);

    const handleDelete = (id) => {
        swal({
            title: 'Bạn có chắc chắn xóa?',
            // text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: 'warning',
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                (async () => {
                    await axios.delete(`http://localhost:3000/cart/${id}`);
                })();
                swal('Xóa thành công', {
                    icon: 'success',
                    buttons: false,
                    timer: 1000,
                });
                (async function a() {
                    const res = await axios.get('http://localhost:3000/cart');
                    setCart(res.data);
                    // setCartCount(res.data.length);
                })();
            }
        });
    };

    const debounce = useDebounce(searchValue, 1000);

    useEffect(() => {
        if (!debounce) {
            setSearchResult([]);
            return;
        }
        setLoading(true);
        (async () => {
            await axios.get(`http://localhost:3000/products?name_like=${encodeURIComponent(debounce)}`).then((res) => {
                setSearchResult(res.data);
                setLoading(false);
            });
        })();
    }, [debounce]);

    console.log(debounce);

    useEffect(() => {
        (async () => {
            const res = await axios.get('http://localhost:3000/cart');
            setCart(res.data);
            localStorage.setItem('cart-count', res.data.length);
        })();
    }, [cartCount]);

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
                        <Link to="/">Home</Link>
                        <Link to="/shop">Shop</Link>
                        <Link to="/about">About</Link>
                        <Link to="/blog">Blog</Link>
                    </div>
                    <div className={cx('inner-end')}>
                        {showInput && (
                            <Modal onClose={() => setShowInput(false)}>
                                <div>
                                    <TippyHeadless
                                        onClickOutside={() => setHideResule(true)}
                                        visible={searchResult.length > 0 && !hideResult}
                                        render={(attrs) => (
                                            <div className={cx('search-result')} tabIndex="-1">
                                                <Popper>
                                                    <h1 className={cx('title')}>Kết quả tìm kiếm</h1>
                                                    {searchResult.map((item) => {
                                                        return (
                                                            <div key={item.id} className={cx('result-item')}>
                                                                <img src={item.image}></img>
                                                                <span className={cx('name')}>{item.name}</span>
                                                                <span className={cx('price')}>
                                                                    {new Intl.NumberFormat('vi-VN', {
                                                                        style: 'currency',
                                                                        currency: 'VND',
                                                                    }).format(item.price)}
                                                                </span>
                                                            </div>
                                                        );
                                                    })}
                                                </Popper>
                                            </div>
                                        )}
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
                                                onFocus={() => setHideResule(false)}
                                                onChange={(e) => {
                                                    if (e.target.value === ' ') return;
                                                    if (e.target.value === '') setSearchResult([]);
                                                    setSearchValue(e.target.value);
                                                }}
                                                type="text"
                                                placeholder="Search..."
                                            ></input>
                                            {loading && (
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
                                </div>
                            </Modal>
                        )}

                        <Tippy content="Tìm kiếm" placement="bottom">
                            <a onClick={() => setShowInput(true)}>
                                Search <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
                            </a>
                        </Tippy>

                        <span style={{ display: 'inline-block' }}>
                            <TippyHeadless
                                // visible
                                placement="bottom"
                                interactive
                                offset={[0, 20]}
                                render={(attrs) => (
                                    <div className={cx('wrapper-cart')}>
                                        <div className={cx('cart-list')} tabIndex="-1">
                                            <Popper>
                                                {cart.length > 0 ? (
                                                    <h1 className={cx('cart-title')}>Sản phẩm đã thêm</h1>
                                                ) : (
                                                    <img src="https://bizweb.dktcdn.net/100/362/119/themes/730041/assets/empty-cart.png?1617617243279"></img>
                                                )}
                                                {cart.map((item) => {
                                                    return (
                                                        <div key={item.id} className={cx('cart-item')}>
                                                            <img className={cx('cart-image')} src={item.image}></img>
                                                            <div className={cx('cart-box')}>
                                                                <p className={cx('cart-name')}>{item.name}</p>
                                                                <p className={cx('cart-price')}>
                                                                    {new Intl.NumberFormat('vi-VN', {
                                                                        style: 'currency',
                                                                        currency: 'VND',
                                                                    }).format(item.price)}
                                                                </p>
                                                            </div>
                                                            <p
                                                                onClick={() => handleDelete(item.id)}
                                                                className={cx('cart-close')}
                                                            >
                                                                <FontAwesomeIcon icon={faClose}></FontAwesomeIcon>
                                                            </p>
                                                           
                                                        </div>
                                                    );
                                                })}
                                                 <button onClick={()=> navigate("/order")}
                                                  className={cx('cart-pay')}>THANH TOÁN</button>
                                            </Popper>
                                        </div>
                                    </div>
                                )}
                            >
                                <a count={cart.length} className={cx('cart')} to="./shop">
                                    Cart <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>
                                </a>
                            </TippyHeadless>
                        </span>

                        <Tippy content={'Đăng nhập'} placement="bottom">
                            <Link to="/auth/login">
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
