import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Asset.css';
import RegisterSupplier from './RegisterSupplier';

const ManageSupplier = ({ supplier, onEdit, onDelete, onView }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [supplierList, setSupplierList] = useState(Array.isArray(supplier) ? supplier : []);

  const handleAddClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  // Define the onSubmit function
  const handleFormSubmit = (newSupplier) => {
    // Add new staff to the staff list
    setSupplierList([...supplierList, { ...newSupplier, id: supplierList.length + 1 }]);
    setModalOpen(false); // Close the modal after submission
  };

  return (
    <div className='content'>
      <div className="asset-table-container">
        <h1 className='h1'>SUPPLIERS</h1>
        <button className="add-button" onClick={handleAddClick}>ADD</button>
        <hr/>
        <table className="asset-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Brand name</th>
              <th>Address</th>
              <th>Contact</th>
              <th>Email</th>
              <th>Service date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {supplierList.length === 0 ? (
              <tr>
                <td colSpan="7" className="no-data">No supplier found</td>
              </tr>
            ) : (
              supplierList.map((supplier) => (
                <tr key={supplier.id}>
                  <td>{supplier.id}</td>
                  <td>{supplier.name}</td>
                  <td>{supplier.address}</td>
                  <td>{supplier.contact}</td>
                  <td>{supplier.serviceDate}</td>
                  <td>{supplier.email}</td>
                  <td>
                    <button onClick={() => onView(supplier)}>View</button>
                    <button onClick={() => onEdit(supplier)}>Edit</button>
                    <button onClick={() => onDelete(supplier.id)}>Delete</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-button" onClick={handleCloseModal}>&times;</button>
            <RegisterSupplier onSubmit={handleFormSubmit} onClose={handleCloseModal} />
          </div>
        </div>
      )}
    </div>
  );
};

ManageSupplier.propTypes = {
  supplier: PropTypes.array,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onView: PropTypes.func.isRequired,
};

ManageSupplier.defaultProps = {
  supplier: [],
};

export default ManageSupplier;
