import React, { useEffect, useState } from 'react';
function ManagerWeb() {
    

    const [isLength, setLength] = useState(1)
    useEffect(() => {
    
    }, [])
    return (
        <div>
             <div className="manager-web">
        <h2>Trang tổng quan!</h2>
                <h5> Quản lý hệ thống website </h5>
                
        <p> Đây là trang tổng quan , để thực hiện quản trị hãy vào các chức năng bên trái</p>
                
        <div className="manager-web-content"> 
            <span className="manager-web-content-span1">Lượt xem trang : 1</span>
                    <span className="manager-web-content-span2">Số lương film : 1</span>
            <span  className="manager-web-content-span3">Số lượng thể loại : 1</span>
            <span  className="manager-web-content-span4">Số lượng thẻ tạo : 1</span>
            
        </div>
            </div>
            

            <p className="manager-web-content-margin"> Thông tin hệ thống</p>
            <div className="manager-web">
                <h6>Thống kê hệ thống :</h6>
                <div className="manager-web-container">
                    <span className="manager-web-container-col">Bộ nhớ ram đã sử dụng : </span>
                    <span> 171.30827255 MB</span>
                </div>
                <div className="manager-web-container">
                    <span className="manager-web-container-col">Tổng bộ nhớ ram của hệ thống :</span>
                    <span> 20480 Mb</span>
                </div>
                
            </div>
        </div>
    );
}

export default ManagerWeb;