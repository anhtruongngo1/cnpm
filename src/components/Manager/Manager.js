import React, { useEffect, useState } from 'react';
import Header from '../Defaultlayout/Header/Header';
import "../Manager/Manager.scss" 
import ManagerFilm from './ManagerFilm';
import ManagerUser from './ManagerUser';
import ManagerWeb from './Modal/ManagerWeb';
import { RiFolderUserLine } from "react-icons/ri";
import { ImFilm } from "react-icons/im";
import { MdMusicVideo } from "react-icons/md"
import { GrOverview } from "react-icons/gr";
import ManagerCategory from './ManagerCategory';
import ManagerOrder from './ManagerOrder';
 import { useSelector } from 'react-redux';
 import {useNavigate} from "react-router-dom"

function Manager() {

    const [isActive, setActive] = useState("MANAGER")
     const userInfo = useSelector((state) => state.user.currentUser)
     console.log('check yser' , userInfo);
     const navigate = useNavigate()
    useEffect(() => {
         if (!userInfo){
            navigate("/auth/login")
           }
    }
    )


    let handleActive = (data) => {
        setActive(data)
    }

    return (
        <>
        <div className="Manager-body">
            <div className="Manager-body-manager">
                <div className="manager-manager-body ">
                    <h3>Công cụ</h3>
                    <li onClick={() => handleActive("MANAGER")}
                        className={isActive === "MANAGER" ? "manager-manager-item active" : "manager-manager-item" }>
                    <GrOverview className="Manager-body-icon" />
                       <span> Tổng quan </span>
                    </li>
                    <li onClick={() => handleActive("USER")}
                        className={isActive === "USER" ? "manager-manager-item active" : "manager-manager-item" }>
                    <RiFolderUserLine className="Manager-body-icon" />
                        <span> Quản lí user </span>
                    </li>            
                    <li onClick={() => setActive("FILM")}
                        className={isActive === "FILM" ? "manager-manager-item active" : "manager-manager-item" }
                    >
                    <ImFilm  className="Manager-body-icon" />
                       <span> Quản lí sản phẩm </span>
                    </li>
                    <li onClick={() => setActive("CATEGORY")}
                        className={isActive === "CATEGORY" ? "manager-manager-item active" : "manager-manager-item" }
                    >
                        <MdMusicVideo className="Manager-body-icon" />
                        <span> Quản lí Loại</span>
                    </li> 
                     <li onClick={() => setActive("ORDER")}
                        className={isActive === "ORDER" ? "manager-manager-item active" : "manager-manager-item" }
                    >
                        <MdMusicVideo className="Manager-body-icon " />
                       <span> Quản lí đơn hàng </span>
                    </li>
                </div>
                <div className="Manager-body-container" >
                {isActive === "MANAGER" && <ManagerWeb />}
                {isActive === "USER" && <ManagerUser />}
                {isActive === "FILM" && <ManagerFilm />}
                {isActive === "ORDER" && <ManagerOrder />}

              {isActive === "CATEGORY" && <ManagerCategory /> }
                </div>
               
            </div> 
        </div>
    </>);
}

export default Manager;