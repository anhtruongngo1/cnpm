import React, { useEffect, useState } from 'react';
import '../Modal/Modal.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
// import CommonUtils from "../../commantUtils/CommonUtils"
import upload1 from '../../../assets/upload.png';
import swal from 'sweetalert';
import axios from 'axios';
import { handleUpdateOrder } from '~/Services/adminServices';
function ModalOrder(props) {
    const [form, setForm] = useState({
        fullname: '',
        address: '',
        price: '',
        sdt: '',
        status: '',
    });
    useEffect(() => {
        //     let res = getAllYear()
        //     let data = res.then((data) => {
        //   if (data && data.errCode === 0) {
        setForm({
            fullname: props.isDataSend.infor,
            address: props.isDataSend.address,
            sdt: props.isDataSend.sdt,
            status: props.isDataSend.status,
            price: props.isDataSend.price,
        });
        //   }
        // })
    }, [props]);
    // const handleUpdateFilm = async () => {
    //   let res = await handleEditFilm({
    //     ...form,
    //     id: props.isDataSend.id
    //   })
    //     if (res && res.errCode === 0) {

    //         setForm({
    //           ...form,
    //           name:'' ,
    //           movieName: '',
    //           previewUrl1: '',
    //           actor: '',
    //           director: '',
    //           time: '',
    //           description: '',
    //           trailerMovie: '',
    //           linkMovie: '',
    //           quality: '',
    //           image: '',
    //           previewUrl: '',
    //           backgroundImg: '',
    //           previewUrl2: '',
    //         })
    //         props.closeModalEdit()
    //     }

    // }
    console.log('check datasend', props);
    // const handleOnchangeImg = async (e) => {
    //     let data = e.target.files;
    //     let file = data[0];
    //     if (file) {
    //       let base64 = await CommonUtils.getBase64(file);
    //       let objectUrl = URL.createObjectURL(file);
    //       setForm({
    //         ...form,
    //         previewUrl: objectUrl,
    //         image: base64

    //       })
    //     }

    //   }
    // const handleOnchangeImg2 = async (e) => {
    //   let data = e.target.files;
    //   let file = data[0];
    //   if (file) {
    //     let base64 = await CommonUtils.getBase64(file);
    //     let objectUrl = URL.createObjectURL(file);
    //     setForm({
    //       ...form,
    //       previewUrl2: objectUrl,
    //       backgroundImg: base64

    //     })
    //   }

    // }
    // const handleOnchangeImg1 = async (e) => {
    //   let data = e.target.files;
    //   let file = data[0];
    //   if (file) {
    //     let base64 = await CommonUtils.getBase64(file);
    //     let objectUrl = URL.createObjectURL(file);
    //     setForm({
    //       ...form,
    //       previewUrl1: objectUrl,
    //       movieName: base64

    //     })
    //   }

    // }
    const handleUpdateUser = (id) => {
        swal({
            title: 'Bạn có chắc chắn muốn cập nhật?',
            // text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: 'warning',
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                (async () => {
                    handleSaveUser();
                    await axios.delete(` http://localhost:3000/order/${id}`);
                })();
                swal('update thành công', {
                    icon: 'success',
                    buttons: false,
                    timer: 1000,
                });
                (async function a() {})();
            }
        });
    };
    const handleSaveUser = async () => {
        let res = await handleUpdateOrder({
            infor: form.fullname,
            address: form.address,
            status: form.status,
            price: form.price,
            sdt: form.sdt,
        });
        if (res) {
            setForm({
                ...form,
                fullname: '',
                address: '',
                price: '',
                sdt: '',
                status: '',
            });
            props.closeModalEdit();
        }
    };

    return (
        <>
            <Modal isOpen={props.isShowModalEdit} toggle={props.closeModalEdit}>
                <ModalHeader>
                    update ORDER
                    <div className="modal-header-cancel" onClick={props.closeModalEdit}>
                        x
                    </div>
                </ModalHeader>
                <ModalBody>
                    <div className="modal-film">
                        <div className="modal-film-item modal-film-item-content">
                            <label>fullname</label>
                            <input
                                type="text"
                                value={form.fullname}
                                onChange={(e) => setForm({ ...form, fullname: e.target.value })}
                                name="fullname"
                            />
                        </div>
                    </div>
                    <div className="modal-film">
                        <div className="modal-film-item modal-film-item-content">
                            <label>address</label>
                            <input
                                type="text"
                                value={form.address}
                                onChange={(e) => setForm({ ...form, address: e.target.value })}
                                name="address"
                            />
                        </div>
                    </div>
                    <div className="modal-film">
                        <div className="modal-film-item modal-film-item-content">
                            <label>Price</label>
                            <input
                                type="text"
                                value={form.price}
                                onChange={(e) => setForm({ ...form, price: e.target.value })}
                                name="price"
                            />
                            <label>vnđ</label>
                        </div>
                    </div>
                    <div className="modal-film">
                        <div className="modal-film-item modal-film-item-content">
                            <label>trạng thái</label>
                            <input
                                className="modal-film-item-input"
                                type="text"
                                value={form.status}
                                onChange={(e) => setForm({ ...form, status: e.target.value })}
                                name="status"
                            />
                        </div>
                    </div>

                    <button
                          onClick={() => handleUpdateUser(props.isDataSend.id)}
                        className="modal-film-btn"
                    >
                        update
                    </button>
                    <button onClick={props.closeModalEdit} className="modal-film-btn btn-modal-cancle ">
                        cancle
                    </button>
                </ModalBody>
            </Modal>
        </>
    );
}

export default ModalOrder;
