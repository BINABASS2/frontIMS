import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Asset.css';
import RegisterSupplier from './RegisterSupplier';

const ManageSupplier = ({ onEdit, onDelete, onView }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  // Sample suppliers data (Initially populated with sample data)
  const [supplierList, setSupplierList] = useState([
    {
      id: 1,
      name: 'Supplier A',
      address: '123 Supplier St, City, Country',
      contact: '123-456-7890',
      email: 'contact@supplierA.com',
      serviceDate: '2024-01-15',
    },
    {
      id: 2,
      name: 'Supplier B',
      address: '456 Supplier Ave, City, Country',
      contact: '234-567-8901',
      email: 'contact@supplierB.com',
      serviceDate: '2024-02-20',
    },
    {
      id: 3,
      name: 'Supplier C',
      address: '789 Supplier Blvd, City, Country',
      contact: '345-678-9012',
      email: 'contact@supplierC.com',
      serviceDate: '2024-03-25',
    },
    {
      id: 4,
      name: 'Supplier A',
      address: '123 Supplier St, City, Country',
      contact: '123-456-7890',
      email: 'contact@supplierA.com',
      serviceDate: '2024-01-15',
    },
    {
      id: 5,
      name: 'Supplier B',
      address: '456 Supplier Ave, City, Country',
      contact: '234-567-8901',
      email: 'contact@supplierB.com',
      serviceDate: '2024-02-20',
    },
    {
      id: 6,
      name: 'Supplier C',
      address: '789 Supplier Blvd, City, Country',
      contact: '345-678-9012',
      email: 'contact@supplierC.com',
      serviceDate: '2024-03-25',
    },
    {
      id: 7,
      name: 'Supplier A',
      address: '123 Supplier St, City, Country',
      contact: '123-456-7890',
      email: 'contact@supplierA.com',
      serviceDate: '2024-01-15',
    },
    {
      id: 8,
      name: 'Supplier B',
      address: '456 Supplier Ave, City, Country',
      contact: '234-567-8901',
      email: 'contact@supplierB.com',
      serviceDate: '2024-02-20',
    },
    {
      id: 9,
      name: 'Supplier C',
      address: '789 Supplier Blvd, City, Country',
      contact: '345-678-9012',
      email: 'contact@supplierC.com',
      serviceDate: '2024-03-25',
    },
    {
      id: 10,
      name: 'Supplier A',
      address: '123 Supplier St, City, Country',
      contact: '123-456-7890',
      email: 'contact@supplierA.com',
      serviceDate: '2024-01-15',
    },
    {
      id: 11,
      name: 'Supplier B',
      address: '456 Supplier Ave, City, Country',
      contact: '234-567-8901',
      email: 'contact@supplierB.com',
      serviceDate: '2024-02-20',
    },
    {
      id: 12,
      name: 'Supplier C',
      address: '789 Supplier Blvd, City, Country',
      contact: '345-678-9012',
      email: 'contact@supplierC.com',
      serviceDate: '2024-03-25',
    },
    // Add more suppliers as needed
  ]);

  const handleAddClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  // Define the onSubmit function
  const handleFormSubmit = (newSupplier) => {
    // Add new supplier to the supplier list
    setSupplierList([...supplierList, { ...newSupplier, id: supplierList.length + 1 }]);
    setModalOpen(false); // Close the modal after submission
  };

  return (
    <div className='content'>
      <div className="asset-table-container">
        <h1 className='h1'>Manage Supplier</h1>
        <button className="add-button" onClick={handleAddClick}>ADD</button>
        <hr/>
        <div className="table-wrapper">
        <table className="asset-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Brand Name</th>
              <th>Address</th>
              <th>Contact</th>
              <th>Email</th>
              <th>Service Date</th>
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
                  <td>{supplier.email}</td>
                  <td>{supplier.serviceDate}</td>
                  <td>
                    <button onClick={() => onView(supplier)}>View</button>
                    <button onClick={() => onEdit(supplier)}>Edit</button>
                    {/* <button onClick={() => onDelete(supplier.id)}>Delete</button> */}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
        </div>
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
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onView: PropTypes.func.isRequired,
};

ManageSupplier.defaultProps = {
  supplier: [],
};

export default ManageSupplier;
