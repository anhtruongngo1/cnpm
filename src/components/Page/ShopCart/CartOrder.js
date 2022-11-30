import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import Image from '~/components/Defaultlayout/Image';
import styles from './LayoutBuy.module.scss';
import axios from 'axios';
import { handleDeleteUser } from '~/Services/adminServices';
import swal from 'sweetalert';

const cx = classNames.bind(styles);

function CartOrder({ data = [], handleTotal }) {
    const [dataCart, setDataCart] = useState([]);

    useEffect(() => {
        handleCart();
    }, []);
    const handleCart = async () => {
        const res = await axios.get('http://localhost:3000/cart');
        if (res && res.data.length > 0) {
            setDataCart(res.data);
        }
    };
    const total = dataCart.reduce((acc, current, currentI) => {
        handleTotal(parseInt(acc) + parseInt(current.price));
        return parseInt(acc) + parseInt(current.price);
    }, 0);
    console.log('checkkk', total);

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
                    await axios.delete(` http://localhost:3000/cart/${id}`);
                    handleCart()
                })();
                swal('Xóa thành công', {
                    icon: 'success',
                    buttons: false,
                    timer: 1000,
                });
                (async function a() {
                
                })();
            }
        });
    };

    return (
        <div className={cx('cart')}>
            <h4 className={cx('title')}>Giỏ hàng của bạn</h4>
            {dataCart.map((item, index) => (
                <div className={cx('item')} key={item.id}>
                    <div className={cx('image')}>
                        <Image src={item.image} className={cx('image-icon')} />
                    </div>
                    <div className={cx('box')}>
                        <h5 className={cx('box-title')}>{item && item.name ? item.name : ''}</h5>
                        <div className={cx('box-item')}>
                            <strong className={cx('price')}>
                                {item && item.price
                                    ? new Intl.NumberFormat('vi-VN', {
                                          style: 'currency',
                                          currency: 'VND',
                                      }).format(item.price)
                                    : ''}
                            </strong>
                            <span className={cx('price-order')}>
                                {item && item.price
                                    ? new Intl.NumberFormat('vi-VN', {
                                          style: 'currency',
                                          currency: 'VND',
                                      }).format(1000000)
                                    : ''}
                            </span>
                        </div>
                        <div className={cx('box-action')}>
                            <div onClick={() => handleDelete(item.id)}
                             className={cx('action-icon')}>
                                <FontAwesomeIcon icon={faTrashCan} /> Xóa
                            </div>
                            <div className={cx('action-input')}>
                                <span>Số lượng</span>
                                <input type="number" name="points" min="0" max="10" step="1" value="10" />
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            <div className={cx('discount')}>Dùng mã giảm giá</div>
            <div className={cx('pay')}>
                <h3 className={cx('pay-title')}>Tạm tính</h3>
                <strong>
                    {new Intl.NumberFormat('vi-VN', {
                        style: 'currency',
                        currency: 'VND',
                    }).format(total)}
                </strong>
            </div>
            <div className={cx('pay')}>
                <h3 className={cx('pay-title')}>Phí vận chuyển</h3>
                <strong>0</strong>
            </div>
            <div className={cx('pay')}>
                <h3 className={cx('pay-title')}>Tổng cộng</h3>
                <strong>
                    {new Intl.NumberFormat('vi-VN', {
                        style: 'currency',
                        currency: 'VND',
                    }).format(total)}
                </strong>
            </div>
        </div>
    );
}

export default CartOrder;
