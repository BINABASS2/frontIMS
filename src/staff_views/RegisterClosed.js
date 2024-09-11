import React, { useState } from 'react';
import RegisterAsset from './RegisterAsset';

const ParentComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleRegister = (formData) => {
    console.log('Asset Registered:', formData);
    // Handle the registration logic
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {isModalOpen && (
        <RegisterAsset onClose={handleClose} onRegister={handleRegister} />
      )}
      {!isModalOpen && <button onClick={() => setIsModalOpen(true)}>Open Register Asset</button>}
    </div>
  );
};

export default ParentComponent;
