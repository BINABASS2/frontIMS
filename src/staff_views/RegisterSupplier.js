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

function RegisterSupplier({ onSubmit }) {
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
              <h5 className="title">New Supplier</h5>
          <Card>
            <CardBody>
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <label>Brand Name</label>
                      <Input
                        name="brand_name"
                        value={formData.brandName}
                        onChange={handleChange}
                        placeholder="Brand Name"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <label>Address</label>
                      <Input
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Address"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <label>Contact</label>
                      <Input
                        name="contact"
                        value={formData.contact}
                        onChange={handleChange}
                        placeholder="Contact"
                        type="number"
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
                      <label>Service Date</label>
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

export default RegisterSupplier;
