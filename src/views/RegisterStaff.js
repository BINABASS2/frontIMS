import React, { useState } from 'react';
import './RegisterAsset.css';
import { Button, Card, CardBody, FormGroup, Form, Input, Row, Col } from 'reactstrap';

const RegisterAsset = ({ onClose, onRegister }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    role: "",
    registeredDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(formData); // Send the form data to the parent component
    setFormData({
      fullName: "",
      email: "",
      password: "",
      role: "",
      registeredDate: "",
    });
    onClose();  // Close the modal after submission
  };

  return (
    <div className="content">
      <h5 className="title">New Staff</h5>
      <Card>
        <CardBody>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md="6">
                <FormGroup>
                  <label>Full Name</label>
                  <Input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
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
                  <label>Password</label>
                  <Input
                    type='password'
                    name="password"
                    placeholder="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <label>Role</label>
                  <Input
                    type="text"
                    name="role"
                    placeholder="Role"
                    value={formData.role}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <label>Registered At</label>
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
