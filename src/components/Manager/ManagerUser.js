import React, { useEffect, useState } from 'react';
import "../Manager/Manager.scss"
import { RiDeleteBinFill } from "react-icons/ri"
import { MdOutlineAutoFixHigh } from "react-icons/md"
import { IoMdAddCircle } from "react-icons/io";
import ModalUser from './Modal/ModalUser';
import ModalEdit from "./Modal/ModalEdit" ;
import {handleAllUser , handleDeleteUser} from "~/Services/adminServices" ;
import Image from '../Defaultlayout/Image';
import swal from 'sweetalert';
import axios from 'axios';
import Pagination from "./table/Pagination"



function ManagerUser() {
  const [dataUser, setdataUser] = useState([])
  const [isShowModal, setisShowModal] = useState(false)
  const [isShowModalEdit, setisShowModalEdit] = useState(false)
  const [isDataSend, setDataSend] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(3);

  useEffect(() => {
    handleAll()


  }, [isShowModal , isShowModalEdit])

  const handleAll =async () => {
    const res = await handleAllUser()

    if(res.length > 0){
      setdataUser(res)
    }
    console.log('check22 ' , dataUser);

  }



  const handleShowModal = () => {
    setisShowModal(!isShowModal)
  }
  const closeModal = () => {
    setisShowModal(!isShowModal)
  }
  const closeModalEdit = () => {
    setisShowModalEdit(!isShowModalEdit)
  }
  const handleEditUser = async(item) => {
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
                await axios.delete(` http://localhost:3000/accounts/${id}`);
            })();
            swal('Xóa thành công', {
                icon: 'success',
                buttons: false,
                timer: 1000,
            });
            (async function a() {
              handleAll()
            })();
        }
    });
};
const indexOfLastFilm = currentPage * postsPerPage;
const indexOfFirstFilm = indexOfLastFilm - postsPerPage;
const currentPosts = dataUser.slice(indexOfFirstFilm, indexOfLastFilm)
const Paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
}


  return (
    <>
      <div className="manager-user-body">
          <div className="manager-user-icons">
          <IoMdAddCircle
            className="manager-user-icons-icon"
            onClick={() => handleShowModal()} />
              <span> Thêm người dùng</span>
          </div>
      <table className="table ">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">FirstName</th>
            <th scope="col">LastName</th>
            <th scope="col">Email</th>
            <th scope="col">userName</th>
            <th scope="col">image</th>
            <th scope="col">role</th>
            <th scope="col">actions</th>
          </tr>
        </thead>
        <tbody>
          {dataUser && dataUser.length > 0 && dataUser.map((item, i) => (

            <tr key={i}>
              <th scope="row">{item.id}</th>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.email}</td>
              <td>{item.username}</td>
              <td>
                <Image alt="" src={""} />
              </td>
              <td></td>
              <td>
                <span className="manager-user-actions" onClick={() =>handleEditUser(item)} >
                  <MdOutlineAutoFixHigh />

                </span>
                <span className="manager-user-actions"  onClick={() =>handleDelete(item.id)}>
                  
                  <RiDeleteBinFill />

                </span>

              </td>
            </tr>
          ))

          }

        </tbody>
      </table>
      <Pagination postsPerPage={postsPerPage}
        totalPosts={dataUser.length}
        Paginate = {Paginate}
      />
         
      </div>
      <ModalUser
        closeModal = {closeModal}
        isShowModal={isShowModal}
      />
      <ModalEdit
        closeModalEdit={closeModalEdit}
        isShowModalEdit={isShowModalEdit}
        isDataSend = {isDataSend}
      />

      
    </>
  );
}

export default ManagerUser;