import React, { useState } from 'react';
import './RegisterAsset.css';

const RegisterAsset = ({ onClose, onRegister }) => {
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    description: "",
    value: "",
    purchaseDate: "",
    status: "",
    appreciation: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(formData); // Send the form data to the parent component
    setFormData({
      name: "",
      type: "",
      description: "",
      value: "",
      purchaseDate: "",
      status: "",
      appreciation: ""
    });
    onClose();  // Close the modal after submission
  };

  return (
    <div className="asset-form-container">
      <div className="close-button" onClick={onClose}>✖</div>  {/* Close button */}
      <form className="asset-form">
        <h2>Register Asset</h2>
        {/* Form fields */}
        <div className="form-group">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <select
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select type</option>
            <option value="Fixed">Fixed</option>
            <option value="Non-Fixed">Non-Fixed</option>
          </select>
        </div>
        <div className="form-group">
          <input
            type="text"
            id="description"
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            id="value"
            name="value"
            placeholder="Value"
            value={formData.value}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="date"
            id="purchaseDate"
            name="purchaseDate"
            placeholder="Purchase Date"
            value={formData.purchaseDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            id="status"
            name="status"
            placeholder="Status"
            value={formData.status}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            id="supplier"
            name="supplier"
            placeholder="Supplier"
            value={formData.appreciation}
            onChange={handleChange}
            required
          />
        </div>
        <button className="submit" type="submit" onSubmit={handleSubmit}>Register</button>
      </form>
    </div>
  );
};

export default RegisterAsset;
