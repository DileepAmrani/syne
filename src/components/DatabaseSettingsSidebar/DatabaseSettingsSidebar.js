import React from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container, Table} from "react-bootstrap";
const QuotationSettingSidebar = () => {
  return <
    Col xs={12} md={2} className="w3-sidebar w3-bar-block bg-blue m-0 p-0 mt-5 pt-5" id="leftsidebar">
            <h3 className="white-heading pb-5 mb-5 sidebar-heading">Database Settings</h3>
            <i className="fas fa-times closer ml-5"></i>

        <Link to="/databaseshowhidelistcolumns" className="w3-bar-item w3-button link-sidebar">Show/Hide Company List Columns</Link>
        <Link to="/databasecontactshowhidelistcolumns" className="w3-bar-item w3-button link-sidebar">Show/Hide Contact List Columns</Link>
        <Link to="/databasecompanycustomfieldspage" className="w3-bar-item w3-button link-sidebar">Custom Company Fields</Link>
        <Link to="/databasecontactcustomfieldspage" className="w3-bar-item w3-button link-sidebar">Custom Contact Fields</Link>
        <Link to="/databasecompanyshowhideeditfields" className="w3-bar-item w3-button link-sidebar">Show/Hide Company Edit Fields</Link>
        <Link to="/databasecontactshowhideeditfields" className="w3-bar-item w3-button link-sidebar">Show/Hide Contact Edit Fields</Link>
        <Link to="/databasecompanytags" className="w3-bar-item w3-button link-sidebar">Company Tags</Link>
        <Link to="/databasecontacttags" className="w3-bar-item w3-button link-sidebar">Contact Tags</Link>
        <Link to="/databasecompanytypes" className="w3-bar-item w3-button link-sidebar">Company Types</Link>
        </Col>

};

export default QuotationSettingSidebar;
