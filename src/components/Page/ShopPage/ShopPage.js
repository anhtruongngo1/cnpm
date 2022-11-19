import Defaultlayout from '~/components/Defaultlayout/Defaultlayout';
import classNames from 'classnames/bind';
import styles from './ShopPage.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAngleRight,
    faAnglesRight,
    faArrowRight,
    faBriefcase,
    faHeart,
    faPaperclip,
    faRightFromBracket,
    faSearch,
} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import axios from 'axios';

const cx = classNames.bind(styles);
function ShopPage() {
    const [product, setProduct] = useState([]);
    const [categories, setCatogories] = useState([]);

    useEffect(() => {
        const get = async () => {
            const res = await axios.get('http://localhost:3000/products');
            setProduct(res.data);
        };
        get();

        const getCate = async () => {
            const res = await axios.get('http://localhost:3000/category');
            setCatogories(res.data);
        };
        getCate();
    }, []);

    return (
        <Defaultlayout>
            <div className={cx('wrapper')}>
                <div className={cx('shop-title')}>
                    <div className={cx('shop-title-content')}>
                        <h1 className={cx('content-left')}>SHOP</h1>
                        <span className={cx('content-right')}>HOME / SHOP</span>
                    </div>
                </div>
                <div className={cx('shop-inner')}>
                    <div className={cx('shop-sidebar')}>
                        <div className={cx('sidebar-box')}>
                            <h4 className={cx('sidebar-title')}>Categories</h4>
                            {categories.map((item) => {
                                return (
                                    <div key={item.id} className={cx('sidebar-name')}>
                                        {item.name} ({item.count})
                                    </div>
                                );
                            })}
                            <div className={cx('shop-search')}>
                                <input type="text" placeholder="Search"></input>
                                <div className={cx('shop-iconSearch')}>
                                    <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                                </div>
                            </div>
                        </div>
                        <div style={{ height: '500px', overflow: 'scroll' }} className={cx('sidebar-box')}>
                            <h4 className={cx('sidebar-title')}>Products</h4>
                            {product.map((item) => {
                                return (
                                    <div key={item.id} className={cx('sidebar-cotent')}>
                                        <img className={cx('sidebar-img')} src={item.image}></img>
                                        <div className={cx('sidebar-detail')}>
                                            <div className={cx('sidebar-name')}>{item.name}</div>
                                            <div className={cx('sidebar-price')}>
                                                {new Intl.NumberFormat('vi-VN', {
                                                    style: 'currency',
                                                    currency: 'VND',
                                                }).format(item.price)}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <div className={cx('widget-form')}>
                            <h1 className={cx('widget-title')}>Newsletter</h1>
                            <div className={cx('widget-input')}>
                                <input placeholder="Your email" className={cx('input-w')}></input>
                            </div>
                            <div className={cx('widget-icon')}>
                                <FontAwesomeIcon icon={faAnglesRight}></FontAwesomeIcon>
                            </div>
                        </div>
                        <div className={cx('sidebar-box')}>
                            <h4 className={cx('sidebar-title')}>Tags</h4>
                            <div className={cx('tags-content')}>
                                <span className={cx('tags-name')}>
                                    Accessories <FontAwesomeIcon icon={faPaperclip} />
                                </span>
                                <span className={cx('tags-name')}>
                                    Dishware <FontAwesomeIcon icon={faPaperclip} />
                                </span>
                                <span className={cx('tags-name')}>
                                    Furnishing <FontAwesomeIcon icon={faPaperclip} />
                                </span>
                                <span className={cx('tags-name')}>
                                    Lights <FontAwesomeIcon icon={faPaperclip} />
                                </span>
                                <span className={cx('tags-name')}>
                                    Special <FontAwesomeIcon icon={faPaperclip} />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={cx('shop-products')}>
                        {product.map((item) => {
                            return (
                                <div key={item.id} className={cx('shop-products-col')}>
                                    <img className={cx('product-img')} src={item.image} alt=""></img>
                                    <div className={cx('product-action')}>
                                        <span className={cx('action-icon')}>
                                            <FontAwesomeIcon icon={faBriefcase}></FontAwesomeIcon>
                                        </span>
                                        <span className={cx('action-icon')}>
                                            <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                                        </span>
                                        <span className={cx('action-icon')}>
                                            <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                                        </span>
                                    </div>

                                    <div className={cx('product-content')}>
                                        <div className={cx('product-detail')}>
                                            <div className={cx('product-name')}>{item.name}</div>
                                            <div className={cx('product-price')}>
                                                {new Intl.NumberFormat('vi-VN', {
                                                    style: 'currency',
                                                    currency: 'VND',
                                                }).format(item.price)}
                                            </div>
                                        </div>
                                        <div className={cx('product-cate')}>DINNERWARE</div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </Defaultlayout>
    );
}

export default ShopPage;
