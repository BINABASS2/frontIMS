import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Asset.css';
import RegisterStaff from './RegisterStaff';

const ManageStaff = ({ staffs, onEdit, onDelete, onView }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [staffList, setStaffList] = useState(Array.isArray(staffs) ? staffs : []);

  const handleAddClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  // Define the onSubmit function
  const handleFormSubmit = (newStaff) => {
    // Add new staff to the staff list
    setStaffList([...staffList, { ...newStaff, id: staffList.length + 1 }]);
    setModalOpen(false); // Close the modal after submission
  };

  return (
    <div className='content'>
      <div className="asset-table-container">
        <h1 className='h1'>Manage Staff</h1>
        <button className="add-button" onClick={handleAddClick}>ADD</button>
        <hr/>
        <table className="asset-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Role</th>
              <th>Registered Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {staffList.length === 0 ? (
              <tr>
                <td colSpan="7" className="no-data">No staffs found</td>
              </tr>
            ) : (
              staffList.map((staff) => (
                <tr key={staff.id}>
                  <td>{staff.id}</td>
                  <td>{staff.fullName}</td>
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

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-button" onClick={handleCloseModal}>&times;</button>
            <RegisterStaff onSubmit={handleFormSubmit} onClose={handleCloseModal} />
          </div>
        </div>
      )}
    </div>
  );
};

ManageStaff.propTypes = {
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onView: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
};


ManageStaff.defaultProps = {
  staffs: [],
};

export default ManageStaff;
