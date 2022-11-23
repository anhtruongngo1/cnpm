import React, { useEffect, useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import '../auth/Login.scss';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { IconFace, IconGoogle, IconIns } from '../Icons/Icons';
import {handleLogin} from "~/Services/adminServices"

function Login() {
    const [notify, setnotify] = useState('');
    const [isShowPassword, setisShowPassword] = useState(false);
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            userName: '',
            password: '',
            email: '',
            confirmedPassword: '',
        },
        validationSchema: yup.object({
            userName: yup.string().required('vui lòng nhập userName'),
            password: yup.string().required('vui lòng nhập password'),
        }),
        onSubmit: async (values) => {
            console.log('check values', values);
            handleLoginUser(values)
        },
    });

    const handleLoginUser = async (values) =>{
        let res = await handleLogin()

        if(res){
            const datauserName = res.find(item => item.username === values.userName )

            if(datauserName){
                const dataPass = res.find(item =>item.username === values.userName && item.password === values.password )
                if(dataPass){
                    setnotify('đăng nhập thành công')
                    navigate("/shop")
                }else{
                    setnotify("sai mật khẩu")
                }
            }else{
                setnotify("UserName không tồn tại")
            }
        }
    }

    const handleShowPassword = () => {
        setisShowPassword(!isShowPassword);
    };
    const handleModalForgot = () => {};
    const handleKeyDown = (e) => {
        console.log('check key ', e.key);
    };

    return (
        <>
            <div className="login-body">
                <div className="login-body-screen">
                    <div className="login-block">
                        <div className="login-content"></div>
                        <div className="login-container">
                            <div className="login-img"></div>
                            <h3>WELCOME</h3>
                            <p>Sign up by entering the information below</p>
                            <div className="login-input">
                                <div className="login-input-icon">
                                    <FaUser />
                                </div>
                                <input
                                    type="text"
                                    name="userName"
                                    placeholder="Nhập userName"
                                    value={formik.userName}
                                    onChange={formik.handleChange}
                                />
                            </div>
                            {formik.errors.userName && <p className="login-errmess">{formik.errors.userName}</p>}
                            <div className="login-input">
                                <div className="login-input-icon">
                                    <FaLock />
                                </div>
                                <input
                                    type={isShowPassword ? 'text' : 'password'}
                                    placeholder=" nhập password"
                                    name="password"
                                    value={formik.password}
                                    onChange={formik.handleChange}
                                />
                                <span onClick={() => handleShowPassword()}>
                                    {' '}
                                    {isShowPassword ? <FiEyeOff /> : <FiEye />}
                                </span>
                            </div>
                            {formik.errors.password && <p className="login-errmess">{formik.errors.password}</p>}

                            <div className="login-input">
                                <div className="login-input-icon">
                                    <FaUser />
                                </div>
                                <input value="" type="text" placeholder="Capcha" />
                            </div>
                            <div className="login-forgot">
                                <p onClick={() => handleModalForgot()} className="login-forgot-link">
                                    forgot password
                                </p>
                            </div>

                            <button
                                onKeyDown={(e) => handleKeyDown(e)}
                                onClick={formik.handleSubmit}
                                type="submit"
                                className="btn-login"
                            >
                                SIGN IN
                            </button>
                            {notify && notify.length > 0 && <p>{notify}</p>}

                            <div className="login-forgot">
                                <p onClick={() => navigate('/auth/register')} className="login-signup">
                                    SIGNUP
                                </p>
                            </div>

                            <div className="login-login-icon">
                                <div className="login-login-icon-face">
                                    <IconFace />
                                </div>
                                <div className="login-login-icon-google">
                                    <IconGoogle />
                                </div>
                                <div className="login-login-icon-google">
                                    <IconIns />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
