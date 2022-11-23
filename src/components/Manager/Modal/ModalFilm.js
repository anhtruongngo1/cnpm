import React, { useEffect, useState } from 'react'
import "../Modal/Modal.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
// import CommonUtils from "../../commantUtils/CommonUtils"
import upload1 from "../../../assets/upload.png";
// import { getAllYear, handleCreateFilm } from "../../service/service";
import ReactMarkdown from 'react-markdown'
import Image from '~/components/Defaultlayout/Image';
import {handleAddProduct} from "~/Services/adminServices"
function ModalFilm(props) {

  const [form, setForm] = useState({
    name:'' , 
    price: '',
    description: '',
    categoryId: '',
    categoryAll: [],
    image: '',
    previewUrl: '',
  })
  useEffect(() => {

  }, [])
  // const handleOnchangeImg = async (e) => {
  //   let data = e.target.files;
  //   let file = data[0];
  //   if (file) {
  //     let base64 = await CommonUtils.getBase64(file);
  //     let objectUrl = URL.createObjectURL(file);
  //     setForm({
  //       ...form,
  //       previewUrl: objectUrl,
  //       image: base64

  //     })
  //   }

  // }
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
  const handleCreateProduct = async () => {
    let res = await handleAddProduct({
      name : form.name ,
      price : form.price ,
      description : form.description ,

    })
    if (res) {
      setForm({
        ...form,
        movieName: '',
        actor: '',
        director: '',
        time: '',
        description: '',
        quality: '',
        image: '',
        previewUrl: '',
        previewUrl2: '',
        name: '',
        linkMovie: '',
        trailerMovie: ''
      })
      props.closeModal()
    }
  }

  console.log('check', form);

  return (
    <>
      <Modal isOpen={props.isShowModal} toggle={props.closeModal}>
        <ModalHeader>
          Thêm mới Sản phẩm
          <div className="modal-header-cancel" onClick={props.closeModal}>
            x
          </div>

        </ModalHeader>
        <ModalBody>
        <div className="modal-film" >
            <div className="modal-film-item modal-film-item-content">
              <label>Name </label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                name="actor"
              />
            </div>

          </div>
          <div className="modal-film" >
            <div className="modal-film-item modal-film-item-content">
              <label>Price</label>
              <input className="modal-film-item-input"
                type="text"
                value={form.price}
                onChange={(e) => setForm({ ...form, price: e.target.value })}
                name="price"
              />
               <label>vnd</label>
            </div>

          </div>
          <div className="modal-film" >
            <div className="modal-film-item modal-film-item-content">
              <label>description</label>
              {/* <input
                type="text"
                value={form.description}
                name="description"
                onChange={(e) => setForm({ ...form, description: e.target.value })}
              /> */}
              <textarea
                name="description"
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
              />

            </div>

          </div>
          <div className="modal-film" >
            <div className="modal-film-item">
              <label>category</label>
              <select
                aria-label="Default select example"
                value={form.categoryId}
                onChange={(e) => setForm({ ...form, categoryId: e.target.value })}
              >
                {form.categoryAll && form.categoryAll.length > 0 &&
                  form.categoryAll.map((item, i) => {
                    return (
                      <option key={i} value={item.keyMap}>{item.value}</option>
                    )
                  })}

              </select>
            </div>

          </div>
          <div className="modal-film" >
            <div className="modal-film-item  modal-film-item-content2">
              <input id="previewImg"
                type="file"
              //  onChange={(e) => handleOnchangeImg(e)}
                hidden
              />
              <label
                htmlFor="previewImg" className="label-upload1">
                Image
                <img height="30px" alt="" src={upload1} />

              </label>
              <div className="preview-image" onClick={() => this.openPreviewImg()}>
                <Image height="100%;" alt="" src={form.previewUrl} />
              </div>
            </div>

          </div>
          <button
            onClick={() => handleCreateProduct()}
            className="modal-film-btn">Save</button>
          <button
            onClick={props.closeModal}
            className="modal-film-btn btn-modal-cancle " >cancle</button>
        </ModalBody>

      </Modal>

    </>
  );
}

export default ModalFilm;