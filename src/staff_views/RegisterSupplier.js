import React, { useState } from 'react';
import './RegisterAsset.css';
import { Button, Card, CardBody, FormGroup, Form, Input, Row, Col } from 'reactstrap';

const RegisterAsset = ({ onClose, onRegister }) => {
  const [formData, setFormData] = useState({
    brandName: "",
    address: "",
    contact: "",
    email: "",
    serviceDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(formData); // Send the form data to the parent component
    setFormData({
      brandName: "",
      address: "",
      contact: "",
      email: "",
      serviceDate: "",
    });
    onClose();  // Close the modal after submission
  };

  return (
    <div className="content">
      <h5 className="title">New Supplier</h5>
      <Card>
        <CardBody>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md="6">
                <FormGroup>
                  <label>Brand Name</label>
                  <Input
                    type="text"
                    name="brandName"
                    placeholder="Brand Name"
                    value={formData.brandName}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <label>Address</label>
                  <Input
                    name="address"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <label>Contact</label>
                  <Input
                    name="contact"
                    placeholder="Contact"
                    value={formData.contact}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <label>Email</label>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <label>Supply At</label>
                  <Input
                    type="date"
                    name="date"
                    placeholder="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
              </Col>
            </Row>
            <Button className="btn-fill" color="primary" type="submit">
              Register
            </Button>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
};

export default RegisterAsset;
