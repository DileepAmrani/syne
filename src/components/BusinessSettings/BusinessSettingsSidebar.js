import React from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container, Table} from "react-bootstrap";
const BusinessSettingSidebar = () => {
  return <
    Col xs={12} md={2} className="w3-sidebar w3-bar-block bg-blue m-0 p-0 mt-5 pt-5" id="leftsidebar">
            <h3 className="white-heading pb-5 mb-5 sidebar-heading">Business Settings</h3>
            <i className="fas fa-times closer ml-5"></i>

        <Link to="/yourinformation" className="w3-bar-item w3-button link-sidebar">Your Information</Link>
        <Link to="/yourbranding" className="w3-bar-item w3-button link-sidebar">Your Branding</Link>
        <Link to="/taxcodes" className="w3-bar-item w3-button link-sidebar">Tax Codes</Link>
        <Link to="/pdfgeneration" className="w3-bar-item w3-button link-sidebar">PDF Generation Password</Link>
        </Col>

};

export default BusinessSettingSidebar;
