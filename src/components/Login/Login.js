import React, { useState } from "react";
import "./Login.css";
import synelogo from "../../images/syne-logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { Row, Col, Form, Button, FormCheck } from "react-bootstrap";

import { login } from "../../api/auth";
import { useMutation } from "react-query";

import useToastsStore from "../../stores/toasts";

const Login = () => {
  const navigate = useNavigate();
  const { addToast } = useToastsStore();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState({ email: null, password: null });
  const { isLoading, mutate } = useMutation(
    (data) => login(data.email, data.password),
    {
      onSuccess: (loginData) => handleSetToken(loginData),
      onError: (e) => {
        let message;
        const data = e.response.data;
        if (data.error) message = data.error;
        else if (data.email) return setError({ email: data.email[0] });
        else if (data.password) return setError({ password: data.password[0] });
        else message = e.message;
        addToast(message, "danger");
      },
    }
  );
  function handleLogin() {
    navigate("/quotation");
    mutate({ email, password });
    setError({});
  }
  const handleSetToken = (loginData) => {
    localStorage.setItem("token", loginData.data.access_token);
    navigate("/quotation");
  };
  return (
    <>
      <div className="Login-container">
        <Row className="Login-wrapper">
          <Col className="left-side" sm={8} md={8} lg={8}>
            <div className="image-map-Wrapper"></div>
          </Col>
          <Col className="right-side" sm={4} md={2} lg={3}>
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
                  onChange={(e) => setEmail(e.target.value)}
                />
                {error.email && (
                  <>
                    <span class="errspan"></span>
                    <FormCheck className="errorform">{error.email}</FormCheck>
                  </>
                )}
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="login-form-label">Password</Form.Label>
                <Form.Control
                  className="login-form-input"
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                {error.password && (
                  <>
                    <span class="errspan"></span>
                    <FormCheck className="errorform">
                      {error.password}
                    </FormCheck>
                  </>
                )}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Link className="forget-link" to="/forgetpassword">
                  Forget your password?
                </Link>
              </Form.Group>
              <div className="login-submit-btn-div">
                {/* <Link to="/quotation"> */}
                <Button
                  disabled={isLoading}
                  className="login-submit-btn"
                  onClick={() => handleLogin()}
                >
                  {isLoading ? "Loading..." : "Login"}
                </Button>
                {/* </Link> */}
              </div>
              <div className="login-powerd-by">Powerd by UD</div>
            </Form>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Login;
