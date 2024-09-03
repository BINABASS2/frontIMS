import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Asset.css';
import RegisterStaff from './RegisterStaff';  // Corrected the import path

const ManageStaff = ({ staffs, onEdit, onDelete, onView }) => {
  const [isModalOpen, setModalOpen] = useState(false);  // State to manage modal visibility

  // Function to open the modal
  const handleAddClick = () => {
    setModalOpen(true);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  // Ensure staff is always an array
  const staffList = Array.isArray(staffs) ? staffs : [];

  return (
    <div className='content'>
      <div className="asset-table-container">
        <div className="header">
          <h1 className='h1'>STAFFS</h1>
        </div>
        <button className="add-button" onClick={handleAddClick}>ADD</button>
        <hr/>
        <table className="asset-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>First Names</th>
              <th>Last Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Password</th>
              <th>Contact</th>
              <th>Role</th>
              <th>Registered Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {staffList.length === 0 ? (
              <tr>
                <td colSpan="10" className="no-data">No staffs found</td>
              </tr>
            ) : (
              staffList.map((staff) => (
                <tr key={staff.id}>
                  <td>{staff.id}</td>
                  <td>{staff.firstNames}</td>
                  <td>{staff.lastName}</td>
                  <td>{staff.username}</td>
                  <td>{staff.email}</td>
                  <td>{staff.password}</td>
                  <td>{staff.role}</td>
                  <td>{staff.registeredDate}</td>
                  <td>
                    <button onClick={() => onView(staff)}>View</button>
                    <button onClick={() => onEdit(staff)}>Edit</button>
                    <button onClick={() => onDelete(staff.id)}>Delete</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Conditionally render the RegisterStaff modal */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <RegisterStaff />
          </div>
        </div>
      )}
    </div>
  );
};

// Define PropTypes for the component
ManageStaff.propTypes = {
  staffs: PropTypes.array,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onView: PropTypes.func.isRequired,
};

// Set default props
ManageStaff.defaultProps = {
  staffs: [],
};

export default ManageStaff;
