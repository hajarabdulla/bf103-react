import React from "react";

const Modal = ({ setOpenModal }) => {
  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <span className="close" onClick={() => setOpenModal(false)}>
          &times;
        </span>
        <p>Some text in the Modal..</p>
      </div>
    </div>
  );
};

export default Modal;
