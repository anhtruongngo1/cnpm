import classNames from 'classnames/bind';
import Defaultlayout from '~/components/Defaultlayout/Defaultlayout';
import CartOrder from './CartOrder';
import InforForm from './InforForm';
import styles from './LayoutBuy.module.scss';
import swal from 'sweetalert';
import axios from 'axios';
import { useState } from 'react';

const cx = classNames.bind(styles);

function LayoutBuy() {
    const [total, setTotal] = useState('');

    const handleOrder = (data) => {
        swal({
            title: 'Bạn có chắc chắn thanh toán ?',
            // text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: 'warning',
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                (async () => {
                    await axios.post(` http://localhost:3000/order`, {
                        price: total,
                        address: data.address + data.city,
                        infor: data.fullname,
                        sdt: data.sdt,
                        status: 'đang xác nhận',
                    });
                })();
                swal('Mua thành công', {
                    icon: 'success',
                    buttons: false,
                    timer: 1000,
                });
                (async function a() {})();
            }
        });
    };
    const handleTotal = (total) => {
        setTotal(total);
    };
    const handleBtn = (data) => {
        console.log('check dataa', data);
        handleOrder(data);
    };
    console.log('checkttt', total);
    return (
        <Defaultlayout>
            <div className={cx('wrapper')}>
                <div className={cx('content')}>
                    <CartOrder handleTotal={handleTotal} />
                    <InforForm handleBtn={handleBtn} />
                </div>
            </div>
        </Defaultlayout>
    );
}

export default LayoutBuy;
