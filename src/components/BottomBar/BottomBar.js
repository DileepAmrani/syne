import React from "react";
import "./BottomBar.css";
import { Container, Row, Col, Form, Button, FormCheck } from "react-bootstrap";


const BottomBar = () => {
  return (
    <>
    <div className="wrapper-bottom">
        <Row className="bottom-row-wrapper">
            <Col className="bottom-left-side" xs={8} md={6} lg={6}>
              <span className="bottom-left-side">Company Name - 2022</span>
            </Col>
            <Col className="bottom-right-side" lg={6} md={6} xs={4}  >
              <span className="float-right">UD</span>
            </Col>
        </Row> 
    </div>
    </>
  );
};

export default BottomBar;
