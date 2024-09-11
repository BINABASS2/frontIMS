import React from 'react';
import './ProfilePage.css'; // Import CSS for styling

const Profile = ({ user }) => {
  return (
    <div className="profile-container">
      <h1>User Profile</h1>
      <div className="profile-card">
        <div className="profile-item">
          <label>Full Name:</label>
          <span>{user.fullName}</span>
        </div>
        <div className="profile-item">
          <label>Email:</label>
          <span>{user.email}</span>
        </div>
        <div className="profile-item">
          <label>Role:</label>
          <span>{user.role}</span>
        </div>
        <div className="profile-item">
          <label>Registered At:</label>
          <span>{user.date}</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
