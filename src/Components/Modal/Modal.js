import React from 'react';
import './Modal.scss';

const Modal = ({ message, onClose }) => {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        <p>{message}</p>
        <button onClick={onClose} className="modal-button">Close</button>
      </div>
    </div>
  );
};

export default Modal;
