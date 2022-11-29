import React, { useEffect, useState } from 'react';
import "../Manager/Manager.scss";
import ModalFilm from './Modal/ModalFilm';
import { IoMdAddCircle } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import ModalEditFilm from "./Modal/ModalEditFilm" ;
import { handleOrder } from '~/Services/adminServices';
 import Pagination from "./table/Pagination"
import Image from '../Defaultlayout/Image';
import axios from 'axios';
import swal from 'sweetalert';
import ModalOrder from './Modal/ModalOrder';


function ManagerOrder() {
  const [dataFilm, setDataFilm] = useState([])
  const [isShowModal, setisShowModal] = useState(false)
  const [isShowModalEdit, setisShowModalEdit] = useState(false)
  const [isDataSend, setDataSend] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(3);
  useEffect(() => {
    handleData()
  
    

  }, [isShowModal , isShowModalEdit ])

  const handleData = async() =>{
    let res = await handleOrder()
    console.log('checkk' , res);

    if (res.length > 0) {
      setDataFilm(
       res
      )
    }
  }


  const closeModal = () => {
    setisShowModal(!isShowModal)
  }
  const handleShowModal = () => {
    setisShowModal(!isShowModal)
  }
  const closeModalEdit = () => {
    setisShowModalEdit(!isShowModalEdit)
  }
  let handleEditFilm = (item) => {
    setisShowModalEdit(!isShowModalEdit)
    setDataSend(item)
  }
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
                await axios.delete(` http://localhost:3000/order/${id}`);
            })();
            swal('Xóa thành công', {
                icon: 'success',
                buttons: false,
                timer: 1000,
            });
            (async function a() {
              handleData()
            })();
        }
    });
};
  const indexOfLastFilm = currentPage * postsPerPage;
  const indexOfFirstFilm = indexOfLastFilm - postsPerPage;
  const currentPosts = dataFilm.slice(indexOfFirstFilm, indexOfLastFilm)
  const Paginate = (pageNumber) => {
      setCurrentPage(pageNumber)
  }

  return (
    <div className="manager-film-body ">
          <div className="manager-film-icons">
          <IoMdAddCircle
            className="manager-user-icons-icon"
            onClick={() => handleShowModal()} />
              <span> Thêm mới đơn hàng</span>
          </div>
      <h3>Danh sách Sản phẩm</h3>
      <table className="table ">
        <thead>
          <tr>
            <th scope="col">ID </th>
            <th scope="col">Tên người đặt</th>
            <th scope="col">địa chỉ</th>
            <th scope="col">sđt</th>
            <th scope="col">Price</th>
            <th scope="col">trạng thái</th>
            <th scope="col">View</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentPosts && currentPosts.length > 0 &&
            currentPosts.map((item, i) => (

              <tr key={i}>
                <th scope="row"> {item.id}</th>
                <td>{ item.infor} </td>
                <td>
                {item.address}
                </td>
                <td>{ item.sdt}</td>
                <td>{ item.price} vnđ</td>
                <td>
                    {item.status}
                 
                </td>
                <td>
                  <span >Chi tiết</span>
                </td>
                <td>
                  <span onClick={()=>handleEditFilm(item)}
                    className="manager-film-actions-icon"> 
                    <AiOutlineEdit />
                  </span>
                  <span onClick={()=>handleDelete(item.id)}
                    className="manager-film-actions-icon">
                    <RiDeleteBin6Line />
                  </span>
                
                </td>

              </tr>
            ))
          }





        </tbody>
      </table>
      <Pagination postsPerPage={postsPerPage}
        totalPosts={dataFilm.length}
        Paginate = {Paginate}
      />



        <ModalOrder
        closeModalEdit={closeModalEdit}
        isShowModalEdit={isShowModalEdit}
        isDataSend = {isDataSend}
      />

    </div>
  );
}

export default ManagerOrder;