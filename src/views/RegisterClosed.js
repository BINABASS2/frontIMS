import React, { useState } from 'react';
import RegisterAsset from './RegisterAsset'; // Adjust the import path as necessary

const RegisterClosed = () => {
  const [isRegisterAssetVisible, setRegisterAssetVisible] = useState(true); // Initially visible

  const handleClose = () => {
    setRegisterAssetVisible(false); // Hide the form when close button is clicked
  };

  return (
    <div>
      {isRegisterAssetVisible ? (
        <RegisterAsset onClose={handleClose} />
      ) : (
        <p>Asset registration has been closed.</p>
      )}
    </div>
  );
};

export default RegisterClosed;
