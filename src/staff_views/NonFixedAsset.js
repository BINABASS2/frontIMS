import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Asset.css';
import Modal from './Modal';  // Import the Modal component
import RegisterAsset from './RegisterAsset';  // Import the RegisterAsset component

const NonFixedAsset = ({ assets, onEdit, onDelete, onView, onAdd }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className='content'>
      <div className="asset-table-container">
          <h1 className='h1'>Non-Fixed Assets</h1>
        <button className="add-button" onClick={handleOpenModal}>ADD</button>
        <hr/>
        <table className="asset-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Type</th>
              <th>Description</th>
              <th>Value</th>
              <th>Purchase Date</th>
              <th>Status</th>
              <th>Supplier</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {assets.length === 0 ? (
              <tr>
                <td colSpan="9" className="no-data">No assets found</td>
              </tr>
            ) : (
              assets.map((asset) => (
                <tr key={asset.id}>
                  <td>{asset.id}</td>
                  <td>{asset.name}</td>
                  <td>{asset.type}</td>
                  <td>{asset.description}</td>
                  <td>{asset.value}</td>
                  <td>{asset.purchaseDate}</td>
                  <td>{asset.status}</td>
                  <td>{asset.appreciation}</td>
                  <td>
                    <button onClick={() => onView(asset)}>View</button>
                    <button onClick={() => onEdit(asset)}>Edit</button>
                    <button onClick={() => onDelete(asset.id)}>Delete</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <RegisterAsset />
      </Modal>
    </div>
  );
};

NonFixedAsset.propTypes = {
  assets: PropTypes.array,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onView: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
};

NonFixedAsset.defaultProps = {
  assets: [],
};

export default NonFixedAsset;
