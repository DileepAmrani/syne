import React from "react";
import "./ForgetPassword.css";
import synelogo from "../../images/syne-logo.svg";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
const ForgetPassword = () => {
  return (
    <>
      <div className="Login-container">
        <Row className="Login-wrapper">
          <Col className="left-side" sm={8} md={4} lg={8}>
            <div className="image-map-Wrapper"></div>
          </Col>
          <Col className="forget-right-side" sm={4} md={2} lg={3}>
            <div className="Logo-Wrapper">
              <img alt="notfound" src={synelogo} className="syne-Logo-image" />
            </div>
            <Form className="login-form">
              <Form.Group
                className="mb-3 login-form-group-input"
                controlId="formBasicEmail"
              >
                <Form.Label className="login-form-label">
                  Email/Username
                </Form.Label>
                <Form.Control
                  className="login-form-input"
                  type="email"
                  placeholder="Email/Username"
                />
              </Form.Group>

              <div className="login-submit-btn-div">
                <Button className="reset-submit-btn " type="submit">
                  Send Reset Link
                </Button>
              </div>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Link className="forget-password-link" to="/">
                  &#60; Back to Login Page
                </Link>
              </Form.Group>
              <div className="login-powerd-by">Powerd by UD</div>
            </Form>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default ForgetPassword;
