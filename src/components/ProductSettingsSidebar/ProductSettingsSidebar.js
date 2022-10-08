import React from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container, Table} from "react-bootstrap";
const QuotationSettingSidebar = () => {
  return <
    Col xs={12} md={2} className="w3-sidebar w3-bar-block bg-blue m-0 p-0 mt-5 pt-5" id="leftsidebar">
            <h3 className="white-heading pb-5 mb-5 sidebar-heading">Product Settings</h3>
            <i className="fas fa-times closer ml-5"></i>

        <Link to="/productshowhidelistcolumns" className="w3-bar-item w3-button link-sidebar">Show/Hide List Columns</Link>
        <Link to="/productshowhideeditfields" className="w3-bar-item w3-button link-sidebar">Show Hide Edit Fields</Link>
        <Link to="/productshowhidepanelcolumns" className="w3-bar-item w3-button link-sidebar">Show Hide Add Panels Columns</Link>
        <Link to="/productcustomdefaultfields" className="w3-bar-item w3-button link-sidebar">Custom Item Fields</Link>
        </Col>

};

export default QuotationSettingSidebar;
