import React, { useState } from "react";
import './RegisterStaff.css'
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";

function RegisterStaff({ onSubmit }) {
  const [formData, setFormData] = useState({
    firstNames: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    role: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="content">
      <Row>
        <Col md="12"> 
              <h5 className="title">New Staff</h5>
          <Card>
            <CardBody>
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <label>First Names</label>
                      <Input
                        name="firstNames"
                        value={formData.firstNames}
                        onChange={handleChange}
                        placeholder="First Names"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <label>Last Name</label>
                      <Input
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Last Name"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <label>Username</label>
                      <Input
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        placeholder="Username"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <label>Email</label>
                      <Input
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        type="email"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <label>Password</label>
                      <Input
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Password"
                        type="password"
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <label>Role</label>
                      <Input
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        placeholder="Role"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                <Col md="6">
                    <FormGroup>
                      <label>Registered Date</label>
                      <Input
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        placeholder="Date"
                        type="date"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Button className="btn-fill" color="primary" type="submit">
                  Save
                </Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default RegisterStaff;
