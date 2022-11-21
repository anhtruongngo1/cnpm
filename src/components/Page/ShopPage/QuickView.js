import { faArrowUp, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useRef } from 'react';
import Modal from '~/Modal';
import styles from './ShopPage.module.scss';

const cx = classNames.bind(styles);

function QuickView({ detail, onClose }) {
    const inputRef = useRef();
    return (
        <div>
            <Modal onClose={onClose}>
                <div className={cx('quick-wrapper')}>
                    <img src={detail.image} className={cx('quick-image')}></img>
                    <div className={cx('quick-content')}>
                        <h1 className={cx('quick-name')}>{detail.name}</h1>
                        <h2 className={cx('quick-price')}>
                            {new Intl.NumberFormat('vi-VN', {
                                style: 'currency',
                                currency: 'VND',
                            }).format(detail.price)}
                        </h2>
                        <p className={cx('quick-description')}>{detail.description}</p>
                        <div className={cx('quick-actions')}>
                            <input ref={inputRef} value={1} className={cx('quick-input')} type={'text'}></input>
                            <button
                                onClick={() => {
                                    if (inputRef.current.value === '10') {
                                        alert('Số lượng đạt tối đa');
                                        return;
                                    }

                                    inputRef.current.value = parseInt(inputRef.current.value) + 1;
                                }}
                                className={cx('quick-up', {
                                    quick: true,
                                })}
                            >
                                <FontAwesomeIcon icon={faChevronUp}></FontAwesomeIcon>
                            </button>
                            <button
                                onClick={() => {
                                    if (inputRef.current.value === '1') return;

                                    inputRef.current.value = parseInt(inputRef.current.value) - 1;
                                }}
                                className={cx('quick-down', {
                                    quick: true,
                                })}
                            >
                                <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>
                            </button>

                            <button className={cx('quick-add')}>Add to cart</button>
                        </div>
                        <span className={cx('quick-code')}>{'SKU: 009'}</span>
                        <span className={cx('quick-cate')}>{'CATEGORY: FUNITURE'}</span>
                        <span className={cx('quick-tag')}>{'TAG: Furnishing'}</span>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default QuickView;
