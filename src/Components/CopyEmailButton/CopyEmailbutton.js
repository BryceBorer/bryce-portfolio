import React, { useState } from 'react';
import './CopyEmailButton.scss';

import emailIcon from '../../assets/icons/email_icon.svg';
import Modal from '../Modal/Modal';

const CopyEmailButton = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const email = 'bryce.borer@gmail.com';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setModalMessage(`Copied to clipboard: ${email}`);
      setShowModal(true);
    } catch (err) {
      console.error('Failed to copy: ', err);
      setModalMessage('Failed to copy email address');
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setModalMessage('');
  };

  return (
    <div className="copy-email-container">
      <button onClick={handleCopy} className="copy-email-button">
        <img src={emailIcon} alt="Email Icon" className="email-icon" />
      </button>
      {showModal && <Modal message={modalMessage} onClose={closeModal} />}
    </div>
  );
};

export default CopyEmailButton;