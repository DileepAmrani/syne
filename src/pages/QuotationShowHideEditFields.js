import React from "react";
import { Col, Row, Container, Table} from "react-bootstrap";
import QuotationSettingsSidebar from "../components/QuotationSettingsSidebar/QuotationSettingsSidebar";
import Navbar from "../components/Navbar/Navbar";
import QuotationShowHideEditFields from "../components/QuotationShowHideEditFields/QuotationShowHideEditFields";
const QuotationShowHideEditFieldsPage = () => {
  return (
    <div>
      <Navbar />
      <Row>
        <QuotationSettingsSidebar />
        <QuotationShowHideEditFields />
      </Row>
      
    </div>
  );
};

export default QuotationShowHideEditFieldsPage;
