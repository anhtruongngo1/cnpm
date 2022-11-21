import React, { useEffect, useState } from 'react';
import "../Manager/Manager.scss"
import { RiDeleteBinFill } from "react-icons/ri"
import { MdOutlineAutoFixHigh } from "react-icons/md"
import { IoMdAddCircle } from "react-icons/io";
import ModalUser from './Modal/ModalUser';
import ModalEdit from "./Modal/ModalEdit"


function ManagerUser() {
  const [dataUser, setdataUser] = useState([])
  const [isShowModal, setisShowModal] = useState(false)
  const [isShowModalEdit, setisShowModalEdit] = useState(false)
  const [isDataSend, setDataSend] = useState([])

  useEffect(() => {



  }, [isShowModal , isShowModalEdit])
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
            <th scope="col">Gender</th>
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
              <td>{item.genderData.value}</td>
              <td>
                <img alt="" src={item.image} />
              </td>
              <td>{item.roleData.value}</td>
              <td>
                <span className="manager-user-actions" onClick={() =>handleEditUser(item)} >
                  <MdOutlineAutoFixHigh />

                </span>
                <span className="manager-user-actions" >
                  <RiDeleteBinFill />

                </span>

              </td>
            </tr>
          ))

          }

        </tbody>
      </table>
         
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