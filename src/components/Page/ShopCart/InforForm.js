import classNames from 'classnames/bind';
import { useState } from 'react';
import styles from './InforForm.module.scss';

const cx = classNames.bind(styles);




function InforForm({handleBtn}) {
    const [check , setCheck] = useState("HOME")
    const [fullname , setFullname] = useState("")
    const [sdt , setSdt] = useState("")
    const [city , setCity] = useState("")
    const [address , setAddress] = useState("")







    return (
        <div className={cx('wrapper')}>
            <div className={cx('box')}>
                <h4>Thông tin khách hàng</h4>
                <div className={cx('box-radio')}>
                    <input type="radio" value="Male" name="gender" /> Nam
                    <input type="radio" value="Female" name="gender" /> Nữ
                    <input type="radio" value="Other" name="gender" /> Khác
                </div>
                <div className={cx('box-input')}>
                    <input  placeholder='Họ và tên'
                     value={fullname}
                     onChange={(e) => setFullname(e.target.value)}
                     />
                    <input 
                     placeholder='Số điện thoại'
                     value={sdt}
                     onChange={(e) => setSdt(e.target.value)}
                    />

                </div>
                <div className={cx('box-descreption')}>
                    <input  placeholder='Ghi chú thêm (không bắt buộc)'/>
                    

                </div>
            </div>
            <div className={cx('box')}>
                <h4>Chọn hình thức nhận hàng</h4>
                <div className={cx('box-radio')}>
                    <input type="radio" value="HOME" 
                    name="address" 
                    checked={check === "HOME"}
                    onChange={(e) =>{setCheck( e.target.value)}}
                    /> Nhận hàng tại nhà
                    <input type="radio" value="ST"
                     name="address"
                     checked={check === "ST"}
                     onChange={(e) =>{setCheck( e.target.value)}}
                     /> Đến siêu thị nhận
                    <input type="radio" value="OTHER" name="address" 
                      checked={check === "OTHER"}
                      onChange={(e) =>{setCheck( e.target.value)}}
                    /> Khác
                </div>
           {check==="HOME" ? 
                <div className={cx('box-input')}>
                <input  placeholder='Thành phố' 
                 value={city}
                 onChange={(e) => setCity(e.target.value)}
                />
                <input  
                placeholder='địa chỉ cụ thể'
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                />

            </div> : <></>
           }
                <div className={cx('box-input')}>
                    <input  placeholder='Ghi chú thêm (không bắt buộc)'/>
                    

                </div>
            </div>
            <p className={cx('note')}>Bằng cách thanh toán bằng đồng ý với điều khoản của chúng tôi</p>
            <div className={cx('time')}>
                Giao hàng từ 1-3 ngày làm việc
            </div>
           <button 
           onClick={()=>handleBtn({
            fullname ,
            sdt ,
            city ,
            address
           })}
           className={cx('btn')}>Thanh toán</button>
        </div>
    );
}

export default InforForm;
