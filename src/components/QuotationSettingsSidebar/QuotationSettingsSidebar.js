import React from "react";
import "./QuotationSettingsSidebar.css";
import { Link } from "react-router-dom";
import { Col, Row, Container, Table} from "react-bootstrap";
const QuotationSettingSidebar = () => {
  return <
  

    Col xs={12} md={2} className="w3-sidebar w3-bar-block bg-blue m-0 p-0 mt-5 pt-5" id="leftsidebar">
            <h3 className="white-heading pb-5 mb-5 sidebar-heading">Quotation Settings</h3>
            <i className="fas fa-times closer ml-5"></i>
        <Link to="/quotationsettings" className="w3-bar-item w3-button link-sidebar">Quotation Defaults</Link>
        <Link to="/quotationcustomdefaultfields" className="w3-bar-item w3-button link-sidebar">Custom Quotation Fields</Link>
        <Link to="/quotationcustomeditfieldslabels" className="w3-bar-item w3-button link-sidebar">Custom Edit Field Lables</Link>
        <Link to="/quotationcustomlineitemfieldslabels" className="w3-bar-item w3-button link-sidebar">Custom Line Item Lables</Link>
        <Link to="/quotationshowhidelistcolumns" className="w3-bar-item w3-button link-sidebar">Show/Hide List Columns</Link>
        <Link to="/quotationshowhideeditfields" className="w3-bar-item w3-button link-sidebar">Show Hide Edit Fields</Link>
        <Link to="/quotationshowhidelineitemcolumns" className="w3-bar-item w3-button link-sidebar">Show Hide Line Item Columns</Link>
        <Link to="/quotationpdf" className="w3-bar-item w3-button link-sidebar">PDF Settings</Link>
        <Link to="#" className="w3-bar-item w3-button link-sidebar">CSV Settings</Link>
        <Link to="/quotationstatuses" className="w3-bar-item w3-button link-sidebar">Statuses</Link>
        </Col>

};

export default QuotationSettingSidebar;
