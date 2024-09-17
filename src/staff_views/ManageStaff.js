import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Asset.css';
import RegisterStaff from './RegisterStaff';

const ManageStaff = ({ onEdit, onDelete, onView }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  // Sample staff data (Initially populated with sample data)
  const [staffList, setStaffList] = useState([
    {
      id: 1,
      fullName: 'Da Mam',
      contact: "0628622621",
      email: 'john.doe@example.com',
      password: 'password123',
      role: 'Secretary',
      registeredDate: '2024-01-15',
    },
    {
      id: 2,
      fullName: 'Rashid',
      contact: "0618622621",
      email: 'jane.smith@example.com',
      password: 'password456',
      role: 'Asset Manager',
      registeredDate: '2024-02-20',
    },
    {
      id: 3,
      fullName: 'Laupaa',
      contact: "0718622621",
      email: 'emily.johnson@example.com',
      password: 'password789',
      role: 'IT Support',
      registeredDate: '2024-03-25',
    },
    {
      id: 4,
      fullName: 'Abdibeker',
      contact: "0718622621",
      email: 'emily.johnson@example.com',
      password: 'password789',
      role: 'Senior Developer',
      registeredDate: '2024-03-25',
    },
    {
      id: 5,
      fullName: 'Ridh-one',
      contact: "0718622621",
      email: 'emily.johnson@example.com',
      password: 'mr-password',
      role: 'Senior Developer',
      registeredDate: '2024-03-25',
    },
    {
      id: 6,
      fullName: 'Salma',
      contact: "0718622621",
      email: 'emily.johnson@example.com',
      password: 'password789',
      role: 'Coordinator',
      registeredDate: '2024-03-25',
    },
    {
      id: 7,
      fullName: 'Umama',
      contact: "0718622621",
      email: 'emily.johnson@example.com',
      password: 'password789',
      role: 'Senior Developer',
      registeredDate: '2024-03-25',
    },
    {
      id: 8,
      fullName: 'Hemed',
      contact: "0718622621",
      email: 'emily.johnson@example.com',
      password: 'password789',
      role: 'Senior Developer',
      registeredDate: '2024-03-25',
    },
    {
      id: 9,
      fullName: 'Ibrahim',
      contact: "0718622621",
      email: 'emily.johnson@example.com',
      password: 'zarau-mbayaaa',
      role: 'Junior Developer',
      registeredDate: '2024-03-25',
    },
    {
      id: 10,
      fullName: 'Hafwa',
      contact: "0718622621",
      email: 'emily.johnson@example.com',
      password: 'password789',
      role: 'Junior Developer',
      registeredDate: '2024-03-25',
    },
    {
      id: 11,
      fullName: 'Suleiman',
      contact: "0718622621",
      email: 'emily.johnson@example.com',
      password: 'debuger',
      role: 'Junior Developer',
      registeredDate: '2024-03-25',
    },
    {
      id: 12,
      fullName: 'Mwitax',
      contact: "0718622621",
      email: 'emily.johnson@example.com',
      password: 'laupaaa',
      role: 'Junior Developer',
      registeredDate: '2024-03-25',
    },
    {
      id: 13,
      fullName: 'Abdul-latif',
      contact: "0718622621",
      email: 'emily.johnson@example.com',
      password: 'bin@b@ss',
      role: 'Junior Developer',
      registeredDate: '2024-03-25',
    },
    // Add more staff as needed
  ]);

  const handleAddClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  // Define the onSubmit function
  const handleFormSubmit = (newStaff) => {
    setStaffList([...staffList, { ...newStaff, id: staffList.length + 1 }]);
    setModalOpen(false); // Close the modal after submission
  };

  return (
    <div className='content'>
      <div className="asset-table-container">
        <h1 className='h1'>Manage Staff</h1>
        <button className="add-button" onClick={handleAddClick}>ADD</button>
        <hr />
        <div className="table-wrapper">
           <table className="asset-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Full Name</th>
                <th>Contact</th>
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
                  <td colSpan="8" className="no-data">No staff found</td>
                </tr>
              ) : (
                staffList.map((staff) => (
                  <tr key={staff.id}>
                    <td>{staff.id}</td>
                    <td>{staff.fullName}</td>
                    <td>{staff.contact}</td>
                    <td>{staff.email}</td>
                    <td>{staff.password}</td>
                    <td>{staff.role}</td>
                    <td>{staff.registeredDate}</td>
                    <td>
                      <button onClick={() => onView(staff)}>View</button>
                      <button onClick={() => onEdit(staff)}>Edit</button>
                      {/* <button onClick={() => onDelete(staff.id)}>Delete</button> */}
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
};

ManageStaff.defaultProps = {
  staffs: [],
};

export default ManageStaff;
