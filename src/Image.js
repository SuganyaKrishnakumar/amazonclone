import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import "./Home.css";
import image from "./Chair.jpg";
import {
  Modal,
  ModalHeader,
  ModalFooter,
  Button
} from 'reactstrap';
import './Image.css'

function Image() {
  let subtitle;
  
  const [otp, setOtp] = useState('');
  const [infoMsgState, setInfoMsg] = useState('')
  const [modal, setModal] = useState(false);
  const [backdrop, setBackdrop] = useState("static");
  const [clearOtp, setClearOtp] = useState(false)

  function openModal() {
    setModal(true);
  }
  const toggleXButtonClicked = () => {
   // onClickXButton();
   setModal(false);
    setInfoMsg('');
    setOtp('')
}
  const toggle = () => {
    setModal(!modal);
}

  // function afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   subtitle.style.color = "#f00";
  // }

  // function closeModal() {
  //   setIsOpen(false);
  // }
  // const onImageClicked = () =>{
  //     alert('clicked')
  //     return (
  //         <div class="Sirv" data-src="https://perygile.sirv.com/Spins/Egg-Chair/Egg%20Chair%20Anniversary.spin"></div>
  //     )
  // }
  return (
    <div>
      <div className="header">
        <Link to="/">
          <img
            className="header__logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt=""
          />
          {/* Commerce */}
        </Link>
      </div>
      <div className="home">
        <div className="home__container">
          <img
            src="https://m.media-amazon.com/images/I/61CiqVTRBEL._SX3000_.jpg"
            className="home__img"
            alt=""
          />
        </div>
        <div className="home__row">
        <div className="product">
          <div className="product__info">
            <p>Rotating Chair: MBTC Rapid High Bar Chair/Kitchen Stool in Orange</p>
          </div>
          <img src={image} alt="" className="product__img" />

          <button className="product__button" onClick={openModal}>
            360 View
          </button>
        </div>
      </div>
      </div>
      
      
      <div style={{display:modal?'block':'none'}} className="modal">

     
      <div className="modal-content">
        <span className="close" onClick={toggleXButtonClicked}>&times;</span>
        <p>360 view of an image</p>

        <div
                    class="Sirv"
                    data-src="https://perygile.sirv.com/Spins/Egg-Chair/Egg%20Chair%20Anniversary.spin"
                    ></div>
      </div>

    </div>
      
    </div>
  );
}

export default Image;
