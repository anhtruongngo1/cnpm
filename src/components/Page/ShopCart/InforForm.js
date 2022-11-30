import axios from 'axios';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import styles from './InforForm.module.scss';

const cx = classNames.bind(styles);

function InforForm({ handleBtn }) {
    const [check, setCheck] = useState('HOME');
    const [fullname, setFullname] = useState('');
    const [sdt, setSdt] = useState('');
    const [city, setCity] = useState('');
    const [address, setAddress] = useState('');
    const [province, setProvince] = useState([]);
    const [districts, setDistricts] = useState([]);

    useEffect(() => {
        const getProvince = async () => {
            const res = await axios.get('https://provinces.open-api.vn/api/?depth=1');
            setProvince(res.data);
        };
        getProvince();
    }, []);

    const HandleDistricts = (code) => {
        const getDistrict = async () => {
            const res = await axios.get(`https://provinces.open-api.vn/api/p/${code}?depth=2`);
            setDistricts(res.data.districts);
        };
        getDistrict();
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('box')}>
                <h4>Thông tin khách hàng</h4>
                <div className={cx('box-radio')}>
                    <div className={cx('options')}>
                        <input type="radio" value="Male" name="gender" /> Nam
                    </div>
                    <div className={cx('options')}>
                        <input type="radio" value="Female" name="gender" /> Nữ
                    </div>
                    <div className={cx('options')}>
                        <input type="radio" value="Other" name="gender" /> Khác
                    </div>
                </div>
                <div className={cx('box-input')}>
                    <input placeholder="Họ và tên" value={fullname} onChange={(e) => setFullname(e.target.value)} />
                    <input placeholder="Số điện thoại" value={sdt} onChange={(e) => setSdt(e.target.value)} />
                </div>
                <div className={cx('box-descreption')}>
                    <textarea placeholder="Ghi chú thêm (không bắt buộc)" />
                </div>
            </div>
            <div className={cx('box')}>
                <h4>Chọn hình thức nhận hàng</h4>
                <div className={cx('box-radio')}>
                    <div className={cx('options')}>
                        <input
                            type="radio"
                            value="HOME"
                            name="address"
                            checked={check === 'HOME'}
                            onChange={(e) => {
                                setCheck(e.target.value);
                            }}
                        />
                        Nhận hàng tại nhà
                    </div>
                    <div className={cx('options')}>
                        <input
                            type="radio"
                            value="ST"
                            name="address"
                            checked={check === 'ST'}
                            onChange={(e) => {
                                setCheck(e.target.value);
                            }}
                        />
                        Đến siêu thị nhận
                    </div>
                    <div className={cx('options')}>
                        <input
                            type="radio"
                            value="OTHER"
                            name="address"
                            checked={check === 'OTHER'}
                            onChange={(e) => {
                                setCheck(e.target.value);
                            }}
                        />
                        Khác
                    </div>
                </div>
                {check === 'HOME' ? (
                    <div className={cx('box-input')}>
                        {/* <input placeholder="Thành phố" value={city} onChange={(e) => setCity(e.target.value)} />
                        <input
                            placeholder="địa chỉ cụ thể"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        /> */}
                        <select
                            onChange={(e) => {
                                setCity(e.target.value);
                                HandleDistricts(e.target.value);
                            }}
                        >
                            <option>--Thành phố--</option>
                            {province.map((item) => {
                                return (
                                    <option key={item.code} value={item.code}>
                                        {item.name}
                                    </option>
                                );
                            })}
                        </select>
                        <select onChange={(e) => setAddress(e.target.value)}>
                            <option>--Quận huyện--</option>
                            {districts.map((item) => {
                                return (
                                    <option key={item.code} value={item.code}>
                                        {item.name}
                                    </option>
                                );
                            })}
                        </select>
                        <input placeholder="Địa chỉ cụ thể" />
                    </div>
                ) : (
                    <></>
                )}
                <div className={cx('box-input')}>
                    <textarea
                        style={{ width: '690px', outline: 'none', height: '150px' }}
                        placeholder="Ghi chú thêm (không bắt buộc)"
                    />
                </div>
            </div>
            <p className={cx('note')}>Bằng cách thanh toán bằng đồng ý với điều khoản của chúng tôi</p>
            <div className={cx('time')}>Giao hàng từ 1-3 ngày làm việc</div>
            <button
                onClick={() =>
                    handleBtn({
                        fullname,
                        sdt,
                        city,
                        address,
                    })
                }
                className={cx('btn')}
            >
                Thanh toán
            </button>
        </div>
    );
}

export default InforForm;
