import axios from 'axios';
import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import styles from './InforForm.module.scss';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Await } from 'react-router-dom';

const cx = classNames.bind(styles);

function InforForm({ handleBtn }) {
    const [check, setCheck] = useState('HOME');
    const [form, setform] = useState('1');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');

    const formik = useFormik({
        initialValues: {
            fullname: '',
            sdt: '',
            city: '',
            address: '',
        },
        validationSchema: yup.object({
            fullname: yup.string().required('vui lòng nhập userName'),
            sdt: yup.string().required('vui lòng nhập password'),
            city: yup.string().required('vui lòng nhập password'),
            address: yup.string().required('vui lòng nhập password'),
        }),
        onSubmit: async (values, { resetForm }) => {
            console.log('check values', values);
            handleBtn({
                fullname: values.fullname,
                sdt: values.sdt,
                city: values.city,
                address: values.address,
            });
            resetForm({});
            setform({});
        },
    });
    console.log('check formik', formik.values);
    useEffect(() => {}, [form]);

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
                    <input
                        placeholder="Họ và tên"
                        value={formik.fullname}
                        name="fullname"
                        onChange={formik.handleChange}
                    />
                    <input placeholder="Số điện thoại" name="sdt" value={formik.sdt} onChange={formik.handleChange} />
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
                        <input placeholder="Thành phố" value={city} onChange={(e) => setCity(e.target.value)} />
                        <input
                            placeholder="địa chỉ cụ thể"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
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
            <button onClick={formik.handleSubmit} className={cx('btn')}>
                Thanh toán
            </button>
        </div>
    );
}

export default InforForm;
